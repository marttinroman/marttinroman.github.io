# Feature Test Plan: EPIC-PORT-2 - Adaptive Design System & Theming

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-2  
**Status:** Approved  

---

## 📋 Business Context Analysis

### Business Value
Theme flexibility is a hallmark of elite frontend development. Providing an accessible light theme alongside a polished developer dark theme ensures candidates pass strict accessibility compliance audits (WCAG AA) while keeping high visual appeal.

**Key Value Proposition:**
- **Recruiters & Engineers:** Comfortable viewing under any environmental lighting conditions (low-light developer setups vs bright office monitors).
- **Executive Leadership:** Signals deep attention to detail, accessibility compliance, and user empathy.

**Success Metrics (KPIs):**
- FOUC duration: 0ms.
- Toggle response time: < 16ms (1 frame).
- WCAG 2.1 AA Compliance Score: 100% on Lighthouse Accessibility.

---

## 🏗️ Technical Architecture Analysis

### Architecture Components Involved
- Button selector: `#theme-toggle`.
- Icons: `#theme-icon-sun` (visible in dark mode), `#theme-icon-moon` (visible in light mode).
- Target Element: `document.documentElement` (`class="dark"`).
- Storage Key: `localStorage.getItem('portfolio_theme')`.
- Head Bootstrap: Blocking inline `<script>` in `<head>`.

**Data Flow:**
```
[User Click #theme-toggle]
          ↓
[Toggle 'dark' class on <html>]
          ↓
[Toggle visibility between Sun and Moon SVG icons]
          ↓
[Save state to localStorage: 'dark' | 'light']
```

---

## 🚨 Risk Analysis

### Technical Risks

#### Risk 1: Flash of Unstyled Content (FOUC)
- **Impact:** High (Visual flickering reduces perceived production quality)
- **Likelihood:** Low with inline `<head>` script.
- **Mitigation Strategy:** Execute theme detection script synchronously in `<head>` before body is rendered.
- **Test Coverage Required:** Playwright evaluation checking `document.documentElement.className` prior to body load event.

#### Risk 2: Low contrast in Light Mode
- **Impact:** High (Accessibility failure, unreadable text)
- **Likelihood:** Low (Tailwind palette tested).
- **Mitigation Strategy:** Automated axe-core / Lighthouse audit on both dark and light modes.

---

## 🎯 Test Strategy

### Test Scope
- OS preference emulation (`page.emulateMedia({ colorScheme: 'dark' | 'light' })`).
- Toggle button interaction and bidirectional switching.
- Persistence across reloads.
- Visual contrast compliance.

---

## 📊 Test Cases Summary by Story

### STORY-PORT-5: Auto-Detect Operating System Color Scheme
- **Complexity:** Low
- **Estimated Test Cases:** 2 (OS dark emulation -> dark class present; OS light emulation -> dark class absent).

### STORY-PORT-6: Header Theme Switcher Toggle (Sun/Moon)
- **Complexity:** Low
- **Estimated Test Cases:** 3 (Click toggles class, switches icon, updates aria-label).

### STORY-PORT-7: WCAG 2.1 AA Light-Mode Contrast Compliance
- **Complexity:** Medium
- **Estimated Test Cases:** 2 (Lighthouse/axe scan on light mode and dark mode).

### STORY-PORT-8: Persist Theme Mode in LocalStorage & FOUC Prevention
- **Complexity:** Low
- **Estimated Test Cases:** 3 (Reload retains theme, clearing storage reverts to OS, zero FOUC).

---

## ✅ Entry/Exit Criteria

### Entry Criteria
- Header theme switcher present with SVG icons.
- Inline `<head>` script deployed.

### Exit Criteria
- 100% passing Playwright theme toggle tests.
- 0 accessibility violations in Lighthouse.
