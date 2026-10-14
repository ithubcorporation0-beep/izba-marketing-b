/**
 * Motion System Design Tokens
 * Reusable durations and easing curves for GSAP and CSS animations.
 */

export const motionDurations = {
  instant: 0,
  fast: 0.2,
  normal: 0.4,
  moderate: 0.6,
  slow: 0.85,
  hero: 1.1,
} as const;

export const motionEasings = {
  // GSAP String Easings
  standard: 'power2.out',
  smooth: 'power3.out',
  expressive: 'power4.out',
  bounceSoft: 'back.out(1.4)',
  inOut: 'power2.inOut',
  linear: 'none',

  // CSS Cubic Bezier Equivalence
  cssStandard: 'cubic-bezier(0.2, 0, 0, 1)',
  cssSmooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  cssExpressive: 'cubic-bezier(0.19, 1, 0.22, 1)',
} as const;

export type MotionDuration = keyof typeof motionDurations;
export type MotionEasing = keyof typeof motionEasings;
