# WCAG 2.1 AA Light-Mode Contrast Compliance

**Jira Key:** PORT-7
**Epic:** EPIC-PORT-2 (Adaptive Design System & Theming)
**Priority:** High
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As an** accessibility compliance reviewer or visually impaired visitor,  
**I want to** read all typography in light mode with contrast ratios >= 4.5:1,  
**So that** the portfolio complies fully with WCAG 2.1 AA requirements.

---

## Scope

### In Scope
- Verification of text color `#0f172a` (slate-900) and `#334155` (slate-700) on `#f8fafc` background.
- Contrast ratio calculation >= 4.5:1 for body copy and >= 3.0:1 for headings.
- Badge borders and button focus rings having adequate contrast.

### Out of Scope
- WCAG AAA compliance (contrast >= 7.0:1).

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Contrast ratio validation for primary text in light mode
- **Given:** Portfolio is rendered in Light Mode
- **When:** Automated contrast checking analyzes body copy and headings
- **Then:** Normal body text achieves at least 4.5:1 contrast against `#f8fafc`, and headings achieve at least 7.0:1 contrast.

---

## Related Functional Requirements
- **FR-007:** WCAG 2.1 AA Light-Mode Contrast Compliance.
