"use client";

import { useEffect } from "react";
import BookingStrip from "./BookingStrip";

export default function BookingModal({
  isOpen,
  onClose,
  selectedRoomName,
  selectedWidgetRoomName,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay booking-modal-overlay" onClick={onClose}>
      <div
        className="modal booking-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} type="button">
          ✕
        </button>
        <BookingStrip
          mode="modal"
          selectedRoomName={selectedRoomName}
          selectedWidgetRoomName={selectedWidgetRoomName}
        />
      </div>
    </div>
  );
}
