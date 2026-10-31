# Acceptance Test Plan: STORY-PORT-4 - Fluid Layout Adaptability for Translated Copy

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-4  
**Epic:** EPIC-PORT-1 - Internationalization & Localization (i18n)  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 4 (MEDIUM RISK) -> Full Testing.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should avoid horizontal scrollbar when translated to spanish on mobile**
- **Related Scenario:** Scenario 1
- **Type:** Boundary / Responsive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Viewport resized to 375x667 (iPhone SE).
- **Test Steps:**
  1. Navigate to `/`.
  2. Toggle to Spanish.
  3. Evaluate `window.innerWidth >= document.body.scrollWidth`.
- **Expected Result:** Condition evaluates to `true`; horizontal scroll is 0.

#### **Should render project card action links cleanly without overlap in spanish**
- **Related Scenario:** Scenario 2
- **Type:** Positive | **Priority:** Medium | **Test Level:** Visual / E2E
- **Preconditions:** Desktop viewport (1280x800).
- **Test Steps:**
  1. Toggle to Spanish.
  2. Locate all 4 featured project cards.
  3. Verify text `"Ver repo ->"` is visible and clickable.
- **Expected Result:** All links visible without overlapping text descriptions.
