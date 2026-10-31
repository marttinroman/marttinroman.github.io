# Acceptance Test Plan: STORY-PORT-19 - Direct LinkedIn Outbound Link with Security Sanitization

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-19  
**Epic:** EPIC-PORT-6 - Frictionless Contact & Conversion Channels  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Risk Score:** 3 (LOW RISK) -> Security Sanity & URL validation.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should link to verified linkedin profile with secure attributes**
- **Related Scenario:** Scenario 1
- **Type:** Security / Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Locate anchor with href containing `linkedin.com/in/marttin-roman-torres`.
  2. Inspect `target` and `rel` attributes.
- **Expected Result:** Target is `_blank`, rel is `noopener noreferrer`.
