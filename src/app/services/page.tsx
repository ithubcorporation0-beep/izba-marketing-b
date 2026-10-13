import React from 'react';
import type { Metadata } from 'next';
import { categories } from '@/content/categories';
import { services } from '@/content/services';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { CategoryCard } from '@/components/services/CategoryCard';
import { ServiceSearch } from '@/components/services/ServiceSearch';
import { CTASection } from '@/components/sections/CTA';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Services Directory',
  description:
    'Explore our complete directory of 90 services across 9 core disciplines, covering software development, digital marketing, AI automation, graphic design, and IT support.',
  pathname: '/services',
});

export default function ServicesPage() {
  return (
    <div className={styles.servicesPageWrapper}>
      {/* 1. Page Intro Header */}
      <header className={styles.headerSection}>
        <Container size="default">
          <div className={styles.headerContainer}>
            <Badge variant="blue" size="md">
              Full Service Catalog
            </Badge>
            <h1 className={styles.title}>
              Services &amp; Digital{' '}
              <span className={styles.gradientText}>Capabilities</span>
            </h1>
            <p className={styles.subtitle}>
              From custom websites and software to digital marketing, AI
              workflows, creative design, and data assistance — discover our 90
              detailed service offerings organized across 9 core disciplines.
            </p>
          </div>
        </Container>
      </header>

      {/* 2. 9 Category Cards Overview */}
      <section
        className={styles.categoriesSection}
        aria-labelledby="categories-overview-heading"
      >
        <Container size="default">
          <div className={styles.sectionHeader}>
            <Badge variant="neutral" size="sm">
              Overview
            </Badge>
            <h2
              id="categories-overview-heading"
              className={styles.sectionTitle}
            >
              9 Core Service Disciplines
            </h2>
            <p className={styles.sectionSubtitle}>
              Select a category to view its dedicated overview, or browse the
              full directory below.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                serviceCount={10}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Full Directory with Search & Category Filter (Grouped under their category) */}
      <section
        className={styles.directorySection}
        aria-labelledby="directory-heading"
      >
        <Container size="default">
          <div className={styles.sectionHeader}>
            <Badge variant="cyan" size="sm">
              Directory
            </Badge>
            <h2 id="directory-heading" className={styles.sectionTitle}>
              Browse All 90 Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Filter by category or search by keyword to locate the exact
              solution for your business.
            </p>
          </div>

          <ServiceSearch services={services} categories={categories} />
        </Container>
      </section>

      {/* 4. Final Quote CTA */}
      <CTASection />
    </div>
  );
}
