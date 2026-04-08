export const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap');

:root {
  --gold: #b8963e;
  --gold-light: #d4b067;
  --gold-pale: rgba(184,150,62,.08);
  --dark: #1a1a1a;
  --darker: #0f0f0f;
  --cream: #f5f0e8;
  --cream-light: #faf7f2;
  --text: #3a3a3a;
  --text-light: #8a8a8a;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Raleway', sans-serif;
  --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body); color: var(--text);
  background: var(--cream-light); overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--darker); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

.nav {
  position: fixed; top:0; left:0; right:0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px; height: 80px;
  background: transparent;
  transition: background .5s var(--ease), box-shadow .5s var(--ease), height .3s var(--ease);
}
.nav.scrolled {
  background: rgba(15,15,15,0.97);
  box-shadow: 0 2px 40px rgba(0,0,0,.3);
  height: 68px;
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem; font-weight: 600; color: #fff;
  text-decoration: none; letter-spacing: 1px;
  display: flex; align-items: center; gap: 12px;
}
.nav-logo .star { color: var(--gold); font-size: 0.7em; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  color: rgba(255,255,255,.85); text-decoration: none;
  font-size: .78rem; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase;
  position: relative; transition: color .3s;
}
.nav-links a::after {
  content:''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px;
  background: var(--gold); transition: width .4s var(--ease-out);
}
.nav-links a:hover { color: #fff; }
.nav-links a:hover::after { width: 100%; }
.nav-phone {
  color: #fff; font-size: .85rem; font-weight: 400; letter-spacing: 1px;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  transition: color .3s;
}
.nav-phone:hover { color: var(--gold-light); }
.nav-book-btn {
  background: var(--gold); color: #fff; border: none; padding: 10px 28px;
  font-family: var(--font-body); font-size: .72rem; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
  transition: background .3s, transform .2s;
}
.nav-book-btn:hover { background: var(--gold-light); transform: translateY(-1px); }
.nav-burger {
  display: none; flex-direction: column; gap: 5px; cursor: pointer;
  background: none; border: none; padding: 8px;
}
.nav-burger span {
  width: 24px; height: 1.5px; background: #fff;
  transition: transform .3s, opacity .3s;
}
.nav-burger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 5px); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -5px); }
.mobile-menu {
  display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15,15,15,0.98); z-index: 999;
  flex-direction: column; align-items: center; justify-content: center; gap: 28px;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  color: #fff; text-decoration: none; font-family: var(--font-display);
  font-size: 1.8rem; font-weight: 400; letter-spacing: 2px; transition: color .3s;
}
.mobile-menu a:hover { color: var(--gold); }
@media (max-width: 960px) {
  .nav-links, .nav-phone, .nav-right-desktop { display: none !important; }
  .nav-burger { display: flex; }
  .nav { padding: 0 24px; }
}

.hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  background: var(--darker);
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184,150,62,.14) 0%, transparent 70%),
    radial-gradient(ellipse 60% 50% at 20% 80%, rgba(139,115,85,.1) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 80% 20%, rgba(184,150,62,.08) 0%, transparent 50%),
    linear-gradient(180deg, #0a0a0a 0%, #17140f 35%, #1c1710 65%, #0f0d0a 100%);
}
.hero-bg::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(184,150,62,.018) 60px, rgba(184,150,62,.018) 61px),
    repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(184,150,62,.018) 60px, rgba(184,150,62,.018) 61px);
}
.hero-bg::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,.45) 100%);
}
.hero-decor {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 520px; height: 520px; border: 1px solid rgba(184,150,62,.07);
  border-radius: 50%; pointer-events: none;
  animation: heroRing 7s ease-in-out infinite;
}
.hero-decor-2 {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 400px; height: 400px; border: 1px solid rgba(184,150,62,.04);
  border-radius: 50%; pointer-events: none;
  animation: heroRing 7s ease-in-out 1.2s infinite;
}
.hero-decor-3 {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 280px; height: 280px; border: 1px solid rgba(184,150,62,.03);
  border-radius: 50%; pointer-events: none;
  animation: heroRing 7s ease-in-out 2.4s infinite;
}
@keyframes heroRing {
  0%, 100% { opacity: .3; transform: translate(-50%,-50%) scale(1); }
  50% { opacity: .65; transform: translate(-50%,-50%) scale(1.05); }
}
.hero-corner { position: absolute; z-index: 1; }
.hero-corner--tl { top: 48px; left: 48px; width: 50px; height: 50px; border-top: 1px solid rgba(184,150,62,.22); border-left: 1px solid rgba(184,150,62,.22); }
.hero-corner--tr { top: 48px; right: 48px; width: 50px; height: 50px; border-top: 1px solid rgba(184,150,62,.22); border-right: 1px solid rgba(184,150,62,.22); }
.hero-corner--bl { bottom: 48px; left: 48px; width: 50px; height: 50px; border-bottom: 1px solid rgba(184,150,62,.22); border-left: 1px solid rgba(184,150,62,.22); }
.hero-corner--br { bottom: 48px; right: 48px; width: 50px; height: 50px; border-bottom: 1px solid rgba(184,150,62,.22); border-right: 1px solid rgba(184,150,62,.22); }
.hero-content {
  position: relative; z-index: 2; text-align: center; color: #fff;
  max-width: 800px; padding: 0 24px;
  animation: heroFadeIn 1.4s var(--ease-out) both;
}
@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-stars { font-size: .95rem; letter-spacing: 14px; color: var(--gold); margin-bottom: 28px; }
.hero-title {
  font-family: var(--font-display); font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300; letter-spacing: 8px; line-height: 1.1;
  margin-bottom: 14px;
  background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,.78) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-location {
  font-size: clamp(.78rem, 1.2vw, .95rem); font-weight: 400;
  letter-spacing: 5px; text-transform: uppercase;
  color: rgba(255,255,255,.45); margin-bottom: 36px;
}
.hero-divider { width: 56px; height: 1px; background: var(--gold); margin: 0 auto 36px; }
.hero-tagline {
  font-family: var(--font-display); font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 300; font-style: italic;
  color: rgba(255,255,255,.55); margin-bottom: 52px;
}
.hero-btn {
  display: inline-block; padding: 18px 56px;
  border: 1px solid var(--gold); background: rgba(184,150,62,.08);
  color: var(--cream); font-family: var(--font-body);
  font-size: .78rem; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
  cursor: pointer; transition: all .4s var(--ease); text-decoration: none;
}
.hero-btn:hover { background: var(--gold); border-color: var(--gold); color: #fff; }
.page-hero .hero-btn,
.section-dark .hero-btn {
  background: transparent;
  color: #fff;
}
.hero-scroll {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  z-index: 2; color: rgba(255,255,255,.35); font-size: .62rem; letter-spacing: 4px;
  text-transform: uppercase; display: flex; flex-direction: column; align-items: center; gap: 10px;
  animation: scrollPulse 2.5s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%,100% { opacity: .35; transform: translateX(-50%) translateY(0); }
  50% { opacity: .75; transform: translateX(-50%) translateY(8px); }
}
.hero-scroll-line { width: 1px; height: 48px; background: linear-gradient(180deg, rgba(184,150,62,.35), transparent); }

.section { padding: 100px 48px; }
@media (max-width: 768px) { .section { padding: 64px 20px; } }
.section-label {
  font-size: .7rem; font-weight: 600; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); margin-bottom: 12px;
}
.section-title {
  font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400; color: var(--dark); line-height: 1.2; margin-bottom: 20px;
}
.section-desc {
  font-size: .95rem; font-weight: 300; line-height: 1.8; color: var(--text-light); max-width: 600px;
}
.section-dark { background: var(--darker); color: #fff; }
.section-dark .section-title { color: #fff; }
.section-dark .section-desc { color: rgba(255,255,255,.6); }
.gold-line { width: 48px; height: 1px; background: var(--gold); margin: 20px 0; }

.about-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  align-items: center; max-width: 1200px; margin: 0 auto;
}
@media (max-width: 860px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }
.about-visual {
  position: relative; aspect-ratio: 4/3;
  background: linear-gradient(135deg, #2a2318 0%, #4a3c2e 30%, #3d3225 60%, #2a2318 100%);
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.about-visual::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,150,62,.1), transparent),
    repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.008) 20px, rgba(255,255,255,.008) 21px);
}
.about-visual-text {
  position: relative; z-index: 1; text-align: center; color: rgba(255,255,255,.6);
  font-family: var(--font-display); font-size: 1.1rem; font-style: italic; padding: 40px;
  line-height: 1.6;
}
.about-visual-text .big-star { display: block; font-size: 2.5rem; color: var(--gold); margin-bottom: 16px; font-style: normal; }
.about-img-accent {
  position: absolute; bottom: -12px; right: -12px; width: 120px; height: 120px;
  border: 1px solid var(--gold); z-index: -1;
}
.about-features { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 32px; }
.about-feature {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: .85rem; color: var(--text); font-weight: 400;
}
.about-feature-icon { color: var(--gold); font-size: 1.1rem; flex-shrink: 0; }

.rooms-section { background: var(--cream); }
.rooms-header { text-align: center; margin-bottom: 60px; }
.rooms-header .section-desc { margin: 0 auto; }
.rooms-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
  max-width: 1300px; margin: 0 auto;
}
@media (max-width: 1100px) { .rooms-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .rooms-grid { grid-template-columns: 1fr; } }
.room-card {
  background: #fff; overflow: hidden; cursor: pointer;
  transition: transform .5s var(--ease-out), box-shadow .5s var(--ease-out);
}
.room-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,.1); }
.room-card-img {
  position: relative; overflow: hidden; aspect-ratio: 3/2;
}
.room-card-img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s var(--ease-out);
}
.room-card:hover .room-card-img img { transform: scale(1.06); }
.room-card-placeholder {
  width: 100%; height: 100%; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 8px;
  color: rgba(255,255,255,.7); font-family: var(--font-display);
  font-size: 1rem; font-style: italic;
}
.room-card-placeholder .ph-emoji { font-size: 2.5rem; font-style: normal; margin-bottom: 4px; }
.room-card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,.4) 100%);
  opacity: 0; transition: opacity .4s; pointer-events: none;
}
.room-card:hover .room-card-overlay { opacity: 1; }
.room-card-price {
  position: absolute; bottom: 14px; right: 14px;
  background: rgba(184,150,62,.92); color: #fff;
  padding: 6px 16px; font-size: .75rem; font-weight: 600; letter-spacing: 1px;
  z-index: 2;
}
.room-card-body { padding: 24px; }
.room-card-name {
  font-family: var(--font-display); font-size: 1.5rem; font-weight: 500;
  color: var(--dark); margin-bottom: 8px;
}
.room-card-desc {
  font-size: .85rem; color: var(--text-light); line-height: 1.6;
  margin-bottom: 16px; font-weight: 300;
}
.room-card-features { display: flex; flex-wrap: wrap; gap: 8px; }
.room-feature-tag {
  font-size: .7rem; letter-spacing: 1px; text-transform: uppercase;
  padding: 4px 12px; border: 1px solid #e0d8cc; color: var(--text-light); font-weight: 500;
}

