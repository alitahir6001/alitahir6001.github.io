# Handoff — Live State

## Last Updated
2026-08-10 · session 3

## Current State
**🚀 THE SITE IS LAUNCHED.** `main` no longer holds the under-construction splash — it now holds
the full Console Dossier site, and pakfro.dev serves it. Launch was done at Ali's explicit request
(he applied to a job and listed the site, needed it live immediately). Verified live: Pages build
`built`, `index.html` + `build/cd-app.js` both 200 from pakfro.dev, home page renders with theme
and fonts intact, no blocking console errors.

`main` and `dev` are currently **identical** at `7824b97`. Continue editing on `dev`; each future
launch is another `git checkout main && git reset --hard dev && git push --force origin main`.
The old splash is preserved at tag **`splash-archive`** (`764493d`), pushed to origin, in case it
is ever needed again.

## Changed Files (session 3)
- **`index.html`** — ported `main`'s security block into `dev` (CSP, referrer, Permissions-Policy),
  widened CSP for the unpkg React UMD (`script-src 'self' https://unpkg.com`) and cd-theme's
  injected `<style>` (`style-src 'unsafe-inline'`); set `robots` to **index, follow** (was absent;
  splash had noindex); added description, canonical, OG, and Twitter tags.
- **Committed the ~06-24 backlog** — `cd-projects.jsx`, `cd-theme.jsx`, `cd-trajectory.jsx` + their
  three `build/*.js` (Projects 2×2 grid + `art` slot, CH-03 → Oneness Suite, Trajectory GE/Accenture
  merge). `check-build-fresh.sh` passed before the commit.
- **`.claude/skills/`** — session 2's skill library, now tracked. `.claude/settings.local.json`
  added to `.gitignore`.
- Commit `7824b97` on `dev`, pushed; `main` force-updated to it.

## Open Threads
- **Cosmetic:** console logs `CSP directive 'frame-ancestors' is ignored when delivered via a
  <meta> element` — true and harmless (it was inherited from the splash, which had the same line).
  `frame-ancestors` only works as a real HTTP header, which GitHub Pages can't set. Either drop the
  directive from the meta tag or accept the notice. 2-minute fix, next launch.
- **Trajectory / About / Hire never got the page-by-page review with Ali** — they are LIVE now,
  unreviewed. Highest-value follow-up: read those three pages as a stranger would.
- **Two factual items still unanswered and now public:** job-apply card claims Playwright · sqlite
  (Ali to confirm); PP V1 public date says résumé's 2024 while the first commit is 2025-03.
- **PP card + detail — still parked** pending Ali's v2 pilot. Accurate and PRE-PILOT-labeled today,
  so being live is fine; refine after the pilot. PP is described in four places (home hero, CH-01,
  detail, `TRAJ_ROLES`) with drifting framings — reconcile all four in one pass when the park lifts.
- Rest of the security audit still open: unpkg SRI or self-hosting React, full `/security-review`.
- `SECURITY.md` references deleted demo/form files; `README.md` still says the site is disabled;
  `PRODUCTION-BUILD.md` partly stale. Repo docs, invisible to visitors, but now the repo is the
  thing a hiring manager might click through to.
- No OG image exists (`images/` has only the PP code snapshot and a personal photo), so shared
  links render a text-only preview card.
- Two design questions parked in `pakfro-site-research-frontier`: analytics privacy bar (F2),
  markdown-vs-structured body for Field Notes (F4).

## Next Recommended Step
The site is up, so everything below is improvement, not unblocking:
1. **Review Trajectory / About / Hire with Ali** — live and unreviewed. — agent + user
2. Ali answers the two factual questions (job-apply stack; PP V1 date) and we correct in place.
3. Drop `frame-ancestors` from the meta CSP; consider an OG image.
4. Resume the security audit (unpkg SRI, `/security-review`), then the stale repo docs.
