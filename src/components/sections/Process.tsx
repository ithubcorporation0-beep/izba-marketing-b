import React from 'react';
import { processSteps } from '@/content/featured';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import styles from './Process.module.css';

export const Process: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <Container>
        <div className={styles.sectionHeader}>
          <Badge variant="blue" size="md">
            Our Working Process
          </Badge>
          <h2 id="process-heading" className={styles.title}>
            How We Work
          </h2>
          <p className={styles.subtitle}>
            A straightforward 4-step approach ensuring clear communication,
            quality execution, and dependable delivery from start to finish.
          </p>
        </div>

        <div className={styles.timelineGrid}>
          {processSteps.map((step) => (
            <Card key={step.step} hoverable className={styles.stepCard}>
              <div className={styles.stepNumberBadge}>{step.step}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
