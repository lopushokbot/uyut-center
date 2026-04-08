import Link from "next/link";
import BookingCta from "../../components/BookingCta";
import SiteShell from "../../components/SiteShell";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("about");

const ABOUT_STORY = [
  `Трёхзвёздочная гостиница «Уют» расположена в центре города Клинцы, в 4 минутах ходьбы от Центральной площади. Наш гостиничный комплекс предлагает номера разных категорий и подходит гостям с разными запросами и бюджетом.`,
  `Светлые номера оформлены в тёплых тонах и классическом стиле. Во всех номерах есть телевизор, кондиционер, холодильник, мини-бар, а также собственная ванная комната с феном и бесплатными туалетно-косметическими принадлежностями.`,
  `Персонал гостиницы поддерживает высокий уровень сервиса и старается обеспечить индивидуальный подход к каждому гостю. На территории работает ресторан «Метрополь» с блюдами европейской и русской кухни, а у центрального входа расположена парковка с видеонаблюдением.`,
];

const ABOUT_STATS = [
  { value: "3★", label: "категория гостиницы" },
  { value: "4 мин", label: "пешком до Центральной площади" },
  { value: "24/7", label: "приём и размещение гостей" },
];

const ABOUT_FEATURES = [
  "Центральное расположение в Клинцах",
  "Ресторан «Метрополь» и бар на территории",
  "Парковка с видеонаблюдением у входа",
  "Индивидуальный подход к каждому гостю",
  "Классические номера в тёплой палитре",
  "Услуги для отдыха и деловых поездок",
];

const ABOUT_OFFERS = [
  {
    title: "Конференц-зал",
    text: "Гостиница «Уют» предлагает воспользоваться конференц-залом по привлекательной цене: 500 руб/час.",
    accent: "500 ₽/час",
  },
  {
    title: "Акция для молодожёнов",
    text: "При проведении свадьбы в ресторане гостиницы номер «Люкс» на первую брачную ночь предоставляется бесплатно.",
    accent: "Люкс в подарок",
  },
  {
    title: "Бесплатный трансфер",
    text: "Трансфер от и до железнодорожного вокзала для гостей предоставляется бесплатно.",
    accent: "До/от вокзала",
  },
  {
    title: "Скидка в ресторане",
    text: "По карте гостя действует скидка 10% в ресторане «Метрополь».",
    accent: "−10%",
  },
  {
    title: "Акция для именинников",
    text: "В день рождения действует скидка 30% на гостиничный номер.",
    accent: "−30%",
  },
];

const ABOUT_GALLERY = [
  {
    src: "https://uyut-centr.ru/wp-content/uploads/elementor/thumbs/Здание-гостиницы-scaled-pg8ept6syd3d12fsk2jpnyq3e8j50ekax7zkzn0xe8.jpg",
    alt: "Здание гостиницы Уют",
    className: "about-page-gallery-card about-page-gallery-card-large",
  },
  {
    src: "https://uyut-centr.ru/wp-content/uploads/elementor/thumbs/274770699-pg8eppfg70vdfnvthniwqgi73gsns69gl9wgxqjmvc.jpg",
    alt: "Интерьер гостиницы Уют",
    className: "about-page-gallery-card",
  },
  {
    src: "https://uyut-centr.ru/wp-content/uploads/elementor/thumbs/274659013-pg8eppfg70vdfnvthniwqgi73gsns69gl9wgxqjmvc.jpg",
    alt: "Номер гостиницы Уют",
    className: "about-page-gallery-card",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-hero about-page-hero">
        <div className="page-hero-bg about-page-hero-bg" />
        <div className="page-hero-content page-container about-page-hero-content">
          <div className="hero-stars page-eyebrow">Тихий ритм центра города</div>
          <div className="about-page-kicker">
            <span>г. Клинцы</span>
            <span>ул. К. Маркса, 1</span>
          </div>
          <h1 className="page-hero-title">Об отеле «Уют»</h1>
          <p className="page-hero-desc">
            Гостиница в центре Клинцов для спокойного отдыха, деловых поездок
            и событий, где важны сервис, удобная локация и понятный комфорт.
          </p>
          <div className="about-page-stats">
            {ABOUT_STATS.map((item) => (
              <div className="about-page-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container about-page-intro">
          <div className="about-page-copy">
            <div className="section-label">Гостиница «Уют»</div>
            <h2 className="section-title">
              Пространство для отдыха, дороги и деловых встреч
            </h2>
            <div className="gold-line" />
            <div className="about-page-story">
              {ABOUT_STORY.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-page-feature-list">
              {ABOUT_FEATURES.map((feature) => (
                <div className="about-page-feature-item" key={feature}>
                  <span className="about-page-feature-dot" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-page-gallery">
            {ABOUT_GALLERY.map((image) => (
              <div className={image.className} key={image.src}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark fade-section visible">
        <div className="page-container">
          <div className="offers-header about-page-offers-header">
            <div className="section-label">Специальные предложения</div>
            <h2 className="section-title">Условия, которые делают проживание удобнее</h2>
            <p className="section-desc">
              Наполнили блок предложениями из исходной страницы отеля и
              оформили их в более современном формате карточек.
            </p>
          </div>

          <div className="about-page-offers-grid">
            {ABOUT_OFFERS.map((offer) => (
              <article className="about-page-offer-card" key={offer.title}>
                <div className="about-page-offer-accent">{offer.accent}</div>
                <h3 className="about-page-offer-title">{offer.title}</h3>
                <p className="about-page-offer-text">{offer.text}</p>
              </article>
            ))}
          </div>

          <div className="cta-row about-page-offers-cta">
            <Link className="hero-btn" href="/disconts/">
              Все предложения
            </Link>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container about-page-location">
          <div className="about-page-location-panel">
            <div className="section-label">Почему это удобно</div>
            <h2 className="section-title">Локация, где всё рядом</h2>
            <p className="section-desc">
              Отель находится в центре города, рядом с ключевыми точками
              маршрута. Это удобно и для короткой остановки, и для более
              длинного проживания.
            </p>
          </div>

          <div className="about-page-location-card">
            <div className="about-page-location-row">
              <span>Адрес</span>
              <strong>г. Клинцы, ул. К. Маркса, д. 1</strong>
            </div>
            <div className="about-page-location-row">
              <span>Телефон</span>
              <a href="tel:+79307224888">+7 (930) 722-48-88</a>
            </div>
            <div className="about-page-location-row">
              <span>Рядом</span>
              <strong>Центральная площадь, вокзал, ресторан, парковка</strong>
            </div>
            <div className="about-page-location-actions">
              <Link className="hero-btn about-page-secondary-btn" href="/contact/">
                Контакты
              </Link>
              <Link className="hero-btn" href="/prices_and_rooms/">
                Выбрать номер
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingCta />
    </SiteShell>
  );
}
