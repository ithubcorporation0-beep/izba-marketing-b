# IT HUB Corporation — Website

A modern, fast, and static website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

This website is designed for **static export**, meaning it has no database, no server requirements, and can be hosted for free on platforms like **Vercel**, **Cloudflare Pages**, or **Netlify**.

---

## 🚀 How to Run the Project

### 1. Install Dependencies

Open your terminal inside this folder and run:

```bash
npm install
```

### 2. Start the Development Server

Run the local development server:

```bash
npm run dev
```

Then open your browser and go to:
[http://localhost:3000](http://localhost:3000)

### 3. Build for Production (Static Export)

To test the production build and generate the static export in the `/out` folder:

```bash
npm run build
```

### 4. Code Quality Checks

Before committing any changes, you can run:

```bash
# Check code style and common issues
npm run lint

# Check TypeScript types for errors
npm run typecheck

# Automatically format code with Prettier
npm run format
```

---

## 📁 Folder Map

Here is an overview of how the project is organized:

```
it-hub-website/
├── docs/                      # Documentation (PRD, guides, handover notes)
├── public/                    # Static files (images, icons, logos)
│   ├── images/                # Photos and logos
│   └── icons/                 # Favicons and web app icons
├── src/
│   ├── app/                   # Web pages and routes (Home, About, Services, etc.)
│   ├── components/            # Reusable UI building blocks
│   │   ├── forms/             # Contact and quote request forms
│   │   ├── layout/            # Header, Footer, and navigation
│   │   ├── portfolio/         # Case study and project cards
│   │   ├── sections/          # Hero, Process, FAQ, CTA sections
│   │   ├── services/          # Service cards and search components
│   │   └── ui/                # Core buttons, cards, badges, and inputs
│   ├── config/                # Global website settings
│   │   └── site.ts            # Company name, placeholders for contact info & socials
│   ├── content/               # ✍️ ALL EDITABLE CONTENT LIVES HERE
│   │   ├── categories.ts      # 9 service categories
│   │   ├── services.ts        # Services catalog
│   │   ├── featured.ts        # Homepage highlights
│   │   ├── projects.ts        # Portfolio projects & case studies
│   │   ├── faqs.ts            # Frequently asked questions
│   │   └── testimonials.ts    # Client testimonials
│   ├── lib/                   # Utility helper functions
│   │   ├── seo/               # Search engine tags & metadata helpers
│   │   └── validation/        # Form validation rules
│   ├── styles/                # Styling and design tokens
│   │   ├── globals.css        # Tailwind CSS and global styles
│   │   └── tokens.css         # Color palettes, spacing, and design variables
│   └── types/                 # TypeScript data blueprints and interfaces
│       └── index.ts
├── .env.example               # Template for environment variables
├── .gitignore                 # Files Git will ignore (like node_modules and .next)
├── .prettierrc                # Code formatting rules
├── AGENT_RULES.md             # Strict rules for developers and AI assistants
├── next.config.ts             # Next.js static export settings
├── package.json               # Project scripts and package versions
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This guide
```

---

## ✍️ Where to Edit Content

You do not need to touch HTML or layout code to change website text! All editable marketing information is stored in simple files inside **`src/content/`**:

1. **Company Name & Contact Info:** [`src/config/site.ts`](file:///src/config/site.ts)
2. **Categories & Departments:** [`src/content/categories.ts`](file:///src/content/categories.ts)
3. **Services:** [`src/content/services.ts`](file:///src/content/services.ts)
4. **Case Studies:** [`src/content/projects.ts`](file:///src/content/projects.ts)
5. **Frequently Asked Questions:** [`src/content/faqs.ts`](file:///src/content/faqs.ts)
6. **Testimonials:** [`src/content/testimonials.ts`](file:///src/content/testimonials.ts)
