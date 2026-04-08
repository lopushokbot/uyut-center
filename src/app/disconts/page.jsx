import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("offers");

const OFFER_FACTS = [
  { value: "5", label: "акций и спецпредложений" },
  { value: "−30%", label: "скидка именинникам" },
  { value: "Free", label: "люкс или трансфер в подарок" },
];

const OFFER_ITEMS = [
  {
    id: "wedding",
    title: "Акция для молодожёнов",
    kicker: "Свадебное предложение",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/13fWYTjhjI4.jpg",
    accent: "Люкс бесплатно",
    summary:
      "При проведении свадьбы в ресторане гостиницы номер «Люкс» на первую брачную ночь предоставляется бесплатно.",
    tags: ["Свадьба в ресторане", "Номер Люкс", "Первая брачная ночь"],
  },
  {
    id: "restaurant",
    title: "Скидка в ресторане",
    kicker: "Для проживающих гостей",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/274659011.jpg",
    accent: "−10%",
    summary: "По карте гостя действует скидка 10% в ресторане «Метрополь».",
    tags: ["Карта гостя", "Метрополь", "Скидка 10%"],
  },
  {
    id: "transfer",
    title: "Бесплатный трансфер",
    kicker: "Удобная логистика",
    image:
      "https://uyut-centr.ru/wp-content/uploads/2021/05/7ee8f3ccecea389a.jpg",
    accent: "До/от вокзала",
    summary:
      "Трансфер от и до железнодорожного вокзала предоставляется бесплатно.",
    tags: ["Ж/Д вокзал", "Без доплаты", "Для гостей отеля"],
  },
  {
    id: "conference",
    title: "Конференц-зал",
    kicker: "Для встреч и мероприятий",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/1234_0.jpg",
    accent: "500 ₽/час",
    summary:
      "Гостиница «Уют» предлагает воспользоваться услугой «Конференц-зал» по привлекательной цене: 500 руб/час.",
    tags: ["500 ₽/час", "Переговоры", "Мероприятия"],
  },
  {
    id: "birthday",
    title: "Акция для именинников",
    kicker: "Предложение ко дню рождения",
    image:
      "https://uyut-centr.ru/wp-content/uploads/2021/05/Люкс-10-1024x1024.jpg",
    accent: "−30%",
    summary: "В день рождения действует скидка 30% на гостиничный номер.",
    tags: ["День рождения", "Скидка 30%", "На проживание"],
  },
];

export default function OffersPage() {
  return (
    <SiteShell>
      <section className="page-hero discounts-page-hero">
        <div className="page-hero-bg discounts-page-hero-bg" />
        <div className="page-hero-content page-container discounts-page-hero-content">
          <div className="hero-stars page-eyebrow">
            Спецпредложения гостиницы
          </div>
          <h1 className="page-hero-title">Акции и специальные предложения</h1>
          <p className="page-hero-desc">
            Собрал предложения со старого сайта в более цельную страницу:
            подарки для молодожёнов, скидки в ресторане и на проживание,
            бесплатный трансфер и конференц-зал.
          </p>
          <div className="discounts-page-facts">
            {OFFER_FACTS.map((fact) => (
              <div className="discounts-page-fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container discounts-page-intro">
          <div>
            <div className="section-label">Актуальные предложения</div>
            <h2 className="section-title">Поводы бронировать напрямую</h2>
            <div className="gold-line" />
            <p className="section-desc">
              Здесь собраны акции из исходного HTML-файла страницы отеля. Я
              сохранил сами условия, но оформил их в более понятную и
              последовательную структуру.
            </p>
          </div>
          <div className="discounts-page-note">
            <span>Для отдыха и событий</span>
            <p>
              Предложения охватывают проживание, ресторан и дополнительные
              сервисы, поэтому страница работает и как витрина акций, и как
              быстрый ориентир по выгодам для гостя.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark fade-section visible">
        <div className="page-container">
          <div className="offers-header discounts-page-header">
            <div className="section-label">Подробно</div>
            <h2 className="section-title">Что именно получает гость</h2>
          </div>

          <div className="discounts-page-detail-list">
            {OFFER_ITEMS.map((offer, index) => (
              <article
                className={`discounts-page-detail ${index % 2 ? "is-reversed" : ""}`}
                key={offer.id}
              >
                <div className="discounts-page-detail-visual">
                  <img src={offer.image} alt={offer.title} />
                </div>
                <div className="discounts-page-detail-copy">
                  <div className="discounts-page-detail-topline">
                    <span>{offer.kicker}</span>
                    <strong>{offer.accent}</strong>
                  </div>
                  <h3 className="discounts-page-detail-title">{offer.title}</h3>
                  <p className="discounts-page-detail-text">{offer.summary}</p>
                  <div className="discounts-page-detail-tags">
                    {offer.tags.map((tag) => (
                      <span className="discounts-page-detail-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container cta-banner">
          <div>
            <div className="section-label">Следующий шаг</div>
            <h2 className="section-title">
              Выбрать номер или уточнить условия акции
            </h2>
          </div>
          <div className="discounts-page-actions">
            <Link
              className="hero-btn about-page-secondary-btn"
              href="/prices_and_rooms/"
            >
              Смотреть номера
            </Link>
            <Link className="hero-btn" href="/contact/">
              Связаться с отелем
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