.restaurant-wrap {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  max-width: 1400px; margin: 0 auto;
}
@media (max-width: 860px) { .restaurant-wrap { grid-template-columns: 1fr; } }
.restaurant-visual {
  position: relative; min-height: 380px; overflow: hidden;
  background: linear-gradient(135deg, #1f1a14 0%, #3a2f24 30%, #4d3e2e 60%, #2a2318 100%);
  display: flex; align-items: center; justify-content: center;
}
.restaurant-visual::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,150,62,.1), transparent);
}
.restaurant-visual-inner {
  position: relative; z-index: 1; text-align: center; color: rgba(255,255,255,.5);
  font-family: var(--font-display); padding: 40px;
}
.restaurant-visual-inner .rv-icon { font-size: 3.5rem; margin-bottom: 16px; display: block; }
.restaurant-visual-inner .rv-text { font-size: 1.05rem; font-style: italic; line-height: 1.7; }
.restaurant-text {
  display: flex; flex-direction: column; justify-content: center;
  padding: 60px 64px; background: var(--darker); color: #fff;
}
@media (max-width: 860px) { .restaurant-text { padding: 40px 24px; } }
.restaurant-text .section-title { color: #fff; }
.restaurant-text .section-desc { color: rgba(255,255,255,.6); }

.offers-header { text-align: center; margin-bottom: 60px; }
.offers-header .section-desc { margin: 0 auto; }
.offers-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
  max-width: 1100px; margin: 0 auto;
}
@media (max-width: 768px) { .offers-grid { grid-template-columns: 1fr; } }
.offer-card {
  display: flex; align-items: stretch; overflow: hidden;
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
  transition: border-color .4s, transform .4s var(--ease-out);
}
.offer-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.offer-card-icon-wrap {
  width: 100px; min-height: 100px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(184,150,62,.06); font-size: 2.2rem;
  border-right: 1px solid rgba(255,255,255,.06);
}
.offer-card-body { padding: 24px; display: flex; flex-direction: column; justify-content: center; }
.offer-card-title {
  font-family: var(--font-display); font-size: 1.3rem; font-weight: 500;
  color: #fff; margin-bottom: 8px;
}
.offer-card-desc { font-size: .85rem; color: rgba(255,255,255,.5); line-height: 1.6; font-weight: 300; }

.advantages-wrap { max-width: 900px; margin: 0 auto; }
.advantages-header { text-align: center; margin-bottom: 56px; }
.advantage-row {
  display: flex; align-items: baseline; gap: 28px;
  padding: 24px 0; border-bottom: 1px solid #e4ddd2;
  transition: padding-left .4s var(--ease-out);
}
.advantage-row:hover { padding-left: 12px; }
.advantage-num {
  font-family: var(--font-display); font-size: 2.4rem; font-weight: 300;
  color: var(--gold); min-width: 56px;
}
.advantage-text { font-size: .95rem; font-weight: 400; line-height: 1.6; color: var(--text); }

.reviews-wrap { max-width: 900px; margin: 0 auto; text-align: center; }
.reviews-card {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
  padding: 48px; margin: 40px auto; max-width: 700px; position: relative;
  transition: border-color .6s;
}
.reviews-card:hover { border-color: rgba(184,150,62,.2); }
.reviews-card::before {
  content: '\\201C'; position: absolute; top: 8px; left: 24px;
  font-family: var(--font-display); font-size: 5rem; color: var(--gold); opacity: .25; line-height: 1;
}
.review-stars { color: var(--gold); font-size: .9rem; letter-spacing: 4px; margin-bottom: 16px; }
.review-text {
  font-family: var(--font-display); font-size: 1.15rem; font-style: italic;
  color: rgba(255,255,255,.75); line-height: 1.8; margin-bottom: 20px;
}
.review-author {
  font-size: .78rem; color: var(--gold); letter-spacing: 2px; text-transform: uppercase; font-weight: 500;
}
.review-dots { display: flex; gap: 8px; justify-content: center; margin-top: 28px; }
.review-dot {
  width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.15);
  cursor: pointer; transition: background .3s, transform .3s;
}
.review-dot:hover { transform: scale(1.3); }
.review-dot.active { background: var(--gold); }

