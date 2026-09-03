---
name: pakfro-site-research-frontier
description: Open problems where pakfro.dev could advance past its current state — discoverability/SEO for a hash-routed static SPA, click analytics without a backend or trackers, eliminating the unpkg CDN dependency, markdown rendering with no bundler, a live Pocket Professor demo from a static host, and when a Vite migration is actually justified. Use when planning what to build next, evaluating a feature idea, or asking "what's missing / what should I work on".
---

# pakfro-site research frontier

Open problems worth solving on this site, each with why the current approach falls short,
what asset this project already has, the first three concrete steps **in this repo**, and
a falsifiable milestone. Everything here is a **candidate**, not a decision — nothing in
this file authorizes a change. Route every one of these through
`pakfro-site-change-control`, and none of it outranks `.ai/current-task.md`, which is the
live priority list.

Ranked by leverage on the site's actual purpose: getting Ali hired.

---

## F1 — The site is invisible to search engines (highest leverage, most concrete)

**Why the current approach falls short.** Every route is a hash fragment
(`#/trajectory`, `#/field-notes/old-is-gold`). Crawlers do not index hash fragments as
separate URLs, which `sitemap.xml` openly concedes by listing only the root. On top of
that, the `dev` `index.html` contains exactly two meta tags — `charset` and `viewport`
(verified 2026-07-06). **No description, no Open Graph, no Twitter card, no structured
data.** So a recruiter googling "Ali Tahir engineer" finds nothing rankable, and a link
shared on LinkedIn or Slack unfurls as a bare URL with no title card. Worse: the `main`
splash *does* carry a CSP, referrer policy, permissions policy, and a description — so
**launching `dev` as-is would strip security headers the live site currently has.**

**The asset.** All content is already structured data in plain arrays (`TRAJ_ROLES`,
`PROJECT_CHANNELS`, `FIELD_NOTES`) and the build is a script you control (`build.mjs`),
so generating static artifacts from that content is a small step, not a rewrite.

**First three steps.**
1. Add the missing `<meta>` block to `index.html` — description, Open Graph
   (`og:title`/`og:description`/`og:image`/`og:url`), `twitter:card` — plus the CSP,
   referrer, and permissions policies carried over from `main`'s splash so launch is
   not a regression. Needs one social share image in `images/`.
2. Add a JSON-LD `Person` block (name, job title, `sameAs` → GitHub/LinkedIn) to
   `index.html` — the highest-value structured data for a personal portfolio.
3. Prototype prerendering in `build.mjs`: emit one real static HTML file per route
   (`/projects/index.html`, `/field-notes/old-is-gold/index.html`) containing the page's
   text and a redirect/hydration into the hash app. This is the step that turns hash
   routes into indexable URLs without adopting a router or Pages rewrites.

**You have a result when:** `site:pakfro.dev` returns more than one URL in Google, and a
pasted `pakfro.dev` link unfurls with a title, description, and image in Slack or
LinkedIn. Both are directly observable.

**Fenced off:** switching to path-based routing to fix this. Pages has no rewrite rules;
it 404s on refresh. Prerendering achieves the goal without breaking the routing contract.

---

## F2 — Click analytics on a static site without becoming a tracker

**Why the current approach falls short.** There is no analytics at all, so Ali has no
signal about which projects or posts anyone actually reads. Ali's own backlog entry
proposes a "linktree" page driven by `links.json` with click-through tracking. But the
site is a zero-backend static host: there is nothing to receive an event. The naive fix
(Google Analytics) contradicts the site's whole posture — no cookie banner exists, the
splash CSP is deliberately strict, and Ali's writing is explicitly anti-surveillance
("I never needed an internet connection, let alone a paid subscription").

**The asset.** A CSP-strict, dependency-light site and a hash router that already emits
a `hashchange` event on every navigation — a natural, free instrumentation point.

**First three steps.**
1. Decide the privacy bar with Ali first: cookieless and no consent banner, or nothing.
   That single decision eliminates most of the option space.
2. Evaluate exactly two cookieless candidates (Plausible, self-hosted or paid, vs.
   GoatCounter) on: one script tag, no cookies, CSP-compatible, hash-route support. Hash
   routes are the discriminator — many analytics tools only count page loads and would
   record a single pageview for the entire session.
3. Build the linktree page as a normal route first (`cd-links.jsx` + `links.json`,
   following the three-touch recipe in `pakfro-site-architecture-contract`), with
   analytics as a separable second commit — so the page ships even if the analytics
   question stalls.

**You have a result when:** navigating `#/` → `#/projects` → `#/field-notes/old-is-gold`
in one session produces three distinct route events in the dashboard, with no cookie set
(verifiable in devtools → Application → Cookies).

---

## F3 — Removing the unpkg dependency — ✅ MOSTLY SOLVED 2026-09-02

**What was done.** React and ReactDOM 18.3.1 were downloaded into a new committed `vendor/`
directory and the two `<script>` tags repointed at them. The CSP went from
`script-src 'self' https://unpkg.com` to `script-src 'self'`, so the site now has **no
third-party script origin at all** — SRI became unnecessary rather than being added.
Provenance was checked before landing: both files are byte-identical (sha384) between unpkg
and jsdelivr, and the version string reads `18.3.1`. `vendor/README.md` holds the upgrade
procedure and the verification command.

`build/` was deliberately *not* used as the destination — it is esbuild's output directory,
and mixing vendored input into it invites a future `--bundle` or clean step to eat it.

