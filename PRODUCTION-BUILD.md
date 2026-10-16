# Build notes

## How the build works today

Option B (esbuild) was chosen and shipped in June 2026. The in-browser Babel setup this document
originally described is gone — nothing is transpiled at runtime any more.

Each source file is compiled **per-file, not bundled**, keeping the global-scope architecture:

```
cd-*.jsx  →  build/cd-*.js        (esbuild, one output per input)
```

```bash
npm run build     # one-shot
npm run watch     # rebuild on save
```

Three things make this work, and all three are load-bearing:

- **`build/*.js` is committed.** GitHub Pages has no build step; it serves what is in the repo.
  Edit a `.jsx`, rebuild, commit both — or the live site runs stale JS.
- **No `--bundle` flag.** The files share state through `window.*` globals, not imports. Bundling
  them would break that.
- **Script order in `index.html` is load-bearing.** `tweaks-panel` + `cd-theme` first, `cd-app`
  last. See the architecture-contract skill.

React 18.3.1 is vendored in `vendor/` and served from this origin — not a CDN.

For setup, commands, and debugging, use the `pakfro-site-runbook` skill; for the invariants, the
`pakfro-site-architecture-contract` skill. This file exists for the one decision they don't cover:
whether to move to Vite.

---

## Option C — Migrate to Vite (not done, deliberate)

If the script-tag setup is outgrown and hot reload, bundling, tree-shaking, and hashed filenames
become worth it, the move is **Vite**. It requires a real refactor: replacing `window.*` global
sharing with actual `import` / `export` statements between the files.

Rough shape:

```bash
npm create vite@latest console-dossier -- --template react
# move the cd-*.jsx files in, convert window.X = … assignments to
# `export function X…`, and add matching imports in each consumer file,
# then:
npm run build      # outputs an optimized dist/ folder
```

**When it is actually justified:** when the developer-experience upgrades are the point — not to
ship, and not for performance. A ten-file static site loads fine as-is. Reach for this if the app
grows enough that hand-managed load order becomes a real source of bugs.
