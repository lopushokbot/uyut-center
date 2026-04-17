import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALLBACK_TO = process.env.CALLBACK_TO;

const MAX_LENGTHS = {
  preset: 20,
  source: 80,
  name: 120,
  phone: 40,
  email: 200,
  comment: 2000,
  message: 2000,
  website: 200, // honeypot — should be empty
};

const PHONE_RE = /^[\d+()\s-]{6,40}$/;
const EMAIL_RE = /^[^\s@,<>"]+@[^\s@,<>"]+\.[^\s@,<>"]+$/;
const ALLOWED_PRESETS = new Set(["callback", "contact"]);

// In-memory rate limit: 5 requests / 60s per IP. Not shared across
// serverless instances, but covers the common single-IP flood scenario.
const RATE_BUCKETS = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function allowRequest(ip) {
  if (!ip) return true; // fail open if we can't identify the client
  const now = Date.now();
  let bucket = RATE_BUCKETS.get(ip);

  if (!bucket || now > bucket.reset) {
    bucket = { count: 0, reset: now + RATE_WINDOW_MS };
    RATE_BUCKETS.set(ip, bucket);
  }

  bucket.count += 1;

  // Occasional cleanup to avoid unbounded growth
  if (RATE_BUCKETS.size > 5000) {
    for (const [key, value] of RATE_BUCKETS.entries()) {
      if (now > value.reset) RATE_BUCKETS.delete(key);
    }
  }

  return bucket.count <= RATE_LIMIT;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST || "smtp.yandex.ru";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = `${process.env.SMTP_SECURE || "true"}` === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return null;
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (!allowRequest(ip)) {
    return NextResponse.json(
      { error: "Слишком много запросов. Попробуйте через минуту." },
      { status: 429 },
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Неверный формат запроса." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10_000) {
    return NextResponse.json(
      { error: "Слишком большой запрос." },
      { status: 413 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный JSON." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Некорректные данные." },
      { status: 400 },
    );
  }

  const {
    preset = "callback",
    source = "site",
    name = "",
    phone = "",
    email = "",
    comment = "",
    message = "",
    website = "", // honeypot
  } = body;

  // Honeypot: bots fill hidden fields, real users don't
  if (typeof website === "string" && website.trim() !== "") {
    // Pretend success so bots don't learn they were caught
    return NextResponse.json({ ok: true });
  }

  // Type + length validation
  for (const [key, value] of Object.entries({
    preset,
    source,
    name,
    phone,
    email,
    comment,
    message,
    website,
  })) {
    if (typeof value !== "string") {
      return NextResponse.json(
        { error: "Некорректные данные." },
        { status: 400 },
      );
    }
    if (value.length > MAX_LENGTHS[key]) {
      return NextResponse.json(
        { error: "Одно из полей слишком длинное." },
        { status: 400 },
      );
    }
  }

  const cleanPreset = ALLOWED_PRESETS.has(preset) ? preset : "callback";
  const cleanSource = source.trim().slice(0, MAX_LENGTHS.source) || "site";
  const cleanName = name.trim();
  const cleanPhone = phone.trim();
  const cleanEmail = email.trim();
  const cleanComment = comment.trim();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanPhone) {
    return NextResponse.json(
      { error: "Имя и телефон обязательны." },
      { status: 400 },
    );
  }

  if (!PHONE_RE.test(cleanPhone)) {
    return NextResponse.json(
      { error: "Некорректный номер телефона." },
      { status: 400 },
    );
  }

  const safeReplyTo =
    cleanEmail && EMAIL_RE.test(cleanEmail) ? cleanEmail : undefined;

  if (cleanEmail && !safeReplyTo) {
    return NextResponse.json(
      { error: "Некорректный email." },
      { status: 400 },
    );
  }

  if (!CALLBACK_TO) {
    console.error("Callback endpoint: CALLBACK_TO env var is not set");
    return NextResponse.json(
      { error: "Сервис временно недоступен." },
      { status: 503 },
    );
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport(getTransportConfig());
  } catch (error) {
    console.error("Callback endpoint: SMTP config error", error);
    return NextResponse.json(
      { error: "Сервис временно недоступен." },
      { status: 503 },
    );
  }

  const subject =
    cleanPreset === "contact"
      ? "Новое сообщение с формы обратной связи"
      : "Новая заявка на обратный звонок с сайта";

  const textLines = [
    subject,
    "",
    `Источник: ${cleanSource}`,
    `Имя: ${cleanName}`,
    `Телефон: ${cleanPhone}`,
  ];

  if (cleanEmail) textLines.push(`Email: ${cleanEmail}`);
  if (cleanComment || cleanMessage) {
    textLines.push(
      `${cleanPreset === "contact" ? "Сообщение" : "Комментарий"}: ${
        cleanMessage || cleanComment
      }`,
    );
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: CALLBACK_TO,
      subject,
      replyTo: safeReplyTo,
      text: textLines.join("\n"),
      html: `
        <h2>${escapeHtml(subject)}</h2>
        <p><strong>Источник:</strong> ${escapeHtml(cleanSource)}</p>
        <p><strong>Имя:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(cleanPhone)}</p>
        ${
          cleanEmail
            ? `<p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>`
            : ""
        }
        <p><strong>${
          cleanPreset === "contact" ? "Сообщение" : "Комментарий"
        }:</strong> ${escapeHtml(
          cleanMessage || cleanComment || "Не указан",
        )}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Callback endpoint: send failure", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Позвоните или напишите напрямую." },
      { status: 502 },
    );
  }
}