.booking-strip {
  background: var(--dark); padding: 28px 48px;
  display: flex; align-items: flex-end; justify-content: center; gap: 20px; flex-wrap: wrap;
}
.booking-widget-section { background: var(--cream); }
.booking-widget-shell {
  padding: 24px 20px;
  box-shadow: 0 18px 40px rgba(9, 14, 18, .18);
  position: relative;
  z-index: 2;
}
.booking-widget-container { width: 100%; }
.booking-widget-form { max-width: 1120px; margin: 0 auto; }
.booking-widget-details { padding-top: 88px; margin-top: -22px; }
.booking-widget-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(280px, .9fr);
  gap: 32px;
  align-items: start;
}
.booking-widget-sidebar { position: sticky; top: 110px; }
.booking-widget-rooms,
.booking-widget-calendar {
  min-height: 240px;
  border-radius: 28px;
  overflow: hidden;
}
.booking-widget-mobile-button { position: relative; z-index: 12; }
@media (max-width: 980px) {
  .booking-widget-grid { grid-template-columns: 1fr; }
  .booking-widget-sidebar { position: static; }
}
@media (max-width: 720px) {
  .booking-strip.booking-widget-shell { padding: 16px 12px; }
  .booking-widget-details {
    padding-top: 64px;
    margin-top: -10px;
  }
}

.map-container { width: 100%; height: 400px; }
.map-container iframe { width: 100%; height: 100%; border: 0; filter: grayscale(.15) contrast(1.05); }

.contacts-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
  max-width: 1100px; margin: 0 auto;
}
@media (max-width: 860px) { .contacts-grid { grid-template-columns: 1fr; } }
.contact-item { margin-bottom: 28px; }
.contact-label {
  font-size: .68rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 8px;
}
.contact-value { font-family: var(--font-display); font-size: 1.3rem; color: var(--dark); }
.contact-value a { color: var(--dark); text-decoration: none; transition: color .3s; }
.contact-value a:hover { color: var(--gold); }
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.contact-form input, .contact-form textarea {
  padding: 14px 18px; border: 1px solid #e0d8cc; background: transparent;
  font-family: var(--font-body); font-size: .9rem; color: var(--text);
  outline: none; transition: border-color .3s; resize: vertical;
}
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--gold); }
.contact-form textarea { min-height: 120px; }
.contact-submit {
  align-self: flex-start; padding: 14px 44px;
  background: var(--dark); color: #fff; border: none;
  font-family: var(--font-body); font-size: .72rem; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
  transition: background .3s;
}
.contact-submit:hover { background: var(--gold); }

.payment-method {
  flex: 1; min-width: 120px; padding: 18px 12px; border: 1px solid #e0d8cc;
  text-align: center; cursor: pointer; transition: all .3s; background: transparent;
  font-family: var(--font-body);
}
.payment-method.active { border-color: var(--gold); background: var(--gold-pale); }
.payment-method-icon { font-size: 1.6rem; margin-bottom: 6px; }
.payment-method-label { font-size: .72rem; color: var(--text-light); letter-spacing: .5px; }
.payment-info {
  padding: 18px; background: var(--cream); font-size: .85rem;
  color: var(--text-light); line-height: 1.7; margin-top: 20px;
}

.footer { background: var(--darker); color: rgba(255,255,255,.5); padding: 60px 48px 32px; }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
  max-width: 1200px; margin: 0 auto 40px;
}
@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
.footer-brand {
  font-family: var(--font-display); font-size: 1.5rem; color: #fff;
  font-weight: 500; margin-bottom: 12px;
}
.footer-tagline { font-size: .85rem; line-height: 1.7; }
.footer-heading {
  font-size: .68rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); margin-bottom: 16px; font-weight: 600;
}
.footer-link {
  display: block; color: rgba(255,255,255,.5); text-decoration: none;
  font-size: .85rem; margin-bottom: 10px; transition: color .3s;
}
.footer-link:hover { color: var(--gold); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.08); padding-top: 24px;
  text-align: center; font-size: .75rem;
}

.modal-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: rgba(0,0,0,.65); display: flex; align-items: center; justify-content: center;
  animation: modalIn .3s ease;
}
@keyframes modalIn { from { opacity: 0; } to { opacity: 1; } }
.modal {
  background: #fff; padding: 48px; max-width: 440px; width: 90%; position: relative;
}
.modal-close {
  position: absolute; top: 16px; right: 16px; background: none; border: none;
  font-size: 1.4rem; cursor: pointer; color: var(--text-light); transition: color .3s;
}
.modal-close:hover { color: var(--dark); }
.modal .section-label { margin-bottom: 8px; }
.modal .section-title { font-size: 1.8rem; margin-bottom: 24px; }
.modal input {
  width: 100%; padding: 14px 18px; border: 1px solid #e0d8cc; background: transparent;
  font-family: var(--font-body); font-size: .9rem; color: var(--text);
  outline: none; margin-bottom: 14px; transition: border-color .3s;
}
.modal input:focus { border-color: var(--gold); }

.fade-section { opacity: 0; transform: translateY(30px); transition: opacity .8s var(--ease-out), transform .8s var(--ease-out); }
.fade-section.visible { opacity: 1; transform: translateY(0); }

