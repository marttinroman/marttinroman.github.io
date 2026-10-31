# Implementation Plan: STORY-PORT-19 - Direct LinkedIn Outbound Link with Security Sanitization

## Overview

Implement direct link to Marttin's verified LinkedIn profile with strict security attributes.

**Acceptance Criteria to Meet:**
- Href points to `https://www.linkedin.com/in/marttin-roman-torres/`.
- Opens in new tab (`target="_blank"`).
- Uses `rel="noopener noreferrer"`.

---

## Technical Approach

```html
<a href="https://www.linkedin.com/in/marttin-roman-torres/" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="p-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-all">
   <svg ...></svg>
</a>
```

---

## Mapping Test Cases to Implementation Steps

| Test Case | Implementation Requirement | Code Location |
| :--- | :--- | :--- |
| **TC-PORT-19-01:** Verified LinkedIn Link & Security | Verified URL and `rel="noopener noreferrer"` | Hero and contact anchors in `index.html` |

---

## Verification
- Verified by Playwright DOM attribute assertion.
