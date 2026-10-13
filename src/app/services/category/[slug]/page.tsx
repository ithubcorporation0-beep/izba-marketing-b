import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { categories } from '@/content/categories';
import { services } from '@/content/services';
import { constructMetadata } from '@/lib/seo/metadata';
import { ServiceCard } from '@/components/services/ServiceCard';
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
      title: 'Category Not Found',
    };
  }

  const categoryName = category.name || category.title;
  const categoryDesc = category.shortDescription || category.description;

  return constructMetadata({
    title: `${categoryName} — Services`,
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

  const categoryName = category.name || category.title;
  const categoryDesc = category.shortDescription || category.description;
  const categoryServices = services.filter(
    (s) => s.categorySlug === category.slug || s.category === category.id
  );

  return (
    <div className={styles.categoryPageWrapper}>
      <div className={styles.topBar}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>

      <section className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="cyan" size="md">
            Service Category
          </Badge>
          <h1 className={styles.title}>{categoryName}</h1>
          <p className={styles.subtitle}>{categoryDesc}</p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {categoryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className={styles.otherCategoriesSection}>
            <h3>Explore Other Service Categories</h3>
            <div className={styles.otherCategoriesGrid}>
              {categories
                .filter((c) => c.id !== category.id)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/services/category/${cat.slug}`}
                    className={styles.catCard}
                  >
                    <h4>{cat.name || cat.title}</h4>
                    <p>{cat.shortDescription}</p>
                    <span className={styles.catLinkText}>
                      View Services &rarr;
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
