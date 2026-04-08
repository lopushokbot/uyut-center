import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { RESTAURANT_MENU_URL } from "../../data/hotelData";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("restaurant");

const RESTAURANT_FACTS = [
  { value: "10%", label: "скидка для гостей" },
  { value: "Room", label: "обслуживание в номер" },
  { value: "Меню", label: "разнообразный выбор блюд" },
];

const RESTAURANT_FEATURES = [
  {
    title: "Скидка для гостей 10%",
    text: "Постояльцы гостиницы получают специальную скидку на заказы в ресторане «Метрополь».",
    accent: "Для гостей отеля",
  },
  {
    title: "Обслуживание в номер",
    text: "Часть позиций можно заказать прямо в номер, если хочется ужинать спокойно и без спешки.",
    accent: "Удобно после дороги",
  },
  {
    title: "Разнообразное меню",
    text: "Ресторанная страница старого сайта акцентировала именно на широком выборе блюд и комфортном формате питания.",
    accent: "На каждый день",
  },
  {
    title: "Ресторан «Метрополь»",
    text: "Пространство подходит для завтраков, деловых встреч, спокойных ужинов и неформальных бесед в поездке.",
    accent: "Внутри гостиницы",
  },
];

export default function MenuPage() {
  return (
    <SiteShell>
      <section className="page-hero restaurant-page-hero">
        <div className="page-hero-bg restaurant-page-hero-bg" />
        <div className="page-hero-content page-container restaurant-page-hero-content">
          <div className="hero-stars page-eyebrow">Гастрономия в гостинице</div>
          <h1 className="page-hero-title">Ресторан «Метрополь»</h1>
          <p className="page-hero-desc">
            На основе старой страницы ресторана собрал более выразительный
            экран: ключевые преимущества, атмосфера и быстрый переход к меню.
          </p>
          <div className="restaurant-page-facts">
            {RESTAURANT_FACTS.map((fact) => (
              <div className="restaurant-page-fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container restaurant-page-intro">
          <div className="restaurant-page-copy">
            <div className="section-label">Ресторан</div>
            <h2 className="section-title">Ужин, завтрак и спокойная пауза без выхода из отеля</h2>
            <div className="gold-line" />
            <p className="section-desc">
              В исходном HTML ресторан был описан коротко, но по делу: «Метрополь»,
              скидка для гостей, обслуживание в номер и разнообразное меню. Я
              сохранил эти акценты и оформил их в полноценную страницу.
            </p>
            <div className="restaurant-page-actions">
              <a
                className="hero-btn"
                href={RESTAURANT_MENU_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Открыть меню
              </a>
              <Link className="hero-btn about-page-secondary-btn" href="/contact/">
                Уточнить детали
              </Link>
            </div>
          </div>

          <div className="restaurant-page-visual">
            <img
              src="https://uyut-centr.ru/wp-content/uploads/2021/05/274659011.jpg"
              alt="Ресторан Метрополь"
            />
            <div className="restaurant-page-visual-badge">
              Ресторан при гостинице
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container">
          <div className="restaurant-page-grid">
            {RESTAURANT_FEATURES.map((feature) => (
              <article className="restaurant-page-card" key={feature.title}>
                <div className="restaurant-page-card-accent">{feature.accent}</div>
                <h3 className="restaurant-page-card-title">{feature.title}</h3>
                <p className="restaurant-page-card-text">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark fade-section visible">
        <div className="page-container restaurant-page-highlight">
          <div className="restaurant-page-highlight-copy">
            <div className="section-label">Метрополь</div>
            <h2 className="section-title">Комфортный ресторанный формат внутри поездки</h2>
            <p className="section-desc">
              Ресторан помогает не искать отдельное место для ужина или встречи:
              можно начать день с завтрака, поужинать вечером или заказать часть
              блюд прямо в номер.
            </p>
          </div>
          <div className="restaurant-page-highlight-list">
            <div className="restaurant-page-highlight-item">
              <span>01</span>
              <p>Подходит для гостей отеля, деловых встреч и спокойных ужинов.</p>
            </div>
            <div className="restaurant-page-highlight-item">
              <span>02</span>
              <p>Скидка 10% делает посещение ресторана частью гостевого сервиса.</p>
            </div>
            <div className="restaurant-page-highlight-item">
              <span>03</span>
              <p>Внешнее меню доступно отдельно, поэтому страница ведёт прямо к выбору блюд.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container cta-banner">
          <div>
            <div className="section-label">Меню и бронирование</div>
            <h2 className="section-title">Перейти к меню или выбрать номер с рестораном под рукой</h2>
          </div>
          <div className="restaurant-page-actions">
            <a
              className="hero-btn"
              href={RESTAURANT_MENU_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Смотреть меню
            </a>
            <Link className="hero-btn about-page-secondary-btn" href="/prices_and_rooms/">
              Смотреть номера
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
