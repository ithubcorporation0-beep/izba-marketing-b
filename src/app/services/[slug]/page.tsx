import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Layers,
  FileText,
  Sparkles,
} from 'lucide-react';
import { services } from '@/content/services';
import { categories } from '@/content/categories';
import { constructMetadata } from '@/lib/seo/metadata';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
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
      title: 'Service Not Found',
    };
  }

  const title =
    service.seoTitle || `${service.name || service.title} | IT HUB Corporation`;
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
  const serviceTitle = service.name || service.title;
  const features = service.includes || service.features || [];
  const deliverables = service.deliverables || [];
  const technologies = service.technologies || [];

  return (
    <div className={styles.serviceDetailWrapper}>
      {/* Breadcrumb / Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroMain}>
              {category && (
                <Link href={`/services/category/${category.slug}`}>
                  <Badge variant="cyan" size="md">
                    {category.name || category.title}
                  </Badge>
                </Link>
              )}
              <h1 className={styles.title}>{serviceTitle}</h1>
              {Array.isArray(service.description) ? (
                service.description.map((para, i) => (
                  <p key={i} className={styles.fullDesc}>
                    {para}
                  </p>
                ))
              ) : (
                <p className={styles.fullDesc}>
                  {service.fullDescription || service.shortDescription}
                </p>
              )}

              {service.stat && (
                <div className={styles.statBanner}>
                  <span className={styles.statVal}>{service.stat.value}</span>
                  <span className={styles.statLbl}>{service.stat.label}</span>
                </div>
              )}
            </div>

            {/* Quick Request Quote Card */}
            <div className={styles.sidebar}>
              <Card className={styles.rfqCard}>
                <div className={styles.rfqHeader}>
                  <Sparkles size={20} className={styles.sparkleIcon} />
                  <h3>Request a Quote</h3>
                </div>
                <p className={styles.rfqText}>
                  Connect directly with our team to discuss scope, deliverables,
                  and timelines for {serviceTitle}.
                </p>
                <div className={styles.rfqFeatures}>
                  <div>
                    <CheckCircle2 size={16} />{' '}
                    <span>Clear Scope & Milestones</span>
                  </div>
                  <div>
                    <CheckCircle2 size={16} />{' '}
                    <span>Transparent Pricing Estimate</span>
                  </div>
                  <div>
                    <CheckCircle2 size={16} />{' '}
                    <span>NDA & Confidentiality</span>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                  className={styles.rfqButton}
                >
                  Request Technical Proposal
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Breakdown Sections */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Architectural Features */}
            {features.length > 0 && (
              <div className={styles.gridCol}>
                <div className={styles.colHeader}>
                  <Cpu size={22} className={styles.colIcon} />
                  <h2>What Is Covered</h2>
                </div>
                <ul className={styles.featureList}>
                  {features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Deliverables Checklist */}
            {deliverables.length > 0 && (
              <div className={styles.gridCol}>
                <div className={styles.colHeader}>
                  <Layers size={22} className={styles.colIcon} />
                  <h2>Key Deliverables</h2>
                </div>
                <ul className={styles.deliverableList}>
                  {deliverables.map((del, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <FileText size={18} className={styles.docIcon} />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Technology Badges */}
          {technologies.length > 0 && (
            <div className={styles.techSection}>
              <h3 className={styles.techTitle}>Key Technologies & Tools</h3>
              <div className={styles.techBadgeGrid}>
                {technologies.map((tech) => (
                  <div key={tech} className={styles.techPill}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
