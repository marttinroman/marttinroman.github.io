# Acceptance Test Plan: STORY-PORT-20 - Pre-Configured Mailto Client Trigger with Encoded Subject

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-20  
**Epic:** EPIC-PORT-6 - Frictionless Contact & Conversion Channels  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 4 (MEDIUM RISK) -> Full Testing.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should formulate mailto link with encoded subject and recipient**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Locate anchor element matching `a[href^="mailto:"]`.
  2. Inspect `href` attribute value.
- **Expected Result:** Value contains `mailto:marttinroman@gmail.com` and properly encoded subject string.
