import Link from "next/link";

export default function BookingCta() {
  return (
    <section className="section fade-section visible">
      <div className="page-container cta-banner">
        <div>
          <div className="section-label">Прямое бронирование</div>
          <h2 className="section-title">Выберите номер и оформите заявку онлайн</h2>
        </div>
        <Link className="hero-btn" href="/prices_and_rooms/">
          Смотреть номера
        </Link>
      </div>
    </section>
  );
}
