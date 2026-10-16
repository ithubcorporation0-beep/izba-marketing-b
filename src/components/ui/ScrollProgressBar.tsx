'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';
import styles from './ScrollProgressBar.module.css';

export const ScrollProgressBar: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div
      className={styles.track}
      aria-hidden="true"
    >
      <div
        className={styles.fill}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
