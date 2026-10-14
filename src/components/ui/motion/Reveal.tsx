'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  as?: React.ElementType;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = '',
  as: Component = 'div',
}) => {
  const isReducedMotion = useReducedMotion();
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // If reduced motion is requested or ref is missing, keep element visible and skip animation
    if (isReducedMotion || !elementRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [isReducedMotion, delay, duration, yOffset]);

  return (
    <Component
      ref={elementRef as unknown as React.Ref<never>}
      className={className}
      style={{ willChange: isReducedMotion ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </Component>
  );
};
