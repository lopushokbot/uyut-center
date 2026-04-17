import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import OpenCallbackButton from "../../components/OpenCallbackButton";
import { PAGE_INTRO } from "../../data/siteData";
import { getPageMetadata } from "../../lib/metadata";
import styles from "./page.module.css";

export const metadata = getPageMetadata("services");

const SERVICE_FACTS = [
  { value: "24/7", label: "парковка для гостей" },
  { value: "Зал", label: "для встреч и переговоров" },
  { value: "Сауна", label: "для отдыха после дороги" },
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
      "Оборудованное пространство для переговоров, презентаций и небольших деловых мероприятий.",
    description:
      "Гостиница «Уют» предоставляет собственный конференц-зал для рабочих встреч, переговоров и небольших корпоративных мероприятий. Стоимость и условия уточняйте на стойке регистрации.",
    tags: ["Переговоры", "Презентации", "Небольшие мероприятия"],
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
  {
    id: "sauna",
    name: "Сауна",
    kicker: "Для отдыха и восстановления",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23241b14'/%3E%3Cstop offset='55%25' stop-color='%23352a1f'/%3E%3Cstop offset='100%25' stop-color='%23b8963e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23bg)'/%3E%3Ccircle cx='950' cy='180' r='180' fill='rgba(255,255,255,0.08)'/%3E%3Ccircle cx='280' cy='620' r='220' fill='rgba(255,255,255,0.05)'/%3E%3Cpath d='M420 520c0-120 70-190 180-190s180 70 180 190' fill='none' stroke='rgba(255,255,255,0.24)' stroke-width='20' stroke-linecap='round'/%3E%3Cpath d='M520 280c-25-32-25-66 0-102M600 260c-25-32-25-66 0-102M680 280c-25-32-25-66 0-102' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='14' stroke-linecap='round'/%3E%3Ctext x='600' y='630' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='78' letter-spacing='10'%3ESAUNA%3C/text%3E%3C/svg%3E",
    summary:
      "Спокойное пространство, где можно восстановиться после дороги или насыщенного дня.",
    description:
      "Гости гостиницы могут дополнить проживание отдыхом в сауне. Это удобный формат для расслабления после поездки, рабочих встреч или долгого дня в городе.",
    tags: ["Отдых", "После дороги", "По запросу"],
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
          <p className="page-hero-desc">{PAGE_INTRO.services}</p>
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
            <div className="section-label">Чем можно воспользоваться</div>
            <h2 className="section-title">
              Сервисы, которые упрощают проживание
            </h2>
            <div className="gold-line" />
            <p className="section-desc">
              Всё, что может пригодиться гостю помимо номера: безопасно
              оставить машину, быстро добраться до вокзала, обсудить дела в
              конференц-зале, отдохнуть в сауне и разобраться с бытом во время
              поездки.
            </p>
          </div>
          <div className={styles.note}>
            <span>Коротко о главном</span>
            <p>
              Парковка и трансфер — без доплаты. Сауна, конференц-зал и
              прачечная — по запросу на стойке регистрации.
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
            <div className="gold-line" />
            <p className="section-desc">
              Ниже — что доступно гостям в каждой услуге: формат, условия и
              нюансы, о которых стоит знать ещё до заселения.
            </p>
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
            <OpenCallbackButton className="hero-btn about-page-secondary-btn">
              Написать или позвонить
            </OpenCallbackButton>
            <Link className="hero-btn" href="/prices_and_rooms/">
              Посмотреть номера
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
