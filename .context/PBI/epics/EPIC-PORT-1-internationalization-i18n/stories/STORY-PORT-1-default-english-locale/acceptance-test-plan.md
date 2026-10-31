# Acceptance Test Plan: STORY-PORT-1 - Default English Locale on First Load

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-1  
**Epic:** EPIC-PORT-1 - Internationalization & Localization (i18n)  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision

### Step 0.0: Check Veto Conditions
- **SKIP Veto:** None (Critical international hiring experience, user-facing UI).
- **REQUIRE Veto:** External candidate evaluation / Recruiter conversion funnel.
- **Triage Result:** **REQUIRE TESTING** -> Full Testing workflow.

### Step 0.1: Risk Score
- New feature: +3
- User-facing: +2
- Explicit ACs: +2
- High priority: +1
- **Total Score:** 8 (HIGH RISK) -> Extended edge case coverage.

### Step 0.2: Data Feasibility Check
- Precondition: Clean browser context without cookies/localStorage.
- Pattern: Generate (Playwright fresh browser context).

---

## 📋 Step 1: Critical Analysis

### Business Context of This Story
- **Primary Persona:** Sarah Jenkins (US Senior Tech Recruiter).
- **Business Value:** Converts US recruiter visits into interviews by presenting instant, high-polish English communication.
- **Related User Journey:** Journey 1 - Sarah's initial 30-second screening.

### Technical Context of This Story
- **Frontend Components:** `<html lang="en">`, `#lang-toggle`, `[data-i18n]` text nodes.
- **Storage:** `localStorage.getItem('portfolio_lang')`.

---

## 🚨 Step 2: Story Quality Analysis
- **Ambiguities Identified:** None. Clear deterministic behavior: clean context = English.
- **Edge Cases Identified:** LocalStorage contains corrupted/unsupported string (`"xyz"`). Fallback must safely resolve to `'en'`.
- **Testability Validation:** ✅ 100% testable via Playwright DOM assertions.

---

## ✅ Step 3: Refined Acceptance Criteria

### Scenario 1: Clean First Visit Loads English
- **Given:** A fresh browser session with no `portfolio_lang` in localStorage.
- **When:** User navigates to `/`.
- **Then:** 
  - `document.documentElement.lang` === `'en'`
  - `#lang-toggle` innerText === `'ES'`
  - `[data-i18n="hero_availability"]` contains `"Available for remote & international roles"`

### Scenario 2: Corrupted LocalStorage Fallback
- **Given:** Browser context has `localStorage.setItem('portfolio_lang', 'invalid_locale')`.
- **When:** Page is navigated to `/`.
- **Then:** Locale safely falls back to `'en'`.

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should load english locale when no previous session exists**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Browser context clear of all storage.
- **Test Steps:**
  1. Navigate to `/`.
  2. Inspect `document.documentElement.getAttribute('lang')`.
  3. Verify text content of availability badge.
- **Expected Result:**
  - `lang` is `"en"`.
  - Badge text is `"Available for remote & international roles"`.
  - Toggle button text is `"ES"`.

#### **Should fallback to english when stored locale is invalid**
- **Related Scenario:** Scenario 2
- **Type:** Negative / Edge | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Set `window.localStorage.setItem('portfolio_lang', 'unsupported_lang')`.
- **Test Steps:**
  1. Reload page.
  2. Verify active language defaults to `"en"`.
- **Expected Result:** Application renders English without uncaught JavaScript exceptions.

---

## 📊 Edge Cases Summary
| Edge Case | Covered in Original Story? | Added to Refined AC? | Test Case | Priority |
| :--- | :---: | :---: | :---: | :---: |
| Corrupted localStorage key | ❌ No | ✅ Yes (Scenario 2) | TC-PORT-1-02 | High |
| Empty string in localStorage | ❌ No | ✅ Yes | TC-PORT-1-03 | Medium |
