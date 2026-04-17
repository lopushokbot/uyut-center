import { OFFERS } from "../data/hotelData";

const OFFER_ICONS = {
  conference: (
    <svg viewBox="0 0 48 48" aria-hidden="true" width="32" height="32" fill="none">
      <rect x="6" y="10" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 16h36" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 38h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 32v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  wedding: (
    <svg viewBox="0 0 48 48" aria-hidden="true" width="32" height="32" fill="none">
      <circle cx="18" cy="30" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 14l4 6 4-10 4 10 4-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  transfer: (
    <svg viewBox="0 0 48 48" aria-hidden="true" width="32" height="32" fill="none">
      <path d="M10 28l3-10a3 3 0 0 1 2.8-2h16.4a3 3 0 0 1 2.8 2l3 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="8" y="28" width="32" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="36" r="2.4" fill="currentColor" />
      <circle cx="32" cy="36" r="2.4" fill="currentColor" />
    </svg>
  ),
  birthday: (
    <svg viewBox="0 0 48 48" aria-hidden="true" width="32" height="32" fill="none">
      <path d="M10 24h28v10a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V24z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 24v-4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 18V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="9" r="1.6" fill="currentColor" />
      <path d="M10 28c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

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
            <div className="offer-card-icon-wrap">
              {OFFER_ICONS[offer.iconKey] ?? null}
            </div>
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
