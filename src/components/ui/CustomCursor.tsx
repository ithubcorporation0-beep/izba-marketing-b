'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // 1. Check for desktop fine pointer and no reduced motion
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    setIsSupported(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onPointerMove = (e: PointerEvent) => {
      // Ignore touch pointers
      if (e.pointerType !== 'mouse') return;

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Inside form fields or typing: hide custom cursor, keep native cursor intact
      const isFormField = Boolean(
        target.closest('input, textarea, select, [contenteditable="true"], label')
      );

      if (isFormField) {
        setIsVisible(false);
        return;
      }

      // Check if over service cards or viewable items
      const isServiceCard = Boolean(
        target.closest('[data-cursor="view"], a[href^="/services/"]')
      );

      if (isServiceCard) {
        setCursorState('view');
        return;
      }

      // Check if over interactive elements (links, buttons, clickable cards)
      const isInteractive = Boolean(
        target.closest('a, button, [role="button"], [role="tab"], .card, [data-cursor="hover"]')
      );

      if (isInteractive) {
        setCursorState('hover');
        return;
      }

      setCursorState('default');
    };

    const onPointerLeave = () => {
      setIsVisible(false);
    };

    const onPointerEnter = () => {
      setIsVisible(true);
    };

    // When typing in inputs, hide custom cursor
    const onKeyDown = () => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.hasAttribute('contenteditable'))
      ) {
        setIsVisible(false);
      }
    };

    // Animation loop using lerp for smooth trailing ring
    const render = () => {
      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Ring lags gently with smooth lerp
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);
    document.addEventListener('mouseenter', onPointerEnter);
    window.addEventListener('keydown', onKeyDown, { passive: true });

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('mouseenter', onPointerEnter);
      window.removeEventListener('keydown', onKeyDown);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isSupported) {
    return null;
  }

  const ringClass = [
    styles.ring,
    cursorState === 'hover' ? styles.ringHover : '',
    cursorState === 'view' ? styles.ringView : '',
    !isVisible ? styles.hidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  const dotClass = [styles.dot, !isVisible ? styles.hidden : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.cursorWrapper} aria-hidden="true">
      <div ref={dotRef} className={dotClass} />
      <div ref={ringRef} className={ringClass}>
        {cursorState === 'view' && <span className={styles.viewText}>View</span>}
      </div>
    </div>
  );
};
