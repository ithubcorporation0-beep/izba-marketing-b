# Motion System Guide

This guide explains the motion foundation in IZBA Marketing agency's website, built using **Lenis** (smooth scrolling) and **GSAP ScrollTrigger** (choreographed animations).

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

---

## 6. Where Each Animation Lives

The motion system is distributed cleanly across focused client modules:

| Component / Effect | File Location | Technology | Purpose & Behavior |
| :--- | :--- | :--- | :--- |
| **Motion Orchestration & Smooth Scroll** | `src/lib/motion/MotionProvider.tsx` | Lenis + GSAP ScrollTrigger | Global smooth scroll, ticker sync, reduced motion bypass |
| **Motion Tokens** | `src/lib/motion/tokens.ts` | TypeScript Constants | Centralized duration & easing definitions |
| **Scroll Reveal Primitives** | `src/components/ui/motion/Reveal.tsx`<br>`src/components/ui/motion/RevealStagger.tsx` | GSAP ScrollTrigger | Fade and rise reveals with staggered children on viewport entrance |
| **Split Heading Reveal** | `src/components/ui/motion/SplitHeading.tsx` | GSAP ScrollTrigger + ARIA | Line-by-line typographic reveals with `aria-label` screen reader preservation |
| **Parallax Layer** | `src/components/ui/motion/ParallaxLayer.tsx` | GSAP ScrollTrigger scrub | Subtle decorative depth layer (disabled in reduced-motion) |
| **Page Transitions** | `src/app/template.tsx` | CSS Animation | Smooth fade + subtle rise on client-side route navigation |
| **Branded Preloader** | `src/components/sections/Preloader.tsx` | GSAP Timeline | Intro counter (0-100) and curtain reveal (once per session) |
| **Smart Glass Header** | `src/components/layout/Header.tsx` | React State + CSS Modules | Scroll direction detection (hide down, show up) & glass backdrop |
| **Custom Cursor** | `src/components/ui/CustomCursor.tsx` | Pointer Events + RAF | Magnetic follower for fine pointers (suppressed on touch/inputs) |
| **Ambient Hero Gradient Canvas** | `src/components/sections/Hero.tsx` | HTML5 Canvas 2D | Dynamic drifting gradient mesh with automatic off-screen pause |
| **Live Stats Counter** | `src/components/sections/Stats.tsx` | GSAP ScrollTrigger | Smooth numerical count-up on scroll entrance |
| **Category Marquee** | `src/components/sections/CategoryMarquee.tsx` | CSS Keyframes + Toggle | Endless client-side ticker with manual Pause/Play toggle (WCAG 2.2.2) |
| **Interactive Testimonials Carousel** | `src/components/sections/Testimonials.tsx` | Touch/Keyboard State + CSS | Drag/swipe carousel with auto-rotation and pause controls |
| **Service Directory Filter Transition** | `src/components/services/ServiceDirectory.tsx` | React State + CSS Modules | Smooth category filtering with screen reader live announcements |

---

## 7. How to Change Speed and Easing

### A. Global Adjustments
All animation timings originate in `src/lib/motion/tokens.ts`. To change site-wide animation feel:
1. Open `src/lib/motion/tokens.ts`.
2. Edit the corresponding duration or easing token:
   ```ts
   export const motionDurations = {
     instant: 0,
     fast: 0.2,       // Button hovers, micro-interactions
     normal: 0.4,     // Modals, card elevations
     moderate: 0.6,   // Section reveals, cards
     slow: 0.85,      // Complex timelines
     hero: 1.1,       // Floating accents
   };

   export const motionEasings = {
     standard: 'power2.out',
     smooth: 'power3.out',      // Default entrance curve
     expressive: 'power4.out',  // Dramatic entrance curve
     bounceSoft: 'back.out(1.4)',
   };
   ```

### B. Per-Component Speed Overrides
Components accepting speed props or duration variables can be adjusted directly in their JSX:
- `<Reveal duration={0.8} delay={0.2} y={30} />`
- `<RevealStagger stagger={0.08} duration={0.5}>`
- In `src/app/template.tsx`: Adjust `animation: pageEnter 350ms ...` to speed up or slow down page transitions.
- In `src/components/sections/CategoryMarquee.module.css`: Adjust `animation: marqueeTrack 45s linear infinite` to alter ticker speed.

---

## 8. How to Turn Each Effect Off

Every animation in the system can be selectively disabled without breaking layout or content availability:

