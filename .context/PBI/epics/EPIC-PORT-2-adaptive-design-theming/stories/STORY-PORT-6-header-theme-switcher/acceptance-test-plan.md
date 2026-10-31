# Acceptance Test Plan: STORY-PORT-6 - Header Theme Switcher Toggle (Sun/Moon)

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-6  
**Epic:** EPIC-PORT-2 - Adaptive Design System & Theming  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Triage Result:** **REQUIRE TESTING** -> Full Testing.
- **Risk Score:** 6 (MEDIUM RISK) -> Standard full testing workflow.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should toggle dark and light modes when theme button clicked**
- **Related Scenario:** Scenario 1 & 2
- **Type:** Positive | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Record initial state: `const initialDark = await html.evaluate(el => el.classList.contains('dark'))`.
  2. Click `#theme-toggle`.
  3. Verify class `'dark'` is inverted.
  4. Click `#theme-toggle` again.
  5. Verify class `'dark'` returns to `initialDark`.
- **Expected Result:** Clean toggle between modes without UI freeze or delay.

#### **Should swap sun and moon icons correctly when toggling**
- **Related Scenario:** Scenario 1 & 2
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. If dark mode: verify `#theme-icon-sun` is visible (`display !== 'none'`) and `#theme-icon-moon` is hidden.
  2. Click `#theme-toggle`.
  3. Verify `#theme-icon-moon` is visible and `#theme-icon-sun` is hidden.
- **Expected Result:** Icon visibility perfectly inverts with theme state.