**What is still open.** Google Fonts. `fonts.googleapis.com` (stylesheet) and
`fonts.gstatic.com` (font files) remain the last third-party origins, and the CSP still
allows both. Self-hosting JetBrains Mono — woff2 files into `vendor/fonts/` plus an
`@font-face` block — would close it and let `style-src`/`font-src` drop to `'self'`.

**You have a result when:** devtools → Network, filtered to third-party origins, is empty on
a full page load, and the site renders identically offline after a cache clear. As of
2026-09-02 that filter shows Google Fonts only.

---

## F4 — Rich text in Field Notes without adding a bundler

**Why the current approach falls short.** `FIELD_NOTES[].body` is an array of plain
strings, each rendered as one `<p>`. There is no emphasis, no links, no images, no
headings — the published "Old is Gold" post contains literal `* *` characters where
emphasis was intended. Meanwhile Ali has a pending task to add period-tech images
(Winamp, Zune, ZSNES…) inline, which the current shape simply cannot express. Adding a
markdown library is blocked by the no-bundler rule: there are no imports, only globals.

**The asset.** The content shape is already an array, so it can absorb richer element
types without changing any consumer but the renderer.

**First three steps.**
1. Choose between two designs and check with Ali: (a) a ~30-line inline renderer for a
   deliberately tiny subset — `*emphasis*`, links, and a figure element — or (b) extend
   `body` to accept objects (`{ type: 'figure', src, caption }`) alongside strings.
   Option (b) needs no parser and directly unblocks the images task.
2. Implement in `cd-fieldnotes.jsx` only. Keep `excerpt()` working — it reads
   `body[0]` and must still receive a string, or the list blurb breaks.
3. Convert "Old is Gold" to the new shape, removing the literal `* *`.

**You have a result when:** the post renders at least one emphasized phrase and one
captioned image, the list blurb at `#/field-notes` is unchanged, and no new runtime
dependency appears in `index.html`.

**Fenced off:** pulling in `marked`/`markdown-it` via a CDN script tag. It re-introduces
the exact third-party-script risk F3 exists to remove, for a nine-paragraph blog.

---

## F5 — A live Pocket Professor demo from a static host

**Why the current approach falls short.** PP is the flagship, but the site can only
describe it — the demo button was removed as dead, and the FIG.01 screenshot is still
pending. A hiring portfolio's strongest asset is something a reader can *use*. But PP v2
is a Node/Fastify/Postgres app in a different repo; a static site cannot host it, and
calling an LLM API from client-side JavaScript would expose a key.

**The asset.** PP's engine is deterministic and multi-agent with strict schema contracts
(per `TRAJ_ROLES`), and v1 already ran on Railway — so a hosted surface is proven
possible.

**First three steps.** ⛔ **Blocked** — PP content is PARKED until Ali runs the v2 pilot
(see `pakfro-site-change-control`). Do not start here. When it unblocks:
1. Capture the real FIG.01 screenshot and reconcile PP's four descriptions (home, card,
   detail, trajectory) — see `console-dossier-content-reference`.
2. Ship a *recorded* artifact before a live one: a scripted walkthrough or a canned
   sample plan rendered from static JSON. Zero infrastructure, zero key exposure, most of
   the persuasive value.
3. Only then evaluate a hosted read-only endpoint (Railway) with strict rate limits.

**You have a result when:** a reader who has never heard of PP can see what it produces
without leaving the site. Ordered so step 2 achieves that alone.

---

## F6 — When a Vite migration is actually justified

**Why the current approach falls short — and mostly doesn't.** `PRODUCTION-BUILD.md`
frames Vite ("Option C") as the eventual modernization. It is deliberately *not*
adopted: the script-tag + esbuild setup is what makes the site directly Pages-servable
with committed output. The honest position is that the current setup is not yet the
bottleneck.

**Falsifiable trigger conditions.** Reopen this only when at least one is true:
- The global namespace actually collides, or the wiring scripts stop being sufficient to
  catch load-order bugs.
- The site needs a real dependency (a date library, a markdown parser, a chart library)
  that cannot responsibly come from a CDN — F4 is the likeliest trigger.
- Prerendering (F1, step 3) turns out to need a real bundler to be maintainable.

**You have a result when:** you can name which trigger fired, with the specific change it
blocked. Absent that, the correct action is to do nothing — a migration here costs a
rewrite of every `window.*` assignment into imports/exports across ten files, for a site
that currently ships fine.

---

## Provenance and maintenance

Authored 2026-07-06 against `dev` @ `156e4d9`. Verified for this file: `index.html` on
`dev` contains only `charset` and `viewport` meta tags (zero description/OG/Twitter/JSON-LD),
while `main`'s splash carries CSP + referrer + permissions + robots + description; React
18.3.1 was vendored into `vendor/` on 2026-09-02 (was unpkg, no `integrity`); `sitemap.xml` lists
the root URL only; `FIELD_NOTES` bodies are plain strings. The linktree/analytics idea is
Ali's own, from `.ai/backlog.md`.

```bash
grep -oE "<meta[^>]*>" index.html && git show main:index.html | grep -oE "<meta[^>]*>"
```

```bash
grep -n "integrity\|unpkg\|fonts.g" index.html
```

```bash
sed -n '1,40p' .ai/current-task.md   # live priorities always outrank this file
```
