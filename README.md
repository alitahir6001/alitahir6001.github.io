# pakfro.dev

My personal site and hiring portfolio — a single-page React app themed as a retro
"Console Dossier". Live at **[pakfro.dev](https://pakfro.dev)**, served by GitHub Pages
straight from `main`.

## Stack

React 18 as a self-hosted UMD bundle (`vendor/`), JSX precompiled with esbuild, hash routing,
no framework and no router library. There is **no backend and no server-side build** —
GitHub Pages serves the files in this repo exactly as they are committed.

## Build

```bash
npm install
npm run build     # one-shot transpile + minify -> build/
npm run watch     # rebuild on save while editing
```

> **`build/*.js` is committed on purpose.** Pages has no build step, so an edited `.jsx`
> without a rebuilt `.js` means the live site runs stale code. Run `npm run build` before
> every commit that touches a `.jsx` file.

To preview locally, serve the directory over HTTP (opening `index.html` from the
filesystem won't work) and visit `http://localhost:4173`:

```bash
python3 -m http.server 4173
```

## Layout

```text
index.html          script tags in a load-bearing order — cd-app must load last
cd-theme.jsx        all CSS, the OXBLOOD palette, StatusBar, Foot, useReveal, CD_NAV
cd-app.jsx          shell: hash router + the gated Tweaks panel
cd-<page>.jsx       one file per page, each assigning its component to window.*
build/              compiled output, committed
build.mjs           esbuild config — per-file, deliberately NOT bundled
docs/               project write-ups referenced by the site
```

Each source file publishes its component on `window` rather than exporting a module, so
`index.html`'s script order matters and esbuild runs without `--bundle`. Adding a page
means creating `cd-<name>.jsx`, assigning `window.<Name>`, then registering it in
`build.mjs` and `index.html` before `cd-app`.

Page content lives inside the components as data arrays — `PROJECT_CHANNELS`,
`TRAJ_ROLES`, `FIELD_NOTES`. There is no CMS and no content directory.

## Deploying

Push to `main`. GitHub Pages picks it up; `CNAME` points the custom domain at it.

Browser caching makes deploys look like they failed — the previous `build/*.js` is served
for a while after a successful push. Verify with `curl https://pakfro.dev/build/<file>.js`
or a cache-busting query rather than a plain page refresh.
