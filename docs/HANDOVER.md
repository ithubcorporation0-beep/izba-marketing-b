# Developer Handover & Architecture Guide

## IT HUB Corporation Digital Flagship

Welcome to the IT HUB Corporation codebase! This document provides everything an incoming engineer needs to understand the architecture, patterns, and conventions used across the project.

---

### 1. High-Level Architecture

The project is built on **Next.js App Router (TypeScript)** adhering strictly to high-performance, modular engineering principles:

```
src/
├── app/               # Page routes & layout hierarchy
├── components/        # Reusable component library
│   ├── layout/        # Site Header, Footer, Mobile Navigation
│   ├── sections/      # Hero, Process, FAQ, Stats, CTA
│   ├── services/      # Service Card, Search, Category Filter
│   ├── portfolio/     # Project Card, Filter
│   ├── forms/         # Interactive Quote & Consultation Form
│   └── ui/            # Button, Card, Badge, Input, Modal primitives
├── config/            # Site metadata, contacts, social links
├── content/           # 100% of editable marketing text & data sets
├── lib/               # Utilities, SEO builders, validation logic
├── styles/            # Design tokens & global system styling
└── types/             # Shared TypeScript schemas and data interfaces
```

---

### 2. Core Architectural Pillars

#### A. Centralized Content Architecture

Never hardcode client-facing marketing text, service lists, or project lists inside `.tsx` components.

- All data resides in `src/content/`.
- When adding a service, modify `src/content/services.ts`. The service directory, homepage highlights, category lists, and dynamic routes (`/services/[slug]`) automatically adapt.

#### B. CSS Token-Driven Design System

We use **pure CSS Custom Properties (Design Tokens)** defined in `src/styles/tokens.css` paired with scoped CSS modules (`*.module.css`) and clean component styles.

- Avoid utility class clutter or heavy runtime CSS-in-JS libraries.
- Primary tokens:
  - Colors: `--color-bg-primary`, `--color-bg-surface`, `--color-accent-cyan`, `--color-accent-blue`, `--color-text-main`, `--color-text-muted`
  - Elevation: `--surface-glass`, `--border-subtle`, `--glow-accent`
  - Spacing & Radii: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`

#### C. Type Safety & Validation

All content objects implement strict TypeScript interfaces (`src/types/index.ts`). Form data (e.g. quote requests) is validated using custom sanitization rules in `src/lib/validation/quote.ts`.

#### D. Dynamic Routing Convention

- `/services` -> Lists all active services.
- `/services/[slug]` -> Statically/dynamically renders detailed breakdown with deliverable checklist, tech stack, and quote CTA.
- `/services/category/[slug]` -> Filtered list of services by discipline (e.g. `cloud-infrastructure`, `software-engineering`, `cybersecurity`).

---

### 3. Adding a New Feature or Page

1. **New Route:** Create a new folder inside `src/app/` with a `page.tsx` file (e.g. `src/app/careers/page.tsx`).
2. **Metadata:** Export an `export const metadata: Metadata = { ... }` object or utilize the helper `generatePageMetadata()` from `@/lib/seo/metadata`.
3. **Components:** Build modular presentation components inside `src/components/sections/` or `src/components/ui/`.
4. **Data:** Define type interface in `src/types/` and store contents in `src/content/`.

---

### 4. Code Standards & Quality Checklist

- **No `any`:** Always define precise TypeScript interfaces.
- **Accessibility:** Ensure interactive elements have accessible names, proper focus outlines, and semantic HTML (`<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`).
- **Performance:** Optimize images with Next.js image loading patterns and avoid heavy external dependencies.
- **Verification:** Run `npm run build` locally to guarantee zero type or lint errors before opening PRs.
