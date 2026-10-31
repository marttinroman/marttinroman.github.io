# Feature Test Plan: EPIC-PORT-1 - Internationalization & Localization (i18n)

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-1  
**Status:** Approved  

---

## 📋 Business Context Analysis

### Business Value
The internationalization epic is a core revenue/lead enablement feature. As an elite QA Automation & TestOps Engineer targeting US/remote global roles, English proficiency must be demonstrated from millisecond 0. Simultaneously, local LatAm credibility requires instant, fluid Spanish accessibility.

**Key Value Proposition:**
- **For Global Recruiters (Sarah Jenkins):** Zero friction, immediate comprehension of senior SDET qualifications in native English.
- **For Business/Portfolio:** Expands the addressable recruiting market from regional (LatAm only) to global (US, Europe, Remote).

**Success Metrics (KPIs):**
- Initial page load language: 100% English for first-time visitors.
- Translation toggle latency: < 50ms without full page reload.
- Cumulative Layout Shift (CLS) during language switch: < 0.05.

**User Impact:**
- **Sarah Jenkins (US Tech Recruiter):** Loads portfolio in English, evaluates competencies in under 30 seconds without hunting for a language switch.
- **Carlos Mendoza (LatAm VP of Engineering):** Toggles to Spanish with 1 click to assess bilingual leadership and team communication.

**Critical User Journeys:**
- **Journey 1:** Sarah loads `https://marttinroman.github.io/` -> Sees English copy by default -> Reviews flagship project.
- **Journey 2:** Carlos clicks `ES` toggle -> All cards, badges, and headers switch to Spanish -> Refreshes page -> Spanish state persists.

---

## 🏗️ Technical Architecture Analysis

### Architecture Components Involved

**Frontend:**
- Component: Header language toggle (`#lang-toggle`).
- DOM Elements: 41 elements tagged with `data-i18n="<key>"`.
- Data Source: Inlined dictionary object `window.i18nData` with keys for `en` and `es`.
- Attribute: `document.documentElement.lang`.

**State Management & Storage:**
- `localStorage.getItem('portfolio_lang')` / `localStorage.setItem('portfolio_lang', lang)`.

**External Services:**
- None (Self-contained client-side script on GitHub Pages Edge CDN).

### Integration Points (Critical for Testing)
- **Header Button ↔ i18n Controller Function:** Clicking `#lang-toggle` calls `setLanguage(targetLang)`.
- **i18n Controller ↔ DOM Query Engine:** `document.querySelectorAll('[data-i18n]')` updates `element.innerText` / `element.textContent`.
- **i18n Controller ↔ Web Storage API:** Read/write synchronization with `localStorage`.

**Data Flow:**
```
[User Click #lang-toggle] 
          ↓
[Determine target: (current === 'en' ? 'es' : 'en')]
          ↓
[Update DOM textContent for 41 nodes via i18nData[target]]
          ↓
[Update documentElement.lang = target]
          ↓
[Update #lang-toggle text = (target === 'en' ? 'ES' : 'EN')]
          ↓
[localStorage.setItem('portfolio_lang', target)]
```

---

## 🚨 Risk Analysis

### Technical Risks

#### Risk 1: Missing dictionary keys leading to `undefined` or blank text
- **Impact:** High (Broken UI, unprofessional appearance)
- **Likelihood:** Low (Inlined static dictionary)
- **Area Affected:** Frontend DOM text interpolation
- **Mitigation Strategy:** Automated audit comparing all `[data-i18n]` DOM keys against `i18nData.en` and `i18nData.es`.
- **Test Coverage Required:** Parameterized ATC asserting no element contains `undefined` or empty text post-toggle.

#### Risk 2: Layout expansion causing button overflow or card distortion in Spanish
- **Impact:** Medium (Spanish text typically 15-25% longer than English)
- **Likelihood:** Medium
- **Area Affected:** CSS Flexbox/Grid containers on mobile viewports (< 375px)
- **Mitigation Strategy:** Responsive CSS with `flex-wrap`, min-height constraints, and overflow wrapping.
- **Test Coverage Required:** Visual and boundary viewport checks (320px, 375px, 768px, 1280px) in both languages.

