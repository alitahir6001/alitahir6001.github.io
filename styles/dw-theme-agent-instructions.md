# DW Dark Terminal Theme — Agent Instructions

You are building an HTML page using the DW Dark Terminal design system. A complete template with all components is available in `dw-theme-template.html`. Copy the full `<style>` block and the JS block at the bottom of the template into every new page you create. Then use the component patterns below.

---

## Core Rules

- **Always** include the full `<style>` block from the template — do not strip or rewrite it.
- **Always** include the three JS functions at the bottom: `toggleSection`, `copyCode`, and the IntersectionObserver for active nav links.
- **Always** load the Google Fonts link in `<head>`: IBM Plex Mono (400, 500, 600) and IBM Plex Sans (300, 400, 500, 600, italic 400).
- **Never** use `localStorage` or `sessionStorage`.
- **Never** use inline styles for colors — use CSS variables (`var(--accent)`, etc.) or the provided utility classes.
- Keep backgrounds transparent where possible. The page background is `var(--bg)` (#080c14).

---

## Design Tokens (CSS Variables)

| Variable | Value | Use for |
|---|---|---|
| `--bg` | #080c14 | Page background |
| `--bg-panel` | #0d1424 | Sidebar background |
| `--bg-card` | #111827 | Cards, elevated surfaces |
| `--code-bg` | #060a11 | Code blocks, dir trees |
| `--border` | #1e2d45 | Default borders |
| `--border-hi` | #2a3f60 | Hover borders |
| `--text` | #c8d6e8 | Body text |
| `--text-dim` | #627ea8 | Secondary text, labels |
| `--text-head` | #e8f0fb | Headings, strong |
| `--accent` | #00c9a7 | Primary accent (teal) |
| `--accent-dim` | #007a65 | Muted accent |
| `--amber` | #f0b429 | Warnings, strings |
| `--red` | #f56565 | Errors, danger |
| `--green` | #48bb78 | Success, verify |
| `--blue` | #63b3ed 入 | Info, paths, nav |
| `--purple` | #b794f4 | TBD / pending |
| `--mono` | IBM Plex Mono | All code, labels, headings |
| `--sans` | IBM Plex Sans | Body text, prose |

---

## Layout Structure

Every page uses a two-column layout: fixed sidebar (`<nav>`) + scrollable content (`<main>`).

```html
<body>
  <nav>
    <!-- sidebar content -->
  </nav>
  <main>
    <!-- page content -->
  </main>
</body>
```

For a **no-sidebar layout** (e.g., a personal site page), remove `<nav>` entirely and set `main { margin-left: 0; }`.

---

## Component Patterns

### Page Header
Every page starts with this block inside `<main>`:
```html
<div class="page-header">
  <div class="tag">Category / Type</div>
  <h1>Page Title</h1>
  <p class="desc">One or two sentence description.</p>
  <div class="meta-strip">
    <div class="meta-item"><span class="dot"></span>Meta item</div>
    <div class="meta-item"><span class="dot"></span>Meta item</div>
  </div>
</div>
```

---

### Sidebar Nav
```html
<nav>
  <div class="nav-logo">
    <div class="product">// Team Name</div>
    <div class="title">Document Title</div>
    <div class="subtitle">v1.0 · Date</div>
  </div>

  <div class="nav-section-label">Group Name</div>
  <a href="#id" class="active">
    <span class="icon">◈</span> Link Label
    <span class="nav-badge green">Badge</span>
  </a>
  <a href="#id2"><span class="icon">○</span> Link Label</a>

  <div class="nav-footer">
    Key: <span>Value</span>
  </div>
</nav>
```
Nav badge variants: `green` | `blue` | `amber`

---

### Collapsible Section
```html
<div class="section" id="unique-id">
  <div class="section-header" onclick="toggleSection('body-unique-id', this)">
    <span class="section-num">01</span>
    <h2>Section Title</h2>
    <span class="section-badge primary">Label</span>
    <span class="chevron open">▶</span>
  </div>
  <div class="section-divider"></div>
  <div class="section-body" id="body-unique-id">
    <!-- content -->
  </div>
</div>
```
Badge variants: `primary` (teal) | `blue` | `amber` | `purple` | `red`

Sections start **open** (`.chevron.open` + no `.collapsed` on body). To start collapsed, remove `.open` from chevron and add `.collapsed` to body.

---

### Callouts
```html
<!-- tip = teal, info = blue, warn = amber, danger = red, tbd = purple -->
<div class="callout tip">
  <span class="icon">✦</span>
  <div><strong>Title:</strong> Body text.</div>
</div>
```

Recommended icons by type:
- tip → `✦` or `★`
- info → `ℹ` (HTML: `&#9432;`)
- warn → `⚠` (HTML: `&#9888;`)
- danger → `⚠` (HTML: `&#9888;`)
- tbd → `☐` (HTML: `&#9744;`)

---

### Verify Block (end of step)
```html
<div class="verify-block">
  <span class="icon">✓</span>
  <div><strong>Step complete when:</strong> Description of the done state.</div>
</div>
```

---

### Numbered Steps
```html
<ol class="steps">
  <li>
    <span class="step-circle">1</span>
    <div class="step-content">
      <strong>Step title</strong>
      <p>Step description. Can include nested callouts, code blocks, or path blocks.</p>
    </div>
  </li>
  <!-- repeat for each step -->
</ol>
```

---

### Code Block (with copy button)
```html
<div class="code-block">
  <div class="code-block-header">label · context<button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
  <pre><span class="cm"># Comment</span>
<span class="kw">command</span> <span class="arg">--flag</span> <span class="str">value</span></pre>
</div>
```
Syntax spans: `.kw` (teal) | `.str` (amber) | `.arg` (blue) | `.cm` (dim, italic)

---

### Inline Code
```html
<code>default teal</code>
<code class="path">/path/to/file</code>   <!-- blue -->
<code class="ui">Button Label</code>       <!-- amber -->
```

---

### Path Block (file/directory paths)
```html
<div class="path-block">
  <span class="highlight">C:\</span>Folder<span class="highlight">\</span>subfolder
  <span class="comment">  ← Description</span>
</div>
```

---

### Directory Tree
Use box-drawing characters. Wrap in `<div class="dir-tree">` with `white-space: pre`.
```html
<div class="dir-tree"><span class="dir">/root/</span>
├── <span class="dir">folder/</span>        <span class="note"># comment</span>
│   └── <span class="file">file.txt</span>
└── <span class="file">.env</span>           <span class="note"># not in git</span></div>
```

---

### Tables

**Standard data table:**
```html
<table class="data-table">
  <thead><tr><th>Col 1</th><th>Col 2</th></tr></thead>
  <tbody>
    <tr><td class="key">Label</td><td>Value</td></tr>
  </tbody>
</table>
```

**Command reference table:**
```html
<table class="cmd-table">
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>command here</td><td>What it does</td></tr>
  </tbody>
</table>
```

**Source → Target mapping table:**
```html
<table class="map-table">
  <thead><tr><th>Source</th><th>Target</th><th>Notes</th></tr></thead>
  <tbody>
    <tr>
      <td class="src">source_field</td>
      <td class="tgt">target_field</td>
      <td class="action">Note</td>
    </tr>
    <tr>
      <td class="src">unused_field</td>
      <td class="tgt unmapped">Unmapped</td>
      <td class="action">Not used</td>
    </tr>
  </tbody>
</table>
```

---

### Cards
```html
<!-- Single card -->
<div class="card">
  <div class="card-title">Card Title</div>
  <p>Card content.</p>
</div>

<!-- Two-column -->
<div class="card-row">
  <div class="card">Left card</div>
  <div class="card">Right card</div>
</div>

<!-- Three-column -->
<div class="card-row-3">
  <div class="card">One</div>
  <div class="card">Two</div>
  <div class="card">Three</div>
</div>
```

---

### Service / Feature Cards (3-up)
```html
<div class="service-grid">
  <div class="service-card">
    <div class="svc-name">service-name</div>
    <div class="svc-desc">Short description of what this service does.</div>
    <span class="svc-badge green">Tag</span>
  </div>
</div>
```
Badge variants: `green` | `blue` | `amber` | `purple`

---

### Stat Cards
```html
<div class="stat-grid">
  <div class="stat-card">
    <span class="stat-label">Label</span>
    <div class="stat-value">42</div>
    <div class="stat-sub">units</div>
  </div>
</div>
```
The grid is 4-column by default; adjust with CSS grid on the parent if needed.

---

### Process Flow Strip
```html
<div class="process-strip">
  <a class="process-step" href="#step1">
    <span class="ps-num">01</span>
    <span class="ps-label">Step One</span>
  </a>
  <!-- repeat for each step -->
</div>
```

---

### Decision Tree
```html
<div class="decision-tree">
  <div><span class="dt-q">?</span>  Is X happening?</div>
  <div>&nbsp;&nbsp;<span class="dt-no">NO  →</span> <span class="dt-action">Action to take</span></div>
  <div>&nbsp;&nbsp;<span class="dt-yes">YES →</span> Continue ↓</div>
  <div>&nbsp;</div>
  <div><span class="dt-q">?</span>  Next question?</div>
  <div>&nbsp;&nbsp;<span class="dt-note">→ See reference section</span></div>
</div>
```

---

### Transcript Entries
For cleaned meeting transcripts. Assign each speaker a class (spk-a, spk-b, spk-c) and a consistent color:
```html
<div class="entry">
  <div class="entry-meta">
    <span class="speaker-name spk-a">Speaker Name</span>
    <div class="timestamp">0:04</div>
  </div>
  <div class="entry-body spk-a">What they said.</div>
</div>

<!-- System/recording note -->
<div class="entry system-entry">
  <div class="entry-meta"><span class="speaker-name system">System</span></div>
  <div class="entry-body system">Recording started.</div>
</div>
```
Speaker classes: `spk-a` (teal) | `spk-b` (blue) | `spk-c` (amber) | `system` (dim)

---

### Section Rule (horizontal divider)
```html
<hr class="section-rule"/>
```
Use to visually separate major topic areas within a page.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| > 900px | Full layout with sidebar at 264px |
| 640–900px | Sidebar narrows to 220px, multi-column grids collapse |
| < 640px | Sidebar hidden, single column, process strip hidden |

---

## Things to Avoid

- Do not use purple gradients on white backgrounds — this is a dark theme and should stay dark.
- Do not use Inter, Roboto, or Arial — use IBM Plex Mono and IBM Plex Sans only.
- Do not create bare `<ul>` lists — use `.steps` for procedures or write in prose.
- Do not use Unicode bullet characters (•) — use CSS list styling if needed.
- Do not use `<form>` tags — use event handlers (`onclick`, `oninput`) instead.
- Do not add more than one active nav badge per link.
- Do not use `localStorage` — store any state in JS variables or React state.
