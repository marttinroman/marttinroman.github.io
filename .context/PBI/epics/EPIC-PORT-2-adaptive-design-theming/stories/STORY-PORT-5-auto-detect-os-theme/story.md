# Auto-Detect Operating System Color Scheme

**Jira Key:** PORT-5
**Epic:** EPIC-PORT-2 (Adaptive Design System & Theming)
**Priority:** High
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** visitor with a specific operating system appearance preference (Dark or Light),  
**I want the** portfolio to automatically match my OS scheme when I visit for the first time,  
**So that** the visual presentation integrates naturally into my working desktop environment.

---

## Scope

### In Scope
- Evaluation of `window.matchMedia('(prefers-color-scheme: dark)')` when no `localStorage` entry exists.
- Adding `'dark'` class to `<html>` if media query matches, or removing it if light.

### Out of Scope
- Dynamically listening to OS theme changes mid-session if user has explicitly toggled an override.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: OS dark mode preference honored on initial load (Happy Path)
- **Given:** Visitor OS is configured with dark mode active and no prior portfolio storage
- **When:** Visitor loads the portfolio
- **Then:** `document.documentElement` has class `'dark'`, background is `#0b0f19`, and Sun icon is displayed.

### Scenario 2: OS light mode preference honored on initial load (Happy Path)
- **Given:** Visitor OS is configured with light mode active and no prior portfolio storage
- **When:** Visitor loads the portfolio
- **Then:** `document.documentElement` does NOT have class `'dark'`, background is `#f8fafc`, and Moon icon is displayed.

---

## Related Functional Requirements
- **FR-005:** Operating System Color Scheme Auto-Detection.
