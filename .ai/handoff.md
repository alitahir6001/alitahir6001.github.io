# Handoff — Live State

## Last Updated
2026-06-10 · session 1 PAUSED here — resume after Ali runs the PP v2 pilot

## Current State
Working on branch **`dev`** (full WIP site; never deploys). **`main`** = under-construction
splash, which is what GitHub Pages serves at pakfro.dev. Hash-routed React SPA: edit `cd-*.jsx`,
`npm run build` (esbuild → `build/*.js`, committed because Pages has no build step). The whole
**placeholder/fabrication purge is done** across every page; Trajectory rebuilt from the real
résumé (IDEA day-job added, PP framed as a personal project); résumé PDF, live UTC+local clock,
footer links, gated Tweaks panel all done; holdover files removed. Now doing a **page-by-page
text review with Ali**. Most work is committed+pushed to `dev` through the Field Notes review;
the latest **Projects restructure + PP card reframe are built but uncommitted**.

## Review progress (page-by-page with Ali)
- **Index: done** — clock shows UTC + viewer-local time; home statement trimmed; footer
  "ACK" stamps kept (decorative, intentional).
- **Field Notes: done** — in-app reader (`FieldNotePost` @ `#/field-notes/<slug>`); "Old is Gold"
  live (typos fixed, voice intact); list blurb auto-excerpts body[0]; wider reading column
  (`.cd-article` 80ch). TODO: Ali to add period-tech images later.
- **Projects: mostly done** — dropped the GE SSO card (it's a job, in the résumé); added
  **job-apply** + **intake-assistant** (drafted from their repo READMEs); fixed Hardware card
  (Raspberry Pi = classic-gaming console). PP **card** body reframed to "motivated autodidacts
  who want to leave their current industry / adapts to how you learn best."
- **PP card + detail page: PARKED** ⛔ — Ali will get the **Pocket Professor v2 pilot running**
  first, so he can describe today's real behavior honestly, then return to refine the card +
  detail. DO NOT rewrite PP detail behavior from assumptions until then.
- **Not yet reviewed:** Trajectory, About, Hire.

## Open Threads
- **PP card + detail final content — BLOCKED on Ali running the v2 pilot.** (Also PP FIG.01
  screenshot pending pilot; PP V1 date kept as 2025 — first commit 2025-03 vs résumé's "2024".)
- **job-apply / intake-assistant cards** drafted from READMEs — need Ali's review; job-apply
  stack says generic "browser automation" → name the real lib (Playwright/Puppeteer?).
- Security audit not started; `SECURITY.md` references now-deleted demo/form files.
- `PRODUCTION-BUILD.md` partly stale; `README.md` has a stale "disabled" note.

## Next Recommended Step
Continue the page-by-page review on the **unblocked pages — Trajectory, About, Hire** (and, if
Ali wants, finish refining the job-apply/intake-assistant cards). The **security audit** is also
unblocked. **Resume the PP card + detail page only after Ali has run the v2 pilot.**
