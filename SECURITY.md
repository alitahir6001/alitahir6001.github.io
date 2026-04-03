# Security Hardening Notes

## Implemented

- Content Security Policy (CSP) added to HTML pages via `<meta http-equiv="Content-Security-Policy">`.
- Referrer policy set to `strict-origin-when-cross-origin`.
- Permissions policy added to disable geolocation/camera/microphone by default.
- `rel="noopener noreferrer"` preserved on external links opened in new tabs.
- Subresource Integrity (`integrity`) is configured for third-party CDN scripts in `demo.html`.
- Inline scripts were moved to dedicated files (`/js/demo.js`, `/js/form.js`) to support stricter CSP.
- Client-side input sanitation and length checks are applied before API submission in demo/feedback flows.

## Injection protection baseline (current + required backend practices)

### Input injection (XSS / command-like payloads)
- Treat all user input as untrusted.
- Sanitize and bound input length client-side (implemented) and validate again server-side (required).
- Render responses via safe text APIs (`textContent`) rather than HTML injection.

### SQL injection (for future DB integration)
- Never build SQL with string concatenation.
- Use parameterized/prepared statements in every query path.
- Enforce allowlists for sortable/filterable fields and strict type coercion.

### Prompt injection (for AI-backed features)
- Never pass raw user input directly into privileged system instructions.
- Keep system/developer prompts server-side and immutable.
- Constrain model tools/actions with explicit allowlists and output validation.
- Treat model output as untrusted data; sanitize before render or downstream execution.

## Remaining hardening opportunities

1. **Move security controls from meta tags to HTTP headers** (preferred for stronger enforcement):
   - `Content-Security-Policy`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY` (or rely on `frame-ancestors` in CSP)
   - `Strict-Transport-Security`
2. **Maintain strict CSP compatibility** by avoiding new inline event handlers/scripts/styles unless paired with nonces/hashes.
3. **Form abuse protection** for external feedback form providers (rate limits / CAPTCHA where applicable).
4. **Dependency update cadence** for CDN assets and periodic SRI hash verification.
