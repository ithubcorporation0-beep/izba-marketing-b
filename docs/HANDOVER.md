# Developer Handover & System Architecture Guide

## IT HUB Corporation Digital Flagship (Static Architecture)

Welcome to the IT HUB Corporation codebase! This document provides everything an incoming engineer or content editor needs to understand, update, and maintain the website.

---

### 1. Technology Stack Overview

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15+ (App Router)** | Static HTML Export (`output: 'export'`) |
| **Language** | **TypeScript 5+** | Full strict mode with zero `any` types |
| **Styling** | **CSS Modules + Vanilla CSS** | Scoped modular styles driven by CSS custom properties |
| **Design System**| **CSS Tokens (`tokens.css`)** | WCAG 2.1 AA compliant color palette, spacing, elevations |
| **Icons** | **Lucide React** | Clean, accessible SVG iconography |
| **Validation** | **Zod 3+** | Form input schema validation |
| **Form Gateway** | **Web3Forms API** | Direct client-side HTTPS POST submission to company inbox |
| **SEO & Schema** | **Next.js Metadata + JSON-LD** | Dynamic metadata, canonical URLs, Organization & Breadcrumb schema |
| **Build Output** | **Static Directory (`/out`)** | 115 prerendered HTML pages ready for any global CDN |

---

### 2. Comprehensive Folder Map

```text
it-hub-website/
├── docs/                      # Project manuals and handover documentation
│   ├── IT_HUB_Corporation_PRD.md # Source of truth product specification
│   ├── CONTENT_GUIDE.md       # Content editing instructions for non-technical users
│   ├── QA_REPORT.md           # Pre-launch audit pass/fail matrix
│   ├── DEPLOYMENT.md          # Step-by-step Vercel deployment guide
│   └── HANDOVER.md            # This engineering handover manual
├── public/                    # Static public assets
│   ├── icons/                 # Brand SVG icons (favicon.svg, app icons)
│   └── images/                # Branded graphics, og-image.png, logo.svg
├── scripts/                   # Automated validation scripts
│   ├── check-content.ts       # Verifies 9 categories, 90 services, and slug integrity
│   └── check-links.mjs        # Crawls static HTML build to ensure 0 broken links
├── src/
│   ├── app/                   # App Router pages and layouts
│   │   ├── layout.tsx         # Root layout (Header, Footer, ConsentBanner, Fonts)
│   │   ├── page.tsx           # Homepage (Hero, Trust Points, Category Cards, CTA)
│   │   ├── about/             # About page (Mission, Core Values, Approach)
│   │   ├── services/          # Services hub & interactive search directory
│   │   │   ├── [slug]/        # 90 prerendered service detail pages
│   │   │   └── category/[slug]/# 9 prerendered category pages
│   │   ├── portfolio/         # Case studies hub & [slug] project detail pages
│   │   ├── digital-products/  # Digital templates and business packs
│   │   ├── contact/           # Contact page & QuoteForm
│   │   ├── privacy/           # Privacy policy draft
│   │   ├── terms/             # Terms of service draft
│   │   ├── not-found.tsx      # Custom 404 page with service shortcuts
│   │   ├── robots.ts          # Static robots.txt generator
│   │   └── sitemap.ts         # Static sitemap.xml generator (107 URLs)
│   ├── components/            # Reusable React components
│   │   ├── analytics/         # ConsentBanner and cookie choice manager
│   │   ├── forms/             # QuoteForm with anti-spam and validation
│   │   ├── layout/            # Sticky Header, Footer, and MobileNav
│   │   ├── portfolio/         # ProjectCard component
│   │   ├── sections/          # Hero, Process, Trust Points, FAQ, and CTA
│   │   ├── seo/               # JsonLd application/ld+json script injector
│   │   ├── services/          # ServiceCard, CategoryCard, ServiceDirectory
│   │   └── ui/                # Accessible primitives (Button, Card, Badge, Accordion)
│   ├── config/                # Global configuration
│   │   └── site.ts            # Site title, tagline, URLs, contact placeholders
│   ├── content/               # ✍️ Content source of truth (zero hardcoded text in components)
│   │   ├── categories.ts      # 9 service category definitions
│   │   ├── services.ts        # 90 service definitions (10 per category)
│   │   ├── featured.ts        # Featured services and homepage trust statements
│   │   ├── projects.ts        # Real portfolio projects (empty until client approves)
│   │   ├── faqs.ts            # General and service-specific FAQs
│   │   ├── testimonials.ts    # Client testimonials (empty until verified)
│   │   └── budget.ts          # Contact form budget dropdown choices
│   ├── lib/                   # Utility helpers
│   │   ├── analytics.ts       # Privacy-respecting GA event triggers (no PII)
│   │   ├── seo/               # metadata.ts and jsonLd.ts builders
│   │   ├── services.ts        # Service lookups and relation helpers
│   │   └── validation/        # Zod schema for QuoteForm
│   ├── styles/                # CSS styling
│   │   ├── globals.css        # Tailwind v4, reset, typography, reduced motion
│   │   └── tokens.css         # WCAG 2.1 AA design tokens (colors, radius, shadows)
│   └── types/                 # TypeScript interfaces (Service, Category, Project, etc.)
├── .env.example               # Environment variables template
├── next.config.ts             # Static export configuration
├── package.json               # NPM scripts and dependency versions
├── vercel.json                # Clean URLs and security headers
└── README.md                  # Project overview and quickstart guide
```

