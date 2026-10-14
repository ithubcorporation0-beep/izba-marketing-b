'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

export interface SplitHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  id?: string;
}

export const SplitHeading: React.FC<SplitHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  duration = 0.75,
  stagger = 0.08,
  id,
}) => {
  const isReducedMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Split text into lines if newline exists, otherwise split into phrases
  const lines = text.includes('\n')
    ? text.split('\n')
    : [text];

  useEffect(() => {
    if (isReducedMotion || !headingRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lineElements = headingRef.current?.querySelectorAll('.split-line-inner');
      if (!lineElements || lineElements.length === 0) return;

      gsap.fromTo(
        lineElements,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, [isReducedMotion, delay, duration, stagger]);

  return (
    <Component ref={headingRef} id={id} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          style={{
            display: 'block',
            overflow: 'hidden',
            verticalAlign: 'top',
          }}
        >
          <span
            className="split-line-inner"
            style={{
              display: 'inline-block',
              transform: isReducedMotion ? 'none' : 'translate3d(0, 0, 0)',
              willChange: isReducedMotion ? 'auto' : 'transform',
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
};
