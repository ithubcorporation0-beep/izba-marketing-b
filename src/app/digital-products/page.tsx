import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo/metadata';
import {
  FileText,
  Calendar,
  BookOpen,
  Printer,
  Presentation,
  ShoppingBag,
  Share2,
  Layers,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Products & Templates',
  description:
    'Custom digital templates, planners, e-books, and business document packs designed for your business or brand. Delivered ready for distribution.',
  pathname: '/digital-products',
});

interface ProductOffering {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const offerings: ProductOffering[] = [
  {
    title: 'Digital Product Creation',
    slug: 'digital-product-creation',
    description:
      'End-to-end conceptualization, design, packaging, and digital delivery setup for monetizable assets, workbooks, and downloadable packages.',
    icon: <Sparkles size={22} />,
    highlights: [
      'Digital product market positioning and format selection',
      'Asset creation and high-end visual design polish',
      'Downloadable ZIP bundle packaging with user manuals',
    ],
  },
  {
    title: 'Website Templates',
    slug: 'website-templates',
    description:
      'Pre-built, responsive HTML, Next.js, and WordPress website templates ready for turnkey deployment and brand customization.',
    icon: <FileText size={22} />,
    highlights: [
      'Modern responsive layouts for Home, About, Services, and Contact',
      'Mobile-first responsive CSS styling with clean design tokens',
      'Thorough installation and customization documentation',
    ],
  },
  {
    title: 'UI Kits and Design Templates',
    slug: 'ui-kits-and-design-templates',
    description:
      'Comprehensive Figma UI component kits, wireframe libraries, and web design system templates configured with auto-layout.',
    icon: <Layers size={22} />,
    highlights: [
      'Figma auto-layout components with fluid constraints',
      'Design tokens for typography, spacing, and color palettes',
      'Dark and light mode variable styles included',
    ],
  },
  {
    title: 'Social Media Templates',
    slug: 'social-media-templates',
    description:
      'Reusable Canva and Figma post, story, and carousel templates designed for rapid, brand-consistent marketing publishing.',
    icon: <Share2 size={22} />,
    highlights: [
      '30 to 60 editable template layouts in Canva or Figma',
      'Formats for Instagram feed (1:1), portrait (4:5), and stories (9:16)',
      'Placeholder photo frames with one-click image replacement',
    ],
  },
  {
    title: 'E-books and Digital Guides',
    slug: 'ebooks-and-digital-guides',
    description:
      'Professionally formatted digital e-books, whitepapers, and guides formatted for high-resolution PDF and tablet reading.',
    icon: <BookOpen size={22} />,
    highlights: [
      'Interactive PDF with clickable table of contents',
      'High-resolution 3D mockup promotional images',
      'Clean typography, callout boxes, and custom diagrams',
    ],
  },
  {
    title: 'Digital Planners',
    slug: 'digital-planners',
    description:
      'Interactive hyperlinked digital planners, workbooks, and journals designed for GoodNotes, Notability, and tablet stylus apps.',
    icon: <Calendar size={22} />,
    highlights: [
      'Full hyperlinked tab navigation across calendar pages',
      'Daily, weekly, and monthly spreads with goal trackers',
      'Tested for smooth responsiveness on iPad and Android tablets',
    ],
  },
  {
    title: 'Presentation Templates',
    slug: 'presentation-templates',
    description:
      'High-impact master slide deck templates in PowerPoint, Keynote, and Google Slides with custom layout variations.',
    icon: <Presentation size={22} />,
    highlights: [
      '30+ unique slide variations (timelines, data charts, quotes)',
      'Theme variables for instant one-click palette switching',
      'Tested across both Microsoft PowerPoint and Google Slides',
    ],
  },
  {
    title: 'Printable Products',
    slug: 'printable-products',
    description:
      'High-resolution, CMYK-ready print designs for checklists, planners, journal pages, wall calendars, and stationery cards.',
    icon: <Printer size={22} />,
    highlights: [
      'Standard A4, A5, and US Letter print dimensions',
      '300 DPI print-ready PDF with bleed margins',
      'Clean ink-saving monochrome and minimal aesthetic options',
    ],
  },
  {
    title: 'Online Store Setup',
    slug: 'online-store-setup',
    description:
      'Turnkey setup of Shopify, WooCommerce, or Gumroad stores configured with payments, digital downloads, and store policies.',
    icon: <ShoppingBag size={22} />,
    highlights: [
      'Store account creation and domain DNS mapping',
      'Payment gateway setup (Stripe, PayPal, Apple Pay)',
      'Standard store policy pages (Privacy, Refund Policy, Terms)',
    ],
  },
];

export default function DigitalProductsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Container size="default">
        <SectionHeading
          badge="Digital Assets & Templates"
          title="Digital Products & Reusable Templates"
          subtitle="We craft tailored digital assets, downloadable workbooks, branded templates, and business kits built for your audience or commercial distribution."
          align="center"
        />

        {/* Clear Notice: No automated checkout or fake prices */}
        <div className={styles.noticeBanner} role="note">
          <Info size={20} className={styles.noticeIcon} aria-hidden="true" />
          <div>
            <strong>How Our Digital Products Work:</strong> We build digital
            assets as a custom design and development service. Each kit or
            template is personalized to your business branding, requirements,
            and software ecosystem. We do not run instant retail shopping carts
            or charge automated credit card fees on this website; every project
            is scoped and delivered with full commercial handover.
          </div>
        </div>

        {/* Offerings Grid */}
        <div className={styles.grid}>
          {offerings.map((item) => (
            <article key={item.slug} className={styles.productCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} aria-hidden="true">
                  {item.icon}
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
              </div>

              <p className={styles.cardDescription}>{item.description}</p>

              <ul className={styles.inclusionsList}>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className={styles.inclusionItem}>
                    <CheckCircle2 size={15} className={styles.checkIcon} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardActions}>
                <Button
                  href={`/contact?service=${item.slug}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight size={14} />}
                  fullWidth
                >
                  Request a Quote
                </Button>
                <Link
                  href={`/services/${item.slug}`}
                  className={styles.detailsLink}
                >
                  <span>View Full Service Details</span>
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <section className={styles.bottomCtaCard}>
          <h2 className={styles.bottomCtaTitle}>
            Need a Custom Digital Asset or White-Label Pack?
          </h2>
          <p className={styles.bottomCtaText}>
            Whether you want an internal suite of branded business documents or
            a line of digital planners to sell online, we build high-quality,
            distribution-ready files with complete commercial ownership.
          </p>
          <div className={styles.bottomCtaActions}>
            <Button
              href="/contact?service=digital-product-creation"
              variant="primary"
              size="md"
              icon={<ArrowRight size={16} />}
            >
              Request a Custom Quote
            </Button>
            <Button
              href="/services/category/digital-products-ecommerce"
              variant="secondary"
              size="md"
            >
              Browse All Category Services
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
