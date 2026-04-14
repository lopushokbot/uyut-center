import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { getPageMetadata } from "../../lib/metadata";
import styles from "./page.module.css";

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
      <section className={`page-hero ${styles.hero}`}>
        <div className={`page-hero-bg ${styles.heroBg}`} />
        <div className="page-hero-content page-container">
          <div className="hero-stars page-eyebrow">Комфорт помимо номера</div>
          <h1 className="page-hero-title">Услуги гостиницы «Уют»</h1>
          <p className="page-hero-desc">
            Собрал страницу услуг на основе исходного сайта: парковка,
            конференц-зал, бесплатный трансфер и прачечная для гостей.
          </p>
          <div className={styles.facts}>
            {SERVICE_FACTS.map((fact) => (
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
            <div className="section-label">Что доступно гостям</div>
            <h2 className="section-title">Сервис, который решает бытовые и деловые задачи</h2>
            <div className="gold-line" />
            <p className="section-desc">
              На старом сайте блок услуг был коротким, поэтому я сохранил его
              фактуру, но оформил в более собранную страницу с понятной
              иерархией и акцентами.
            </p>
          </div>
          <div className={styles.note}>
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
          <div className={styles.grid}>
            {SERVICE_ITEMS.map((service) => (
              <article className={styles.card} key={service.id}>
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.name} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardKicker}>{service.kicker}</div>
                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <p className={styles.cardSummary}>{service.summary}</p>
                  <div className={styles.cardTags}>
                    {service.tags.map((tag) => (
                      <span className={styles.cardTag} key={tag}>
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
          <div className={`offers-header ${styles.header}`}>
            <div className="section-label">Подробно</div>
            <h2 className="section-title">Чем именно можно воспользоваться</h2>
          </div>

          <div className={styles.detailList}>
            {SERVICE_ITEMS.map((service, index) => (
              <article
                className={`${styles.detail} ${index % 2 ? styles.isReversed : ""}`.trim()}
                key={service.id}
              >
                <div className={styles.detailVisual}>
                  <img src={service.image} alt={service.name} />
                </div>
                <div className={styles.detailCopy}>
                  <div className={styles.detailKicker}>{service.kicker}</div>
                  <h3 className={styles.detailTitle}>{service.name}</h3>
                  <p className={styles.detailText}>{service.description}</p>
                  <div className={styles.detailTags}>
                    {service.tags.map((tag) => (
                      <span className={styles.detailTag} key={tag}>
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
          <div className={styles.actions}>
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
