# Handoff — Live State

## Last Updated
2026-08-10 · session 3 (two launches)

## Current State
**🚀 THE SITE IS LAUNCHED**, and has since been launched a second time with a full résumé sync.
`main` no longer holds the under-construction splash — it holds the full Console Dossier site and
pakfro.dev serves it. Both launches were at Ali's explicit request (he applied to a job listing
the site). Verified live after each: Pages build `built`, assets 200 from pakfro.dev, pages render
with theme and fonts intact, **zero console errors**.

`main` and `dev` are currently **identical** at `82403f3`. Continue editing on `dev`; each future
launch is another `git checkout main && git reset --hard dev && git push --force origin main`.

Recovery tags on origin: **`splash-archive`** (`764493d`, the old under-construction splash) and
**`prelaunch-82403f3`** (`7824b97`, the first launched version, before the résumé sync).

## Changed Files (session 3)
**Launch 1 — `7824b97`:**
- **`index.html`** — ported `main`'s security block into `dev` (CSP, referrer, Permissions-Policy),
  widened CSP for the unpkg React UMD (`script-src 'self' https://unpkg.com`) and cd-theme's
  injected `<style>` (`style-src 'unsafe-inline'`); set `robots` to **index, follow** (was absent;
  splash had noindex); added description, canonical, OG, and Twitter tags.
- **Committed the ~06-24 backlog** — Projects 2×2 grid + `art` slot, CH-03 → Oneness Suite,
  Trajectory GE/Accenture merge. `check-build-fresh.sh` passed before the commit.
- **`.claude/skills/`** — session 2's skill library, now tracked. `.claude/settings.local.json`
  added to `.gitignore`.

**Launch 2 — `82403f3`, résumé sync** (sourced from two PDFs in `~/Desktop/projects/job-apply/data/`:
the 2-page `tennr-backend-apply/Tahir, Ali - Resume.pdf` and the 3-page
`archive-3page/2026_resume - 3-page, all projects.pdf`):
- **`cd-home.jsx`** — removed the `● Open to mid-level engineering roles` hero line; "Earlier work"
  card corrected 2021—2024 / 3 yrs → **2021—2025 / 4 yrs**.
- **`cd-theme.jsx`** — StatusBar pill **gated to `cur === 'hire'`** and retitled `OPEN · AI
  ENGINEERING`. It used to render on every page.
- **`cd-hire.jsx`** — reframed from mid-level SWE to **AI engineering roles** at Ali's direction.
  §01 rewritten around real adoption (metabase-mcp, the knowledge base); §02 now says the AI work
  is applied, not research — no model training — with AWS ML Engineer named as the in-progress gap.
- **`cd-projects.jsx`** — added **CH-03 AI Agent Harness Extensions** and **CH-04 ZuneHD Artist
  Metadata Updater**; renumbered to CH-01..CH-06; job-apply card rewritten with real figures.
- **`cd-trajectory.jsx`** — rebuilt from the 3-pager; `TRAJ_SKILLS` regrouped into 8 résumé-matching
  categories (PostgreSQL correctly demoted to "working knowledge").
- **`docs/ali-tahir-resume.pdf`** — replaced with the 2-page recruiter version (verified 2 pages
  on disk *and* over HTTPS after launch).
- **`index.html`** — dropped `frame-ancestors` from the meta CSP (ignored outside a real HTTP
  header; it was the only console error). Console is now clean.

## Open Threads
- **`cd-about.jsx` is the last page never reviewed against a résumé** — Trajectory and Hire were
  rebuilt in launch 2, but About was not touched in this session at all. Read it next.
- **Both factual questions are now RESOLVED by the résumés** (they were open since session 1):
  job-apply is Node · SQLite · Playwright · MV3 Chrome extension ✅; **Pocket Professor dates from
  2024** ✅ — the résumé's 2024 wins over the 2025-03 first commit, and the site now says 2024.
- **Corrections applied in launch 2** (the site had drifted from the résumé): MAXX apprenticeship
  7 months not 6; cert is AWS **Machine Learning** Engineer not AWS Certified AI Practitioner;
  duplicate "Coding Dojo · Red Belt" credential row dropped.
- **PP card + detail — still parked** pending Ali's v2 pilot. Accurate and PRE-PILOT-labeled today,
  so being live is fine; refine after the pilot. PP is described in four places (home hero, CH-01,
  detail, `TRAJ_ROLES`) with drifting framings — reconcile all four in one pass when the park lifts.
  Note `TRAJ_ROLES` now carries the résumé's PP framing (service-industry workers 35+, append-only
  event store) while the home hero and CH-01 still carry the older one.
- **The Hire page is now the ONLY place availability is stated.** If Ali's target role changes
  again, both `cd-hire.jsx` and the pill string in `cd-theme.jsx`'s StatusBar need updating.
- **The two source résumés live outside this repo** (`~/Desktop/projects/job-apply/data/…`) and the
  2-pager is the one committed to `docs/`. If Ali edits a résumé, the site does not follow
  automatically — re-run the sync.
- **Extracting text from those PDFs needs a workaround**: no `pdftotext`/`pypdf`/poppler on this
  machine, and PDFKit returns every line **character-reversed with line order reversed**. Script
  that decodes it: `scratchpad/pdftext.swift` + reverse both. Don't trust a raw dump.
- Rest of the security audit still open: unpkg SRI or self-hosting React, full `/security-review`.
- `SECURITY.md` references deleted demo/form files; `README.md` still says the site is disabled;
  `PRODUCTION-BUILD.md` partly stale. Repo docs, invisible to visitors, but now the repo is the
  thing a hiring manager might click through to.
- No OG image exists (`images/` has only the PP code snapshot and a personal photo), so shared
  links render a text-only preview card.
- Two design questions parked in `pakfro-site-research-frontier`: analytics privacy bar (F2),
  markdown-vs-structured body for Field Notes (F4).

## Next Recommended Step
The site is up and matches the résumé, so everything below is improvement, not unblocking:
1. **Review `cd-about.jsx` with Ali** — the one page never checked against a résumé. — agent + user
2. **Reconcile the four PP descriptions** (home hero, CH-01, detail, `TRAJ_ROLES`) — Trajectory now
   uses the résumé framing and the other three don't. Cheap consistency win even pre-pilot. — agent
3. Consider an OG image — shared links still preview as text only (`images/` has nothing suitable).
4. Resume the security audit (unpkg SRI, `/security-review`), then the stale repo docs
   (`README.md` still says the site is disabled; `SECURITY.md` cites deleted files).
