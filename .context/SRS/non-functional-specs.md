# SRS — Non-Functional Specifications

> **Document:** Software Requirements Specification (SRS) — Non-Functional Specifications  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Target Environment:** GitHub Pages Edge CDN  
> **Last Updated:** 2026-10-30  

---

## 1. Performance

| Metric | Target | Rationale & Measurement |
| ------ | ------ | ----------------------- |
| **Largest Contentful Paint (LCP)** | $< 1.2\text{s}$ (Good) | Measures when the hero section and avatar are fully rendered. Tested on standard 4G simulation. |
| **First Contentful Paint (FCP)** | $< 800\text{ms}$ | Measures when the first DOM elements (background/header) appear. |
| **Time to Interactive (TTI)** | $< 1.5\text{s}$ | The point at which theme and language toggles are fully responsive to user input. |
| **Cumulative Layout Shift (CLS)** | $= 0.00$ | Zero visual jumps during image loading, avatar fallback, or language switching. |
| **Total Blocking Time (TBT)** | $< 50\text{ms}$ | Minimal client-side JavaScript execution ensuring uninterrupted main thread. |
| **Total Transfer Size** | $< 250\text{ KB}$ (gzip) | Ultra-lightweight payload enabling near-instant loading globally. |
| **Server Response Time (TTFB)** | $< 150\text{ms}$ | Powered by GitHub Pages' global Fastly CDN edge caching. |

---

## 2. Security

- **Hosting & Transport Encryption:**
  - Enforce **HTTPS / TLS 1.3** across all connections via GitHub Pages automatic certificate management.
  - Automatic redirect from `http://` to `https://`.
- **Outbound Link Hardening:**
  - Every external hyperlink (`target="_blank"`) must strictly enforce `rel="noopener noreferrer"` to prevent reverse-tabnabbing vulnerabilities and referrer header leakage.
- **Content Security & Sanitization:**
  - Zero dynamic server-side template execution; immunity to SQL injection, SSRF, and server-side code execution.
  - All DOM updates driven by client-side i18n utilize controlled dictionaries and `textContent` (or strictly sanitised markup templates) to prevent Cross-Site Scripting (XSS).
- **Zero Secrets Exposure:**
  - Absolute ban on storing API keys, private tokens, or administrative credentials within client-side code or public GitHub repositories.
- **Privacy Compliance:**
  - No invasive tracking cookies, third-party analytics trackers, or personal data collection on visitors. Respects Do-Not-Track (`DNT`) headers.

---

## 3. Scalability & Availability

- **CDN Edge Caching:**
  - Hosted directly on the GitHub Pages global CDN network (Fastly-backed multi-region edge nodes).
  - Static HTML, CSS, and JS assets cached at the edge with efficient HTTP `Cache-Control` headers.
- **Traffic Elasticity:**
  - Capable of sustaining massive traffic spikes (e.g., viral Hacker News, Reddit, or LinkedIn post) with zero degraded performance or server downtime.
- **Zero Backend Bottleneck:**
  - No database connection pool limits, cold starts, server crashes, or backend CPU limits ($0 infrastructure failure surface).

---

## 4. Accessibility (a11y)

- **WCAG Compliance:**
  - Adherence to **WCAG 2.1 Level AA** standards.
- **Color Contrast:**
  - Text-to-background contrast ratio $\ge 4.5:1$ for regular text across both Dark mode (slate-950 background with slate-100/sky-400 text) and Light mode (slate-50 background with slate-900 text).
  - Non-text elements and interactive control borders maintain a contrast ratio $\ge 3:1$.
- **Keyboard Navigation:**
  - 100% of interactive controls (theme button, language button, links, project cards) reachable and activatable via `Tab`, `Shift+Tab`, `Enter`, and `Space`.
- **Focus Rings:**
  - High-visibility focus indicators (`ring-2 ring-sky-500 ring-offset-2 outline-none`) on all active interactive elements.
- **Screen Reader Support:**
  - Semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Clear `aria-label` tags for icon-only buttons (e.g., `aria-label="Toggle visual theme between dark and light"`, `aria-label="Switch interface language between English and Spanish"`).
  - Valid image alternative text (`alt="Marttin Roman - Senior QA Automation Engineer"`).

---

## 5. Browser & Device Compatibility

| Platform | Target Browsers | Tested Viewport Range |
| -------- | --------------- | --------------------- |
| **Desktop** | Chrome (last 2 versions), Safari (last 2 versions), Firefox (last 2 versions), Microsoft Edge (last 2 versions) | 1024px – 2560px (4K displays) |
| **Mobile** | iOS Safari (iOS 16+), Android Chrome (Android 12+) | 320px – 480px |
| **Tablet** | iPad Safari, Android Chrome | 768px – 1024px |

- **Touch Target Accessibility:** All buttons and interactive tap targets on touch devices maintain a minimum dimension of $44 \times 44\text{ pixels}$.
- **Responsive Layout:** Fluid layout without horizontal scrollbars at any resolution between 320px and 2560px.

---

## 6. Reliability & Resilience

- **Uptime SLA:** $99.9\%$ guaranteed by GitHub Enterprise Cloud Pages infrastructure.
- **Offline / Degraded Mode Resilience:**
  - If third-party CDNs (Tailwind CDN or Lucide CDN) experience intermittent slowdowns, raw HTML content and core semantic layout remain instantly readable.
  - LocalStorage failures (private browsing modes or quota restrictions) fail silently through defensive `try/catch` blocks, falling back to in-memory runtime session state.
- **Avatar Resilience:** Automatic client-side fallback to a dynamically generated UI avatar if the external GitHub user avatar fails to resolve.

---

## 7. Maintainability & Code Quality

- **Zero Framework Dependency Bloat:**
  - Built with clean, native JavaScript ES6+ modules and utility classes, eliminating heavy build pipelines, hydration bugs, and node_modules bloat for the core portfolio frontend.
- **Deterministic Localization Architecture:**
  - All translation strings organized into a single declarative dictionary object (`translations.en`, `translations.es`) enabling new content or projects to be added in seconds.
- **Portability for Custom Domains:**
  - All asset links, internal references, and scripts utilize relative or root-relative paths, ensuring the codebase functions identically on `marttinroman.github.io` or a future custom domain (`marttinroman.dev`) without re-coding.
- **Automated Validation:**
  - Static HTML validation via Prettier and ESLint.
  - End-to-end automated UI regression verification executed via Playwright.
