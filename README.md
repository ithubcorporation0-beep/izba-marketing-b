# IT HUB Corporation — Digital Web Platform

The official modern digital web platform for **IT HUB Corporation**, built with **Next.js (App Router)**, **TypeScript**, and **Vanilla CSS Modules** driven by design tokens.

Compiled as a high-performance **static export** (`output: 'export'`), the website runs with zero database overhead and can be hosted seamlessly on **Vercel**, **Cloudflare Pages**, or any static global CDN.

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Local Environment

Copy `.env.example` to `.env.local` and add your keys:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public website URL | `https://ithubcorporation.com` |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for enquiry delivery | Available at [web3forms.com](https://web3forms.com) |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |

### 3. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Verification & Quality Checks

Run the 5 required validation checks before committing changes:

```bash
# 1. Check code style and lint rules
npm run lint

# 2. Check TypeScript types
npm run typecheck

# 3. Validate content integrity (9 categories, 90 services)
npm run check:content

# 4. Compile production static export (outputs to /out)
npm run build

# 5. Check all internal links across the static build (5,000+ links)
npm run check:links
```

All 5 commands must pass with exit code `0`.

---

## 📁 Project Architecture & Folder Map

```text
it-hub-website/
├── docs/                      # 📖 Project Documentation & Manuals
│   ├── IT_HUB_Corporation_PRD.md # Source of truth product specification
│   ├── QA_REPORT.md           # Pre-launch quality assurance pass/fail report
│   ├── DEPLOYMENT.md          # Step-by-step Vercel deployment guide
│   ├── HANDOVER.md            # Developer handover & architecture guide
│   └── CONTENT_GUIDE.md       # Content editing manual for non-technical editors
├── public/                    # Static assets (icons, logos, og-image.png)
├── scripts/                   # Automated validation scripts (content & link checks)
├── src/
│   ├── app/                   # App Router pages (Home, About, Services, Contact, etc.)
│   ├── components/            # Reusable UI components (forms, layout, services, ui)
│   ├── config/                # Global website settings (site.ts)
│   ├── content/               # ✍️ All editable marketing content & data sets
│   ├── lib/                   # Utility helpers (analytics, SEO metadata, validation)
│   ├── styles/                # CSS design tokens (tokens.css) and globals (globals.css)
│   └── types/                 # Shared TypeScript data blueprints
├── next.config.ts             # Next.js static export settings (output: 'export')
├── vercel.json                # Clean URLs and security headers
└── package.json               # NPM scripts and dependencies
```

---

## ✍️ How to Edit Content

You never need to edit HTML or complex layout code to change website text! All editable marketing information is stored in simple TypeScript data files inside **`src/content/`**:

1. **Company Info & Social Links:** [`src/config/site.ts`](file:///src/config/site.ts)
2. **Service Categories:** [`src/content/categories.ts`](file:///src/content/categories.ts)
3. **90 Services Catalog:** [`src/content/services.ts`](file:///src/content/services.ts)
4. **Portfolio Case Studies:** [`src/content/projects.ts`](file:///src/content/projects.ts)
5. **Frequently Asked Questions:** [`src/content/faqs.ts`](file:///src/content/faqs.ts)
6. **Client Testimonials:** [`src/content/testimonials.ts`](file:///src/content/testimonials.ts)

For detailed content instructions, see [`docs/CONTENT_GUIDE.md`](file:///docs/CONTENT_GUIDE.md).

---

## 🚀 Deployment

Follow the beginner-friendly, step-by-step instructions in [`docs/DEPLOYMENT.md`](file:///docs/DEPLOYMENT.md) to deploy the website to Vercel, connect your custom domain, configure HTTPS, and submit your sitemap to Google Search Console.

---

## 📄 License & Ownership

Proprietary digital asset developed for **IT HUB Corporation**. All rights reserved.
