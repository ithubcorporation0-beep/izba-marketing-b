import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'IZBA Marketing agency',
  siteName: 'IZBA Marketing agency',
  shortName: 'IZBA',
  tagline: 'Marketing Strategy, Digital Growth & Technology Solutions',
  // TODO: Replace with real public website URL
  url: 'PLACEHOLDER_SITE_URL',
  description:
    'Full-service marketing agency providing digital marketing, SEO, AI automation, web development, graphic design, and content production.',
  contact: {
    email: 'ibrookhanx007@gmail.com',
    phone: '+92 317 9898769',
    whatsapp: '+92 317 9898769',
    // TODO: Replace with real physical company address (optional)
    address: 'PLACEHOLDER_ADDRESS',
    workingHours: 'Available 24/7',
  },
  socials: {
    // TODO: Replace with real LinkedIn URL
    linkedin: 'PLACEHOLDER_LINKEDIN_URL',
    // TODO: Replace with real GitHub URL
    github: 'PLACEHOLDER_GITHUB_URL',
    // TODO: Replace with real Twitter / X URL
    twitter: 'PLACEHOLDER_TWITTER_URL',
    whatsapp: 'https://wa.me/923179898769',
    // TODO: Replace with real Facebook page URL
    facebook: 'PLACEHOLDER_FACEBOOK_URL',
    // TODO: Replace with real YouTube channel URL
    youtube: 'PLACEHOLDER_YOUTUBE_URL',
  },
  // Project availability badge
  availabilityBadge: 'Available 24/7 — Now accepting new projects',

  // Studio clock timezone
  timezone: 'UTC',
  timezoneLabel: 'TIMEZONE',

  // Closing CTA Section copy (fully editable)
  closingCta: {
    headline: 'Ready to start your project?',
    subheadline:
      'From custom software architecture and digital marketing to AI workflows and creative branding — we partner with businesses to build modern, reliable operations.',
    primaryBtnText: 'Request a Quote',
  },
};

export const siteName = siteConfig.name;
export const shortName = siteConfig.shortName || 'IZBA';
