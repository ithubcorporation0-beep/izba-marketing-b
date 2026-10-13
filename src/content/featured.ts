import { FeaturedService } from '@/types';

/**
 * OWNER'S FEATURED SERVICES (PRD Section 5.1)
 *
 * Mapped to the right service or category while strictly preserving
 * the owner's intended display names:
 * - "Digital Products" maps to Digital Product Creation (`digital-product-creation`)
 * - "AI Solutions and Automation" maps to AI Services & Automation category (`ai-services-automation`)
 */
export const featuredServices: FeaturedService[] = [
  {
    displayName: 'Website Development',
    targetType: 'service',
    slug: 'website-development',
    categorySlug: 'web-software-development',
    description:
      'Custom, responsive websites built with clean code, fast load times, and intuitive navigation.',
  },
  {
    displayName: 'Digital Marketing',
    targetType: 'service',
    slug: 'digital-marketing',
    categorySlug: 'digital-marketing-seo',
    description:
      'Integrated marketing campaigns spanning search, social media, and paid traffic to build brand reach.',
  },
  {
    displayName: 'Search Engine Optimization (SEO)',
    targetType: 'service',
    slug: 'search-engine-optimization-seo',
    categorySlug: 'digital-marketing-seo',
    description:
      'Technical and on-page search engine optimizations to improve organic discoverability in Google results.',
  },
  {
    displayName: 'Custom Software Development',
    targetType: 'service',
    slug: 'custom-software-development',
    categorySlug: 'web-software-development',
    description:
      'Bespoke software systems designed around your unique operational rules and business workflows.',
  },
  {
    displayName: 'Data Entry Services',
    targetType: 'service',
    slug: 'data-entry-services',
    categorySlug: 'data-entry-virtual-assistance',
    description:
      'Accurate, confidential manual and automated data entry into spreadsheets, databases, and CRMs.',
  },
  {
    displayName: 'AI Video Creation',
    targetType: 'service',
    slug: 'ai-video-creation',
    categorySlug: 'ai-services-automation',
    description:
      'AI-assisted video generation with realistic presenter avatars, synthetic voiceovers, and dynamic editing.',
  },
  {
    displayName: 'AI Image Generation',
    targetType: 'service',
    slug: 'ai-image-generation',
    categorySlug: 'ai-services-automation',
    description:
      'High-resolution conceptual imagery, custom product mockups, and marketing visuals crafted with AI.',
  },
  {
    displayName: 'Graphic Design',
    targetType: 'service',
    slug: 'graphic-design',
    categorySlug: 'graphic-design-branding',
    description:
      'Comprehensive visual design services for digital campaigns, marketing graphics, and print collateral.',
  },
  {
    displayName: 'Digital Products',
    targetType: 'service',
    slug: 'digital-product-creation',
    categorySlug: 'digital-products-ecommerce',
    description:
      'Design, packaging, licensing, and automated instant delivery for downloadable digital assets.',
  },
  {
    displayName: 'AI Solutions and Automation',
    targetType: 'category',
    slug: 'ai-services-automation',
    categorySlug: 'ai-services-automation',
    description:
      'Full suite of intelligent chatbots, workflow automations, and operational AI tool integrations.',
  },
];

/**
 * Homepage Hero Section Content
 * Clear, accurate, and non-exaggerated copy.
 */
export const heroContent = {
  badge: 'Technology & Digital Solutions Provider',
  title: 'Engineering Reliable Solutions for Modern Businesses',
  subtitle:
    'IT HUB Corporation delivers web and custom software development, digital marketing, AI workflows, creative media, and technical support designed to help organizations operate efficiently.',
  primaryCtaText: 'Request a Quote',
  primaryCtaLink: '/contact',
  secondaryCtaText: 'Explore All Services',
  secondaryCtaLink: '/services',
  clientLogos: [
    { name: 'Financial Services', tag: 'Banking & FinTech' },
    { name: 'Healthcare Systems', tag: 'Health & Wellness' },
    { name: 'Supply Chain & Logistics', tag: 'Fleet & Cargo' },
    { name: 'Retail & E-Commerce', tag: 'Online Merchants' },
    { name: 'Professional Services', tag: 'Legal & Accounting' },
  ],
};

/**
 * 4-Step Standard Project Methodology (PRD Section 6 Standard Process)
 */
export const processSteps = [
  {
    step: '01',
    title: 'Discuss & Discover',
    description:
      'We conduct an initial requirements session to understand your business objectives, timeline, existing tools, and deliverables.',
  },
  {
    step: '02',
    title: 'Plan & Architecture',
    description:
      'Our team drafts a structured project plan with clear milestones, resource allocation, and technical specifications.',
  },
  {
    step: '03',
    title: 'Build & Create',
    description:
      'We execute development, design, or implementation in transparent iterations with routine progress updates.',
  },
  {
    step: '04',
    title: 'Review & Deliver',
    description:
      'Thorough quality assurance and client review ensure all agreed-upon acceptance criteria are fulfilled prior to launch.',
  },
];

/**
 * Value Pillars
 */
export const valuePillars = [
  {
    title: 'Structured Delivery',
    description:
      'Every project follows documented milestones and agreed-upon acceptance criteria from kickoff to sign-off.',
    icon: 'Shield',
  },
  {
    title: 'Cross-Functional Expertise',
    description:
      'Specialized professionals covering custom coding, visual design, automated workflows, and data processing.',
    icon: 'Zap',
  },
  {
    title: 'Data Confidentiality',
    description:
      'Strict non-disclosure commitments and secure access handling for all client intellectual property and data.',
    icon: 'Lock',
  },
  {
    title: 'Transparent Collaboration',
    description:
      'Clear communication channels, responsive project managers, and zero hidden technical lock-in.',
    icon: 'Users',
  },
];
