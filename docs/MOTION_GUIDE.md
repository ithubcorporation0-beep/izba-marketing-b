# Motion System Guide

This guide explains the motion foundation in IT HUB Corporation's website, built using **Lenis** (smooth scrolling) and **GSAP ScrollTrigger** (choreographed animations).

---

## 1. Core Principles

1. **Subtle & Premium**: Motion should feel weighted, responsive, and natural—never distracting or slow.
2. **Accessibility First**: If a visitor has `prefers-reduced-motion` enabled in their operating system or browser, smooth scrolling is turned off and animations fall back to instant display.
3. **No Memory Leaks**: All GSAP timelines and ScrollTrigger listeners are tied to component lifecycles and cleaned up on unmount.
4. **Touch-Aware**: Mobile and touch devices receive lighter scroll damping to preserve native gestural responsiveness.

---

## 2. Architecture & MotionProvider

The motion foundation is orchestrated by `<MotionProvider />` located at `src/lib/motion/MotionProvider.tsx` and wrapped around the root layout in `src/app/layout.tsx`.

### What it does:
- **Lenis Setup**: Initializes the smooth scroll engine.
- **ScrollTrigger Sync**: Hooks `lenis.on('scroll', ScrollTrigger.update)` and pipes Lenis's `raf` into GSAP's central ticker so that animations and scroll positions stay perfectly in lockstep.
- **Anchor Jumps**: Automatically intercepts in-page hashes (e.g. `<a href="#services">`) and smoothly scrolls to the target element with a comfortable header offset.
- **Reduced Motion Bypass**: Checks `useReducedMotion()`. If reduced motion is active, Lenis is immediately destroyed and the browser's native scrolling is preserved.
- **Strict Mode Safe Cleanup**: Cleans up event listeners, ticker callbacks, Lenis instances, and kills all ScrollTrigger instances when unmounting.

---

## 3. Motion Tokens

All motion durations and easings are centralized in `src/lib/motion/tokens.ts`:

### Durations
| Token | Seconds | Purpose |
| :--- | :--- | :--- |
| `instant` | `0s` | Reduced motion / instant changes |
| `fast` | `0.2s` | Micro-interactions, button hover states, icons |
| `normal` | `0.4s` | Standard UI transitions, card hovers, modal reveals |
| `moderate` | `0.6s` | Section entrance reveals, badge stagger |
| `slow` | `0.85s` | Hero reveals, complex sequence staging |
| `hero` | `1.1s` | Ambient floating effects, deep parallax accents |

### Easings
| Token | Value | Style |
| :--- | :--- | :--- |
| `standard` | `power2.out` | Clean deceleration for everyday UI |
| `smooth` | `power3.out` | Studio-grade polish for entrance reveals |
| `expressive` | `power4.out` | Dramatic deceleration for hero elements |
| `bounceSoft` | `back.out(1.4)` | Subtle spring feedback for playful micro-interactions |

CSS cubic-bezier equivalents (`cssStandard`, `cssSmooth`, `cssExpressive`) are also provided for standard CSS transitions.

---

## 4. How to Animate Components

When adding GSAP animations to a client component, always use `gsap.context()` inside a `useLayoutEffect` or `useEffect` to ensure automatic scoping and cleanup:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMotion, motionDurations, motionEasings } from '@/lib/motion';

export const MyFeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isReducedMotion } = useMotion();

  useEffect(() => {
    // 1. Check for reduced motion
    if (isReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // 2. Scope animations with gsap.context for clean teardown
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 40,
        opacity: 0,
        duration: motionDurations.moderate,
        ease: motionEasings.smooth,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    // 3. Return cleanup
    return () => ctx.revert();
  }, [isReducedMotion]);

  return (
    <div ref={containerRef}>
      <div className="feature-card">Feature 1</div>
      <div className="feature-card">Feature 2</div>
    </div>
  );
};
```

---

## 5. Controlling Smooth Scroll Manually

If you need programmatic scrolling to a specific section or element:

```tsx
'use client';

import { useMotion } from '@/lib/motion';

export const JumpButton = () => {
  const { lenis } = useMotion();

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo('#contact', { offset: -60, duration: 1.2 });
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <button onClick={handleClick}>Get in touch</button>;
};
```