| Effect | How to Disable | Fallback Behavior |
| :--- | :--- | :--- |
| **Preloader** | Set `showPreloader = false` or comment out `<Preloader />` in `src/app/layout.tsx`. | Page displays immediately with no overlay. |
| **Smooth Scroll (Lenis)** | In `src/lib/motion/MotionProvider.tsx`, remove Lenis initialization or set `isReducedMotion = true`. | Native browser scrolling is used. |
| **Custom Cursor** | Remove `<CustomCursor />` from `src/app/layout.tsx`. | Standard operating system cursor is used everywhere. |
| **Hero Canvas Mesh** | In `src/components/sections/Hero.tsx`, remove `<canvas>` and keep static CSS gradient fallback. | Clean dark navy gradient is rendered statically. |
| **Category Marquee** | Users can click the visible **Pause** toggle button; developers can remove `className={styles.marqueeTrack}` in `CategoryMarquee.tsx`. | Categories display in a static wrapping flex row. |
| **Split Heading Animation** | Pass `disabled={true}` to `<SplitHeading disabled text="..." />`. | Heading text renders immediately as normal static text. |
| **Scroll Entrance (Reveal)** | Pass `disabled={true}` to `<Reveal disabled>` or `<RevealStagger disabled>`. | Elements are rendered at `opacity: 1; transform: none;`. |
| **Page Transitions** | Remove `className={styles.pageTransition}` wrapper in `src/app/template.tsx`. | Instantaneous page routing without CSS fade/slide. |

---

## 9. Accessibility & Reduced Motion Standards

The motion system strictly implements **WCAG 2.2 Level AA** compliance:

1. **System Reduced Motion (`prefers-reduced-motion: reduce`)**:
   - `useReducedMotion()` immediately halts Lenis smooth scrolling.
   - GSAP scroll triggers instantly set target elements to visible/untransformed state.
   - Hero canvas skips continuous `requestAnimationFrame` loops and draws a single static gradient frame.
   - CSS marquee pauses translation and displays static items.
   - Custom cursor is hidden; default OS pointer is restored.
   - Page transitions complete in `0.001ms`.

2. **Pause, Stop, Hide (WCAG 2.2.2)**:
   - Any auto-advancing animation lasting longer than 5 seconds (such as the Category Marquee ticker) includes a visible, keyboard-operable **Pause / Resume** button.
   - The marquee also automatically halts on hover and on `:focus-within` when interactive items receive keyboard focus.

3. **Screen Reader Heading Sanity**:
   - When headings are split into multiple animation lines via `<SplitHeading />`, the container `<h2 aria-label="...">` preserves the full, natural sentence structure for screen readers, while inner animated line spans have `aria-hidden="true"` to prevent disjointed word announcements.

4. **Off-Screen Resource Pausing**:
   - The hero canvas uses an `IntersectionObserver` to halt rendering loops whenever scrolled out of view, preserving device battery and GPU resources.

---

## 10. Next-Phase Client Motion Upgrades

When official branding assets and case studies are delivered, follow these steps to activate higher-fidelity motion features:

### A. Real Hero Background Video
1. Supply a 5–10 second muted loop in MP4 and WebM format (under 3 MB).
2. Place files in `public/videos/hero-ambient.mp4` and `public/videos/hero-ambient.webm`, with poster at `public/images/hero-poster.webp`.
3. Tell the developer or AI agent: *"Use the optional video slot in the hero."*
4. In `src/components/sections/Hero.tsx`, uncomment the `<video>` element. Video playback is automatically disabled when reduced motion or data saver is active.

### B. Real Logo Stroke Animation in Preloader
1. Supply the official corporate vector SVG logo.
2. In `src/components/sections/Preloader.tsx`, replace the fallback `<div className={styles.logoBadge}>IT</div>` badge with your SVG markup.
3. Attach the class `.preloader-logo-stroke` to the SVG `<path>` elements.
4. The preloader's GSAP context automatically queries `.preloader-logo-stroke`, measures each path's length via `getTotalLength()`, and draws the stroke in lockstep with the 0–100 progress counter.

### C. Case-Study Image Reveals on /portfolio
1. When clients approve case studies, add them to `src/content/projects.ts` with `isPublished: true` and `coverImageUrl: '/images/portfolio/project-slug.webp'`.
2. `<ProjectCard />` automatically displays the cover image in a 16:9 ratio with smooth scale transitions.
3. `<PortfolioPage />` automatically wraps the grid in `<RevealStagger>` for choreographed viewport entrance reveals.
