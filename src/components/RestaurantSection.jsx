import { RESTAURANT_MENU_URL } from "../data/hotelData";

export default function RestaurantSection() {
  return (
    <section className="fade-section" id="restaurant">
      <div className="restaurant-wrap">
        <div className="restaurant-visual">
          <div className="restaurant-visual-inner">
            <span className="rv-icon">🍽️</span>
            <span className="rv-text">
              Европейская кухня
              <br />в тёплой атмосфере
            </span>
          </div>
        </div>
        <div className="restaurant-text">
          <div className="section-label">Гастрономия</div>
          <h2 className="section-title">Ресторан «Метрополь»</h2>
          <div className="gold-line" />
          <p className="section-desc" style={{ marginBottom: 24 }}>
            Ресторан с тёплой атмосферой в центре Клинцов. Классические блюда
            европейской кухни. Для гостей отеля действует скидка 10%.
          </p>
          <a
            href={RESTAURANT_MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{ alignSelf: "flex-start", fontSize: ".73rem", padding: "12px 36px" }}
          >
            Меню ресторана
          </a>
        </div>
      </div>
    </section>
  );
}
