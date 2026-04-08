export default function CallbackModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="section-label">Обратная связь</div>
        <h3 className="section-title">Заказать звонок</h3>
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Номер телефона" />
        <input type="text" placeholder="Комментарий (необязательно)" />
        <button
          className="contact-submit"
          style={{ width: "100%", textAlign: "center" }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