.page-shell { min-height: 100vh; background: var(--cream-light); }
.page-container { max-width: 1200px; margin: 0 auto; }
.page-hero {
  position: relative; overflow: hidden; color: #fff;
  padding: 150px 48px 90px; background: var(--darker);
}
.page-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(184,150,62,.18), transparent 35%),
    radial-gradient(circle at 80% 15%, rgba(184,150,62,.08), transparent 28%),
    linear-gradient(180deg, #090909 0%, #17140f 60%, #111111 100%);
}
.page-hero-content { position: relative; z-index: 1; }
.page-eyebrow { letter-spacing: 4px; margin-bottom: 18px; }
.page-hero-title {
  font-family: var(--font-display); font-size: clamp(2.6rem, 6vw, 4.8rem);
  font-weight: 400; line-height: 1.08; margin-bottom: 20px;
}
.page-hero-desc {
  max-width: 760px; color: rgba(255,255,255,.72); line-height: 1.8;
  font-size: 1rem;
}

.feature-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px; margin-top: 42px;
}
.info-card {
  padding: 28px; background: #fff; border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.info-card-icon { font-size: 1.8rem; margin-bottom: 16px; }
.info-card-title {
  font-family: var(--font-display); font-size: 1.8rem; color: var(--dark);
  margin-bottom: 12px;
}
.info-card-text { color: var(--text-light); line-height: 1.8; font-size: .95rem; }

.cta-row { display: flex; justify-content: flex-start; margin-top: 36px; }
.cta-banner {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  padding: 36px; background: #fff; border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}

.legal-copy {
  display: grid; gap: 28px; max-width: 860px;
}
.legal-copy article {
  background: #fff; padding: 32px; border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.legal-heading {
  font-family: var(--font-display); font-size: 2rem; margin-bottom: 16px;
  color: var(--dark);
}
.legal-copy p {
  color: var(--text-light); line-height: 1.9; font-size: .95rem; margin-bottom: 14px;
}
.legal-copy p:last-child { margin-bottom: 0; }

.reviews-list {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
}
.reviews-card-static {
  background: rgba(255,255,255,.04); padding: 28px; border: 1px solid rgba(255,255,255,.08);
}

.about-page-hero {
  padding-bottom: 54px;
}
.about-page-hero-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(184,150,62,.22), transparent 28%),
    radial-gradient(circle at 84% 24%, rgba(255,255,255,.08), transparent 20%),
    linear-gradient(125deg, #080808 0%, #17120c 40%, #221b13 72%, #100d09 100%);
}
.about-page-hero-bg::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 180px;
  background: linear-gradient(180deg, rgba(245,240,232,0), rgba(245,240,232,1));
}
.about-page-hero-content {
  position: relative;
}
.about-page-kicker {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}
.about-page-kicker span {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  color: rgba(255,255,255,.78);
  font-size: .72rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
.about-page-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.about-page-stat {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  backdrop-filter: blur(10px);
}
.about-page-stat strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 500;
  color: #fff;
}
.about-page-stat span {
  color: rgba(255,255,255,.62);
  font-size: .8rem;
  line-height: 1.6;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.about-page-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, .95fr);
  gap: 44px;
  align-items: start;
}
.about-page-story {
  display: grid;
  gap: 18px;
}
.about-page-story p {
  color: var(--text-light);
  line-height: 1.9;
  font-size: .96rem;
}
.about-page-feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 18px;
  margin-top: 30px;
}
.about-page-feature-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 14px 0;
  border-top: 1px solid rgba(184,150,62,.16);
  color: var(--text);
  font-size: .9rem;
  line-height: 1.6;
}
.about-page-feature-dot {
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
}
.about-page-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.about-page-gallery-card {
  position: relative;
  overflow: hidden;
  min-height: 220px;
  background: #d8d0c3;
  box-shadow: 0 18px 48px rgba(26, 26, 26, .08);
}
.about-page-gallery-card-large {
  grid-column: 1 / -1;
  min-height: 360px;
}
.about-page-gallery-card::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 35%;
  background: linear-gradient(180deg, transparent, rgba(17,17,17,.2));
}
.about-page-gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-page-offers-header .section-desc {
  max-width: 720px;
}
.about-page-offers-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.about-page-offer-card {
  min-height: 240px;
  padding: 26px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02)),
    rgba(255,255,255,.02);
  border: 1px solid rgba(255,255,255,.08);
  transition: transform .35s var(--ease-out), border-color .35s var(--ease-out), background .35s var(--ease-out);
}
.about-page-offer-card:hover {
  transform: translateY(-4px);
  border-color: rgba(184,150,62,.5);
  background:
    linear-gradient(180deg, rgba(184,150,62,.14), rgba(255,255,255,.03)),
    rgba(255,255,255,.03);
}
.about-page-offer-accent {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 7px 12px;
  border: 1px solid rgba(184,150,62,.28);
  color: var(--gold-light);
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}
.about-page-offer-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 14px;
}
.about-page-offer-text {
  color: rgba(255,255,255,.62);
  font-size: .9rem;
  line-height: 1.8;
}
.about-page-offers-cta {
  justify-content: center;
  margin-top: 34px;
}

.about-page-location {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(320px, 1.1fr);
  gap: 28px;
  align-items: stretch;
}
.about-page-location-panel {
  padding: 34px;
  background:
    radial-gradient(circle at top left, rgba(184,150,62,.12), transparent 42%),
    #efe7db;
  border: 1px solid rgba(184,150,62,.14);
}
.about-page-location-card {
  padding: 34px;
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.about-page-location-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 0;
  border-bottom: 1px solid #ece3d7;
}
.about-page-location-row:last-of-type {
  border-bottom: none;
}
.about-page-location-row span {
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
}
.about-page-location-row strong,
.about-page-location-row a {
  font-family: var(--font-display);
  font-size: 1.45rem;
  line-height: 1.35;
  color: var(--dark);
  text-decoration: none;
}
.about-page-location-row a:hover {
  color: var(--gold);
}
.about-page-location-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}
.about-page-secondary-btn {
  color: var(--dark);
  border-color: rgba(26,26,26,.16);
}
.about-page-secondary-btn:hover {
  color: #fff;
}

