import { OFFERS } from "../data/hotelData";

export default function OffersSection() {
  return (
    <section className="section section-dark fade-section" id="offers">
      <div className="offers-header">
        <div className="section-label">Специальные предложения</div>
        <h2 className="section-title">Акции</h2>
        <div className="gold-line" style={{ margin: "20px auto" }} />
      </div>
      <div className="offers-grid">
        {OFFERS.map((offer) => (
          <div className="offer-card" key={offer.title}>
            <div className="offer-card-icon-wrap">{offer.icon}</div>
            <div className="offer-card-body">
              <div className="offer-card-title">{offer.title}</div>
              <div className="offer-card-desc">{offer.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
