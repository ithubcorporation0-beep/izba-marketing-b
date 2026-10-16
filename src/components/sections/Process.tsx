'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '@/content/featured';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/motion/Reveal';
import { useReducedMotion } from '@/lib/motion';
import styles from './Process.module.css';

export const Process: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Track active/lit step indexes
  const [activeSteps, setActiveSteps] = useState<number[]>(isReducedMotion ? [0, 1, 2, 3] : []);

  useEffect(() => {
    if (isReducedMotion || !sectionRef.current) {
      setActiveSteps([0, 1, 2, 3]);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animate the connecting timeline fill line as the user scrolls through the section
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 0.5,
              onUpdate: (self) => {
                const progress = self.progress;
                // Calculate which steps to light up:
                // Step 0: >= 0.05
                // Step 1: >= 0.35
                // Step 2: >= 0.65
                // Step 3: >= 0.90
                const lit: number[] = [];
                if (progress >= 0.05) lit.push(0);
                if (progress >= 0.35) lit.push(1);
                if (progress >= 0.65) lit.push(2);
                if (progress >= 0.88) lit.push(3);
                setActiveSteps(lit);
              },
            },
          }
        );
      }

      // 2. Initial scroll reveal of cards with stagger
      const cards = sectionRef.current?.querySelectorAll(`.${styles.stepCard}`);
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="process-heading"
    >
      <Container>
        <Reveal className={styles.sectionHeader}>
          <Badge variant="gold" size="md">
            Our Working Process
          </Badge>
          <h2 id="process-heading" className={styles.title}>
            How We <span className="highlight-gold">Work</span>
          </h2>
          <p className={styles.subtitle}>
            A straightforward 4-step approach ensuring clear communication,
            quality execution, and dependable delivery from start to finish.
          </p>
        </Reveal>

        <div className={styles.timelineWrapper}>
          {/* Desktop Horizontal Connecting Line */}
          <div className={styles.desktopTimelineTrack} aria-hidden="true">
            <div ref={lineRef} className={styles.desktopTimelineFill} />
          </div>

          <div className={styles.timelineGrid}>
            {processSteps.map((step, index) => {
              const isLit = activeSteps.includes(index);
              const formattedNumber = String(step.step).padStart(2, '0');

              return (
                <div
                  key={step.step}
                  className={`${styles.stepCard} ${isLit ? styles.stepCardActive : ''}`}
                >
                  <div className={styles.cardTopRow}>
                    <div
                      className={`${styles.stepNumberBadge} ${
                        isLit ? styles.stepBadgeActive : ''
                      }`}
                    >
                      {step.step}
                    </div>
                    <span className={styles.outlinedStepNumber} aria-hidden="true">
                      {formattedNumber}
                    </span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
