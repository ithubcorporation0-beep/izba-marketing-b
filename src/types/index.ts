/**
 * IT HUB Corporation — TypeScript Type Definitions
 * Derived from PRD sections 5, 6, 8.1, and 12.
 */

export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;
  sortOrder: number;
  isPublished: boolean;
  // Compatibility aliases
  title?: string;
  description?: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  shortDescription: string;
  description: string[]; // 2-3 short paragraphs of accurate text
  includes: string[]; // 3-6 bullet points
  deliverables: string[]; // 3-5 typical deliverables
  process: ServiceProcessStep[]; // 4 simple generic steps
  faqs: ServiceFaq[]; // 2 relevant questions with careful answers
  relatedServiceSlugs: string[]; // 2-3 from same category
  status: 'draft' | 'published' | 'archived';
  isFeatured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  // Compatibility aliases
  title?: string;
  category?: string;
  fullDescription?: string;
  features?: string[];
  deliverablesList?: string[];
  technologies?: string[];
  stat?: { value: string; label: string };
  icon?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  clientName?: string;
  client?: string; // Compatibility alias
  categorySlug: string;
  category?: string; // Compatibility alias
  summary: string;
  context?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  solution?: string; // Compatibility alias
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
  servicesProvided?: string[];
  technologies?: string[];
  stack?: string[]; // Compatibility alias
  year?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  coverImageUrl?: string;
  isPublished: boolean;
  publishedAt?: string;
  isFeatured?: boolean;
  featured?: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category?: string;
  sortOrder?: number;
}

// Alias FAQ to Faq for backward compatibility
export type FAQ = Faq;

export interface Testimonial {
  id: string;
  clientName: string;
  author?: string; // Compatibility alias
  role?: string;
  company?: string;
  content: string;
  quote?: string; // Compatibility alias
  serviceSlug?: string;
  rating?: number;
  isPublished: boolean;
  date?: string;
  avatarText?: string;
  statHighlight?: string;
  isFeatured?: boolean;
}

export interface FeaturedService {
  displayName: string;
  targetType: 'service' | 'category';
  slug: string;
  categorySlug?: string;
  description: string;
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  badge: string;
  features: string[];
  metrics: string;
  status: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  serviceCategory: string;
  budgetRange: string;
  timeline: string;
  projectScope: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SiteConfig {
  name: string;
  legalName?: string;
  tagline: string;
  description?: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    workingHours: string;
    salesEmail?: string;
    supportEmail?: string;
  };
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    whatsapp?: string;
    facebook?: string;
    youtube?: string;
  };
  stats?: {
    metric: string;
    value: string;
    label: string;
  }[];
}
