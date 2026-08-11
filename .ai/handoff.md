# Handoff — Live State

## Last Updated
2026-08-11 · session 3 (five launches)

## Current State
**🚀 THE SITE IS LAUNCHED**, and has since been launched a second time with a full résumé sync.
`main` no longer holds the under-construction splash — it holds the full Console Dossier site and
pakfro.dev serves it. Both launches were at Ali's explicit request (he applied to a job listing
the site). Verified live after each: Pages build `built`, assets 200 from pakfro.dev, pages render
with theme and fonts intact, **zero console errors**.

`main` and `dev` are currently **identical** at `5e9c032`. Continue editing on `dev`; each future
launch is another `git checkout main && git reset --hard dev && git push --force origin main`.

Recovery tags on origin, newest first: **`prelaunch-5e9c032`** (`cabd3a1`, before hiding Field
Notes) · **`prelaunch-cabd3a1`** (`129adbe`, before the home layout fix) · **`prelaunch-129adbe`**
(`82403f3`, before the PP consistency pass) · **`prelaunch-82403f3`** (`7824b97`, before the résumé
sync) · **`splash-archive`** (`764493d`, the old under-construction splash).

⚠️ **Verifying a launch in the browser is misleading** — the Browser pane serves cached
`build/*.js` and will happily show you the *previous* version of a page minutes after a successful
deploy. Verify with `curl` against `https://pakfro.dev/build/<file>.js`, or navigate with a
cache-busting query (`https://pakfro.dev/?cb=<sha>#/route`). This cost a false "the launch didn't
work" scare twice in this session.

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

**Launch 3 — `129adbe`, Pocket Professor consistency pass:**
PP was described **five** different ways; the résumé's PERSONAL PROJECTS entry is now canonical and
every surface matches. Audience was the worst drift — "self-taught learners" (home) / "career-
changers" (CH-01) / "career-switchers leaving high-attrition work" (detail) / "service-industry
workers 35+" (Trajectory) / "mid-career professionals" (About §03) — all now service-industry
workers changing careers. Home had also renamed the agents to "an onboarding counselor, an
instructor's guidance"; they are onboarding / professor / career coach everywhere now.
- **`cd-detail.jsx`** — telemetry said `v2 · IN DESIGN` and the spec table said `Pre-pilot · v2 in
  design`, both contradicting the page's own 2026.05 build-log entry ("Pilot readiness") **and** the
  résumé. Now `v2 · HARDENING` / `Pre-pilot hardening · v2`. Picked up the mechanics the résumé
  names that the site only half-had: append-only event store (was "audit record"), schema
  validation, policy-gated output. Step 04 renamed Audit → Record. Added a CI row (GitHub Actions).
- **`cd-home.jsx`**, **`cd-projects.jsx`** (CH-01 body + `github actions` stack chip),
  **`cd-about.jsx`** (§03 audience line).

**Launch 4 — `cabd3a1`, audience rewording + a shipped CSS regression:**
- **PP audience is now "motivated autodidacts who want to change careers"** on all five surfaces
  (Ali's wording, `e822796`). Two knock-ons: dropped "(35+)", and "a domain informed by 15 years of
  personal industry experience" became "a problem informed by 15 years of my own service-industry
  work" — the old phrasing made the service industry *the domain*, which stops following once the
  audience is autodidacts generally. ⚠️ **This now DIVERGES from the résumé**, which still says
  "service-industry workers (35+) changing careers". Ali's call, made knowingly.
- **Fixed a layout regression this session shipped in `7824b97`.** The ~06-24 Projects work
  redefined `.cd-ch` as a flex card for the 2×2 grid and moved padding into `.cd-ch-body`. The home
  page's secondary channels use `.cd-ch` with a *different* DOM shape (id | body | right, no body
  wrapper), so they lost their 3-column grid, 60px block padding, and separator rules — rendering
  cramped on the live site until Ali spotted it. Restored as **`.cd-chan`** (own class, can't
  collide with the grid again). Verified live at 1280px: `150px 468px 190px`, `60px 0`, gap 40.
