# Header Theme Switcher Toggle (Sun/Moon)

**Jira Key:** PORT-6
**Epic:** EPIC-PORT-2 (Adaptive Design System & Theming)
**Priority:** Critical
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** visitor reviewing the portfolio,  
**I want to** toggle between dark and light modes via a prominent header button,  
**So that** I can customize my viewing experience according to my current room lighting.

---

## Scope

### In Scope
- Button `#theme-toggle` in top navigation bar.
- Icon swap between `#theme-icon-sun` and `#theme-icon-moon`.
- Immediate class toggle on `document.documentElement`.
- Synchronization of dynamic `aria-label` ("Switch to light mode" / "Switch to dark mode").

### Out of Scope
- Smooth gradual color transitions that add perceptible latency or drop below 60fps.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Toggle from Dark to Light Mode (Happy Path)
- **Given:** Portfolio is in Dark Mode with Sun icon displayed
- **When:** User clicks `#theme-toggle`
- **Then:** Class `'dark'` is removed from `<html>`, Moon icon becomes visible, and Sun icon is hidden.

### Scenario 2: Toggle from Light to Dark Mode (Bidirectional Happy Path)
- **Given:** Portfolio is in Light Mode with Moon icon displayed
- **When:** User clicks `#theme-toggle`
- **Then:** Class `'dark'` is added to `<html>`, Sun icon becomes visible, and Moon icon is hidden.

---

## Related Functional Requirements
- **FR-006:** Header Theme Switcher Toggle.
