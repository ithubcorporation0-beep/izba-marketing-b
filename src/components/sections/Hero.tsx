'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import gsap from 'gsap';
import { heroContent, trustPoints } from '@/content/featured';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useReducedMotion } from '@/lib/motion';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  // References for animations
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const magneticButtonRef = useRef<HTMLDivElement>(null);

  // Live local-time clock state (rendered only on client to avoid hydration mismatch)
  const [localTime, setLocalTime] = useState<string | null>(null);

  // Scroll cue visibility
  const [scrollCueOpacity, setScrollCueOpacity] = useState(1);

  // 1. Live Local-Time Clock (updates each minute, runs on client only)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeZone = siteConfig.timezone || 'UTC';
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        setLocalTime(formatter.format(new Date()));
      } catch {
        // Fallback if timezone string is unsupported
        setLocalTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // 2. "Scroll for more" fade on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 100);
      setScrollCueOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Lightweight Drifting Gradient Orbs Background (Canvas)
  // Target: under 5% CPU idle. Pauses when tab is hidden or hero is out of view.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = !document.hidden;

    // Canvas size handler
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Orb definitions with slow drift vectors
    const orbs = [
      {
        x: canvas.width * 0.25,
        y: canvas.height * 0.35,
        radius: Math.min(canvas.width, canvas.height) * 0.45,
        vx: 0.22,
        vy: 0.18,
        colorStart: 'rgba(49, 87, 213, 0.35)', // #3157D5 blue
        colorEnd: 'rgba(49, 87, 213, 0)',
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.45,
        radius: Math.min(canvas.width, canvas.height) * 0.5,
        vx: -0.18,
        vy: 0.2,
        colorStart: 'rgba(118, 87, 232, 0.28)', // #7657E8 violet
        colorEnd: 'rgba(118, 87, 232, 0)',
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.7,
        radius: Math.min(canvas.width, canvas.height) * 0.4,
        vx: 0.15,
        vy: -0.15,
        colorStart: 'rgba(6, 182, 212, 0.18)', // Cyan highlight
        colorEnd: 'rgba(6, 182, 212, 0)',
      },
    ];

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each drifting orb
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce gently inside canvas bounds
        if (orb.x - orb.radius < -100 || orb.x + orb.radius > canvas.width + 100) orb.vx *= -1;
        if (orb.y - orb.radius < -100 || orb.y + orb.radius > canvas.height + 100) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.colorStart);
        gradient.addColorStop(1, orb.colorEnd);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (isVisible && isTabActive) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Tab visibility change detection (pause when tab hidden)
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause canvas when hero is out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible && isTabActive) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // If reduced motion is requested, render one static frame and avoid animation loops
    if (isReducedMotion) {
      // Draw static frame
      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.colorStart);
        gradient.addColorStop(1, orb.colorEnd);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    // Start render
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [isReducedMotion]);

  // 4. GSAP Headline Mask Reveal + Supporting Elements Fade Up
  useEffect(() => {
    if (isReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Staggered slide up of masked headline lines
      tl.fromTo(
        '.hero-line-inner',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.12,
        }
      );

      // Fade up of meta badges, subtitle, CTA group, and trust signals
      tl.fromTo(
        '.hero-fade-item',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.1,
        },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  // 5. Magnetic Effect on Primary CTA (desktop cursor only, off for touch & reduced motion)
  useEffect(() => {
    if (isReducedMotion) return;

    const button = magneticButtonRef.current;
    if (!button) return;

    // Check pointer type: only enable for mouse/trackpad pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.28;

      gsap.to(button, {
        x,
        y,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(button, { x: 0, y: 0 });
    };
  }, [isReducedMotion]);

  return (
    <section ref={heroRef} className={styles.heroSection} aria-label="Introduction">
      {/* 1. Animated Canvas Background with Blue/Violet Orbs */}
      <canvas ref={canvasRef} className={styles.canvasBackground} aria-hidden="true" />

      {/* 2. Ambient Grid / Dot Overlay Pattern */}
      <div className={styles.gridPatternOverlay} aria-hidden="true" />

      {/* =========================================================================
          OPTIONAL VIDEO BACKGROUND SLOT:
          To enable a client-supplied background video:
          1. Place your compressed, muted video in /public/videos/ (e.g., hero-ambient.mp4, max 3 MB).
          2. Place an optimized poster image in /public/images/ (e.g., hero-poster.webp).
          3. Uncomment the <video> block below and ensure playsInline, autoPlay, muted, and loop are set.
          ========================================================================= */}
      {/*
      <video
        className={styles.heroBackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/videos/hero-ambient.mp4" type="video/mp4" />
        <source src="/videos/hero-ambient.webm" type="video/webm" />
      </video>
      */}

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Top Meta Row: "Now accepting new projects" Badge & Live Local Clock */}
          <div className={`${styles.metaRow} hero-fade-item`}>
            {/* Project Availability Badge (Editable in src/config/site.ts; TODO: needs client confirmation) */}
            <div className={styles.availabilityBadge}>
              <span className={styles.pulsingDotWrapper} aria-hidden="true">
                <span className={styles.pulsingDotPing} />
                <span className={styles.pulsingDotCore} />
              </span>
              <span>{siteConfig.availabilityBadge ?? 'Now accepting new projects'}</span>
            </div>

            {/* Live Local Time Clock for company timezone (renders only after client mount to prevent hydration mismatch) */}
            {localTime && (
              <div
                className={styles.clockBadge}
                aria-label={`Current time in ${siteConfig.timezoneLabel || 'UTC'}: ${localTime}`}
                title={`Company Timezone: ${siteConfig.timezone || 'UTC'}`}
              >
                <Clock size={13} className={styles.clockIcon} aria-hidden="true" />
                <span>
                  {localTime} {siteConfig.timezoneLabel ?? 'UTC'}
                </span>
              </div>
            )}
          </div>

          {/* Masked Headline with Real HTML Text for SEO and Screen Readers */}
          <h1
            className={styles.heroTitle}
            aria-label="Technology, Marketing &amp; AI Solutions for Your Business"
          >
            <span aria-hidden="true">
              <span className={styles.lineMask}>
                <span className={`${styles.lineInner} hero-line-inner`}>
                  Technology, Marketing
                </span>
              </span>{' '}
              <span className={styles.lineMask}>
                <span className={`${styles.lineInner} hero-line-inner`}>
                  &amp; <span className={styles.gradientText}>AI Solutions</span>
                </span>
              </span>{' '}
              <span className={styles.lineMask}>
                <span className={`${styles.lineInner} hero-line-inner`}>
                  for Your Business
                </span>
              </span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className={`${styles.heroSubtitle} hero-fade-item`}>
            {heroContent.subtitle}
          </p>

          {/* CTA Group with Magnetic Effect on Desktop */}
          <div className={`${styles.ctaGroup} hero-fade-item`}>
            <div ref={magneticButtonRef} className={styles.magneticWrapper}>
              <Button
                href={heroContent.primaryCtaLink}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                {heroContent.primaryCtaText}
              </Button>
            </div>
            <Button
              href={heroContent.secondaryCtaLink}
              variant="outline"
              size="lg"
            >
              {heroContent.secondaryCtaText}
            </Button>
          </div>

          {/* Verifiable Trust Points */}
          <div
            className={`${styles.trustSignals} hero-fade-item`}
            aria-label="Company standards"
          >
            {trustPoints.map((point, index) => (
              <div key={index} className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span className={styles.trustText}>{point.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract CSS/SVG Geometric Visual (No stock photos, no fake metrics) */}
        <div className={`${styles.visualWrapper} hero-fade-item`} aria-hidden="true">
          <div className={styles.abstractGraphic}>
            <div className={styles.graphicGlow} />
            <svg
              className={styles.svgGraphic}
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary-blue, #2563eb)" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="var(--color-accent-violet, #7c3aed)" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent-cyan, #06b6d4)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--color-primary-blue, #2563eb)" stopOpacity="0.3" />
                </linearGradient>
                <pattern id="heroGridPattern" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
                </pattern>
              </defs>

              <rect width="500" height="500" fill="url(#heroGridPattern)" className={styles.gridStroke} />

              <circle cx="250" cy="250" r="195" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.2" />
              <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
              <circle cx="250" cy="250" r="85" stroke="url(#heroGrad2)" strokeWidth="2" strokeOpacity="0.6" />

              <polygon
                points="250,170 320,210 320,290 250,330 180,290 180,210"
                stroke="url(#heroGrad1)"
                strokeWidth="2.5"
                fill="var(--color-surface-card)"
                fillOpacity="0.6"
              />
              <polygon
                points="250,195 295,222 295,278 250,305 205,278 205,222"
                stroke="url(#heroGrad2)"
                strokeWidth="1.5"
                fill="none"
              />

              <rect x="360" y="110" width="48" height="48" rx="10" transform="rotate(15 360 110)" stroke="url(#heroGrad1)" strokeWidth="2" fill="var(--color-surface-card)" fillOpacity="0.8" />
              <rect x="90" y="320" width="56" height="56" rx="12" transform="rotate(-12 90 320)" stroke="url(#heroGrad2)" strokeWidth="2" fill="var(--color-surface-card)" fillOpacity="0.8" />
              <circle cx="390" cy="340" r="28" stroke="url(#heroGrad1)" strokeWidth="2" fill="var(--color-surface-card)" fillOpacity="0.8" />
              <polygon points="120,130 145,175 95,175" stroke="url(#heroGrad2)" strokeWidth="2" fill="none" />

              <line x1="250" y1="170" x2="360" y2="135" stroke="url(#heroGrad1)" strokeWidth="1.5" strokeDasharray="3 5" strokeOpacity="0.5" />
              <line x1="180" y1="290" x2="146" y2="340" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="3 5" strokeOpacity="0.5" />
              <line x1="320" y1="290" x2="390" y2="340" stroke="url(#heroGrad1)" strokeWidth="1.5" strokeDasharray="3 5" strokeOpacity="0.5" />
              <line x1="180" y1="210" x2="120" y2="160" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="3 5" strokeOpacity="0.5" />

              <circle cx="250" cy="250" r="14" fill="url(#heroGrad1)" />
              <circle cx="250" cy="250" r="6" fill="#ffffff" />
            </svg>

            <div className={styles.glassBadge1}>
              <span className={styles.pulseDot} />
              <span>Technology &bull; Marketing &bull; AI</span>
            </div>
            <div className={styles.glassBadge2}>
              <span>Structured &bull; Scalable &bull; Reliable</span>
            </div>
          </div>
        </div>
      </Container>

      {/* "Scroll for more" Cue */}
      <div
        className={styles.scrollCue}
        style={{ opacity: scrollCueOpacity }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className={styles.scrollCueTrack}>
          <div className={styles.scrollCueThumb} />
        </div>
      </div>
    </section>
  );
};
