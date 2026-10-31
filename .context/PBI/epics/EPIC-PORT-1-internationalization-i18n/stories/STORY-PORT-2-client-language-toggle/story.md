# Client-Side Language Toggle Button (EN/ES)

**Jira Key:** PORT-2
**Epic:** EPIC-PORT-1 (Internationalization & Localization)
**Priority:** Critical
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** bilingual visitor or Latin American hiring leader,  
**I want to** click a dedicated language toggle button in the header,  
**So that** the entire portfolio switches instantly between English and Spanish without a page reload.

---

## Scope

### In Scope
- Interactive button `#lang-toggle` in header navigation.
- Dynamic button label reflecting target switch (`"ES"` when English active, `"EN"` when Spanish active).
- Immediate client-side DOM text mutation of 41 `[data-i18n]` nodes.
- Synchronous update of `document.documentElement.lang`.

### Out of Scope
- Full page reload or server-rendered template fetching.
- Multi-language URL routing.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Toggle from English to Spanish (Happy Path)
- **Given:** The portfolio is currently rendered in English with button displaying `"ES"`
- **When:** The user clicks `#lang-toggle`
- **Then:** The HTML `lang` updates to `"es"`, the toggle label updates to `"EN"`, and all `[data-i18n]` elements render Spanish copy in < 50ms.

### Scenario 2: Toggle from Spanish back to English (Bidirectional Happy Path)
- **Given:** The portfolio is currently rendered in Spanish with button displaying `"EN"`
- **When:** The user clicks `#lang-toggle`
- **Then:** The HTML `lang` updates to `"en"`, the toggle label updates to `"ES"`, and all `[data-i18n]` elements return to English copy.

### Scenario 3: Rapid multiple toggling stability (Edge Case)
- **Given:** The portfolio is active
- **When:** The user rapidly clicks `#lang-toggle` 5 consecutive times within 1 second
- **Then:** The DOM maintains exact state synchronization without UI race conditions or flickering.

---

## Related Functional Requirements
- **FR-002:** Client-Side Language Toggle Action.
