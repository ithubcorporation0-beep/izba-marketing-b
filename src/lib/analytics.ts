/**
 * Privacy-respecting Google Analytics event tracking.
 * Strictly adheres to PRD Section 14 & AGENT_RULES.md:
 * NEVER records personal identifying information (names, emails, phone numbers, or inquiry text).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks CTA button clicks (e.g., "Request a Quote", "Explore Services").
 */
export function trackCtaClick(label: string, destination: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: label,
    destination_url: destination,
  });
}

/**
 * Tracks successful quote enquiry form submissions (only recording the service category/slug).
 */
export function trackFormSubmit(service: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'quote_enquiry_submitted', {
    event_category: 'lead',
    service_interest: service,
  });
}
