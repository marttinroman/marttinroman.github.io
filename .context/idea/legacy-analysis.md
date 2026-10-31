# Legacy & Baseline Analysis

> For existing product/codebase baseline (`index.html`). Fase 1 supplement.
> Last updated: 2026-10-30

## Current Product Summary

The project repository contains an initial baseline template in [`index.html`](file:///Users/marttinroman/projects/2026/portfolios/marttinroman.github.io/index.html). It currently renders a single-page dark-themed portfolio for Marttin Roman as a "Senior QA Automation Engineer & SDET". It introduces technical specialties (Frameworks, AI/RAG validation, CI/CD), two showcase cards, a technology stack badge list, and basic contact links.

## Tech Stack (as known)

| Layer | Technology | Notes |
| ----- | ---------- | ----- |
| **Markup & Structure** | Semantic HTML5 | Single-file architecture ready for GitHub Pages hosting. |
| **Styling & Design System** | Tailwind CSS (CDN runtime) | Custom slate-950 dark background, sky-400 accent palette, blur glow effects. |
| **Iconography** | Lucide Icons (CDN runtime) | Client-side icon injection via `lucide.createIcons()`. |
| **Deployment Target** | GitHub Pages | Static hosting with zero backend server dependency. |
| **Version Control & CI/CD** | Git & GitHub Actions | Repository hosted under `marttinroman/marttinroman.github.io`. |

## Existing Capabilities

- **Responsive Single-Page Layout:** Clean hero section with avatar, status badge ("Disponible para roles remotos e internacionales"), and external links to GitHub and LinkedIn.
- **Specialty Grid:** 3-column layout highlighting Automation Frameworks, AI & RAG Validation, and CI/CD TestOps.
- **Project Showcase Cards:** 2 card containers outlining the Full-Stack Automation Boilerplate and RAG Quality Harness.
- **Tech Stack Badges:** Visual tag list covering Playwright, TypeScript, Python, Docker, GitHub Actions, k6, APIs, Azure DevOps, and AI Agents.

## Documentation & Feature Gaps

1. **Missing Theme Toggle (Dark / Light Mode):** The baseline has hardcoded dark styling classes (`bg-slate-950 text-slate-100`) without a toggle mechanism or light-mode color mappings.
2. **Missing Bilingual Localization (i18n):** All current text is hardcoded in Spanish. The required product vision demands English as the primary default language with an instant toggle to Spanish.
3. **Static & Hardcoded Project Data:** Project cards use placeholder text and placeholder image containers without interactive previews, live links, or dynamic language binding.
4. **Placeholder Contact Credentials:** Contact mailto points to `tu-correo@ejemplo.com` instead of a verified contact channel.
5. **Absence of Autonomous QA & AI-TestOps Engine Deep Dive:** The flagship solution mentioned in the constitution needs dedicated narrative space and clear architectural presentation.

## Implications for MVP

- **Retain & Refactor HTML Structure:** Preserve the clean layout, Tailwind utility conventions, and Lucide icon integration from [`index.html`](file:///Users/marttinroman/projects/2026/portfolios/marttinroman.github.io/index.html), while upgrading it to support dynamic state (i18n + theme switcher).
- **Implement Lightweight Client-Side State:** Introduce vanilla JavaScript logic to handle `localStorage`-persisted theme preferences (Dark/Light) and language selection (EN default / ES toggle) without heavy external framework bloat.
- **Promote AI-TestOps to Flagship Status:** Expand the project showcase to give the Autonomous QA & AI-TestOps Engine the spotlight it deserves as Marttin's premier technical asset.
- **Maintain $0 Infrastructure Constraint:** All improvements must remain 100% static clientside code compatible with GitHub Pages hosting.
