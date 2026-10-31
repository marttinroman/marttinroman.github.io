# Outbound Secure Navigation to Dedicated Repositories

**Jira Key:** PORT-17
**Epic:** EPIC-PORT-5 (Flagship Project Showcase)
**Priority:** Critical
**Story Points:** 3
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** technical recruiter, hiring manager, or open-source peer,  
**I want to** click through to any of the 5 featured GitHub repositories safely,  
**So that** I can inspect real code, commit histories, CI/CD pipelines, and test execution scripts in an isolated browser tab.

---

## Scope

### In Scope
- Outbound anchor links for 5 repositories:
  1. `https://github.com/marttinroman/autonomous-qa-engine`
  2. `https://github.com/marttinroman/e2e-framework-boilerplate`
  3. `https://github.com/marttinroman/ai-vector-validation-suite`
  4. `https://github.com/marttinroman/api-performance-harness`
  5. `https://github.com/marttinroman/visual-regression-engine`
- Strict security attributes on all external anchors:
  - `target="_blank"`
  - `rel="noopener noreferrer"`

### Out of Scope
- Direct GitHub API metrics polling in MVP.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: All 5 repositories have valid, verified HTTPS links (Happy Path)
- **Given:** Visitor reviews the project cards
- **When:** All external repository anchor tags are inspected
- **Then:** All 5 links match the exact URLs registered under `marttinroman`, return HTTP 200 on GitHub, and open in a new tab.

### Scenario 2: Prevention of reverse tab-nabbing vulnerabilities (Security Criteria)
- **Given:** Any external project link is present in the DOM
- **When:** The anchor attributes are inspected
- **Then:** `target` is exactly `"_blank"` and `rel` contains both `"noopener"` and `"noreferrer"`.

---

## Related Functional Requirements
- **FR-017:** Outbound Secure Navigation to Dedicated Repositories.
