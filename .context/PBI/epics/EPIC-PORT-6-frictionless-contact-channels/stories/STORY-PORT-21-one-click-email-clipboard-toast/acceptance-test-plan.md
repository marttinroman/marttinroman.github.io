# Acceptance Test Plan: STORY-PORT-21 - One-Click Email Copy to Clipboard with Toast Notification

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-21  
**Epic:** EPIC-PORT-6 - Frictionless Contact & Conversion Channels  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Triage Result:** **REQUIRE TESTING** -> User-facing conversion interaction.
- **Risk Score:** 7 (MEDIUM RISK) -> Standard full testing workflow.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should trigger email copy feedback toast when clicked**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Browser context initialized with clipboard permissions.
- **Test Steps:**
  1. Click `#copy-email-btn`.
  2. Inspect `#toast` element.
  3. Assert `#toast` has class `opacity-100` and is visible.
- **Expected Result:** Toast appears immediately providing reassuring visual confirmation.

#### **Should copy expected email string to clipboard**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Browser context supports clipboard read.
- **Test Steps:**
  1. Click `#copy-email-btn`.
  2. Read clipboard: `navigator.clipboard.readText()`.
- **Expected Result:** Clipboard text equals `'marttinroman@gmail.com'`.
