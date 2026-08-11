---
name: pakfro-site-architecture-contract
description: Load-bearing design decisions and invariants of the pakfro.dev Console Dossier site — the window.* global namespace, load-bearing script order in index.html, hash routing by substring match, esbuild non-bundled build, useReveal, and the known-weak points. Use when adding a page or route, touching index.html or build.mjs, debugging "X is not defined" / blank page / wrong page rendering, or wondering why the site has no bundler or modules.
---

# pakfro-site architecture contract

The decisions that hold this site together, why they were made, and what breaks if you
violate them. This is a **static, no-backend, React-via-script-tag SPA** — most modern
React instincts are wrong here.

**Not this skill?** Commands and troubleshooting → `pakfro-site-runbook`. Whether you're
even allowed to make the change → `pakfro-site-change-control`. Page copy →
`console-dossier-content-reference`.

## The shape of the thing

```
index.html
  ├─ <head>: JetBrains Mono (Google Fonts) + React 18.3.1 + ReactDOM 18.3.1
  │          production UMD from unpkg  →  defines global React / ReactDOM
  └─ <body>: <div id="root"> + ten plain <script> tags, in a LOAD-BEARING ORDER:
       tweaks-panel → cd-theme → cd-home → cd-detail → cd-projects →
       cd-fieldnotes → cd-trajectory → cd-about → cd-hire → cd-app  (LAST)
```

Each `build/*.js` is the esbuild-transpiled, minified output of the matching `*.jsx` at
the repo root. **No bundling. No modules. No imports.** Files communicate through a
shared `window.*` namespace.

## Invariant 1 — the global namespace

Every page file ends by publishing itself:

```js
window.Projects = Projects;   // cd-projects.jsx, cd-home.jsx, cd-about.jsx, …
```

`cd-theme.jsx` publishes the shared kit in one call:

```js
Object.assign(window, { OXBLOOD, useReveal, GlobalStyle, StatusBar, Foot });
```

`CD_NAV` and `StatusClock` are **not** exported — they are used only inside
`cd-theme.jsx`. `tweaks-panel.jsx` publishes `useTweaks`, `TweaksPanel`, `TweakSection`,
`TweakRow`, `TweakSlider`, `TweakRadio`.

**Why:** the site predates any build step and was authored to run from a plain file
server. Keeping globals meant the esbuild step could be added later with zero code
changes (`bundle: false`), and it keeps output debuggable as ten small files.

**Violate it and:** a page that forgets `window.X = X` throws `X is not defined` in
`cd-app.jsx` and the whole app fails to render — blank page, not a partial one.

## Invariant 2 — script order in `index.html`

Order is: definitions before use, `cd-app` last.

- `tweaks-panel` and `cd-theme` define globals every page reads.
- `cd-app.jsx` calls `ReactDOM.createRoot(...).render(<App />)` at module top level, so
  by the time it runs, every `window.Page` must already exist.

**Violate it and:** `ReferenceError` at load, blank page. This is why `build.mjs` says
its own `ENTRIES` order is cosmetic — **the order that matters lives in `index.html`.**

## Invariant 3 — the build is committed output

GitHub Pages serves this repo's files directly. There is no server-side build. So
`build/*.js` is a **committed artifact**, and a `.jsx` edit is only real once rebuilt.
`bundle: false` is deliberate; adding `--bundle` would wrap each file in its own scope
and silently break every global. See `pakfro-site-change-control` for the commit gate
and `pakfro-site-runbook` for the commands.

## Invariant 4 — hash routing by substring match

`cd-app.jsx` is the entire router:

```js
let Page = Home;
if (route.indexOf('pocket-professor') !== -1) Page = Detail;
else if (route.indexOf('projects') !== -1) Page = Projects;
else if (route.indexOf('field-notes') !== -1) Page = FieldNotes;
… trajectory, about, hire; anything unmatched falls through to Home.
```

- It matches on `location.hash` with `indexOf`, **not** exact equality — so
  `#/field-notes/old-is-gold` still resolves to `FieldNotes`, which then does its own
  second-level routing (`fieldNoteSlug()` regex → `FieldNotePost` or `FieldNotesList`).
