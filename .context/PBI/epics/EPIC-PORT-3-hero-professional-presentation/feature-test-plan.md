# Feature Test Plan: EPIC-PORT-3 - Hero & Professional Authority Presentation

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-3  
**Status:** Approved  

---

## 📋 Business Context Analysis
- Primary Goal: Instant trust and candidate seniority perception for technical recruiters (Sarah Jenkins) and engineering VPs.
- Key Risk: Broken avatar image, vague positioning, or missing CTA buttons.
- Mitigation: Automated image load check and responsive layout verification.

---

## 🧪 Test Strategy & Outlines

### **Should display professional headshot avatar without error**
- **Type:** Visual / Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Steps:** Verify `img[alt*="Marttin Roman"]` is visible and source contains `LinkedIn.jpeg`.
- **Expected Result:** Avatar renders properly; natural dimensions are > 0.

### **Should render availability badge and quick contact buttons**
- **Type:** Positive | **Priority:** High | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Steps:** Verify presence of availability badge with pulsing indicator and CTA buttons.
- **Expected Result:** Availability text displayed in current locale with working contact triggers.
