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

  const handleRoomImgError = (id) => {
    setRoomImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <SiteShell>
      <HeroSection />
      <BookingStrip />
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
