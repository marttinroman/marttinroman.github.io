# Acceptance Test Plan: STORY-PORT-7 - WCAG 2.1 AA Light-Mode Contrast Compliance

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-7  
**Epic:** EPIC-PORT-2 - Adaptive Design System & Theming  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 4 (MEDIUM RISK) -> Full Testing.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should meet wcag aa contrast ratio in light mode**
- **Related Scenario:** Scenario 1
- **Type:** Accessibility / Non-functional | **Priority:** High | **Test Level:** Integration / E2E
- **Preconditions:** Page switched to Light Mode.
- **Test Steps:**
  1. Inspect primary headings and body paragraphs.
  2. Compute contrast ratio using relative luminance formula against `#f8fafc`.
- **Expected Result:** Computed ratio >= 4.5:1 for body and >= 3.0:1 for headings. Zero color-contrast violations.
