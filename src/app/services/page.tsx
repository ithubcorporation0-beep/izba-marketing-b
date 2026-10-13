import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { services } from '@/content/services';
import { categories } from '@/content/categories';
import { ServiceSearch } from '@/components/services/ServiceSearch';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Enterprise IT Services Directory',
  description:
    'Explore IT HUB Corporation full catalog of enterprise services across cloud architecture, custom software development, AI automation, and cybersecurity.',
  pathname: '/services',
});

export default function ServicesDirectoryPage() {
  return (
    <div className={styles.servicesPageWrapper}>
      <section className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="cyan" size="md">
            Capabilities Directory
          </Badge>
          <h1 className={styles.title}>
            Enterprise Engineering & Solutions Directory
          </h1>
          <p className={styles.subtitle}>
            Explore our comprehensive portfolio of enterprise IT services.
            Search by technical discipline, key deliverables, or underlying tech
            stack.
          </p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className="container">
          <ServiceSearch services={services} categories={categories} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
