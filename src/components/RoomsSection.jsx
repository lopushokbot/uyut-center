import { HOME_ROOMS } from "../data/rooms";

export default function RoomsSection({
  onBookRoom,
  onOpenGallery,
  onRoomImgError,
  roomImgErrors,
}) {
  return (
    <section className="section rooms-section fade-section" id="rooms">
      <div className="rooms-header">
        <div className="section-label">Размещение</div>
        <h2 className="section-title">Номера</h2>
        <div className="gold-line" style={{ margin: "20px auto" }} />
        <p className="section-desc">
          Семь категорий — от уютных одноместных до просторных двухкомнатных
          люксов. Нажмите на фото, чтобы открыть галерею номера.
        </p>
      </div>

      <div className="rooms-grid">
        {HOME_ROOMS.map((room) => {
          const photoCount = room.gallery?.length ?? 1;

          return (
            <div className="room-card" key={room.id}>
              <button
                aria-label={`Открыть фотографии номера ${room.name}`}
                className="room-card-img"
                onClick={() => onOpenGallery?.(room)}
                style={
                  roomImgErrors[room.id] ? { background: room.gradient } : {}
                }
                type="button"
              >
                {roomImgErrors[room.id] ? (
                  <div className="room-card-placeholder">
                    <span className="ph-emoji">{room.emoji}</span>
                    {room.name}
                  </div>
                ) : (
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    onError={() => onRoomImgError?.(room.id)}
                  />
                )}
                <div className="room-card-overlay" />
                <div className="room-card-price">{room.price}</div>
                {photoCount > 1 ? (
                  <div className="room-card-photos">
                    {photoCount} фото
                  </div>
                ) : null}
              </button>

              <div className="room-card-body">
                <div className="room-card-name">{room.name}</div>
                <div className="room-card-desc">{room.summary}</div>
                <div className="room-card-features">
                  {room.features.slice(0, 4).map((feature) => (
                    <span className="room-feature-tag" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  className="room-card-book-btn"
                  data-room-name={room.widgetRoomName}
                  onClick={() => onBookRoom?.(room)}
                  type="button"
                >
                  Забронировать
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
