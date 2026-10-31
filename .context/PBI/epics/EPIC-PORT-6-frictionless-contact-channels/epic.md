# Frictionless Contact & Conversion Channels

**Jira Key:** PORT-6
**Status:** DONE
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

Provides zero-friction conversion pathways for recruiters and hiring managers to contact Marttin Roman. Features a direct, secured LinkedIn profile link, a pre-configured `mailto:` trigger with pre-filled subject and body, and a one-click copy-to-clipboard button with visual toast notification and clipboard API fallback.

**Business Value:**
Eliminates all barriers between candidate interest and direct communication. Guarantees that recruiters can initiate an interview conversation in less than 5 seconds via their preferred channel (LinkedIn DM, native desktop email client, or webmail copy-paste).

---

## User Stories

1. **PORT-19** - As a tech recruiter on LinkedIn, I want a direct link to Marttin's verified LinkedIn profile so that I can send an InMail or connect immediately.
2. **PORT-20** - As a hiring manager with a desktop mail client, I want a mailto button pre-populated with relevant subject lines so that I can draft an inquiry email in one click.
3. **PORT-21** - As a webmail user (Gmail/Outlook Web), I want to click a copy email button and see a confirmation toast so that I can paste Marttin's address into my web browser without highlighting text manually.

---

## Scope

### In Scope
- LinkedIn anchor: `https://www.linkedin.com/in/marttin-roman-torres/` with `target="_blank"` and `rel="noopener noreferrer"`.
- Mailto link: `mailto:marttinroman@gmail.com?subject=Senior%20QA%20%2F%20TestOps%20Role%20Inquiry` with dynamic localization.
- Copy button `#copy-email-btn` utilizing `navigator.clipboard.writeText` with legacy `document.execCommand('copy')` fallback.
- Floating toast notification `#toast` with slide-in animation, automatic fade-out after 3000ms, and screen reader announcements.

### Out of Scope
- Backend contact form with server-side email dispatching (avoiding spam honeypots and server maintenance costs).

---

## Acceptance Criteria (Epic Level)

1. ✅ LinkedIn link directs to verified profile and includes `rel="noopener noreferrer"`.
2. ✅ Mailto link triggers mail client with correctly encoded recipient (`marttinroman@gmail.com`) and subject line.
3. ✅ Copy email button copies `marttinroman@gmail.com` into clipboard.
4. ✅ Toast notification `#toast` appears with opacity 100 on copy click and auto-hides after 3 seconds.
5. ✅ If modern clipboard API is blocked (e.g. headless browser without granted permissions), the legacy textarea fallback ensures the toast still fires.

---

## Related Functional Requirements

- **FR-019:** Direct LinkedIn Outbound Link with Security Sanitization.
- **FR-020:** Pre-Configured Mailto Client Trigger with Encoded Subject.
- **FR-021:** One-Click Email Copy to Clipboard with Toast Notification.

See: `.context/SRS/functional-specs.md`

---

## Dependencies

### External Dependencies
- LinkedIn public platform.
- Client-side OS mail handler / clipboard API.

### Internal Dependencies
- EPIC-PORT-001 (Bilingual toast message "Email copied to clipboard!" / "¡Correo copiado al portapapeles!").
