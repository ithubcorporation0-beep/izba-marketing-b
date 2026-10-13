import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  pathname = '',
  image = '/images/og-image.png',
}: PageMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  let metadataBase: URL | undefined;
  try {
    metadataBase = new URL(siteConfig.url);
  } catch {
    metadataBase = undefined;
  }

  const canonicalUrl = metadataBase
    ? `${siteConfig.url}${pathname}`
    : undefined;

  return {
    title: fullTitle,
    description,
    ...(metadataBase && { metadataBase }),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    openGraph: {
      title: fullTitle,
      description,
      ...(canonicalUrl && { url: canonicalUrl }),
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
