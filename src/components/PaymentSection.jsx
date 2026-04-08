import { PAYMENT_METHODS } from "../data/hotelData";

const PAYMENT_DESCRIPTIONS = {
  "Банковская карта":
    "Принимаем Visa, MasterCard, МИР. Безопасная оплата через защищённое соединение.",
  "СБП":
    "Оплата через Систему Быстрых Платежей — мгновенное зачисление по QR-коду.",
  "Банковский перевод":
    "Безналичная оплата по реквизитам для юридических лиц и командировочных.",
  "Наличные": "Оплата наличными при заселении на стойке регистрации.",
};

export default function PaymentSection({
  paymentMethod,
  onPaymentMethodChange,
}) {
  return (
    <section className="section fade-section" style={{ textAlign: "center" }}>
      <div className="section-label">Оплата</div>
      <h2 className="section-title">Способы оплаты</h2>
      <div className="gold-line" style={{ margin: "20px auto" }} />
      <p className="section-desc" style={{ margin: "0 auto 32px", textAlign: "center" }}>
        Принимаем различные способы оплаты для вашего удобства.
      </p>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {PAYMENT_METHODS.map((method) => (
          <div
            key={method.label}
            className={`payment-method ${
              paymentMethod === method.label ? "active" : ""
            }`}
            onClick={() => onPaymentMethodChange(method.label)}
          >
            <div className="payment-method-icon">{method.icon}</div>
            <div className="payment-method-label">{method.label}</div>
          </div>
        ))}
      </div>
      <div className="payment-info" style={{ maxWidth: 520, margin: "24px auto 0" }}>
        {PAYMENT_DESCRIPTIONS[paymentMethod]}
      </div>
      <div style={{ marginTop: 16 }}>
        <span className="integration-badge">🔗 Онлайн-оплата</span>
      </div>
    </section>
  );
}
