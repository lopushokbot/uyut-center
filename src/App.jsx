import { useEffect, useState } from "react";
import { css } from "./styles/appStyles";
import { NAV_ITEMS, REVIEWS } from "./data/hotelData";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import BookingStrip from "./components/BookingStrip";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import RestaurantSection from "./components/RestaurantSection";
import OffersSection from "./components/OffersSection";
import AdvantagesSection from "./components/AdvantagesSection";
import ReviewsSection from "./components/ReviewsSection";
import PaymentSection from "./components/PaymentSection";
import ContactsSection from "./components/ContactsSection";
import Footer from "./components/Footer";
import CallbackModal from "./components/CallbackModal";

export default function HotelUyut() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Банковская карта");
  const [reviewIdx, setReviewIdx] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkin: "",
    checkout: "",
    guests: "2",
  });
  const [roomImgErrors, setRoomImgErrors] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const closeMobile = () => setMobileMenu(false);

  const handleBookingChange = (field) => (event) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleBookingSubmit = () => {
    alert(
      `Запрос на бронирование:\nЗаезд: ${bookingData.checkin}\nВыезд: ${bookingData.checkout}\nГости: ${bookingData.guests}\n\n(Интеграция с Контур.Отель — endpoint подключается)`,
    );
  };

  const handleRoomImgError = (id) => {
    setRoomImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <>
      <style>{css}</style>

      <Navigation
        mobileMenu={mobileMenu}
        navItems={NAV_ITEMS}
        onCloseMobile={closeMobile}
        onOpenCallback={() => setCallbackOpen(true)}
        onToggleMobileMenu={() => setMobileMenu((prev) => !prev)}
        scrolled={scrolled}
      />

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
      <Footer navItems={NAV_ITEMS} />

      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
      />
    </>
  );
}