---

### 3. How Content Is Edited

All editable text is decoupled from JSX templates and stored in TypeScript files inside `src/content/` or `src/config/`:

#### A. How to Update Company Information & Socials
* **File:** `src/config/site.ts`
* Replace `PLACEHOLDER_EMAIL`, `PLACEHOLDER_PHONE`, `PLACEHOLDER_ADDRESS`, and social URLs with real values.
* The header, footer, contact page, privacy policy, and structured data automatically update across all pages.

#### B. How to Add or Edit a Service
1. Open `src/content/services.ts`.
2. Locate the relevant category array or add a new service object following the `Service` interface:
   ```typescript
   {
     id: 'service-id',
     name: 'New Service Name',
     slug: 'new-service-name',
     categorySlug: 'web-software-development', // Must match an existing category slug
     shortDescription: 'One concise summary sentence.',
     fullDescription: 'Comprehensive explanation of service scope...',
     includes: ['Feature 1', 'Feature 2'],
     deliverables: ['Deliverable 1', 'Deliverable 2'],
     process: [
       { step: 1, title: 'Discovery', description: '...' },
       { step: 2, title: 'Execution', description: '...' }
     ],
     faqs: [
       { question: 'Common question?', answer: 'Clear answer.' }
     ],
     isPublished: true,
   }
   ```
3. Run `npm run check:content` to verify slug formatting and category relations.
4. Next.js automatically generates the detail page at `/services/new-service-name` and includes it in `sitemap.xml`.

#### C. How to Add a Verified Portfolio Case Study
* **File:** `src/content/projects.ts`
* Add an entry to the `projects` array with client permission:
  ```typescript
  {
    id: 'client-name-project',
    title: 'Custom Web Portal',
    slug: 'custom-web-portal',
    clientName: 'Client Brand (with written permission)',
    categorySlug: 'web-software-development',
    summary: 'Brief overview of the project outcome.',
    challenge: 'The technical or business obstacle faced.',
    approach: 'How IT HUB Corporation engineered the solution.',
    outcome: 'The verified result achieved.',
    deliverables: ['Web Portal', 'Source Code', 'Documentation'],
    isPublished: true,
  }
  ```
* The portfolio page (`/portfolio`) will automatically display the card, and `/portfolio/custom-web-portal` will render the detailed case study.

#### D. How to Add Testimonials & FAQs
* **Testimonials:** `src/content/testimonials.ts` (Add verified client quotes; zero fake entries allowed).
* **General FAQs:** `src/content/faqs.ts` (Appears on service and home pages).

---

### 4. Design System & CSS Tokens Location

The design tokens are centralized in:
`src/styles/tokens.css`

