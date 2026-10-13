import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We discuss your specific business goals, audience, and functional requirements during an initial discovery session.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We establish a structured technical plan, page architecture, milestone timeline, and project deliverables.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our team develops the code and assets with regular check-ins, responsive testing, and clean standards.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We walk through the deliverables together, incorporate agreed adjustments, and provide a full deployment handover.',
  },
];

export const webSoftwareServices: Service[] = [
  {
    id: 'website-development',
    name: 'Website Development',
    title: 'Website Development',
    slug: 'website-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Custom, responsive websites built with clean code, fast load times, and intuitive navigation for modern businesses.',
    description: [
      'Our Website Development service focuses on crafting clean, accessible, and high-performance websites tailored to your company profile. Whether you need a corporate presence or a dynamic service platform, we ensure each page reflects your brand identity and communicates clearly with prospective customers.',
      'We build every site with responsive layouts that display properly on desktops, tablets, and smartphones. Code quality, security, and performance standards are followed to provide a solid digital foundation.',
      'Post-launch support and clear handovers ensure your team has complete visibility and control over content updates and routine maintenance.',
    ],
    includes: [
      'Responsive design for all screen resolutions',
      'Semantic HTML and modern styling frameworks',
      'Core SEO meta tagging and sitemap generation',
      'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
      'Contact forms and lead capture integration',
    ],
    deliverables: [
      'Complete website codebase and assets',
      'Configured hosting and domain mapping',
      'Admin training or documentation on content updates',
      'Initial launch checklist and verification report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How long does a typical website development project take?',
        answer:
          'Project timelines typically range from 2 to 6 weeks depending on page count, custom feature requirements, and client feedback response times.',
      },
      {
        question: 'Will I be able to edit page text and images after launch?',
        answer:
          'Yes. We provide clear content handover instructions or connect editable files and content management systems so you can make text updates easily.',
      },
    ],
    relatedServiceSlugs: [
      'wordpress-development',
      'landing-page-design',
      'website-redesign-and-maintenance',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Website Development Services — IT HUB Corporation',
    seoDescription:
      'Professional responsive website development services tailored for small and medium businesses. Clean code, fast loading, and accessible design.',
  },
  {
    id: 'ecommerce-website-development',
    name: 'E-commerce Website Development',
    title: 'E-commerce Website Development',
    slug: 'ecommerce-website-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Robust online shopping platforms with product catalogs, shopping carts, and secure checkout workflows.',
    description: [
      'We design and build complete e-commerce websites designed to showcase your catalog and provide an intuitive purchasing experience. From product filtering to customer account management, every touchpoint is designed with user convenience in mind.',
      'Our stores support standard payment gateways, shipping calculators, inventory tracking, and discount codes so you can manage retail or wholesale sales seamlessly.',
      'Security best practices, including SSL certificates and data protection measures, are integrated to protect customer transactions.',
    ],
    includes: [
      'Product catalog setup with categorization and search',
      'Shopping cart and streamlined checkout flow',
      'Payment gateway integration (Stripe, PayPal, etc.)',
      'Order notification and customer confirmation emails',
      'Mobile-optimized product galleries and checkout',
    ],
    deliverables: [
      'Fully functional e-commerce storefront',
      'Configured merchant backend with inventory management',
      'Tested payment and checkout flow verification',
      'Store manager guide for adding products and tracking orders',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Which e-commerce platforms do you support?',
        answer:
          'We work with WooCommerce, Shopify, and custom Next.js/React e-commerce architectures depending on your product volume and specific workflow needs.',
      },
      {
        question: 'Do you help upload products initially?',
        answer:
          'Yes. We can populate your initial product catalog and provide spreadsheet import templates for bulk additions.',
      },
    ],
    relatedServiceSlugs: [
      'website-development',
      'online-store-setup',
      'wordpress-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'E-commerce Website Development — IT HUB Corporation',
    seoDescription:
      'Launch your digital store with custom e-commerce website development. Secure checkouts, product catalog management, and mobile shopping experiences.',
  },
  {
    id: 'wordpress-development',
    name: 'WordPress Development',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Custom WordPress themes, clean page builders, and plugin integrations for flexible business publishing.',
    description: [
      'Our WordPress Development service gives businesses a user-friendly platform where non-technical team members can publish blog articles, edit services, and update company news effortlessly.',
      'We develop custom or lightweight child themes avoiding heavy, bloated builders that slow down site speed. Security hardening and speed optimization are applied to keep your installation stable.',
      'We configure reliable backups, anti-spam protections, and necessary business plugins to ensure smooth ongoing administration.',
    ],
    includes: [
      'Custom theme setup or child theme development',
      'Plugin setup and compatibility configuration',
      'Database and cache optimization for faster load speeds',
      'Security hardening and automated backup configuration',
      'Form builder integration and spam filters',
    ],
    deliverables: [
      'Fully installed and configured WordPress site',
      'Admin credentials and user role setup',
      'Video walkthrough or guide for creating and editing posts',
      'Security and maintenance checklist',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you work with my existing WordPress website?',
        answer:
          'Yes. We can redesign an existing WordPress installation, upgrade outdated plugins, or troubleshoot theme bugs without losing your historic content.',
      },
      {
        question: 'Do you provide WordPress maintenance updates?',
        answer:
          'Yes. We offer maintenance guidance and scheduled updates to ensure your core WordPress version, themes, and plugins stay secure.',
      },
    ],
    relatedServiceSlugs: [
      'website-development',
      'website-redesign-and-maintenance',
      'landing-page-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'WordPress Website Development — IT HUB Corporation',
    seoDescription:
      'Professional WordPress website development. Custom themes, speed optimization, and easy content management for your growing business.',
  },
  {
    id: 'web-application-development',
    name: 'Web Application Development',
    title: 'Web Application Development',
    slug: 'web-application-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Interactive web apps and client portals engineered with modern JavaScript frameworks and scalable APIs.',
    description: [
      'When your requirements extend beyond a static brochure website, our Web Application Development service provides custom web software tailored to your operational workflows.',
      'We build responsive, state-driven interfaces using modern frameworks such as React, Next.js, and TypeScript, backed by robust backend APIs and secure data models.',
      'From internal workflow dashboards to customer self-service portals, we prioritize interface responsiveness, data consistency, and reliable role-based authentication.',
    ],
    includes: [
      'Frontend single-page or hybrid server-rendered applications',
      'User authentication, session handling, and permissions',
      'REST or GraphQL API connectivity',
      'Interactive data tables, charts, and filter controls',
      'Unit testing and automated code linting',
    ],
    deliverables: [
      'Deployed web application on staging and production environments',
      'Documented API endpoints and data models',
      'Source repository with clear README and deployment scripts',
      'User acceptance testing (UAT) signoff report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What tech stack do you recommend for web applications?',
        answer:
          'We typically build with Next.js, React, TypeScript, and Node.js or Python backends for longevity, security, and developer ecosystem support.',
      },
      {
        question: 'Can you integrate the web app with our existing database?',
        answer:
          'Yes. We can connect with existing PostgreSQL, MySQL, Supabase, or RESTful API endpoints following secure connection protocols.',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'saas-development',
      'api-integration',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Web Application Development — IT HUB Corporation',
    seoDescription:
      'Custom web application development with React, Next.js, and TypeScript. Build fast, secure dashboards and customer portals.',
  },
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Tailored software solutions designed to automate business workflows and eliminate operational bottlenecks.',
    description: [
      'Off-the-shelf software often forces businesses into rigid constraints or costly recurring subscriptions for unused features. Our Custom Software Development service creates purpose-built systems that match your exact business logic.',
      'We collaborate closely with your stakeholders to define system boundaries, data structures, and automation rules, ensuring every screen and feature serves a tangible purpose.',
      'Code is written to clean architectural standards, allowing your internal teams or future developers to maintain and extend the software without friction.',
    ],
    includes: [
      'Detailed requirements analysis and technical specification',
      'Custom business logic and algorithm implementation',
      'Database schema design and migration management',
      'Role-based access control and audit trails',
      'Comprehensive error handling and logging',
    ],
    deliverables: [
      'Production-ready custom software system',
      'Source code with full intellectual property ownership',
      'Technical architecture document and API specifications',
      'Deployment guidelines and handover walkthrough',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Who owns the source code once developed?',
        answer:
          'You retain 100% intellectual property ownership of all custom software code developed for your business upon project settlement.',
      },
      {
        question: 'How do you handle scope changes during development?',
        answer:
          'We follow an agile milestone approach where feature adjustments can be evaluated and prioritized collaboratively without disrupting core milestones.',
      },
    ],
    relatedServiceSlugs: [
      'web-application-development',
      'saas-development',
      'erp-crm-software-development',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Custom Software Development — IT HUB Corporation',
    seoDescription:
      'Bespoke software development for growing companies. Purpose-built systems, clean architectures, and full intellectual property ownership.',
  },
  {
    id: 'saas-development',
    name: 'SaaS Development',
    title: 'SaaS Development',
    slug: 'saas-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'End-to-end multi-tenant Software-as-a-Service (SaaS) products with subscription billing and onboarding flows.',
    description: [
      'Our SaaS Development service helps founders and organizations build software products from MVP conception to scalable multi-tenant architectures.',
      'We incorporate essential SaaS capabilities right from the start: tenant data isolation, user authentication, subscription tiers, usage quotas, and administrative dashboards.',
      'We focus on clean interface usability during the signup and onboarding stages to help end users understand product value immediately.',
    ],
    includes: [
      'Multi-tenant database schema architecture',
      'Subscription billing integration (e.g. Stripe Billing)',
      'Automated user onboarding and email verification',
      'Team workspace management and invite flows',
      'Super-admin metrics and user management portal',
    ],
    deliverables: [
      'Deployed SaaS platform with working subscription tiers',
      'Stripe webhook and billing configuration',
      'System documentation and environment setup scripts',
      'Security audit and authentication test suite',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you help build an MVP to test market demand?',
        answer:
          'Yes. We often structure initial SaaS engagements into a lean MVP scope focusing on the primary value proposition before adding secondary features.',
      },
      {
        question: 'How is data kept isolated between different customers?',
        answer:
          'We implement strict tenant segregation at the database and application levels to ensure one tenant can never access another’s data.',
      },
    ],
    relatedServiceSlugs: [
      'web-application-development',
      'custom-software-development',
      'mobile-app-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'SaaS Product Development — IT HUB Corporation',
    seoDescription:
      'Build scalable multi-tenant SaaS applications with subscription billing, secure customer onboarding, and modern cloud architectures.',
  },
  {
    id: 'erp-crm-software-development',
    name: 'ERP & CRM Software Development',
    title: 'ERP & CRM Software Development',
    slug: 'erp-crm-software-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Integrated resource planning and customer relationship systems tailored to unified business operations.',
    description: [
      'Managing business operations across disconnected spreadsheets often leads to data duplication and miscommunication. Our ERP & CRM Software Development service builds unified platforms that centralize sales pipelines, customer interactions, inventory, and internal tasks.',
      'We configure customized pipelines matching your specific sales cycle, lead routing logic, and team hierarchy, making tracking and reporting effortless.',
      'Integrated reporting dashboards give executive leadership a clear, real-time snapshot of operational performance and customer communications.',
    ],
    includes: [
      'Contact and account management with activity timelines',
      'Custom deal stages and visual pipeline management',
      'Inventory, invoicing, and supply order modules',
      'Departmental permission controls and access groups',
      'Automated email reminders and task assignments',
    ],
    deliverables: [
      'Centralized ERP/CRM software installation',
      'Data import and migration of existing contact/inventory lists',
      'Role configuration guidelines for staff members',
      'Executive dashboard and reporting module',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can we import our existing customer spreadsheet into the new CRM?',
        answer:
          'Yes. We provide CSV mapping scripts and data cleaning services to ensure your existing contact history imports cleanly.',
      },
      {
        question: 'Can notifications be sent to Slack or WhatsApp?',
        answer:
          'Yes. We can integrate notification webhooks to alert your team via email, Slack, or messaging services when high-value leads arrive.',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'web-application-development',
      'database-design-and-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'ERP & CRM Software Development — IT HUB Corporation',
    seoDescription:
      'Custom ERP and CRM software to unify customer data, sales pipelines, and inventory workflows in one reliable company platform.',
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    categorySlug: 'web-software-development',
    shortDescription:
      'Cross-platform mobile applications for iOS and Android built with React Native and clean native performance.',
    description: [
      'Our Mobile App Development service delivers responsive, high-performance mobile apps that run consistently across iOS and Android devices from a single maintainable codebase.',
      'We focus on creating intuitive native-like user interfaces, smooth touch interactions, offline data storage, and dependable push notification pipelines.',
      'We also guide you through the process of app store developer account setup, test builds (TestFlight / Google Play Internal Testing), and submission guidelines.',
    ],
    includes: [
      'Cross-platform development using React Native or Flutter',
      'Push notification setup (Firebase / APNs)',
      'Offline data caching and background sync',
      'Biometric authentication (FaceID, Fingerprint)',
      'App Store and Google Play store assets preparation',
    ],
    deliverables: [
      'Production release builds (.ipa and .aab)',
      'Full mobile app source repository',
      'Backend API integration documentation',
      'App store publishing support and setup verification',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer:
          'We specialize in cross-platform development (React Native) because it reduces development time and maintenance costs by up to 40% while preserving native speed.',
      },
      {
        question: 'Do you help with Apple App Store approval?',
        answer:
          'Yes. We prepare the release bundles, privacy manifests, and screenshots according to Apple and Google Play store submission requirements.',
      },
    ],
    relatedServiceSlugs: [
      'web-application-development',
      'saas-development',
      'ui-ux-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Mobile App Development (iOS & Android) — IT HUB Corporation',
    seoDescription:
      'Cross-platform mobile app development for iOS and Android. High-performance, intuitive UI, and complete App Store release guidance.',
  },
  {
    id: 'website-redesign-and-maintenance',
    name: 'Website Redesign and Maintenance',
    title: 'Website Redesign and Maintenance',
    slug: 'website-redesign-and-maintenance',
    categorySlug: 'web-software-development',
    shortDescription:
      'Modernize outdated websites with refreshed branding, responsive upgrades, speed tuning, and ongoing updates.',
    description: [
      'An outdated website with slow loading speeds or broken mobile layouts can deter prospective clients. Our Website Redesign and Maintenance service gives your existing presence a modern overhaul while protecting valuable content.',
      'We analyze performance bottlenecks, broken links, and navigational friction, redesigning the user experience with modern aesthetics and accessible typography.',
      'We also offer routine maintenance checkups including plugin updates, security scans, uptime monitoring, and content revision support.',
    ],
    includes: [
      'Comprehensive UI/UX and mobile usability audit',
      'Modern visual redesign aligning with current brand guidelines',
      'Core Web Vitals and page speed optimization',
      'URL redirect mapping (301s) to preserve search engine rankings',
      'Scheduled backups and security patching',
    ],
    deliverables: [
      'Refreshed, modernized website deployed on your domain',
      '301 redirect map for legacy URLs',
      'Before-and-after speed and accessibility audit score',
      'Maintenance schedule and backup logs',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Will our current search engine rankings drop during a redesign?',
        answer:
          'We safeguard your rankings by preserving URL structures or setting up strict 301 redirects so search engines seamlessly map existing indexed pages.',
      },
      {
        question: 'Can you work on our website without taking it offline?',
        answer:
          'Yes. We build the redesign on a private staging environment so your live site remains accessible to customers until the final launch moment.',
      },
    ],
    relatedServiceSlugs: [
      'website-development',
      'wordpress-development',
      'website-security-improvements',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Website Redesign & Maintenance Services — IT HUB Corporation',
    seoDescription:
      'Transform outdated sites with modern redesigns, speed optimization, and ongoing maintenance. Preserve SEO equity while modernizing UI/UX.',
  },
  {
    id: 'landing-page-design',
    name: 'Landing Page Design',
    title: 'Landing Page Design',
    slug: 'landing-page-design',
    categorySlug: 'web-software-development',
    shortDescription:
      'High-converting single-page landing pages built to present specific campaigns, offers, or services clearly.',
    description: [
      'When driving traffic from ad campaigns, social media, or email announcements, directed landing pages consistently outperform generic homepages. Our Landing Page Design service creates focused, high-clarity single-page destinations.',
      'We structure every section to guide visitors smoothly: clear value headlines, compelling benefit breakdowns, social proof blocks, and unambiguous call-to-action forms.',
      'Pages are lightweight and optimized for rapid mobile loading so visitors do not drop off due to slow connection speeds.',
    ],
    includes: [
      'Above-the-fold value proposition and hero layout',
      'Mobile-first responsive styling and typography',
      'Form integration with automated email lead alerts',
      'Fast loading speed tuning (< 1.5s visual render)',
      'Analytics event tracking and meta conversion tags',
    ],
    deliverables: [
      'Production-ready landing page deployed to domain or subdomain',
      'Form test confirmation and webhook delivery proof',
      'Google Analytics / Meta Pixel event tracking setup',
      'Source files and asset pack',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can the landing page be hosted on our existing domain as a subpage?',
        answer:
          'Yes. We can deploy the landing page on a subfolder (e.g. `/offer`) or a subdomain (e.g. `promo.yourdomain.com`).',
      },
      {
        question: 'Can we integrate custom forms or Calendly booking links?',
        answer:
          'Yes. We can embed appointment schedulers, multi-field quote forms, or direct phone call/WhatsApp click-to-chat triggers.',
      },
    ],
    relatedServiceSlugs: [
      'website-development',
      'wordpress-development',
      'facebook-instagram-ads',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Landing Page Design & Development — IT HUB Corporation',
    seoDescription:
      'High-converting landing page design for campaigns, product launches, and lead capture. Fast, mobile-optimized, and conversion-focused.',
  },
];
