# Persist Theme Mode in LocalStorage & FOUC Prevention

**Jira Key:** PORT-8
**Epic:** EPIC-PORT-2 (Adaptive Design System & Theming)
**Priority:** Critical
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** visitor navigating or refreshing the portfolio,  
**I want my** chosen theme mode to persist across browser reloads without any blinding white or dark flash,  
**So that** my eyes experience a stable, smooth, and high-performance visual transition.

---

## Scope

### In Scope
- Writing `'portfolio_theme'` to `localStorage` on toggle.
- Inlined, render-blocking `<script>` in the document `<head>` to evaluate stored theme prior to DOM paint.
- Immediate class assignment to `document.documentElement` before CSS parsing.

### Out of Scope
- Cookie or HTTP header based server-rendered theming.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Dark theme persists across page reload without FOUC (Happy Path)
- **Given:** Visitor has selected Dark Mode (`'portfolio_theme' = 'dark'`)
- **When:** Visitor reloads the page
- **Then:** The `<html>` element has class `'dark'` immediately upon first paint; no white flash occurs (FOUC = 0ms).

### Scenario 2: Light theme persists across page reload without FOUC (Happy Path)
- **Given:** Visitor has selected Light Mode (`'portfolio_theme' = 'light'`)
- **When:** Visitor reloads the page
- **Then:** The `<html>` element lacks class `'dark'` immediately upon first paint; no dark flash occurs.

---

## Related Functional Requirements
- **FR-008:** LocalStorage Theme Persistence & FOUC Prevention.
