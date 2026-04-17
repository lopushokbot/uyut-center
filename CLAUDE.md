# Hotel Uyut — Клинцы

## Overview
Website for the "Уют" three-star hotel in Клинцы. Built with Next.js 15 App Router, React 18. Covers hero/booking, rooms & pricing, restaurant, services, reviews, contact, legal pages. Callback + contact forms post to an SMTP-backed API route that emails the hotel.

## Live URLs
| Environment | URL |
|-------------|-----|
| Live | _not deployed yet_ |
| GitHub | _not created yet_ |
| Local path | `/Users/iibot/Documents/ppppp/workspace/uyut-center/` |
| Local dev | http://localhost:3000 |

## Tech Stack
- **Next.js 15.5** (App Router) + **React 18**
- **Nodemailer** for transactional email from `/api/callback`
- Plain CSS + CSS Modules (`LegalPage.module.css`, `RoomsPage.module.css`). No Tailwind.
- No DB — booking widget is an external iframe; prices/content live in `src/data/*.js`.
- Legacy Vite build is parked in `app_legacy_build/` (superseded, kept for reference).

## Architecture
```
uyut-center/
├── next.config.js          # reactStrictMode only
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.jsx      # Root layout, fonts, <SiteShell>
│   │   ├── page.jsx        # Home
│   │   ├── globals.css
│   │   ├── sitemap.js / robots.js
│   │   ├── api/callback/route.js   # POST — hardened (rate-limit, honeypot, validation)
│   │   ├── about-us/ contact/ disconts/ fun_and_services/
│   │   ├── menu/ prices_and_rooms/ reviews/
│   │   └── terms/ terms-of-use/
│   ├── components/         # Section + modal components (JSX)
│   ├── data/               # hotelData.js, siteData.js, rooms.js, roomWidgetNames.js
│   └── lib/                # metadata helpers
├── public/
│   ├── fonts/              # self-hosted Cormorant Garamond + Raleway .woff2
│   └── images/             # hero, rooms, about photos
└── SEO_AUDIT_PARTIAL.md    # in-progress SEO notes
```

Entry points: [src/app/layout.jsx](src/app/layout.jsx) wraps every page; [src/app/page.jsx](src/app/page.jsx) is the home route; all form POSTs go to [src/app/api/callback/route.js](src/app/api/callback/route.js).

## Data Sources
- **Static content** — all hotel info (rooms, prices, contacts, menu) in `src/data/*.js`. No CMS.
- **Booking widget** — external iframe (Контур.Отель stub per legacy README); widget names mapped in `src/data/roomWidgetNames.js`.
- **Яндекс.Карты** — embedded widget on contact page.
- **Email (outgoing)** — SMTP to Yandex (`smtp.yandex.ru:465`) from `/api/callback`. Leads delivered to `yut.klintsi@yandex.ru`.

## Deployment
Live on **Vercel**: https://uyut-center-eta.vercel.app (direct: https://uyut-center-571gpwxhm-ssteam.vercel.app).
- Vercel project: `ssteam/uyut-center` (Sema's team account `simonsivakov-8383`)
- Deploy manually with `vercel --prod --yes` from project root
- GitHub auto-deploy NOT linked yet — pushes to `main` don't trigger deploys automatically
- Vercel SSO protection is **disabled** (set via API on first deploy)
- SMTP env vars must be **scoped to Production only** in Vercel dashboard (preview URLs otherwise inherit prod creds)

## Environment Variables
| Variable | Purpose | Where stored |
|----------|---------|-------------|
| `SMTP_HOST` | SMTP host (default `smtp.yandex.ru`) | `.env.local` / hosting env |
| `SMTP_PORT` | SMTP port (default `465`) | `.env.local` / hosting env |
| `SMTP_SECURE` | `true` for 465, `false` for 587 | `.env.local` / hosting env |
| `SMTP_USER` | SMTP login | `.env.local` / hosting env |
| `SMTP_PASS` | SMTP app password | `.env.local` / hosting env |
| `SMTP_FROM` | Optional From header (defaults to `SMTP_USER`) | `.env.local` / hosting env |
| `CALLBACK_TO` | Recipient inbox (REQUIRED — 503 if missing) | `.env.local` / Vercel Production |

## Known Issues & Gotchas
- **Multiple lockfiles warning** — stray `/Users/iibot/package-lock.json` at $HOME causes Next.js workspace-root warning. Harmless.
- **README.md is stale** — says Vite 6, but stack is Next.js 15.
- **`/api/callback` returns 503 without SMTP env** — generic error (won't leak details). Configure Vercel env vars, scoped to Production only.
- **Rate limit**: `/api/callback` allows 5 requests / 60s per IP. In-memory bucket, per serverless isolate. Not shared across regions — good enough for single-attacker flood, weak vs distributed.
- **bookonline24.ru widget** has full DOM access via CSP `script-src`. Single point of failure — their compromise = your compromise. Monitor provider security.
- **`next.config.js` uses ESM `export default`** — `package.json` has `"type": "module"`, keep `.js` + ESM.
- **CSP `unsafe-inline` + `unsafe-eval`** on scripts — needed for Next hydration + bookonline24 widget. Tighter with nonce middleware is possible but not worth churn for brochure site.
