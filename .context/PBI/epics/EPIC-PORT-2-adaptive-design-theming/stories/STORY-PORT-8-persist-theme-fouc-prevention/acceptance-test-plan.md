# Acceptance Test Plan: STORY-PORT-8 - Persist Theme Mode in LocalStorage & FOUC Prevention

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-8  
**Epic:** EPIC-PORT-2 - Adaptive Design System & Theming  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 6 (MEDIUM RISK) -> Full Testing.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should persist theme selection across page reload without fouc**
- **Related Scenario:** Scenario 1 & 2
- **Type:** Positive / Performance | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Toggle theme to opposite of current.
  2. Verify `localStorage.getItem('portfolio_theme')` matches new state.
  3. Reload page.
  4. Assert `document.documentElement.classList.contains('dark')` matches before first contentful paint.
- **Expected Result:** Persisted state is applied instantly; zero visual jitter or theme flicker.
