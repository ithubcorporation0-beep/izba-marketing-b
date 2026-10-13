import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categories } from '@/content/categories';
import { services } from '@/content/services';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CategoryCard } from '@/components/services/CategoryCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found | IT HUB Corporation',
    };
  }

  const categoryName = category.name || category.title;
  const categoryDesc = category.shortDescription || category.description;

  return constructMetadata({
    title: `${categoryName} Services`,
    description: categoryDesc,
    pathname: `/services/category/${category.slug}`,
  });
}

export default async function CategoryServicesPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryName: string = category.name || category.title || 'Category';
  const categoryDesc = category.shortDescription || category.description;
  const categoryServices = services.filter(
    (s) => s.categorySlug === category.slug || s.category === category.id
  );

  const breadcrumbData = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: categoryName, path: `/services/category/${category.slug}` },
  ]);

  return (
    <div className={styles.categoryPageWrapper}>
      <JsonLd data={breadcrumbData} />
      {/* Breadcrumb Navigation */}
      <div className={styles.topBar}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: categoryName },
            ]}
          />
        </div>
      </div>

      {/* Category Intro Header */}
      <header className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="blue" size="md">
            Service Category
          </Badge>
          <h1 className={styles.title}>{categoryName}</h1>
          <p className={styles.subtitle}>{categoryDesc}</p>
        </div>
      </header>

      {/* 10 Service Cards Grid */}
      <section
        className={styles.servicesSection}
        aria-labelledby="services-list-heading"
      >
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 id="services-list-heading" className={styles.sectionHeading}>
              {categoryServices.length} Specialized Services
            </h2>
            <p className={styles.sectionSub}>
              Detailed technical, marketing, and creative capabilities available
              within {categoryName}.
            </p>
          </div>

          <div className={styles.grid}>
            {categoryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Related Categories */}
          <div
            className={styles.otherCategoriesSection}
            aria-labelledby="related-categories-heading"
          >
            <h2
              id="related-categories-heading"
              className={styles.relatedHeading}
            >
              Explore Related Categories
            </h2>
            <div className={styles.otherCategoriesGrid}>
              {categories
                .filter((c) => c.id !== category.id)
                .slice(0, 3)
                .map((cat) => (
                  <CategoryCard key={cat.id} category={cat} serviceCount={10} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <CTASection />
    </div>
  );
}
