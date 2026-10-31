# Implementation Plan: STORY-PORT-5 - Auto-Detect Operating System Color Scheme

## Overview

Inspect visitor operating system appearance via `window.matchMedia('(prefers-color-scheme: dark)')` when no existing choice is saved in `localStorage`.

**Acceptance Criteria to Meet:**
- Visitors with OS dark mode see the dark theme immediately.
- Visitors with OS light mode see the light theme immediately.

---

## Technical Approach

```javascript
const osPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = localStorage.getItem('portfolio_theme') || (osPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-5-01:** Detect OS Dark Mode | `window.matchMedia('(prefers-color-scheme: dark)')` check | `<head>` inline script in `index.html` |
| **TC-PORT-5-02:** Detect OS Light Mode | Fallback to light when media query does not match | `<head>` inline script in `index.html` |

---

## Verification
- Verified by Playwright browser emulation: `page.emulateMedia({ colorScheme: 'dark' })`.
