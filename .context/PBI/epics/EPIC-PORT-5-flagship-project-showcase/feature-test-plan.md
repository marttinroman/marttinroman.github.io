# Feature Test Plan: EPIC-PORT-5 - Flagship Project Showcase

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-5  
**Status:** Approved  

---

## 📋 Business Context Analysis

### Business Value
The project showcase is the primary value driver of the entire portfolio. While senior titles attract initial interest, real repository code and tangible testing architectures close job offers and senior contracts.

**Key Value Proposition:**
- **For Technical Reviewers (Alex Mercer - Staff QA):** Instant verification that claims of "autonomous testing" and "AI TestOps" are backed by structured TypeScript/Python codebases, not superficial marketing buzzwords.
- **For Engineering Directors:** Evidence of scalable testing architecture reducing release cycles and maintaining $0 infrastructure cost.

**Success Metrics (KPIs):**
- Outbound click-through rate to GitHub repos: > 45% of technical visitors.
- 0 broken or dead links (100% 200 OK HTTP responses from GitHub).
- Tab-nabbing security compliance: 100% of outbound links use `rel="noopener noreferrer"`.

---

## 🏗️ Technical Architecture Analysis

### Architecture Components Involved
- Flagship container: `section#projects` with gradient card styling.
- 3 Validation Layer components:
  1. Playwright E2E UI Layer.
  2. API Contract & Schema Layer.
  3. AI RAG & Vector Evaluation Layer.
- 4 Featured Project Cards in grid layout.
- Outbound anchor tags with verified HTTPS URLs.

---

## 🚨 Risk Analysis

### Technical Risks

#### Risk 1: Broken or dead outbound links to GitHub repositories
- **Impact:** Critical (Destroys credibility instantly)
- **Likelihood:** Low (Repositories validated and created)
- **Mitigation Strategy:** Automated Playwright E2E test scanning all 5 repository URLs and validating HTTP status.
- **Test Coverage Required:** `PortfolioPage.verifyOutboundRepositories()` in CI/CD.

#### Risk 2: Tab-Nabbing / Reverse Tabnabbing Security Flaw
- **Impact:** High (External page could hijack parent window if `rel` attribute is missing)
- **Likelihood:** Low
- **Mitigation Strategy:** Strict assertion verifying `rel="noopener noreferrer"` and `target="_blank"`.

---

## 🎯 Test Strategy

### Test Scope
- Verification of all 5 repository links.
- Verification of security attributes (`target="_blank"`, `rel="noopener noreferrer"`).
- Verification of 3-layer architecture cards content and i18n binding.
- Layout responsiveness (Grid 2-column on desktop, 1-column on mobile).

---

## 📊 Test Cases Summary by Story

### STORY-PORT-15: Flagship Highlight Container & Production Quality Badge
- **Complexity:** Low
- **Estimated Test Cases:** 2 (Container rendered with visual elevation; production badge present).

### STORY-PORT-16: 3-Layer Validation Architecture Interactive Breakdown
- **Complexity:** Medium
- **Estimated Test Cases:** 3 (All 3 layers rendered; badges for Playwright, API, and RAG present; bilingual copy intact).

### STORY-PORT-17: Outbound Secure Navigation to Dedicated Repositories
- **Complexity:** High
- **Estimated Test Cases:** 5 (One test per repository URL, checking href, target, and security rel attributes).

### STORY-PORT-18: Business ROI & $0 Infrastructure Cost Banner
- **Complexity:** Low
- **Estimated Test Cases:** 2 (ROI metrics present and legible in both theme modes).

---

## ✅ Entry/Exit Criteria

### Entry Criteria
- All 5 repositories created and public on GitHub.
- Portfolio cards pointing to correct GitHub URLs.

### Exit Criteria
- 100% of repository link tests passing.
- 0 security attribute defects.
