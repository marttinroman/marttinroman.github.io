# Internationalization & Localization (i18n)

**Jira Key:** PORT-1
**Status:** DONE
**Priority:** CRITICAL
**Phase:** Foundation

---

## Epic Description

Provides instantaneous client-side bilingual localization (English as default locale, Spanish as instant alternate toggle) without page reloads, external runtime dependencies, or latency. The system guarantees that all 41 interactive and static text nodes across the portfolio render seamlessly according to the selected locale, persisting user preference across sessions and maintaining layout integrity.

**Business Value:**
Enables immediate access and authority for global/US tech recruiters (Sarah Jenkins) while preserving authentic connection and local market credibility for Latin American tech leaders (Carlos Mendoza). Eliminates recruiter bounce rates caused by language barriers.

---

## User Stories

1. **PORT-1** - As an international tech recruiter, I want the portfolio to load in English by default so that I can evaluate skills immediately without manual switching.
2. **PORT-2** - As a visitor, I want a persistent language switcher button in the header so that I can toggle between English and Spanish instantly.
3. **PORT-3** - As a returning visitor, I want my language preference persisted in localStorage so that my preference is remembered on return visits.
4. **PORT-4** - As a mobile visitor, I want text containers to remain fluid and free of clipping when switching languages so that reading experience remains pristine.

---

## Scope

### In Scope

- Client-side dictionary data structure (`window.i18nData`) containing English (`en`) and Spanish (`es`) translations.
- DOM node translation mapping via `data-i18n` attributes (41 target elements).
- HTML `lang` attribute dynamic update (`<html lang="en">` / `<html lang="es">`).
- Header toggle button with dynamic label text (`ES` when in English, `EN` when in Spanish).
- `localStorage` key `'portfolio_lang'` read and write synchronization.
- Fallback to English if `localStorage` value is corrupted or unsupported.

### Out of Scope (Future)

- Dynamic multi-language routing with URL query strings (`?lang=es`).
- Additional language locales (e.g., Portuguese, German).
- External translation JSON files fetched over network (kept inlined to prevent extra HTTP roundtrips).

---

## Acceptance Criteria (Epic Level)

1. ✅ Initial load without existing `localStorage` defaults to English (`<html lang="en">`).
2. ✅ Clicking `#lang-toggle` switches all 41 DOM nodes to the target language in < 50ms without page reload.
3. ✅ Language toggle state reflects the opposite language option (indicates target switch action).
4. ✅ Language selection survives hard browser refresh via `localStorage.getItem('portfolio_lang')`.
5. ✅ No layout shift (CLS < 0.05) or container text overflow occurs when toggling to Spanish copy.

---

## Related Functional Requirements

- **FR-001:** English as Default Locale.
- **FR-002:** Client-Side Language Toggle Action.
- **FR-003:** LocalStorage Language State Persistence.
- **FR-004:** Non-Breaking Responsive Layout for Translations.

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Architecture & Performance

- Inlined dictionary inside `index.html` prevents extra HTTP request latency and avoids FOUC/FOUT.
- DOM mutation is batched using `document.querySelectorAll('[data-i18n]')` in a single event loop tick.
- HTML semantic attribute `lang` updated synchronously to assist assistive technologies and screen readers.

### Security Requirements

- All dictionary entries must be sanitized static strings. No `innerHTML` interpolation of untrusted input to prevent XSS vulnerabilities.

---

## Dependencies

### External Dependencies
None ($0 external runtime dependencies).

### Internal Dependencies
None (Base foundation epic).

### Blocks
- EPIC-PORT-003 (Hero text nodes depend on `data-i18n` keys).
- EPIC-PORT-004 (Specialty text nodes depend on `data-i18n` keys).
- EPIC-PORT-005 (Project showcase copy depends on `data-i18n` keys).

---

## Success Metrics

### Functional Metrics
- 100% translation coverage across all 41 `[data-i18n]` targets.
- DOM update execution time < 16ms (60fps frame budget).

### Business Metrics
- 0% bounce rate from non-Spanish-speaking recruiters due to language barrier.
- < 1 second time-to-evaluate for global hiring teams.
