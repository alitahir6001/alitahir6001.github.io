# Precompiling the JSX for production

In preview, Console Dossier loads **dev React** + **Babel Standalone** from a
CDN and transpiles every `.jsx` file **in the browser** on each page load.
That's convenient but slow and heavy. This guide removes Babel from the browser
by transpiling the JSX ahead of time and switching to the minified production
React.

You don't have to refactor any code for Options A or B — the files keep their
current global-scope architecture (each script assigns to `window`; load order
matters). Option C is the fuller modernization if you want it later.

---

## What "the build" produces

For each source file you get a plain `.js` file with the JSX compiled away:

```
tweaks-panel.jsx  →  tweaks-panel.js
cd-theme.jsx      →  cd-theme.js
cd-home.jsx       →  cd-home.js
cd-detail.jsx     →  cd-detail.js
cd-projects.jsx   →  cd-projects.js
cd-fieldnotes.jsx →  cd-fieldnotes.js
cd-trajectory.jsx →  cd-trajectory.js
cd-about.jsx      →  cd-about.js
cd-hire.jsx       →  cd-hire.js
cd-app.jsx        →  cd-app.js
```

Then `index.html` loads the `.js` files with ordinary `<script>` tags — no
`type="text/babel"`, no Babel script, production React.

---

## Option A — Babel CLI (most standard)

**1. Set up tooling** (run once, in the project root):

```bash
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-react
```

**2. Add a Babel config** — create `.babelrc`:

```json
{ "presets": ["@babel/preset-react"] }
```

**3. Transpile.** Put the ten source files in a `src/` folder (or adjust the
path), then:

```bash
npx babel src --out-dir build --extensions ".jsx" --keep-file-extension=false
```

This writes `build/cd-theme.js`, `build/cd-app.js`, etc. — same basenames,
JSX compiled to `React.createElement` calls. (Babel CLI transpiles each file
independently and does **not** wrap them in modules, so the existing
`window.*` global sharing keeps working.)

> No minification with Babel CLI alone — fine, the files are small. If you want
> minification too, use Option B instead.

---

## Option B — esbuild (transpile **and** minify, one command)

esbuild is faster and minifies in the same pass.

```bash
npm install --save-dev esbuild
```

Transpile + minify every file (keeps global scope — note **no** `--bundle`):

```bash
for f in tweaks-panel cd-theme cd-home cd-detail cd-projects \
         cd-fieldnotes cd-trajectory cd-about cd-hire cd-app; do
  npx esbuild "$f.jsx" --loader=jsx --minify --target=es2018 \
    --outfile="build/$f.js"
done
```

(Windows PowerShell: replace the loop with one `npx esbuild … ` line per file,
or run under Git Bash / WSL.)

---

## Wiring the built files into `index.html`

After Option A or B, edit `index.html` (the copy of `Console Dossier.html`).

**Remove** the Babel script and switch dev React → production React in
`<head>`:

```html
<!-- DELETE the @babel/standalone script tag entirely -->

<!-- Replace the two react .development.js tags with the minified prod builds.
     The integrity hashes differ for prod builds, so drop the integrity attr
     (or regenerate it yourself if your host requires SRI). -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
```

**Change** the body scripts from Babel JSX to plain JS, pointing at `build/`,
keeping the exact same order:

```html
<body>
  <div id="root"></div>
  <script src="build/tweaks-panel.js"></script>
  <script src="build/cd-theme.js"></script>
  <script src="build/cd-home.js"></script>
  <script src="build/cd-detail.js"></script>
  <script src="build/cd-projects.js"></script>
  <script src="build/cd-fieldnotes.js"></script>
  <script src="build/cd-trajectory.js"></script>
  <script src="build/cd-about.js"></script>
  <script src="build/cd-hire.js"></script>
  <script src="build/cd-app.js"></script>
</body>
```

> Order is load-bearing: `cd-app.js` renders the app and depends on everything
> above it, so it stays **last**. `tweaks-panel` and `cd-theme` define globals
> the pages use, so they stay near the top.

That's a complete production build: no in-browser transpile, minified
production React, fully static output you can host anywhere.

---

## Optional: cut the CDN dependency too

The steps above still pull React from unpkg. To self-host React (no external
CDN), download the two `.production.min.js` files into `build/` and point the
script `src` at the local copies. Then your site has zero third-party requests.

---

## Option C — Migrate to Vite (full modernization, later)

If you outgrow the script-tag setup and want hot reload, bundling,
tree-shaking, and hashed filenames, move to **Vite**. This requires a light
refactor — replacing the `window.*` global sharing with real `import` /
`export` statements between the files.

Rough shape:

```bash
npm create vite@latest console-dossier -- --template react
# move the cd-*.jsx files in, convert window.X = … assignments to
# `export function X…`, and add matching imports in each consumer file,
# then:
npm run build      # outputs an optimized dist/ folder
```

This is the "proper SPA" path. It's more work than Options A/B and isn't
necessary to ship — reach for it only when you want the developer-experience
upgrades, not just a production deploy.

---

## Recommendation

- **Want production now, minimal effort:** Option B (esbuild) — one command,
  transpiles and minifies, no code changes.
- **Prefer the canonical React toolchain:** Option A (Babel CLI).
- **Planning to grow this into a bigger app:** budget time for Option C later.
