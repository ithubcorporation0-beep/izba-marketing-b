import { siteConfig } from '@/config/site';
import { getSiteUrl } from './metadata';

const isNotPlaceholder = (val?: string): boolean =>
  Boolean(val && !val.startsWith('PLACEHOLDER_') && val.trim().length > 0);

/**
 * Builds schema.org Organization JSON-LD structured data.
 * Adheres strictly to AGENT_RULES.md (Rule 2): Omits any fields that are still placeholders.
 */
export function getOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    logo: `${siteUrl}/icons/favicon.svg`,
  };

  if (isNotPlaceholder(siteConfig.contact.email)) {
    schema.email = siteConfig.contact.email;
  }

  if (isNotPlaceholder(siteConfig.contact.phone)) {
    schema.telephone = siteConfig.contact.phone;
  }

  if (isNotPlaceholder(siteConfig.contact.address)) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
    };
  }

  const validSocials = Object.values(siteConfig.socials).filter(isNotPlaceholder);
  if (validSocials.length > 0) {
    schema.sameAs = validSocials;
  }

  return schema;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Builds schema.org BreadcrumbList JSON-LD structured data.
 */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const cleanPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${cleanPath === '/' ? '' : cleanPath}`,
      };
    }),
  };
}
