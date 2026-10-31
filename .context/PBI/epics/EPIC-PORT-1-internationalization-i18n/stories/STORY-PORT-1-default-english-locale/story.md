# Default English Locale on First Load

**Jira Key:** PORT-1
**Epic:** EPIC-PORT-1 (Internationalization & Localization)
**Priority:** Critical
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As an** international recruiter or engineering hiring manager,  
**I want to** see the portfolio rendered entirely in English upon my initial visit,  
**So that** I can assess Marttin's qualifications, technical stack, and leadership track record without friction.

---

## Scope

### In Scope
- Verification of default HTML `lang` attribute set to `"en"`.
- All `[data-i18n]` elements initial render with English dictionary values.
- Header language toggle button displays `"ES"` (offering switch to Spanish).
- Hero availability badge renders: `"Available for remote & international roles"`.

### Out of Scope
- Automatic geo-location IP redirection.
- Browser language header sniffing overriding the explicit English default.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Initial load without prior session defaults to English (Happy Path)
- **Given:** A visitor accesses the portfolio root URL for the first time with no prior localStorage data
- **When:** The document finishes initial parsing and DOM ready
- **Then:** The `<html>` element has attribute `lang="en"`, all hero and navigation copy is in English, and the toggle button displays `"ES"`.

### Scenario 2: Corrupted or unsupported locale in localStorage defaults to English (Error Recovery)
- **Given:** A visitor has an invalid locale value (e.g. `"fr"` or `""`) stored in `localStorage.getItem('portfolio_lang')`
- **When:** The portfolio loads
- **Then:** The system sanitizes the input, falls back to `"en"`, and renders English copy.

### Scenario 3: Screen reader accessibility confirmation
- **Given:** An assistive technology or screen reader inspects the page
- **When:** The document loads
- **Then:** The `html[lang="en"]` indicates English pronunciation rules and the `#lang-toggle` has an accessible label.

---

## Related Functional Requirements
- **FR-001:** English as Default Locale.
