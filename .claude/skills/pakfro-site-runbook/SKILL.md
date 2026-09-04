---
name: pakfro-site-runbook
description: Setup, build, run, preview, config catalog, and symptom-to-fix debugging for the pakfro.dev Console Dossier site. Use for npm run build / watch, serving the site locally, "blank page", "X is not defined", "my change isn't showing", stale build output, Tweaks panel not appearing, and for the validation bar — what counts as evidence a change works in a repo with no tests and no CI.
---

# pakfro-site runbook

Everything operational. **There are no tests, no linter, and no CI in this repo** —
verification is manual plus the two scripts shipped with this skill. That fact shapes the
whole validation section below.

**Not this skill?** Whether you're allowed to make the change → `pakfro-site-change-control`.
Why the architecture is like this → `pakfro-site-architecture-contract`. What to write →
`console-dossier-content-reference`.

## Setup from scratch

```bash
git clone https://github.com/alitahir6001/alitahir6001.github.io.git
cd alitahir6001.github.io
git checkout dev
npm install
```

`npm install` pulls exactly one dev dependency: **esbuild `^0.24.0`** (0.24.2 installed,
verified 2026-07-06). Nothing else is needed — React comes from a CDN at runtime.
Verified environment: Node v22.23.1, macOS. Node ≥18 is a safe assumption (`build.mjs`
uses top-level `await` and ESM).

## Build

```bash
npm run build
```

Transpiles JSX → `React.createElement` and minifies each of the ten root `.jsx` files
into `build/<name>.js`. **Not bundled** (`bundle: false`) — see the architecture
contract for why. Prints `built 10 files -> build/`.

```bash
npm run watch
```

Same thing, rebuilding on save. Leave it running while editing content; refresh the
browser after each save.

**Batch your edits, then build once** — don't run a build after every single file edit.

## Run it locally

Any static file server works; there is no backend and no API.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Opening `index.html` directly via `file://` also
works (nothing uses `fetch`), and both `localhost` and `file://` automatically reveal the
Tweaks panel.

Routes to smoke-test: `#/`, `#/projects`, `#/field-notes`,
`#/field-notes/old-is-gold`, `#/trajectory`, `#/about`, `#/hire`, `#/pocket-professor`.

## Diagnostics (shipped with this skill, read-only, verified working)

```bash
.claude/skills/pakfro-site-runbook/scripts/check-build-fresh.sh
```

Flags any `.jsx` newer than its `build/*.js`, and any git-modified `.jsx` whose build
output is *not* also modified. **Run this before every commit** — it mechanically
enforces the repo's most-violated rule. Exits 1 when stale.

```bash
.claude/skills/pakfro-site-runbook/scripts/check-wiring.sh
```

Verifies the three-touch wiring invariant: sources ↔ `build.mjs` ENTRIES ↔ `index.html`
script tags all agree, `cd-app` loads last, every source (except the `cd-app` entry
point) publishes a `window.*` global, and all seven page files call `useReveal`. **Run
this after adding a page or touching `index.html` / `build.mjs`.** Exits 1 on breakage.

Both were run against `dev` @ `156e4d9` on 2026-07-06 and exit 0; both failure paths
were exercised in a synthetic repo and correctly exit 1.

## Full config catalog

This is the complete set — enumerated by grepping for every config/env read, not from
memory. **There are no environment variables and no `process.env` reads in any source
file.**

