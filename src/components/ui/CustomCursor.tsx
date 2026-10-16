'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '@/lib/motion';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [overFormElement, setOverFormElement] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on client, fine pointer (desktop mouse), and when reduced motion is NOT preferred
    if (isReducedMotion) return;
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if over form inputs (must not interfere with text selection or inputs)
      const isFormInput = !!target.closest('input, textarea, select, [contenteditable="true"]');
      setOverFormElement(isFormInput);

      // Check if over clickable interactive elements
      const isInteractive = !!target.closest('button, a, [role="button"], [role="tab"], summary');
      setHoveringInteractive(isInteractive);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Smooth lerp RAF loop
    const render = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isReducedMotion]);

  if (!mounted || isReducedMotion || overFormElement || !visible) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={[
        styles.cursorRing,
        hoveringInteractive ? styles.cursorHover : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    />
  );
};