.rooms-page-hero {
  padding-bottom: 56px;
}
.rooms-page-hero-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(184,150,62,.18), transparent 28%),
    radial-gradient(circle at 80% 30%, rgba(255,255,255,.06), transparent 24%),
    linear-gradient(135deg, #0d0d0d 0%, #17120d 42%, #2a2117 70%, #100e0c 100%);
}
.rooms-page-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.rooms-page-fact {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}
.rooms-page-fact strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #fff;
}
.rooms-page-fact span {
  color: rgba(255,255,255,.64);
  font-size: .78rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1.6;
}

.rooms-page-breakfast {
  display: grid;
  grid-template-columns: minmax(260px, .7fr) minmax(0, 1.3fr);
  gap: 28px;
  align-items: center;
  padding: 34px 38px;
  background:
    linear-gradient(135deg, rgba(184,150,62,.14), rgba(255,255,255,.95)),
    #fff;
  border: 1px solid rgba(184,150,62,.18);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.rooms-page-breakfast p {
  color: var(--text);
  line-height: 1.85;
  font-size: .98rem;
}

.rooms-page-header .section-desc {
  max-width: 760px;
}
.rooms-page-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.rooms-page-card {
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
  overflow: hidden;
  transition: transform .35s var(--ease-out), box-shadow .35s var(--ease-out);
}
.rooms-page-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 60px rgba(26, 26, 26, .1);
}
.rooms-page-card-image {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #ddd4c6;
}
.rooms-page-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rooms-page-card-price {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 8px 14px;
  background: rgba(15,15,15,.78);
  color: #fff;
  font-size: .74rem;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}
.rooms-page-card-body {
  padding: 24px;
}
.rooms-page-card-topline {
  margin-bottom: 8px;
  color: var(--gold);
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
}
.rooms-page-card-title {
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: var(--dark);
  margin-bottom: 12px;
}
.rooms-page-card-summary {
  color: var(--text-light);
  line-height: 1.75;
  font-size: .92rem;
}
.rooms-page-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.rooms-page-card-tag {
  padding: 6px 12px;
  border: 1px solid #e6ddcf;
  color: var(--text);
  font-size: .73rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.rooms-page-detail-list {
  display: grid;
  gap: 28px;
}
.rooms-page-detail {
  display: grid;
  grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr);
  gap: 0;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
  overflow: hidden;
}
.rooms-page-detail.is-reversed {
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
}
.rooms-page-detail.is-reversed .rooms-page-detail-visual {
  order: 2;
}
.rooms-page-detail.is-reversed .rooms-page-detail-copy {
  order: 1;
}
.rooms-page-detail-visual {
  min-height: 320px;
  background: #222;
}
.rooms-page-detail-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rooms-page-detail-copy {
  padding: 34px;
}
.rooms-page-detail-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.rooms-page-detail-topline span,
.rooms-page-detail-topline strong {
  font-size: .74rem;
  text-transform: uppercase;
  letter-spacing: 1.6px;
}
.rooms-page-detail-topline span {
  color: var(--gold-light);
}
.rooms-page-detail-topline strong {
  color: #fff;
}
.rooms-page-detail-title {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 16px;
}
.rooms-page-detail-text {
  color: rgba(255,255,255,.68);
  font-size: .95rem;
  line-height: 1.85;
  margin-bottom: 14px;
}
.rooms-page-detail-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.rooms-page-detail-feature {
  padding: 7px 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: rgba(255,255,255,.82);
  font-size: .76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.rooms-page-cta-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.services-page-hero {
  padding-bottom: 54px;
}
.services-page-hero-bg {
  background:
    radial-gradient(circle at 20% 20%, rgba(184,150,62,.2), transparent 30%),
    radial-gradient(circle at 82% 26%, rgba(255,255,255,.07), transparent 20%),
    linear-gradient(135deg, #090909 0%, #17130f 42%, #241c14 72%, #100d09 100%);
}
.services-page-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.services-page-fact {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}
.services-page-fact strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #fff;
}
.services-page-fact span {
  color: rgba(255,255,255,.64);
  font-size: .78rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1.6;
}

.services-page-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
  gap: 28px;
  align-items: center;
}
.services-page-note {
  padding: 30px 32px;
  background:
    radial-gradient(circle at top left, rgba(184,150,62,.12), transparent 42%),
    #efe7db;
  border: 1px solid rgba(184,150,62,.14);
}
.services-page-note span {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--gold);
  font-size: .74rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
}
.services-page-note p {
  color: var(--text);
  line-height: 1.8;
  font-size: .94rem;
}

