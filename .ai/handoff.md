# Handoff — Live State

## Last Updated
2026-07-07 · session 2

## Current State
Working on branch **`dev`** (full WIP site; never deploys). **`main`** = under-construction
splash, which is what GitHub Pages serves at pakfro.dev. Hash-routed React SPA: edit `cd-*.jsx`,
`npm run build` (esbuild → `build/*.js`, committed because Pages has no build step).

Session 2 did **no site-content work** — it built a project skill library at `.claude/skills/`
(5 skills) so future cold sessions and smaller models can carry the site forward without
re-deriving context. Site content is unchanged from where session 1 left it, **plus** a batch of
finished-but-uncommitted work from ~2026-06-24 that was never logged (Ali confirms it is done, not
WIP): the Projects page moved to a 2×2 card grid with an `art` image slot, CH-03 became **Oneness
Suite** (was intake-assistant), copy was tightened across all four channels, and Trajectory merged
the two GE/Accenture entries into one **2021 — 2025 "General Electric → Accenture"** role.
Verified this session: the committed `build/*.js` is **byte-identical** to a fresh esbuild run, so
the tree is genuinely in sync — that work is ready to commit as-is.

## Changed Files (session 2)
- **New:** `.claude/skills/` — `pakfro-site-change-control`, `console-dossier-content-reference`,
  `pakfro-site-architecture-contract`, `pakfro-site-runbook` (+ `scripts/check-build-fresh.sh`,
  `scripts/check-wiring.sh`), `pakfro-site-research-frontier`.
- **Modified:** `.ai/*` (this update). No `.jsx`, no `build/`, no site files touched.
- **Still uncommitted from ~06-24:** `cd-projects.jsx`, `cd-theme.jsx`, `cd-trajectory.jsx` +
  their three `build/*.js`, and the `.ai/backlog.md` linktree idea.

## Open Threads
- **Launching `dev` as-is would REGRESS security headers.** `dev`'s `index.html` has only
  `charset` + `viewport`; the `main` splash carries CSP, referrer, permissions, robots, and a
  description. `dev` also has **no** description/OG/Twitter/JSON-LD at all. Must be fixed as part
  of the security audit, before launch.
- **PP card + detail final content — still BLOCKED** on Ali running the v2 pilot. *Refinement
  only; not a launch gate — the page is accurate today.* (PP FIG.01
  screenshot pending; PP V1 date still unresolved — first commit 2025-03 vs résumé's "2024".)
- **PP is described in four places** (home hero, CH-01 card, detail, `TRAJ_ROLES`) with drifting
  framings. Reconcile all four in one pass when the park lifts.
- job-apply card now names Playwright + sqlite (was generic "browser automation") — Ali to confirm.
- Security audit not started. `SECURITY.md` still references deleted demo/form files;
  `README.md` still says the site is disabled; `PRODUCTION-BUILD.md` partly stale.
- Two design questions parked in `pakfro-site-research-frontier`: the analytics privacy bar (F2)
  and markdown-vs-structured-body for Field Notes (F4).

## Next Recommended Step
Shortest path to live — see the **🚦 Launch gate** in `current-task.md` for the full list:
1. **Commit the ~06-24 work** (Projects grid + Oneness Suite + Trajectory merge) — it is finished
   and its build output is verified in sync. — agent
2. **Fix the header regression**: port `main`'s meta/CSP block into `dev`'s `index.html`, add
   description + OG tags. — agent
3. **Review Trajectory / About / Hire** with Ali (one sitting). — agent + user
4. Ali answers two one-minute factual questions: job-apply stack (Playwright · sqlite?) and the
   PP V1 public date (2024 vs 2025-03).

**The PP v2 pilot does NOT gate launch** — the detail page is already accurate and PRE-PILOT
labeled; refining it post-pilot is the recommended sequence. Resume the PP *refinement* only
after Ali runs the pilot.
