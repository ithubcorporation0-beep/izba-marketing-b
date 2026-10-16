'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { heroContent } from '@/content/featured';
import { useReducedMotion } from '@/lib/motion';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  // References for animations
  const heroRef = useRef<HTMLElement>(null);
  const magneticButtonRef = useRef<HTMLDivElement>(null);

  // 1. Coordinated GSAP Entrance Animation (Header, Headline, Copy, CTA, Showcase)
  useEffect(() => {
    if (isReducedMotion) return;

    let tl: gsap.core.Timeline | null = null;
    const heroEl = heroRef.current;

    const ctx = gsap.context(() => {
      tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Headline lines reveal from under masks
      tl.fromTo(
        '.hero-line-inner',
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: 'power3.out',
        }
      );

      // Eyebrow, subtitle, CTA button, and showcase card reveal
      tl.fromTo(
        '.hero-fade-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    }, heroRef);

    // Pause animation when tab is hidden, resume when tab is active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        tl?.pause();
      } else {
        tl?.resume();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause animation when scrolled out of viewport to preserve CPU/GPU
    let observer: IntersectionObserver | null = null;
    if (heroEl && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            tl?.pause();
          } else if (!document.hidden) {
            tl?.resume();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(heroEl);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer?.disconnect();
      ctx.revert();
    };
  }, [isReducedMotion]);

  // 2. Magnetic Effect on Primary CTA (desktop cursor only, disabled for touch & reduced motion)
  useEffect(() => {
    if (isReducedMotion) return;

    const button = magneticButtonRef.current;
    if (!button) return;

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
      {/* 1. Dynamic Animated Mesh / Aurora Backdrop */}
      <div className={styles.auroraBackdrop} aria-hidden="true">
        {/* Soft Aurora Mesh Floating Orbs */}
        <div className={styles.auroraOrbCenter} />
        <div className={styles.auroraOrbGold1} />
        <div className={styles.auroraOrbNavy} />
        <div className={styles.auroraOrbGold2} />

        {/* Delicate Blueprint Tech Grid */}
        <div className={styles.meshGridOverlay} />

        {/* Ambient Top Light Beam */}
        <div className={styles.radialSpotlight} />
      </div>

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

      {/* 2. Main Centered Hero Content */}
      <div className={styles.heroContainer}>
        {/* Eyebrow Badge */}
        <div className={`${styles.eyebrowBadge} hero-fade-item`}>
          <span className={styles.eyebrowIcon} aria-hidden="true">★</span>
          <span>{heroContent.badge}</span>
        </div>

        {/* Masked Headline with Real HTML Text for SEO and Screen Readers */}
        <h1
          className={styles.heroTitle}
          aria-label={heroContent.title}
        >
          <span aria-hidden="true">
            {(heroContent.headlineLines ?? [heroContent.title]).map((line, idx, arr) => (
              <React.Fragment key={idx}>
                <span className={styles.lineMask}>
                  <span className={`${styles.lineInner} hero-line-inner`}>
                    {line}
                  </span>
                </span>
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className={`${styles.heroSubtitle} hero-fade-item`}>
          {heroContent.subtitle}
        </p>

        {/* Centered CTA Group: Primary Lime Pill Button + Secondary Button */}
        <div className={`${styles.ctaGroup} hero-fade-item`}>
          <div ref={magneticButtonRef} className={styles.magneticWrapper}>
            <Link
              href={heroContent.primaryCtaLink}
              className={styles.limePillButton}
            >
              <span>{heroContent.primaryCtaText}</span>
            </Link>
          </div>
          {heroContent.secondaryCtaText && heroContent.secondaryCtaLink && (
            <Link
              href={heroContent.secondaryCtaLink}
              className={styles.secondaryPillButton}
            >
              <span>{heroContent.secondaryCtaText}</span>
            </Link>
          )}
        </div>
      </div>

      {/* 3. Bottom Showcase Frame (Creative Studio Interior Workspace) */}
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseFrame}>
          <Image
            src="/images/hero-studio-showcase.webp"
            alt="IZBA Marketing agency creative studio workspace and collaborative digital environment"
            width={1440}
            height={810}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
            className={styles.showcaseImage}
          />
          <div className={styles.showcaseBadge} aria-hidden="true">
            <span className={styles.pulseDot} />
            <span>Serving clients worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
