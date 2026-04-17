import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import OpenCallbackButton from "../../components/OpenCallbackButton";
import SocialLinks from "../../components/SocialLinks";
import { RESTAURANT_MENU_URL } from "../../data/hotelData";
import { PAGE_INTRO, RESTAURANT_LINKS } from "../../data/siteData";
import { getPageMetadata } from "../../lib/metadata";
import styles from "./page.module.css";

export const metadata = getPageMetadata("restaurant");

const RESTAURANT_FACTS = [
  { value: "−10%", label: "скидка для гостей отеля" },
  { value: "В номер", label: "обслуживание без выхода из номера" },
  { value: "Меню", label: "европейская и русская кухня" },
];

const RESTAURANT_FEATURES = [
  {
    title: "Скидка для гостей 10%",
    text: "Постояльцы гостиницы получают скидку 10% на заказы в ресторане «Метрополь» — покажите карту гостя при заказе.",
    accent: "Для гостей отеля",
  },
  {
    title: "Обслуживание в номер",
    text: "Часть блюд можно заказать прямо в номер — удобно после дороги или перед ранним выездом.",
    accent: "Удобно после дороги",
  },
  {
    title: "Разнообразное меню",
    text: "Европейская и русская кухня, сезонные предложения и детские блюда — подойдёт для завтрака, обеда и ужина.",
    accent: "На каждый день",
  },
  {
    title: "Ресторан «Метрополь»",
    text: "Спокойная атмосфера для завтраков, деловых встреч и вечерних ужинов в центре города.",
    accent: "Внутри гостиницы",
  },
];

export default function MenuPage() {
  return (
    <SiteShell>
      <section className={`page-hero ${styles.hero}`}>
        <div className={`page-hero-bg ${styles.heroBg}`} />
        <div className="page-hero-content page-container">
          <div className="hero-stars page-eyebrow">Гастрономия в гостинице</div>
          <h1 className="page-hero-title">Ресторан «Метрополь»</h1>
          <p className="page-hero-desc">{PAGE_INTRO.restaurant}</p>
          <div className={styles.facts}>
            {RESTAURANT_FACTS.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className={`page-container ${styles.intro}`}>
          <div>
            <div className="section-label">Ресторан</div>
            <h2 className="section-title">
              Ужин, завтрак и спокойная пауза без выхода из отеля
            </h2>
            <div className="gold-line" />
            <p className="section-desc">
              Ресторан «Метрополь» работает для постояльцев и гостей города:
              завтрак по системе «Шведский стол», обед и ужин, скидка 10% для
              проживающих и возможность заказать блюда прямо в номер.
            </p>
            <div className={styles.actions}>
              <a
                className="hero-btn"
                href={RESTAURANT_MENU_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Открыть меню
              </a>
              <OpenCallbackButton className="hero-btn about-page-secondary-btn">
                Уточнить детали
              </OpenCallbackButton>
            </div>
          </div>

          <div className={styles.visual}>
            <img
              src="https://uyut-centr.ru/wp-content/uploads/2021/05/274659011.jpg"
              alt="Ресторан Метрополь"
            />
            <div className={styles.visualBadge}>Ресторан при гостинице</div>
            {RESTAURANT_LINKS.yandexBusiness.url ? (
              <a
                className={styles.visualLink}
                href={RESTAURANT_LINKS.yandexBusiness.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Открыть на Яндекс Бизнес →
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className={`page-container ${styles.socials}`}>
          <div>
            <div className="section-label">Ресторан в соцсетях</div>
            <h2 className="section-title">Следите за меню, событиями и акциями</h2>
            <p className="section-desc">
              Публикуем сезонные блюда, винные ужины и предложения для гостей.
            </p>
          </div>
          <SocialLinks
            keys={["telegram", "vk", "max"]}
            links={RESTAURANT_LINKS}
          />
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container">
          <div className={styles.grid}>
            {RESTAURANT_FEATURES.map((feature) => (
              <article className={styles.card} key={feature.title}>
                <div className={styles.cardAccent}>{feature.accent}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark fade-section visible">
        <div className={`page-container ${styles.highlight}`}>
          <div className={styles.highlightCopy}>
            <div className="section-label">Метрополь</div>
            <h2 className="section-title">
              Комфортный ресторанный формат внутри поездки
            </h2>
            <p className="section-desc">
              Ресторан помогает не искать отдельное место для ужина или встречи:
              можно начать день с завтрака, поужинать вечером или заказать часть
              блюд прямо в номер.
            </p>
          </div>
          <div className={styles.highlightList}>
            <div className={styles.highlightItem}>
              <span>01</span>
              <p>
                Подходит для гостей отеля, деловых встреч и спокойных ужинов.
              </p>
            </div>
            <div className={styles.highlightItem}>
              <span>02</span>
              <p>
                Скидка 10% делает посещение ресторана частью гостевого сервиса.
              </p>
            </div>
            <div className={styles.highlightItem}>
              <span>03</span>
              <p>
                Внешнее меню доступно отдельно, поэтому страница ведёт прямо к
                выбору блюд.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container cta-banner">
          <div>
            <div className="section-label">Меню и бронирование</div>
            <h2 className="section-title">
              Перейти к меню или выбрать номер с рестораном под рукой
            </h2>
          </div>
          <div className={styles.actions}>
            <a
              className="hero-btn"
              href={RESTAURANT_MENU_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Смотреть меню
            </a>
            <Link
              className="hero-btn about-page-secondary-btn"
              href="/prices_and_rooms/"
            >
              Смотреть номера
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
