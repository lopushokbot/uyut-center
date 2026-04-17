"use client";

import { useRef, useState } from "react";
import RoomGalleryModal from "./RoomGalleryModal";
import styles from "./RoomsPage.module.css";

function RoomImageCarousel({ room, onOpenGallery }) {
  const gallery = room.gallery?.length ? room.gallery : [room.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(null);
  const dragDeltaXRef = useRef(0);
  const didDragRef = useRef(false);

  const dotCount = Math.min(3, gallery.length);
  const activeDot =
    gallery.length <= 3
      ? currentIndex
      : Math.min(
          dotCount - 1,
          Math.floor((currentIndex * dotCount) / gallery.length),
        );

  const showPrevImage = () => {
    if (gallery.length <= 1) {
      return;
    }

    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? gallery.length - 1 : previousIndex - 1,
    );
  };

  const showNextImage = () => {
    if (gallery.length <= 1) {
      return;
    }

    setCurrentIndex((previousIndex) =>
      previousIndex === gallery.length - 1 ? 0 : previousIndex + 1,
    );
  };

  const handlePointerDown = (event) => {
    if (!event.isPrimary) {
      return;
    }

    dragStartXRef.current = event.clientX;
    dragDeltaXRef.current = 0;
    didDragRef.current = false;
    setDragOffsetX(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (dragStartXRef.current === null) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    dragDeltaXRef.current = deltaX;
    setDragOffsetX(deltaX);

    if (Math.abs(deltaX) > 8) {
      didDragRef.current = true;
    }
  };

  const handlePointerEnd = (event) => {
    if (dragStartXRef.current === null) {
      return;
    }

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(dragDeltaXRef.current) > 50 && gallery.length > 1) {
      if (dragDeltaXRef.current < 0) {
        showNextImage();
      } else {
        showPrevImage();
      }
    }

    dragStartXRef.current = null;
    dragDeltaXRef.current = 0;
    setDragOffsetX(0);
    setIsDragging(false);
  };

  const handleClick = () => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }

    onOpenGallery(room, currentIndex);
  };

  return (
    <div
      aria-label={`Фотографии номера ${room.name}`}
      className={styles.detailVisual}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenGallery(room, currentIndex);
        }

        if (event.key === "ArrowLeft" && gallery.length > 1) {
          showPrevImage();
        }

        if (event.key === "ArrowRight" && gallery.length > 1) {
          showNextImage();
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.detailVisualTrack} ${isDragging ? styles.isDragging : ""}`.trim()}
        style={{
          transform: `translate3d(calc(${-currentIndex * 100}% + ${dragOffsetX}px), 0, 0)`,
        }}
      >
        {gallery.map((image, imageIndex) => (
          <div
            className={styles.detailVisualSlide}
            key={`${room.id}-${imageIndex}`}
          >
            <img
              alt={`${room.name} — фото ${imageIndex + 1}`}
              draggable="false"
              src={image}
            />
          </div>
        ))}
      </div>

      <div className={styles.detailVisualDots} aria-hidden="true">
        {Array.from({ length: dotCount }).map((_, dotIndex) => (
          <span
            className={`${styles.detailVisualDot} ${
              dotIndex === activeDot ? styles.detailVisualDotActive : ""
            }`.trim()}
            key={`${room.id}-dot-${dotIndex}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RoomsPageDetailsClient({ rooms, onBookRoom }) {
  const [galleryRoom, setGalleryRoom] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (room, startIndex = 0) => {
    setGalleryRoom(room);
    setGalleryIndex(startIndex);
  };

  const closeGallery = () => {
    setGalleryRoom(null);
    setGalleryIndex(0);
  };

  return (
    <>
      <div className={styles.detailList}>
        {rooms.map((room, index) => (
          <article
            className={`${styles.detail} ${index % 2 ? styles.isReversed : ""}`.trim()}
            key={room.id}
          >
            <RoomImageCarousel onOpenGallery={openGallery} room={room} />
            <div className={styles.detailCopy}>
              <div className={styles.detailTopline}>
                <span>{room.subtitle}</span>
                <strong>{room.price}</strong>
              </div>
              <h3 className={styles.detailTitle}>{room.name}</h3>
              <p className={styles.detailText}>{room.description}</p>
              <p className={styles.detailText}>{room.details}</p>
              <div className={styles.detailFeatures}>
                {room.features.map((feature) => (
                  <span className={styles.detailFeature} key={feature}>
                    {feature}
                  </span>
                ))}
              </div>
              <div className={styles.detailActions}>
                <button
                  className="hero-btn"
                  data-room-name={room.widgetRoomName}
                  onClick={() => onBookRoom(room)}
                  type="button"
                >
                  Забронировать
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <RoomGalleryModal
        room={galleryRoom}
        initialIndex={galleryIndex}
        onClose={closeGallery}
      />
    </>
  );
}
