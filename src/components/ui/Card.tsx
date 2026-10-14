'use client';

import React, { useRef } from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  glow?: 'cyan' | 'purple' | 'emerald';
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  padding = 'md',
  glow,
  className = '',
  onPointerMove,
  onPointerLeave,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Call external prop if supplied
    if (onPointerMove) onPointerMove(e);

    // Desktop fine pointer only
    if (e.pointerType !== 'mouse') return;

    const card = cardRef.current;
    if (!card) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafIdRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (onPointerLeave) onPointerLeave(e);

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const card = cardRef.current;
    if (!card) return;

    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const glowClass = glow
    ? glow === 'cyan'
      ? styles.glowCyan
      : glow === 'purple'
        ? styles.glowPurple
        : styles.glowEmerald
    : '';

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={[
        styles.card,
        hoverable ? styles.hoverable : '',
        paddingStyles[padding],
        glowClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};
