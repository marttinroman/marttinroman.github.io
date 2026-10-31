# SRS — Architecture Specifications

> **Document:** Software Requirements Specification (SRS) — Architecture Specifications  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Target Platform:** GitHub Pages (`marttinroman.github.io`)  
> **Last Updated:** 2026-10-30  

---

## 1. System Architecture (C4 Level 1 & 2)

The system is designed under a **Zero-Cost, Static Edge Architecture**. The application delivers a high-speed, interactive client-side experience hosted on GitHub Pages with zero ongoing server maintenance or database costs.

```mermaid
flowchart TD
    subgraph Users ["Actors & Stakeholders"]
        Recruiter["International Tech Recruiter"]
        VP["VP of Engineering / QA Lead"]
        Founder["Startup Founder / CTO"]
    end

    subgraph Hosting ["Edge Hosting & CDN Layer ($0 Infra)"]
        GHPages["GitHub Pages Edge CDN<br/>(Fastly Global CDN)"]
        GHRepo["GitHub Repository<br/>(marttinroman/marttinroman.github.io)"]
        GHActions["GitHub Actions CI/CD Pipeline<br/>(Automated Build & Verify)"]
    end

    subgraph Client ["Client Browser Runtime (Single-Page App)"]
        DOM["HTML5 Semantic DOM"]
        TailwindEngine["Tailwind CSS Runtime<br/>(Adaptive Design System)"]
        ThemeManager["Theme Controller<br/>(Dark / Light + System Auto)"]
        I18nEngine["i18n Translation Engine<br/>(EN default / ES toggle)"]
        LocalStorage[("Browser LocalStorage<br/>(Theme & Locale State)")]
    end

    subgraph External ["External Services & Targets"]
        GitHubProfile["GitHub Profile & Repositories<br/>(github.com/marttinroman)"]
        LinkedIn["LinkedIn Professional Profile<br/>(linkedin.com/in/marttinroman)"]
        MailClient["User Native Mail Client<br/>(mailto: protocol)"]
        AvatarCDN["GitHub User Avatar CDN<br/>(github.com/marttinroman.png)"]
    end

    %% Interactions
    Users -->|"HTTPS GET /"| GHPages
    GHRepo -->|"Deploy on push to main"| GHPages
    GHActions -->|"Automated Lint & E2E Test"| GHRepo

    GHPages -->|"Serve index.html & Assets"| Client
    AvatarCDN -->|"Load profile image"| DOM

    ThemeManager <-->|"Read / Write 'preferred_theme'"| LocalStorage
    I18nEngine <-->|"Read / Write 'preferred_locale'"| LocalStorage

    ThemeManager -->|"Toggle 'dark' class"| DOM
    I18nEngine -->|"Update [data-i18n] text"| DOM
    TailwindEngine -->|"Render theme styles"| DOM

    DOM -->|"Click GitHub links"| GitHubProfile
    DOM -->|"Click LinkedIn"| LinkedIn
    DOM -->|"Click Contact"| MailClient
```

---

## 2. Client-Side Data Architecture & Schemas

Because the portfolio is engineered for maximum performance and $0 infrastructure overhead, data persistence is maintained client-side via declarative models and browser storage:

```mermaid
classDiagram
    class ProfileData {
        +string name
        +string title_en
        +string title_es
        +string bio_en
        +string bio_es
        +string location
        +string availability_status
        +string avatar_url
        +string github_url
        +string linkedin_url
        +string contact_email
    }

    class ProjectShowcase {
        +string id
        +string title_en
        +string title_es
        +string category
        +string summary_en
        +string summary_es
        +string[] validation_layers
        +string[] tech_stack
        +string repo_url
        +string live_demo_url
        +boolean is_flagship
    }

    class TechnicalSpecialty {
        +string id
        +string icon_name
        +string accent_color
        +string title_en
        +string title_es
        +string description_en
        +string description_es
        +string[] key_technologies
    }

    class ClientPreferences {
        +string preferred_theme : "dark" | "light"
        +string preferred_locale : "en" | "es"
        +saveTheme(theme)
        +saveLocale(locale)
        +resolveInitialPreferences()
    }

    class TranslationDictionary {
        +Object en
        +Object es
        +getTranslation(key, locale) string
    }

    ProfileData "1" *-- "many" TechnicalSpecialty : defines
    ProfileData "1" *-- "many" ProjectShowcase : highlights
    ClientPreferences ..> TranslationDictionary : queries active locale
```

---

## 3. Tech Stack Justification

