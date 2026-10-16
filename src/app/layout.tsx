import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/config/site';
import { getSiteUrl } from '@/lib/seo/metadata';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConsentBanner } from '@/components/analytics/ConsentBanner';
import { MotionProvider } from '@/lib/motion';

const Preloader = dynamic(
  () => import('@/components/sections/Preloader').then((m) => m.Preloader)
);

const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((m) => m.CustomCursor)
);

const ScrollProgressBar = dynamic(
  () => import('@/components/ui/ScrollProgressBar').then((m) => m.ScrollProgressBar)
);

const FloatingWhatsApp = dynamic(
  () => import('@/components/ui/FloatingWhatsApp').then((m) => m.FloatingWhatsApp)
);

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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/icons/favicon.svg' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
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
      <body className="min-h-screen flex flex-col font-sans bg-[var(--color-page-bg)] text-[var(--color-text-main)] antialiased selection:bg-[var(--color-gold)] selection:text-[var(--color-navy)]">
        <MotionProvider>
          {/* Branded First-Visit Preloader */}
          <Preloader />

          {/* Skip to Content for Keyboard Accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>

          {/* Global Sticky Header */}
          <Header />

          {/* Reading / Scroll Progress Bar at very top of screen */}
          <ScrollProgressBar />

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

          {/* Global Floating WhatsApp Direct Support Button */}
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
