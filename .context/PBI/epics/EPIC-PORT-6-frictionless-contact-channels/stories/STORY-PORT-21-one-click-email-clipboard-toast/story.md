# One-Click Email Copy to Clipboard with Toast Notification

**Jira Key:** PORT-21
**Epic:** EPIC-PORT-6 (Frictionless Contact & Conversion Channels)
**Priority:** Critical
**Story Points:** 2
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** recruiter using browser-based webmail (Gmail/Outlook Web),  
**I want to** click a dedicated "Copy Email" button and receive instant visual confirmation,  
**So that** Marttin's email is copied to my clipboard ready to be pasted into a new compose tab.

---

## Scope

### In Scope
- Interactive button `#copy-email-btn`.
- Invocation of `navigator.clipboard.writeText('marttinroman@gmail.com')`.
- Fallback textarea copy mechanism for restricted browser environments.
- Toast element `#toast` becoming visible (`opacity-100`) for 3000ms.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Copying email displays feedback toast (Happy Path)
- **Given:** Visitor is in the hero or contact section
- **When:** Visitor clicks `#copy-email-btn`
- **Then:** Marttin's email (`marttinroman@gmail.com`) is placed in the system clipboard and `#toast` becomes visible with `opacity-100`.

### Scenario 2: Toast automatically dismisses after 3 seconds
- **Given:** Toast is currently displayed on screen
- **When:** 3000ms elapse
- **Then:** Toast transitions back to `opacity-0` and pointer-events disabled.

---

## Related Functional Requirements
- **FR-021:** One-Click Email Copy to Clipboard with Toast Notification.
