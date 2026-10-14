import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'IT HUB Corporation',
  tagline: 'Enterprise Technology & Digital Transformation',
  // TODO: Replace with real public website URL
  url: 'PLACEHOLDER_SITE_URL',
  description:
    'Enterprise IT Solutions, Cloud Architecture, Software Engineering, and Cybersecurity Platform.',
  contact: {
    // TODO: Replace with real company email
    email: 'PLACEHOLDER_EMAIL',
    // TODO: Replace with real company phone number
    phone: 'PLACEHOLDER_PHONE',
    // TODO: Replace with real company WhatsApp number
    whatsapp: 'PLACEHOLDER_WHATSAPP',
    // TODO: Replace with real physical company address
    address: 'PLACEHOLDER_ADDRESS',
    // TODO: Replace with real business operating hours
    workingHours: 'PLACEHOLDER_WORKING_HOURS',
  },
  socials: {
    // TODO: Replace with real LinkedIn URL
    linkedin: 'PLACEHOLDER_LINKEDIN_URL',
    // TODO: Replace with real GitHub URL
    github: 'PLACEHOLDER_GITHUB_URL',
    // TODO: Replace with real Twitter / X URL
    twitter: 'PLACEHOLDER_TWITTER_URL',
    // TODO: Replace with real WhatsApp chat link
    whatsapp: 'PLACEHOLDER_WHATSAPP_URL',
    // TODO: Replace with real Facebook page URL
    facebook: 'PLACEHOLDER_FACEBOOK_URL',
    // TODO: Replace with real YouTube channel URL
    youtube: 'PLACEHOLDER_YOUTUBE_URL',
  },
  // Project availability badge (editable; mark as needs client confirmation)
  // TODO: Needs client confirmation on availability text
  availabilityBadge: 'Now accepting new projects',

  // Live local-time clock timezone for company headquarters/studio
  // TODO: Replace with real client primary office/studio timezone (e.g. 'America/New_York', 'Europe/London', 'Asia/Karachi')
  timezone: 'UTC',
  // TODO: Replace with matching friendly timezone display label (e.g. 'UTC', 'EST', 'GMT', 'PKT')
  timezoneLabel: 'UTC',

  // Closing CTA Section copy (fully editable)
  closingCta: {
    headline: 'Ready to start your project?',
    subheadline:
      'From custom software architecture and digital marketing to AI workflows and creative branding — we partner with businesses to build modern, reliable operations.',
    primaryBtnText: 'Request a Quote',
  },
};
