'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/content/testimonials';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Testimonial } from '@/types';
import styles from './Testimonials.module.css';

interface CarouselInnerProps {
  items: Testimonial[];
}

const TestimonialsCarousel: React.FC<CarouselInnerProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = items.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation when carousel or its contents have focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - endX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Optional Autoplay (5000ms), paused on hover/focus, OFF for reduced motion
  useEffect(() => {
    if (total <= 1 || isPaused) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [total, isPaused, handleNext]);

  const currentItem = items[currentIndex];
  const author = currentItem.clientName || currentItem.author || 'Client';
  const quoteText = currentItem.content || currentItem.quote || '';
  const roleCompany = [currentItem.role, currentItem.company]
    .filter(Boolean)
    .join(', ');
  const rating = currentItem.rating || 5;

  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');

  return (
    <section
      className={styles.section}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <Container size="default">
        <div className={styles.header}>
          <Badge variant="blue" size="md">
            Client Feedback
          </Badge>
          <h2 id="testimonials-heading" className={styles.title}>
            What Our Clients Say
          </h2>
          <p className={styles.subtitle}>
            Direct reviews and verified experiences from organizations
            partnering with IZBA Marketing agency.
          </p>
        </div>

        <div
          ref={containerRef}
          className={styles.carouselContainer}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Testimonial Card */}
          <div
            className={styles.quoteCard}
            aria-live="polite"
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} of ${total}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.ratingStars} aria-label={`${rating} out of 5 stars`}>
                {[...Array(rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={styles.starIcon}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <Quote size={36} className={styles.quoteIcon} aria-hidden="true" />
            </div>

            <blockquote className={styles.largeQuote}>
              &ldquo;{quoteText}&rdquo;
            </blockquote>

            <div className={styles.authorMeta}>
              <div className={styles.authorAvatar}>
                {currentItem.avatarText || author.slice(0, 2).toUpperCase()}
              </div>
              <div className={styles.authorDetails}>
                <div className={styles.authorName}>{author}</div>
                {roleCompany && (
                  <div className={styles.authorRole}>{roleCompany}</div>
                )}
              </div>
            </div>
          </div>

          {/* Controls Bar: Prev, Numbered Pagination "01 / 05", Next */}
          <div className={styles.controlsBar}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.navBtn}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <span className={styles.paginationText} aria-current="true">
              <strong>{currentFormatted}</strong> / {totalFormatted}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className={styles.navBtn}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const TestimonialsSection: React.FC = () => {
  // CRITICAL (Rule 2 & User prompt):
  // The whole section must stay strictly hidden until real approved testimonials are added.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return <TestimonialsCarousel items={testimonials} />;
};
