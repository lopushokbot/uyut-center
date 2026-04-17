"use client";

import { useState } from "react";

const HONEYPOT_STYLE = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  opacity: 0,
  pointerEvents: "none",
};

const FORM_PRESETS = {
  callback: {
    title: "Заказать звонок",
    submitLabel: "Отправить",
    successMessage: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Ваше имя",
        autoComplete: "name",
        required: true,
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Номер телефона",
        autoComplete: "tel",
        required: true,
      },
      {
        name: "comment",
        type: "text",
        placeholder: "Комментарий (необязательно)",
        required: false,
      },
    ],
  },
  contact: {
    title: "Форма обратной связи",
    submitLabel: "Отправить",
    successMessage: "Сообщение отправлено. Мы ответим вам в ближайшее время.",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Имя",
        autoComplete: "name",
        required: true,
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Телефон",
        autoComplete: "tel",
        required: true,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        autoComplete: "email",
        required: false,
      },
      {
        name: "message",
        type: "textarea",
        placeholder: "Комментарий",
        required: false,
      },
    ],
  },
};

function buildInitialState(fields) {
  return fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
}

export default function ContactForm({
  preset = "contact",
  source = "site",
  className = "contact-form",
  submitClassName = "contact-submit",
  submitFullWidth = false,
  onSuccess,
}) {
  const config = FORM_PRESETS[preset] || FORM_PRESETS.contact;
  const [formData, setFormData] = useState(() => buildInitialState(config.fields));
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const hasMissingRequiredField = config.fields.some(
      (field) => field.required && !`${formData[field.name] || ""}`.trim(),
    );

    if (hasMissingRequiredField) {
      setStatus("error");
      setMessage("Заполните обязательные поля.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preset,
          source,
          website: honeypot,
          ...Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, value.trim()]),
          ),
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Не удалось отправить форму.");
      }

      setStatus("success");
      setMessage(config.successMessage);
      setFormData(buildInitialState(config.fields));

      if (onSuccess) {
        onSuccess(payload);
      }
    } catch (error) {
      setStatus("error");
      const serverMessage = typeof error?.message === "string" ? error.message : "";
      const useServer =
        serverMessage &&
        serverMessage !== "Не удалось отправить форму." &&
        serverMessage.length < 200;
      setMessage(
        useServer
          ? serverMessage
          : "Не удалось отправить форму. Позвоните +7 (930) 722-48-88 или напишите на yut.klintsi@yandex.ru — ответим быстро.",
      );
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div aria-hidden="true" style={HONEYPOT_STYLE}>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>
      {config.fields.map((field) =>
        field.type === "textarea" ? (
          <textarea
            key={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            autoComplete={field.autoComplete}
            disabled={status === "submitting"}
          />
        ) : (
          <input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            autoComplete={field.autoComplete}
            disabled={status === "submitting"}
          />
        ),
      )}

      <button
        className={submitClassName}
        style={submitFullWidth ? { width: "100%", textAlign: "center" } : undefined}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Отправка..." : config.submitLabel}
      </button>

      {message ? (
        <p
          className={`form-status-message ${
            status === "success" ? "is-success" : "is-error"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
