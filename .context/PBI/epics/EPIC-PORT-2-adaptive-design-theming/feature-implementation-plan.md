# Feature Implementation Plan: EPIC-PORT-2 - Adaptive Design System & Theming

## Overview

This feature delivers an adaptive, high-contrast theming system supporting Dark and Light modes. It detects the operating system scheme (`prefers-color-scheme`), provides an instant header toggle switch with Sun and Moon icons, prevents Flash of Unstyled Content (FOUC), and complies with WCAG 2.1 AA accessibility contrast rules.

**Scope (Stories Included):**
- **STORY-PORT-5:** Auto-Detect Operating System Color Scheme
- **STORY-PORT-6:** Header Theme Switcher Toggle (Sun/Moon)
- **STORY-PORT-7:** WCAG 2.1 AA Light-Mode Contrast Compliance
- **STORY-PORT-8:** Persist Theme Mode in LocalStorage & FOUC Prevention

**Technical Stack:**
- **CSS Engine:** Tailwind CSS with `darkMode: 'class'`.
- **Icons:** Inline SVG Lucide-style Sun and Moon icons.
- **Storage:** `localStorage.getItem('portfolio_theme')`.
- **Runtime:** Synchronous inline `<script>` in `<head>`.

---

## Technical Decisions

### Decision 1: Class-Based Theming (`html.dark`) vs CSS Attribute Selector
**Options considered:**
- A) Class-based theming (`<html class="dark">`).
- B) Custom data attribute (`<html data-theme="dark">`).

**Chosen:** Option A (Class-based theming).

**Reasoning:**
- ✅ Native Tailwind CSS `darkMode: 'class'` support.
- ✅ Allows simple, highly optimized utility syntax (`dark:bg-slate-900`, `dark:text-white`).

### Decision 2: Render-Blocking Early `<head>` Script to Prevent FOUC
**Options considered:**
- A) Client script deferred to `DOMContentLoaded`.
- B) Synchronous inlined script placed in the document `<head>`.

**Chosen:** Option B (Synchronous inlined script).

**Reasoning:**
- ✅ **0ms FOUC:** The theme class is applied before the browser parses the `<body>`, ensuring the first rendered frame matches the user's preference without white/dark flashes.
- ❌ **Trade-off:** Tiny script execution (~0.5ms) during `<head>` parsing, well within the sub-second LCP budget.

---

## Types & Type Safety

```typescript
export type ThemeMode = 'dark' | 'light';

export interface ThemeController {
  currentTheme: ThemeMode;
  toggleTheme(): void;
  applyTheme(theme: ThemeMode): void;
  getSystemTheme(): ThemeMode;
}
```

---

## UI/UX Design Strategy

- **Dark Mode Palette:**
  - Background: `#0b0f19` (Slate 950 deep midnight)
  - Surface: `#111827` (Gray 900)
  - Card Border: `#1e293b` (Slate 800)
  - Text Primary: `#f8fafc` (Slate 50)
  - Text Muted: `#94a3b8` (Slate 400)
- **Light Mode Palette:**
  - Background: `#f8fafc` (Slate 50)
  - Surface: `#ffffff` (Pure white)
  - Card Border: `#e2e8f0` (Slate 200)
  - Text Primary: `#0f172a` (Slate 900)
  - Text Muted: `#475569` (Slate 600)
- **Contrast Ratios:** Exceeds 4.5:1 on all body text; exceeds 7:1 on headings.

---

## Implementation Steps & Verification

1. **Step 1:** Add early detection script in `<head>`:
   ```javascript
   if (localStorage.portfolio_theme === 'dark' || (!('portfolio_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark');
   } else {
     document.documentElement.classList.remove('dark');
   }
   ```
2. **Step 2:** Add `#theme-toggle` button with `#theme-icon-sun` and `#theme-icon-moon` SVG elements.
3. **Step 3:** Implement click event handler that inverts class, toggles SVG icon display, and writes to `localStorage`.
4. **Step 4 (Verification):** Run Playwright E2E test `should toggle dark and light mode correctly`.
