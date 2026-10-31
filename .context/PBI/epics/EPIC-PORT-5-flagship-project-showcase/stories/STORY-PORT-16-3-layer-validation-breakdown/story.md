# 3-Layer Validation Architecture Interactive Breakdown

**Jira Key:** PORT-16
**Epic:** EPIC-PORT-5 (Flagship Project Showcase)
**Priority:** Critical
**Story Points:** 5
**Status:** Done
**Assignee:** Marttin Roman

---

## User Story

**As a** Staff SDET or technical evaluator,  
**I want to** review the technical breakdown of the 3 validation layers (Playwright UI, API JSON Schema, and AI Vector Validation),  
**So that** I can assess the depth and sophistication of Marttin's holistic test architecture.

---

## Scope

### In Scope
- Rendering 3 architectural layer cards:
  1. *Layer 1:* Playwright UI & E2E Validation (KATA pattern, cross-browser, atomic components).
  2. *Layer 2:* API Schema & Performance Contract Testing (OpenAPI 3.0, k6 load testing).
  3. *Layer 3:* RAG AI Output & Vector Similarity Validation (cosine similarity, hallucination guardrails).
- Bilingual text updates for all 3 layers via `[data-i18n]`.

### Out of Scope
- Interactive animated canvas diagrams in MVP.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: All 3 validation layers render with correct technical specifications
- **Given:** Visitor inspects the Autonomous QA Engine breakdown
- **When:** Section is rendered
- **Then:** Cards for Layer 1 (Playwright), Layer 2 (API Contracts), and Layer 3 (AI/RAG Validation) are clearly legible with respective badges.

### Scenario 2: Bilingual synchronization of architecture cards
- **Given:** Architecture cards are rendered in English
- **When:** Visitor toggles to Spanish
- **Then:** All 3 layer cards translate their titles, descriptions, and feature lists smoothly without clipping.

---

## Related Functional Requirements
- **FR-016:** 3-Layer Validation Architecture Interactive Breakdown.
