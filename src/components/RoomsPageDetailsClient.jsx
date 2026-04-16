"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [galleryDragOffsetX, setGalleryDragOffsetX] = useState(0);
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const galleryDragStartXRef = useRef(null);
  const galleryDragDeltaXRef = useRef(0);

  const openGallery = (room, startIndex = 0) => {
    setGalleryRoom(room);
    setGalleryIndex(startIndex);
  };

  const closeGallery = () => {
    setGalleryRoom(null);
    setGalleryIndex(0);
    setGalleryDragOffsetX(0);
    setIsGalleryDragging(false);
  };

  const showPrevImage = () => {
    if (!galleryRoom) {
      return;
    }

    setGalleryIndex((currentIndex) =>
      currentIndex === 0 ? galleryRoom.gallery.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (!galleryRoom) {
      return;
    }

    setGalleryIndex((currentIndex) =>
      currentIndex === galleryRoom.gallery.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (!galleryRoom) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryRoom]);

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
                  className={styles.detailBookBtn}
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

      {galleryRoom && typeof document !== "undefined"
        ? createPortal(
            <div className={styles.galleryOverlay} onClick={closeGallery}>
              <div
                className={styles.galleryModal}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  aria-label="Закрыть галерею"
                  className={styles.galleryClose}
                  onClick={closeGallery}
                  type="button"
                >
                  ×
                </button>

                <div className={styles.galleryHeader}>
                  <div>
                    <p className={styles.galleryKicker}>Фотографии номера</p>
                    <h3 className={styles.galleryTitle}>{galleryRoom.name}</h3>
                  </div>
                  <p className={styles.galleryCounter}>
                    {galleryIndex + 1} / {galleryRoom.gallery.length}
                  </p>
                </div>

                <div className={styles.galleryStage}>
                  {galleryRoom.gallery.length > 1 ? (
                    <button
                      aria-label="Предыдущее фото"
                      className={`${styles.galleryNav} ${styles.galleryNavPrev}`}
                      onClick={showPrevImage}
                      type="button"
                    >
                      ‹
                    </button>
                  ) : null}

                  <div
                    className={styles.galleryImageWrap}
                    onPointerDown={(event) => {
                      if (!event.isPrimary) {
                        return;
                      }

                      galleryDragStartXRef.current = event.clientX;
                      galleryDragDeltaXRef.current = 0;
                      setGalleryDragOffsetX(0);
                      setIsGalleryDragging(true);
                      event.currentTarget.setPointerCapture(event.pointerId);
                    }}
                    onPointerMove={(event) => {
                      if (galleryDragStartXRef.current === null) {
                        return;
                      }

                      const deltaX =
                        event.clientX - galleryDragStartXRef.current;
                      galleryDragDeltaXRef.current = deltaX;
                      setGalleryDragOffsetX(deltaX);
                    }}
                    onPointerUp={(event) => {
                      if (galleryDragStartXRef.current === null) {
                        return;
                      }

                      if (
                        event.currentTarget.hasPointerCapture?.(event.pointerId)
                      ) {
                        event.currentTarget.releasePointerCapture(
                          event.pointerId,
                        );
                      }

                      if (
                        Math.abs(galleryDragDeltaXRef.current) > 60 &&
                        galleryRoom.gallery.length > 1
                      ) {
                        if (galleryDragDeltaXRef.current < 0) {
                          showNextImage();
                        } else {
                          showPrevImage();
                        }
                      }

                      galleryDragStartXRef.current = null;
                      galleryDragDeltaXRef.current = 0;
                      setGalleryDragOffsetX(0);
                      setIsGalleryDragging(false);
                    }}
                    onPointerCancel={(event) => {
                      if (
                        event.currentTarget.hasPointerCapture?.(event.pointerId)
                      ) {
                        event.currentTarget.releasePointerCapture(
                          event.pointerId,
                        );
                      }

                      galleryDragStartXRef.current = null;
                      galleryDragDeltaXRef.current = 0;
                      setGalleryDragOffsetX(0);
                      setIsGalleryDragging(false);
                    }}
                    onPointerLeave={(event) => {
                      if (galleryDragStartXRef.current === null) {
                        return;
                      }

                      if (
                        event.currentTarget.hasPointerCapture?.(event.pointerId)
                      ) {
                        event.currentTarget.releasePointerCapture(
                          event.pointerId,
                        );
                      }

                      galleryDragStartXRef.current = null;
                      galleryDragDeltaXRef.current = 0;
                      setGalleryDragOffsetX(0);
                      setIsGalleryDragging(false);
                    }}
                  >
                    <div
                      className={`${styles.galleryImageTrack} ${
                        isGalleryDragging ? styles.isDragging : ""
                      }`.trim()}
                      style={{
                        transform: `translate3d(calc(${-galleryIndex * 100}% + ${galleryDragOffsetX}px), 0, 0)`,
                      }}
                    >
                      {galleryRoom.gallery.map((image, imageIndex) => (
                        <div
                          className={styles.galleryImageSlide}
                          key={`${galleryRoom.id}-gallery-${imageIndex}`}
                        >
                          <img
                            alt={`${galleryRoom.name} — фото ${imageIndex + 1}`}
                            className={styles.galleryImage}
                            draggable="false"
                            src={image}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {galleryRoom.gallery.length > 1 ? (
                    <button
                      aria-label="Следующее фото"
                      className={`${styles.galleryNav} ${styles.galleryNavNext}`}
                      onClick={showNextImage}
                      type="button"
                    >
                      ›
                    </button>
                  ) : null}
                </div>

                {galleryRoom.gallery.length > 1 ? (
                  <div className={styles.galleryThumbs}>
                    {galleryRoom.gallery.map((image, imageIndex) => (
                      <button
                        aria-label={`Показать фото ${imageIndex + 1}`}
                        className={`${styles.galleryThumb} ${
                          imageIndex === galleryIndex
                            ? styles.galleryThumbActive
                            : ""
                        }`.trim()}
                        key={image}
                        onClick={() => setGalleryIndex(imageIndex)}
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
          )
        : null}
    </>
  );
}
