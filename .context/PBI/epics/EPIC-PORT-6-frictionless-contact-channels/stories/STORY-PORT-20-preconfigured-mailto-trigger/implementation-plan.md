# Implementation Plan: STORY-PORT-20 - Pre-Configured Mailto Client Trigger with Encoded Subject

## Overview

Implement mailto anchor that triggers the visitor's default email client pre-populated with recipient and inquiry subject.

**Acceptance Criteria to Meet:**
- Href starts with `mailto:marttinroman@gmail.com`.
- Encoded subject: `Senior%20QA%20%2F%20TestOps%20Role%20Inquiry`.

---

## Technical Approach

```html
<a href="mailto:marttinroman@gmail.com?subject=Senior%20QA%20%2F%20TestOps%20Role%20Inquiry" 
   class="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
   <span data-i18n="hero_contact">Get in touch</span>
</a>
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-20-01:** Pre-configured Mailto URL | Formulate mailto with encoded subject | Hero CTA button in `index.html` |

---

## Verification
- Verified by Playwright locator `a[href^="mailto:"]`.
