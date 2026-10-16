import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/motion';
import styles from './PageHeaderBanner.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderBannerProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  illustration?: React.ReactNode;
  align?: 'left' | 'center';
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  illustration,
  align = 'left',
}) => {
  return (
    <section className={styles.bannerSection} aria-label="Page Header">
      {/* Background Ambience */}
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <Container size="default">
        {/* Semantic Breadcrumbs */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <ol className={styles.breadcrumbList} itemScope itemType="https://schema.org/BreadcrumbList">
            <li
              className={styles.breadcrumbItem}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href="/" className={styles.breadcrumbLink} itemProp="item">
                <Home size={14} className={styles.homeIcon} aria-hidden="true" />
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            {breadcrumbs.map((crumb, idx) => {
              const position = idx + 2;
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <li
                  key={crumb.label}
                  className={styles.breadcrumbItem}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <ChevronRight size={14} className={styles.chevronIcon} aria-hidden="true" />
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className={styles.breadcrumbLink} itemProp="item">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span
                      className={styles.breadcrumbCurrent}
                      itemProp="name"
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                  <meta itemProp="position" content={String(position)} />
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Content Layout */}
        <div
          className={[
            styles.bannerLayout,
            illustration ? styles.withIllustration : styles.noIllustration,
            align === 'center' ? styles.centered : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <Reveal className={styles.textColumn}>
            {badge && (
              <Badge variant="gold" size="md" className={styles.badge}>
                {badge}
              </Badge>
            )}
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </Reveal>

          {illustration && (
            <div className={styles.illustrationColumn} aria-hidden="true">
              {illustration}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
