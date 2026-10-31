# Implementation Plan: STORY-PORT-7 - WCAG 2.1 AA Light-Mode Contrast Compliance

## Overview

Configure and verify light mode color tokens to ensure all body text and headings achieve contrast ratios exceeding 4.5:1 (normal text) and 3.0:1 (large text) against `#f8fafc`.

**Acceptance Criteria to Meet:**
- Normal text in light mode uses `text-slate-900` (#0f172a, contrast 15.6:1) or `text-slate-700` (#334155, contrast 9.5:1).
- Muted secondary text uses `text-slate-600` (#475569, contrast 5.8:1).
- Card borders use `border-slate-200` (#e2e8f0) with clear surface boundaries.

---

## Technical Approach

- Configure Tailwind CSS utility classes on all typography:
  - Headings: `text-slate-900 dark:text-white`
  - Body: `text-slate-700 dark:text-slate-300`
  - Subtitles/Badges: `text-slate-600 dark:text-slate-400`
- Zero text elements styled below the 4.5:1 threshold.

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-7-01:** WCAG AA Contrast Compliance | Enforce minimum 4.5:1 ratio tokens in light theme | All typography classes in `index.html` |

---

## Verification
- Verified by automated accessibility audits (Lighthouse / axe-core).
