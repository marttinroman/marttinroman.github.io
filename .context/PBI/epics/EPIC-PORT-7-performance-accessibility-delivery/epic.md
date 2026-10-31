# Performance, Accessibility & Zero-Cost Delivery

**Jira Key:** PORT-7
**Status:** DONE
**Priority:** HIGH
**Phase:** Non-Functional Excellence

---

## Epic Description

Ensures that the portfolio delivers top-tier performance (< 1s LCP, 100/100 Lighthouse), full semantic accessibility (WCAG 2.1 AA, keyboard focus traps, ARIA landmarks), and continuous deployment to GitHub Pages Edge CDN with $0 recurring monthly infrastructure expense.

**Business Value:**
Exemplifies modern software quality engineering best practices where performance, accessibility, and cost efficiency are non-negotiable architectural tenets.

---

## User Stories

1. **PORT-22** - As a mobile visitor on cellular networks, I want sub-second asset delivery on Edge CDN so that the site loads instantaneously.
2. **PORT-23** - As a keyboard or screen reader user, I want complete keyboard navigation and semantic ARIA labeling so that I can explore the site without a mouse.
3. **PORT-24** - As the repository maintainer, I want an automated GitHub Pages deployment pipeline that builds and verifies code on every git push.

---

## Related Functional Requirements
- **FR-022:** Sub-Second Static Asset Delivery on Edge CDN.
- **FR-023:** Full Keyboard Navigation & Semantic ARIA Tree.
- **FR-024:** Automated GitHub Pages CI/CD Deployment Pipeline.

See: `.context/SRS/functional-specs.md`
