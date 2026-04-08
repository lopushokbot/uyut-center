"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CallbackModal from "./CallbackModal";
import { NAV_ITEMS } from "../data/siteData";

export default function SiteShell({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <div className="page-shell">
      <Navigation
        mobileMenu={mobileMenu}
        navItems={NAV_ITEMS}
        onCloseMobile={() => setMobileMenu(false)}
        onOpenCallback={() => setCallbackOpen(true)}
        onToggleMobileMenu={() => setMobileMenu((prev) => !prev)}
        scrolled={scrolled}
      />
      <main>{children}</main>
      <Footer navItems={NAV_ITEMS} />
      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
      />
    </div>
  );
}
