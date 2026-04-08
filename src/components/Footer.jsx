import Link from "next/link";

export default function Footer({ navItems }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Гостиница «Уют» ★★★</div>
          <p className="footer-tagline">
            Трёхзвёздочная гостиница в центре Клинцов.
            <br />
            Уютные номера, вкусная еда, тёплый приём.
          </p>
        </div>
        <div>
          <div className="footer-heading">Навигация</div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="footer-heading">Гостям</div>
          <Link href="/prices_and_rooms/" className="footer-link">
            Бронирование
          </Link>
          <Link href="/fun_and_services/" className="footer-link">
            Услуги отеля
          </Link>
          <Link href="/fun_and_services/" className="footer-link">
            Трансфер
          </Link>
          <Link href="/disconts/" className="footer-link">
            Акции
          </Link>
        </div>
        <div>
          <div className="footer-heading">Документы</div>
          <Link href="/terms/" className="footer-link">
            Политика конфиденциальности
          </Link>
          <Link href="/terms-of-use/" className="footer-link">
            Пользовательское соглашение
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Гостиница «Уют». Все права защищены.
      </div>
    </footer>
  );
}
