'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { verifiedStats } from '@/content/stats';
import { Container } from '@/components/ui/Container';
import { useReducedMotion } from '@/lib/motion';
import styles from './Stats.module.css';

interface StatItemProps {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  isReducedMotion: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  numericValue,
  suffix = '',
  prefix = '',
  label,
  description,
  isReducedMotion,
}) => {
  const [displayValue, setDisplayValue] = useState(numericValue);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion || !cardRef.current) {
      setDisplayValue(numericValue);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const counterObj = { val: 0 };
    setDisplayValue(0);

    const tween = gsap.to(counterObj, {
      val: numericValue,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 88%',
        once: true,
      },
      onUpdate: () => {
        setDisplayValue(Math.round(counterObj.val));
      },
    });

    return () => {
      tween.kill();
    };
  }, [numericValue, isReducedMotion]);

  return (
    <div ref={cardRef} className={styles.statCard}>
      <div className={styles.numberRow}>
        {prefix && <span className={styles.statSuffix}>{prefix}</span>}
        <span className={styles.statNumber} aria-label={`${numericValue}${suffix}`}>
          {displayValue}
        </span>
        {suffix && <span className={styles.statSuffix}>{suffix}</span>}
      </div>
      <div className={styles.statLabel}>{label}</div>
      <p className={styles.statDescription}>{description}</p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <section className={styles.statsSection} aria-label="Verified company statistics">
      <Container>
        <div className={styles.statsGrid}>
          {verifiedStats.map((stat) => (
            <StatItem
              key={stat.id}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              description={stat.description}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
