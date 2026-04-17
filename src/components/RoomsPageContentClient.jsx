"use client";

import { useState } from "react";
import Link from "next/link";
import BookingPanelClient from "./BookingPanelClient";
import BookingModal from "./BookingModal";
import OpenCallbackButton from "./OpenCallbackButton";
import RoomsPageDetailsClient from "./RoomsPageDetailsClient";
import styles from "./RoomsPage.module.css";

export default function RoomsPageContentClient({ breakfastNote, rooms }) {
  const [bookingRoom, setBookingRoom] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookRoom = (room) => {
    setBookingRoom(room);
    setBookingOpen(true);
  };

  return (
    <>
      <BookingPanelClient />

      <section className="section fade-section visible">
        <div className={`page-container ${styles.breakfast}`}>
          <div>
            <div className="section-label">Условия проживания</div>
            <h2 className="section-title">Завтрак уже включён</h2>
          </div>
          <p>{breakfastNote}</p>
        </div>
      </section>

      <section
        id="room-details"
        className="section section-dark fade-section visible"
      >
        <div className="page-container">
          <div className={`offers-header ${styles.header}`}>
            <div className="section-label">Подробнее</div>
            <h2 className="section-title">Что входит в каждый номер</h2>
            <div className="gold-line" />
            <p className="section-desc">
              Планировки, мебель, ванная, сервис и особенности каждого формата
              размещения — подробно по каждой категории.
            </p>
          </div>
          <RoomsPageDetailsClient rooms={rooms} onBookRoom={handleBookRoom} />
        </div>
      </section>

      <section className="section fade-section visible">
        <div className="page-container cta-banner">
          <div>
            <div className="section-label">Следующий шаг</div>
            <h2 className="section-title">
              Нужен номер на конкретные даты или помощь с выбором
            </h2>
          </div>
          <div className={styles.ctaActions}>
            <OpenCallbackButton className="hero-btn about-page-secondary-btn">
              Связаться с отелем
            </OpenCallbackButton>
            <a className="hero-btn" href="tel:+79307224888">
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <section className="section fade-section visible">
        <div className={`page-container ${styles.servicesTeaser}`}>
          <div>
            <div className="section-label">Помимо номера</div>
            <h2 className="section-title">
              Парковка, сауна, трансфер и конференц-зал
            </h2>
            <p className="section-desc">
              В стоимость проживания уже включены завтрак и Wi-Fi, а в отеле
              доступны дополнительные услуги: от бесплатной парковки до сауны и
              помещения для переговоров.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className="hero-btn" href="/fun_and_services/">
              Смотреть услуги
            </Link>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedRoomName={bookingRoom?.name}
        selectedWidgetRoomName={bookingRoom?.widgetRoomName}
      />
    </>
  );
}