- `<div className="cd" … key={route}>` — the `key` forces a **full remount on every
  route change**. That is what makes `useReveal` re-run and re-reveal content.
- `useEffect(() => window.scrollTo(0,0), [route])` resets scroll per navigation.
- There is no 404: an unknown hash renders Home.

**Why hash routing:** GitHub Pages serves static files with no rewrite rules. A real
path router would 404 on refresh at `/projects`. Switching to path routing requires
actual Pages rewrite support — don't.

**Known-weak point (real, not hypothetical):** substring matching is order-dependent and
collision-prone. A future route containing another route's name (e.g. `#/about-projects`)
would resolve to the earlier branch. Keep new route names distinct, or replace the chain
with an exact-match map.

## Invariant 5 — CSS lives in exactly one place

All site CSS is a template literal inside `GlobalStyle()` in `cd-theme.jsx`, rendered as
a `<style>` tag. Colors come from `OXBLOOD.vars` — CSS custom properties (`--paper`,
`--accent-ink`, `--rule`…) spread onto the root `.cd` element in `cd-app.jsx`, alongside
`--glow` (from the Tweaks panel) and the `data-frame` / `data-space` attributes that
drive framing and vertical rhythm.

**Violate it and:** styles split across files with no cascade guarantee, and the Tweaks
panel's variables stop applying.

## Invariant 6 — `useReveal` is rect math, not IntersectionObserver

```js
if (el.getBoundingClientRect().top < h * 0.92) el.classList.add('is-in');
```

Runs on mount, at +60 ms, at +320 ms, and on scroll/resize (rAF-throttled). It **only
ever adds** `.is-in`, so revealed content never flickers back out.

**Why:** IntersectionObserver proved unreliable inside sandboxed preview iframes. Every
page calls `useReveal('<page-key>')` once at the top of its component, and every element
that should animate in carries `data-reveal`. **A new page that forgets `useReveal` will
render its `data-reveal` elements permanently invisible** — this is the most likely
"my new page is blank but there are no errors" cause.

## Adding a new page — the three touches

Miss any one and you get a blank page or a `ReferenceError`.

1. **Create `cd-<name>.jsx`** at the repo root. Call `useReveal('<name>')` first thing;
   render `<StatusBar station="…" cur="<navkey>" />` at the top and `<Foot … />` at the
   bottom; end the file with `window.<Name> = <Name>;`.
2. **Add `'cd-<name>'` to `ENTRIES`** in `build.mjs`.
3. **Add `<script src="build/cd-<name>.js"></script>`** to `index.html` — anywhere after
   `cd-theme`, but **before `cd-app`**.

Then: add a route branch in `cd-app.jsx`, optionally a `CD_NAV` entry in `cd-theme.jsx`,
rebuild, and commit `.jsx` + `build/*.js` together.

## Known-weak points (stated plainly)

| Weakness | Status |
|---|---|
| **React loaded from unpkg CDN with no SRI.** `crossorigin="anonymous"` is set, but there is no `integrity` hash — a compromised CDN response would execute. | Open. Fix = add SRI or self-host into `build/`. On the security-audit list. |
| **No CSP on the React `index.html`.** Only the `main` splash and the old deleted loose files ever had security meta tags. | Open. On the security-audit list. |
| Substring route matching (Invariant 4). | Open, currently harmless. |
| No tests, no CI, no linter anywhere in the repo. Verification is manual — see `pakfro-site-runbook`. | By design for a site this size; a real constraint on how confidently anything can change. |
| Blog has no markdown/emphasis rendering — the live post shows literal `* *`. | Open, low priority. |
| Google Fonts is a second third-party request (privacy + availability). | Not currently tracked. |

## Provenance and maintenance

Authored 2026-07-06 against `dev` @ `156e4d9`; React pinned at 18.3.1 in `index.html`.
Re-verify:

```bash
grep -n "window\.\w* = \|Object.assign(window" *.jsx | grep -v addEventListener
```

```bash
.claude/skills/pakfro-site-runbook/scripts/check-wiring.sh   # asserts every invariant above except 5 & 6
```