Key design variables:
* **Brand Navy:** `--color-navy` (`#101828`)
* **Primary Blue:** `--color-primary-blue` (`#3157D5`)
* **Primary Hover:** `--color-primary-hover` (`#2445b8`)
* **Muted Text (Accessible 7:1):** `--color-muted` (`#475467`)
* **Accent Violet (Accessible 6.9:1):** `--color-accent-violet` (`#6941c6`)
* **Soft Background:** `--color-soft-bg` (`#f8fafc`)
* **Container Max Width:** `--container-max` (`1280px`)

All custom component styles use scoped CSS Modules (`[Component].module.css`) referencing these custom properties.

---

### 5. Automated Verification Commands

Before deploying or committing any code, execute these 5 quality checks:

```bash
# 1. Check linting standards
npm run lint

# 2. Check TypeScript types
npm run typecheck

# 3. Validate 9 categories and 90 services content structure
npm run check:content

# 4. Build production static export
npm run build

# 5. Check all internal links across the static build (5,000+ links)
npm run check:links
```

All 5 checks must pass with exit code `0`.

---

### 6. Inbound Enquiry Form (Web3Forms Integration)

* **Architecture:** Static website with zero backend servers.
* **Service:** [Web3Forms](https://web3forms.com) (free tier forwards form submissions directly to email).
* **Configuration:**
  * In `.env.local` (locally) or Vercel Environment Variables (production), set:
    ```bash
    NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
    ```
  * The form component in `src/components/forms/QuoteForm.tsx` sends a JSON payload to `https://api.web3forms.com/submit`.
  * **Spam Protection:** Built-in honeypot field (`botcheck`) and minimum time-on-page detection (< 2.5 seconds) reject automated bot submissions silently.

---

### 7. Accounts & Ownership Matrix

Use this table to record account ownership, credentials managers, and administrator contacts for IT HUB Corporation:

| Account / Service | Purpose | Registered Owner / Admin Email | Location of Credentials |
| :--- | :--- | :--- | :--- |
| **Domain Registrar** (e.g., Namecheap) | Manages `ithubcorporation.com` DNS | `____________________________` | Password Manager |
| **Vercel** | Hosting & CDN deployment platform | `____________________________` | Password Manager / GitHub SSO |
| **GitHub** | Git source code repository | `____________________________` | Organization Admin |
| **Web3Forms** | Contact form enquiry email delivery | `____________________________` | Key stored in Vercel Env Vars |
| **Google Search Console** | SEO sitemap and indexing monitoring | `____________________________` | Google Account |
| **Google Analytics (GA4)** | Anonymized traffic metrics (optional) | `____________________________` | Google Account |
| **Official Inbound Email** | Receives client enquiries from website | `____________________________` | Corporate Email Host |

---

### 8. Known Architectural Limitations (Static Architecture)

Because this website is compiled as a 100% static export (`output: 'export'`) for maximum speed, security, and zero hosting cost:

1. **No Built-in Admin Dashboard:** Content cannot be edited through an online browser login; updates are made by editing TypeScript content files in Git and pushing to GitHub.
2. **No Native Shopping Cart or Payments:** Digital products are currently showcased as bespoke custom design offerings. Instant checkout with credit card processing is not included in Phase 1.
3. **No Dynamic Server Sessions:** User login or customer portals are not supported without a backend database.

---

### 9. Future Roadmap & Phase 2 Recommendations

When the business scales and requires dynamic capabilities, refer to PRD Section 2.2:

1. **Headless CMS Integration:** Connect a headless CMS (e.g., Sanity, Strapi, or Supabase) with webhooks that trigger automatic static rebuilds upon content publishing.
2. **Blog & Insights Section:** Introduce an `/insights` or `/blog` route with MDX or CMS articles to drive organic search rankings.
3. **Turnkey Digital Product Checkout:** Integrate LemonSqueezy, Stripe, or Gumroad for automated digital product downloads and instant credit card processing.
4. **CRM Lead Pipeline:** Connect Web3Forms webhooks to HubSpot, Notion, or Airtable to track inbound quotes automatically through sales stages.
