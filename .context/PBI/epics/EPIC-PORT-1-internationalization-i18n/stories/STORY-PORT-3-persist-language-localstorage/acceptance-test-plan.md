# Acceptance Test Plan: STORY-PORT-3 - Persist Language Preference in LocalStorage

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-3  
**Epic:** EPIC-PORT-1 - Internationalization & Localization (i18n)  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 5 (MEDIUM RISK) -> Full Testing.
- **Pattern:** Modify localStorage via Playwright page evaluate.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should persist spanish preference across page reload**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page open.
- **Test Steps:**
  1. Click `#lang-toggle` to activate Spanish.
  2. Verify `window.localStorage.getItem('portfolio_lang')` === `'es'`.
  3. Reload the page (`page.reload()`).
  4. Inspect `document.documentElement.lang`.
- **Expected Result:** Page re-renders directly in Spanish (`lang="es"`).

#### **Should handle storage write error silently when localstorage is blocked**
- **Related Scenario:** Scenario 2
- **Type:** Negative / Edge | **Priority:** Medium | **Test Level:** Unit / Integration
- **Preconditions:** Mock `window.localStorage.setItem` to throw `new DOMException('QuotaExceededError')`.
- **Test Steps:**
  1. Click `#lang-toggle`.
- **Expected Result:** UI toggles in-memory; no crash or unhandled promise rejection.
