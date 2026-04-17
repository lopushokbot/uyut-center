import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-decor" />
      <div className="hero-decor-2" />
      <div className="hero-decor-3" />
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--tr" />
      <div className="hero-corner hero-corner--bl" />
      <div className="hero-corner hero-corner--br" />
      <div className="hero-content">
        <div className="hero-stars">★ ★ ★</div>
        <h1 className="hero-title">Гостиница «Уют»</h1>
        <p className="hero-location">г. Клинцы · ул. К. Маркса, д. 1</p>
        <div className="hero-divider" />
        <p className="hero-tagline">Для тех, кто ценит комфорт и своё время</p>
        <Link href="/prices_and_rooms/#room-details" className="hero-btn">
          Смотреть номера
        </Link>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
