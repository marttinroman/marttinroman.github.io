# Implementation Plan: STORY-PORT-21 - One-Click Email Copy to Clipboard with Toast Notification

## Overview

Implement the `#copy-email-btn` button with dual clipboard copy logic (modern Clipboard API with fallback textarea execution) and animated floating feedback toast `#toast`.

**Acceptance Criteria to Meet:**
- Clicking button writes `marttinroman@gmail.com` to clipboard.
- Visual toast `#toast` appears with `opacity-100`.
- Toast auto-dismisses after 3000ms.
- Fallback ensures toast fires even if modern clipboard API throws permission errors.

---

## Technical Approach

```javascript
function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

function copyEmail() {
  const email = "marttinroman@gmail.com";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email)
      .then(() => showToast())
      .catch(() => {
        fallbackCopyText(email);
        showToast();
      });
  } else {
    fallbackCopyText(email);
    showToast();
  }
}
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-21-01:** Trigger Feedback Toast | Show toast on button click with 3s timer | `copyEmail()` and `showToast()` in `index.html` |
| **TC-PORT-21-02:** Copy Exact Email String | Place `'marttinroman@gmail.com'` in clipboard | Clipboard API / fallback textarea |

---

## Verification
- Verified by Playwright ATC: `PortfolioPage.triggerEmailCopy()` in `tests/e2e/portfolio.spec.ts`.
