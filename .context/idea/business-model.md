# Business Model

> Generated in Fase 1 (Constitution). Input: raw business idea.
> Last updated: 2026-10-30

## Executive Summary

The modern software testing and quality engineering landscape is undergoing a massive transformation. As cloud-native systems adopt microservices and non-deterministic Generative AI (LLM and RAG) components, conventional quality assurance practices fail to keep pace. Production incidents triggered by AI hallucinations, untracked prompt drift, and brittle, flaky end-to-end tests consistently block continuous delivery pipelines. Concurrently, elite Senior QA Automation Engineers and SDETs face a credibility hurdle: standard flat text resumes and static LinkedIn profiles fail to demonstrate deep competencies in cutting-edge domains like AI semantic testing and automated CI/CD Quality Gates.

The **Marttin Roman Professional Portfolio & Autonomous QA / AI-TestOps Showcase** bridges this gap. Hosted entirely on GitHub Pages with $0 infrastructure overhead, the platform delivers an interactive, bilingual (English default with Spanish toggle), light/dark mode experience. It functions simultaneously as a career and high-value consulting conversion engine for Marttin Roman, and as a public-facing live showcase for the flagship **Autonomous QA & AI-TestOps Engine**—demonstrating real-world continuous testing across Web UI (Playwright/TypeScript), API contracts, and LLM semantic reliability.

The timing is ideal: international tech companies and forward-thinking engineering leaders increasingly hire remotely and prioritize practitioners who provide verifiable, live proof of competence over static credentials. By combining high-aesthetic design, bilingual accessibility, and deep architectural transparency, this platform establishes immediate technical authority in the emerging AI-TestOps niche.

## Problem Statement

Technical recruitment and client acquisition for senior engineering roles are hindered by high noise and low verifiability. Hiring managers, CTOs, and technical recruiters review hundreds of text-heavy CVs that cite technologies like Playwright, Docker, and Python without providing evidence of architectural elegance, parallel execution strategy, or test stability. This creates extended vetting cycles, high recruiter fatigue, and missed connections with top-tier international talent.

Simultaneously, engineering teams deploying LLM and RAG features face an urgent governance void. Generative AI outputs are inherently probabilistic; traditional deterministic assertions (`assert response.body == expected`) cannot catch subtle hallucinations, degraded factual fidelity (*faithfulness*), or prompt regressions. Furthermore, existing commercial enterprise test reporting and LLM evaluation tools require proprietary subscriptions, continuous database maintenance, and heavy infrastructure budgets, making them prohibitive for lean teams and rapid deployment cycles.

The cost of this unresolved problem is two-fold: companies suffer from slow deployment velocity, broken customer trust, and costly production defects in their AI workflows, while top-tier SDETs capable of solving these challenges remain under-recognized due to the lack of an interactive, authoritative showcase.

## Solution Overview

The MVP resolves these challenges through an elegant, zero-cost digital asset that proves engineering rigor before the first conversation takes place:

- **Bilingual, High-Aesthetic Web Portal:** A responsive, accessible single-page application built on GitHub Pages with dark/light themes and instant English (default) and Spanish localization.
- **Autonomous QA & AI-TestOps Engine Showcase:** A dedicated interactive breakdown of a 3-layer validation suite (Playwright/TypeScript E2E, strict API JSON schema checking, and LLM/RAG semantic cosine similarity evaluation).
- **Zero Infrastructure Cost ($0 Overhead):** Operates completely on GitHub Pages and GitHub Actions with no dedicated servers, paid databases, or ongoing maintenance expenses.
- **Conversion Pathways:** Direct, frictionless channels for international recruiters and engineering leaders to inspect code repositories, review architectural decisions, and initiate direct contact.

---

## Business Model Canvas

### 1. Customer Segments
- **International Tech Recruiters & Talent Partners:** Sourcing senior remote SDET, QA Automation, and TestOps talent across the US, Canada, Europe, and Latin America.
- **Engineering Leaders (CTOs, VPs of Eng, QA Managers):** Seeking proven architectures to eliminate flaky tests, accelerate CI/CD velocity, and govern AI outputs.
- **Startups & Scaleups with LLM/RAG Features:** Requiring specialized consulting to establish automated Quality Gates without multi-thousand-dollar monthly tooling bills.

