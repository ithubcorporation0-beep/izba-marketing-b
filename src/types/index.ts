export interface Category {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  featured: boolean;
  stat?: {
    value: string;
    label: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  stack: string[];
  featured: boolean;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
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
  status: 'Available' | 'Beta' | 'Enterprise';
  docsUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category:
    | 'General'
    | 'Services & Delivery'
    | 'Security & Compliance'
    | 'Pricing & Engagement';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarText: string;
  statHighlight?: string;
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
