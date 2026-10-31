# Direct LinkedIn Outbound Link with Security Sanitization

**Jira Key:** PORT-19
**Epic:** EPIC-PORT-6 (Frictionless Contact & Conversion Channels)
**Priority:** High
**Story Points:** 1
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** tech recruiter browsing candidate profiles,  
**I want to** click a verified LinkedIn profile link from Marttin's portfolio,  
**So that** I can review endorsements, shared connections, and initiate direct communication on LinkedIn.

---

## Scope

### In Scope
- Outbound anchor targeting `https://www.linkedin.com/in/marttin-roman-torres/`.
- Attributes: `target="_blank"`, `rel="noopener noreferrer"`.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: LinkedIn link opens verified profile securely in new tab
- **Given:** Visitor clicks the LinkedIn link in the Hero or Contact section
- **When:** Anchor attributes are evaluated
- **Then:** `href` equals `https://www.linkedin.com/in/marttin-roman-torres/`, `target="_blank"`, and `rel="noopener noreferrer"`.

---

## Related Functional Requirements
- **FR-019:** Direct LinkedIn Outbound Link with Security Sanitization.
