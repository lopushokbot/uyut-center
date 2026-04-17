"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./RoomsPage.module.css";

export default function RoomGalleryModal({ room, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(null);
  const dragDeltaXRef = useRef(0);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, room]);

  const gallery = room?.gallery?.length ? room.gallery : room ? [room.image] : [];

  const showPrev = () => {
    if (gallery.length <= 1) return;
    setIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  };

  const showNext = () => {
    if (gallery.length <= 1) return;
    setIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!room) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  if (!room || typeof document === "undefined") {
    return null;
  }

  const handlePointerDown = (event) => {
    if (!event.isPrimary) return;
    dragStartXRef.current = event.clientX;
    dragDeltaXRef.current = 0;
    setDragOffsetX(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    dragDeltaXRef.current = deltaX;
    setDragOffsetX(deltaX);
  };

  const releasePointer = (event) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerUp = (event) => {
    if (dragStartXRef.current === null) return;
    releasePointer(event);

    if (Math.abs(dragDeltaXRef.current) > 60 && gallery.length > 1) {
      if (dragDeltaXRef.current < 0) showNext();
      else showPrev();
    }

    dragStartXRef.current = null;
    dragDeltaXRef.current = 0;
    setDragOffsetX(0);
    setIsDragging(false);
  };

  const handlePointerCancel = (event) => {
    releasePointer(event);
    dragStartXRef.current = null;
    dragDeltaXRef.current = 0;
    setDragOffsetX(0);
    setIsDragging(false);
  };

  return createPortal(
    <div className={styles.galleryOverlay} onClick={onClose}>
      <div
        className={styles.galleryModal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Закрыть галерею"
          className={styles.galleryClose}
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <div className={styles.galleryHeader}>
          <div>
            <p className={styles.galleryKicker}>Фотографии номера</p>
            <h3 className={styles.galleryTitle}>{room.name}</h3>
          </div>
          <p className={styles.galleryCounter}>
            {index + 1} / {gallery.length}
          </p>
        </div>

        <div className={styles.galleryStage}>
          {gallery.length > 1 ? (
            <button
              aria-label="Предыдущее фото"
              className={`${styles.galleryNav} ${styles.galleryNavPrev}`}
              onClick={showPrev}
              type="button"
            >
              ‹
            </button>
          ) : null}

          <div
            className={styles.galleryImageWrap}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
          >
            <div
              className={`${styles.galleryImageTrack} ${
                isDragging ? styles.isDragging : ""
              }`.trim()}
              style={{
                transform: `translate3d(calc(${-index * 100}% + ${dragOffsetX}px), 0, 0)`,
              }}
            >
              {gallery.map((image, imageIndex) => (
                <div
                  className={styles.galleryImageSlide}
                  key={`${room.id}-gallery-${imageIndex}`}
                >
                  <img
                    alt={`${room.name} — фото ${imageIndex + 1}`}
                    className={styles.galleryImage}
                    draggable="false"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>

          {gallery.length > 1 ? (
            <button
              aria-label="Следующее фото"
              className={`${styles.galleryNav} ${styles.galleryNavNext}`}
              onClick={showNext}
              type="button"
            >
              ›
            </button>
          ) : null}
        </div>

        {gallery.length > 1 ? (
          <div className={styles.galleryThumbs}>
            {gallery.map((image, imageIndex) => (
              <button
                aria-label={`Показать фото ${imageIndex + 1}`}
                className={`${styles.galleryThumb} ${
                  imageIndex === index ? styles.galleryThumbActive : ""
                }`.trim()}
                key={image}
                onClick={() => setIndex(imageIndex)}
                type="button"
              >
                <img alt="" src={image} />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
