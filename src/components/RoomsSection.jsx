import { ROOMS } from "../data/hotelData";

export default function RoomsSection({
  onBookRoom,
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
          Выберите идеальный номер — от уютных одноместных до просторных
          двухкомнатных люксов.
        </p>
      </div>

      <div className="rooms-grid">
        {ROOMS.map((room) => (
          <div className="room-card" key={room.id}>
            <div
              className="room-card-img"
              style={
                roomImgErrors[room.id] ? { background: room.gradient } : {}
              }
            >
              {roomImgErrors[room.id] ? (
                <div className="room-card-placeholder">
                  <span className="ph-emoji">{room.emoji}</span>
                  {room.name}
                </div>
              ) : (
                <img
                  src={room.imgUrl}
                  alt={room.name}
                  loading="lazy"
                  onError={() => onRoomImgError(room.id)}
                />
              )}
              <div className="room-card-overlay" />
              <div className="room-card-price">{room.price}</div>
            </div>

            <div className="room-card-body">
              <div className="room-card-name">{room.name}</div>
              <div className="room-card-desc">{room.desc}</div>
              <div className="room-card-features">
                {room.features.map((feature) => (
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
        ))}
      </div>
    </section>
  );
}
