import React from 'react';
import { processSteps } from '@/content/featured';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './Process.module.css';

export const Process: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="cyan" size="md">
            Delivery Methodology
          </Badge>
          <h2 className={styles.title}>
            Architected for Precision, Engineered for Scale
          </h2>
          <p className={styles.subtitle}>
            Our agile framework balances rapid sprint execution with rigorous
            verification, continuous telemetry, and production SLAs.
          </p>
        </div>

        <div className={styles.timelineGrid}>
          {processSteps.map((step) => (
            <Card key={step.step} className={styles.stepCard}>
              <div className={styles.stepNumberBadge}>{step.step}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
