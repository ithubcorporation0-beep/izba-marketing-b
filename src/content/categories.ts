import { Category } from '@/types';

/**
 * 9 Main Service Categories
 * Exactly as specified in PRD Section 5 and 6 in order.
 */
export const categories: Category[] = [
  {
    id: 'web-software-development',
    name: 'Web & Software Development',
    title: 'Web & Software Development',
    slug: 'web-software-development',
    shortDescription:
      'Custom website development, web applications, e-commerce stores, and software solutions built for reliability and performance.',
    icon: 'Code2',
    sortOrder: 1,
    isPublished: true,
  },
  {
    id: 'digital-marketing-seo',
    name: 'Digital Marketing & SEO',
    title: 'Digital Marketing & SEO',
    slug: 'digital-marketing-seo',
    shortDescription:
      'Search engine optimization, paid ad campaigns, social media marketing, and structured digital lead generation strategies.',
    icon: 'TrendingUp',
    sortOrder: 2,
    isPublished: true,
  },
  {
    id: 'ai-services-automation',
    name: 'AI Services & Automation',
    title: 'AI Services & Automation',
    slug: 'ai-services-automation',
    shortDescription:
      'AI chatbot development, automated workflows, voice assistants, and AI-assisted creative tooling for operational efficiency.',
    icon: 'Bot',
    sortOrder: 3,
    isPublished: true,
  },
  {
    id: 'graphic-design-branding',
    name: 'Graphic Design & Branding',
    title: 'Graphic Design & Branding',
    slug: 'graphic-design-branding',
    shortDescription:
      'Logo design, corporate brand identity, marketing collaterals, social graphics, packaging, and UI/UX interface layouts.',
    icon: 'Palette',
    sortOrder: 4,
    isPublished: true,
  },
  {
    id: 'data-entry-virtual-assistance',
    name: 'Data Entry & Virtual Assistance',
    title: 'Data Entry & Virtual Assistance',
    slug: 'data-entry-virtual-assistance',
    shortDescription:
      'Accurate data entry, web research, spreadsheet management, document cleaning, and administrative virtual assistant support.',
    icon: 'FileSpreadsheet',
    sortOrder: 5,
    isPublished: true,
  },
  {
    id: 'digital-products-ecommerce',
    name: 'Digital Products & E-commerce',
    title: 'Digital Products & E-commerce',
    slug: 'digital-products-ecommerce',
    shortDescription:
      'Creation of digital products, website templates, UI kits, digital planners, and turnkey online store setup.',
    icon: 'ShoppingBag',
    sortOrder: 6,
    isPublished: true,
  },
  {
    id: 'video-content-production',
    name: 'Video & Content Production',
    title: 'Video & Content Production',
    slug: 'video-content-production',
    shortDescription:
      'Explainer videos, YouTube video editing, social media reels, motion graphics, video advertisements, and scriptwriting.',
    icon: 'Video',
    sortOrder: 7,
    isPublished: true,
  },
  {
    id: 'it-support-business-solutions',
    name: 'IT Support & Business Solutions',
    title: 'IT Support & Business Solutions',
    slug: 'it-support-business-solutions',
    shortDescription:
      'Technical consulting, web hosting setup, business email configuration, database management, and ongoing software maintenance.',
    icon: 'Server',
    sortOrder: 8,
    isPublished: true,
  },
  {
    id: 'education-office-services',
    name: 'Education & Office Services',
    title: 'Education & Office Services',
    slug: 'education-office-services',
    shortDescription:
      'Professional presentation design, document formatting, training materials, resume formatting, and office productivity services.',
    icon: 'GraduationCap',
    sortOrder: 9,
    isPublished: true,
  },
];
