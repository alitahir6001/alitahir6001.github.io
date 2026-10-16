# Security

pakfro.dev is a **fully static site** — no backend, no database, no API, no build step on the
server. GitHub Pages serves the files in this repo exactly as committed. There is no user input,
no authentication, and no data collected from visitors.

## Reporting

Found something? Email **ali@pakfro.dev**. There is no bounty; I'll just fix it.

## What's actually enforced

Delivered as `<meta>` tags in `index.html` (see the constraint below):

- **CSP** — `default-src 'self'`, `script-src 'self'`, `object-src 'none'`, `base-uri 'self'`,
  `connect-src 'self'`, `upgrade-insecure-requests`.
- **`Referrer-Policy: strict-origin-when-cross-origin`**.
- **`Permissions-Policy`** — geolocation, microphone, and camera denied.
- **`rel="noopener noreferrer"`** on every external link that opens in a new tab (8 of 8).
- **No third-party scripts.** React 18.3.1 is vendored in `vendor/` and served from this origin,
  so `script-src` is `'self'` with no CDN exception. Verified byte-identical across two
  independent registries before it was committed.
- **No analytics, no trackers, no cookies.** `localStorage` is used for exactly one thing: a
  `cdTweaks` flag that reveals a local-only dev panel.

## Known limits

- **CSP is delivered by `<meta>`, not an HTTP header.** GitHub Pages does not allow custom
  response headers, so `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, and
  `X-Frame-Options` cannot be set on this host at all, and `frame-ancestors` is ignored inside a
  `<meta>` CSP. Moving to a host that allows headers is the only real fix; it is not currently
  worth it for a static portfolio.
- **`style-src` keeps `'unsafe-inline'`** because the theme injects a `<style>` block at runtime.
  Removing it means moving that CSS into a served stylesheet.
- **Google Fonts is the one remaining third-party origin** (`fonts.googleapis.com` for the
  stylesheet, `fonts.gstatic.com` for the font files). Self-hosting the woff2 files would let
  `style-src` and `font-src` drop to `'self'`.
