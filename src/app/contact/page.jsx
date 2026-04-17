import SiteShell from "../../components/SiteShell";
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import { SOCIAL_LINKS, PAGE_INTRO } from "../../data/siteData";
import { getPageMetadata } from "../../lib/metadata";
import styles from "./page.module.css";

export const metadata = getPageMetadata("contacts");

const CONTACT_FACTS = [
  { value: "24/7", label: "стойка регистрации" },
  { value: "Центр", label: "адрес в центре Клинцов" },
  { value: "Быструю", label: "связь по телефону и email" },
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
    href: SOCIAL_LINKS.yandexMaps.url,
    hint: "Открыть в Яндекс Картах",
  },
  {
    label: "Режим работы",
    value: "Круглосуточно · без выходных",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className={`page-hero ${styles.hero}`}>
        <div className={`page-hero-bg ${styles.heroBg}`} />
        <div className="page-hero-content page-container">
          <div className="hero-stars page-eyebrow">Связь с гостиницей</div>
          <h1 className="page-hero-title">Контакты</h1>
          <p className="page-hero-desc">{PAGE_INTRO.contacts}</p>
          <div className={styles.facts}>
            {CONTACT_FACTS.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className={`page-container ${styles.top}`}>
          <div>
            <div className="section-label">Свяжитесь с нами</div>
            <h2 className="section-title">
              Один адрес для заселения, дороги и вопросов по проживанию
            </h2>
            <div className="gold-line" />
            <p className="section-desc">
              Позвоните на стойку регистрации, напишите на почту или откройте
              адрес на карте — ответим максимально быстро по любому каналу.
            </p>

            <div className={styles.socialsBlock}>
              <div className="section-label" style={{ marginBottom: 14 }}>
                Мессенджеры
              </div>
              <SocialLinks keys={["whatsapp", "telegram", "vk", "max"]} />
            </div>
          </div>

          <div className={styles.panel}>
            {CONTACT_ITEMS.map((item) => (
              <div className={styles.row} key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    rel={
                      item.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
                {item.hint ? <em className={styles.hint}>{item.hint}</em> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className={`page-container ${styles.grid}`}>
          <div className={styles.formWrap}>
            <div className="section-label">Остались вопросы?</div>
            <h2 className="section-title">Форма обратной связи</h2>
            <div className="gold-line" />
            <p className="section-desc">
              Оставьте имя, телефон и короткий комментарий — мы перезвоним в
              рабочее время. Если нужен срочный ответ — звоните напрямую по
              номеру выше.
            </p>
            <ContactForm preset="contact" source="contact_page" />
          </div>

          <div>
            <div className="section-label">Как нас найти</div>
            <div className={styles.mapCard}>
              <div className={`map-container ${styles.map}`}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6b5e6c3c3f2a4e&source=constructor&ll=32.235271%2C52.7498408&z=16&pt=32.235271%2C52.749840%2Cpm2rdm"
                  title="Гостиница Уют на карте"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={styles.mapCaption}>
                <div>г. Клинцы, ул. К. Маркса, д. 1</div>
                <div className={styles.mapLinks}>
                  <a
                    className={styles.mapLink}
                    href={SOCIAL_LINKS.yandexMaps.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Открыть в Яндекс Картах
                  </a>
                  {SOCIAL_LINKS.yandexBusiness.url ? (
                    <a
                      className={styles.mapLink}
                      href={SOCIAL_LINKS.yandexBusiness.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Профиль на Яндекс Бизнес
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
