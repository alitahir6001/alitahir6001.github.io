# Making Console Dossier your live website

This guide takes the **Console Dossier** design (the OXBLOOD theme) from a
preview prototype to your real, production website.

> **Mental model:** Console Dossier is **not** a CSS theme you drop on top of
> the old static HTML. It is a complete, self-contained React site — its own
> router, pages, and content. "Integrating" it means making it your front door
> and retiring `old-site/`.

---

## The files that make up the site

The entire website is these files. They must stay together in one folder:

| File | Role |
|------|------|
| `Console Dossier.html` | Entry HTML (becomes `index.html`) |
| `tweaks-panel.jsx` | The on-page Tweaks panel (spacing / glow / rules) |
| `cd-theme.jsx` | Shared CSS, status bar, channel nav, footer, OXBLOOD palette |
| `cd-app.jsx` | App shell + hash router (loads last, renders the app) |
| `cd-home.jsx` | Landing page |
| `cd-projects.jsx` | Projects index |
| `cd-detail.jsx` | Single project deep-dive |
| `cd-fieldnotes.jsx` | Field Notes (blog) list |
| `cd-trajectory.jsx` | Career timeline |
| `cd-about.jsx` | About page |
| `cd-hire.jsx` | Contact / "Hire" page |
| `images/` | Photography and screenshots referenced by the pages |

> Files **not** part of the site: `app.jsx`, `design-canvas.jsx`,
> `Three Directions.html`, and everything in `mockups/`, `old-site/`,
> `styles/`, `screenshots/`. Those are design-exploration scratch. You can
> delete or archive them once you're live.

Navigation uses **hash routing** (`#/`, `#/projects`, `#/about`, …), so the
whole site is served from the single `index.html` — no server-side routing
needed.

---

## Step 1 — Decide: quick-launch or production build?

There are two ways to ship this. They differ only in **how the JSX is run**.

- **Quick launch (CDN + in-browser Babel):** works today, zero tooling, but
  ships ~3 MB of dev React + Babel and transpiles in the browser on every page
  load. Fine for a low-traffic personal site; not ideal as a "production" answer.
- **Production build (precompiled JSX):** transpile the `.jsx` ahead of time,
  swap to the minified production React, and drop Babel entirely. First paint is
  far faster and the payload shrinks dramatically.

Since you want this production-ready, **do the build** — see
`PRODUCTION-BUILD.md`. The steps below assume the built (`.js`) files; if you
just want to preview first, the same steps work with the original `.jsx` files
and the existing CDN script tags.

---

## Step 2 — Make it the entry point

Copy the entry HTML to `index.html` at your web root:

```bash
cp "Console Dossier.html" index.html
```

All of its `<script src="…">` paths are **relative**, so it runs from any
folder as long as the files in the table above sit beside it.

---

## Step 3 — Replace placeholder content

The styling is fixed; you only edit text and images. Content lives **inside the
page components** — there is no separate CMS or data file:

- Your name, the status-bar pill ("OPEN · MID-LEVEL SWE"), nav labels, and
  footer links → `cd-theme.jsx`
- Hero headline + statement → `cd-home.jsx`
- Projects list and the project deep-dive → `cd-projects.jsx`, `cd-detail.jsx`
- Remaining pages → `cd-about.jsx`, `cd-trajectory.jsx`, `cd-fieldnotes.jsx`,
  `cd-hire.jsx`
- Photos / screenshots → drop into `images/` and update the `src` in the page

Edit the strings, re-run the build (Step 1), refresh. The theme carries over
automatically — you never touch the CSS to change content.

---

## Step 4 — Deploy

The built site is **fully static** — plain HTML/JS/images, no server runtime.
Host it anywhere:

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages:** push the folder
  (the built files + `index.html` + `images/`) and point the host at it.
- Set `index.html` as the entry. Because routing is hash-based, you do **not**
  need any rewrite/redirect rules — every route resolves inside `index.html`.

---

## Step 5 — Retire the old site

Once the new site is live and content is in:

```bash
rm -rf old-site styles screenshots mockups
rm app.jsx design-canvas.jsx "Three Directions.html"
```

(Or move them to an `archive/` folder if you'd rather keep them.)

---

## Gotchas

- **Don't change the script load order.** `tweaks-panel` → `cd-theme` →
  page components → `cd-app` (last). The files share a global namespace and
  `cd-app` renders the app, so it must load after everything it uses.
- **Hash links only.** Internal links use `#/route`. Keep that pattern when you
  add pages; don't switch to `/route` unless you migrate to real routing.
- **Custom domain:** point DNS at your host per their docs; nothing in the code
  needs to change.
