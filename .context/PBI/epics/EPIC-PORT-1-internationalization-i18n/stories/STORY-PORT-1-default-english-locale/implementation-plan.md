# Implementation Plan: STORY-PORT-1 - Default English Locale on First Load

## Overview

Implement default rendering of English copy on initial session load without prior `localStorage` preference.

**Acceptance Criteria to Meet:**
- Initial load without existing `localStorage` defaults to English (`<html lang="en">`).
- All 41 `[data-i18n]` text elements render English text strings.
- Toggle button displays `"ES"` inviting Spanish speakers to toggle.
- Corrupted or invalid locale values in storage fall back gracefully to `"en"`.

---

## Technical Approach

- Inlined script in `index.html` resolves current language during initial load:
  ```javascript
  const validLanguages = ['en', 'es'];
  let currentLang = localStorage.getItem('portfolio_lang');
  if (!validLanguages.includes(currentLang)) {
    currentLang = 'en';
  }
  setLanguage(currentLang);
  ```
- All default HTML text nodes in `index.html` are authored directly in English, preventing any blank text if JavaScript execution is delayed.

---

## UI/UX Design

- Initial viewport loads English typography (`"Senior QA Automation Architect & TestOps Specialist"`).
- Availability badge displays: `"Available for remote & international roles"`.
- Button `#lang-toggle` displays text `"ES"`.

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-1-01:** Clean First Visit Loads English | Validate fallback to `'en'` when storage is null | `index.html` script tag `initLanguage()` |
| **TC-PORT-1-02:** Corrupted LocalStorage Fallback | Array check `['en', 'es'].includes(storedLang)` | `index.html` validation guard |
| **TC-PORT-1-03:** Accessibility HTML Lang Attribute | Set `document.documentElement.lang = 'en'` | `setLanguage()` method |

---

## Verification
- Verified by Playwright ATC: `PortfolioPage.verifyInitialEnglishLocale()` in `tests/e2e/portfolio.spec.ts`.
