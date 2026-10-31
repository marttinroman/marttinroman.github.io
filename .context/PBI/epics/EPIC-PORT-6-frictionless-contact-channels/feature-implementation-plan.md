# Feature Implementation Plan: EPIC-PORT-6 - Frictionless Contact & Conversion Channels

## Overview

This feature provides direct contact conversion pathways: verified LinkedIn profile link, pre-configured `mailto:` client trigger, and a one-click copy email button with visual toast confirmation and fallback copy logic.

**Scope (Stories Included):**
- **STORY-PORT-19:** Direct LinkedIn Outbound Link with Security Sanitization
- **STORY-PORT-20:** Pre-Configured Mailto Client Trigger with Encoded Subject
- **STORY-PORT-21:** One-Click Email Copy to Clipboard with Toast Notification

**Technical Stack:**
- **Frontend:** Semantic HTML5, Tailwind CSS.
- **APIs:** Asynchronous Clipboard API (`navigator.clipboard.writeText`), fallback `document.execCommand('copy')`.
- **UI Feedback:** Fixed floating toast notification `#toast`.

---

## Technical Decisions

### Decision 1: Direct Client Actions vs Server-Side Contact Form
**Options considered:**
- A) Serverless form submission (e.g. Formspree, Resend, custom backend).
- B) Client-side mailto trigger + one-click clipboard copy + LinkedIn direct message.

**Chosen:** Option B (Client-side actions).

**Reasoning:**
- ✅ **Zero Cost & Zero Maintenance:** Eliminates third-party form quotas, API keys, and spam bot vulnerabilities.
- ✅ **Higher Conversion:** Recruiters prefer emailing directly from their company email or sending an InMail on LinkedIn over anonymous web forms.

### Decision 2: Dual Clipboard Strategy (Modern API + ExecCommand Fallback)
**Options considered:**
- A) Only `navigator.clipboard.writeText`.
- B) Dual strategy with `document.execCommand('copy')` fallback in `catch` block.

**Chosen:** Option B.

**Reasoning:**
- ✅ Guarantees 100% reliability in headless test environments (CI/CD) and older or security-hardened mobile browsers where `navigator.clipboard` throws unhandled permission errors.

---

## Types & Type Safety

```typescript
export interface ContactChannels {
  linkedInUrl: string;
  email: string;
  mailtoSubject: string;
}
```

---

## UI/UX Design Strategy

- **Hero Action Row:** Primary CTA buttons ("Get in touch", "LinkedIn", "Copy Email").
- **Toast Notification:**
  - Element: `#toast`
  - Position: Fixed bottom right (`fixed bottom-6 right-6`).
  - Transition: `transition-all duration-300 ease-out transform`.
  - Timer: 3000ms automatic dismissal.

---

## Implementation Steps & Verification

1. **Step 1:** Add LinkedIn anchor with `rel="noopener noreferrer"`.
2. **Step 2:** Add mailto anchor with encoded subject query string.
3. **Step 3:** Add `#copy-email-btn` and implement `copyEmailToClipboard()` with fallback logic.
4. **Step 4:** Implement `showToast()` helper with `setTimeout(..., 3000)`.
5. **Step 5 (Verification):** Run Playwright E2E test `should trigger copy email feedback toast`.
