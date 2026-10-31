# Implementation Plan: STORY-PORT-6 - Header Theme Switcher Toggle (Sun/Moon)

## Overview

Implement header toggle button `#theme-toggle` that switches dark and light modes on click and updates the Sun/Moon SVG icons.

**Acceptance Criteria to Meet:**
- Clicking `#theme-toggle` inverts the `dark` class on `document.documentElement`.
- Sun icon `#theme-icon-sun` is visible when in dark mode (offering switch to light).
- Moon icon `#theme-icon-moon` is visible when in light mode (offering switch to dark).
- Toggle action completes in < 16ms without layout jumps.

---

## Technical Approach

```javascript
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('theme-icon-sun');
const moonIcon = document.getElementById('theme-icon-moon');

function updateThemeUI(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-6-01:** Toggle Dark and Light Modes | Click event toggles `dark` class on `<html>` | `#theme-toggle` event handler in `index.html` |
| **TC-PORT-6-02:** Swap Sun and Moon Icons | Show/hide SVG icons via `classList.toggle('hidden')` | `updateThemeUI()` in `index.html` |

---

## Verification
- Verified by Playwright ATC: `PortfolioPage.toggleTheme()` in `tests/e2e/portfolio.spec.ts`.
