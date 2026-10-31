# Pre-Configured Mailto Client Trigger with Encoded Subject

**Jira Key:** PORT-20
**Epic:** EPIC-PORT-6 (Frictionless Contact & Conversion Channels)
**Priority:** High
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** hiring executive or talent lead,  
**I want to** click an email button that opens my default email client with a pre-filled subject line,  
**So that** I don't have to formulate a blank email header from scratch.

---

## Scope

### In Scope
- Anchor `a[href^="mailto:marttinroman@gmail.com"]`.
- URL encoded subject parameters: `?subject=Senior%20QA%20%2F%20TestOps%20Role%20Inquiry`.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Mailto anchor contains target email and inquiry subject
- **Given:** Visitor locates the primary contact CTA
- **When:** Anchor `href` is verified
- **Then:** Href starts with `mailto:marttinroman@gmail.com` and includes encoded subject.

---

## Related Functional Requirements
- **FR-020:** Pre-Configured Mailto Client Trigger with Encoded Subject.
