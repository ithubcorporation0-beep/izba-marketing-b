'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

export interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.2 for slower drift, -0.2 for reverse
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.18,
  className = '',
}) => {
  const isReducedMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion || !layerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const distance = 80 * speed;

      gsap.fromTo(
        layerRef.current,
        { y: -distance },
        {
          y: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: layerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, layerRef);

    return () => ctx.revert();
  }, [isReducedMotion, speed]);

  return (
    <div
      ref={layerRef}
      className={className}
      aria-hidden="true"
      style={{ willChange: isReducedMotion ? 'auto' : 'transform' }}
    >
      {children}
    </div>
  );
};
