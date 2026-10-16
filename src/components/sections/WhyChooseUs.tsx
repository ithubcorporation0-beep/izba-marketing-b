import React from 'react';
import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';
import { valuePillars } from '@/content/featured';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import styles from './WhyChooseUs.module.css';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <ShieldCheck size={24} strokeWidth={2} />,
  Zap: <Zap size={24} strokeWidth={2} />,
  Lock: <Lock size={24} strokeWidth={2} />,
  Users: <Users size={24} strokeWidth={2} />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="why-choose-heading">
      <Container>
        <Reveal className={styles.header}>
          <Badge variant="gold" size="md">
            Operational Standards
          </Badge>
          <h2 id="why-choose-heading" className={styles.title}>
            Why Choose IZBA
          </h2>
          <p className={styles.subtitle}>
            Verifiable operational commitments, cross-functional engineering and design capabilities,
            and honest, transparent delivery standards.
          </p>
        </Reveal>

        <RevealStagger className={styles.grid}>
          {valuePillars.map((pillar, index) => {
            const icon = iconMap[pillar.icon] || <ShieldCheck size={24} strokeWidth={2} />;

            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  {icon}
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
};
