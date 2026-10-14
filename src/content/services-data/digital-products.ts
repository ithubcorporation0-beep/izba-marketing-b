import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We determine product concept, buyer persona, licensing terms, and distribution platforms.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We outline product architecture, wireframes, design systems, and digital delivery workflows.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our team crafts the digital assets, templates, guides, or storefront configuration with thorough QA.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We package the product files, set up automated instant download delivery, and provide user documentation.',
  },
];

export const digitalProductsServices: Service[] = [
  {
    id: 'digital-product-creation',
    name: 'Digital Product Creation',
    title: 'Digital Product Creation',
    slug: 'digital-product-creation',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'End-to-end conceptualization, design, packaging, and delivery setup for monetizable digital assets and downloadable products.',
    description: [
      'Digital products provide high-margin business models with zero physical inventory or shipping bottlenecks. Our Digital Product Creation service helps creators and companies turn expertise into polished, downloadable products.',
      'We guide you from initial product validation through design execution, asset packaging, and automated checkout delivery integration.',
      'Every digital product is packaged with user guides, licensing terms, and clean file structures to minimize post-purchase customer inquiries.',
    ],
    includes: [
      'Digital product market positioning and format selection',
      'Asset creation and high-end visual design polish',
      'Packaging: PDF user manuals, bonus assets, and license files',
      'Downloadable ZIP bundle creation with organized directories',
      'Automated digital delivery integration (Gumroad, Lemon Squeezy, Shopify)',
    ],
    deliverables: [
      'Complete master digital product package (ZIP bundle)',
      'Product mockup graphics for marketing and store listings',
      'Customer documentation and quick-start instructions',
      'Licensing agreements and copyright notice text',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What types of digital products can you help build?',
        answer:
          'We develop website templates, UI kits, digital planners, Notion workspaces, Canva templates, spreadsheets, and educational guidebooks.',
      },
      {
        question: 'How are digital products delivered to buyers automatically?',
        answer:
          'We integrate secure digital fulfillment platforms (Shopify Digital Downloads, Gumroad, or Lemon Squeezy) that generate unique, secure download links upon payment.',
      },
    ],
    relatedServiceSlugs: [
      'website-templates',
      'digital-product-store-management',
      'online-store-setup',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Digital Product Creation & Packaging — IZBA Marketing agency',
    seoDescription:
      'Turn your expertise into sellable digital products. Design, packaging, licensing, and automated instant download delivery systems.',
  },
  {
    id: 'website-templates',
    name: 'Website Templates',
    title: 'Website Templates',
    slug: 'website-templates',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Pre-built, responsive HTML, Next.js, and WordPress website templates ready for turnkey deployment.',
    description: [
      'Custom website development can be beyond the initial budget of early startups or personal projects. Our Website Templates service develops clean, modern, modular website templates designed for rapid deployment.',
      'Built with accessible HTML5, modern Tailwind CSS, or clean WordPress builders, our templates follow strict coding standards with zero bloated dependencies.',
      'Templates include well-organized code comments and modular component layouts, enabling developers or business owners to swap content and launch quickly.',
    ],
    includes: [
      'Modern responsive layouts for Home, About, Services, and Contact',
      'Mobile-first responsive CSS styling with clean design tokens',
      'Working client-side contact form with form validation states',
      'Fast loading speed tuning (< 1.5s visual render)',
      'Thorough installation and customization documentation',
    ],
    deliverables: [
      'Clean website template source code files',
      'Step-by-step setup and customization manual (README.md)',
      'Live demo deployment for client preview',
      'Commercial distribution or internal reuse license',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Are the templates easy for beginners to customize?',
        answer:
          'Yes. All text, colors, and images are organized in clearly commented files, accompanied by an easy step-by-step setup guide.',
      },
      {
        question: 'Do your templates work across mobile devices?',
        answer:
          'Yes. Every template is rigorously tested across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      },
    ],
    relatedServiceSlugs: [
      'ui-kits-and-design-templates',
      'digital-product-creation',
      'website-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom Website Templates & Themes — IZBA Marketing agency',
    seoDescription:
      'High-performance, responsive website templates built with clean code and modern design systems. Easy to customize and deploy.',
  },
  {
    id: 'ui-kits-and-design-templates',
    name: 'UI Kits and Design Templates',
    title: 'UI Kits and Design Templates',
    slug: 'ui-kits-and-design-templates',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Comprehensive Figma UI component kits, wireframe libraries, and web design system templates.',
    description: [
      'Speed up product design workflows with comprehensive Figma UI kits built with scalable design system architectures.',
      'Our UI Kits and Design Templates include hundreds of styled components: buttons, form inputs, modals, cards, navigation headers, and dashboards configured with auto-layout and variable color tokens.',
      'Ideal for design agencies, software teams, and indie developers who want to skip repetitive foundational setup and build screens 3x faster.',
    ],
    includes: [
      'Figma auto-layout 5.0 components with fluid constraints',
      'Design tokens for typography, spacing, radii, and color palettes',
      'Dark and light mode variable modes',
      'Pre-assembled screen layouts (Dashboards, Auth, E-commerce, Profiles)',
      'Vector iconography and illustration asset sets',
    ],
    deliverables: [
      'Master Figma community file or organized .fig download',
      'Component documentation and usage guidelines',
      'Design token export file (JSON/CSS format)',
      'Commercial design asset license',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Do the UI kits use Figma component variants and auto-layout?',
        answer:
          'Yes. All components leverage Figma component properties, nested variants, and auto-layout frames for responsive resizing.',
      },
      {
        question: 'Can developers inspect design tokens easily?',
        answer:
          'Yes. Spacing, typography, and color tokens are organized logically to map directly into Tailwind CSS or CSS variables.',
      },
    ],
    relatedServiceSlugs: [
      'ui-ux-design',
      'website-templates',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Figma UI Kits & Design System Templates — IZBA Marketing agency',
    seoDescription:
      'Professional Figma UI kits and design system templates. Auto-layout components, dark/light modes, and pre-built screens to accelerate app design.',
  },
  {
    id: 'social-media-templates',
    name: 'Social Media Templates',
    title: 'Social Media Templates',
    slug: 'social-media-templates',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Reusable Canva and Figma post, story, and carousel templates designed for consistent brand publishing.',
    description: [
      'Creating unique graphics from scratch every day is exhausting. Our Social Media Templates service provides complete suites of reusable, brand-aligned social graphics in Canva and Figma.',
      'We develop modular layout variations for quotes, testimonials, product announcements, educational lists, and milestone celebrations.',
      'Anyone on your team can open Canva, replace text in seconds, and export a beautiful, on-brand graphic ready for publishing.',
    ],
    includes: [
      '30 to 60 editable template layouts in Canva or Figma',
      'Formats for Instagram feed (1:1), portraits (4:5), and stories/reels (9:16)',
      'Strict brand color palettes, fonts, and logo placement rules',
      'Placeholder photo frames with one-click image drag-and-drop',
      'Video walkthrough demonstrating how to edit and export in Canva',
    ],
    deliverables: [
      'Direct Canva template sharing link with lifetime access',
      'Figma source file backup (.fig)',
      'Font files and brand graphic icon pack',
      'Quick reference PDF cheat sheet for team members',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do I need a Canva Pro paid account to use these templates?',
        answer:
          'We design templates using free Canva elements so they work with both free and Pro Canva accounts without surprise fees.',
      },
      {
        question: 'Can we change colors and fonts in Canva easily?',
        answer:
          'Yes. You can use Canva’s "Styles" tool or manual palette controls to re-color the entire template suite with your brand palette in one click.',
      },
    ],
    relatedServiceSlugs: [
      'social-media-post-design',
      'digital-product-creation',
      'banner-cover-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Canva Social Media Templates — IZBA Marketing agency',
    seoDescription:
      'Reusable social media templates for Canva and Figma. Keep your Instagram, LinkedIn, and Facebook branding consistent in minutes.',
  },
  {
    id: 'ebooks-and-digital-guides',
    name: 'E-books and Digital Guides',
    title: 'E-books and Digital Guides',
    slug: 'ebooks-and-digital-guides',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Professionally formatted digital e-books, whitepapers, and guides formatted for PDF and e-reader reading.',
    description: [
      'E-books and digital guides are powerful assets for lead generation, customer education, and direct digital product sales. Our service handles complete editorial layout and visual packaging.',
      'We transform your raw text manuscripts into elegantly designed digital publications with readable typography, callout boxes, chapter dividers, and diagrams.',
      'We deliver interactive PDFs with clickable tables of contents and hyperlinks, as well as reflowable ePub formats for Kindle and tablet readers.',
    ],
    includes: [
      'Cover design and interior page layout formatting',
      'Interactive Table of Contents with hyperlinked chapters',
      'Callout quote boxes, key takeaway highlights, and icon graphics',
      'High-resolution PDF export and reflowable ePub export',
      '3D digital mockup images for product listings and promotional pages',
    ],
    deliverables: [
      'Print-ready and web-optimized PDF files',
      'Standard ePub file for digital readers and e-books',
      '3D book cover mockup graphics in PNG/JPG',
      'Layered InDesign or Canva source files',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you write the e-book content or only design it?',
        answer:
          'We specialize in interior layout and cover design from your manuscript. However, we can also provide copywriting and proofreading support upon request.',
      },
      {
        question: 'Can readers click links inside the PDF?',
        answer:
          'Yes. All website URLs, social handles, and references are configured as live clickable links inside the PDF.',
      },
    ],
    relatedServiceSlugs: [
      'digital-planners',
      'document-formatting',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'E-book Design & Digital Guide Formatting — IZBA Marketing agency',
    seoDescription:
      'Professional e-book and whitepaper design. Beautiful interior layouts, clickable PDFs, ePub files, and 3D promotional book mockups.',
  },
  {
    id: 'digital-planners',
    name: 'Digital Planners',
    title: 'Digital Planners',
    slug: 'digital-planners',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Interactive hyperlinked digital planners, workbooks, and journals for GoodNotes, Notability, and tablet apps.',
    description: [
      'Digital planning on iPad and Android tablets has become a massive market. Our Digital Planners service creates interactive PDF planners with thousands of functional hyperlinks.',
      'We build daily, weekly, monthly, and yearly planner layouts with side navigation tabs that allow users to jump instantly between dates, habit trackers, and notes sections.',
      'Planners are optimized for popular note-taking apps like GoodNotes, Notability, and Samsung Notes, with smooth page flipping and small file sizes.',
    ],
    includes: [
      'Full hyperlinked tab navigation system across all calendar pages',
      'Daily, weekly, and monthly planner spreads with time blocks',
      'Specialty tracking sections (habit trackers, budgeting, goals, notes)',
      'Digital sticker pack design (PNG files with transparent background)',
      'Compatibility optimization for GoodNotes, Notability, and Xodo',
    ],
    deliverables: [
      'Master interactive PDF planner with working hyperlinked tabs',
      'Digital sticker collection (.zip of transparent PNGs and GoodNotes file)',
      'User installation guide showing how to import into tablet apps',
      '3D tablet mockup images for store listings',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do the clickable tabs work inside note apps?',
        answer:
          'We embed internal PDF bookmark hyperlinks into the tab graphics so tapping any tab instantly jumps to that exact section in GoodNotes or Notability.',
      },
      {
        question: 'Can we sell these planners on Etsy or Shopify?',
        answer:
          'Yes. We deliver unbranded commercial files ready for listing on Etsy, Shopify, or your personal digital store.',
      },
    ],
    relatedServiceSlugs: [
      'ebooks-and-digital-guides',
      'printable-products',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Interactive Digital Planners (GoodNotes) — IZBA Marketing agency',
    seoDescription:
      'Custom hyperlinked digital planners for GoodNotes and tablet note apps. Beautiful tab navigation, habit trackers, and store mockups.',
  },
  {
    id: 'presentation-templates',
    name: 'Presentation Templates',
    title: 'Presentation Templates',
    slug: 'presentation-templates',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Master slide deck templates in PowerPoint, Keynote, and Google Slides with custom layout variations.',
    description: [
      'Equip your team or customers with clean, reusable presentation templates that make creating sales pitches, webinars, and quarterly reviews effortless.',
      'Our Presentation Templates service crafts master decks containing 30 to 80 unique slide layouts: team intros, timeline milestones, charts, client case summaries, and pricing tables.',
      'All templates are constructed using native slide masters, allowing users to swap brand color themes and fonts across the entire deck in seconds.',
    ],
    includes: [
      'Custom slide master creation in 16:9 widescreen format',
      '30+ unique slide variations (agendas, data charts, timelines, quotes)',
      'Color theme variables for instant one-click color palette switching',
      'Vector icon pack and device mockup frames embedded in slides',
      'Export in PowerPoint (.pptx), Google Slides, and Keynote formats',
    ],
    deliverables: [
      'Master presentation template files (.pptx and Google Slides link)',
      'Custom icon and diagram vector library',
      'User customization guide with tips for non-designers',
      'Slide catalog thumbnail preview sheet',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can non-designers easily use the templates?',
        answer:
          'Yes. We use standard slide placeholders so users can click "Insert Image" or type text directly without breaking formatting.',
      },
      {
        question:
          'Can the presentation template be converted to Google Slides?',
        answer:
          'Yes. We test every deck in both Microsoft PowerPoint and Google Slides to ensure full font and layout parity.',
      },
    ],
    relatedServiceSlugs: [
      'powerpoint-presentation-design',
      'ai-presentation-creation',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Presentation Templates (PowerPoint & Google Slides) — IZBA Marketing agency',
    seoDescription:
      'Professional PowerPoint and Google Slides templates. 30+ slide layouts, master themes, and clean vector charts for corporate decks.',
  },
  {
    id: 'printable-products',
    name: 'Printable Products',
    title: 'Printable Products',
    slug: 'printable-products',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Print-at-home productivity organizers, checklists, wall art, and educational activity printables.',
    description: [
      'Printable products provide instant gratification for digital buyers who want physical worksheets, wall prints, or trackers they can print at home or at local print shops.',
      'Our Printable Products service designs high-resolution print-at-home items formatted in standard US Letter and international A4 dimensions.',
      'We use clean vector lines, ink-saving monochrome or minimal color palettes, and standard margin safety zones that work with home inkjet and laser printers.',
    ],
    includes: [
      'Print-ready 300 DPI high-resolution PDF exports',
      'Standard sizing (US Letter 8.5x11" and International A4)',
      'Ink-friendly minimal aesthetics and high-contrast lines',
      'Crop mark guides for items requiring cutting (cards, tags)',
      'Commercial mockups showing the printed page in styled home settings',
    ],
    deliverables: [
      'Master PDF print package in Letter and A4 sizes',
      'Print settings guide (scaling, paper weight recommendations)',
      'Product listing mockup images for e-commerce stores',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Are printables designed to save home printer ink?',
        answer:
          'Yes. We design with clean linework and avoid heavy solid background fills so home users can print affordably.',
      },
      {
        question: 'What types of printables do you build?',
        answer:
          'We design chore charts, daily planners, fitness logs, budgeting worksheets, wedding stationery, and educational flashcards.',
      },
    ],
    relatedServiceSlugs: [
      'digital-planners',
      'flyer-and-brochure-design',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Printable Products & Planner Design — IZBA Marketing agency',
    seoDescription:
      'Print-at-home printable products and worksheets. High-resolution 300 DPI PDFs in Letter and A4 with ink-friendly layouts.',
  },
  {
    id: 'online-store-setup',
    name: 'Online Store Setup',
    title: 'Online Store Setup',
    slug: 'online-store-setup',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Turnkey setup of Shopify, WooCommerce, or Gumroad stores configured with payments, policies, and shipping.',
    description: [
      'Launching an online store involves configuring dozens of backend settings: domain connections, payment processing, tax rules, shipping profiles, and legal policies.',
      'Our Online Store Setup service handles end-to-end store configuration so you can start selling smoothly without technical headaches.',
      'We configure your chosen platform (Shopify, WooCommerce, or Gumroad), install a clean responsive theme, set up test payments, and verify checkout flows.',
    ],
    includes: [
      'Store account creation and domain DNS mapping',
      'Payment gateway setup (Stripe, PayPal, Apple Pay, Google Pay)',
      'Shipping rates and tax calculation rule configuration',
      'Standard store policy pages (Privacy, Refund Policy, Terms)',
      'Email notification customization (order confirmation, shipping updates)',
    ],
    deliverables: [
      'Fully configured, live online store ready for sales',
      'Tested end-to-end checkout and payment confirmation',
      'Admin walkthrough video explaining daily order fulfillment',
      'Launch checklist and DNS security verification',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Which store platform should I choose: Shopify or WooCommerce?',
        answer:
          'Shopify is best for ease of use and zero maintenance overhead, while WooCommerce offers maximum customization and zero platform transaction fees.',
      },
      {
        question:
          'Do you help configure legal policies like refunds and shipping?',
        answer:
          'Yes. We install standard e-commerce policy templates tailored to your business terms for refunds, privacy, and shipping timelines.',
      },
    ],
    relatedServiceSlugs: [
      'ecommerce-website-development',
      'digital-product-store-management',
      'digital-product-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Turnkey Online Store Setup (Shopify & WooCommerce) — IZBA Marketing agency',
    seoDescription:
      'Complete online store setup services. Domain mapping, payment gateway integration, shipping rules, and launch-ready checkouts.',
  },
  {
    id: 'digital-product-store-management',
    name: 'Digital Product Store Management',
    title: 'Digital Product Store Management',
    slug: 'digital-product-store-management',
    categorySlug: 'digital-products-ecommerce',
    shortDescription:
      'Ongoing catalog maintenance, discount promo setup, file version updates, and customer download support.',
    description: [
      'Operating a digital downloads store requires ongoing maintenance: updating file versions, running seasonal sales, answering customer download queries, and refreshing listing graphics.',
      'Our Digital Product Store Management service provides turnkey operational management for your Gumroad, Shopify, Etsy, or WooCommerce store.',
      'We keep your listings fresh, test download links, manage coupon codes, and ensure that customer inquiries receive timely support.',
    ],
    includes: [
      'Digital file updates and version releases across product listings',
      'Promo code, bundle, and seasonal discount campaign configuration',
      'Listing graphics and product description A/B testing',
      'Customer download link reset and access troubleshooting',
      'Monthly sales revenue and product performance summaries',
    ],
    deliverables: [
      'Ongoing store maintenance and catalog updates',
      'Quarterly promotional campaign calendar execution',
      'Monthly store health and customer inquiry resolution log',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you handle customer support tickets about lost download links?',
        answer:
          'Yes. We can monitor your store inbox to help buyers retrieve lost download links or troubleshoot file unzipping issues.',
      },
      {
        question: 'Do you configure bundle discounts for related products?',
        answer:
          'Yes. We can set up product bundles and upsell offers that increase average order values across your catalog.',
      },
    ],
    relatedServiceSlugs: [
      'digital-product-creation',
      'online-store-setup',
      'product-listing-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Digital Product Store Management — IZBA Marketing agency',
    seoDescription:
      'Complete management for digital download stores. File updates, promotional campaigns, customer download support, and sales reporting.',
  },
];
