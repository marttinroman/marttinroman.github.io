# Fluid Layout Adaptability for Translated Copy

**Jira Key:** PORT-4
**Epic:** EPIC-PORT-1 (Internationalization & Localization)
**Priority:** Medium
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** mobile recruiter reading the portfolio on a smartphone,  
**I want to** ensure that longer Spanish copy adapts fluidly into all cards and badges without clipping,  
**So that** readability, visual harmony, and WCAG accessibility standards remain uncompromised.

---

## Scope

### In Scope
- CSS auto-sizing, word-wrapping, and flex-wrap across cards and badges.
- Prevention of horizontal scrolling (`overflow-x: hidden`).
- Viewport testing from 320px (iPhone SE small) to 1440px (Desktop Ultrawide).

### Out of Scope
- Font-size auto-reduction scripts (prefer pure responsive CSS).

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Spanish translation does not cause horizontal layout overflow (Happy Path)
- **Given:** Viewport is set to mobile size (375x667)
- **When:** User switches to Spanish
- **Then:** `document.documentElement.scrollWidth <= document.documentElement.clientWidth`, and no horizontal scrollbar is present.

### Scenario 2: Project cards maintain equalized heights or graceful flow
- **Given:** The 4 featured project cards are displayed in Spanish
- **When:** Viewed in a 2-column or 1-column grid
- **Then:** Action links (`Ver repo ->`) remain pinned at card footers without text collision.

---

## Related Functional Requirements
- **FR-004:** Non-Breaking Responsive Layout for Translations.
