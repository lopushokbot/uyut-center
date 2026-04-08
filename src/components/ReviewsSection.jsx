import { REVIEWS } from "../data/hotelData";

export default function ReviewsSection({
  currentReviewIndex,
  onSelectReview,
}) {
  const currentReview = REVIEWS[currentReviewIndex];

  return (
    <section className="section section-dark fade-section" id="reviews">
      <div className="reviews-wrap">
        <div className="section-label">Отзывы гостей</div>
        <h2 className="section-title">Что говорят о нас</h2>
        <div className="gold-line" style={{ margin: "20px auto" }} />
        <div className="reviews-card">
          <div className="review-stars">{"★".repeat(currentReview.rating)}</div>
          <p className="review-text">{currentReview.text}</p>
          <p className="review-author">{currentReview.author}</p>
        </div>
        <div className="review-dots">
          {REVIEWS.map((review, index) => (
            <div
              key={review.author}
              className={`review-dot ${
                index === currentReviewIndex ? "active" : ""
              }`}
              onClick={() => onSelectReview(index)}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
          <span className="integration-badge">Яндекс</span>
          <span className="integration-badge">Google</span>
          <span className="integration-badge">TripAdvisor</span>
        </div>
      </div>
    </section>
  );
}