---

### Business Risks

#### Risk 1: First load defaulting to Spanish in a foreign browser
- **Impact on Business:** Loss of US enterprise recruiter attention.
- **Impact on Users:** Sarah Jenkins abandons within 5 seconds.
- **Likelihood:** Low if logic strictly enforces `defaultLang = 'en'`.
- **Mitigation Strategy:** Unit test and E2E verifying clean session (no localStorage) always renders English.

---

## ⚠️ Critical Analysis & Questions for PO/Dev

### Ambiguities Clarified
- **Q1:** Should browser locale (`navigator.language`) override default English?
  - **Resolution:** No. Default must strictly be English to prioritize US/Global recruitment, unless the user explicitly chose Spanish and saved it to `localStorage`.
- **Q2:** Should URL hash or query param reflect language (e.g. `?lang=es`)?
  - **Resolution:** Deferred to v2 roadmap to keep MVP zero-complexity and edge-static.

---

## 🎯 Test Strategy

### Test Scope

**In Scope:**
- Initial load default verification (`lang="en"`).
- Toggle action verification (English to Spanish and Spanish to English).
- Persistence verification (Page reload retains chosen locale).
- Complete DOM coverage (All 41 `data-i18n` elements checked).
- Accessibility validation (`aria-label`, `html[lang]` attribute update).
- Responsive layout verification under both locales.

**Out of Scope:**
- Machine translation / dynamic backend translation APIs.
- Third language locales (e.g., Portuguese).

---

### Test Levels

#### Unit / Static Analysis
- **Focus:** Complete parity between English and Spanish dictionary keys in JavaScript.
- **Tool:** ESLint + TypeScript test utility.

#### End-to-End (E2E) Testing
- **Focus:** Complete user flow from initial load, toggle, visual text verification, reload, and persistence check.
- **Tool:** Playwright (`PortfolioPage.ts` ATCs).

---

## 📊 Test Cases Summary by Story

### STORY-PORT-1: Default English Locale on First Load
- **Complexity:** Low
- **Estimated Test Cases:** 3
  - Positive: 1 (Clean storage load has `lang="en"` and English copy)
  - Negative: 1 (Storage with invalid key `'fr'` falls back to `'en'`)
  - Boundary: 1 (First load with empty string in storage falls back to `'en'`)

### STORY-PORT-2: Client-Side Language Toggle Button (EN/ES)
- **Complexity:** Low
- **Estimated Test Cases:** 3
  - Positive: 2 (Click toggles EN -> ES and ES -> EN)
  - Boundary: 1 (Rapid multiple clicks do not desynchronize state)

### STORY-PORT-3: Persist Language Preference in LocalStorage
- **Complexity:** Low
- **Estimated Test Cases:** 3
  - Positive: 1 (Reload with `'portfolio_lang' = 'es'` maintains Spanish)
  - Negative: 1 (Disabled localStorage gracefully falls back to in-memory switch without runtime crash)
  - Boundary: 1 (Clearing cache resets to English)

### STORY-PORT-4: Fluid Layout Adaptability for Translated Copy
- **Complexity:** Medium
- **Estimated Test Cases:** 4
  - Positive: 2 (Desktop 1280px and Mobile 375px rendering without scrollbar or clipping in ES)
  - Boundary: 2 (Smallest viewport 320px rendering)

---

## 🗂️ Test Data Requirements

### Valid Data Sets
- Languages: `'en'`, `'es'`.
- Storage Key: `'portfolio_lang'`.

### Invalid Data Sets
- Unsupported keys: `'de'`, `'fr'`, `'zh'`, `'undefined'`, `null`, `'1234'`.

---

## ✅ Entry/Exit Criteria

### Entry Criteria
- `index.html` implements `data-i18n` tags and `setLanguage()` method.
- Playwright harness configured with atomic test fixtures.

### Exit Criteria
- 100% of E2E tests for i18n pass without flaky retries.
- Zero console errors or unmapped key warnings.
