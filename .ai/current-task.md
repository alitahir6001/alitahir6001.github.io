# Current Task

## What
Overhaul the personal site (pakfro.dev) after its design redesign: replace all
placeholder/AI-fabricated content with real content, page by page; build the remaining
features (in-app blog reader); remove holdover files; and do a security audit before
re-launching. Full detailed roadmap lives in `TODO.md` at repo root.

## Why
The redesign shipped with AI-generated placeholder and **fabricated** content (fake
metrics, wrong tech stack, a current-role that was actually a personal project). The site
is a public-facing **hiring portfolio**, so accuracy and credibility are non-negotiable.
The live site is currently a holding splash while this work happens on `dev`.

## Order of operations
1. ✅ Build tooling (esbuild) + branch split (main=splash live, dev=WIP). — agent
2. ✅ Page-by-page de-bogus pass (home, detail, projects, trajectory, about, field-notes). — agent
3. ✅ Pocket Professor: real stack + complete version history (`docs/`). — agent
4. ✅ Trajectory rebuilt from résumé (added IDEA job; PP = personal project). — agent
5. ✅ Résumé PDF wired in; chrome fixes (live clock, footer, gated Tweaks panel). — agent
6. ⏳ **Blog: build in-app reader**; load real drafts. First post "Old is Gold". — agent (post text: user)
7. ☐ Holdover cleanup (`__bio.html`, `theme-test.html`, `sitemap.xml`, `form.html`, `demo.html`). — agent
8. ☐ Security audit (`/security-review`, CSP on React index, unpkg CDN review). — agent
9. ☐ Content gaps owned by user: PP product screenshot, PP V1 date (2024 vs 2025).
10. ☐ Launch: `git checkout main && git reset --hard dev && git push --force origin main`.

## Out of scope (for now)
- Pocket Professor backend/app itself (separate repos; not this repo).
- A live PP demo on the site (deferred until v2 launches).
- Full a11y + mobile audit (launch-readiness, later).
- The non-tech personal Substack (explicitly excluded from the blog).
