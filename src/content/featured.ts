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
 * Exact copy from PRD 4.2
 */
export const heroContent = {
  badge: 'ONE TEAM. EVERY DIGITAL SERVICE.',
  title: 'Your Ideas, Designed, Built and Marketed',
  headlineLines: ['Your Ideas, Designed,', 'Built and Marketed'],
  subtitle:
    'Strategy, creative and technology under one roof, for startups, agencies and growing businesses that want results they can see.',
  primaryCtaText: 'Start Your Project',
  primaryCtaLink: '/contact',
  secondaryCtaText: 'See What We Do',
  secondaryCtaLink: '/services',
};

/**
 * 4-Step Standard Project Methodology (PRD Section 6 Standard Process)
 */
export const processSteps = [
  {
    step: '01',
    title: 'Discuss',
    description:
      'We begin with a direct consultation to understand your business objectives, target audience, and project requirements.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We formulate a clear plan with defined deliverables, practical timelines, and straightforward scope agreements.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Our team crafts your solution using reliable modern tools, clean structure, and consistent progress updates.',
  },
  {
    step: '04',
    title: 'Deliver and Support',
    description:
      'We review the final deliverables with you, complete the handover, and provide dependable ongoing assistance.',
  },
];

/**
 * Verifiable trust points about company operational standards
 * // TODO: Add verified metrics (years in operation, verified client numbers, client logos)
 * // once officially confirmed and authorized by the business owner. No invented numbers or fake metrics.
 */
export const trustPoints = [
  {
    title: 'Clear Communication',
    description:
      'Direct, responsive channels with regular project status updates.',
  },
  {
    title: 'Business-Friendly Explanations',
    description:
      'We translate complex technical requirements into practical business decisions.',
  },
  {
    title: 'Services Under One Roof',
    description:
      'From software and digital marketing to creative design and business support.',
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
