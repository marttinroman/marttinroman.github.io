# PRD — Executive Summary

> **Document:** Product Requirements Document (PRD) — Executive Summary  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Target Platform:** GitHub Pages (`marttinroman.github.io`)  
> **Last Updated:** 2026-10-30  

---

## 1. Problem Statement

Senior Quality Assurance and SDET professionals face a severe credibility and conversion bottleneck in international recruitment. Traditional resumes (PDFs) and LinkedIn profiles rely entirely on unverified text claims. They fail to convey mastery over complex automation architectures, test execution speed, parallelization, and the non-deterministic challenges introduced by Generative AI (LLMs and RAG systems). Technical decision-makers (CTOs, VPs of Engineering, and Tech Recruiters) spend excessive time screening hundreds of candidates without a reliable signal of real-world competence.

Simultaneously, engineering organizations wrestling with generative AI features lack automated quality governance. Traditional testing suites cannot catch subtle AI hallucinations or semantic drift, while commercial LLM evaluation tools impose prohibitive subscription and database maintenance costs. The lack of an authoritative, interactive showcase penalizes both the hiring organization (high vetting risk) and the high-caliber engineer (commoditization and lost high-value opportunities).

---

## 2. Solution Overview

The MVP delivers a high-performance, single-page bilingual web platform hosted on GitHub Pages with $0 monthly infrastructure cost. It functions as both a professional conversion engine for Marttin Roman and a verifiable architectural showcase for modern Quality Engineering and AI-TestOps.

### Core Features (MVP)
- **Bilingual International Positioning (i18n):** Flawless English as default for global technical recruiters, with instant client-side switching to Spanish, persisted across sessions without page reloads.
- **Adaptive Dark / Light Theme Engine:** High-aesthetic contrast modes powered by Tailwind CSS and client-side theme management, matching user system preferences by default.
- **Flagship Showcase — Autonomous QA & AI-TestOps Engine:** Dedicated interactive architectural walkthrough of a 3-layer continuous quality gate:
  1. *UI & Critical Flows:* Playwright + TypeScript with Page Object Model and parallel multi-browser execution.
  2. *API Contract & Performance:* Strict JSON schema validation and HTTP latency checks.
  3. *AI Evaluation (RAG Harness):* Semantic cosine similarity scoring, source faithfulness, and hallucination prevention.
- **Conversion Pathways:** Direct, frictionless channels to initiate contact via direct LinkedIn connection and mailto email, designed for high recruiter-to-interview conversion.
- **100% Static & Decoupled Architecture:** Client-side execution with zero external backend dependencies, hosted on GitHub Pages with relative paths ready for seamless custom domain binding.

---

## 3. Success Metrics (KPIs)

| Category | KPI | Target (MVP) | Measurement Method |
| -------- | --- | ------------ | ------------------ |
| **Adoption & Conversion** | Inbound Recruiter & Client Conversion | $\ge 5\%$ of unique visitors initiate contact (LinkedIn or Email) | Tracked link clicks / referral tracking |
| **Engagement** | Average Session Duration | $\ge 90$ seconds per session | Privacy-friendly client analytics or GitHub traffic insights |
| **Performance** | Google Lighthouse Score | $\ge 95$ / 100 on Performance, Accessibility, Best Practices, and SEO | Automated Lighthouse CI audit |
| **Global Accessibility** | International Visitor Engagement | $\ge 70\%$ of sessions in English (default) | Client-side locale session telemetry |
| **Operating Efficiency** | Monthly Infrastructure Cost | Exactly $0.00 / month | GitHub Pages & GitHub Actions usage |

---

## 4. Target Users

### 1. Sarah Jenkins — International Tech Recruiter / Talent Acquisition Lead
- **Profile:** Recruiter at a high-growth US/European tech scaleup sourcing Senior SDET, Test Automation, and TestOps talent.
- **Context:** Reviews 50+ candidates daily; needs rapid, undeniable proof of technical seniority and English fluency in under 60 seconds.
- **Main Pain Point:** Sifting through exaggerated resumes without code evidence; wasting hiring manager interview bandwidth on candidates who cannot build production frameworks from scratch.

### 2. Alex Mercer — VP of Engineering / Head of QA
- **Profile:** Technical engineering leader building AI-augmented SaaS products with distributed engineering teams.
- **Context:** Requires battle-tested testing architectures that eliminate flaky tests, lower CI/CD cycle times, and prevent AI hallucinations from reaching production.
- **Main Pain Point:** Flaky E2E tests blocking daily releases, coupled with a complete lack of automated testing methods for newly deployed RAG/LLM features.

### 3. Carlos Mendoza — Startup Founder / Technical Lead (LatAm & US Hispanic Market)
- **Profile:** Founder of a high-velocity startup launching an AI product, needing immediate QA consulting or framework setup.
- **Context:** Values bilingual communication (English/Spanish), high execution speed, and pragmatic architectures without recurring enterprise SaaS fees.
- **Main Pain Point:** Cannot afford multi-thousand dollar monthly licenses for proprietary QA tools (QA Wolf, Datadog synthetics, commercial LLM harnesses) and needs a lean, serverless quality gate.
