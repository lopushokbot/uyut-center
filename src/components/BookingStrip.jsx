export default function BookingStrip({
  bookingData,
  onBookingChange,
  onBookingSubmit,
}) {
  return (
    <div className="booking-strip">
      <div className="booking-field">
        <label>Заезд</label>
        <input
          type="date"
          value={bookingData.checkin}
          onChange={onBookingChange("checkin")}
        />
      </div>
      <div className="booking-field">
        <label>Выезд</label>
        <input
          type="date"
          value={bookingData.checkout}
          onChange={onBookingChange("checkout")}
        />
      </div>
      <div className="booking-field">
        <label>Гости</label>
        <select
          value={bookingData.guests}
          onChange={onBookingChange("guests")}
        >
          <option value="1">1 гость</option>
          <option value="2">2 гостя</option>
          <option value="3">3 гостя</option>
          <option value="4">4 гостя</option>
        </select>
      </div>
      <button className="booking-submit" onClick={onBookingSubmit}>
        Забронировать
      </button>
      <span className="integration-badge">🔗 Контур.Отель</span>
    </div>
  );
}
