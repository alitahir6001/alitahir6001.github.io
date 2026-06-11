## What this project is
Ali Tahir's personal site / hiring portfolio at **pakfro.dev** (GitHub Pages + `CNAME`). A
single-page, hash-routed React app themed as a retro "Console Dossier" (OXBLOOD palette). Fully
static — **no backend**. It is not a blog engine or CMS; content is hardcoded in components.

- `.ai/` — cross-session state; read first (see `.ai/RULES.md`). `TODO.md` — detailed roadmap.

## Stack
React 18 (UMD, loaded from unpkg CDN) · JSX precompiled by **esbuild** → `build/*.js` · CSS lives
in a `<style>` block inside `cd-theme.jsx` · hash routing, no router lib · deployed on GitHub Pages
(static; **no server-side build**).

## Architecture (mental model)
```
index.html
  ├─ unpkg: react + react-dom (production UMD)
  └─ build/*.js  (compiled from cd-*.jsx, COMMITTED) — load order is load-bearing:
       tweaks-panel → cd-theme → cd-home/detail/projects/fieldnotes/trajectory/about/hire → cd-app
                          │   files share a window.* global namespace (no imports/modules)
                          └─ cd-theme exports GlobalStyle, StatusBar, Foot, OXBLOOD, useReveal
```
- Each `cd-*.jsx` assigns its component to `window.*`. `cd-app.jsx` (loads LAST) is the shell:
  hash router (substring match on `location.hash`) + the gated Tweaks panel.
- Page content lives INSIDE each component as data arrays (`TRAJ_ROLES`, `PROJECT_CHANNELS`,
  `FIELD_NOTES`). No data files / CMS.

## File map (load-bearing only)
- `cd-theme.jsx` — all CSS + OXBLOOD palette, StatusBar (live clock), Foot, `useReveal`, `CD_NAV`.
- `cd-app.jsx` — shell, hash router, Tweaks-panel gating (`SHOW_TWEAKS`).
- `cd-home.jsx` `#/` · `cd-detail.jsx` `#/pocket-professor` · `cd-projects.jsx` (`PROJECT_CHANNELS`)
- `cd-fieldnotes.jsx` (`FIELD_NOTES`) — blog list; **no reading view yet** · `cd-about.jsx` ·
  `cd-hire.jsx` · `cd-trajectory.jsx` (`TRAJ_ROLES`/`TRAJ_SKILLS`, résumé link) · `tweaks-panel.jsx`.
- `build.mjs` — esbuild (per-file, NOT bundled). `package.json`: `npm run build` / `npm run watch`.
- `docs/` — `ali-tahir-resume.pdf`, `pocket-professor-version-history.md`.

## Phase / status
Active content overhaul on branch `dev`; the live site (`main`) is an under-construction splash;
not yet relaunched. Live state → `.ai/handoff.md`.

## Active gotchas
1. **`build/*.js` MUST be committed.** Pages serves files directly with no build step. After
   editing any `.jsx`, run `npm run build` (or `watch`) before committing or the site runs stale JS.
2. **Script load order in `index.html` is load-bearing** (shared `window.*` globals). `cd-app` loads
   last; `tweaks-panel`+`cd-theme` first. Don't reorder; don't add `--bundle` to esbuild.
3. **Two-branch model.** `main` = splash only (this is what deploys). `dev` = full WIP site (never
   deploys). Edit on `dev`. Launch = `git checkout main && git reset --hard dev && git push --force origin main`.
4. **Hash routing only.** Internal links use `#/route`. Don't switch to `/route` without real
   routing + Pages rewrites. New page = new `cd-*.jsx` (assign `window.X`) + add to `build.mjs`
   ENTRIES + `index.html` script list (before `cd-app`).
5. **"File modified since read" mid-edit** — a linter/watcher touches files; just re-Read and
   re-apply, content is unchanged.
6. **`useReveal` uses rect math, not IntersectionObserver** (unreliable in sandboxed iframes); it
   only ever adds `.is-in` (revealed content never flickers out).
7. **Pocket Professor lives in OTHER repos** (`pock_prof_playground` = current; also `pocket_professor`,
   `pocket_professor_POC`). Real stack = Node/Fastify/TS/Postgres (NOT Python/FastAPI). Use `gh`.

## Conventions / what NOT to do
- **Don't fabricate content.** This site shipped with AI-generated fake metrics/claims — all since
  purged. Everything must be real and defensible (hiring portfolio). When unsure, ask or pull from
  the real repos via `gh`.
- **Don't add a bundler/framework.** Keep the script-tag + esbuild setup (Option C in
  `PRODUCTION-BUILD.md` is a deliberate, separate decision).
- Don't edit CSS to change content — content is in components; theme is fixed (OXBLOOD).
- Don't commit `node_modules/` (gitignored). No secrets here — fully static and public.

## Recent context
- **2026-06-09/10 (session 1):** Stood up esbuild tooling + the main/dev branch split; purged all
  placeholder/fabricated content site-wide; corrected PP's stack + documented its full version
  history; rebuilt Trajectory from the résumé (added the IDEA job, PP = personal project); wired
  the résumé PDF; chrome fixes (live clock, footer, gated Tweaks panel); removed holdover files;
  built the in-app Field Notes reader ("Old is Gold" live). Then a page-by-page review with Ali —
  Index, Field Notes, Projects done. **PP card + detail page PARKED** until Ali runs the v2 pilot
  to describe its real behavior honestly. Next: review Trajectory/About/Hire; security audit.