.services-page-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.services-page-card {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
  overflow: hidden;
}
.services-page-card-image {
  min-height: 100%;
  background: #ddd4c6;
}
.services-page-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.services-page-card-body {
  padding: 24px;
}
.services-page-card-kicker {
  color: var(--gold);
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
}
.services-page-card-title {
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: var(--dark);
  margin-bottom: 12px;
}
.services-page-card-summary {
  color: var(--text-light);
  line-height: 1.8;
  font-size: .93rem;
}
.services-page-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.services-page-card-tag {
  padding: 6px 12px;
  border: 1px solid #e6ddcf;
  color: var(--text);
  font-size: .73rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.services-page-header .section-title {
  color: #fff;
}
.services-page-detail-list {
  display: grid;
  gap: 28px;
}
.services-page-detail {
  display: grid;
  grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr);
  gap: 0;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
  overflow: hidden;
}
.services-page-detail.is-reversed {
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
}
.services-page-detail.is-reversed .services-page-detail-visual {
  order: 2;
}
.services-page-detail.is-reversed .services-page-detail-copy {
  order: 1;
}
.services-page-detail-visual {
  min-height: 300px;
  background: #222;
}
.services-page-detail-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.services-page-detail-copy {
  padding: 34px;
}
.services-page-detail-kicker {
  margin-bottom: 10px;
  color: var(--gold-light);
  font-size: .74rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}
.services-page-detail-title {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 16px;
}
.services-page-detail-text {
  color: rgba(255,255,255,.68);
  font-size: .95rem;
  line-height: 1.85;
}
.services-page-detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.services-page-detail-tag {
  padding: 7px 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: rgba(255,255,255,.82);
  font-size: .76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.services-page-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.discounts-page-hero {
  padding-bottom: 54px;
}
.discounts-page-hero-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(184,150,62,.22), transparent 28%),
    radial-gradient(circle at 84% 24%, rgba(255,255,255,.07), transparent 20%),
    linear-gradient(135deg, #090909 0%, #18120d 42%, #2c1c16 72%, #120d0b 100%);
}
.discounts-page-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.discounts-page-fact {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}
.discounts-page-fact strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #fff;
}
.discounts-page-fact span {
  color: rgba(255,255,255,.64);
  font-size: .78rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1.6;
}

.discounts-page-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
  gap: 28px;
  align-items: center;
}
.discounts-page-note {
  padding: 30px 32px;
  background:
    radial-gradient(circle at top left, rgba(184,150,62,.12), transparent 42%),
    #efe7db;
  border: 1px solid rgba(184,150,62,.14);
}
.discounts-page-note span {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--gold);
  font-size: .74rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
}
.discounts-page-note p {
  color: var(--text);
  line-height: 1.8;
  font-size: .94rem;
}

.discounts-page-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.discounts-page-card {
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
  overflow: hidden;
}
.discounts-page-card-image {
  position: relative;
  aspect-ratio: 16 / 10;
  background: #ddd4c6;
}
.discounts-page-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.discounts-page-card-accent {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 8px 14px;
  background: rgba(15,15,15,.78);
  color: #fff;
  font-size: .74rem;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}
.discounts-page-card-body {
  padding: 24px;
}
.discounts-page-card-kicker {
  color: var(--gold);
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
}
.discounts-page-card-title {
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: var(--dark);
  margin-bottom: 12px;
}
.discounts-page-card-summary {
  color: var(--text-light);
  line-height: 1.8;
  font-size: .93rem;
}
.discounts-page-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.discounts-page-card-tag {
  padding: 6px 12px;
  border: 1px solid #e6ddcf;
  color: var(--text);
  font-size: .73rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.discounts-page-header .section-title {
  color: #fff;
}
.discounts-page-detail-list {
  display: grid;
  gap: 28px;
}
.discounts-page-detail {
  display: grid;
  grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr);
  gap: 0;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
  overflow: hidden;
}
.discounts-page-detail.is-reversed {
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
}
.discounts-page-detail.is-reversed .discounts-page-detail-visual {
  order: 2;
}
.discounts-page-detail.is-reversed .discounts-page-detail-copy {
  order: 1;
}
.discounts-page-detail-visual {
  min-height: 300px;
  background: #222;
}
.discounts-page-detail-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.discounts-page-detail-copy {
  padding: 34px;
}
.discounts-page-detail-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.discounts-page-detail-topline span,
.discounts-page-detail-topline strong {
  font-size: .74rem;
  text-transform: uppercase;
  letter-spacing: 1.6px;
}
.discounts-page-detail-topline span {
  color: var(--gold-light);
}
.discounts-page-detail-topline strong {
  color: #fff;
}
.discounts-page-detail-title {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 16px;
}
.discounts-page-detail-text {
  color: rgba(255,255,255,.68);
  font-size: .95rem;
  line-height: 1.85;
}
.discounts-page-detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.discounts-page-detail-tag {
  padding: 7px 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: rgba(255,255,255,.82);
  font-size: .76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.discounts-page-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.restaurant-page-hero {
  padding-bottom: 54px;
}
.restaurant-page-hero-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(184,150,62,.2), transparent 30%),
    radial-gradient(circle at 82% 24%, rgba(255,255,255,.08), transparent 22%),
    linear-gradient(135deg, #090909 0%, #17120f 42%, #2b1f17 72%, #110e0b 100%);
}
.restaurant-page-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.restaurant-page-fact {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}
.restaurant-page-fact strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #fff;
}
.restaurant-page-fact span {
  color: rgba(255,255,255,.64);
  font-size: .78rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1.6;
}

