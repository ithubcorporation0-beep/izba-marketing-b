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

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

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

    return () => ctx.revert();
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
      {/* 1. Dimensional Faceted Studio Backdrop (Angled architectural rays & soft spotlights) */}
      <div className={styles.facetedBackdrop} aria-hidden="true">
        <svg
          className={styles.facetedSvg}
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Angled facets radiating from center behind headline */}
          <polygon points="720,220 0,0 280,0" fill="#13151D" fillOpacity="0.75" />
          <polygon points="720,220 280,0 620,0" fill="#181B26" fillOpacity="0.8" />
          <polygon points="720,220 620,0 820,0" fill="#1C202E" fillOpacity="0.85" />
          <polygon points="720,220 820,0 1160,0" fill="#181B26" fillOpacity="0.8" />
          <polygon points="720,220 1160,0 1440,0" fill="#13151D" fillOpacity="0.75" />

          <polygon points="720,220 1440,0 1440,480" fill="#151722" fillOpacity="0.6" />
          <polygon points="720,220 1440,480 1440,900" fill="#0F1118" fillOpacity="0.7" />
          <polygon points="720,220 0,480 0,0" fill="#151722" fillOpacity="0.6" />
          <polygon points="720,220 0,900 0,480" fill="#0F1118" fillOpacity="0.7" />
        </svg>

        {/* Ambient Radial Spotlight */}
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
            <span className={styles.lineMask}>
              <span className={`${styles.lineInner} hero-line-inner`}>
                Where Stunning Design Meets
              </span>
            </span>
            <br />
            <span className={styles.lineMask}>
              <span className={`${styles.lineInner} hero-line-inner`}>
                Flawless Functionality
              </span>
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className={`${styles.heroSubtitle} hero-fade-item`}>
          {heroContent.subtitle}
        </p>

        {/* Centered CTA: Electric Lime Pill Button with Magnetic Hover */}
        <div className={`${styles.ctaGroup} hero-fade-item`}>
          <div ref={magneticButtonRef} className={styles.magneticWrapper}>
            <Link
              href={heroContent.primaryCtaLink}
              className={styles.limePillButton}
            >
              <span>{heroContent.primaryCtaText}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Bottom Showcase Frame (Creative Studio Interior Workspace) */}
      <div className={`${styles.showcaseContainer} hero-fade-item`}>
        <div className={styles.showcaseFrame}>
          <Image
            src="/images/hero-studio-showcase.jpg"
            alt="IZBA Marketing agency creative studio and collaborative digital workspace"
            width={1440}
            height={810}
            priority
            className={styles.showcaseImage}
          />
          <div className={styles.showcaseBadge} aria-hidden="true">
            <span className={styles.pulseDot} />
            <span>Creative Studio Operations &bull; Global Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
