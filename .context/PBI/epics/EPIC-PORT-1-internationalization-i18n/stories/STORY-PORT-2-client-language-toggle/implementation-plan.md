# Implementation Plan: STORY-PORT-2 - Client-Side Language Toggle Button (EN/ES)

## Overview

Implement the interactive client-side language toggle button (`#lang-toggle`) that switches all DOM text nodes between English and Spanish without a page reload.

**Acceptance Criteria to Meet:**
- Clicking `#lang-toggle` switches all 41 DOM nodes to target language in < 50ms.
- `#lang-toggle` label updates dynamically (`"ES"` when English active, `"EN"` when Spanish active).
- HTML `lang` attribute synchronizes with active locale.
- Bidirectional toggling (EN -> ES -> EN) operates stably without race conditions or memory leaks.

---

## Technical Approach

- Attach click event listener to `#lang-toggle`:
  ```javascript
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(nextLang);
  });
  ```
- Function `setLanguage(lang)`:
  - Iterates through `document.querySelectorAll('[data-i18n]')`.
  - Reads key from `el.getAttribute('data-i18n')`.
  - Replaces `el.innerText = i18nData[lang][key]`.
  - Updates `#lang-toggle` text to `lang === 'en' ? 'ES' : 'EN'`.
  - Updates `document.documentElement.lang = lang`.

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-2-01:** Toggle English to Spanish | Event listener calls `setLanguage('es')` | `index.html` `#lang-toggle` listener |
| **TC-PORT-2-02:** Toggle Spanish back to English | Second click calls `setLanguage('en')` | `index.html` `#lang-toggle` listener |
| **TC-PORT-2-03:** Rapid Toggling State Stability | Atomic, synchronous DOM traversal in single frame | `setLanguage()` synchronous loop |

---

## Verification
- Verified by Playwright ATC: `PortfolioPage.toggleLanguageToSpanish()` in `tests/e2e/portfolio.spec.ts`.
