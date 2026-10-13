# Content Management & Editing Guide

## IT HUB Corporation Digital Flagship

This guide explains how content editors and developers can update all website copy, services, projects, testimonials, and business configurations without touching layout code.

---

### Central Content Directory: `src/content/`

All content is managed through TypeScript data files inside `src/content/`. Every file provides strong typing and auto-completion.

```
src/content/
├── categories.ts      # Service taxonomy & department sectors
├── services.ts        # Full catalogue of IT HUB services & details
├── featured.ts        # Homepage highlights, key stats & hero copy
├── projects.ts        # Portfolio case studies & enterprise deliverables
├── faqs.ts            # Grouped Frequently Asked Questions
└── testimonials.ts    # Client reviews, ratings & enterprise case quotes
```

---

### 1. Updating General Site Info & Contact Channels: `src/config/site.ts`

To update the corporate phone, address, contact email, social links, or legal company name, edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'IT HUB Corporation',
  legalName: 'IT HUB Corporation LLC',
  description: 'Next-Generation Enterprise IT Solutions...',
  url: 'https://ithub-corp.com',
  contact: {
    email: 'enterprise@ithub-corp.com',
    salesEmail: 'sales@ithub-corp.com',
    phone: '+1 (800) 555-4882',
    address: '100 Technology Plaza, Suite 800, Silicon Valley, CA 94025',
    workingHours: 'Monday - Friday: 8:00 AM – 6:00 PM EST',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/it-hub-corp',
    github: 'https://github.com/it-hub-corp',
    twitter: 'https://twitter.com/ithub_corp',
    youtube: 'https://youtube.com/@ithub_corp',
  },
};
```

---

### 2. Adding or Editing a Service: `src/content/services.ts`

Each service entry contains:

- `id` & `slug`: Unique identifiers used in the URL `/services/[slug]`.
- `title` & `shortDescription`: Used in service cards and directory lists.
- `fullDescription`: Comprehensive breakdown rendered on the dedicated service page.
- `category`: Must match an `id` from `src/content/categories.ts`.
- `features`: Array of core capabilities.
- `deliverables`: Concrete artifacts delivered to clients.
- `technologies`: Tech stack badges (e.g. AWS, Kubernetes, Terraform, Next.js).
- `featured`: Boolean indicating whether it appears on the homepage.

#### Example:

```typescript
{
  id: "cloud-infrastructure-devops",
  slug: "cloud-devops-modernization",
  title: "Cloud & DevOps Modernization",
  category: "cloud-infrastructure",
  shortDescription: "Architect, migrate, and automate resilient multi-cloud infrastructures with zero downtime.",
  fullDescription: "Our certified cloud engineers build high-availability cloud platforms...",
  icon: "Cloud",
  technologies: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
  features: [
    "Multi-cloud and hybrid architecture design",
    "Automated CI/CD delivery pipelines",
    "Cost governance and cloud FinOps optimization",
    "Infrastructure as Code (IaC) with Terraform"
  ],
  deliverables: [
    "Production Cloud Architecture Blueprints",
    "Hardened Kubernetes Cluster Setups",
    "Automated GitOps Deployment Pipelines",
    "FinOps Cost Optimization Audit Report"
  ],
  featured: true
}
```

---

### 3. Adding or Editing a Case Study: `src/content/projects.ts`

Projects appear on `/portfolio` and featured items on `/`:

- `id` & `slug`: Unique slug for project identification.
- `title`: Case study title.
- `client`: Client company name or industry category.
- `category`: Matches category slug (e.g., `cloud`, `software`, `security`).
- `summary`: High-level summary of the business challenge and delivery.
- `metrics`: Highlighted numbers (e.g., `+240% Throughput`, `99.99% Uptime`).
- `stack`: Array of technologies utilized.
- `featured`: Display on homepage showcase.

---

### 4. Updating Testimonials: `src/content/testimonials.ts`

Add authentic enterprise client feedback:

- `author`: Name of client stakeholder.
- `role`: Executive title (e.g., "Chief Technology Officer").
- `company`: Client organization name.
- `quote`: Written testimonial.
- `rating`: Numeric star rating (default `5`).
- `avatar`: Image path or initials.

---

### 5. Managing FAQs: `src/content/faqs.ts`

FAQs are segmented by category (`General`, `Services & Engagement`, `Security & Compliance`, `Billing & Pricing`). Adding a new Q&A is as simple as adding an object:

```typescript
{
  question: "What is IT HUB's standard project kickoff timeline?",
  answer: "Following the initial discovery call and requirements alignment, our sprint teams typically commence within 5 to 10 business days.",
  category: "Services & Engagement"
}
```
