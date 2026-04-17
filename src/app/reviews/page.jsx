import PageHero from "../../components/PageHero";
import SiteShell from "../../components/SiteShell";
import JsonLd from "../../components/JsonLd";
import { REVIEWS } from "../../data/hotelData";
import { getPageMetadata } from "../../lib/metadata";
import { breadcrumbSchema } from "../../lib/schema";
import styles from "./page.module.css";

export const metadata = getPageMetadata("reviews");

const BREADCRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Отзывы", path: "/reviews/" },
];

export default function ReviewsPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(BREADCRUMBS)} />
      <PageHero
        eyebrow="Отзывы гостей"
        title="Отзывы"
        description="Мнения гостей о гостинице «Уют»: расположение, чистота номеров, качество завтраков и уровень сервиса."
      />
      <section className="section section-dark fade-section visible">
        <div className="page-container">
          <div className={styles.list}>
            {REVIEWS.map((review) => (
              <article className={styles.card} key={review.author}>
                <div className="review-stars">{"★".repeat(review.rating)}</div>
                <p className="review-text">{review.text}</p>
                <p className="review-author">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
