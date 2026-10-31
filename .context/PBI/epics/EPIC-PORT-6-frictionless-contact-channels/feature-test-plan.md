# Feature Test Plan: EPIC-PORT-6 - Frictionless Contact & Conversion Channels

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-6  
**Status:** Approved  

---

## 📋 Business Context Analysis

### Business Value
The contact channel is the literal conversion point of the portfolio funnel. If a recruiter has decided to reach out, any failure or delay in the contact mechanism means an immediate lost opportunity.

**Key Value Proposition:**
- **Recruiters & Clients:** Instant, effortless access to contact Marttin with zero friction or broken links.
- **Business/Career:** Maximum inbound lead capture.

**Success Metrics (KPIs):**
- Contact button click-to-success rate: 100%.
- Clipboard copy success rate across browsers: 100% (via dual API + execCommand strategy).

---

## 🏗️ Technical Architecture Analysis

### Architecture Components Involved
- Button: `#copy-email-btn`.
- Toast: `#toast`.
- Mailto Link: `a[href^="mailto:"]`.
- LinkedIn Link: `a[href*="linkedin.com"]`.
- Fallback function: `fallbackCopyText(email)`.

---

## 🚨 Risk Analysis

### Technical Risks

#### Risk 1: Headless browser or strict browser permission blocking `navigator.clipboard`
- **Impact:** High (Toast fails to appear, user thinks button is broken)
- **Likelihood:** High in automated headless testing and restrictive mobile browsers.
- **Mitigation Strategy:** Implement `document.execCommand('copy')` in `catch` block and always trigger the toast. In Playwright, pass `permissions: ['clipboard-read', 'clipboard-write']`.
- **Test Coverage Required:** `PortfolioPage.triggerEmailCopy()` asserting toast appears regardless of clipboard permission state.

---

## 🎯 Test Strategy

### Test Scope
- E2E testing of clipboard copy and toast presentation.
- URL structure and encoding verification for mailto and LinkedIn links.
- Verification of toast dismiss timer (3000ms).

---

## 📊 Test Cases Summary by Story

### STORY-PORT-19: Direct LinkedIn Outbound Link with Security Sanitization
- **Complexity:** Low
- **Estimated Test Cases:** 2 (URL correctness and `noopener noreferrer` attributes).

### STORY-PORT-20: Pre-Configured Mailto Client Trigger with Encoded Subject
- **Complexity:** Low
- **Estimated Test Cases:** 2 (Href begins with `mailto:marttinroman@gmail.com` and has URL-encoded subject).

### STORY-PORT-21: One-Click Email Copy to Clipboard with Toast Notification
- **Complexity:** Medium
- **Estimated Test Cases:** 3 (Click fires toast, toast has opacity-100, fallback executes if clipboard API fails).

---

## ✅ Entry/Exit Criteria

### Entry Criteria
- Contact elements implemented in DOM.

### Exit Criteria
- 100% passing automated tests on Chromium, Firefox, WebKit.
- 0 clipboard uncaught rejections.
