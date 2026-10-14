'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Pause, Play } from 'lucide-react';
import { categories } from '@/content/categories';
import styles from './CategoryMarquee.module.css';

export const CategoryMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`${styles.marqueeWrapper} ${isPaused ? styles.paused : ''}`}
      aria-label="Service categories marquee"
      role="region"
    >
      <div className={styles.maskLeft} aria-hidden="true" />
      <div className={styles.maskRight} aria-hidden="true" />

      {/* Manual Pause / Play Control for WCAG 2.2.2 */}
      <button
        type="button"
        onClick={() => setIsPaused((prev) => !prev)}
        className={styles.pauseButton}
        aria-label={isPaused ? 'Resume category marquee' : 'Pause category marquee'}
        title={isPaused ? 'Resume category marquee' : 'Pause category marquee'}
      >
        {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>

      {/* Primary Track (Accessible for Screen Readers) */}
      <div className={styles.marqueeTrack}>
        {categories.map((category) => (
          <Link
            key={`track1-${category.id}`}
            href={`/services/category/${category.slug}`}
            className={styles.categoryItem}
          >
            <span>{category.name}</span>
            <span className={styles.dividerDot} aria-hidden="true" />
          </Link>
        ))}
      </div>

      {/* Duplicate Track (Purely Visual Continuous Loop, Hidden from Screen Readers) */}
      <div
        className={`${styles.marqueeTrack} ${styles.duplicateTrack}`}
        aria-hidden="true"
      >
        {categories.map((category) => (
          <Link
            key={`track2-${category.id}`}
            href={`/services/category/${category.slug}`}
            tabIndex={-1}
            className={styles.categoryItem}
          >
            <span>{category.name}</span>
            <span className={styles.dividerDot} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
};
