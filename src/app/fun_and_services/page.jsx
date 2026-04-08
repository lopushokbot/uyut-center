import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("services");

const SERVICE_FACTS = [
  { value: "24/7", label: "парковка для гостей" },
  { value: "500 ₽", label: "конференц-зал в час" },
  { value: "Free", label: "трансфер до/от вокзала" },
];

const SERVICE_ITEMS = [
  {
    id: "parking",
    name: "Автостоянка",
    kicker: "Для гостей на автомобиле",
    image:
      "https://uyut-centr.ru/wp-content/uploads/2021/05/S0012xh160750170416462868-1024x1024.jpg",
    summary:
      "Бесплатная парковка на территории гостиницы с круглосуточным доступом.",
    description:
      "Гости гостиницы могут воспользоваться услугой бесплатной парковки. Стоянка работает круглосуточно, а территория находится под видеонаблюдением.",
    tags: ["Бесплатно", "Круглосуточно", "Видеонаблюдение"],
  },
  {
    id: "conference",
    name: "Конференц-зал",
    kicker: "Для встреч и переговоров",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/1234_0.jpg",
    summary:
      "Пространство для деловых мероприятий по понятной фиксированной ставке.",
    description:
      "Гостиница «Уют» предлагает воспользоваться услугой «Конференц-зал» по привлекательной цене: 500 руб/час.",
    tags: ["500 ₽/час", "Переговоры", "Небольшие мероприятия"],
  },
  {
    id: "transfer",
    name: "Трансфер",
    kicker: "Удобный приезд и отъезд",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/t11.jpg",
    summary:
      "Бесплатный трансфер помогает добраться до отеля без лишней логистики.",
    description:
      "Трансфер от и до железнодорожного вокзала предоставляется бесплатно.",
    tags: ["Ж/Д вокзал", "Бесплатно", "Для гостей отеля"],
  },
  {
    id: "laundry",
    name: "Прачечная",
    kicker: "Для длительного проживания",
    image: "https://uyut-centr.ru/wp-content/uploads/2021/05/IMG_4606.jpg",
    summary:
      "Практичная сервисная опция для тех, кто остаётся дольше или едет в командировку.",
    description:
      "Гости могут воспользоваться услугами прачечной во время проживания.",
    tags: ["Уход за вещами", "Для командировок", "По запросу"],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="page-hero services-page-hero">
        <div className="page-hero-bg services-page-hero-bg" />
        <div className="page-hero-content page-container services-page-hero-content">
          <div className="hero-stars page-eyebrow">Комфорт помимо номера</div>
          <h1 className="page-hero-title">Услуги гостиницы «Уют»</h1>
          <p className="page-hero-desc">
            Собрал страницу услуг на основе исходного сайта: парковка,
            конференц-зал, бесплатный трансфер и прачечная для гостей.
          </p>
          <div className="services-page-facts">
            {SERVICE_FACTS.map((fact) => (
              <div className="services-page-fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container services-page-intro">
          <div>
            <div className="section-label">Что доступно гостям</div>
            <h2 className="section-title">Сервис, который решает бытовые и деловые задачи</h2>
            <div className="gold-line" />
            <p className="section-desc">
              На старом сайте блок услуг был коротким, поэтому я сохранил его
              фактуру, но оформил в более собранную страницу с понятной
              иерархией и акцентами.
            </p>
          </div>
          <div className="services-page-note">
            <span>Для проживания и поездок</span>
            <p>
              Здесь собраны именно дополнительные услуги отеля, которые помогают
              с дорогой, машиной, встречами и бытовыми вопросами во время
              проживания.
            </p>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container">
          <div className="services-page-grid">
            {SERVICE_ITEMS.map((service) => (
              <article className="services-page-card" key={service.id}>
                <div className="services-page-card-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="services-page-card-body">
                  <div className="services-page-card-kicker">{service.kicker}</div>
                  <h3 className="services-page-card-title">{service.name}</h3>
                  <p className="services-page-card-summary">{service.summary}</p>
                  <div className="services-page-card-tags">
                    {service.tags.map((tag) => (
                      <span className="services-page-card-tag" key={tag}>
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

      <section className="section section-dark fade-section visible">
        <div className="page-container">
          <div className="offers-header services-page-header">
            <div className="section-label">Подробно</div>
            <h2 className="section-title">Чем именно можно воспользоваться</h2>
          </div>

          <div className="services-page-detail-list">
            {SERVICE_ITEMS.map((service, index) => (
              <article
                className={`services-page-detail ${index % 2 ? "is-reversed" : ""}`}
                key={service.id}
              >
                <div className="services-page-detail-visual">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="services-page-detail-copy">
                  <div className="services-page-detail-kicker">{service.kicker}</div>
                  <h3 className="services-page-detail-title">{service.name}</h3>
                  <p className="services-page-detail-text">{service.description}</p>
                  <div className="services-page-detail-tags">
                    {service.tags.map((tag) => (
                      <span className="services-page-detail-tag" key={tag}>
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
            <div className="section-label">Нужна помощь</div>
            <h2 className="section-title">
              Уточнить детали по услугам перед заселением
            </h2>
          </div>
          <div className="services-page-actions">
            <Link className="hero-btn about-page-secondary-btn" href="/contact/">
              Написать или позвонить
            </Link>
            <Link className="hero-btn" href="/prices_and_rooms/">
              Посмотреть номера
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
