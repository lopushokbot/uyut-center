import SiteShell from "../../components/SiteShell";
import ContactForm from "../../components/ContactForm";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("contacts");

const CONTACT_FACTS = [
  { value: "24/7", label: "стойка регистрации" },
  { value: "1", label: "адрес в центре Клинцов" },
  { value: "Fast", label: "связь по телефону и email" },
];

const CONTACT_ITEMS = [
  {
    label: "Телефон",
    value: "+7 (930) 722-48-88",
    href: "tel:+79307224888",
  },
  {
    label: "Email",
    value: "yut.klintsi@yandex.ru",
    href: "mailto:yut.klintsi@yandex.ru",
  },
  {
    label: "Адрес",
    value: "г. Клинцы, ул. К. Маркса, д. 1",
  },
  {
    label: "Обратная связь",
    value: "По телефону, email и через форму ниже",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="page-hero contact-page-hero">
        <div className="page-hero-bg contact-page-hero-bg" />
        <div className="page-hero-content page-container contact-page-hero-content">
          <div className="hero-stars page-eyebrow">Связь с гостиницей</div>
          <h1 className="page-hero-title">Контакты</h1>
          <p className="page-hero-desc">
            На основе исходной страницы контактов собрал более цельный экран:
            адрес, телефон, email, карта и понятный блок для обратной связи.
          </p>
          <div className="contact-page-facts">
            {CONTACT_FACTS.map((fact) => (
              <div className="contact-page-fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container contact-page-top">
          <div className="contact-page-summary">
            <div className="section-label">Свяжитесь с нами</div>
            <h2 className="section-title">
              Один адрес для заселения, дороги и вопросов по проживанию
            </h2>
            <div className="gold-line" />
            <p className="section-desc">
              В старом HTML акцент был на телефоне, адресе, email и форме
              обратной связи. Я сохранил эту структуру, но собрал её в более
              читаемый и быстрый для гостя формат.
            </p>
          </div>

          <div className="contact-page-panel">
            {CONTACT_ITEMS.map((item) => (
              <div className="contact-page-row" key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container contact-page-grid">
          <div className="contact-page-form-wrap">
            <div className="section-label">Остались вопросы?</div>
            <h2 className="section-title">Форма обратной связи</h2>
            <p className="section-desc">
              На оригинальной странице был именно такой сценарий: оставить имя,
              телефон, email и комментарий. Здесь сохранён тот же состав полей.
            </p>
            <ContactForm preset="contact" source="contact_page" />
          </div>

          <div className="contact-page-map-wrap">
            <div className="section-label">Как нас найти</div>
            <div className="contact-page-map-card">
              <div className="map-container contact-page-map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6b5e6c3c3f2a4e&source=constructor&ll=32.235271%2C52.7498408&z=16&pt=32.235271%2C52.749840%2Cpm2rdm"
                  title="Гостиница Уют на карте"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="contact-page-map-caption">
                г. Клинцы, ул. К. Маркса, д. 1
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
