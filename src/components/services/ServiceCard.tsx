import React from 'react';
import Link from 'next/link';
import {
  Cloud,
  Code2,
  ShieldCheck,
  Cpu,
  Globe,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Service } from '@/types';
import { Card } from '@/components/ui/Card';
import styles from './ServiceCard.module.css';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={24} />,
  Code2: <Code2 size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Cpu: <Cpu size={24} />,
  Globe: <Globe size={24} />,
  Layers: <Layers size={24} />,
};

interface ServiceCardProps {
  service: Service;
  featuredLayout?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  featuredLayout = false,
}) => {
  const icon = (service.icon && iconMap[service.icon]) || <Code2 size={24} />;
  const serviceTitle = service.name || service.title;
  const features = service.includes || service.features || [];
  const technologies = service.technologies || [];

  return (
    <Card
      className={[styles.card, featuredLayout ? styles.featuredCard : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>{icon}</div>
        {service.stat && (
          <div className={styles.statBadge}>
            <span className={styles.statValue}>{service.stat.value}</span>
            <span className={styles.statLabel}>{service.stat.label}</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/services/${service.slug}`} className={styles.titleLink}>
            {serviceTitle}
          </Link>
        </h3>
        <p className={styles.description}>{service.shortDescription}</p>

        {features.length > 0 && (
          <ul className={styles.featureList}>
            {features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className={styles.featureItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className={styles.techStack}>
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className={styles.moreTech}>
                +{technologies.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <Link
          href={`/services/${service.slug}`}
          className={styles.learnMoreLink}
        >
          <span>View Service Details</span>
          <ArrowUpRight size={16} className={styles.arrowIcon} />
        </Link>
      </div>
    </Card>
  );
};
