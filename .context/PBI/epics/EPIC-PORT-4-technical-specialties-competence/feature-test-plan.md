# Feature Test Plan: EPIC-PORT-4 - Technical Specialties & Competence Mapping

**Date:** 2026-10-30  
**QA Lead:** Marttin Roman (Lead QA & TestOps Architect)  
**Epic Jira Key:** PORT-4  
**Status:** Approved  

---

## 📋 Business Context Analysis
- Primary Goal: Instant competency mapping for technical recruiters and hiring managers.
- Key Risk: Technology keyword stuffing without architectural organization.
- Mitigation: 3-column structured grid with specialized badges and clear descriptions.

---

## 🧪 Test Strategy & Outlines

### **Should render 3 distinct specialty columns with technology badges**
- **Type:** Positive | **Priority:** Medium | **Test Level:** E2E
- **Preconditions:** Page loaded.
- **Steps:** Verify 3 columns rendered with icons and badges.
- **Expected Result:** TestOps, E2E Automation, and API Engineering columns visible.

### **Should translate specialty descriptions upon language toggle**
- **Type:** Positive | **Priority:** Medium | **Test Level:** E2E
- **Preconditions:** Page in English.
- **Steps:** Toggle to Spanish; verify specialty headers and descriptions translate cleanly.
- **Expected Result:** No untranslated text strings or layout clipping.
