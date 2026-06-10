# Handoff — Live State

## Last Updated
2026-06-09 · session 1 (site overhaul kickoff) — after holdover cleanup

## Current State
Working on branch **`dev`** (the full WIP site; never deploys). **`main`** holds only an
under-construction splash and is what GitHub Pages serves at pakfro.dev. The site is a
hash-routed React SPA; edit `cd-*.jsx`, run `npm run build` (esbuild → `build/*.js`, which
ARE committed because Pages has no build step). This session: stood up build tooling, split
the branches, and did a full **placeholder + fabrication purge** across every page —
no fabricated content strings remain. Pocket Professor's real stack (Node·Fastify·TS·Postgres,
not Python/FastAPI) and complete version history are now documented and reflected on-site.
Trajectory was rebuilt from the real résumé (added the IDEA day-job; PP correctly framed as a
personal project). Résumé PDF, live clock, footer links, and Tweaks-panel gating all done.
**Changes on `dev` are uncommitted** — safe to commit/push to `dev` anytime (won't deploy).

## Changed Files (this session, on `dev`)
- New: `package.json`, `package-lock.json`, `build.mjs`, `.gitignore` (+node_modules),
  `docs/pocket-professor-version-history.md`, `docs/ali-tahir-resume.pdf`, `TODO.md` (rewritten),
  `.ai/*` (this state dir).
- Edited: all `cd-*.jsx` (home, detail, projects, trajectory, about, fieldnotes, hire, theme, app)
  + regenerated `build/*.js`.
- `main` branch (separate): reduced to splash `index.html` + `CNAME` + `README` + `robots.txt`
  (`Disallow: /`). `app.html` was a discarded interim idea (not on dev).
- **Holdover cleanup done:** removed `__bio.html`, `theme-test.html`, `demo.html`+`js/demo.js`,
  `form.html`+`js/form.js`, `images/kitty1.jpg`, `INTEGRATION.md`; rewrote `sitemap.xml` → root only.
- Uncommitted on `dev`: the cleanup deletions + new `.ai/`, `CLAUDE.md`, `docs/` (not git-added yet).

## Open Threads
- **"Old is Gold" blog post** — user is sending the text; blog reader not yet built.
- **PP product screenshot** — none exists (v2 unlaunched); FIG.01 is an honest placeholder. User.
- **PP V1 date** — résumé says 2024, first commit is 2025-03. User to pick which is public.
- Security audit not started; `SECURITY.md` still references the deleted demo/form files.
- `PRODUCTION-BUILD.md` kept but partly stale; `README.md` has a stale "disabled" note.
- Skills list keeps Python/FastAPI/Flask marked "(earlier work)" per user's honest-depth note.

## Next Recommended Step
Build the **in-app blog (Field Notes) reader** — add a post-detail route + a way to author
post bodies — and load "Old is Gold" as the first real post once the text arrives. The
**holdover cleanup** (`__bio.html`, `theme-test.html`, `sitemap.xml`, `form.html`/`demo.html`)
is fully unblocked and can be done in parallel.
