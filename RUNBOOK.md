# Hotel Uyut — Runbook

> Read this file before doing ANY work on this project.

## Quick Reference
| Task | Command / Steps |
|------|-----------------|
| Install deps | `npm install` (yarn not available locally) |
| Start dev server | `npm run dev` → http://localhost:3000 |
| Production build | `npm run build` then `npm start` |
| Kill stuck dev | `lsof -i :3000` → `kill -9 <PID>` |
| Test callback API | `curl -X POST http://localhost:3000/api/callback -H 'Content-Type: application/json' -d '{"name":"Test","phone":"+79990000000"}'` |

---

## Task: Local development

### When to run
Any time you edit code.

### Prerequisites
- Node.js 18+ installed
- `node_modules/` present (run `npm install` if missing)
- Optional: `.env.local` with SMTP creds if testing the callback form

### Steps
1. `cd /Users/iibot/Documents/ppppp/workspace/uyut-center`
2. `npm install` (first time only)
3. `npm run dev`
4. Open http://localhost:3000

### Validation
- [ ] `✓ Ready in ...s` appears in output
- [ ] `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` returns `200`

### If something goes wrong
| Symptom | Cause | Fix |
|---------|-------|-----|
| `EADDRINUSE :3000` | Old dev server running | `lsof -i :3000` then `kill -9 <PID>` |
| Multiple lockfile warning | Stray `~/package-lock.json` | Safe to ignore, or set `outputFileTracingRoot` in `next.config.js` |
| `/api/callback` 500 | Missing SMTP env | Create `.env.local` with `SMTP_USER` + `SMTP_PASS` |

---

## Task: Adding / editing content (rooms, prices, menu, contacts)

### Steps
1. Open the relevant file in `src/data/`:
   - Rooms & pricing → `hotelData.js`
   - Site copy / contacts → `siteData.js`
   - Booking widget mapping → `roomWidgetNames.js`
2. Edit values, save.
3. Dev server hot-reloads — verify at http://localhost:3000.

---

## Task: Production build check

### Steps
1. `npm run build`
2. Watch for type / lint errors — App Router will fail on broken imports or missing dynamic params.
3. `npm start` and smoke-test home, `/prices_and_rooms`, `/contact`.

### Validation
- [ ] Build exits 0
- [ ] Home page loads and booking strip renders
- [ ] `/api/callback` returns JSON on POST

---

## Task: Deploy (not yet set up)

Needs a hosting decision. Options:
- **Vercel** — easiest. `vercel` CLI, connect GitHub, add SMTP env vars in dashboard.
- **Cloudflare Pages + Functions** — Sema's default host; requires porting `/api/callback` to a Pages Function. Plain static export will break because of the API route.

Do not deploy to Cloudflare Pages as a pure static site — the callback API will break.

---

## Changelog
| Date | Change |
|------|--------|
| 2026-04-17 | Initial CLAUDE.md + RUNBOOK.md. Installed deps with npm (yarn unavailable). Verified dev server at http://localhost:3000. |
