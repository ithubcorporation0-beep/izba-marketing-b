import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  FileCheck,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { services } from '@/content/services';
import { categories } from '@/content/categories';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | IT HUB Corporation',
    };
  }

  const serviceName = service.name || service.title;
  const title =
    service.seoTitle || `${serviceName} Services | IT HUB Corporation`;
  const description = service.seoDescription || service.shortDescription;

  return constructMetadata({
    title,
    description,
    pathname: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const category = categories.find(
    (c) => c.slug === service.categorySlug || c.id === service.category
  );
  const categoryName: string =
    (category && (category.name || category.title)) || 'Services';
  const categorySlug: string = category ? category.slug : '';

  const serviceTitle: string = service.name || service.title || 'Service';
  const includes = service.includes || service.features || [];
  const deliverables = service.deliverables || [];
  const processSteps = service.process || [];
  const faqs = service.faqs || [];

  // Find related services: prioritize relatedServiceSlugs, then same category
  const relatedServices = services
    .filter((s) => {
      if (s.id === service.id || s.slug === service.slug) return false;
      if (
        service.relatedServiceSlugs &&
        service.relatedServiceSlugs.includes(s.slug)
      ) {
        return true;
      }
      return s.categorySlug === service.categorySlug;
    })
    .slice(0, 3);

  const accordionItems = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: (
      <p className="text-[var(--color-text-muted)] text-[0.95rem] leading-relaxed">
        {faq.answer}
      </p>
    ),
  }));

  return (
    <div className={styles.serviceDetailWrapper}>
      {/* 1. Breadcrumbs */}
      <div className={styles.topBar}>
        <Container size="default">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              ...(categorySlug
                ? [
                    {
                      label: categoryName,
                      href: `/services/category/${categorySlug}`,
                    },
                  ]
                : []),
              { label: serviceTitle },
            ]}
          />
        </Container>
      </div>

      {/* 2. Hero Header with Short Summary & "Request a Quote" CTA */}
      <header className={styles.heroSection}>
        <Container size="default">
          <div className={styles.heroLayout}>
            <div className={styles.heroMain}>
              {category && (
                <Link
                  href={`/services/category/${category.slug}`}
                  className="w-fit"
                  aria-label={`View all ${categoryName} services`}
                >
                  <Badge variant="blue" size="md">
                    {categoryName}
                  </Badge>
                </Link>
              )}

              <h1 className={styles.title}>{serviceTitle}</h1>
              <p className={styles.summary}>{service.shortDescription}</p>

              <div>
                <Button
                  href={`/contact?service=${service.slug}`}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Request a Quote for {serviceTitle}
                </Button>
              </div>
            </div>

            {/* Quick Scope & Inquiries Card */}
            <div className={styles.sidebar}>
              <div className={styles.quoteCard}>
                <div className={styles.quoteCardHeader}>
                  <Sparkles size={20} className={styles.sparkleIcon} />
                  <h2 className={styles.quoteCardTitle}>
                    Project Brief &amp; Scope
                  </h2>
                </div>
                <p className={styles.quoteCardText}>
                  Get an accurate scope, clear timeline, and fixed proposal for
                  your requirements.
                </p>

                <div className={styles.quoteCardPoints}>
                  <div className={styles.quotePoint}>
                    <ShieldCheck size={16} className={styles.pointIcon} />
                    <span>NDA &amp; Confidentiality Protected</span>
                  </div>
                  <div className={styles.quotePoint}>
                    <Clock size={16} className={styles.pointIcon} />
                    <span>Prompt Response within 1 Business Day</span>
                  </div>
                  <div className={styles.quotePoint}>
                    <CheckCircle2 size={16} className={styles.pointIcon} />
                    <span>Milestone-Based Delivery</span>
                  </div>
                </div>

                <Button
                  href={`/contact?service=${service.slug}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                  className={styles.quoteButton}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Problem It Solves & Detailed Overview */}
      <section
        className={styles.overviewSection}
        aria-labelledby="overview-heading"
      >
        <Container size="default">
          <div className={styles.overviewContent}>
            <Badge variant="neutral" size="sm">
              Overview
            </Badge>
            <h2 id="overview-heading" className={styles.sectionTitle}>
              Problem It Solves &amp; Service Scope
            </h2>

            {Array.isArray(service.description) &&
            service.description.length > 0 ? (
              <>
                <p className={styles.problemLead}>{service.description[0]}</p>
                {service.description.slice(1).map((paragraph, idx) => (
                  <p key={idx} className={styles.bodyParagraph}>
                    {paragraph}
                  </p>
                ))}
              </>
            ) : (
              <p className={styles.problemLead}>
                {service.fullDescription || service.shortDescription}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* 4. What It Includes & 5. Typical Deliverables */}
      {(includes.length > 0 || deliverables.length > 0) && (
        <section
          className={styles.breakdownSection}
          aria-labelledby="breakdown-heading"
        >
          <Container size="default">
            <h2 id="breakdown-heading" className="sr-only">
              Inclusions and Deliverables
            </h2>
            <div className={styles.breakdownGrid}>
              {/* What It Includes */}
              {includes.length > 0 && (
                <div className={styles.columnCard}>
                  <div className={styles.columnHeader}>
                    <div className={styles.columnIcon}>
                      <Layers size={20} />
                    </div>
                    <h3 className={styles.columnTitle}>What Is Included</h3>
                  </div>

                  <ul
                    className={styles.itemList}
                    aria-label="Included features"
                  >
                    {includes.map((item, idx) => (
                      <li key={idx} className={styles.itemRow}>
                        <CheckCircle2
                          size={18}
                          className={styles.checkIcon}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Typical Deliverables */}
              {deliverables.length > 0 && (
                <div className={styles.columnCard}>
                  <div className={styles.columnHeader}>
                    <div className={styles.columnIcon}>
                      <FileCheck size={20} />
                    </div>
                    <h3 className={styles.columnTitle}>Typical Deliverables</h3>
                  </div>

                  <ul
                    className={styles.itemList}
                    aria-label="Deliverables list"
                  >
                    {deliverables.map((item, idx) => (
                      <li key={idx} className={styles.itemRow}>
                        <CheckCircle2
                          size={18}
                          className={styles.docIcon}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Process Steps */}
      {processSteps.length > 0 && (
        <section
          className={styles.processSection}
          aria-labelledby="process-steps-heading"
        >
          <Container size="default">
            <div className={styles.sectionHeaderCenter}>
              <Badge variant="blue" size="md">
                Delivery Workflow
              </Badge>
              <h2 id="process-steps-heading" className={styles.sectionTitle}>
                Our 4-Step Process
              </h2>
              <p className={styles.sectionSubtitle}>
                A clear, predictable roadmap from initial consultation to final
                handover.
              </p>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <div key={step.step} className={styles.processCard}>
                  <span className={styles.stepBadge}>
                    Step {String(step.step).padStart(2, '0')}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7. FAQs Accordion */}
      {accordionItems.length > 0 && (
        <section
          className={styles.faqSection}
          aria-labelledby="service-faq-heading"
        >
          <Container size="default">
            <div className={styles.faqContainer}>
              <div className={styles.sectionHeaderCenter}>
                <Badge variant="cyan" size="md">
                  Questions &amp; Answers
                </Badge>
                <h2 id="service-faq-heading" className={styles.sectionTitle}>
                  Frequently Asked Questions
                </h2>
                <p className={styles.sectionSubtitle}>
                  Specific details about timelines, requirements, and engagement
                  for {serviceTitle}.
                </p>
              </div>

              <div className="mt-8">
                <Accordion items={accordionItems} defaultOpenId="faq-0" />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 8. Related Services */}
      {relatedServices.length > 0 && (
        <section
          className={styles.relatedSection}
          aria-labelledby="related-services-heading"
        >
          <Container size="default">
            <div className={styles.sectionHeaderCenter}>
              <Badge variant="neutral" size="sm">
                Complementary Solutions
              </Badge>
              <h2 id="related-services-heading" className={styles.sectionTitle}>
                Related Services
              </h2>
              <p className={styles.sectionSubtitle}>
                Explore other capabilities commonly paired with {serviceTitle}.
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedServices.map((relService) => (
                <ServiceCard key={relService.id} service={relService} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 9. Final CTA linking to quote with service pre-selected */}
      <CTASection />
    </div>
  );
}
