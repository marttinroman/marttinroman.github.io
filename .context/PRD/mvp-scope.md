# PRD — MVP Scope & Requirements

> **Document:** Product Requirements Document (PRD) — MVP Scope  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Last Updated:** 2026-10-30  

---

## 1. In Scope (Must Have — Core MVP)

### EPIC-PORT-001: Internationalization & Localization (i18n)
- **US 1.1:** *As an international recruiter,* I want the website to load in English by default, so that I can immediately evaluate the candidate’s profile in the global tech lingua franca.
- **US 1.2:** *As a Spanish-speaking hiring manager or founder,* I want an accessible language toggle (EN/ES) in the navigation bar, so that I can read all project descriptions, credentials, and metrics in Spanish.
- **US 1.3:** *As a returning visitor,* I want my selected language preference persisted in my browser (`localStorage`), so that the site remembers my choice on subsequent visits without reloading.
- **US 1.4:** *As a mobile user,* I want seamless language switching without page layout jumping or horizontal re-flow, so that my browsing experience is smooth.

### EPIC-PORT-002: Adaptive Design System & Theming (Dark/Light Mode)
- **US 2.1:** *As a visitor,* I want the site to automatically detect and respect my operating system’s preferred color scheme (Dark or Light), so that the visual presentation matches my viewing environment.
- **US 2.2:** *As a visitor,* I want an intuitive theme toggle button (Sun/Moon icon) accessible in the top header, so that I can manually override the theme at any time.
- **US 2.3:** *As a reader in light mode,* I want text and background contrast to meet strict WCAG 2.1 AA standards (minimum 4.5:1), so that content is effortlessly readable in brightly lit environments.
- **US 2.4:** *As a returning user,* I want my manual theme choice saved in `localStorage`, so that my preferred theme is preserved across browsing sessions.

### EPIC-PORT-003: Hero & Professional Authority Presentation
- **US 3.1:** *As a recruiter,* I want to see an eye-catching hero section with Marttin's professional photo, full name, Senior SDET/TestOps title, and summary, so that I immediately understand his core identity.
- **US 3.2:** *As a talent acquisition partner,* I want a prominent "Available for remote & international roles" status badge with an active indicator, so that I instantly know he is open to new opportunities.
- **US 3.3:** *As a hiring manager,* I want direct action buttons (GitHub, LinkedIn, Contact Email) in the hero, so that I can view external profiles or start a conversation in one click.

### EPIC-PORT-004: Technical Specialties & Competence Mapping
- **US 4.1:** *As an engineering manager,* I want a dedicated "Technical Specialties" section highlighting Automation Frameworks, AI & RAG Validation, and CI/CD TestOps, so that I can verify alignment with our tech stack.
- **US 4.2:** *As a technical reviewer,* I want each specialty card to feature clear iconography, concise problem-solving descriptions, and key technologies, so that I can gauge depth without cognitive fatigue.
- **US 4.3:** *As a visitor,* I want a comprehensive "Tools & Technologies" badge cloud categorized by domain (Automation, Languages, DevOps, AI Testing), so that I can verify specific tool proficiencies (Playwright, TypeScript, Python, Docker, k6).

### EPIC-PORT-005: Flagship Project Showcase (Autonomous QA & AI-TestOps Engine)
- **US 5.1:** *As a VP of Engineering,* I want a prominent featured showcase of the **Autonomous QA & AI-TestOps Engine**, so that I can evaluate how Marttin solves end-to-end testing, API validation, and non-deterministic LLM evaluation.
- **US 5.2:** *As a tech lead,* I want clear architectural breakdowns of the 3 validation layers (UI Playwright POM, API Schema checks, and RAG semantic scoring), so that I understand the system design.
- **US 5.3:** *As a developer,* I want direct links to public GitHub repositories and open-source boilerplates, so that I can inspect code quality, folder conventions, and CI/CD configurations directly.
- **US 5.4:** *As a startup CTO,* I want the project narrative to emphasize the business value and "$0 Infrastructure Cost" model, so that I see the ROI of adopting this approach.

### EPIC-PORT-006: Frictionless Contact & Conversion Channels
- **US 6.1:** *As a recruiter,* I want the LinkedIn button to open Marttin's verified LinkedIn profile in a new secure tab, so that I can connect and send an InMail directly.
- **US 6.2:** *As an interested hiring lead,* I want the Contact button to trigger a `mailto:` link with a pre-configured subject line, so that I can immediately send an email inquiry without filling out lengthy forms.
- **US 6.3:** *As a user on a device without a configured email client,* I want a visible, easily selectable email address or fallback mechanism, so that I can manually copy the contact details.

### EPIC-PORT-007: Performance, Accessibility & Zero-Cost Static Delivery
- **US 7.1:** *As any visitor,* I want the page to load in under 1 second on standard broadband, so that I have zero waiting friction.
- **US 7.2:** *As a screen-reader or keyboard user,* I want full keyboard navigation support (Tab/Shift+Tab) and semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), so that the site is fully accessible.
- **US 7.3:** *As the site maintainer (Marttin),* I want the entire platform to deploy automatically via GitHub Pages from the repository root or docs folder, so that hosting and maintenance cost exactly $0.00/month.

---

## 2. Out of Scope (Nice to Have — Post-MVP / v2+)

- **Dynamic Interactive Terminal / Playground:** Running live in-browser Playwright test simulations (requires WebAssembly or backend compute containers).
- **Integrated Calendar Booking Widget:** Embedding Calendly or Cal.com modal directly on the page (deferred to v2 based on recruiter volume).
- **Dynamic Blog / Article CMS:** Full Markdown blog engine with pagination, search, and commenting (deferred to v2; technical articles will link directly to LinkedIn/Medium/Dev.to for MVP).
- **Automated Live Metrics API Widget:** Real-time badge fetching live passing/failing rates from private CI pipelines via cloud endpoints.
- **Server-Side Rendering / Backend Database:** Any backend database (Supabase, PostgreSQL, Firebase) or backend API runtime (Node.js/Express) is intentionally excluded to preserve the zero-overhead, $0/month GitHub Pages architecture.

---

## 3. Success Criteria (MVP Launch Gate)

| Criterion | Target Metric | Verification Method |
| --------- | ------------- | ------------------- |
| **Bilingual Completeness** | 100% of visible UI copy translated between EN and ES | Manual audit of all components in both language states |
| **Theme Switching Integrity** | 100% color contrast compliance in both Dark and Light modes | Axe Core / Lighthouse Accessibility score $\ge 95$ |
| **State Persistence** | Theme and language persist across page reloads and browser restarts | Automated E2E verification test via Playwright |
| **Performance Standard** | LCP < 1.2s, FCP < 0.8s, Cumulative Layout Shift (CLS) = 0 | Google Lighthouse Performance score $\ge 95$ |
| **Mobile Responsiveness** | Flawless rendering on viewport widths from 320px to 2560px | Multi-viewport responsive checks (mobile, tablet, desktop) |
| **Working Links** | Zero broken links or placeholder URLs (`404` or `tu-correo@ejemplo.com`) | Automated link validation scan |
| **Operating Cost** | $0.00 recurring infrastructure cost | Deployed directly to GitHub Pages |
