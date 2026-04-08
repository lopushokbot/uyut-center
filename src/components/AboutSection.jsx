import { ABOUT_FEATURES } from "../data/hotelData";

export default function AboutSection() {
  return (
    <section className="section fade-section" id="about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-visual-text">
            <span className="big-star">★★★</span>
            Трёхзвёздочная гостиница
            <br />в самом центре г. Клинцы
          </div>
          <div className="about-img-accent" />
        </div>
        <div>
          <div className="section-label">Добро пожаловать</div>
          <h2 className="section-title">Об отеле</h2>
          <div className="gold-line" />
          <p className="section-desc">
            Трёхзвёздочная гостиница «Уют» расположена в самом центре города
            Клинцы. Интерьер светлых номеров оформлен в тёплых тонах и
            классическом стиле. Все номера оборудованы телевизором,
            холодильником и собственной ванной комнатой с феном и бесплатными
            косметическими принадлежностями.
          </p>
          <div className="about-features">
            {ABOUT_FEATURES.map((feature) => (
              <div className="about-feature" key={feature}>
                <span className="about-feature-icon">✦</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
