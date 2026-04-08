export default function ContactsSection() {
  return (
    <>
      <section className="fade-section" id="contacts">
        <div className="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6b5e6c3c3f2a4e&source=constructor&ll=32.238888%2C52.757778&z=16&pt=32.238888%2C52.757778%2Cpm2rdm"
            title="Гостиница Уют на карте"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="section fade-section">
        <div className="contacts-grid">
          <div>
            <div className="section-label">Свяжитесь с нами</div>
            <h2 className="section-title">Контакты</h2>
            <div className="gold-line" />
            <div className="contact-item">
              <div className="contact-label">Адрес</div>
              <div className="contact-value">г. Клинцы, ул. К. Маркса, д. 1</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Телефон</div>
              <div className="contact-value">
                <a href="tel:+79307224888">+7 (930) 722-48-88</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">
                <a href="mailto:yut.klintsi@yandex.ru">yut.klintsi@yandex.ru</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Стойка регистрации</div>
              <div className="contact-value">Круглосуточно</div>
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="integration-badge">📍 Яндекс.Карты</span>
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>
              Напишите нам
            </div>
            <div className="contact-form">
              <input type="text" placeholder="Ваше имя" />
              <input type="tel" placeholder="Телефон" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Сообщение" />
              <button className="contact-submit">Отправить</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
