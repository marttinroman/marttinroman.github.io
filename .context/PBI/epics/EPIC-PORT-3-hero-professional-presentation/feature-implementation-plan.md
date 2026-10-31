# Feature Implementation Plan: EPIC-PORT-3 - Hero & Professional Authority Presentation

## Overview

Implements the high-impact hero presentation including Marttin's professional headshot (`docs/img/LinkedIn.jpeg`), bilingual title and bio positioning, active availability indicator, and fast-action CTA buttons.

**Technical Decisions:**
- Avatar Image: Optimized JPEG with `aspect-square`, rounded circular mask, and SVG fallback.
- Availability Badge: Tailwind animated ping pill indicator (`animate-ping` green dot).
- Typography: Responsive `text-4xl sm:text-5xl lg:text-6xl` bold tracking.
