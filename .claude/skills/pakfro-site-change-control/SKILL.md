---
name: pakfro-site-change-control
description: Rules and gates for changing the pakfro.dev site — read BEFORE committing, pushing, deploying, launching, touching main, force-pushing, or editing any site content (bios, project claims, metrics, dates, job history). Keywords: commit, push, deploy, launch, main vs dev branch, fabricated content, honesty rules, Pocket Professor parked, build must be committed, GitHub Pages.
---

# pakfro-site change control

How changes are classified and gated in this repo. Read before any commit, any content
edit, and especially before anything that touches `main`.

**Not this skill?** Build/run/debug commands → `pakfro-site-runbook`. Why the code is
shaped this way → `pakfro-site-architecture-contract`. How to write and source page
content → `console-dossier-content-reference`. Ideas for what to build next →
`pakfro-site-research-frontier`.

## Session start ritual (do this first, every session)

Read `.ai/` in this order: `rules.md` → `current-task.md` → `handoff.md` → `backlog.md`.
That directory is hand-maintained live state and **overrides anything date-stamped in
these skills**. Then:

- Update `handoff.md` continuously as work happens — rewrite sections in place, don't
  append (it is state, not a diary; cap ~150 lines).
- Add a `backlog.md` entry only at session end (2–3 sentences, newest first).
- Update `current-task.md` only on a task transition.
- Permanent gotchas belong in `CLAUDE.md`, not in `.ai/`.

## The non-negotiables

| Rule | Rationale | Incident behind it |
|---|---|---|
| **Never fabricate content.** Every metric, date, stack claim, and role description must trace to a real source: the résumé (`docs/ali-tahir-resume.pdf`), the real project repos via `gh`, `docs/`, or Ali directly. If you can't source it, ask — never fill the gap with something plausible. | This is a public **hiring portfolio**. One invented claim caught by a hiring manager discredits the whole site. | The 2026 redesign shipped AI-generated fake metrics, the wrong Pocket Professor stack (described as Python/FastAPI when v2 is Node/Fastify/TS), a fabricated "[Classified] eval harness" project, a fabricated Home-lab card, and a personal project presented as Ali's current job. A multi-session purge (June 2026) was required to undo it. |
| **A `.jsx` edit is not done until `build/*.js` is rebuilt and committed with it.** | GitHub Pages serves files as-is with **no build step**. Committing a `.jsx` without its rebuilt output ships stale JavaScript to production. | Standing gotcha since the esbuild setup (2026-06). |
| **Edit on `dev`, never on `main`.** `main` = under-construction splash and is what deploys to pakfro.dev. `dev` = full WIP site, never deploys. | Keeps the unfinished site invisible while pakfro.dev stays up. | Site was pulled 2026-01 for the revamp; splash created in commit `764493d`. |
| **Launch is an Ali-approved act only:** `git checkout main && git reset --hard dev && git push --force origin main`. Never run this, or any force-push to `main`, unless Ali explicitly says to launch. | It replaces the live site wholesale, via force-push, irreversibly from the remote's point of view. | — |
| **Don't reorder the `index.html` script tags; don't add `--bundle` to esbuild.** | Load order is load-bearing — the files share a `window.*` namespace. See `pakfro-site-architecture-contract`. | — |
| **Don't add a bundler or framework.** The script-tag + esbuild setup is deliberate. | Keeps the site zero-infra and directly Pages-servable. A Vite migration ("Option C" in `PRODUCTION-BUILD.md`) is a separate, Ali-gated decision — see `pakfro-site-research-frontier`. | — |
| **Theme is fixed (OXBLOOD).** Never edit CSS to change content. | Content lives in component data arrays; presentation lives in one `<style>` block in `cd-theme.jsx`. The separation was deliberate. | — |
| **Never commit `node_modules/`; never put secrets anywhere.** | Repo is fully static and fully public. | — |

## Change classification

| Change | Gate |
|---|---|
| Page content (data arrays in `cd-*.jsx`) | Source every claim (`console-dossier-content-reference`) → rebuild → commit `.jsx` + `build/*.js` together on `dev`. |
| New page / route | Three-touch recipe in `pakfro-site-architecture-contract`. Missing any one touch = blank page or a crash. |
| Theme / CSS | Only inside the `<style>` block in `cd-theme.jsx`. Palette stays OXBLOOD. |
| **Pocket Professor card (CH-01 in `cd-projects.jsx`) or detail page (`cd-detail.jsx`)** | **PARKED ⛔ since 2026-06-10** until Ali runs the PP v2 pilot and can describe real behavior. Do not rewrite PP behavior from assumptions. The park lifts when `.ai/handoff.md` says so — check there, not here. |
| Anything on `main` | Ali-approved launch only, or a splash fix Ali explicitly requests. |
| Tooling (`build.mjs`, `index.html` head, `package.json`) | Confirm with Ali first — these are the load-bearing bones. |
| `.ai/` files | Yours to maintain per the ritual above. `.ai/` is Ali's directory; skills live in `.claude/skills/`. |

## Commit hygiene

- Commit on `dev`.
- `git status` must never show a modified `.jsx` without its matching modified
  `build/*.js`. Verify mechanically: `.claude/skills/pakfro-site-runbook/scripts/check-build-fresh.sh`.
- Commit `.ai/` updates along with the session's work — the repo already does this
  (e.g. commit `156e4d9 "update session files"`).
- `test.html` and `scratchpad.html` exist on disk but are **gitignored** — they are
  scratch, not site files. Don't wire them into anything.

## Known-stale docs (don't cite these as truth)

As of 2026-07-06 these repo docs are out of date and are on the fix list:

- `README.md` — still says the site is "temporarily disabled" (Jan 2026 note).
- `SECURITY.md` — references `demo.html` / `form.html` / `js/*.js`, all deleted.
- `PRODUCTION-BUILD.md` — written before the build existed; describes Options A/B as
  future work. Option B (esbuild) is what actually shipped. Option C (Vite) is still open.

## Provenance and maintenance

Authored 2026-07-06 against `dev` @ `156e4d9`. Re-verify volatile facts:

```bash
sed -n '1,12p' .ai/handoff.md && grep -n "PARKED\|BLOCKED" .ai/current-task.md
```

```bash
git log --oneline -3 main && git log --oneline -3 dev
```