.restaurant-page-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, .95fr);
  gap: 32px;
  align-items: center;
}
.restaurant-page-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}
.restaurant-page-visual {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background: #ddd4c6;
  box-shadow: 0 18px 48px rgba(26, 26, 26, .08);
}
.restaurant-page-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.restaurant-page-visual-badge {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 10px 16px;
  background: rgba(15,15,15,.76);
  color: #fff;
  font-size: .72rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.restaurant-page-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.restaurant-page-card {
  padding: 28px;
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.restaurant-page-card-accent {
  display: inline-flex;
  margin-bottom: 16px;
  color: var(--gold);
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
}
.restaurant-page-card-title {
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: var(--dark);
  margin-bottom: 12px;
}
.restaurant-page-card-text {
  color: var(--text-light);
  line-height: 1.8;
  font-size: .93rem;
}

.restaurant-page-highlight {
  display: grid;
  grid-template-columns: minmax(0, .95fr) minmax(320px, 1.05fr);
  gap: 28px;
  align-items: start;
}
.restaurant-page-highlight-copy .section-title {
  color: #fff;
}
.restaurant-page-highlight-copy .section-desc {
  color: rgba(255,255,255,.66);
  max-width: 100%;
}
.restaurant-page-highlight-list {
  display: grid;
  gap: 16px;
}
.restaurant-page-highlight-item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 18px;
  padding: 22px 24px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
}
.restaurant-page-highlight-item span {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--gold-light);
}
.restaurant-page-highlight-item p {
  color: rgba(255,255,255,.74);
  line-height: 1.8;
  font-size: .92rem;
}

.contact-page-hero {
  padding-bottom: 54px;
}
.contact-page-hero-bg {
  background:
    radial-gradient(circle at 18% 18%, rgba(184,150,62,.22), transparent 28%),
    radial-gradient(circle at 82% 22%, rgba(255,255,255,.08), transparent 20%),
    linear-gradient(135deg, #090909 0%, #16120e 42%, #241d16 72%, #110d0a 100%);
}
.contact-page-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.contact-page-fact {
  padding: 22px 24px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}
.contact-page-fact strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #fff;
}
.contact-page-fact span {
  color: rgba(255,255,255,.64);
  font-size: .78rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1.6;
}

.contact-page-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, .95fr);
  gap: 32px;
  align-items: center;
}
.contact-page-panel {
  padding: 34px;
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
}
.contact-page-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 0;
  border-bottom: 1px solid #ece3d7;
}
.contact-page-row:last-child {
  border-bottom: none;
}
.contact-page-row span {
  font-size: .72rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
}
.contact-page-row strong,
.contact-page-row a {
  font-family: var(--font-display);
  font-size: 1.45rem;
  line-height: 1.35;
  color: var(--dark);
  text-decoration: none;
}
.contact-page-row a:hover {
  color: var(--gold);
}

.contact-page-grid {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(320px, 1.1fr);
  gap: 28px;
  align-items: start;
}
.contact-page-form-wrap {
  padding: 34px;
  background:
    radial-gradient(circle at top left, rgba(184,150,62,.12), transparent 42%),
    #efe7db;
  border: 1px solid rgba(184,150,62,.14);
}
.contact-page-map-card {
  background: #fff;
  border: 1px solid rgba(184,150,62,.14);
  box-shadow: 0 16px 50px rgba(26, 26, 26, .06);
  overflow: hidden;
}
.contact-page-map {
  height: 440px;
}
.contact-page-map-caption {
  padding: 18px 22px;
  color: var(--text);
  font-size: .92rem;
  letter-spacing: .2px;
}

@media (max-width: 960px) {
  .page-hero { padding: 132px 24px 74px; }
  .feature-grid, .reviews-list { grid-template-columns: 1fr; }
  .cta-banner { flex-direction: column; align-items: flex-start; }
  .about-page-stats,
  .about-page-feature-list,
  .about-page-offers-grid,
  .about-page-intro,
  .about-page-location {
    grid-template-columns: 1fr;
  }
  .about-page-gallery-card-large {
    min-height: 280px;
  }
  .rooms-page-facts,
  .rooms-page-breakfast,
  .rooms-page-grid,
  .rooms-page-detail,
  .rooms-page-detail.is-reversed,
  .services-page-facts,
  .services-page-intro,
  .services-page-grid,
  .services-page-detail,
  .services-page-detail.is-reversed,
  .discounts-page-facts,
  .discounts-page-intro,
  .discounts-page-grid,
  .discounts-page-detail,
  .discounts-page-detail.is-reversed,
  .restaurant-page-facts,
  .restaurant-page-intro,
  .restaurant-page-grid,
  .restaurant-page-highlight,
  .contact-page-facts,
  .contact-page-top,
  .contact-page-grid {
    grid-template-columns: 1fr;
  }
  .rooms-page-detail.is-reversed .rooms-page-detail-visual,
  .rooms-page-detail.is-reversed .rooms-page-detail-copy,
  .services-page-detail.is-reversed .services-page-detail-visual,
  .services-page-detail.is-reversed .services-page-detail-copy,
  .discounts-page-detail.is-reversed .discounts-page-detail-visual,
  .discounts-page-detail.is-reversed .discounts-page-detail-copy {
    order: initial;
  }
  .services-page-card {
    grid-template-columns: 1fr;
  }
}
`;