- **Channel headings are now links** — "Field Notes" → `#/field-notes`, "Earlier work" →
  `#/trajectory`. Only the small "open log →" links were clickable before.

**Launch 5 — `5e9c032`, Field Notes hidden:**
Ali's call — one published post plus unfinished drafts isn't enough to carry the channel, and he
doesn't want to rush them. **Nothing was deleted.** `cd-fieldnotes.jsx` still builds and still
loads from `index.html`; everything is gated on one flag, `SHOW_FIELD_NOTES` in `cd-theme.jsx`
(~line 341). Gates three things: the `CD_NAV` entry, the home CH-02 channel (with "Earlier work"
taking CH-02 and the band count following, 2 routed → 1 routed), and the `#/field-notes` route —
an old link now falls through to Home rather than showing a half-live page. **Verified both
directions before committing**: flipping to `true` + `npm run build` restores nav, both channels
with correct numbering, and "2 routed".
⚠️ The one live post ("Old is Gold") is now unreachable. `sitemap.xml` lists only the root so
nothing points at it, but if the URL was ever indexed it silently lands on Home instead of 404ing.

## Open Threads
- **`cd-about.jsx` is still the last page never reviewed end-to-end.** Launch 3 touched only its
  §03 audience line; the rest (§01 bio, §02 blockquote, §04 prior life) has never been checked
  against a résumé. Read it next.
- **Both factual questions are now RESOLVED by the résumés** (they were open since session 1):
  job-apply is Node · SQLite · Playwright · MV3 Chrome extension ✅; **Pocket Professor dates from
  2024** ✅ — the résumé's 2024 wins over the 2025-03 first commit, and the site now says 2024.
- **Corrections applied in launch 2** (the site had drifted from the résumé): MAXX apprenticeship
  7 months not 6; cert is AWS **Machine Learning** Engineer not AWS Certified AI Practitioner;
  duplicate "Coding Dojo · Red Belt" credential row dropped.
- **PP card + detail — still parked** pending Ali's v2 pilot, but the ✅ **five-surface drift is
  RESOLVED** (launch 3). The park covers *behavior written from assumptions*; the consistency pass
  only propagated claims Ali had already written in his own résumé, which is why it was in bounds.
  Post-pilot work remaining: FIG.01 product screenshot, and replacing the PRE-PILOT framing with
  observed v2 behavior. **When that happens, five surfaces need updating, not one** — home hero,
  CH-01 card, detail page, `TRAJ_ROLES`, and About §03.
- **The Hire page is now the ONLY place availability is stated.** If Ali's target role changes
  again, both `cd-hire.jsx` and the pill string in `cd-theme.jsx`'s StatusBar need updating.
- **To bring Field Notes back:** flip `SHOW_FIELD_NOTES` to `true` in `cd-theme.jsx`,
  `npm run build`, commit both the `.jsx` and `build/*.js`. That is the whole job — no markup to
  restore. Ali will do this once he has finished more posts (he has drafts, deliberately unrushed).
- **`.cd-ch` vs `.cd-chan` — do not merge them.** `.cd-ch` = Projects grid card (flex column,
  padding in `.cd-ch-body`). `.cd-chan` = home secondary-channel row (3-col grid, own padding).
  They share a visual language but not a DOM shape; collapsing them is what caused the regression.
- **The PP audience line now disagrees with the résumé on purpose** (see launch 4). If Ali updates
  the résumé to match, re-sync all five surfaces *and* `docs/ali-tahir-resume.pdf`.
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
1. **Review `cd-about.jsx` with Ali** — the one page never checked end-to-end. — agent + user
2. Consider an OG image — shared links still preview as text only (`images/` has nothing suitable).
3. Resume the security audit (unpkg SRI, `/security-review`), then the stale repo docs
   (`README.md` still says the site is disabled; `SECURITY.md` cites deleted files).