### 2. Value Propositions
- **Instant Competence Verification:** Provides recruiters and hiring managers with tangible, demonstrable proof of technical depth in under 60 seconds of browsing.
- **Actionable AI-TestOps Blueprints:** Gives engineering teams a reference model for testing non-deterministic LLMs and Web/API suites under a unified pipeline.
- **Bilingual Accessibility:** Default international English positioning with full Spanish localization accommodates both global employers and regional markets.

### 3. Channels
- **Primary Domain:** `marttinroman.github.io` (GitHub Pages).
- **GitHub Profile (`github.com/marttinroman`):** Repository stars, pinned projects, and technical commit history.
- **LinkedIn & Professional Networks:** Thought-leadership posts, case studies, and direct recruiter conversations linking back to the portfolio.
- **Developer Communities:** TestOps, Playwright, and AI Engineering forums (Discord, Reddit, specialized newsletters).

### 4. Customer Relationships
- **Self-Serve Exploration:** Technical visitors explore project architectures, live metrics, and codebases autonomously.
- **Direct High-Touch Interaction:** One-click contact via email, LinkedIn, and direct calendar scheduling for hiring interviews or consulting inquiries.
- **Community Reciprocity:** Open-source contributions, starter templates, and transparent methodology sharing.

### 5. Revenue Streams
- **Full-Time Remote Employment:** Senior SDET / QA Automation Engineer salaries in international markets ($60,000 – $130,000+ USD/year).
- **Specialized Advisory & QA Consulting:** High-ticket hourly/project advisory ($60 – $120 USD/hour) for CI/CD pipeline stabilization, Playwright framework design, and RAG evaluation testbed setup.
- **Fixed-Price Architecture Audits:** Packaged assessments of existing test suites and AI reliability workflows.

### 6. Key Resources
- **Code Assets & Blueprints:** The Autonomous QA & AI-TestOps Engine code, Playwright boilerplates, and RAG evaluation harnesses.
- **Brand & Digital Presence:** GitHub organization, GitHub Pages deployment, and curated technical reputation.
- **Domain Expertise:** Specialized knowledge combining systems engineering, QA automation, and AI evaluation metrics.

### 7. Key Activities
- **Frontend Architecture & Optimization:** Implementing dark/light themes, i18n translation switching, and accessible performance.
- **Framework & Showcase Maintenance:** Keeping Playwright suites, API test examples, and LLM evaluation benchmarks updated and functional.
- **Technical Storytelling:** Translating complex engineering solutions into clear business impact, case studies, and live demonstrations.
- **Lead Pipeline Management:** Engaging with recruiter inquiries, technical screens, and consulting opportunities.

### 8. Key Partners
- **GitHub Ecosystem:** Free-tier hosting on GitHub Pages and CI/CD compute on GitHub Actions.
- **Open Source Communities:** Playwright team, Python/pytest maintainers, and evaluation metric libraries.
- **Professional Network:** Peer engineers, engineering leaders, and former colleagues providing referrals and endorsements.

### 9. Cost Structure
- **Hosting & Infrastructure:** $0 / month (leveraging GitHub Pages and free public GitHub Actions runners).
- **Domain & SSL:** $0 / month (using native `*.github.io` domain with automated SSL; optional custom domain $12/year).
- **Maintenance & Upkeep:** 4–6 hours/month of developer time for content updates, dependency upgrades, and case study additions.

---

## Target Segments (detail)

| Segment | Demographics | Behavior | Pain points |
| ------- | ------------ | -------- | ----------- |
| **International Tech Recruiters** | Talent acquisition leads in US, EU, and LatAm tech firms hiring remote talent. | Scans 50+ profiles daily on LinkedIn; relies on quick technical signals, GitHub presence, and clear English communication. | High candidate noise, exaggerated resumes, difficulty assessing real automation architecture skills without lengthy live interviews. |
| **Engineering Managers / CTOs** | Technical leaders managing distributed development and QA teams in fast-paced product companies. | Evaluates code quality, repository structure, and system design; values pragmatism, zero-overhead tooling, and fast pipeline execution. | Flaky test suites blocking releases, high infrastructure bills for test environments, lack of automated validation for newly deployed AI features. |
| **Product & AI Founders / Leads** | Founders and leads building Generative AI/RAG-driven web applications. | Moves quickly; needs reliable Quality Gates before customer-facing releases; sensitive to operational costs. | Inability to detect model hallucinations, regression after prompt updates, lack of specialized in-house AI-TestOps knowledge. |

