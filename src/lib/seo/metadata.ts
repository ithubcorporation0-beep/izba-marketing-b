import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
}

/**
 * Resolves the production public website URL.
 * Falls back to canonical domain if environment variable is not defined or is a placeholder.
 */
export const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl && envUrl.startsWith('http')) {
    return envUrl.replace(/\/$/, '');
  }
  if (siteConfig.url && siteConfig.url.startsWith('http')) {
    return siteConfig.url.replace(/\/$/, '');
  }
  return 'https://izbamarketing.com';
};

function cleanSeoText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

/**
 * Standardized metadata builder for Next.js App Router pages.
 * Enforces canonical URLs, consistent title structure, Open Graph, and Twitter cards.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  pathname = '',
  image = '/images/og-image.png',
}: PageMetadataOptions = {}): Metadata {
  const siteUrl = getSiteUrl();
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const canonicalUrl = `${siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const metadataBase = new URL(siteUrl);

  let rawTitle = cleanSeoText(title?.trim() || '');
  if (rawTitle) {
    // Strip any trailing brand suffix to avoid duplicates
    rawTitle = rawTitle
      .replace(/\s*(\||\—|-)\s*(IZBA Marketing agency).*$/i, '')
      .trim();
  }

  const cleanDescription = cleanSeoText(description);

  const pageTitle = cleanSeoText(
    rawTitle
      ? `${rawTitle} | ${siteConfig.name}`
      : `${siteConfig.name} — ${siteConfig.tagline}`
  );

  return {
    title: {
      absolute: pageTitle,
    },
    description: cleanDescription,
    metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: cleanDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
