"use client";

import { useEffect, useState } from "react";
import { REVIEWS } from "../data/hotelData";
import SiteShell from "./SiteShell";
import HeroSection from "./HeroSection";
import BookingStrip from "./BookingStrip";
import AboutSection from "./AboutSection";
import RoomsSection from "./RoomsSection";
import RestaurantSection from "./RestaurantSection";
import OffersSection from "./OffersSection";
import AdvantagesSection from "./AdvantagesSection";
import ReviewsSection from "./ReviewsSection";
import PaymentSection from "./PaymentSection";
import ContactsSection from "./ContactsSection";

export default function HomePageClient() {
  const [paymentMethod, setPaymentMethod] = useState("Банковская карта");
  const [reviewIdx, setReviewIdx] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkin: "",
    checkout: "",
    guests: "2",
  });
  const [roomImgErrors, setRoomImgErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".fade-section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIdx((index) => (index + 1) % REVIEWS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const handleBookingChange = (field) => (event) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleBookingSubmit = () => {
    alert(
      `Запрос на бронирование:\nЗаезд: ${bookingData.checkin}\nВыезд: ${bookingData.checkout}\nГости: ${bookingData.guests}\n\n(Интеграция с системой бронирования подключается)`,
    );
  };

  const handleRoomImgError = (id) => {
    setRoomImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <SiteShell>
      <HeroSection />
      <BookingStrip
        bookingData={bookingData}
        onBookingChange={handleBookingChange}
        onBookingSubmit={handleBookingSubmit}
      />
      <AboutSection />
      <RoomsSection
        onRoomImgError={handleRoomImgError}
        roomImgErrors={roomImgErrors}
      />
      <RestaurantSection />
      <OffersSection />
      <AdvantagesSection />
      <ReviewsSection
        currentReviewIndex={reviewIdx}
        onSelectReview={setReviewIdx}
      />
      <PaymentSection
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
      />
      <ContactsSection />
    </SiteShell>
  );
}
