'use client';

import React, { useState, useEffect } from 'react';
import { trackCtaClick } from '@/lib/analytics';
import styles from './ConsentBanner.module.css';

const CONSENT_KEY = 'hub_analytics_consent';

function loadGoogleAnalytics(gaId: string) {
  if (typeof window === 'undefined' || document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer =
        (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
    };

  window.gtag('js', new Date());
  window.gtag('config', gaId, {
    anonymize_ip: true,
  });
}

export const ConsentBanner: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If no Google Analytics ID is provided in environment, load nothing
    if (!gaId) return;

    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === 'accepted') {
      loadGoogleAnalytics(gaId);
    } else if (!savedConsent) {
      // User has not made a decision yet
      setIsVisible(true);
    }

    // Delegated click listener for CTA tracking (only dispatches if gtag exists)
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement | HTMLButtonElement>(
        'a[href="/contact"], a[href^="/contact?"], a[href="/services"], a[href^="/services?"]'
      );
      if (target) {
        const text = target.textContent?.trim() || 'CTA';
        const dest = (target as HTMLAnchorElement).href || target.getAttribute('href') || 'cta';
        trackCtaClick(text, dest);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [gaId]);

  if (!gaId || !isVisible) {
    return null;
  }

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
    loadGoogleAnalytics(gaId);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  return (
    <aside
      className={styles.banner}
      role="region"
      aria-label="Cookie and analytics consent notice"
    >
      <p className={styles.textBlock}>
        We use anonymous cookies to analyze site traffic and improve our
        services. No personal information is ever tracked.
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={handleAccept}
          className={styles.acceptBtn}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={handleDecline}
          className={styles.declineBtn}
        >
          Decline
        </button>
      </div>
    </aside>
  );
};
