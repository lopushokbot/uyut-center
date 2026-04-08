import { ADVANTAGES } from "../data/hotelData";

export default function AdvantagesSection() {
  return (
    <section className="section fade-section">
      <div className="advantages-wrap">
        <div className="advantages-header">
          <div className="section-label">Преимущества</div>
          <h2 className="section-title">Бронируйте напрямую</h2>
          <div className="gold-line" style={{ margin: "20px auto" }} />
        </div>
        {ADVANTAGES.map((advantage) => (
          <div className="advantage-row" key={advantage.num}>
            <div className="advantage-num">{advantage.num}</div>
            <div className="advantage-text">{advantage.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
