import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { categories } from '@/content/categories';
import { getServicesByCategory } from '@/lib/services';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import { CategoryIcon } from '@/components/illustrations/CategoryIcon';
import styles from './CategoriesSection.module.css';

// Mini decorative vector graphics for large Bento cards
const MiniWebIllustration: React.FC = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={styles.miniIllustration} aria-hidden="true">
    <rect x="5" y="5" width="110" height="70" rx="8" fill="#0B1F3A" fillOpacity="0.04" stroke="#C9A227" strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="16" cy="16" r="2.5" fill="#C9A227" />
    <circle cx="24" cy="16" r="2.5" fill="#94A3B8" fillOpacity="0.4" />
    <circle cx="32" cy="16" r="2.5" fill="#94A3B8" fillOpacity="0.4" />
    <rect x="15" y="28" width="50" height="5" rx="2.5" fill="#0B1F3A" fillOpacity="0.2" />
    <rect x="15" y="38" width="80" height="4" rx="2" fill="#0B1F3A" fillOpacity="0.1" />
    <rect x="15" y="46" width="65" height="4" rx="2" fill="#0B1F3A" fillOpacity="0.1" />
    <path d="M75 58 L85 45 L95 50 L105 38" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MiniAiIllustration: React.FC = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={styles.miniIllustration} aria-hidden="true">
    <circle cx="60" cy="40" r="30" stroke="#C9A227" strokeOpacity="0.25" strokeDasharray="3 3" />
    <circle cx="60" cy="40" r="16" fill="#0B1F3A" fillOpacity="0.05" stroke="#C9A227" strokeWidth="1" />
    <circle cx="60" cy="40" r="4" fill="#C9A227" />
    <circle cx="30" cy="25" r="5" fill="#0B1F3A" fillOpacity="0.1" />
    <circle cx="90" cy="25" r="5" fill="#0B1F3A" fillOpacity="0.1" />
    <circle cx="30" cy="55" r="5" fill="#0B1F3A" fillOpacity="0.1" />
    <circle cx="90" cy="55" r="5" fill="#0B1F3A" fillOpacity="0.1" />
    <line x1="35" y1="28" x2="48" y2="35" stroke="#C9A227" strokeOpacity="0.4" strokeDasharray="2 2" />
    <line x1="85" y1="28" x2="72" y2="35" stroke="#C9A227" strokeOpacity="0.4" strokeDasharray="2 2" />
  </svg>
);

const MiniMarketingIllustration: React.FC = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={styles.miniIllustration} aria-hidden="true">
    <path d="M15 65 L40 50 L65 55 L90 30 L110 20" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="110" cy="20" r="3.5" fill="#C9A227" />
    <rect x="25" y="25" width="40" height="18" rx="4" fill="#0B1F3A" fillOpacity="0.05" stroke="#C9A227" strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="35" cy="34" r="3" fill="#C9A227" />
    <rect x="42" y="32" width="16" height="4" rx="2" fill="#0B1F3A" fillOpacity="0.2" />
  </svg>
);

export const CategoriesSection: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <Container size="default">
        <Reveal className={styles.header}>
          <Badge variant="gold" size="md" className="inline-flex items-center gap-2 pl-2.5 pr-4 py-1.5 shadow-xs">
            <Image
              src="/logo-icon.svg"
              alt="IZBA Marketing Agency logo"
              width={16}
              height={16}
              className="w-4 h-4 rounded-xs shrink-0"
            />
            <span className="font-bold tracking-wider">Core Service Disciplines</span>
          </Badge>

          <h2 id="categories-heading" className={styles.title}>
            Explore Our <span className="highlight-gold">9 Service Categories</span>
          </h2>

          <p className={styles.subtitle}>
            Browse our organized service disciplines covering software, marketing, AI, design, data management, and day-to-day business operations.
          </p>
        </Reveal>

        <RevealStagger className={styles.bentoGrid}>
          {categories.map((category, index) => {
            const serviceCount = category.services
              ? category.services.length
              : getServicesByCategory(category.slug).length;

            const isLarge = index === 0 || index === 2 || index === 5;

            return (
              <Link
                key={category.id}
                href={`/services/${category.slug}`}
                className={[styles.cardLink, isLarge ? styles.bentoLarge : '']
                  .filter(Boolean)
                  .join(' ')}
                aria-label={`View ${category.title} services (${serviceCount} available)`}
              >
                <div className={[styles.bentoCard, isLarge ? styles.bentoCardLarge : '']
                  .filter(Boolean)
                  .join(' ')}>
                  
                  {/* Mini Vector Illustration for Large Cards */}
                  {index === 0 && <MiniWebIllustration />}
                  {index === 2 && <MiniAiIllustration />}
                  {index === 5 && <MiniMarketingIllustration />}

                  <div className={styles.topRow}>
                    <CategoryIcon
                      slug={category.slug}
                      size={22}
                      variant="badge-navy"
                    />
                    <span className={styles.countBadge}>
                      {serviceCount} Services
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDesc}>{category.shortDescription}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.actionText}>
                      Explore Services
                    </span>
                    <ArrowRight size={16} strokeWidth={2.2} className={styles.arrowIcon} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
};
