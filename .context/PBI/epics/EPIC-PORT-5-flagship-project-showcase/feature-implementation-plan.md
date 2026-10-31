# Feature Implementation Plan: EPIC-PORT-5 - Flagship Project Showcase

## Overview

This feature implements the flagship project presentation and repository grid. It spotlights the **Autonomous QA & AI-TestOps Engine** alongside 4 companion repositories, highlighting the 3-layer validation architecture (Playwright E2E, API Contract Testing, and AI RAG Evaluation), business ROI metrics, and secured outbound repository links.

**Scope (Stories Included):**
- **STORY-PORT-15:** Flagship Highlight Container & Production Quality Badge
- **STORY-PORT-16:** 3-Layer Validation Architecture Interactive Breakdown
- **STORY-PORT-17:** Outbound Secure Navigation to Dedicated Repositories
- **STORY-PORT-18:** Business ROI & $0 Infrastructure Cost Banner

**Technical Stack:**
- **Frontend:** Semantic HTML5 (`<section id="projects">`, `<article>`), Tailwind CSS.
- **External Repositories:** 5 public GitHub repositories created from template `marttinroman/ai-driven-project-starter`.
- **Security:** Strict HTML anchor attributes (`rel="noopener noreferrer"` and `target="_blank"`).

---

## Technical Decisions

### Decision 1: Verified Public GitHub Repositories vs Static Code Snippets
**Options considered:**
- A) Show only static inline code syntax blocks in the portfolio.
- B) Create and link 5 live, fully-documented GitHub public repositories.

**Chosen:** Option B (Live GitHub public repositories).

**Reasoning:**
- ✅ **Undeniable Senior Proof:** Recruiters and Staff Engineers can inspect real commit histories, GitHub Actions workflows, linting setups, and architecture docs.
- ✅ **Template Reusability:** Built from `marttinroman/ai-driven-project-starter`, reinforcing standard engineering practices.

### Decision 2: Anti-Reverse Tabnabbing Anchor Security
**Options considered:**
- A) Standard `target="_blank"`.
- B) `target="_blank"` with explicit `rel="noopener noreferrer"`.

**Chosen:** Option B.

**Reasoning:**
- ✅ Eliminates `window.opener` exploitation risks where an external page could manipulate the portfolio's browsing context.

---

## Types & Type Safety

```typescript
export interface ProjectRepository {
  title: string;
  descriptionKey: string;
  repoUrl: string;
  technologies: string[];
  isFlagship?: boolean;
}

export interface ValidationLayer {
  layerNumber: 1 | 2 | 3;
  nameKey: string;
  specKey: string;
  tools: string[];
}
```

---

## UI/UX Design Strategy

- **Flagship Card (`autonomous-qa-engine`):** Elevated with a subtle border gradient (`border-blue-500/40 bg-slate-900/40`), glowing badge ("Flagship Project"), and prominent CTA.
- **3-Layer Architecture Cards:** Clean 3-column sub-grid outlining Playwright, OpenAPI, and RAG evaluation.
- **Companion Repository Grid:** 2x2 grid on desktop, 1-column on mobile.
- **Action Buttons:** Consistent terminal-styled `"Ver repo ->"` / `"View repo ->"` links.

---

## Implementation Steps & Verification

1. **Step 1:** Create and push 5 dedicated GitHub repositories under account `marttinroman`.
2. **Step 2:** Structure the flagship container in `index.html` with responsive Tailwind classes.
3. **Step 3:** Insert the 3-layer architecture cards with `data-i18n` localization tags.
4. **Step 4:** Render the 4 companion project cards with verified URLs and security attributes.
5. **Step 5 (Verification):** Run Playwright E2E test `should feature verified and secured links to all 5 GitHub repositories`.
