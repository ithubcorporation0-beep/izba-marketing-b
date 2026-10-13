import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { projects } from '@/content/projects';
import { categories } from '@/content/categories';
import { PortfolioFilter } from '@/components/portfolio/PortfolioFilter';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Enterprise Case Studies & Portfolio',
  description:
    'Review proven real-world outcomes and architectural implementations delivered by IT HUB Corporation for global banking, healthcare, logistics, and defense clients.',
  pathname: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className={styles.portfolioPageWrapper}>
      <section className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="emerald" size="md">
            Verified Case Studies
          </Badge>
          <h1 className={styles.title}>
            Architectural Implementations & Quantified Impact
          </h1>
          <p className={styles.subtitle}>
            Explore how IT HUB Corporation solves mission-critical latency
            bottlenecks, cloud migrations, zero-trust deployments, and
            enterprise IoT telemetry.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <PortfolioFilter projects={projects} categories={categories} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
