---
name: console-dossier-content-reference
description: How to write and source content for the pakfro.dev Console Dossier site — where each page's text actually lives, the exact data-array shapes (PROJECT_CHANNELS, TRAJ_ROLES, TRAJ_SKILLS, FIELD_NOTES), how to add a blog post or project card, the design vocabulary, and how to source a claim so it is defensible. Use when editing page copy, adding a project or field note, updating the résumé/trajectory, or checking whether a claim is real.
---

# Console Dossier — content reference

The domain here is not React. It is **an honest hiring portfolio dressed as a retro
console dossier**. This skill covers where content lives, its exact shapes, the house
voice, and the sourcing bar. Everything here assumes you have read
`pakfro-site-change-control` — the honesty rule and the Pocket Professor park are gates,
not suggestions.

**Not this skill?** Build commands and debugging → `pakfro-site-runbook`. Load order,
globals, routing internals → `pakfro-site-architecture-contract`.

## Vocabulary (defined once)

| Term | Meaning here |
|---|---|
| **Console Dossier** | The site's design language: a dimly-lit lounge readout / declassified file. Monospace (JetBrains Mono), uppercase micro-labels, section bands (`§ 01`), station names in the status bar, `▶` and `→` glyphs. |
| **OXBLOOD** | The single locked palette, defined in `cd-theme.jsx` as `OXBLOOD.vars` (CSS custom properties like `--paper`, `--accent-ink`, `--rule`). There is no theme switcher. |
| **Channel** | A project card. Numbered `CH-01`…`CH-04` on `#/projects`. |
| **Field Note** | A blog post. `#/field-notes`, with an in-app reader at `#/field-notes/<slug>`. |
| **Station** | The label in the status bar identifying the current page (`GROUND STATION`, `SERVICE RECORD`, `TRANSMISSION LOG`, `AREA OF INTEREST`). |
| **AOI** | "Area of Interest" — the hiring page (`#/hire`). |
| **Tweaks panel** | A local-only design tool (spacing / glow / rule weight). Hidden on the live site. Not content. |

## Where every page's content lives

There is no CMS, no data files, no markdown pipeline. **Content is hardcoded inside the
component that renders it.**

| Route | File | Content shape |
|---|---|---|
| `#/` | `cd-home.jsx` | Inline JSX prose. Hero statement, PP flagship blurb, section cards. |
| `#/projects` | `cd-projects.jsx` | `PROJECT_CHANNELS` array |
| `#/field-notes`, `#/field-notes/<slug>` | `cd-fieldnotes.jsx` | `FIELD_NOTES` array |
| `#/trajectory` | `cd-trajectory.jsx` | `TRAJ_ROLES` + `TRAJ_SKILLS` arrays |
| `#/pocket-professor` | `cd-detail.jsx` | Inline JSX. **PARKED — see change control.** |
| `#/about` | `cd-about.jsx` | Inline JSX + two `images/` figures |
| `#/hire` | `cd-hire.jsx` | Inline JSX prose |
| Nav labels | `cd-theme.jsx` → `CD_NAV` | `{ key, label, href }` |

## Data-array shapes (verified 2026-07-06)

### `PROJECT_CHANNELS` — `cd-projects.jsx`

```js
{
  id: 'CH-02', of: '· tool · job hunt', title: 'job-apply',
  body: 'One or two sentences. Concrete about what it does.',
  stack: ['node · js · sqlite', 'playwright', 'llm api'],  // rendered ' · '-joined
  badge: 'ACTIVE',            // ACTIVE | SHIPPED | PRE-PILOT | ARCHIVE
  badgeCls: 'warn',           // optional: '' | 'warn' (accent) | 'live' (filled)
  href: '#/pocket-professor', // optional — renders "▶ Open file →"
  art: null,                  // null = "—" placeholder; a URL string renders an <img>
}
```

Rendered as a 2×2 card grid (`.cd-ch-grid`), collapsing to one column on mobile. Adding
a fifth channel makes it 2+2+1 — check it looks right. The header count
(`{PROJECT_CHANNELS.length} routed`) updates itself.

### `TRAJ_ROLES` — `cd-trajectory.jsx`

```js
{
  when: '2025 — NOW', co: 'IDEA · Richmond, VA', meta: 'Systems Developer II',
  title: 'Systems Developer II',
  sum: 'One-paragraph summary of the role and its context.',
  bullets: [
    ['Plain text, ', 'emphasized fragment', ' more plain text.'],
  ],
}
```

**Bullets are alternating-emphasis arrays**, not strings. The `span()` helper wraps
every odd-indexed element in `<span className="m">` (emphasis). A one-element array is
fine — it renders as plain text. Order is most-recent-first; there is no sort.

