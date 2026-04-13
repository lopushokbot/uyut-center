"use client";

import ContactForm from "./ContactForm";

export default function CallbackModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">
          ✕
        </button>
        <div className="section-label">Обратная связь</div>
        <h3 className="section-title">Заказать звонок</h3>
        <ContactForm
          preset="callback"
          source="callback_modal"
          submitFullWidth
        />
      </div>
    </div>
  );
}
