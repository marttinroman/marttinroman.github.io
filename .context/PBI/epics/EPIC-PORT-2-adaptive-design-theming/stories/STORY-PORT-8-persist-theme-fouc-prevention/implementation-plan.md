# Implementation Plan: STORY-PORT-8 - Persist Theme Mode in LocalStorage & FOUC Prevention

## Overview

Persist theme choice to `localStorage` under `'portfolio_theme'` and execute blocking `<head>` check to guarantee zero Flash of Unstyled Content (FOUC).

**Acceptance Criteria to Meet:**
- Theme changes immediately write `'portfolio_theme'` as `'dark'` or `'light'`.
- Page reload executes `<head>` script prior to body rendering.
- Initial paint matches user preference without visual flashing.

---

## Technical Approach

```html
<head>
  <script>
    (function() {
      var t = localStorage.getItem('portfolio_theme');
      var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (t === 'dark' || (!t && d)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  </script>
</head>
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-8-01:** Persist Theme Across Reload | Synchronous inline execution in `<head>` | Top of `<head>` in `index.html` |
| **TC-PORT-8-02:** Zero FOUC Frame Verification | Class applied before DOMContentLoaded | Inline `<script>` execution |

---

## Verification
- Verified by Playwright page reload evaluation.
