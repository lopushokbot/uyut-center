import Link from "next/link";

export default function Navigation({
  mobileMenu,
  navItems,
  onCloseMobile,
  onOpenCallback,
  onToggleMobileMenu,
  scrolled,
}) {
  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          Уют <span className="star">★★★</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div
          className="nav-right-desktop"
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <a href="tel:+79307224888" className="nav-phone">
            +7 (930) 722-48-88
          </a>
          <button className="nav-book-btn" onClick={onOpenCallback}>
            Обратный звонок
          </button>
        </div>
        <button
          className={`nav-burger ${mobileMenu ? "open" : ""}`}
          onClick={onToggleMobileMenu}
          aria-label="Открыть меню"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onCloseMobile}>
            {item.label}
          </Link>
        ))}
        <a href="tel:+79307224888" onClick={onCloseMobile}>
          +7 (930) 722-48-88
        </a>
        <button
          type="button"
          className="mobile-menu-cta"
          onClick={() => {
            onCloseMobile?.();
            onOpenCallback?.();
          }}
        >
          Обратный звонок
        </button>
      </div>
    </>
  );
}