### `TRAJ_SKILLS` — `cd-trajectory.jsx`

```js
{ k: 'Cloud & DevOps', v: 'AWS (ECS, EC2, …) · Docker · Terraform · GitHub Actions · Git' }
```

Convention: ` · ` separators, and hedge honestly in-line — the real entries say
`Python, FastAPI & Flask (earlier work)` and `C#, Django (exposure)`.

### `FIELD_NOTES` — `cd-fieldnotes.jsx`

```js
{
  slug: 'old-is-gold',          // required for live posts; the URL is #/field-notes/<slug>
  title: 'Old is Gold',
  status: 'live',               // 'live' → reader + PUBLISHED badge; 'draft' → listed only
  topic: 'tech · nostalgia',
  date: '2026.06',
  body: [ 'paragraph one…', 'paragraph two…' ],   // required when live
}
```

**To add a post:** put the object at the **top** of the array (newest first). The list
blurb is auto-derived from the first ~2 sentences of `body[0]` — do not write a `dek`
for live posts (`dek` is only a fallback for bodyless drafts). Each string is one
`<p>`. There is **no markdown rendering** — the live post contains literal `* *`
characters because emphasis isn't parsed. Adding markdown support is an open item.

## The sourcing bar — how a claim becomes publishable

The site's founding failure was fabricated content. Before any factual claim ships:

| Claim type | Acceptable source |
|---|---|
| Job title, dates, employer, role bullets | `docs/ali-tahir-resume.pdf` (and the `2026_resume.html` it was generated from). If résumé and repo disagree, **ask Ali which is public** — this already happened with PP's v1 date (résumé says 2024, first commit is 2025-03). |
| A project's stack, behavior, or status | The actual repo, read via `gh`. Pocket Professor lives in **other repos** (`pock_prof_playground` = current; also `pocket_professor`, `pocket_professor_POC`). Never infer a stack from the site's own older copy — that is how the Python/FastAPI error survived. |
| Pocket Professor version history | `docs/pocket-professor-version-history.md` (v0.1 2025-03 → v0.5 → V2 pivot 2026-02 → pilot). |
| Metrics and numbers (`90%`, `80,000+`, `560+ branches`, `14 APIs`) | Ali confirmed, or the résumé. Never estimate, never round up, never invent. |
| **Current PP behavior** | ⛔ Nothing is acceptable yet — the card + detail are PARKED until Ali runs the v2 pilot. Don't write it from assumptions. |

If you cannot source it: leave it out, or ask. "Plausible" is the failure mode, not the
goal.

## House voice

- First person, plain, slightly wry. Real sentences, not marketing.
- **Honest hedging is a feature.** The site says `PRE-PILOT`, "where I'm leveling up",
  "(earlier work)", "(exposure)". Keep those hedges — do not upgrade them.
- Console vocabulary in chrome and labels, plain English in body copy. Don't jargon-up
  the prose; a previous pass explicitly *de*-jargoned the blog copy.
- No compensation talk on `#/hire` (deliberate).
- Field Notes posts keep Ali's voice verbatim — fix typos only. "Old is Gold" is
  colloquial on purpose.
- Footer "ACK" stamps (`DIR · 05`, `LOG · 02`) are decorative and intentional; leave them.

## Consistency traps

- **Pocket Professor is described in four places** — the home hero (`cd-home.jsx`), the
  CH-01 card (`cd-projects.jsx`), the detail page (`cd-detail.jsx`), and its
  `TRAJ_ROLES` entry. They currently use different framings ("self-taught learners in
  high-attrition industries" vs "career-changers"). When the park lifts, reconcile all
  four in one pass.
- The résumé PDF is linked from **both** Trajectory and Hire — regenerating it means
  checking both.
- `images/` holds only two files, both used on `#/about`. A project card's `art` field
  needs a real screenshot added there first; PP's FIG.01 screenshot is still pending
  the pilot.

## Provenance and maintenance

Authored 2026-07-06 against `dev` @ `156e4d9`, with the uncommitted
`cd-projects.jsx` / `cd-theme.jsx` / `cd-trajectory.jsx` working-tree changes included
(Ali: finished work, not yet committed). Re-verify shapes:

```bash
grep -n "^const PROJECT_CHANNELS\|^const TRAJ_ROLES\|^const TRAJ_SKILLS\|^const FIELD_NOTES\|^const CD_NAV" cd-*.jsx
```

```bash
gh repo list alitahir6001 --limit 50   # confirm the real project repos before citing a stack
```