| Technology Component | Selection | Justification (Pros) | Trade-offs & Mitigations |
| -------------------- | --------- | -------------------- | ------------------------ |
| **Hosting & CDN** | GitHub Pages | ✅ **$0/month infrastructure cost**.<br/>✅ Automatic HTTPS/TLS 1.3 certificates.<br/>✅ Global Fastly-backed CDN edge points. | ❌ Static-only (no server-side dynamic compute).<br/>*Mitigation:* Handled completely via client-side architecture and external services. |
| **Markup & Structure** | Semantic HTML5 | ✅ Universally accessible by web crawlers and screen readers.<br/>✅ Sub-second browser rendering without framework hydration delay. | ❌ Manual markup synchronization.<br/>*Mitigation:* Modular section boundaries and declarative `data-i18n` attributes. |
| **Styling & Design System** | Tailwind CSS (CDN Runtime) | ✅ Rapid prototyping with utility classes.<br/>✅ Built-in `class` based dark mode.<br/>✅ Modern color palette (slate & sky) with glow blur effects. | ❌ Runtime CDN compilation file size (~100KB).<br/>*Mitigation:* Cached aggressively by browser; minified CSS build can be introduced in v2 if needed. |
| **Iconography** | Lucide Icons (CDN) | ✅ Clean, consistent SVG icon set matching modern developer tools.<br/>✅ Lightweight client-side activation via `lucide.createIcons()`. | ❌ Requires CDN script download.<br/>*Mitigation:* Asynchronous script tag loading with zero rendering block. |
| **State & Localization** | Vanilla ES6+ Client Engine | ✅ Zero framework dependency bloat (no React/Vue runtime overhead).<br/>✅ Instant locale and theme switching without page reloads.<br/>✅ Seamless persistence in `localStorage`. | ❌ Manual state bindings.<br/>*Mitigation:* Clean, isolated controller functions (`setTheme`, `setLocale`) under 60 lines of code. |
| **CI/CD & Verification** | GitHub Actions & Playwright | ✅ Automated linting, code checks, and E2E regression tests on every push.<br/>✅ Ephemeral cloud runners with free public minutes. | ❌ Public build minutes limit.<br/>*Mitigation:* Targeted workflows running under 2 minutes per execution. |

---

## 4. Key Data Flows

### A. Initial Load & Preferences Resolution Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser
    participant Storage as LocalStorage
    participant ThemeCtrl as Theme Controller
    participant I18nCtrl as i18n Controller
    participant DOM as Document DOM

    User->>Browser: Navigate to marttinroman.github.io
    Browser->>Storage: Read 'preferred_theme'
    alt Theme stored
        Storage-->>ThemeCtrl: Return 'dark' or 'light'
    else No theme stored
        Browser->>ThemeCtrl: Evaluate window.matchMedia('(prefers-color-scheme: dark)')
    end
    ThemeCtrl->>DOM: Apply or remove 'dark' class on <html>

    Browser->>Storage: Read 'preferred_locale'
    alt Locale stored
        Storage-->>I18nCtrl: Return 'en' or 'es'
    else No locale stored
        I18nCtrl-->>I18nCtrl: Default to 'en' (International First)
    end
    I18nCtrl->>DOM: Inject active dictionary strings into [data-i18n] nodes
    DOM-->>User: Render fully localized, correctly themed page (<800ms)
```

### B. Interactive Language Switch Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant ToggleBtn as Language Button (#lang-toggle)
    participant I18nCtrl as i18n Controller
    participant Storage as LocalStorage
    participant DOM as Document DOM

    User->>ToggleBtn: Click Language Switcher
    ToggleBtn->>I18nCtrl: toggleLanguage()
    I18nCtrl->>I18nCtrl: Compute newLocale ('en' -> 'es' or 'es' -> 'en')
    I18nCtrl->>DOM: Iterate over elements with [data-i18n] attribute
    I18nCtrl->>DOM: Replace textContent with dictionary[newLocale][key]
    I18nCtrl->>DOM: Update <html lang="[newLocale]">
    I18nCtrl->>DOM: Update button label / icon
    I18nCtrl->>Storage: Set 'preferred_locale' = newLocale
    DOM-->>User: Visual update completed instantly without page reload
```

---

## 5. Security Architecture

1. **Zero Server-Side Attack Surface:**
   - Hosted statically on GitHub Pages. No backend application servers, no server-side templating engines, and no SQL/NoSQL databases to compromise.
2. **Strict Client-Side Sanitization:**
   - Text updates during language switching exclusively use safe property setters (`textContent`), preventing Cross-Site Scripting (XSS) vectors.
3. **Outbound Hyperlink Security:**
   - All external anchor tags (`target="_blank"`) enforce `rel="noopener noreferrer"` to eliminate reverse tabnabbing and protect user referrers.
4. **Transport Layer Security:**
   - Enforced HTTPS / TLS 1.3 across all network transactions with HSTS headers enabled natively by GitHub Pages.
5. **Safe Storage Handling:**
   - `localStorage` operations are wrapped in defensive `try/catch` handlers to safeguard against private mode security exceptions (e.g., Safari Private Browsing sandbox restrictions).
