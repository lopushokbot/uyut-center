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
│   │   ├── api/callback/route.js   # POST — email via nodemailer
│   │   ├── about-us/ contact/ disconts/ fun_and_services/
│   │   ├── menu/ prices_and_rooms/ reviews/
│   │   └── terms/ terms-of-use/
│   ├── components/         # Section + modal components (JSX)
│   ├── data/               # hotelData.js, siteData.js, roomWidgetNames.js
│   ├── lib/                # helpers
│   └── styles/
├── public/images/          # hero, rooms, restaurant photos
├── res/                    # misc resources
└── SEO_AUDIT_PARTIAL.md    # in-progress SEO notes
```

Entry points: [src/app/layout.jsx](src/app/layout.jsx) wraps every page; [src/app/page.jsx](src/app/page.jsx) is the home route; all form POSTs go to [src/app/api/callback/route.js](src/app/api/callback/route.js).

## Data Sources
- **Static content** — all hotel info (rooms, prices, contacts, menu) in `src/data/*.js`. No CMS.
- **Booking widget** — external iframe (Контур.Отель stub per legacy README); widget names mapped in `src/data/roomWidgetNames.js`.
- **Яндекс.Карты** — embedded widget on contact page.
- **Email (outgoing)** — SMTP to Yandex (`smtp.yandex.ru:465`) from `/api/callback`. Leads delivered to `yut.klintsi@yandex.ru`.

## Deployment
Not yet deployed. Next.js with an API route → needs a Node host (Vercel / Cloudflare Workers with Node compat / self-host). Cloudflare Pages static export will NOT work as-is because of `/api/callback`. Decide between:
- **Vercel** — simplest, native Next.js support.
- **Cloudflare Pages + Functions** — needs adapter; callback route must be ported to a Pages Function.

## Environment Variables
| Variable | Purpose | Where stored |
|----------|---------|-------------|
| `SMTP_HOST` | SMTP host (default `smtp.yandex.ru`) | `.env.local` / hosting env |
| `SMTP_PORT` | SMTP port (default `465`) | `.env.local` / hosting env |
| `SMTP_SECURE` | `true` for 465, `false` for 587 | `.env.local` / hosting env |
| `SMTP_USER` | SMTP login | `.env.local` / hosting env |
| `SMTP_PASS` | SMTP app password | `.env.local` / hosting env |
| `SMTP_FROM` | Optional From header (defaults to `SMTP_USER`) | `.env.local` / hosting env |
| `CALLBACK_TO` | Recipient inbox (default `yut.klintsi@yandex.ru`) | `.env.local` / hosting env |

## Known Issues & Gotchas
- **Multiple lockfiles warning** — there is a stray `/Users/iibot/package-lock.json` at $HOME. Next.js logs a workspace-root warning on startup but runs fine. Set `outputFileTracingRoot` in `next.config.js` or delete the stray lockfile to silence.
- **README.md is stale** — says the stack is React + Vite 6 and `npm run build` outputs to `app/`. Actual stack is Next.js; the old Vite build is preserved in `app_legacy_build/`.
- **`/api/callback` fails without SMTP env** — returns 500 "Ошибка отправки. Проверьте настройки почты на сервере." Configure `.env.local` before submitting forms locally.
- **No yarn** — `yarn.lock` exists but yarn isn't installed on this Mac. Use `npm` (a `package-lock.json` was generated on first install).
- **`next.config.js` uses ESM `export default`** — `package.json` has `"type": "module"`, so keep `.js` + ESM (don't switch to `.cjs`).
