import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Service } from '@/types';
import { Card } from '@/components/ui/Card';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className,
}) => {
  const serviceTitle = service.name || service.title;
  const features = service.includes || service.features || [];

  return (
    <Card
      hoverable
      data-cursor="view"
      className={[styles.card, className].filter(Boolean).join(' ')}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/services/${service.categorySlug}#${service.slug}`} className={styles.titleLink}>
            {serviceTitle}
          </Link>
        </h3>
        <p className={styles.description}>{service.shortDescription}</p>

        {features.length > 0 && (
          <ul className={styles.featureList} aria-label="Key aspects included">
            {features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className={styles.featureItem}>
                <CheckCircle2
                  size={15}
                  className={styles.checkIcon}
                  aria-hidden="true"
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.footer}>
        <Link
          href={`/services/${service.categorySlug}#${service.slug}`}
          className={styles.learnMoreLink}
          aria-label={`View full details for ${serviceTitle}`}
        >
          <span>View Service Details</span>
          <ArrowRight
            size={15}
            className={styles.arrowIcon}
            aria-hidden="true"
          />
        </Link>
      </div>
    </Card>
  );
};
