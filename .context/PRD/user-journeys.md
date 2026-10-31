# PRD — User Journeys

> **Document:** Product Requirements Document (PRD) — User Journeys  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Last Updated:** 2026-10-30  

---

## Journey 1 (Happy Path): Global Recruiter Rapid Vetting & Contact Initiation

- **Persona:** Sarah Jenkins (Global Talent Acquisition Partner)
- **Scenario:** Sarah receives a link to `marttinroman.github.io` in a curated shortlist for a Senior SDET / QA Automation Lead role. She opens the link on her desktop browser with only 90 seconds before her next call.

### Step-by-Step Flow

#### Step 1: Landing & First Impression
- **User Action:** Clicks the link and lands on `marttinroman.github.io`.
- **System Response:** The page renders in sub-second time (<500ms) with clean dark styling matching her OS theme. The hero displays the active pulse badge *"Available for remote & international roles"*, professional title, avatar, and core summary in fluent English by default.
- **Pain Point:** If the page took >2 seconds to load or displayed broken fonts, Sarah would bounce immediately.

#### Step 2: Immediate Competence & Specialty Scan
- **User Action:** Scrolls to the "Technical Specialties" section.
- **System Response:** Three high-contrast cards clearly define: *Automation Frameworks (Playwright/TypeScript)*, *AI & RAG Validation (LLMs/Cosine similarity)*, and *CI/CD & TestOps (Quality Gates)*.
- **Pain Point:** Vague generalist buzzwords without concrete technical specifics make it hard to defend the candidate to hiring managers.

#### Step 3: Flagship Architecture Review
- **User Action:** Reviews the Featured Projects section, focusing on the *Autonomous QA & AI-TestOps Engine*.
- **System Response:** Visual blueprint demonstrates the 3-layer Quality Gate (UI, API, LLM Harness) with tech badges (Playwright, Python, GitHub Actions) and a direct repository link.
- **Pain Point:** Lack of repository links or broken URLs prevents verification of real engineering ability.

#### Step 4: Contact Action
- **User Action:** Clicks the "LinkedIn" button to view Marttin's profile and send a direct connection request.
- **System Response:** Opens `linkedin.com/in/marttinroman` in a new secure tab (`target="_blank"` with `rel="noopener noreferrer"`).
- **Pain Point:** A broken link or an intrusive modal form with required fields would cause immediate drop-off.

### Expected Outcome
Sarah successfully verifies technical seniority, English proficiency, and availability in under 60 seconds and invites Marttin to an initial screening call.

### Alternative Paths / Edge Cases
- **Alternative Path (Direct Email):** Sarah clicks the "Contact" button; system triggers her native email client via `mailto:` with pre-populated subject line `[Inquiry] Senior SDET Opportunity`.
- **Edge Case (Pop-up Blocker):** If external tab creation is blocked, the browser gracefully follows standard hyperlink behavior without JavaScript errors.

---

## Journey 2 (Technical Deep Dive): VP of Engineering Inspects Architecture & i18n

- **Persona:** Alex Mercer (VP of Engineering / Head of Quality)
- **Scenario:** Alex is evaluating whether Marttin's testing approach matches his team's complex stack. He accesses the site on a high-resolution monitor and inspects code depth and localization.

### Step-by-Step Flow

#### Step 1: Language & Theme Toggle Validation
- **User Action:** Alex notices the language switcher in the header and toggles from **EN** to **ES** to test bilingual implementation, then toggles the theme from Dark to Light mode.
- **System Response:** Instant client-side re-rendering of all section copy, tags, and badges into natural, professional Spanish without page reload. Theme smoothly transitions to high-contrast light mode with slate-100 backgrounds and accessible slate-900 text. Preferences are saved to `localStorage`.
- **Pain Point:** Choppy reloads, untranslated layout fragments, or unreadable light mode text contrast (<4.5:1).

#### Step 2: Deep Dive into AI Validation Architecture
- **User Action:** Inspects the *RAG Quality & Vector Harness* project card to see how non-deterministic testing is handled.
- **System Response:** Reads clear technical documentation highlighting cosine similarity scoring, source faithfulness thresholds, and automated regression prevention on GitHub Actions.
- **Pain Point:** Skepticism regarding whether the "AI" claims are just hype or actual engineering implementations.

#### Step 3: Inspecting Tech Stack Rigor
- **User Action:** Scrolls to the "Tools & Technologies" badge cloud and verifies complementary tools: k6 (performance testing), Docker, Azure DevOps, and GraphQL.
- **System Response:** Clean, categorized badge grid communicating a complete modern TestOps toolchain.
- **Pain Point:** Candidate lacking DevOps/CI knowledge cannot operate autonomously in a fast-paced team.

#### Step 4: Repository Exploration
- **User Action:** Clicks the repository link on the Playwright boilerplate project to inspect GitHub commits and folder structure.
- **System Response:** Direct navigation to GitHub repository demonstrating clean TypeScript standards, ESLint configuration, and modular Page Object Model layers.

### Expected Outcome
Alex confirms that Marttin possesses genuine architectural maturity in both classical automation and AI evaluation, adding him to the priority interview list for a Staff/Lead SDET position.

### Alternative Paths / Edge Cases
- **Edge Case (Local Storage Disabled / Private Browsing):** When localStorage is restricted by browser security policies, the theme and language state fallback gracefully to memory session state without throwing uncaught runtime exceptions.
- **Edge Case (Network Throttling):** CDN-hosted icons (Lucide) or Tailwind scripts load asynchronously without blocking structural HTML content rendering.

---

## Journey 3 (Mobile & Regional): LatAm Startup Founder Seeking Quick Advisory

- **Persona:** Carlos Mendoza (Startup Founder & CTO)
- **Scenario:** Carlos is browsing while on the move on his smartphone (iPhone Safari). He needs immediate consulting to set up an automated testing pipeline for an upcoming investor demo.

### Step-by-Step Flow

#### Step 1: Mobile Landing & Responsive Layout
- **User Action:** Opens `marttinroman.github.io` from a mobile LinkedIn message.
- **System Response:** Fluid mobile layout adjusts effortlessly. Avatar, availability badge, and title stack cleanly without horizontal scroll or truncated text.
- **Pain Point:** Tiny unreadable fonts, horizontal overflow, or sticky overlays that block content on mobile screens.

#### Step 2: Language Preference
- **User Action:** Prefers reading Spanish; taps the language toggle button.
- **System Response:** The interface instantly updates to Spanish. The sticky mobile header ensures language and theme controls remain accessible.
- **Pain Point:** Misaligned touch targets (<48px) causing accidental clicks.

#### Step 3: Cost and Value Assessment
- **User Action:** Reads the Autonomous QA Engine value summary highlighting "$0 Infrastructure Cost" on GitHub Actions and GitHub Pages.
- **System Response:** The exact value proposition Carlos needs: high-grade automation without recurring cloud software bills.
- **Pain Point:** Lack of business-oriented impact metrics (cost, speed, coverage).

#### Step 4: Rapid Contact Initiation
- **User Action:** Taps the "Contactar" button in the hero section.
- **System Response:** Mobile OS triggers the native mail client with Marttin's address and a clear subject line, allowing Carlos to draft a quick message in under 30 seconds.

### Expected Outcome
Carlos sends an inquiry for a scoped QA automation advisory package without leaving his phone.

### Alternative Paths / Edge Cases
- **Alternative Path (Clipboard Copy):** If Carlos's phone has no default email app configured, a secondary long-press or copy action allows copying the direct email address to the clipboard with an unobtrusive visual confirmation toast.
