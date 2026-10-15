'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

interface MotionContextValue {
  lenis: Lenis | null;
  isReducedMotion: boolean;
}

const MotionContext = createContext<MotionContextValue>({
  lenis: null,
  isReducedMotion: false,
});

export const useMotion = () => useContext(MotionContext);

export interface MotionProviderProps {
  children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  const isReducedMotion = useReducedMotion();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // If the visitor prefers reduced motion, disable Lenis and rely on native browser behavior
    if (isReducedMotion) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
      }
      return;
    }

    if (typeof window === 'undefined') return;

    // Detect touch / coarse pointer: preserve native momentum scrolling without JS overhead
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches;

    if (isTouch) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
      }
      return;
    }

    // Register GSAP ScrollTrigger plugin safely
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling instance for desktop fine pointers
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Synchronize Lenis scroll positions with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Bind GSAP ticker to Lenis requestAnimationFrame loop
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Make in-page anchor links scroll smoothly via Lenis without breaking
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -70 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Clean up all Lenis and GSAP instances on unmount (strict mode safe & no leaks)
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReducedMotion]);

  return (
    <MotionContext.Provider value={{ lenis: lenisInstance, isReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};