| Knob | Where | Values / effect |
|---|---|---|
| `localStorage.cdTweaks` | read in `cd-app.jsx:18` | `'1'` reveals the Tweaks panel on a deployed host. Anything else (or unset) hides it. |
| `location.hostname` | read in `cd-app.jsx:16-17` | `localhost`, `127.0.0.1`, or `''` (file://) → Tweaks panel shown automatically. Wrapped in try/catch → `false` on error. |
| `TWEAK_DEFAULTS` | `cd-app.jsx:5-9` | `{ space: 'lounge', glow: 55, frame: 'stamp' }`. Sits inside `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` markers used by the Tweaks tooling — keep the markers. |
| `--glow` CSS var | `cd-app.jsx:36` | `t.glow / 100`, spread onto the root `.cd` element with `OXBLOOD.vars`. |
| `data-space` / `data-frame` | `cd-app.jsx:49` | `relaxed｜open｜lounge` and `stamp｜hairline` — drive vertical rhythm and rule weight in `cd-theme.jsx` CSS. |
| `--watch` | `build.mjs:44` (`process.argv`) | The only CLI flag. Switches esbuild to watch mode. |
| React / ReactDOM version | `index.html` `<head>` | Pinned `18.3.1` production UMD, **self-hosted in `vendor/`** since 2026-09-02. Upgrade = re-`curl` both `umd/react{,-dom}.production.min.js` from unpkg at the new version, diff the sha384 against jsdelivr's copy, done. No rebuild — React isn't bundled into `build/*.js`. |
| `CNAME` | repo root | `pakfro.dev` — the custom domain. Don't delete it; Pages needs it. |
| `robots.txt` | repo root | `Allow: /` + sitemap pointer. |
| `sitemap.xml` | repo root | Root URL only — deliberate, since all routes are hash fragments crawlers don't index separately. |
| `.gitignore` | repo root | `test.html`, `scratchpad.html`, `node_modules/`. The two HTML files exist on disk but are scratch, not site files. |
| npm scripts | `package.json` | `build`, `watch`. That's all. |

Deploy config lives in **GitHub Pages repo settings** (source branch), not in this repo —
which is how the site was switched off in Jan 2026 (source set to "none").

## Symptom → triage

| Symptom | Likely cause | Fix |
|---|---|---|
| **My edit isn't showing in the browser** | Edited `.jsx` but didn't rebuild — the page loads `build/*.js`. | `npm run build`, hard-refresh. Confirm with `check-build-fresh.sh`. |
| **Change works locally but not on pakfro.dev** | `build/*.js` wasn't committed, or you're looking at `main` (splash) rather than a launched `dev`. | Commit the build output; check which branch Pages serves. |
| **Blank page, console says `X is not defined`** | A page file is missing `window.X = X`, or a script tag is missing/out of order in `index.html`. | `check-wiring.sh`. |
| **Blank page, no console errors** | The route matched a component that renders nothing, or the page never calls `useReveal` so every `data-reveal` element stays invisible. | `check-wiring.sh` covers the `useReveal` case; otherwise check the route branch in `cd-app.jsx`. |
| **Wrong page renders for a URL** | Substring route matching in `cd-app.jsx` — an earlier `indexOf` branch won. | Rename the route to something distinct; see architecture contract, Invariant 4. |
| **Content appears then vanishes / never fades in** | `.is-in` never applied. `useReveal` only ever *adds* the class, so vanishing means a CSS problem, not the hook. | Check the `[data-reveal]` rules in `cd-theme.jsx`. |
| **Tweaks panel showing on the live site** | `localStorage.cdTweaks === '1'` in that browser. | `localStorage.removeItem('cdTweaks')`. |
| **Tweaks panel missing locally** | Serving from a hostname that isn't localhost/127.0.0.1. | Use `localhost`, or set `localStorage.cdTweaks = '1'`. |
| **Styles totally broken** | `cd-theme.js` failed to load or `GlobalStyle` isn't rendered. | Check the network tab for `build/cd-theme.js`; it must load before the pages. |
| **Everything is unstyled AND React is undefined** | `vendor/react*.js` missing or not served (they are committed — check they weren't dropped from the repo). | Confirm `GET /vendor/react.production.min.js` returns 200. No longer a CDN-outage symptom; React is self-hosted. |
| **Build fails after adding a page** | New file not in `build.mjs` ENTRIES, or a JSX syntax error. | esbuild prints file + line; `check-wiring.sh` catches the ENTRIES omission. |

## The validation bar — what counts as evidence here

With no tests and no CI, "it works" must mean something specific. For any change, the
bar is:

1. **`npm run build` exits clean.** Non-negotiable; a build error means nothing ships.
2. **`check-build-fresh.sh` and `check-wiring.sh` both exit 0.**
3. **Load the affected route(s) in a browser with the console open — zero errors.**
   For a route change, also test the routes on either side of it in the `cd-app.jsx`
   `if/else` chain, since substring matching makes them interdependent.
4. **Check the mobile breakpoint.** There is one, at the `@media` block in
   `cd-theme.jsx` (the projects grid collapses 2-col → 1-col there). Narrow the window.
5. **For content changes, the evidence is a source, not a screenshot.** A claim is
   validated when it traces to the résumé, a real repo read via `gh`, `docs/`, or Ali
   directly — see the sourcing table in `console-dossier-content-reference`. "It reads
   well" is not validation; the site's founding defect was fabricated content that also
   read well.
6. **Never judge a factual claim by eye, and never let a claim ship "pending
   confirmation."** If it isn't sourced, it doesn't ship. If Ali must confirm it, park
   it in `.ai/handoff.md` under Open Threads rather than publishing it.

A change that passes 1–4 but not 5–6 is **not** ready. The reverse is also true.

## Provenance and maintenance

Authored 2026-07-06 against `dev` @ `156e4d9`. Verified by running: `npx esbuild
--version` → 0.24.2; a full ten-file throwaway compile with `build.mjs`'s exact flags
(all succeeded, and output was byte-identical to the committed `build/*.js`); both
shipped scripts on the real repo (exit 0) and on a synthetic broken repo (exit 1).
Environment: Node v22.23.1.

```bash
node --version && npx esbuild --version && npm run build
```

```bash
.claude/skills/pakfro-site-runbook/scripts/check-build-fresh.sh && .claude/skills/pakfro-site-runbook/scripts/check-wiring.sh
```

```bash
grep -rn "localStorage\|hostname\|process\.env\|process\.argv" *.jsx build.mjs   # re-derive the config catalog
```
