import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CALLBACK_TO = process.env.CALLBACK_TO || "yut.klintsi@yandex.ru";

function escapeHtml(value) {
  return value
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
    throw new Error("SMTP credentials are not configured.");
  }

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  };
}

export async function POST(request) {
  try {
    const {
      preset = "callback",
      source = "site",
      name = "",
      phone = "",
      email = "",
      comment = "",
      message = "",
    } = await request.json();

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

    const transporter = nodemailer.createTransport(getTransportConfig());
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const subject =
      preset === "contact"
        ? "Новое сообщение с формы обратной связи"
        : "Новая заявка на обратный звонок с сайта";
    const textLines = [
      preset === "contact"
        ? "Новое сообщение с формы обратной связи"
        : "Новая заявка на обратный звонок",
      "",
      `Источник: ${source}`,
      `Имя: ${cleanName}`,
      `Телефон: ${cleanPhone}`,
    ];

    if (cleanEmail) {
      textLines.push(`Email: ${cleanEmail}`);
    }

    if (cleanComment || cleanMessage) {
      textLines.push(
        `${preset === "contact" ? "Сообщение" : "Комментарий"}: ${
          cleanMessage || cleanComment
        }`,
      );
    }

    await transporter.sendMail({
      from,
      to: CALLBACK_TO,
      subject,
      replyTo: cleanEmail || process.env.SMTP_USER,
      text: textLines.join("\n"),
      html: `
        <h2>${escapeHtml(
          preset === "contact"
            ? "Новое сообщение с формы обратной связи"
            : "Новая заявка на обратный звонок",
        )}</h2>
        <p><strong>Источник:</strong> ${escapeHtml(source)}</p>
        <p><strong>Имя:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(cleanPhone)}</p>
        ${
          cleanEmail
            ? `<p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>`
            : ""
        }
        <p><strong>${
          preset === "contact" ? "Сообщение" : "Комментарий"
        }:</strong> ${escapeHtml(
          cleanMessage || cleanComment || "Не указан",
        )}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Callback email error", error);

    return NextResponse.json(
      { error: "Ошибка отправки. Проверьте настройки почты на сервере." },
      { status: 500 },
    );
  }
}
