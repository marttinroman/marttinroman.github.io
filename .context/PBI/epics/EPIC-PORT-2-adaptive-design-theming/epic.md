# Adaptive Design System & Theming (Dark/Light Mode)

**Jira Key:** PORT-2
**Status:** DONE
**Priority:** CRITICAL
**Phase:** Foundation

---

## Epic Description

Delivers a high-contrast, WCAG 2.1 AA compliant adaptive theming engine that automatically detects the visitor's operating system preference (`prefers-color-scheme`), provides an instant header toggle switch (Sun/Moon icon), persists the selection in `localStorage`, and prevents any Flash of Unstyled Content (FOUC) through early `<head>` script execution.

**Business Value:**
Guarantees optimal reading comfort for engineering hiring managers during night screening sessions (Dark Mode) while satisfying enterprise accessibility officers and daytime recruiters (Light Mode). Demonstrates mastery of CSS custom properties, system preference listening, and front-end performance ergonomics.

---

## User Stories

1. **PORT-5** - As a visitor, I want the portfolio to automatically adopt my operating system's color scheme (Dark or Light) on first visit so that my eyes feel comfortable immediately.
2. **PORT-6** - As a visitor, I want a header toggle button with dynamic sun/moon icons so that I can switch theme mode on demand.
3. **PORT-7** - As a recruiter reviewing under bright daylight, I want the light mode theme to maintain strict WCAG 2.1 AA contrast ratios so that typography is effortlessly readable.
4. **PORT-8** - As a returning visitor, I want my theme choice persisted in localStorage and loaded without FOUC so that the page doesn't flash brightly during page transitions.

---

## Scope

### In Scope
- CSS theme tokens using Tailwind `dark:` classes and root body background/text utilities.
- Immediate header toggle button `#theme-toggle` with dual SVG icons (Sun `#theme-icon-sun` / Moon `#theme-icon-moon`).
- Inlined `<head>` blocking script checking `localStorage.theme` and `window.matchMedia('(prefers-color-scheme: dark)')`.
- Class mutation on `document.documentElement.classList` (`'dark'`).
- WCAG AA compliant color palette (#0b0f19 background with #94a3b8 text for dark; #f8fafc background with #0f172a text for light).

### Out of Scope
- Multiple custom color themes (e.g. Solarized, High-contrast Neon).

---

## Acceptance Criteria (Epic Level)

1. ✅ First visit respects `prefers-color-scheme: dark` or `light` when no storage exists.
2. ✅ Clicking `#theme-toggle` toggles `dark` class on `<html>` instantly.
3. ✅ Sun icon displays in dark mode (offering light); Moon icon displays in light mode (offering dark).
4. ✅ Hard refresh preserves user's theme selection without a white or dark flash (FOUC time = 0ms).
5. ✅ Contrast ratio of all text against backgrounds meets or exceeds 4.5:1 for normal text and 3:1 for large text.

---

## Related Functional Requirements

- **FR-005:** Operating System Color Scheme Auto-Detection.
- **FR-006:** Header Theme Switcher Toggle.
- **FR-007:** WCAG 2.1 AA Light-Mode Contrast Compliance.
- **FR-008:** LocalStorage Theme Persistence & FOUC Prevention.

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

- The inline `<head>` script must run synchronously before body rendering to prevent FOUC.
- Use `classList.toggle('dark')` for atomic state transition.
- Ensure toggle has proper `aria-label` updated dynamically.

---

## Dependencies

### External Dependencies
None ($0 external dependencies).

### Internal Dependencies
None.

### Blocks
- EPIC-PORT-003, EPIC-PORT-004, EPIC-PORT-005 (All UI components consume theme classes).
