# Acceptance Test Plan: STORY-PORT-2 - Client-Side Language Toggle Button (EN/ES)

**Date:** 2026-10-30  
**QA Engineer:** Marttin Roman (Lead QA & TestOps Architect)  
**Story Jira Key:** PORT-2  
**Epic:** EPIC-PORT-1 - Internationalization & Localization (i18n)  
**Status:** Approved  

---

## 🚦 Phase 0: Triage Decision

### Step 0.0: Check Veto Conditions
- **SKIP Veto:** None.
- **REQUIRE Veto:** Core user navigation and interaction.
- **Triage Result:** **REQUIRE TESTING** -> Full Testing workflow.

### Step 0.1: Risk Score
- User-facing: +2
- Explicit ACs: +2
- Multi-component impact: +1 (affects entire page DOM)
- High priority: +1
- **Total Score:** 6 (MEDIUM RISK) -> Standard full testing workflow.

---

## 📋 Step 1: Critical Analysis

### Business Context of This Story
- **Primary Persona:** Carlos Mendoza (VP of Engineering, LatAm).
- **Business Value:** Gives Latin American tech leaders instant comfort in their native language while witnessing first-hand clean front-end reactivity.
- **Related User Journey:** Journey 3 - LatAm engineering leader exploration.

### Technical Context of This Story
- Button selector: `#lang-toggle`
- DOM target: `[data-i18n]` (41 nodes)
- State function: `window.setLanguage(lang)`

---

## 🧪 Step 4: Test Design

### Test Outlines

#### **Should toggle language to spanish when clicked in english state**
- **Related Scenario:** Scenario 1
- **Type:** Positive | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Page loaded in English (`html[lang="en"]`).
- **Test Steps:**
  1. Click `#lang-toggle`.
  2. Inspect `document.documentElement.lang`.
  3. Verify availability badge text.
  4. Verify button text.
- **Expected Result:**
  - `lang` is `"es"`.
  - Availability badge is `"Disponible para roles remotos e internacionales"`.
  - Button text is `"EN"`.

#### **Should toggle language back to english when clicked in spanish state**
- **Related Scenario:** Scenario 2
- **Type:** Positive | **Priority:** Critical | **Test Level:** E2E
- **Preconditions:** Page currently in Spanish state.
- **Test Steps:**
  1. Click `#lang-toggle`.
  2. Verify `document.documentElement.lang` reverts to `"en"`.
  3. Verify button text reverts to `"ES"`.
- **Expected Result:** Instant reversion to English with no visual artifacts.

#### **Should maintain state consistency when clicked rapidly in succession**
- **Related Scenario:** Scenario 3
- **Type:** Boundary / Stress | **Priority:** Medium | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Test Steps:**
  1. Click `#lang-toggle` 4 consecutive times in rapid succession.
- **Expected Result:** Final state is `'en'`, button shows `'ES'`, and zero console errors occur.
