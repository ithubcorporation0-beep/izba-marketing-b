'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/lib/motion';
import styles from './Preloader.module.css';

const SESSION_STORAGE_KEY = 'it_hub_preloader_seen';
const SAFETY_TIMEOUT_MS = 2400; // Hard fallback safety timer

export const Preloader: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const [shouldRender, setShouldRender] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Skip completely if user prefers reduced motion
    if (isReducedMotion) {
      return;
    }

    // 2. Check sessionStorage: only show once per browser session
    try {
      const alreadySeen = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (alreadySeen === 'true') {
        return;
      }
    } catch {
      // In private browsing or restricted environments, gracefully proceed or skip
    }

    // Mark as should render overlay
    setShouldRender(true);

    // Safety fallback: guaranteed removal if anything hangs
    const safetyTimer = setTimeout(() => {
      setShouldRender(false);
    }, SAFETY_TIMEOUT_MS);

    // Run GSAP sequence
    const ctx = gsap.context(() => {
      const counterObj = { value: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
          } catch {
            // Ignore storage write errors
          }
          setShouldRender(false);
        },
      });

      // Subtle entrance of wordmark & progress
      tl.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.96, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );

      // Smooth progress counter from 0 to 100 in ~0.95 seconds
      tl.to(
        counterObj,
        {
          value: 100,
          duration: 0.95,
          ease: 'power2.inOut',
          onUpdate: () => {
            setCounterValue(Math.round(counterObj.value));
          },
        },
        '-=0.1'
      );

      // Progress bar fill width
      if (progressBarRef.current) {
        tl.to(
          progressBarRef.current,
          {
            width: '100%',
            duration: 0.95,
            ease: 'power2.inOut',
          },
          '<'
        );
      }

      // Short hold at 100% then smooth slide-up exit
      tl.to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.45,
          ease: 'power3.inOut',
        },
        '+=0.1'
      );
    }, overlayRef);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [isReducedMotion]);

  if (!shouldRender || isReducedMotion) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={styles.preloaderOverlay}
      role="status"
      aria-live="polite"
      aria-label="Loading IT HUB Corporation"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div ref={contentRef} className={styles.contentWrapper}>
        <div className={styles.wordmark}>
          <div className={styles.logoBadge} aria-hidden="true">
            IT
          </div>
          <div className={styles.brandText}>
            <span className={styles.title}>IT HUB</span>
            <span className={styles.subtitle}>Corporation</span>
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressBarTrack} aria-hidden="true">
            <div ref={progressBarRef} className={styles.progressBarFill} />
          </div>
          <span className={styles.counter} aria-label={`${counterValue}% loaded`}>
            {counterValue}%
          </span>
        </div>
      </div>
    </div>
  );
};
