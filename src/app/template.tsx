'use client';

import React, { useEffect, useRef } from 'react';
import styles from './template.module.css';

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Accessibility: Move focus to the primary heading or main landmark on route change.
    // preventScroll: true prevents interfering with scroll position restoration on back navigation.
    const heading = document.querySelector('h1');
    const main = document.querySelector('main');
    const target = heading || main;

    if (target) {
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      (target as HTMLElement).focus({ preventScroll: true });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.pageTransitionWrapper}>
      {children}
    </div>
  );
}
