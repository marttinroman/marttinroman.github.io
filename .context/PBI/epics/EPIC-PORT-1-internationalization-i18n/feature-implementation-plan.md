# Feature Implementation Plan: EPIC-PORT-1 - Internationalization & Localization (i18n)

## Overview

This feature delivers an instantaneous, client-side bilingual localization engine supporting English (`en`, default) and Spanish (`es`) across all 41 interactive and static text nodes in the single-page application.

**Scope (Stories Included):**
- **STORY-PORT-1:** Default English Locale on First Load
- **STORY-PORT-2:** Client-Side Language Toggle Button (EN/ES)
- **STORY-PORT-3:** Persist Language Preference in LocalStorage
- **STORY-PORT-4:** Fluid Layout Adaptability for Translated Copy

**Technical Stack:**
- **Frontend:** Vanilla TypeScript / Modern ES2022 JavaScript, Semantic HTML5, Tailwind CSS.
- **Storage:** Web Storage API (`localStorage`).
- **Deployment:** GitHub Pages Edge CDN (Fastly).
- **Testing:** Playwright E2E with KATA architecture (`PortfolioPage.ts`).

---

## Technical Decisions

### Decision 1: Inlined JavaScript Dictionary vs External Remote JSON
**Options considered:**
- A) Fetch external JSON files (`/locales/en.json`, `/locales/es.json`) via `fetch()`.
- B) Inlined global JavaScript object (`window.i18nData`) in `<head>` / main script.
- C) Server-Side Rendering (SSR) localized HTML templates.

**Chosen:** Option B (Inlined global JavaScript dictionary).

**Reasoning:**
- ✅ **Zero Latency:** Translations switch in < 16ms (within a single animation frame).
- ✅ **Zero Network Overhead:** Eliminates HTTP request roundtrips, preventing Flash of Untranslated Text (FOUT) on slow cellular networks.
- ✅ **$0 Hosting Compatibility:** Operates completely statically on GitHub Pages without server-side middleware.
- ❌ **Trade-off:** Adds ~3.5 KB to initial HTML payload (negligible compared to CDN latency of a separate network request).

### Decision 2: Declarative DOM Mutation via `data-i18n` Attributes
**Options considered:**
- A) Full template re-rendering with innerHTML.
- B) Declarative `data-i18n="<key>"` attribute mapping with targeted `textContent` updates.

**Chosen:** Option B (`data-i18n` mapping).

**Reasoning:**
- ✅ **Security / Anti-XSS:** Modifies only `textContent`, avoiding `innerHTML` XSS attack vectors.
- ✅ **Event Listener Preservation:** DOM elements and attached event listeners (`#theme-toggle`, `#copy-email-btn`) remain untouched.
- ✅ **Performance:** Single query selector pass (`document.querySelectorAll('[data-i18n]')`) finishes in < 2ms for 41 elements.

### Decision 3: Fallback Strategy on Corrupted or Unsupported Stored Locale
**Options considered:**
- A) Throw Error / log warning and do nothing.
- B) Sanitize input against whitelist `['en', 'es']` and default gracefully to `'en'`.

**Chosen:** Option B (Whitelist verification).

**Reasoning:**
- ✅ Hardened user experience ensuring international recruiters never encounter broken strings.

---

## Types & Type Safety

```typescript
export type SupportedLocale = 'en' | 'es';

export interface I18nDictionary {
  [key: string]: {
    en: string;
    es: string;
  };
}

export interface I18nController {
  currentLocale: SupportedLocale;
  setLanguage(locale: SupportedLocale): void;
  initLanguage(): void;
}
```

---

## UI/UX Design Strategy

- **Placement:** Header navigation bar next to Theme Switcher.
- **Button Styling:** Slate badge button with smooth hover transition (`hover:border-blue-500/50`).
- **Dynamic Label:** When current language is English, button displays `"ES"` indicating the destination language. When Spanish is active, button displays `"EN"`.
- **Accessibility:** `html[lang]` attribute updated to `"en"` or `"es"` to allow screen readers to adjust pronunciation dictionaries.

---

## Implementation Steps & Verification

1. **Step 1:** Define `window.i18nData` dictionary containing all 41 keys matching SRS functional specifications.
2. **Step 2:** Mark all static text elements in `index.html` with corresponding `data-i18n` attribute tags.
3. **Step 3:** Implement `setLanguage(lang)` function:
   - Updates `document.documentElement.lang = lang`.
   - Updates `#lang-toggle` button text.
   - Iterates through `[data-i18n]` nodes and assigns `i18nData[key][lang]`.
   - Persists value to `localStorage.setItem('portfolio_lang', lang)`.
4. **Step 4:** Implement `initLanguage()` on DOM load:
   - Reads `localStorage.getItem('portfolio_lang')` or defaults to `'en'`.
5. **Step 5 (Verification):** Run Playwright E2E test `should load in English by default and switch seamlessly to Spanish`.
