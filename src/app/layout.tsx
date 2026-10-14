import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { getSiteUrl } from '@/lib/seo/metadata';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConsentBanner } from '@/components/analytics/ConsentBanner';
import { MotionProvider } from '@/lib/motion';
import { Preloader } from '@/components/sections/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} banner`,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/icons/favicon.svg' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#101828',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-[var(--color-white)] text-[var(--color-text-main)] antialiased selection:bg-[var(--color-primary-blue)] selection:text-[var(--color-white)]">
        <MotionProvider>
          {/* Branded First-Visit Preloader */}
          <Preloader />

          {/* Skip to Content for Keyboard Accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>

          {/* Global Sticky Header */}
          <Header />

          {/* Main Content Landmark */}
          <main
            id="main-content"
            className="flex-1 focus:outline-none"
            tabIndex={-1}
          >
            {children}
          </main>

          {/* Global Footer Landmark */}
          <Footer />

          {/* Optional Cookie & Analytics Consent Banner */}
          <ConsentBanner />

          {/* Custom Trailing Ring Cursor for Desktop Fine Pointer */}
          <CustomCursor />
        </MotionProvider>
      </body>
    </html>
  );
}
