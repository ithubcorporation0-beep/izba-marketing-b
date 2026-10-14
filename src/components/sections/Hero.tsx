import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { heroContent, trustPoints } from '@/content/featured';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection} aria-label="Introduction">
      <div className={styles.heroGlow} aria-hidden="true" />
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <Badge variant="cyan" size="md" dot>
              {heroContent.badge}
            </Badge>
          </div>

          <h1 className={styles.heroTitle}>
            Technology, Marketing &amp;{' '}
            <span className={styles.gradientText}>AI Solutions</span> for Your
            Business
          </h1>

          <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>

          <div className={styles.ctaGroup}>
            <Button
              href={heroContent.primaryCtaLink}
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              {heroContent.primaryCtaText}
            </Button>
            <Button
              href={heroContent.secondaryCtaLink}
              variant="outline"
              size="lg"
            >
              {heroContent.secondaryCtaText}
            </Button>
          </div>

          {/* Verifiable Trust Points */}
          {/* // TODO: Add verified metrics (years in operation, verified client numbers, client logos) */}
          {/* // once officially confirmed and authorized by the business owner. No invented numbers or fake metrics. */}
          <div className={styles.trustSignals} aria-label="Company standards">
            {trustPoints.map((point, index) => (
              <div key={index} className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span className={styles.trustText}>{point.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract CSS/SVG Geometric Visual (No fake dashboards, no fake statistics, no stock photos) */}
        <div className={styles.visualWrapper} aria-hidden="true">
          <div className={styles.abstractGraphic}>
            <div className={styles.graphicGlow} />
            <svg
              className={styles.svgGraphic}
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="heroGrad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-primary-blue, #2563eb)"
                    stopOpacity="0.85"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-accent-violet, #7c3aed)"
                    stopOpacity="0.85"
                  />
                </linearGradient>
                <linearGradient
                  id="heroGrad2"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-accent-cyan, #06b6d4)"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-primary-blue, #2563eb)"
                    stopOpacity="0.3"
                  />
                </linearGradient>
                <pattern
                  id="heroGridPattern"
                  width="36"
                  height="36"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 36 0 L 0 0 0 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeOpacity="0.12"
                  />
                </pattern>
              </defs>

              {/* Background Grid */}
              <rect
                width="500"
                height="500"
                fill="url(#heroGridPattern)"
                className={styles.gridStroke}
              />

              {/* Concentric Circles & Orbital Lines */}
              <circle
                cx="250"
                cy="250"
                r="195"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 8"
                strokeOpacity="0.2"
                className={styles.orbit1}
              />
              <circle
                cx="250"
                cy="250"
                r="140"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.25"
                className={styles.orbit2}
              />
              <circle
                cx="250"
                cy="250"
                r="85"
                stroke="url(#heroGrad2)"
                strokeWidth="2"
                strokeOpacity="0.6"
              />

              {/* Isometric / Abstract Hexagons & Nodes */}
              <polygon
                points="250,170 320,210 320,290 250,330 180,290 180,210"
                stroke="url(#heroGrad1)"
                strokeWidth="2.5"
                fill="var(--color-surface-card)"
                fillOpacity="0.6"
                className={styles.centerHex}
              />
              <polygon
                points="250,195 295,222 295,278 250,305 205,278 205,222"
                stroke="url(#heroGrad2)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Floating Geometric Nodes */}
              <rect
                x="360"
                y="110"
                width="48"
                height="48"
                rx="10"
                transform="rotate(15 360 110)"
                stroke="url(#heroGrad1)"
                strokeWidth="2"
                fill="var(--color-surface-card)"
                fillOpacity="0.8"
                className={styles.floatNode1}
              />
              <rect
                x="90"
                y="320"
                width="56"
                height="56"
                rx="12"
                transform="rotate(-12 90 320)"
                stroke="url(#heroGrad2)"
                strokeWidth="2"
                fill="var(--color-surface-card)"
                fillOpacity="0.8"
                className={styles.floatNode2}
              />
              <circle
                cx="390"
                cy="340"
                r="28"
                stroke="url(#heroGrad1)"
                strokeWidth="2"
                fill="var(--color-surface-card)"
                fillOpacity="0.8"
                className={styles.floatNode3}
              />
              <polygon
                points="120,130 145,175 95,175"
                stroke="url(#heroGrad2)"
                strokeWidth="2"
                fill="none"
                className={styles.floatNode4}
              />

              {/* Connecting Data Rays */}
              <line
                x1="250"
                y1="170"
                x2="360"
                y2="135"
                stroke="url(#heroGrad1)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                strokeOpacity="0.5"
              />
              <line
                x1="180"
                y1="290"
                x2="146"
                y2="340"
                stroke="url(#heroGrad2)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                strokeOpacity="0.5"
              />
              <line
                x1="320"
                y1="290"
                x2="390"
                y2="340"
                stroke="url(#heroGrad1)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                strokeOpacity="0.5"
              />
              <line
                x1="180"
                y1="210"
                x2="120"
                y2="160"
                stroke="url(#heroGrad2)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                strokeOpacity="0.5"
              />

              {/* Core Accent Pulse */}
              <circle cx="250" cy="250" r="14" fill="url(#heroGrad1)" />
              <circle cx="250" cy="250" r="6" fill="#ffffff" />
            </svg>

            {/* Ambient Tech Highlights */}
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
    </section>
  );
};
