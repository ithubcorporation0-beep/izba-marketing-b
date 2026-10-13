import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { featuredServices } from '@/content/featured';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import styles from './FeaturedServicesSection.module.css';

export const FeaturedServicesSection: React.FC = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-services-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <Badge variant="cyan" size="md">
            Highlighted Offerings
          </Badge>
          <h2 id="featured-services-heading" className={styles.title}>
            Featured Services
          </h2>
          <p className={styles.subtitle}>
            Key capabilities prioritized by IT HUB Corporation to deliver
            high-impact technical, marketing, and creative outcomes for your
            business.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredServices.map((service, index) => {
            const targetUrl =
              service.targetType === 'category'
                ? `/services/category/${service.slug}`
                : `/services/${service.slug}`;

            return (
              <Link
                key={index}
                href={targetUrl}
                className={styles.cardLink}
                aria-label={`Learn more about ${service.displayName}`}
              >
                <Card hoverable className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.indexNum}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Badge variant="neutral" size="sm">
                      {service.targetType === 'category'
                        ? 'Category Suite'
                        : 'Service'}
                    </Badge>
                  </div>

                  <h3 className={styles.cardTitle}>{service.displayName}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.actionText}>View Details</span>
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
