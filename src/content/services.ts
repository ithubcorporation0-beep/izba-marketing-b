import { CategoryDetail, Service } from '@/types';
import { webSoftwareServices } from './services-data/web-software';
import { digitalMarketingServices } from './services-data/digital-marketing';
import { aiAutomationServices } from './services-data/ai-automation';
import { graphicDesignServices } from './services-data/graphic-design';
import { dataEntryServices } from './services-data/data-entry';
import { digitalProductsServices } from './services-data/digital-products';
import { videoProductionServices } from './services-data/video-production';
import { itSupportServices } from './services-data/it-support';
import { educationOfficeServices } from './services-data/education-office';

/**
 * IT HUB CORPORATION — 9 CORE SERVICE CATEGORIES
 * Unified master content file for all 9 categories and 90 services.
 * Location: Mardan, Khyber Pakhtunkhwa, Pakistan.
 *
 * NOTE FOR WEBSITE OWNER:
 * Every item marked with `// TODO: confirm` represents a business variable
 * (such as starting price in PKR, delivery turnaround time, or case-specific FAQs)
 * that you can review and update at any time without touching page layout code.
 */
export const serviceCategories: CategoryDetail[] = [
  // 1. Web & Software Development
  {
    id: 'web-software-development',
    name: 'Web & Software Development',
    title: 'Web & Software Development',
    slug: 'web-software-development',
    icon: 'Code2',
    sortOrder: 1,
    isPublished: true,
    shortDescription:
      'Custom website development, web applications, e-commerce stores, and software solutions built for speed, reliability, and business growth.',
    oneSentencePromise:
      'Fast, modern websites and custom web software built to convert visitors into paying clients and automate daily business workflows.',
    whoItIsFor: [
      'Shop and retail owners in Mardan and KP transitioning from physical storefronts to online orders',
      'Growing businesses needing a central client portal, CRM, or team workflow dashboard',
      'Organizations with slow or broken websites losing prospective clients to competitors',
      'Entrepreneurs and founders launching new digital brands or software products',
    ],
    services: [
      {
        id: 'website-development',
        name: 'Website Development',
        slug: 'website-development',
        outcomeDescription:
          'A responsive, mobile-first corporate website that establishes credibility and turns visitors into phone, WhatsApp, and form inquiries.',
        bestFor: 'Businesses needing a fast, professional online presence that looks great on mobile phones.',
      },
      {
        id: 'web-application-development',
        name: 'Web Application Development',
        slug: 'web-application-development',
        outcomeDescription:
          'Custom cloud-based software tailored to your specific business logic, replacing messy spreadsheets with structured workflows.',
        bestFor: 'Companies needing internal staff dashboards, customer portals, or subscription platforms.',
      },
      {
        id: 'ecommerce-development',
        name: 'E-commerce Development',
        slug: 'ecommerce-development',
        outcomeDescription:
          'A secure online store with product catalog management, shopping cart, and local/international payment gateway setup.',
        bestFor: 'Retailers and wholesalers selling physical or digital products across Pakistan and abroad.',
      },
      {
        id: 'landing-page-development',
        name: 'Landing Page Design & Development',
        slug: 'landing-page-development',
        outcomeDescription:
          'A high-converting single-page sales funnel engineered to maximize leads and sales from social media ads and Google campaigns.',
        bestFor: 'Marketing campaigns, real estate launches, and single-product promotions.',
      },
      {
        id: 'custom-cms-development',
        name: 'Custom CMS Development',
        slug: 'custom-cms-development',
        outcomeDescription:
          'A clean content management interface that allows your in-house staff to update text, photos, and announcements without breaking layouts.',
        bestFor: 'Schools, news publishers, and active businesses with frequent announcements.',
      },
      {
        id: 'api-development-integration',
        name: 'API Development & Integration',
        slug: 'api-development-integration',
        outcomeDescription:
          'Seamless technical bridges connecting your website to courier tracking, SMS alert gateways, accounting tools, and payment providers.',
        bestFor: 'Connecting isolated software systems to eliminate duplicate manual data entry.',
      },
      {
        id: 'website-maintenance-speed-optimization',
        name: 'Website Maintenance & Speed Optimization',
        slug: 'website-maintenance-speed-optimization',
        outcomeDescription:
          'Routine security patching, daily cloud backups, and Core Web Vitals speed optimization to ensure zero downtime.',
        bestFor: 'Established businesses that cannot afford website slowdowns or unexpected crashes.',
      },
      {
        id: 'bug-fixing-code-review',
        name: 'Bug Fixing & Code Review',
        slug: 'bug-fixing-code-review',
        outcomeDescription:
          'Systematic diagnosis and resolution of broken scripts, layout distortions, and performance bottlenecks in existing code.',
        bestFor: 'Sites suffering from broken mobile menus, database errors, or sluggish response.',
      },
      {
        id: 'database-design-development',
        name: 'Database Design & Development',
        slug: 'database-design-development',
        outcomeDescription:
          'Optimized, relational database architectures that store customer and inventory records securely with instant retrieval speeds.',
        bestFor: 'High-volume businesses needing structured data models and fast query response times.',
      },
      {
        id: 'progressive-web-apps',
        name: 'Progressive Web Apps (PWA)',
        slug: 'progressive-web-apps',
        outcomeDescription:
          'Fast, installable app experiences that work directly from web browsers with offline caching and zero app store download friction.',
        bestFor: 'Brands wanting mobile app convenience without the high cost of native iOS and Android store approvals.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We meet to understand your business objectives, target audience, and functional specifications.',
      },
      {
        step: 2,
        title: 'Proposal & Architecture',
        description: 'We provide a clear scope breakdown, wireframes, milestone timeline, and fixed deliverables.',
      },
      {
        step: 3,
        title: 'Engineering & Testing',
        description: 'We build clean, responsive code with thorough cross-device and performance checks.',
      },
      {
        step: 4,
        title: 'Delivery & Launch',
        description: 'We deploy to your live domain, configure cloud hosting, and run launch verification tests.',
      },
      {
        step: 5,
        title: 'Handover & Support',
        description: 'We provide administrator walkthroughs, documentation, and post-launch technical assistance.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 45000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "2 to 4 weeks")
    faqs: [
      {
        question: 'Will my website display correctly on mobile phones?',
        answer:
          'Yes. Every website and web application is built mobile-first, ensuring smooth loading, readable typography, and easy navigation across smartphones, tablets, and desktop computers.',
      },
      {
        question: 'Can I edit and update content myself once the website is launched?',
        answer:
          'Yes. We configure user-friendly content management tools and provide straightforward documentation so your team can change text, upload images, and add new services independently.',
      },
      {
        question: 'Do you help with domain names and website hosting?',
        answer:
          'Yes. We assist with domain registration, DNS record configuration, and setting up reliable, high-speed cloud hosting.',
      },
      {
        question: 'How do we begin a new web development project with IT HUB?',
        answer:
          'Click the "Get a Free Quote" button to share your requirements, or contact our team directly via WhatsApp or phone. We will discuss your goals and provide a clear proposal.',
      },
    ],
    relatedCategorySlugs: ['digital-marketing-seo', 'it-support-business-solutions', 'graphic-design-branding'],
    seoTitle: 'Web & Software Development in Mardan | IT HUB Corporation',
    seoDescription:
      'Custom website development, web applications, e-commerce stores, and software solutions built for speed and conversions in Mardan and KP.',
  },

  // 2. Digital Marketing & SEO
  {
    id: 'digital-marketing-seo',
    name: 'Digital Marketing & SEO',
    title: 'Digital Marketing & SEO',
    slug: 'digital-marketing-seo',
    icon: 'TrendingUp',
    sortOrder: 2,
    isPublished: true,
    shortDescription:
      'Search engine optimization, targeted Google and Meta ad campaigns, social media marketing, and data-backed lead generation strategies.',
    oneSentencePromise:
      'Targeted search optimization and high-intent digital advertising designed to attract real customers and increase your inbound sales.',
    whoItIsFor: [
      'Local businesses in Mardan, Peshawar, and KP looking to rank at the top of Google Maps and local search',
      'E-commerce brands seeking profitable return on ad spend (ROAS) rather than wasted ad budget',
      'Service providers needing a steady stream of qualified customer inquiries via WhatsApp and phone',
      'Companies that ran generic ads in the past with low conversion and want data-driven management',
    ],
    services: [
      {
        id: 'search-engine-optimization',
        name: 'Search Engine Optimization (SEO)',
        slug: 'search-engine-optimization',
        outcomeDescription:
          'Comprehensive on-page and technical optimizations that improve your Google rankings for the exact terms your buyers search for.',
        bestFor: 'Businesses wanting compounding, long-term organic traffic without paying for every click.',
      },
      {
        id: 'social-media-marketing',
        name: 'Social Media Marketing',
        slug: 'social-media-marketing',
        outcomeDescription:
          'Targeted organic content plans and community engagement strategies across Facebook, Instagram, and LinkedIn.',
        bestFor: 'Brands wanting to build an authentic local following and stay top-of-mind with customers.',
      },
      {
        id: 'pay-per-click-advertising',
        name: 'Pay-Per-Click Advertising (PPC)',
        slug: 'pay-per-click-advertising',
        outcomeDescription:
          'High-intent Google Ads and Meta paid ad campaigns designed to generate direct phone calls, WhatsApp messages, and online sales.',
        bestFor: 'Businesses needing immediate leads and measurable customer acquisition.',
      },
      {
        id: 'content-marketing',
        name: 'Content Marketing',
        slug: 'content-marketing',
        outcomeDescription:
          'Informative articles, guides, and case studies that answer your buyers questions and establish your firm as an industry authority.',
        bestFor: 'Building trust with prospective clients and boosting organic search rankings.',
      },
      {
        id: 'email-marketing-newsletters',
        name: 'Email Marketing & Newsletter Campaigns',
        slug: 'email-marketing-newsletters',
        outcomeDescription:
          'Automated email sequences and broadcast newsletters that nurture prospective buyers and turn one-time shoppers into repeat clients.',
        bestFor: 'E-commerce stores and professional services with an existing customer contact list.',
      },
      {
        id: 'local-seo-google-business-profile',
        name: 'Local SEO & Google Business Profile Setup',
        slug: 'local-seo-google-business-profile',
        outcomeDescription:
          'Complete profile verification, citation building, and map ranking strategies to bring nearby customers to your physical location.',
        bestFor: 'Clinics, retail shops, showrooms, and local service providers in Mardan and KP.',
      },
      {
        id: 'social-media-management',
        name: 'Social Media Page Management',
        slug: 'social-media-management',
        outcomeDescription:
          'End-to-end post scheduling, graphic publishing, captioning, and inquiry monitoring so your social channels stay active and professional.',
        bestFor: 'Busy business owners who do not have time to handle daily social media posts.',
      },
      {
        id: 'influencer-marketing-outreach',
        name: 'Influencer Marketing Outreach',
        slug: 'influencer-marketing-outreach',
        outcomeDescription:
          'Strategic collaborations with verified local and regional content creators to introduce your products to engaged audiences.',
        bestFor: 'New product launches, local promotions, and consumer brand awareness.',
      },
      {
        id: 'digital-marketing-strategy-audit',
        name: 'Digital Marketing Strategy & Audit',
        slug: 'digital-marketing-strategy-audit',
        outcomeDescription:
          'A rigorous diagnostic audit of your existing website traffic, social channels, and ad funnels to pinpoint where you are losing sales.',
        bestFor: 'Companies unsure why their current marketing spend is failing to produce inquiries.',
      },
      {
        id: 'conversion-rate-optimization',
        name: 'Conversion Rate Optimization (CRO)',
        slug: 'conversion-rate-optimization',
        outcomeDescription:
          'Page layout improvements, simpler inquiry forms, and call-to-action testing that convert more of your existing visitors into paying clients.',
        bestFor: 'Websites already getting traffic that want to double lead volume without increasing ad spend.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We evaluate your current marketing channels, target audience, and primary revenue goals.',
      },
      {
        step: 2,
        title: 'Audit & Strategy',
        description: 'We formulate a tailored action plan with keyword research, competitor analysis, and budget guidance.',
      },
      {
        step: 3,
        title: 'Campaign Setup',
        description: 'We produce ad creative assets, configure tracking pixels, optimize website signals, and launch.',
      },
      {
        step: 4,
        title: 'Monitoring & Optimization',
        description: 'We monitor cost-per-lead and engagement daily, reallocating budget toward top-performing segments.',
      },
      {
        step: 5,
        title: 'Reporting & Scaling',
        description: 'We share transparent performance reports and scale winning campaigns for sustained growth.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 30000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "Monthly retainer / 2 weeks setup")
    faqs: [
      {
        question: 'How quickly will I see results from SEO compared to paid ads?',
        answer:
          'Paid advertising (Google and Meta Ads) can begin delivering phone and WhatsApp inquiries within 24 to 48 hours of campaign launch. Search Engine Optimization (SEO) is a compounding organic investment that typically takes 3 to 6 months to secure top Google positions.',
      },
      {
        question: 'Do I pay ad platforms directly or through IT HUB?',
        answer:
          'You retain full ownership of your ad accounts and pay Google or Meta directly for ad spend, ensuring complete financial transparency. We charge a dedicated fee for campaign strategy, design, and optimization.',
      },
      {
        question: 'Can you help my physical shop or office in Mardan get more walk-in customers?',
        answer:
          'Yes. Our Local SEO and Google Business Profile optimization specifically targets nearby residents searching for your services on Google Maps and search results in Mardan and surrounding districts.',
      },
      {
        question: 'Do you guarantee specific ranking positions or follower counts?',
        answer:
          'No reputable agency can guarantee specific Google ranks or vanity follower counts because search algorithms and platform policies update frequently. We focus on ethical, white-hat methods that drive genuine customer inquiries and revenue.',
      },
    ],
    relatedCategorySlugs: ['web-software-development', 'graphic-design-branding', 'video-content-production'],
    seoTitle: 'Digital Marketing & SEO in Mardan | IT HUB Corporation',
    seoDescription:
      'Search engine optimization, Google Ads, social media marketing, and local lead generation in Mardan and Khyber Pakhtunkhwa.',
  },

  // 3. AI Services & Automation
  {
    id: 'ai-services-automation',
    name: 'AI Services & Automation',
    title: 'AI Services & Automation',
    slug: 'ai-services-automation',
    icon: 'Bot',
    sortOrder: 3,
    isPublished: true,
    shortDescription:
      'AI chatbot development, workflow automation, custom GPT assistants, and smart integrations designed to eliminate repetitive operational bottlenecks.',
    oneSentencePromise:
      'Smart AI chatbots and automated workflows that answer customer inquiries 24/7 and eliminate hours of manual administrative work.',
    whoItIsFor: [
      'Customer support teams overwhelmed by answering the same repetitive questions on WhatsApp or web',
      'Business operators spending hours each week manually copying data between sheets, CRM, and email',
      'Companies wanting an automated booking or lead qualification assistant working around the clock',
      'Forward-looking businesses looking to deploy proprietary AI tools trained on their company knowledge',
    ],
    services: [
      {
        id: 'ai-chatbot-development',
        name: 'AI Chatbot Development',
        slug: 'ai-chatbot-development',
        outcomeDescription:
          'An intelligent web or WhatsApp assistant trained on your product catalog and FAQs to answer customer questions and capture leads 24/7.',
        bestFor: 'Providing immediate, round-the-clock customer responses without hiring night-shift staff.',
      },
      {
        id: 'workflow-automation',
        name: 'Workflow Automation',
        slug: 'workflow-automation',
        outcomeDescription:
          'Connected software pipelines that automatically trigger tasks when new orders, inquiries, or payments arrive.',
        bestFor: 'Connecting Google Sheets, CRM, email, and billing systems to eliminate manual data entry.',
      },
      {
        id: 'ai-content-generation-setup',
        name: 'AI Content Generation Setup',
        slug: 'ai-content-generation-setup',
        outcomeDescription:
          'Configured AI drafting systems tuned to your brand guidelines for creating consistent product descriptions, emails, and reports.',
        bestFor: 'E-commerce catalogs and content teams needing faster drafting turnaround.',
      },
      {
        id: 'data-scraping-web-automation',
        name: 'Data Scraping & Web Automation',
        slug: 'data-scraping-web-automation',
        outcomeDescription:
          'Custom automated scripts that extract publicly available product prices, directories, or catalog data into clean spreadsheets.',
        bestFor: 'Market price monitoring, supplier catalog aggregation, and competitive research.',
      },
      {
        id: 'ai-tool-integration',
        name: 'AI Tool Integration',
        slug: 'ai-tool-integration',
        outcomeDescription:
          'Secure API connections bringing OpenAI, Claude, or specialized AI models directly into your existing company software.',
        bestFor: 'Adding smart search, auto-categorization, or text summarization into your custom platform.',
      },
      {
        id: 'automated-email-responders',
        name: 'Automated Email Responders',
        slug: 'automated-email-responders',
        outcomeDescription:
          'Intelligent email filters and reply systems that acknowledge incoming customer briefs and direct urgent tickets to the right team member.',
        bestFor: 'Ensuring zero customer inquiries fall through the cracks during busy workdays.',
      },
      {
        id: 'ai-image-media-generation',
        name: 'AI Image & Media Generation',
        slug: 'ai-image-media-generation',
        outcomeDescription:
          'Generative image pipelines for rapid concept exploration, product background cleanups, and marketing visual variations.',
        bestFor: 'Quick visual mockups, advertising variations, and social media creative concepts.',
      },
      {
        id: 'custom-gpt-assistant-creation',
        name: 'Custom GPT / AI Assistant Creation',
        slug: 'custom-gpt-assistant-creation',
        outcomeDescription:
          'A private AI assistant trained exclusively on your internal standard operating procedures, policies, and training manuals.',
        bestFor: 'Staff onboarding, policy lookups, and internal administrative support.',
      },
      {
        id: 'business-process-automation-consulting',
        name: 'Business Process Automation Consulting',
        slug: 'business-process-automation-consulting',
        outcomeDescription:
          'A diagnostic review of your daily business workflows with a practical roadmap showing exactly which tasks can be automated cost-effectively.',
        bestFor: 'Companies wanting practical automation advice without buying unnecessary software.',
      },
      {
        id: 'voice-ai-call-assistant-setup',
        name: 'Voice AI & Call Assistant Setup',
        slug: 'voice-ai-call-assistant-setup',
        outcomeDescription:
          'Automated voice agent integrations for phone greetings, appointment reminders, and routing callers to relevant staff.',
        bestFor: 'Offices and clinics receiving high call volumes for routine appointment booking.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We identify the repetitive tasks and customer questions consuming your team’s daily hours.',
      },
      {
        step: 2,
        title: 'Knowledge Curation',
        description: 'We compile your business documentation, conversation rules, and integration endpoints.',
      },
      {
        step: 3,
        title: 'Development & Guardrails',
        description: 'We build the bot or workflow logic with strict guardrails to prevent incorrect responses.',
      },
      {
        step: 4,
        title: 'Testing & Integration',
        description: 'We test across real-life customer scenarios and connect the system to WhatsApp or your website.',
      },
      {
        step: 5,
        title: 'Handover & Monitoring',
        description: 'We train your team to review conversation logs and update answers as your business evolves.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 50000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "1 to 3 weeks")
    faqs: [
      {
        question: 'Can the AI chatbot connect to our WhatsApp business phone number?',
        answer:
          'Yes. We configure conversational assistants that integrate directly with WhatsApp Business accounts, website widgets, or Facebook Messenger.',
      },
      {
        question: 'Will the AI make up incorrect information about our company?',
        answer:
          'We implement strict knowledge boundaries that restrict the AI to your approved business documentation. If a customer asks something outside the approved knowledge base, the bot politely directs them to your human team.',
      },
      {
        question: 'Do I need programming skills to manage the bot after you set it up?',
        answer:
          'No. We build user-friendly systems and provide simple instructions so your staff can update business hours, prices, and common answers anytime.',
      },
      {
        question: 'Is our proprietary company data kept safe and confidential?',
        answer:
          'Yes. We use private, enterprise API endpoints with zero public data sharing, ensuring your business information remains completely confidential.',
      },
    ],
    relatedCategorySlugs: ['web-software-development', 'data-entry-virtual-assistance', 'it-support-business-solutions'],
    seoTitle: 'AI Services & Automation in Mardan | IT HUB Corporation',
    seoDescription:
      'AI chatbot development, workflow automation, custom GPT assistants, and business process automation in Mardan and KP.',
  },

  // 4. Graphic Design & Branding
  {
    id: 'graphic-design-branding',
    name: 'Graphic Design & Branding',
    title: 'Graphic Design & Branding',
    slug: 'graphic-design-branding',
    icon: 'Palette',
    sortOrder: 4,
    isPublished: true,
    shortDescription:
      'Professional logo design, corporate visual identity, marketing collaterals, social graphics, and packaging design built for trust.',
    oneSentencePromise:
      'Distinctive logos and cohesive corporate branding that make your business look established, credible, and instantly recognizable.',
    whoItIsFor: [
      'New startups and businesses needing a complete, professional corporate identity from scratch',
      'Established companies with outdated logos seeking a clean, modern visual refresh',
      'Manufacturers and retail producers requiring print-ready packaging, labels, and boxes',
      'Marketing teams needing consistent social media graphics, brochures, and sales presentations',
    ],
    services: [
      {
        id: 'logo-design-brand-identity',
        name: 'Logo Design & Brand Identity',
        slug: 'logo-design-brand-identity',
        outcomeDescription:
          'A memorable vector logo and brand identity system that positions your company as a trusted industry leader.',
        bestFor: 'New businesses and companies undergoing a complete visual rebranding.',
      },
      {
        id: 'social-media-graphics-design',
        name: 'Social Media Post & Banner Design',
        slug: 'social-media-graphics-design',
        outcomeDescription:
          'Eye-catching post templates, promotional covers, and banner designs tailored for high engagement on Facebook and Instagram.',
        bestFor: 'Brands needing polished, consistent graphics for ongoing digital campaigns.',
      },
      {
        id: 'business-card-stationery-design',
        name: 'Business Card & Stationery Design',
        slug: 'business-card-stationery-design',
        outcomeDescription:
          'Print-ready corporate stationery including business cards, official letterheads, folders, and branded envelopes.',
        bestFor: 'Executive networking, business meetings, and official corporate correspondence.',
      },
      {
        id: 'flyer-brochure-poster-design',
        name: 'Flyer, Brochure & Poster Design',
        slug: 'flyer-brochure-poster-design',
        outcomeDescription:
          'Structured marketing brochures, product flyers, and event posters formatted for crisp commercial printing.',
        bestFor: 'Trade expos, store launches, corporate sales meetings, and physical distribution.',
      },
      {
        id: 'packaging-label-design',
        name: 'Packaging & Label Design',
        slug: 'packaging-label-design',
        outcomeDescription:
          'Shelf-ready packaging, bottle labels, box designs, and pouch artwork compliant with commercial print specifications.',
        bestFor: 'Cosmetics, packaged foods, apparel, and consumer goods manufacturers.',
      },
      {
        id: 'ui-ux-design',
        name: 'UI/UX Design (Web & Mobile Mockups)',
        slug: 'ui-ux-design',
        outcomeDescription:
          'User-centered website layouts and mobile app screens created in Figma, focused on intuitive navigation and conversion.',
        bestFor: 'Software developers and digital startups before writing front-end code.',
      },
      {
        id: 'infographic-design',
        name: 'Infographic Design',
        slug: 'infographic-design',
        outcomeDescription:
          'Visual diagrams and data graphics that make complex statistics, research findings, and workflows easy to understand.',
        bestFor: 'Annual reports, presentations, and social media educational content.',
      },
      {
        id: 'vector-tracing-image-editing',
        name: 'Vector Tracing & Image Editing',
        slug: 'vector-tracing-image-editing',
        outcomeDescription:
          'Converting low-resolution, pixelated artwork into scalable vector files, alongside photo retouching and background removal.',
        bestFor: 'Restoring old logos for large signage, embroidery, or high-definition printing.',
      },
      {
        id: 'brand-style-guides',
        name: 'Brand Style Guides',
        slug: 'brand-style-guides',
        outcomeDescription:
          'A comprehensive brand manual defining exact color hex codes, typography rules, logo clearance spacing, and usage standards.',
        bestFor: 'Maintaining brand consistency across multiple branches, staff, and external vendors.',
      },
      {
        id: 'merchandise-tshirt-design',
        name: 'T-Shirt & Merchandise Design',
        slug: 'merchandise-tshirt-design',
        outcomeDescription:
          'Vector graphic artwork formatted specifically for screen printing, embroidery, corporate uniforms, and promotional merchandise.',
        bestFor: 'Staff uniforms, company merchandise, sports kits, and promotional giveaways.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We discuss your business values, aesthetic tastes, target audience, and preferred design style.',
      },
      {
        step: 2,
        title: 'Concept Exploration',
        description: 'We present 2 to 3 distinct concept directions and color palettes for your feedback.',
      },
      {
        step: 3,
        title: 'Refinement & Polishing',
        description: 'We refine the chosen direction, perfecting proportions, typography, and visual balance.',
      },
      {
        step: 4,
        title: 'File Preparation',
        description: 'We export all production assets in vector formats (AI, EPS, SVG, PDF) and web formats (PNG, JPG).',
      },
      {
        step: 5,
        title: 'Handover & Guidelines',
        description: 'We deliver complete master source files ready for commercial print shops and digital use.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 15000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "3 to 7 business days")
    faqs: [
      {
        question: 'Will I receive vector source files that print shops require?',
        answer:
          'Yes. You receive full vector source files (AI, EPS, SVG, PDF) alongside high-resolution raster files (PNG with transparent backgrounds and JPGs) suitable for both giant billboard printing and small digital avatars.',
      },
      {
        question: 'How many design concepts do you show before final selection?',
        answer:
          'We typically develop 2 to 3 distinct visual directions during the concept phase so you can compare styles before we refine the winning design.',
      },
      {
        question: 'Can you modernize our existing logo without losing our original identity?',
        answer:
          'Yes. We offer brand refreshes where we clean up proportions, update fonts, and sharpen colors while keeping the core visual heritage your loyal customers recognize.',
      },
      {
        question: 'Who owns the final copyright of the approved design work?',
        answer:
          'Upon project completion and final settlement, complete commercial ownership and usage rights belong 100% to your company.',
      },
    ],
    relatedCategorySlugs: ['web-software-development', 'digital-marketing-seo', 'video-content-production'],
    seoTitle: 'Graphic Design & Branding in Mardan | IT HUB Corporation',
    seoDescription:
      'Professional logo design, corporate brand identity, marketing collaterals, and packaging design in Mardan and KP.',
  },

  // 5. Data Entry & Virtual Assistance
  {
    id: 'data-entry-virtual-assistance',
    name: 'Data Entry & Virtual Assistance',
    title: 'Data Entry & Virtual Assistance',
    slug: 'data-entry-virtual-assistance',
    icon: 'FileSpreadsheet',
    sortOrder: 5,
    isPublished: true,
    shortDescription:
      'Accurate data entry, web research, spreadsheet cleanup, document conversion, and administrative virtual assistant support.',
    oneSentencePromise:
      'Fast, accurate data processing and remote administrative support that frees your team to focus on core revenue activities.',
    whoItIsFor: [
      'Business managers buried under backlogged paperwork, physical invoices, and messy spreadsheets',
      'E-commerce stores needing hundreds of products entered with descriptions, prices, and tags',
      'Sales teams looking for verified contact lists of business prospects in specific industries',
      'Companies digitizing paper archives and scanned PDF documents into structured Excel databases',
    ],
    services: [
      {
        id: 'data-entry-processing',
        name: 'Data Entry & Processing',
        slug: 'data-entry-processing',
        outcomeDescription:
          'Fast, verified entry of invoices, client forms, receipts, and handwritten logs into organized digital spreadsheets.',
        bestFor: 'Clearing administrative backlogs and keeping business records up to date.',
      },
      {
        id: 'web-research-lead-generation',
        name: 'Web Research & Lead List Building',
        slug: 'web-research-lead-generation',
        outcomeDescription:
          'Systematic internet research to discover and compile verified business contact details into targeted sales spreadsheets.',
        bestFor: 'B2B sales teams needing verified email and phone lists of potential business buyers.',
      },
      {
        id: 'excel-sheets-data-organization',
        name: 'Excel & Google Sheets Automation',
        slug: 'excel-sheets-data-organization',
        outcomeDescription:
          'Organizing and deduplicating raw spreadsheet data with automated formulas, lookup functions, and pivot tables.',
        bestFor: 'Businesses needing clean, error-free accounting and inventory sheets.',
      },
      {
        id: 'copy-paste-data-cleaning',
        name: 'Copy-Paste & Data Cleansing',
        slug: 'copy-paste-data-cleaning',
        outcomeDescription:
          'Careful reformatting, standardization, and migration of text records between incompatible software tools.',
        bestFor: 'Large data migrations requiring human oversight and formatting consistency.',
      },
      {
        id: 'virtual-assistant-services',
        name: 'Virtual Assistant Support',
        slug: 'virtual-assistant-services',
        outcomeDescription:
          'Dedicated remote assistant support handling routine email screening, supplier follow-ups, and calendar coordination.',
        bestFor: 'Executives and small business owners needing reliable remote administrative help.',
      },
      {
        id: 'file-conversion-formatting',
        name: 'File Conversion (PDF to Word/Excel)',
        slug: 'file-conversion-formatting',
        outcomeDescription:
          'Clean conversion of scanned PDFs, image tables, and printed documents into fully editable Word and Excel documents.',
        bestFor: 'Digitizing legal contracts, price lists, and financial statements.',
      },
      {
        id: 'crm-data-entry-management',
        name: 'CRM & Database Data Entry',
        slug: 'crm-data-entry-management',
        outcomeDescription:
          'Accurate entry of client leads, meeting notes, deal stages, and purchase records inside your company CRM system.',
        bestFor: 'Keeping sales pipelines updated so no customer opportunities are lost.',
      },
      {
        id: 'ecommerce-product-listing',
        name: 'E-commerce Product Uploading',
        slug: 'ecommerce-product-listing',
        outcomeDescription:
          'Batch uploading products with titles, formatted descriptions, SKU codes, pricing, category tags, and images.',
        bestFor: 'Shopify, WooCommerce, Amazon, and Daraz store owners.',
      },
      {
        id: 'audio-video-transcription',
        name: 'Transcription Services',
        slug: 'audio-video-transcription',
        outcomeDescription:
          'Accurate text transcripts of recorded business meetings, interviews, voice memos, and legal hearings.',
        bestFor: 'Creating searchable text records of spoken audio and video recordings.',
      },
      {
        id: 'email-calendar-management',
        name: 'Email & Calendar Management',
        slug: 'email-calendar-management',
        outcomeDescription:
          'Daily inbox triage, spam removal, meeting scheduling, and calendar synchronization across time zones.',
        bestFor: 'Busy professionals who want an organized, clutter-free inbox and calendar.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We review your source files, target spreadsheet format, and project deadlines.',
      },
      {
        step: 2,
        title: 'Sample Verification',
        description: 'We process a small test sample for your approval to confirm formatting and accuracy standards.',
      },
      {
        step: 3,
        title: 'Batch Processing',
        description: 'Our team enters and verifies data using dual-entry and secondary verification checks.',
      },
      {
        step: 4,
        title: 'Quality Check',
        description: 'We run deduplication, formula integrity, and completeness audits against the raw files.',
      },
      {
        step: 5,
        title: 'Delivery & Reconciliation',
        description: 'We deliver your completed files (Excel, Google Sheets, CSV) and confirm your satisfaction.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 10000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "1 to 3 days per batch")
    faqs: [
      {
        question: 'How do you guarantee that entered data is error-free?',
        answer:
          'We use structured validation checklists and peer reviews where completed spreadsheets are cross-referenced against original source documents before handover.',
      },
      {
        question: 'How do you keep our company and client data confidential?',
        answer:
          'All project data is handled with strict confidentiality. Files are accessed solely by assigned team members on secure systems, and we are pleased to sign non-disclosure agreements (NDAs) upon request.',
      },
      {
        question: 'Can your team work directly inside our Google Drive or company CRM?',
        answer:
          'Yes. We can work directly within your cloud spreadsheets, Google Workspace, Microsoft 365, or CRM portal using access rights you assign.',
      },
      {
        question: 'Can we test your work with a small sample first?',
        answer:
          'Yes. We encourage new clients to provide a small sample batch so you can inspect our turnaround speed, accuracy, and formatting before committing to a larger project.',
      },
    ],
    relatedCategorySlugs: ['education-office-services', 'ai-services-automation', 'digital-products-ecommerce'],
    seoTitle: 'Data Entry & Virtual Assistance in Mardan | IT HUB Corporation',
    seoDescription:
      'Accurate data entry, spreadsheet cleaning, web research, e-commerce product uploads, and virtual assistance in Mardan, KP.',
  },

  // 6. Digital Products & E-commerce
  {
    id: 'digital-products-ecommerce',
    name: 'Digital Products & E-commerce',
    title: 'Digital Products & E-commerce',
    slug: 'digital-products-ecommerce',
    icon: 'ShoppingBag',
    sortOrder: 6,
    isPublished: true,
    shortDescription:
      'Turnkey online stores, digital product packaging, Shopify and WooCommerce setups, templates, and automated checkout funnels.',
    oneSentencePromise:
      'Turnkey online storefronts and digital product setups built to sell physical goods, templates, and downloads with automated delivery.',
    whoItIsFor: [
      'Creators, educators, and consultants packaging knowledge into downloadable digital products',
      'Retailers launching a direct-to-consumer online shop with minimum technical hassle',
      'Store owners needing local (Easypaisa, JazzCash, cards) or international payment setups',
      'Entrepreneurs expanding into print-on-demand or automated digital template businesses',
    ],
    services: [
      {
        id: 'digital-product-creation',
        name: 'Digital Product Creation & Setup',
        slug: 'digital-product-creation',
        outcomeDescription:
          'End-to-end design, packaging, and digital delivery setup for selling downloadable guides, checklists, and software assets.',
        bestFor: 'Monetizing your professional expertise with automated digital downloads.',
      },
      {
        id: 'shopify-store-setup',
        name: 'Shopify Store Setup & Customization',
        slug: 'shopify-store-setup',
        outcomeDescription:
          'Complete storefront build, theme customization, product catalog configuration, and automated order confirmation setup.',
        bestFor: 'Brands wanting a reliable, hosted online store with minimal maintenance overhead.',
      },
      {
        id: 'woocommerce-store-setup',
        name: 'WooCommerce Store Setup',
        slug: 'woocommerce-store-setup',
        outcomeDescription:
          'A self-hosted WordPress e-commerce store giving you complete ownership of your customer data, custom plugins, and zero monthly platform fees.',
        bestFor: 'Businesses wanting flexible customization and complete data ownership.',
      },
      {
        id: 'etsy-shop-setup',
        name: 'Etsy Shop Setup & Optimization',
        slug: 'etsy-shop-setup',
        outcomeDescription:
          'Optimized shop branding, listing descriptions, keyword tags, and digital fulfillment configured to attract international buyers.',
        bestFor: 'Crafters, artists, and digital template creators selling to global audiences.',
      },
      {
        id: 'digital-planners-templates',
        name: 'Digital Planner & Template Design',
        slug: 'digital-planners-templates',
        outcomeDescription:
          'Interactive, clickable PDF planners and journals designed for tablet note-taking applications like GoodNotes and Notability.',
        bestFor: 'Etsy, Gumroad, and Shopify stores selling digital lifestyle and productivity assets.',
      },
      {
        id: 'ebook-formatting-cover-design',
        name: 'E-book Formatting & Cover Design',
        slug: 'ebook-formatting-cover-design',
        outcomeDescription:
          'Professional typographic layout for Kindle, EPUB, and PDF formats alongside high-converting 3D cover graphics.',
        bestFor: 'Authors, coaches, and businesses publishing lead-magnet or commercial books.',
      },
      {
        id: 'notion-template-design',
        name: 'Notion Template Development',
        slug: 'notion-template-design',
        outcomeDescription:
          'Custom Notion dashboards, project management systems, and client workspaces formatted for commercial distribution.',
        bestFor: 'Consultants and agencies packaging repeatable operating procedures for resale.',
      },
      {
        id: 'canva-template-packs',
        name: 'Canva Template Pack Creation',
        slug: 'canva-template-packs',
        outcomeDescription:
          'Cohesive social media graphic bundles created in Canva that your buyers can easily edit using a free Canva account.',
        bestFor: 'Content creators, marketing consultants, and digital product shops.',
      },
      {
        id: 'print-on-demand-setup',
        name: 'Print-on-Demand Store Setup',
        slug: 'print-on-demand-setup',
        outcomeDescription:
          'Automating connections between your online store and manufacturing partners for custom apparel and prints with zero inventory.',
        bestFor: 'Selling custom merchandise without upfront inventory or shipping logistics.',
      },
      {
        id: 'payment-gateway-integration',
        name: 'Payment Gateway Integration',
        slug: 'payment-gateway-integration',
        outcomeDescription:
          'Secure configuration of debit/credit card processors, digital wallets, and automated receipts on your website checkout.',
        bestFor: 'Enabling seamless, secure online payments for domestic and overseas customers.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We discuss your product offerings, target buyers, and preferred sales platform.',
      },
      {
        step: 2,
        title: 'Store Architecture',
        description: 'We structure category hierarchies, payment requirements, and automated download funnels.',
      },
      {
        step: 3,
        title: 'Storefront Build',
        description: 'We build the storefront, upload product assets, and configure checkout and currency settings.',
      },
      {
        step: 4,
        title: 'Order Flow Testing',
        description: 'We run live test purchases to verify checkout, automated download delivery, and email receipts.',
      },
      {
        step: 5,
        title: 'Launch & Training',
        description: 'We publish the store and provide walkthrough videos on adding new products and tracking orders.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 40000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "1 to 3 weeks")
    faqs: [
      {
        question: 'Should I choose Shopify or WooCommerce for my online store?',
        answer:
          'Shopify is best if you want an all-in-one hosted system with zero technical maintenance. WooCommerce is best if you already use WordPress, want total customization, or want to avoid monthly platform fees.',
      },
      {
        question: 'How do customers receive digital downloads after completing payment?',
        answer:
          'Customers receive an instant download button on the checkout confirmation screen and an automated email containing their secure download credentials.',
      },
      {
        question: 'Can you configure payment options for customers in Pakistan and abroad?',
        answer:
          'Yes. We configure gateways supporting local payment methods (such as domestic bank cards and mobile wallets) and international card processing depending on your business registration and market.',
      },
      {
        question: 'Can I add new products myself after the store is finished?',
        answer:
          'Yes. We provide complete admin training so you and your team can add products, adjust prices, and run promotional sales independently.',
      },
    ],
    relatedCategorySlugs: ['web-software-development', 'graphic-design-branding', 'digital-marketing-seo'],
    seoTitle: 'Digital Products & E-commerce in Mardan | IT HUB Corporation',
    seoDescription:
      'Shopify store setup, WooCommerce development, digital product creation, and payment gateway configuration in Mardan, KP.',
  },

  // 7. Video & Content Production
  {
    id: 'video-content-production',
    name: 'Video & Content Production',
    title: 'Video & Content Production',
    slug: 'video-content-production',
    icon: 'Video',
    sortOrder: 7,
    isPublished: true,
    shortDescription:
      'Professional YouTube video editing, social media reels, motion graphics, promo videos, and crisp audio engineering.',
    oneSentencePromise:
      'Polished video editing, dynamic social reels, and promotional video content that hold viewer attention and drive action.',
    whoItIsFor: [
      'YouTube creators and businesses wanting professional pacing, sound design, and retention-focused editing',
      'Brands needing high-energy short-form Reels, TikToks, and Shorts to drive viral organic reach',
      'Companies needing product promo videos, customer explainers, and paid social media video ads',
      'Podcasters seeking clean multi-camera video cuts and broadcast-quality audio cleanup',
    ],
    services: [
      {
        id: 'video-editing-youtube',
        name: 'Video Editing (YouTube & Corporate)',
        slug: 'video-editing-youtube',
        outcomeDescription:
          'Narrative pacing, color grading, sound design, and B-roll integration that keep viewers watching your videos longer.',
        bestFor: 'Long-form YouTube channels, corporate presentations, and educational webinars.',
      },
      {
        id: 'short-form-video-editing',
        name: 'Short-Form Video Editing (Reels, TikTok, Shorts)',
        slug: 'short-form-video-editing',
        outcomeDescription:
          'Fast-paced vertical edits with engaging text hooks, animated captions, sound effects, and smooth transitions.',
        bestFor: 'Instagram Reels, TikTok, and YouTube Shorts creators seeking rapid algorithmic reach.',
      },
      {
        id: 'motion-graphics-animation',
        name: 'Motion Graphics & Title Animations',
        slug: 'motion-graphics-animation',
        outcomeDescription:
          'Custom 2D motion graphics, kinetic typography, and animated title cards that explain complex topics with visual flair.',
        bestFor: 'Software walkthroughs, financial explainer videos, and brand intros.',
      },
      {
        id: 'subtitle-captioning-services',
        name: 'Subtitle & Caption Addition',
        slug: 'subtitle-captioning-services',
        outcomeDescription:
          'Styled, readable burned-in subtitles and formatted SRT files ensuring your message is understood even when viewers watch on mute.',
        bestFor: 'Social media video ads where the majority of viewers watch without audio.',
      },
      {
        id: 'podcast-audio-video-editing',
        name: 'Podcast Audio & Video Editing',
        slug: 'podcast-audio-video-editing',
        outcomeDescription:
          'Multi-camera video cuts, background noise removal, audio leveling, and chapter markers for audio and video podcasts.',
        bestFor: 'Podcasters publishing on YouTube, Spotify, and Apple Podcasts.',
      },
      {
        id: 'promotional-video-ads',
        name: 'Promotional Video Creation',
        slug: 'promotional-video-ads',
        outcomeDescription:
          'Punchy commercial video advertisements crafted to capture attention within the first 3 seconds and drive clicks.',
        bestFor: 'Paid ad campaigns across Facebook, Instagram, and YouTube.',
      },
      {
        id: 'tutorial-screencast-production',
        name: 'Screencast & Tutorial Video Creation',
        slug: 'tutorial-screencast-production',
        outcomeDescription:
          'Crisp software demo recordings with smooth zoom-ins, mouse highlights, and clean voice sync that make tutorials easy to follow.',
        bestFor: 'Software onboarding, internal staff training, and online course modules.',
      },
      {
        id: 'voiceover-audio-cleanup',
        name: 'Voiceover Sync & Audio Cleanup',
        slug: 'voiceover-audio-cleanup',
        outcomeDescription:
          'Removal of room echo, mouth clicks, breathing noises, and hiss, paired with frequency equalization for rich vocal tones.',
        bestFor: 'Commercial narrations, course lessons, and promotional voice tracks.',
      },
      {
        id: 'intro-outro-video-creation',
        name: 'Intro & Outro Video Animation',
        slug: 'intro-outro-video-creation',
        outcomeDescription:
          'Branded animated logo intros and YouTube end-screen video cards that reinforce your brand and direct viewers to subscribe.',
        bestFor: 'Brand consistency across your entire video publishing library.',
      },
      {
        id: 'video-thumbnail-design',
        name: 'Thumbnail Design for Videos',
        slug: 'video-thumbnail-design',
        outcomeDescription:
          'High-contrast, click-worthy YouTube thumbnails designed to dramatically improve your video click-through rates (CTR).',
        bestFor: 'YouTube channels looking to increase views from search and recommended feeds.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We review your video goals, target audience, style preferences, and raw footage details.',
      },
      {
        step: 2,
        title: 'Footage Upload',
        description: 'You upload your raw footage and audio assets to our secure cloud storage folders.',
      },
      {
        step: 3,
        title: 'Rough Cut & Storyline',
        description: 'We cut pauses, align camera angles, sync audio tracks, and share an initial cut for feedback.',
      },
      {
        step: 4,
        title: 'Polishing & Sound Design',
        description: 'We add animated subtitles, motion graphics, royalty-free background music, and color grading.',
      },
      {
        step: 5,
        title: 'Final Master Delivery',
        description: 'We export high-definition MP4 files rendered to the exact specifications of your target platform.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 8000 per video)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "2 to 4 business days")
    faqs: [
      {
        question: 'How do I upload large raw video files to your team?',
        answer:
          'You can upload files directly through Google Drive, Dropbox, WeTransfer, or OneDrive. We provide private upload folders for every client.',
      },
      {
        question: 'What video resolutions and formats will I receive?',
        answer:
          'We export in crisp 1080p Full HD or 4K MP4 formats optimized for YouTube, Instagram Reels, TikTok, or broadcast displays.',
      },
      {
        question: 'Are revisions included if I need text or timing adjustments?',
        answer:
          'Yes. Every video project includes structured revision rounds to ensure the final edit aligns with your creative expectations.',
      },
      {
        question: 'Do you provide licensed background music and sound effects?',
        answer:
          'Yes. We use licensed royalty-free music and sound effects libraries so your published videos can be monetized without copyright claims.',
      },
    ],
    relatedCategorySlugs: ['graphic-design-branding', 'digital-marketing-seo', 'digital-products-ecommerce'],
    seoTitle: 'Video & Content Production in Mardan | IT HUB Corporation',
    seoDescription:
      'Professional YouTube video editing, social reels, motion graphics, and promo video production in Mardan and KP.',
  },

  // 8. IT Support & Business Solutions
  {
    id: 'it-support-business-solutions',
    name: 'IT Support & Business Solutions',
    title: 'IT Support & Business Solutions',
    slug: 'it-support-business-solutions',
    icon: 'Server',
    sortOrder: 8,
    isPublished: true,
    shortDescription:
      'Business email setup, cloud storage, web hosting migration, WordPress troubleshooting, malware removal, and IT consulting.',
    oneSentencePromise:
      'Reliable business email, hosting migrations, cybersecurity hardening, and IT consulting to keep your office operations secure and uninterrupted.',
    whoItIsFor: [
      'Companies needing professional domain emails (name@company.com) on Google Workspace or Microsoft 365',
      'Businesses facing frequent website downtime, hacked WordPress installations, or server errors',
      'Offices wanting automated cloud data backups to prevent disastrous operational file losses',
      'Executives seeking impartial, expert technology advisory before purchasing hardware or software',
    ],
    services: [
      {
        id: 'domain-hosting-setup-migration',
        name: 'Domain & Hosting Setup / Migration',
        slug: 'domain-hosting-setup-migration',
        outcomeDescription:
          'Seamless domain mapping, DNS record configuration, and zero-downtime website transfers to fast, reliable cloud servers.',
        bestFor: 'Moving away from slow hosting companies without losing business emails or web visitors.',
      },
      {
        id: 'business-email-setup',
        name: 'Business Email Setup (Google Workspace, M365)',
        slug: 'business-email-setup',
        outcomeDescription:
          'Professional company email accounts configured with SPF, DKIM, and DMARC security to stop emails from landing in spam folders.',
        bestFor: 'Ensuring your corporate emails land reliably in customer inboxes.',
      },
      {
        id: 'wordpress-troubleshooting-malware-removal',
        name: 'WordPress Troubleshooting & Malware Removal',
        slug: 'wordpress-troubleshooting-malware-removal',
        outcomeDescription:
          'Thorough cleaning of infected files, database repair, plugin conflict resolution, and firewall hardening for broken WordPress sites.',
        bestFor: 'Restoring hacked, slow, or blacklisted WordPress installations back to healthy operation.',
      },
      {
        id: 'cloud-storage-setup-backup',
        name: 'Cloud Storage Configuration',
        slug: 'cloud-storage-setup-backup',
        outcomeDescription:
          'Structured organizational cloud drives with granular staff permissions, file versioning, and automated desktop synchronization.',
        bestFor: 'Protecting vital company spreadsheets and contracts against accidental loss.',
      },
      {
        id: 'ssl-installation-security-hardening',
        name: 'SSL Certificate Installation & Security Hardening',
        slug: 'ssl-installation-security-hardening',
        outcomeDescription:
          'HTTPS encryption setup, security headers, and brute-force login defenses that eliminate browser warnings.',
        bestFor: 'Removing "Not Secure" browser warnings and protecting client logins.',
      },
      {
        id: 'remote-computer-troubleshooting',
        name: 'Computer & Software Troubleshooting (Remote)',
        slug: 'remote-computer-troubleshooting',
        outcomeDescription:
          'Fast remote diagnosis and resolution of operating system errors, software crashes, and office printer connectivity issues.',
        bestFor: 'Immediate troubleshooting for office computers and remote team members.',
      },
      {
        id: 'network-router-setup-consulting',
        name: 'Network Setup & Router Configuration Guidance',
        slug: 'network-router-setup-consulting',
        outcomeDescription:
          'Expert advice on configuring office Wi-Fi networks, isolated guest networks, and bandwidth allocation.',
        bestFor: 'Offices and retail showrooms needing reliable, secure wireless internet coverage.',
      },
      {
        id: 'software-installation-licensing',
        name: 'Software Installation & Licensing Support',
        slug: 'software-installation-licensing',
        outcomeDescription:
          'Assistance with genuine software installation, productivity suite setups, and corporate license administration.',
        bestFor: 'Standardizing office computers with updated, authentic software tools.',
      },
      {
        id: 'data-backup-disaster-recovery',
        name: 'Data Backup & Recovery Solutions',
        slug: 'data-backup-disaster-recovery',
        outcomeDescription:
          'Automated off-site backup schedules for critical company accounting files, databases, and operational documents.',
        bestFor: 'Ensuring business continuity in the event of hardware failure, theft, or fire.',
      },
      {
        id: 'it-consulting-small-business',
        name: 'IT Consulting for Small Businesses',
        slug: 'it-consulting-small-business',
        outcomeDescription:
          'Practical technology advice to help you pick the right software tools and avoid costly technical mistakes.',
        bestFor: 'Business owners planning IT upgrades or transitioning from paper records.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We review your existing IT setup, domain configuration, and the specific technical issue you face.',
      },
      {
        step: 2,
        title: 'Diagnostic Audit',
        description: 'We assess security records, DNS settings, or server logs to diagnose the root cause.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'We execute the server migration, email configuration, or malware cleanup following safety protocols.',
      },
      {
        step: 4,
        title: 'Testing & Verification',
        description: 'We run deliverability checks, server speed tests, and backup integrity verification.',
      },
      {
        step: 5,
        title: 'Handover & Preventive Advice',
        description: 'We share updated credentials, administrative access, and best practices to prevent recurrence.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 15000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "1 to 2 business days")
    faqs: [
      {
        question: 'Why are our company emails landing in our clients spam folders?',
        answer:
          'Emails land in spam when domain authentication records (SPF, DKIM, DMARC) are missing or misconfigured in your DNS. We configure and verify these security keys so mail providers like Gmail and Outlook recognize your domain as legitimate.',
      },
      {
        question: 'Can you clean a hacked WordPress site without losing our data or blog posts?',
        answer:
          'Yes. We systematically isolate the infection, clean the core files and database, remove backdoor scripts, restore lost admin access, and install firewall defenses while keeping your content intact.',
      },
      {
        question: 'Can you assist businesses outside Mardan remotely?',
        answer:
          'Yes. Most email configuration, domain setup, hosting transfers, and software repairs are conducted remotely over encrypted connections regardless of your location.',
      },
      {
        question: 'Do you assist with tax, FBR, KPRA or legal compliance software?',
        answer:
          'Tax and compliance requirements (including platforms such as FBR or KPRA) update continually. IT HUB provides technical setup, document preparation, and digital configuration assistance on a case-by-case basis, and collaborates with certified tax and legal practitioners where formal legal or tax certification is required.',
      },
    ],
    relatedCategorySlugs: ['web-software-development', 'data-entry-virtual-assistance', 'education-office-services'],
    seoTitle: 'IT Support & Business Solutions in Mardan | IT HUB Corporation',
    seoDescription:
      'Business email setup, cloud backup, WordPress troubleshooting, and IT consulting in Mardan and Khyber Pakhtunkhwa.',
  },

  // 9. Education & Office Services
  {
    id: 'education-office-services',
    name: 'Education & Office Services',
    title: 'Education & Office Services',
    slug: 'education-office-services',
    icon: 'GraduationCap',
    sortOrder: 9,
    isPublished: true,
    shortDescription:
      'PowerPoint presentation design, resume and CV formatting, document styling, translation (English, Urdu, Pashto), and office productivity.',
    oneSentencePromise:
      'Executive presentations, polished CV formatting, document styling, and accurate multi-lingual translation delivered with speed and care.',
    whoItIsFor: [
      'Professionals and job seekers needing an ATS-compliant resume or CV that highlights achievements',
      'Executives, educators, and students requiring high-impact PowerPoint pitch decks and lecture slides',
      'Organizations needing accurate document translation between English, Urdu, and Pashto',
      'Offices needing structured Word and Excel templates, typing services, and clean document layouts',
    ],
    services: [
      {
        id: 'powerpoint-presentation-design',
        name: 'PowerPoint Presentation Design',
        slug: 'powerpoint-presentation-design',
        outcomeDescription:
          'Visually compelling PowerPoint and Google Slides decks structured to keep audiences engaged and communicate key points clearly.',
        bestFor: 'Investor pitch decks, corporate board meetings, sales proposals, and conference talks.',
      },
      {
        id: 'resume-cv-formatting',
        name: 'CV & Resume Writing / Formatting',
        slug: 'resume-cv-formatting',
        outcomeDescription:
          'Clean, modern CVs and resumes formatted for effortless reading and optimized for Applicant Tracking Systems (ATS).',
        bestFor: 'Job candidates seeking career advancement in Pakistan and international markets.',
      },
      {
        id: 'document-report-formatting',
        name: 'Assignment & Report Formatting',
        slug: 'document-report-formatting',
        outcomeDescription:
          'Consistent typographic styling, automated tables of contents, page numbering, and visual polish for lengthy reports and manuals.',
        bestFor: 'Corporate annual reports, research publications, proposals, and dissertations.',
      },
      {
        id: 'translation-services',
        name: 'Translation Services (English, Urdu, Pashto)',
        slug: 'translation-services',
        outcomeDescription:
          'Accurate, culturally natural human translation between English, Urdu, and Pashto for commercial and administrative documents.',
        bestFor: 'Community outreach, business agreements, training materials, and multi-lingual publications.',
      },
      {
        id: 'academic-online-research-summaries',
        name: 'Online Research & Summary Writing',
        slug: 'academic-online-research-summaries',
        outcomeDescription:
          'Structured literature searches and concise executive summaries of publicly available research papers and market studies.',
        bestFor: 'Business intelligence, market feasibility reviews, and academic reference preparation.',
      },
      {
        id: 'typing-services-english-urdu',
        name: 'Typing Services (English & Urdu)',
        slug: 'typing-services-english-urdu',
        outcomeDescription:
          'Fast, accurate transcription and typing of handwritten notes, scanned texts, and audio notes into polished digital documents.',
        bestFor: 'Digitizing historic office files, manuscripts, and legal drafts in English and Urdu.',
      },
      {
        id: 'spreadsheet-formula-setup',
        name: 'Spreadsheet Formatting & Formula Setup',
        slug: 'spreadsheet-formula-setup',
        outcomeDescription:
          'Automated formulas, financial calculators, conditional formatting, and error-proof data entry templates in Excel and Google Sheets.',
        bestFor: 'Daily office accounting, student grades, inventory trackers, and fee management.',
      },
      {
        id: 'certificate-diploma-design',
        name: 'Certificate & Diploma Design',
        slug: 'certificate-diploma-design',
        outcomeDescription:
          'Elegant, print-ready certificate artwork with security borders, seals, and batch name merging for courses and conferences.',
        bestFor: 'Educational institutes, training workshops, corporate recognition, and sports competitions.',
      },
      {
        id: 'training-material-creation',
        name: 'Training Material & User Manual Creation',
        slug: 'training-material-creation',
        outcomeDescription:
          'Structured user manuals, employee onboarding workbooks, and visual step-by-step guides formatted for quick comprehension.',
        bestFor: 'Internal staff training, customer onboarding, and technical operating procedures.',
      },
      {
        id: 'office-document-automation-templates',
        name: 'Office Document Automation & Templates',
        slug: 'office-document-automation-templates',
        outcomeDescription:
          'Standardized letterheads, quotation templates, and invoice forms with locked branding so staff generate consistent documents.',
        bestFor: 'Preventing layout inconsistencies across company correspondence.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We review your source materials, preferred layout style, and delivery deadlines.',
      },
      {
        step: 2,
        title: 'Draft Preparation',
        description: 'We format a sample section or draft outline for your immediate feedback.',
      },
      {
        step: 3,
        title: 'Full Document Production',
        description: 'Our team completes the entire document, slide deck, or translation with careful proofreading.',
      },
      {
        step: 4,
        title: 'Review & Revisions',
        description: 'We incorporate your requested adjustments to ensure formatting and terminology are exact.',
      },
      {
        step: 5,
        title: 'Final Handover',
        description: 'We deliver fully editable source files (Word, PowerPoint, Excel) and print-ready PDFs.',
      },
    ],
    startingPricePkr: null, // TODO: confirm starting price in PKR with IT HUB (e.g. 5000)
    typicalTimeline: null, // TODO: confirm typical delivery timeline with IT HUB (e.g. "1 to 3 business days")
    faqs: [
      {
        question: 'Will I receive editable files (Word / PowerPoint) or only PDFs?',
        answer:
          'You will receive both! We deliver fully editable source files (Word, PowerPoint, Excel) alongside print-ready, high-resolution PDFs so you can make future tweaks whenever you wish.',
      },
      {
        question: 'Are your translations done by machine or by human translators?',
        answer:
          'Our translations between English, Urdu, and Pashto are produced and reviewed by bilingual native speakers to ensure cultural appropriateness and exact terminology.',
      },
      {
        question: 'Are the resumes you design compliant with Applicant Tracking Systems (ATS)?',
        answer:
          'Yes. We format CVs with clean semantic typography, standard heading hierarchies, and machine-readable text blocks that pass ATS scanners without formatting corruption.',
      },
      {
        question: 'Do you offer official notarized or certified legal translation?',
        answer:
          'Our translation services cover commercial, educational, and business documents. Official notarization or sworn court translations are subject to varying legal requirements; we advise per case and collaborate with authorized legal professionals where formal court certification is required.',
      },
    ],
    relatedCategorySlugs: ['data-entry-virtual-assistance', 'graphic-design-branding', 'it-support-business-solutions'],
    seoTitle: 'Education & Office Services in Mardan | IT HUB Corporation',
    seoDescription:
      'Professional PowerPoint design, resume formatting, document styling, and English/Urdu/Pashto translation in Mardan, KP.',
  },
];

/**
 * Re-export all 90 services for backward compatibility across existing components.
 */
export const services: Service[] = [
  ...webSoftwareServices,
  ...digitalMarketingServices,
  ...aiAutomationServices,
  ...graphicDesignServices,
  ...dataEntryServices,
  ...digitalProductsServices,
  ...videoProductionServices,
  ...itSupportServices,
  ...educationOfficeServices,
];

/**
 * Compatibility alias: `categories` mapped to `serviceCategories`.
 */
export const categories: CategoryDetail[] = serviceCategories;

/**
 * Helper to fetch a single category by slug.
 */
export function getCategoryDetailBySlug(slug: string): CategoryDetail | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}