---

## Value Proposition

**"An elite, production-proven QA Automation & AI-TestOps showcase that demonstrates end-to-end testing rigor, LLM reliability validation, and $0 infrastructure continuous delivery for modern engineering teams."**

### Supporting Differentiators:
1. **Verifiable Proof over Claims:** Instead of simply claiming skills, the platform features a working, open-source Autonomous QA & AI-TestOps engine testing Web UI, REST APIs, and LLM outputs in live pipelines.
2. **First-Mover in AI-TestOps:** Combines classical SDET patterns (Playwright, POM, parallelization) with cutting-edge AI evaluation (semantic cosine similarity, hallucination detection, faithfulness).
3. **Frictionless International Experience:** First-class English positioning with complete Spanish localization and adaptive light/dark UI built for global technical audiences.
4. **100% Serverless & Zero-Cost:** Demonstrates high architectural maturity by achieving automated testing and live reporting with zero monthly server or database fees.

---

## Revenue Streams (summary)

- **Primary:** Full-time senior remote placement (Senior SDET / QA Automation Engineer / TestOps Specialist) with international tech companies.
- **Secondary:** Project-based technical consulting (Framework design from scratch, CI/CD pipeline acceleration, and AI/RAG test harness implementation).
- **Tertiary:** Fixed-scope Quality Gate Audits (Comprehensive review of existing Playwright/Cypress setups and AI output safety).

---

## Key Metrics

| Metric | Definition | MVP target (if known) |
| ------ | ---------- | --------------------- |
| **Page Speed & Performance** | Google Lighthouse score for Performance, Accessibility, and SEO | $\ge 95$ / 100 on all categories |
| **Visitor Engagement Time** | Average session duration on `marttinroman.github.io` | $\ge 1.5$ minutes |
| **Inbound Conversion Rate** | Recruiter or client contact actions (email click, LinkedIn visit) per 100 unique visits | $\ge 5\%$ |
| **Language Switch Usage** | Percentage of visits toggling between EN and ES | Tracked baseline (10–25%) |
| **Theme Switch Usage** | Percentage of visits using Dark vs Light mode | Tracked baseline |
| **Infrastructure Operating Cost** | Total monthly bill for hosting and test reporting | Exactly $0.00 / month |

---

## MVP Hypotheses

1. **Hypothesis 1 (Recruiter Conversion):** Presenting an interactive, bilingual (English default) portfolio featuring a live AI-TestOps showcase on GitHub Pages will increase recruiter response and interview conversion rates by at least **50%** compared to sending a traditional PDF resume alone.
2. **Hypothesis 2 (Technical Authority in AI Testing):** Featuring the 3-tier Autonomous QA & AI-TestOps Engine (Playwright + API + RAG semantic validation) will position Marttin Roman in the top **5%** of SDET candidates by demonstrating a concrete solution to the industry-wide problem of AI hallucinations and non-deterministic testing.
3. **Hypothesis 3 (Operational Feasibility):** A fully functional, responsive, bilingual portfolio with dark/light mode and zero external backend dependencies can be continuously hosted and maintained at **$0 monthly operating cost** on GitHub Pages.

---

## Assumptions & Validated Decisions

- [Assumption] The primary audience for career opportunities will access the site from desktop and laptop displays, but responsive mobile presentation remains mandatory for recruiter reviews on mobile devices.
- [Assumption] Setting English as the default language maximizes international visibility, while offering an effortless Spanish switch retains deep connection with Latin American and Spanish tech ecosystems.
- [Assumption] The Autonomous QA & AI-TestOps Engine will initially be represented visually and architecturally in the portfolio frontend, with deep-links to its dedicated GitHub repositories and live GitHub Actions artifacts.
- [Decision - Contact Channel] Primary channels for MVP are direct LinkedIn profile connection and `mailto:` email. Future support for calendar scheduling (e.g., Calendly/Cal.com) will be left architecturally extensible.
- [Decision - Domain & Hosting] The project will launch on `marttinroman.github.io` leveraging GitHub Pages ($0 infra). Domain configuration and asset paths will remain decoupled/relative to allow seamless transition to a custom domain (e.g., `marttinroman.dev`) in future phases.
