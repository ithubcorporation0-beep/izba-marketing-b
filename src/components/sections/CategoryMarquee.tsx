import React from 'react';
import Link from 'next/link';
import { categories } from '@/content/categories';
import styles from './CategoryMarquee.module.css';

export const CategoryMarquee: React.FC = () => {
  return (
    <div
      className={styles.marqueeWrapper}
      aria-label="Service categories marquee"
      role="region"
    >
      <div className={styles.maskLeft} aria-hidden="true" />
      <div className={styles.maskRight} aria-hidden="true" />

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
