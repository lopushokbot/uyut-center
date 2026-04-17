# Hotel Uyut — Runbook

> Read this file before doing ANY work on this project.

## Quick Reference
| Task | Command / Steps |
|------|-----------------|
| Install deps | `npm install` |
| Start dev server | `npm run dev` → http://localhost:3000 |
| Production build | `npm run build` |
| Kill stuck dev | `lsof -i :3000` → `kill -9 <PID>` |
| Deploy to Vercel | `vercel --prod` from project root |
| Test callback API | `curl -X POST http://localhost:3000/api/callback -H 'Content-Type: application/json' -d '{"name":"Test","phone":"+79990000000"}'` |

**Live URLs:**
- Production: https://uyut-center-eta.vercel.app
- GitHub: https://github.com/lopushokbot/uyut-center

---

## Task: Local development

### Prerequisites
- Node.js 20+ (match Vercel runtime)
- `node_modules/` present (`npm install` if missing)
- For testing callback form locally: create `.env.local` (copy from `.env.example`)

### Steps
1. `cd /Users/iibot/Documents/ppppp/workspace/uyut-center`
2. `npm install` (first time only)
3. `npm run dev`
4. Open http://localhost:3000

### Validation
- [ ] `✓ Ready in ...s` appears in output
- [ ] Home, /prices_and_rooms/, /contact/ all return 200
- [ ] Room card click on home opens fullscreen gallery
- [ ] "Забронировать" opens modal with widget; room auto-selects

### If something goes wrong
| Symptom | Cause | Fix |
|---------|-------|-----|
| `EADDRINUSE :3000` | Old dev server running | `lsof -i :3000` then `kill -9 <PID>` |
| `/api/callback` returns 503 | Missing SMTP env | Add to `.env.local`: `SMTP_USER`, `SMTP_PASS`, `CALLBACK_TO` |
| `/api/callback` returns 429 | Rate-limited (5 req / 60s / IP) | Wait a minute — expected behaviour |
| Build fails on CSP | Third-party script blocked | Whitelist domain in `next.config.js` `Content-Security-Policy` |

---

## Task: Adding / editing content

### Files to touch
| What | Where |
|------|-------|
| Rooms (home + /prices_and_rooms/) | `src/data/rooms.js` |
| Offers, advantages, reviews, payment, advantages | `src/data/hotelData.js` |
| Page metadata + PAGE_INTRO subtitles | `src/data/siteData.js` |
| Social links (hotel + restaurant) | `src/data/siteData.js` → `SOCIAL_LINKS` + `RESTAURANT_LINKS` |
| Booking widget → widget room name mapping | `src/data/roomWidgetNames.js` |

Edits hot-reload at http://localhost:3000.

---

## Task: Deploy to Vercel (production)

### Steps
1. Authenticate once: `vercel login` (Sema uses `simonsivakov-8383` account, team `ssteam`)
2. From project root: `vercel --prod --yes`
3. Wait ~45s — CLI prints production URL and aliases to `https://uyut-center-eta.vercel.app`
4. First deploy only: disable Vercel SSO protection (team-wide default). Via API:
   ```bash
   TOKEN=$(python3 -c "import json; print(json.load(open('/Users/iibot/Library/Application Support/com.vercel.cli/auth.json'))['token'])")
   curl -X PATCH "https://api.vercel.com/v9/projects/PRJ_ID?teamId=TEAM_ID" \
     -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
     -d '{"ssoProtection":null}'
   ```
   Project + team IDs in `.vercel/project.json` (gitignored).

### Environment variables (set in Vercel dashboard)
Scope all SMTP vars to **Production only** (uncheck Preview + Development). Otherwise preview URLs inherit production credentials and can send real email.

| Variable | Purpose |
|----------|---------|
| `SMTP_HOST` | SMTP host — default `smtp.yandex.ru` |
| `SMTP_PORT` | Port — default `465` |
| `SMTP_SECURE` | `true` for 465, `false` for 587 |
| `SMTP_USER` | SMTP login email |
| `SMTP_PASS` | App-specific password (NOT main Yandex password) |
| `SMTP_FROM` | Optional display "From" header |
| `CALLBACK_TO` | Where leads are delivered (REQUIRED — app 503s without it) |

### Validation after deploy
- [ ] `curl -s -o /dev/null -w "%{http_code}" https://uyut-center-eta.vercel.app/` = 200
- [ ] Response headers include `Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security`
- [ ] Callback POST with valid data returns `{"ok":true}` (requires SMTP env set)
- [ ] 5 rapid POSTs from same IP → 6th returns 429

---

## Security posture

### Protections in place
- **Rate limiting**: 5 req / 60s per IP on `/api/callback` (in-memory; per serverless isolate)
- **Input validation**: phone regex, email regex, length caps on every field (max 2KB per field)
- **Honeypot**: hidden `website` field — bots fill it, real users don't
- **Content-Type + size checks**: only `application/json` ≤10KB accepted
- **Generic errors**: no implementation details leak in error responses
- **Security headers**: CSP, HSTS, X-Frame-Options (SAMEORIGIN), X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Self-hosted fonts**: no external calls to Google Fonts (GDPR / ФЗ-152)
- **HTML escaping** in outbound email bodies (defence-in-depth against email-client XSS)
- **Dependencies pinned**: `next`, `nodemailer` exact; `react`/`react-dom` patch-level only

### Gaps (still on the list)
- **No CAPTCHA / Turnstile** — honeypot + rate limit help, but sophisticated bots can still spam. Add Cloudflare Turnstile when Sema provides a Cloudflare account.
- **bookonline24.ru widget** has full DOM access on every page via CSP `script-src`. No SRI (script is dynamic). Single point of failure if their domain is compromised.
- **Images** still hotlinked from old WordPress (`uyut-centr.ru/wp-content/...`). If that site goes down or gets hijacked, hero/room cards break.

---

## Task: Production build check (local)

### Steps
1. `npm run build`
2. Watch for type/lint errors — App Router fails on broken imports.
3. `npm start` and smoke-test home, `/prices_and_rooms/`, `/contact/`, `/menu/`.

### Validation
- [ ] Build exits 0
- [ ] All routes prerender as static except `/api/callback` (dynamic)
- [ ] 16/16 static pages generated

---

## Changelog
| Date | Change |
|------|--------|
| 2026-04-17 | Initial docs. Installed via npm. Verified dev server. |
| 2026-04-17 | Major design pass: gallery modal, social links, contrast, consistency. Deployed to Vercel (`uyut-center-eta.vercel.app`). |
| 2026-04-17 | Security hardening: rate limit, honeypot, input validation, security headers, self-hosted fonts, Next 15.5.15, legacy Vite files removed. |
