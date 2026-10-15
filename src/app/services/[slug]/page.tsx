import React from 'react';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Coins,
  ListFilter,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import {
  serviceCategories,
  getCategoryDetailBySlug,
  services,
} from '@/content/services';
import { projects } from '@/content/projects';
import { testimonials } from '@/content/testimonials';
import { constructMetadata, getSiteUrl } from '@/lib/seo/metadata';
import { getBreadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CategoryCard } from '@/components/services/CategoryCard';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import styles from './page.module.css';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categoryParams = serviceCategories.map((cat) => ({
    slug: cat.slug,
  }));
  const serviceParams = services.map((svc) => ({
    slug: svc.slug,
  }));
  return [...categoryParams, ...serviceParams];
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryDetailBySlug(slug);
  const matchedService = services.find((s) => s.slug === slug);

  if (!category && matchedService) {
    return constructMetadata({
      title: `${matchedService.name} in Mardan | IZBA Marketing agency`,
      description: matchedService.shortDescription,
      pathname: `/services/${matchedService.slug}`,
    });
  }

  if (!category) {
    return {
      title: `Category Not Found | ${siteConfig.name}`,
    };
  }

  return constructMetadata({
    title: category.seoTitle || `${category.name} in Mardan | IZBA Marketing agency`,
    description: category.seoDescription || category.shortDescription,
    pathname: `/services/${category.slug}`,
  });
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const matchedService = services.find((s) => s.slug === slug);
  const category =
    getCategoryDetailBySlug(slug) ||
    (matchedService ? getCategoryDetailBySlug(matchedService.categorySlug) : undefined);

  if (!category) {
    notFound();
  }

  const categoryName: string = category.name || category.title || 'Category';
  const pageHeading = matchedService ? matchedService.name : categoryName;
  const siteUrl = getSiteUrl();

  // Quote link with category and service pre-selected
  const selectedServiceSlug =
    matchedService?.slug || category.services[0]?.slug || category.slug;
  const primaryQuoteHref = `/contact?category=${category.slug}&service=${selectedServiceSlug}`;
  const whatsappNumber =
    siteConfig.contact.whatsapp && !siteConfig.contact.whatsapp.startsWith('PLACEHOLDER_')
      ? siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')
      : '923149140414';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi IZBA Marketing agency, I am interested in ${pageHeading}.`
  )}`;

  // Related portfolio and testimonials (proof)
  const proofProjects = projects.filter(
    (p) => p.categorySlug === category.slug && p.isPublished
  );
  const proofTestimonials = testimonials.filter(
    (t) =>
      t.isPublished &&
      (t.serviceSlug
        ? category.services.some((s) => s.slug === t.serviceSlug)
        : true)
  );
  const hasProof = proofProjects.length > 0 || proofTestimonials.length > 0;

  // Related categories
  const relatedCategories = category.relatedCategorySlugs
    .map((relSlug) => serviceCategories.find((c) => c.slug === relSlug))
    .filter((c): c is typeof category => Boolean(c));

  // FAQ accordion items
  const accordionItems = category.faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: faq.answer,
  }));

  // Structured Data
  const breadcrumbItems = matchedService
    ? [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: categoryName, href: `/services/${category.slug}` },
        { label: matchedService.name },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: categoryName },
      ];

  const breadcrumbJsonLd = getBreadcrumbJsonLd(
    matchedService
      ? [
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: categoryName, path: `/services/${category.slug}` },
          { name: matchedService.name, path: `/services/${matchedService.slug}` },
        ]
      : [
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: categoryName, path: `/services/${category.slug}` },
        ]
  );

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageHeading,
    description: matchedService
      ? matchedService.shortDescription
      : category.oneSentencePromise,
    url: `${siteUrl}/services/${matchedService ? matchedService.slug : category.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'IZBA Marketing agency',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mardan',
        addressRegion: 'Khyber Pakhtunkhwa',
        addressCountry: 'PK',
      },
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Khyber Pakhtunkhwa',
      },
      {
        '@type': 'Country',
        name: 'Pakistan',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${categoryName} Offerings`,
      itemListElement: category.services.map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.name,
          description: svc.outcomeDescription,
        },
      })),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={styles.categoryPageWrapper}>
      {/* Search Engine Structured Data */}
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Top Breadcrumb Navigation */}
      <div className={styles.topBar}>
        <Container size="default">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </div>

      {/* 1. HERO: title, promise, ONE primary button */}
      <header className={styles.heroSection}>
        <Container size="default">
          <Reveal className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Badge variant="gold" size="md">
                {matchedService ? 'Featured Service' : 'Service Category'}
              </Badge>
            </div>

            <h1 className={styles.title}>
              {pageHeading}{' '}
              <span className={styles.titleAccent}>in Mardan</span>
            </h1>

            <p className={styles.promise}>
              {matchedService
                ? matchedService.shortDescription
                : category.oneSentencePromise}
            </p>

            <div className={styles.heroActionGroup}>
              <Button
                href={primaryQuoteHref}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Get a Free Quote
              </Button>

              <p className={styles.directChatLink}>
                Or chat with us directly on WhatsApp:{' '}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with IZBA Marketing agency on WhatsApp about ${pageHeading}`}
                >
                  0314 9140414
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* 2. WHO IT IS FOR: 3 to 5 short bullets describing ideal client */}
      <section className={styles.whoSection} aria-labelledby="who-heading">
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="neutral" size="sm">
              Audience
            </Badge>
            <h2 id="who-heading" className={styles.sectionTitle}>
              Who This Is For
            </h2>
            <p className={styles.sectionSubtitle}>
              Tailored solutions crafted for businesses and professionals seeking dependable outcomes.
            </p>
          </Reveal>

          <RevealStagger className={styles.whoGrid}>
            {category.whoItIsFor.map((bullet, idx) => (
              <div key={idx} className={styles.whoCard}>
                <CheckCircle2 size={20} className={styles.checkIcon} aria-hidden="true" />
                <span className={styles.whoText}>{bullet}</span>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* 3. WHAT YOU GET: services in this category with table of contents */}
      <section className={styles.whatSection} aria-labelledby="what-heading">
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="gold" size="sm">
              Deliverables
            </Badge>
            <h2 id="what-heading" className={styles.sectionTitle}>
              What You Get
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore the 10 specialized services included in this category. Click any service to jump straight to its scope.
            </p>
          </Reveal>

          {/* Quick Jump Table of Contents */}
          <nav className={styles.tocBox} aria-label="Table of Contents for services in this category">
            <div className={styles.tocHeader}>
              <ListFilter size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
              <span className={styles.tocTitle}>Quick Jump Table of Contents</span>
            </div>
            <ul className={styles.tocList}>
              {category.services.map((svc) => (
                <li key={`toc-${svc.slug}`}>
                  <a href={`#${svc.slug}`} className={styles.tocLink}>
                    <span className={styles.tocDot} aria-hidden="true" />
                    <span>{svc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 10 Anchored Service Blocks */}
          <div className={styles.servicesGrid}>
            {category.services.map((svc) => (
              <article key={svc.id} id={svc.slug} className={styles.serviceBlock}>
                <div className={styles.serviceTop}>
                  <h3 className={styles.serviceBlockTitle}>{svc.name}</h3>
                  <p className={styles.serviceOutcome}>{svc.outcomeDescription}</p>
                </div>

                <div className={styles.serviceBestFor}>
                  <span className={styles.bestForLabel}>Best for:</span>
                  <span>{svc.bestFor}</span>
                </div>

                <div className={styles.serviceFooterLink}>
                  <a
                    href={`/contact?category=${category.slug}&service=${svc.slug}`}
                    className={styles.requestLink}
                  >
                    <span>Request quote for this service</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. HOW IT WORKS: 3 to 5 step process */}
      <section className={styles.processSection} aria-labelledby="how-heading">
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="neutral" size="sm">
              Our Process
            </Badge>
            <h2 id="how-heading" className={styles.sectionTitle}>
              How It Works
            </h2>
            <p className={styles.sectionSubtitle}>
              A transparent, predictable process from our first discovery call to final delivery.
            </p>
          </Reveal>

          <RevealStagger className={styles.processGrid}>
            {category.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <span className={styles.processStepNum}>{step.step}</span>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDesc}>{step.description}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* 5. PRICE / TIMELINE: honest values or custom quote message */}
      <section className={styles.priceSection} aria-labelledby="price-heading">
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="gold" size="sm">
              Investment & Schedule
            </Badge>
            <h2 id="price-heading" className={styles.sectionTitle}>
              Pricing & Delivery Timeline
            </h2>
            <p className={styles.sectionSubtitle}>
              Clear commercial terms tailored to your specific project scope with zero unexpected fees.
            </p>
          </Reveal>

          <div className={styles.priceCardContainer}>
            <Reveal className={styles.priceCard}>
              {/* Pricing Column */}
              <div className={styles.priceItem}>
                <div className="flex items-center gap-2 mb-1">
                  <Coins size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                  <span className={styles.priceLabel}>Estimated Starting Rate</span>
                </div>
                {category.startingPricePkr !== null ? (
                  <p className={styles.priceValue}>
                    Starting from PKR {category.startingPricePkr.toLocaleString()}
                  </p>
                ) : (
                  <p className={styles.priceValue}>Custom quote, tell us what you need</p>
                )}
                <p className={styles.priceSub}>
                  Final pricing is determined by functional scope and required deliverables.
                </p>
              </div>

              {/* Timeline Column */}
              <div className={styles.priceItem}>
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                  <span className={styles.priceLabel}>Typical Timeline</span>
                </div>
                {category.typicalTimeline !== null ? (
                  <p className={styles.priceValue}>{category.typicalTimeline}</p>
                ) : (
                  <p className={styles.priceValue}>Custom quote, tell us what you need</p>
                )}
                <p className={styles.priceSub}>
                  Timelines depend on complexity, milestone approvals, and asset readiness.
                </p>
              </div>
            </Reveal>

            <div className={styles.priceNoticeBox}>
              <p>
                <strong>Zero Invented Figures:</strong> We provide an exact, itemized scope and formal proposal
                before initiating work, ensuring total clarity and budget security.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. PROOF: related portfolio and testimonials (hidden if no matching data exists) */}
      {hasProof && (
        <section className={styles.proofSection} aria-labelledby="proof-heading">
          <Container size="default">
            <Reveal className={styles.sectionHeaderCenter}>
              <Badge variant="neutral" size="sm">
                Case Studies
              </Badge>
              <h2 id="proof-heading" className={styles.sectionTitle}>
                Proven Client Results
              </h2>
              <p className={styles.sectionSubtitle}>
                Verified work delivered by IZBA Marketing agency.
              </p>
            </Reveal>

            <RevealStagger className={styles.proofGrid}>
              {proofProjects.map((project) => (
                <div key={project.id} className={styles.whoCard}>
                  <h3 className="font-bold text-[var(--color-navy)]">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-main)]">{project.summary}</p>
                </div>
              ))}
            </RevealStagger>
          </Container>
        </section>
      )}

      {/* 7. FAQ: 4 to 6 questions per category (accordion) */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <Container size="default">
          <div className={styles.faqContainer}>
            <Reveal className={styles.sectionHeaderCenter}>
              <Badge variant="gold" size="sm">
                Common Questions
              </Badge>
              <h2 id="faq-heading" className={styles.sectionTitle}>
                Frequently Asked Questions
              </h2>
              <p className={styles.sectionSubtitle}>
                Clear answers regarding project requirements, turnarounds, and working with IZBA Marketing agency.
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <Accordion items={accordionItems} defaultOpenId="faq-0" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8. FINAL CALL TO ACTION: repeat the single primary button */}
      <section className={styles.finalCtaSection} aria-labelledby="final-cta-heading">
        <Container size="default">
          <Reveal className={styles.finalCtaBox}>
            <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
              Ready to Start Your {pageHeading} Project?
            </h2>
            <p className={styles.finalCtaSubtitle}>
              Tell us about your requirements and we will prepare a clear, itemized proposal for your business.
            </p>

            <div className="flex flex-col items-center gap-2">
              <Button
                href={primaryQuoteHref}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Get a Free Quote
              </Button>

              <p className={styles.directChatLink}>
                Prefer WhatsApp?{' '}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Message IZBA Marketing agency on WhatsApp regarding ${pageHeading}`}
                >
                  Click here to chat with our team
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 9. INTERNAL LINKS BETWEEN RELATED CATEGORIES */}
      {relatedCategories.length > 0 && (
        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <Container size="default">
            <Reveal className={styles.sectionHeaderCenter}>
              <Badge variant="neutral" size="sm">
                Explore More
              </Badge>
              <h2 id="related-heading" className={styles.sectionTitle}>
                Related Service Categories
              </h2>
              <p className={styles.sectionSubtitle}>
                Discover other specialized disciplines offered by IZBA Marketing agency.
              </p>
            </Reveal>

            <RevealStagger className={styles.relatedGrid}>
              {relatedCategories.map((relCat) => (
                <CategoryCard
                  key={relCat.id}
                  category={relCat}
                  serviceCount={relCat.services.length}
                />
              ))}
            </RevealStagger>
          </Container>
        </section>
      )}

      {/* 10. STICKY MOBILE CTA BAR (at 360px and up to 768px) */}
      <div className={styles.mobileStickyBar} aria-label="Quick mobile action">
        <Button
          href={primaryQuoteHref}
          variant="primary"
          size="md"
          fullWidth
          icon={<ArrowRight size={16} />}
        >
          Get a Free Quote
        </Button>
      </div>
    </div>
  );
}
