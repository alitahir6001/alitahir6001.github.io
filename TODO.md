# Site TODO

Branch model: `main` = under-construction splash (live on pakfro.dev).
`dev` = full work-in-progress site (never deployed). All editing happens on `dev`.
Run `npm run build` before committing so `build/*.js` matches the `.jsx` sources.

## ✅ Done

- Build tooling: `npm run build` / `npm run watch` (esbuild → `build/*.js`).
- Branch split: `main` reduced to splash; `dev` holds the site.
- Under-construction splash live at root (noindex, security headers, OXBLOOD theme).
- Home page: name = `ALI TAHIR`; new PP blurb; PRE-PILOT honesty; telemetry removed;
  dead demo button removed; role → mid-level.
- **PP stack resolved** (see [[pocket-professor-stack]]): v1 Python·FastAPI·Gemini (2025,
  retired); v2 Node·Fastify·TS + Postgres, React·Vite·Tailwind, deterministic multi-agent
  engine. Substack: excluded.
- **De-bogus pass complete (home, detail, projects, trajectory, about, field-notes):**
  - Detail: telemetry → real status; overview/how-it-works/build-log rewritten from repo;
    specs corrected; demo button removed; product-shot caption honest.
  - Projects: CH-01 real; removed fabricated "[Classified] eval harness" channel; renumbered.
  - Trajectory: PP role rewritten (adaptation engine); broken résumé link removed.
  - About: FIG.B caption clarified as v1 Python.
  - Home/Field-notes: removed fake eval-harness channel; de-jargoned blog copy.

- **PP complete version history** documented: `docs/pocket-professor-version-history.md`
  (v0.1 2025-03 → v0.5 → V2 pivot 2026-02 → pilot). Detail build log + model layer now reflect it.
- **Trajectory rebuilt from résumé** (`job-apply/base/2026_resume.html`): added current job
  **Systems Developer II · IDEA**; PP reframed as flagship personal project; all roles expanded
  with real bullets (incl. HerbNCurry); skills softened (Python/FastAPI/Flask = "earlier work");
  added AI-assisted-dev + LLM skill groups; AWS cred fixed → AI Practitioner.
- Removed fabricated **Home lab** project card (Ali has none); kept Hardware/IoT + Enterprise SSO.
- Resolved verify items: Enterprise SSO figures confirmed; Hardware/IoT legit.

## Still needed (content)

- [ ] **Résumé PDF** — generate from `2026_resume.html`, host on site, restore the résumé button
      on Trajectory (+ Hire). (Claude can do this.)
- [ ] **PP product screenshot** — Ali to get app pilot-ready and capture real UI (FIG.01).
- [ ] **Blog reader + drafts** — build in-app reader; first real draft ready: **"Old is Gold"**
      (nostalgia for old software — Darkroom editor, Winamp 2.95, late-90s/early-00s emulators/ROMs).
      Substack excluded. FIELD_NOTES still has 2 placeholder titles to replace.
- [ ] **PP V1 date** — résumé says 2024; first commit 2025-03. Pick which is public.
- [ ] **Hire** — content honest; only dead footer links remain (see Chrome).

## Blog / Field Notes (chosen: in-app reader)

- [ ] Build post-detail route + a way to author post bodies (JSX/HTML or Markdown).
- [ ] Load real drafts; set home "Field Notes" first/last dates accordingly.

## Chrome / theme (affects every page) — ✅ DONE

- [x] Frozen fake clock → live UTC clock (`StatusClock` in cd-theme).
- [x] Footer github/linkedin fixed (real URLs); dead `/rss` removed.
- [x] Tweaks panel gated (`SHOW_TWEAKS` in cd-app) — shows on localhost/file:// or via
      `localStorage.cdTweaks='1'`; hidden on the live site.
- [x] Résumé PDF wired up: `docs/ali-tahir-resume.pdf`; download button restored on
      Trajectory + Hire.

## Holdover cleanup (on `dev`) — ✅ DONE

- [x] Removed `__bio.html`, `theme-test.html`, `demo.html`+`js/demo.js`,
      `form.html`+`js/form.js`, `images/kitty1.jpg` (2.3 MB orphan), `INTEGRATION.md`.
- [x] Rewrote `sitemap.xml` → root only (hash-routed SPA).
- [x] Fixed stale `__bio.html` mention in `cd-about.jsx` comment.
- [ ] `PRODUCTION-BUILD.md` kept (Vite-migration notes); trim/refresh later — low priority.
- [ ] `README.md` has a stale "site temporarily disabled" note — refresh at launch.
- [ ] `SECURITY.md` references now-deleted demo/form files — update during the security audit.

## Security audit

- [ ] Add CSP / referrer / permissions headers to the React `index.html` (only the
      splash + old loose files have them).
- [ ] Review the unpkg React CDN dependency (add SRI or self-host).
- [ ] Full `/security-review` pass over the diff before launch.
- [ ] Backend hardening for future DB/AI (parameterized SQL, server-side validation,
      prompt-injection guardrails) — when the demo/backend returns.

## Launch readiness (later)

- [ ] Full accessibility pass (keyboard/focus order + contrast).
- [ ] Mobile viewport smoke check on all pages.
- [ ] Pocket Professor demo strategy (Railway backend / curriculum generator).
- [ ] Content polish pass after placeholders are gone.
- [ ] Launch: `git checkout main && git reset --hard dev && git push --force origin main`.
