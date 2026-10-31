# Persist Language Preference in LocalStorage

**Jira Key:** PORT-3
**Epic:** EPIC-PORT-1 (Internationalization & Localization)
**Priority:** High
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** returning user or recruiter revisiting the portfolio,  
**I want to** have my previously selected language automatically restored,  
**So that** I don't have to re-toggle the language every time I open or refresh the portfolio.

---

## Scope

### In Scope
- Writing `'portfolio_lang'` to `localStorage` upon language toggle.
- Reading `'portfolio_lang'` on page initialization before DOM display.
- Graceful error boundary if `localStorage` is disabled (e.g. private mode, cookies blocked).

### Out of Scope
- Server-side cookie-based persistence.
- Cloud database user profile persistence.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Spanish preference persists across page reloads (Happy Path)
- **Given:** A visitor has switched the language to Spanish (`'portfolio_lang'` set to `'es'`)
- **When:** The visitor refreshes the browser page (F5 / hard reload)
- **Then:** The page immediately renders in Spanish without flashing English first.

### Scenario 2: Private browsing with localStorage restricted (Edge Case)
- **Given:** A visitor has disabled localStorage or is in strict private mode throwing `SecurityError`
- **When:** The visitor clicks `#lang-toggle`
- **Then:** The in-memory DOM translation still executes successfully without an unhandled JavaScript exception breaking the UI.

---

## Related Functional Requirements
- **FR-003:** LocalStorage Language State Persistence.
