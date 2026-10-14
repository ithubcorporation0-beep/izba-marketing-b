import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { projects } from '@/content/projects';
import { categories } from '@/content/categories';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  CheckCircle,
  ArrowRight,
  Briefcase,
  Layers,
  FileCheck,
  Calendar,
  Building,
} from 'lucide-react';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const published = projects.filter((p) => p.isPublished);
  if (published.length === 0) {
    // When no projects are published, provide a fallback slug so Next.js static export does not fail
    return [{ slug: '_placeholder' }];
  }
  return published.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.isPublished);

  if (!project) {
    return constructMetadata({
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
      pathname: `/portfolio/${slug}`,
    });
  }

  return constructMetadata({
    title: `${project.title} | Case Study`,
    description: project.summary,
    pathname: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.isPublished);

  if (!project) {
    notFound();
  }

  const category = categories.find((c) => c.slug === project.categorySlug);
  const categoryName = category ? category.name : project.categorySlug;
  const clientName = project.clientName || project.client;
  const deliverables = project.deliverables || [];

  const breadcrumbData = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: project.title, path: `/portfolio/${project.slug}` },
  ]);

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={breadcrumbData} />
      <Container size="default">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: project.title },
          ]}
        />
      </Container>

      <header className={styles.headerSection}>
        <Container size="default">
          <span className={styles.categoryBadge}>{categoryName}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.clientMeta}>
            {clientName && (
              <div className={styles.metaItem}>
                <Building size={16} />
                <span>Client: {clientName}</span>
              </div>
            )}
            {project.publishedAt && (
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>Delivered: {project.publishedAt}</span>
              </div>
            )}
          </div>
        </Container>
      </header>

      <main className="py-12">
        <Container size="default">
          <div className={styles.contentGrid}>
            <div className={styles.mainColumn}>
              {/* Context / Overview */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <Briefcase size={20} className="text-[var(--color-gold)]" />
                  <span>Context & Background</span>
                </h2>
                <p className={styles.sectionText}>
                  {project.context || project.summary}
                </p>
              </section>

              {/* Challenge */}
              {project.challenge && (
                <section className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>
                    <Layers size={20} className="text-[var(--color-gold)]" />
                    <span>The Challenge</span>
                  </h2>
                  <p className={styles.sectionText}>{project.challenge}</p>
                </section>
              )}

              {/* Approach / Solution */}
              {(project.approach || project.solution) && (
                <section className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>
                    <CheckCircle size={20} className="text-[var(--color-gold)]" />
                    <span>Our Approach & Implementation</span>
                  </h2>
                  <p className={styles.sectionText}>
                    {project.approach || project.solution}
                  </p>
                </section>
              )}

              {/* Deliverables */}
              {deliverables.length > 0 && (
                <section className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>
                    <FileCheck size={20} className="text-[var(--color-gold)]" />
                    <span>Deliverables Handed Over</span>
                  </h2>
                  <div className={styles.deliverablesList}>
                    {deliverables.map((item, idx) => (
                      <div key={idx} className={styles.deliverableItem}>
                        <CheckCircle size={16} className="text-[#16a34a] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Outcome */}
              {project.outcome && (
                <section className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>
                    <CheckCircle size={20} className="text-[#16a34a]" />
                    <span>Outcome & Results</span>
                  </h2>
                  <p className={styles.sectionText}>{project.outcome}</p>

                  {project.testimonialQuote && (
                    <div className={styles.quoteBlock}>
                      <p className={styles.quoteText}>
                        &ldquo;{project.testimonialQuote}&rdquo;
                      </p>
                      {project.testimonialAuthor && (
                        <p className={styles.quoteAuthor}>
                          — {project.testimonialAuthor}
                        </p>
                      )}
                    </div>
                  )}
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Project Summary</h3>
                <div className={styles.metaList}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Domain</span>
                    <span className={styles.metaVal}>{categoryName}</span>
                  </div>
                  {clientName && (
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Client</span>
                      <span className={styles.metaVal}>{clientName}</span>
                    </div>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Tools & Tech</span>
                      <span className={styles.metaVal}>
                        {project.technologies.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Need Similar Results?</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4">
                  Discuss your business goals with our engineering and marketing leads.
                </p>
                <Button
                  href={`/contact?service=${project.categorySlug}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={14} />}
                  fullWidth
                >
                  Request a Quote
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </div>
  );
}
