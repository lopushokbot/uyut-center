"use client";

import { useState } from "react";
import BookingStrip from "./BookingStrip";

export default function BookingPanelClient() {
  const [bookingData, setBookingData] = useState({
    checkin: "",
    checkout: "",
    guests: "2",
  });

  const handleBookingChange = (field) => (event) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleBookingSubmit = () => {
    alert(
      `Запрос на бронирование:\nЗаезд: ${bookingData.checkin}\nВыезд: ${bookingData.checkout}\nГости: ${bookingData.guests}`,
    );
  };

  return (
    <BookingStrip
      bookingData={bookingData}
      onBookingChange={handleBookingChange}
      onBookingSubmit={handleBookingSubmit}
    />
  );
}
