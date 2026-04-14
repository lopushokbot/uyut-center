"use client";

import styles from "./RoomsPage.module.css";

export default function RoomsPageDetailsClient({ rooms, onBookRoom }) {
  return (
    <div className={styles.detailList}>
      {rooms.map((room, index) => (
        <article
          className={`${styles.detail} ${index % 2 ? styles.isReversed : ""}`.trim()}
          key={room.id}
        >
          <div className={styles.detailVisual}>
            <img src={room.image} alt={room.name} />
          </div>
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
  );
}
