# Acceptance Test Plan: STORY-PORT-17 - Outbound Secure Navigation to Dedicated Repositories

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-17  
**Epic:** EPIC-PORT-5 - Flagship Project Showcase  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision
- **Triage Result:** **REQUIRE TESTING** -> External integrations / Security attributes.
- **Risk Score:** 8 (HIGH RISK) -> Extended security and link health verification.

---

## 🧪 Step 4: Test Design

### Parametrization Opportunities
**Parametrized Test Group 1: Outbound Repository Verification**

| Repository Name | Expected URL | Target | Rel |
| :--- | :--- | :---: | :---: |
| Autonomous QA Engine | `https://github.com/marttinroman/autonomous-qa-engine` | `_blank` | `noopener noreferrer` |
| E2E Framework Boilerplate | `https://github.com/marttinroman/e2e-framework-boilerplate` | `_blank` | `noopener noreferrer` |
| AI Vector Validation Suite | `https://github.com/marttinroman/ai-vector-validation-suite` | `_blank` | `noopener noreferrer` |
| API Performance Harness | `https://github.com/marttinroman/api-performance-harness` | `_blank` | `noopener noreferrer` |
| Visual Regression Engine | `https://github.com/marttinroman/visual-regression-engine` | `_blank` | `noopener noreferrer` |

---

### Test Outlines

#### **Should feature verified and secured links to all 5 github repositories**
- **Related Scenario:** Scenario 1 & 2
- **Type:** Security / Integration | **Priority:** Critical | **Test Level:** E2E
- **Parametrized:** ✅ Yes (Group 1)
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Iterate over each URL in `config.expectedRepositories`.
  2. Locate element `a[href="${repoUrl}"]`.
  3. Assert element is attached and visible.
  4. Assert `target` attribute equals `'_blank'`.
  5. Assert `rel` attribute contains both `'noopener'` and `'noreferrer'`.
- **Expected Result:** All 5 links pass security sanitization and point to live GitHub repos.
