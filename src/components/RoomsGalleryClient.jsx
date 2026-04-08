"use client";

import { useState } from "react";
import RoomsSection from "./RoomsSection";

export default function RoomsGalleryClient() {
  const [roomImgErrors, setRoomImgErrors] = useState({});

  const handleRoomImgError = (id) => {
    setRoomImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <RoomsSection
      onRoomImgError={handleRoomImgError}
      roomImgErrors={roomImgErrors}
    />
  );
}
