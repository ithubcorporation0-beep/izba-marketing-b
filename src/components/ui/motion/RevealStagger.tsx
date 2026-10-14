'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

export interface RevealStaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  duration?: number;
  yOffset?: number;
  childSelector?: string;
  className?: string;
  as?: React.ElementType;
}

export const RevealStagger: React.FC<RevealStaggerProps> = ({
  children,
  stagger = 0.09,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  childSelector = ':scope > *',
  className = '',
  as: Component = 'div',
}) => {
  const isReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = containerRef.current?.querySelectorAll(childSelector);
      if (!targets || targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion, stagger, delay, duration, yOffset, childSelector]);

  return (
    <Component
      ref={containerRef as unknown as React.Ref<never>}
      className={className}
    >
      {children}
    </Component>
  );
};
