# SRS — Infrastructure Specification

> **Document:** Software Requirements Specification (SRS) — Infrastructure Specification  
> **Phase:** Fase 3 (Infrastructure)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Target Platform:** GitHub Pages (`marttinroman.github.io`)  
> **Last Updated:** 2026-10-30  

---

## 1. Executive Summary & Cost Model

The infrastructure for `marttinroman.github.io` is designed under a **Zero-Cost, High-Performance Static Edge Architecture**. 

| Component | Provider / Technology | Monthly Cost | SLA / Performance |
| --------- | --------------------- | ------------ | ----------------- |
| **Edge Hosting & CDN** | GitHub Pages (Fastly Global CDN) | **$0.00** | 99.9% Uptime, TTFB < 150ms |
| **SSL / TLS Certificate** | Let's Encrypt via GitHub Pages | **$0.00** | Auto-renewing TLS 1.3 |
| **CI/CD Pipeline** | GitHub Actions (Ubuntu Runners) | **$0.00** (Free for public repos) | < 2 min execution time |
| **Version Control & Storage** | GitHub Git Repository | **$0.00** | Distributed Git |
| **DNS & Routing** | GitHub DNS (`*.github.io`) | **$0.00** | Optional custom domain ($12/yr) |
| **Total Recurring Cost** | | **$0.00 / month** | |

---

## 2. Network & Edge Deployment Architecture

```mermaid
flowchart LR
    subgraph Internet ["Public Web"]
        Client["Browser / Device<br/>(Desktop, Tablet, Mobile)"]
    end

    subgraph GitHubEdge ["GitHub Pages Edge Infrastructure (Fastly CDN)"]
        EdgeDNS["GitHub Anycast DNS"]
        EdgeNodes["Edge Points of Presence (PoPs)<br/>(TLS 1.3 Termination + HTTP/2)"]
        StaticStorage["GitHub Blob Storage<br/>(Static index.html & assets)"]
    end

    subgraph Origin ["GitHub Repository: marttinroman/marttinroman.github.io"]
        MainBranch["Git Branch: main<br/>(index.html in root)"]
        Workflow["GitHub Actions<br/>(Lint & E2E Validation)"]
    end

    Client -->|"DNS Lookup"| EdgeDNS
    Client -->|"HTTPS GET /"| EdgeNodes
    EdgeNodes -->|"Cache Hit (<100ms)"| Client
    EdgeNodes -.->|"Cache Miss / Invalidation"| StaticStorage
    MainBranch -->|"Automated Pages Deployment"| StaticStorage
    Workflow -->|"Triggered on git push"| MainBranch
```

---

## 3. Client Runtime Architecture

The application is completely self-contained within [index.html](file:///Users/marttinroman/projects/2026/portfolios/marttinroman.github.io/index.html), eliminating complex build steps, server hydration errors, and runtime dependencies:

```mermaid
flowchart TD
    subgraph HTMLDocument ["index.html Document Context"]
        Head["<head> Section<br/>- Tailwind CDN Script<br/>- Tailwind Config (darkMode: 'class')<br/>- Lucide CDN Script<br/>- Early Theme Init Script (Prevent Flash)"]
        Body["<body> Section<br/>- Header / Nav (Theme + i18n Switchers)<br/>- Hero Section (Avatar + Bio + CTAs)<br/>- Technical Specialties Grid<br/>- Flagship Project Showcase (3-Layer Test Engine)<br/>- Tech Stack Badge Cloud<br/>- Footer & Contact Channels"]
        Scripts["Inline <script> Modules<br/>- I18nEngine (EN default / ES toggle)<br/>- ThemeManager (Dark / Light + OS detection)<br/>- ClipboardHelper (Toast feedback)<br/>- Lucide Activator"]
    end

    Head --> Body
    Body --> Scripts
```

### Module Responsibilities:
1. **Early Theme Initializer (in `<head>`):**
   - Reads `localStorage.getItem('theme')` or falls back to `window.matchMedia('(prefers-color-scheme: dark)')`.
   - Immediately adds or removes the `dark` class from `document.documentElement` before rendering, eliminating visual flicker (FOUC).
2. **I18n Translation Engine:**
   - Central dictionary containing English (default) and Spanish strings for all UI keys.
   - Reads `localStorage.getItem('lang')` or defaults to `'en'`.
   - Injects localized text into all elements with `data-i18n` attributes.
   - Injects localized `aria-label` attributes to maintain accessibility across languages.
3. **Theme Switcher Controller:**
   - Listens to user clicks on `#theme-toggle`.
   - Alternates between `dark` and `light` classes on `document.documentElement`.
   - Swaps Sun/Moon icons dynamically.
   - Persists selection to `localStorage`.
4. **Clipboard & Contact Helper:**
   - Provides seamless copying of `marttinroman@gmail.com` with a brief visual toast confirmation for users on devices without a configured mail client.

---

## 4. Custom Domain & Portability Strategy

To satisfy the constitution requirement of leaving open seamless migration to a custom domain (e.g., `marttinroman.dev` or `marttinroman.com`):
- **Relative Pathing:** All internal asset references and document navigation use relative paths (`./`) or hash anchors (`#`).
- **CNAME File Provisioning:** When a custom domain is ready, adding a single `CNAME` file at the root repository directory and configuring DNS records (`ANAME`/`ALIAS` to `marttinroman.github.io`) will route the site without code changes.

---

## 5. Automated CI/CD & Quality Gate Pipeline

A lightweight GitHub Actions workflow (`.github/workflows/ci.yml`) validates the site on every push:
1. **Linting & Code Integrity:** Runs `bun run lint` and Prettier format validation.
2. **HTML & Link Integrity Check:** Scans `index.html` for broken anchor tags, missing images, and invalid attributes.
3. **Automated E2E Verification:** Playwright headless test verifying:
   - Default English language loading.
   - Functional Spanish toggle without layout break.
   - Dark/Light mode class toggling.
   - Avatar fallback resilience.

---

## 6. Resilience & Disaster Recovery

- **Zero Database Degradation:** With no SQL or NoSQL database, there is zero risk of connection exhaustion, database corruption, or slow query latency.
- **CDN Edge Availability:** In the event of localized ISP disruptions, Fastly Anycast edge routing directs client requests to alternate healthy nodes.
- **Avatar Resilience:** If GitHub's user content CDN (`github.com/marttinroman.png`) is unreachable, client-side fallback immediately loads an SVG/initials avatar from UI-Avatars without throwing errors.
