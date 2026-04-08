import PageHero from "../../components/PageHero";
import SiteShell from "../../components/SiteShell";
import { REVIEWS } from "../../data/hotelData";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("reviews");

export default function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Отзывы гостей"
        title="Отзывы"
        description="Мнения гостей о гостинице «Уют»: расположение, чистота номеров, качество завтраков и уровень сервиса."
      />
      <section className="section section-dark fade-section visible">
        <div className="page-container">
          <div className="reviews-list">
            {REVIEWS.map((review) => (
              <article className="reviews-card-static" key={review.author}>
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
