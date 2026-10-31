# Acceptance Test Plan: STORY-PORT-5 - Auto-Detect Operating System Color Scheme

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-5  
**Epic:** EPIC-PORT-2 - Adaptive Design System & Theming  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 5 (MEDIUM RISK) -> Full Testing.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should detect dark scheme when os prefers dark**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Browser context emulating `colorScheme: 'dark'`, no localStorage.
- **Test Steps:**
  1. Navigate to `/`.
  2. Inspect class on `<html>`.
- **Expected Result:** `<html>` has class `'dark'`.

#### **Should detect light scheme when os prefers light**
- **Related Scenario:** Scenario 2
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Browser context emulating `colorScheme: 'light'`, no localStorage.
- **Test Steps:**
  1. Navigate to `/`.
  2. Inspect class on `<html>`.
- **Expected Result:** `<html>` does NOT have class `'dark'`.
