# Content Editing Guide

Welcome to the IZBA Marketing agency content editing guide. This guide is written in plain language so that anyone—whether a business owner, copywriter, or developer—can easily update the website's words, services, projects, and contact details without needing to write code or modify web page layouts.

All website content lives in simple data files inside the `src/content/` folder and `src/config/site.ts`.

---

## Table of Contents

1. [Where Content Lives](#where-content-lives)
2. [How to Edit an Existing Service](#how-to-edit-an-existing-service)
3. [How to Hide or Temporarily Disable a Service](#how-to-hide-or-temporarily-disable-a-service)
4. [How to Add a New Service](#how-to-add-a-new-service)
5. [How to Change or Reorder a Category](#how-to-change-or-reorder-a-category)
6. [How to Add a Real Project (Portfolio)](#how-to-add-a-real-project-portfolio)
7. [How to Add a Real Testimonial](#how-to-add-a-real-testimonial)
8. [How to Update Company Contact Details](#how-to-update-company-contact-details)
9. [How to Check Your Work for Mistakes](#how-to-check-your-work-for-mistakes)

---

## 1. Where Content Lives

Here is a quick map of the files you will edit:

| Content Item           | File Path                        | What It Controls                                               |
| :--------------------- | :------------------------------- | :------------------------------------------------------------- |
| **All 90 Services**    | `src/content/services-data/*.ts` | Service descriptions, deliverables, FAQs, and scope            |
| **Categories**         | `src/content/categories.ts`      | The 9 service categories, their names, descriptions, and icons |
| **Featured Items**     | `src/content/featured.ts`        | Highlights displayed on the homepage                           |
| **Company FAQs**       | `src/content/faqs.ts`            | General questions about working with IZBA                      |
| **Portfolio Projects** | `src/content/projects.ts`        | Case studies and past projects                                 |
| **Testimonials**       | `src/content/testimonials.ts`    | Real client reviews and quotes                                 |
| **Company Info**       | `src/config/site.ts`             | Company phone, email, address, working hours, and social links |

---

## 2. How to Edit an Existing Service

To make changes to a service (such as fixing a typo, updating what's included, or improving a description):

1. Find which category folder the service belongs to inside `src/content/services-data/`:
   - `web-software.ts` — Web & Custom Software Development
   - `digital-marketing.ts` — Digital Marketing & SEO
   - `ai-automation.ts` — AI Services & Automation
   - `graphic-design.ts` — Creative Design & Branding
   - `data-entry.ts` — Data Operations & Back Office
   - `digital-products.ts` — Digital Product Creation
   - `video-production.ts` — Video Production & Media
   - `it-support.ts` — IT Support & Cyber Security
   - `education-office.ts` — Technical Training & Office Skills

2. Open that file and search for the service name (for example, "Website Development").
3. Edit the fields inside quotation marks `""` or inside lists `[...]`:
   - `shortDescription`: 1–2 plain-language sentences shown on cards.
   - `description`: 2–3 paragraphs explaining the service to potential clients.
   - `includes`: A list of 3–6 bullet points detailing what is included.
   - `deliverables`: Concrete items the client receives at the end.
   - `faqs`: 2 common questions and answers for this specific service.

> **Rule:** Do not promise specific revenue increases, ranking guarantees, or make unrealistic claims. Be honest, professional, and clear.

---

## 3. How to Hide or Temporarily Disable a Service

If IZBA is not currently offering a specific service or wants to pause inquiries for it:

1. Open the file containing the service in `src/content/services-data/`.
2. Locate the service and find the `status` field:
   ```typescript
   status: 'published',
   ```
3. Change `'published'` to `'draft'`:
   ```typescript
   status: 'draft',
   ```
4. Save the file.
5. The website's helper functions automatically filter out any service that is not marked `'published'`, so it will no longer show up on service directory pages or category listings. To bring it back later, simply change it back to `'published'`.

---

## 4. How to Add a New Service

1. Open the relevant file in `src/content/services-data/` (or create a new entry).
2. Copy an existing service block and adjust each field:
   ```typescript
   {
     id: 'unique-service-id',
     name: 'New Service Name',
     slug: 'new-service-name',
     categorySlug: 'web-software-development', // must match a category slug exactly
     shortDescription: 'One or two clear sentences describing what this service is.',
     description: [
       'First paragraph describing who needs this service and what problem it solves.',
       'Second paragraph explaining the methodology or technical standard used.',
     ],
     includes: [
       'First key activity or item covered',
       'Second key activity',
       'Third key activity',
     ],
     deliverables: [
       'Specific tangible item handed to client',
       'Another concrete deliverable',
     ],
     process: [
       { step: 1, title: 'Discuss', description: 'Understand goals and requirements.' },
       { step: 2, title: 'Plan', description: 'Outline scope, milestones, and approach.' },
       { step: 3, title: 'Build', description: 'Execute and build the solution.' },
       { step: 4, title: 'Review & Deliver', description: 'Review, test, and hand over.' },
     ],
     faqs: [
       {
         question: 'What do I need to prepare before starting?',
         answer: 'Clear requirements, any existing assets, and access credentials.'
       },
       {
         question: 'How long does a typical project take?',
         answer: 'Timelines vary based on complexity and are agreed upon during initial planning.'
       }
     ],
     relatedServiceSlugs: [
       'other-service-slug-1',
       'other-service-slug-2'
     ],
     status: 'published',
     isFeatured: false,
     seoTitle: 'New Service Name | IZBA Marketing agency',
     seoDescription: 'Professional new service offerings by IZBA Marketing agency.'
   }
   ```
3. Run `npm run check:content` in your terminal to ensure there are no duplicate slugs or broken links.

---

## 5. How to Change or Reorder a Category

Open `src/content/categories.ts`. Each category has:

- `id`: Unique identifier (e.g., `'cat-web-software'`).
- `name`: Display title (e.g., `'Web & Custom Software Development'`).
- `slug`: URL slug (e.g., `'web-software-development'`).
- `shortDescription`: 1–2 sentences explaining the department.
- `icon`: An icon identifier (e.g., `'Globe'`, `'Megaphone'`, `'Cpu'`).
- `sortOrder`: A number from 1 to 9 determining the display order.
- `isPublished`: Set to `true` to display, or `false` to hide the entire category.

---

## 6. How to Add a Real Project (Portfolio)

Real past projects belong in `src/content/projects.ts`. Currently, this file exports an empty array (`export const projects: Project[] = [];`) so no fictitious or unverified work is ever shown.

When you have explicit client permission to showcase a real project, add an entry like this:

```typescript
// EXAMPLE REFERENCE ONLY — DO NOT PASTE INTO LIVE DATA WITHOUT REAL CLIENT APPROVAL
export const projects: Project[] = [
  {
    id: 'project-example-inventory-portal',
    title: 'Custom Inventory Portal Implementation',
    slug: 'custom-inventory-portal-implementation',
    clientName: 'Regional Distribution Partner (use only with explicit written consent)',
    categorySlug: 'web-software-development',
    summary:
      'A secure web portal unifying real-time stock levels across regional warehouses.',
    context:
      'The client operated multiple distribution points with disparate inventory logs, needing centralized visibility without heavy enterprise licensing costs.',
    challenge:
      'Manual daily paper logs and offline spreadsheets caused recurring stock mismatches and delayed order fulfillment.',
    approach:
      'Designed and engineered a modular Next.js dashboard backed by PostgreSQL, featuring role-based access for warehouse leads and automated inventory discrepancy alerts.',
    deliverables: [
      'Role-based Warehouse Web Portal',
      'PostgreSQL Database Schema & Migration Scripts',
      'Staff Operating Manual & Video Walkthrough',
      'Automated Discrepancy Alert System',
    ],
    outcome:
      'Centralized all warehouse logs into a single interface, significantly reducing administrative reconciliations and order turnaround times.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    testimonialQuote:
      'IZBA delivered exactly what we scoped, on time and with clear weekly communication.',
    testimonialAuthor: 'Operations Director',
    isPublished: true,
    publishedAt: '2026-03-01',
  },
];
```

---

## 7. How to Add a Real Testimonial

Client reviews belong in `src/content/testimonials.ts`. This file currently exports an empty array (`export const testimonials: Testimonial[] = [];`) in strict compliance with project integrity rules (no fictitious or unverified reviews are ever shown). The Testimonials section remains completely hidden on the live website until authentic reviews are added.

When you receive verified written client feedback with publication permission, add it to `src/content/testimonials.ts` following this format:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Sarah Jenkins',
    role: 'Director of Marketing',
    company: 'Acme Retail Group',
    content:
      'The team at IZBA built our marketing landing pages quickly and with great attention to detail. Communication was clear throughout the project.',
    rating: 5,
    serviceSlug: 'website-development',
    avatarText: 'SJ',
    isPublished: true,
    isFeatured: true,
    date: '2026-03-15',
  },
  {
    id: 'testimonial-2',
    clientName: 'David Chen',
    role: 'Founder & CEO',
    company: 'FinTrack Analytics',
    content:
      'From technical architecture to final deployment, IZBA delivered reliable, performant software. We appreciate their transparent milestones.',
    rating: 5,
    serviceSlug: 'custom-web-application-development',
    avatarText: 'DC',
    isPublished: true,
    isFeatured: true,
    date: '2026-03-20',
  },
];
```

### Automatic Carousel Display
Once real testimonials are populated in `src/content/testimonials.ts`:
- The website automatically reveals the Testimonials section.
- Testimonials are displayed inside an interactive carousel featuring large quotes, numbered pagination (`01 / 02`), previous/next navigation buttons, touch swipe support for mobile/tablet, and keyboard arrow controls (`ArrowLeft` / `ArrowRight`).
- Autoplay pauses automatically on hover or keyboard focus, and is automatically disabled for visitors with reduced motion preferences.

---

## 8. How to Update Company Contact Details

General business details that appear across the site (like the footer, contact form, and meta tags) are kept in `src/config/site.ts`.

Open `src/config/site.ts` and modify the fields under `contact`:

```typescript
contact: {
  email: 'info@izbamarketing.com',           // Main contact inbox
  salesEmail: 'sales@izbamarketing.com',     // Project quotation inbox
  phone: '+1 (800) 555-0199',            // Public phone number
  address: '100 Innovation Way, Suite 400, Tech City, CA 94016', // Physical office address
  workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
}
```

---

## 9. How to Check Your Work for Mistakes

We included an automated content checker that verifies your edits before anything goes live.

Open your terminal in the project folder and run:

```bash
npm run check:content
```

This automated tool will immediately check and confirm:

1. **No Duplicate Slugs**: Every service and category has a unique web address (slug).
2. **Valid Categories**: Every service points to a category that actually exists.
3. **Valid Related Services**: Every related service slug points to another real service.
4. **Valid Counts**: Validates that all 9 categories and 90 services are present.
5. **Valid Featured Items**: Ensures all featured items link to real services or categories.

If you made a typo (like misspelling a category slug), the tool will tell you the exact file and service name that needs fixing.

---

## 10. How to Replace Brand Assets (Logo, Favicons & Social Share Images)

The website currently uses clean, text-based placeholder graphics featuring an "IT" mark in the company's navy (`#101828`) and royal blue (`#3157D5`) colors. When the business owner approves final branding artwork, replace the following files:

| Brand Asset | File Path | Format & Suggested Dimensions |
| :--- | :--- | :--- |
| **Website Favicon** | `public/icons/favicon.svg` | SVG (100x100 square) |
| **App Icon** | `src/app/icon.svg` | SVG (32x32 square) |
| **Header Logo** | `public/images/logo.svg` | SVG (horizontal vector mark) |
| **Social Share Banner** | `public/images/og-image.png` | PNG (1200x630 pixels) |

> **Note:** The current assets are generated placeholders. Replace them directly with your official vector logo files before final marketing launch.

