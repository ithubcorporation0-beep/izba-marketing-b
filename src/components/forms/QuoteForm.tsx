'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2,
  Mail,
} from 'lucide-react';
import { quoteFormSchema } from '@/lib/validation/quoteSchema';
import { categories } from '@/content/categories';
import { getPublishedServices } from '@/lib/services';
import { siteConfig } from '@/config/site';
import { Service } from '@/types';
import { trackFormSubmit } from '@/lib/analytics';
import styles from './QuoteForm.module.css';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  consent: false,
  honeypot: '',
};

const DEFAULT_ACCESS_KEY = 'd54f97d2-e7c5-4ec5-b282-ed968dda322f';

function SearchParamSync({
  onServiceParamChange,
}: {
  onServiceParamChange: (param: string) => void;
}) {
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get('service') || '';

  useEffect(() => {
    if (serviceParam) {
      onServiceParamChange(serviceParam);
    }
  }, [serviceParam, onServiceParamChange]);

  return null;
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Bot detection: track when form mounted to verify minimum interaction time (e.g., 2.5s)
  const mountTimeRef = useRef<number>(Date.now());
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const publishedServices: Service[] = getPublishedServices();
  const publishedCategories = categories.filter((c) => c.isPublished);

  // Pre-select service from URL parameter when client hydrates
  const handleServiceParamChange = React.useCallback(
    (serviceParam: string) => {
      const match = publishedServices.find((s) => s.slug === serviceParam);
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.slug }));
      }
    },
    [publishedServices]
  );

  // Access key check: uses user key d54f97d2-e7c5-4ec5-b282-ed968dda322f as default
  const envKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim() || '';
  const accessKey =
    envKey && !envKey.startsWith('PLACEHOLDER_') ? envKey : DEFAULT_ACCESS_KEY;
  const isKeyConfigured = Boolean(accessKey && accessKey.length > 0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // If API key is not configured, prevent submission and inform user
    if (!isKeyConfigured) {
      setSubmitError(
        'Online submissions are not yet configured on this website. Please reach out to us directly via email.'
      );
      return;
    }

    // 1. Client-side Zod validation
    const result = quoteFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormState;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);

      // Focus error summary for screen reader / keyboard accessibility
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return;
    }

    // 2. Anti-spam honeypot check: reject bot submissions without showing success
    if (formData.honeypot) {
      return;
    }

    // 3. Dispatch to Web3Forms API
    setIsSubmitting(true);

    try {
      const selectedService = publishedServices.find(
        (s) => s.slug === formData.service
      );

      const payload = {
        access_key: accessKey,
        subject: 'New enquiry from IZBA website',
        from_name: formData.fullName,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: selectedService ? selectedService.name : formData.service,
        budget: formData.budget?.trim() || 'Not specified',
        message: formData.message,
        source_page:
          typeof window !== 'undefined' ? window.location.href : '/contact',
        botcheck: '',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success === true) {
        setIsSubmitted(true);
        trackFormSubmit(formData.service);
      } else {
        setSubmitError(
          data.message ||
            'Submission was not accepted by the email service. Please review your information or try again.'
        );
      }
    } catch {
      setSubmitError(
        'A network error occurred while sending your enquiry. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
    mountTimeRef.current = Date.now();
  };

  if (isSubmitted) {
    const matchedService = publishedServices.find(
      (s) => s.slug === formData.service
    );

    return (
      <div className={styles.card}>
        <div className={styles.successCard}>
          <div className={styles.successIconWrapper}>
            <svg
              className={styles.checkmarkSvg}
              viewBox="0 0 52 52"
              aria-hidden="true"
            >
              <circle
                className={styles.checkmarkCircle}
                cx="26"
                cy="26"
                r="23"
                fill="none"
                strokeWidth="3"
              />
              <path
                className={styles.checkmarkCheck}
                fill="none"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l8 8 16-16"
              />
            </svg>
          </div>
          <h2 className={styles.successTitle}>Enquiry Received</h2>
          <p className={styles.successMessage}>
            Thank you, <strong>{formData.fullName}</strong>. Your enquiry
            regarding{' '}
            <strong>
              {matchedService ? matchedService.name : 'our services'}
            </strong>{' '}
            has been sent successfully. We will review your project details and
            respond to <strong>{formData.email}</strong> shortly.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  const charCount = formData.message.length;
  const isMessageValid = charCount >= 20 && charCount <= 2000;
  const errorCount = Object.keys(errors).length;

  return (
    <div className={styles.card}>
      {/* Missing Web3Forms Key Banner */}
      {!isKeyConfigured && (
        <div
          className={`${styles.alertBox} ${styles.alertWarning} mb-6`}
          role="alert"
        >
          <AlertTriangle size={20} className="shrink-0 mt-0.5" />
          <div>
            <strong>Notice for site administrator:</strong> The online enquiry
            form is not yet connected to a Web3Forms access key (
            <code>NEXT_PUBLIC_WEB3FORMS_KEY</code>). Visitors can reach the team
            directly at{' '}
            {siteConfig.contact.email.startsWith('PLACEHOLDER_') ? (
              <span className="font-semibold">{siteConfig.contact.email}</span>
            ) : (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={styles.alertLink}
              >
                {siteConfig.contact.email}
              </a>
            )}
            .
          </div>
        </div>
      )}

      {/* Accessible Error Summary */}
      {errorCount > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          className={`${styles.errorSummary} mb-6`}
          role="alert"
          aria-labelledby="error-summary-heading"
        >
          <h3 id="error-summary-heading" className={styles.errorSummaryTitle}>
            Please review the following {errorCount} issue
            {errorCount > 1 ? 's' : ''}:
          </h3>
          <ul className={styles.errorSummaryList}>
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>
                <a
                  href={`#field-${field}`}
                  className="hover:underline font-medium"
                >
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* API Submission Error Alert */}
      {submitError && (
        <div
          className={`${styles.alertBox} ${styles.alertError} mb-6`}
          role="alert"
        >
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <strong>Unable to send enquiry:</strong> {submitError}
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        <SearchParamSync onServiceParamChange={handleServiceParamChange} />
      </Suspense>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
      >
        <input type="hidden" name="access_key" value={accessKey} />
        <input type="hidden" name="subject" value="New enquiry from IZBA website" />
        <input
          type="hidden"
          name="from_name"
          value={formData.fullName || 'IZBA Marketing Enquiry'}
        />
        {/* Anti-spam Honeypot */}
        <div className={styles.honeypotWrapper} aria-hidden="true">
          <label htmlFor="field-honeypot">Leave this field blank</label>
          <input
            id="field-honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Business Email */}
        <div className={styles.grid2}>
          <div className={styles.fieldGroup}>
            <label htmlFor="field-fullName" className={styles.label}>
              <span>
                Full Name <span className={styles.requiredAsterisk}>*</span>
              </span>
            </label>
            <input
              id="field-fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g., Alex Morgan"
              value={formData.fullName}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={
                errors.fullName ? 'fullName-error' : undefined
              }
              className={`${styles.input} ${
                errors.fullName ? styles.inputError : ''
              }`}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className={styles.errorMessage}
                role="alert"
              >
                <AlertCircle size={14} />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="field-email" className={styles.label}>
              <span>
                Business Email <span className={styles.requiredAsterisk}>*</span>
              </span>
            </label>
            <input
              id="field-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`${styles.input} ${
                errors.email ? styles.inputError : ''
              }`}
            />
            {errors.email && (
              <p id="email-error" className={styles.errorMessage} role="alert">
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone/WhatsApp & Company/Brand */}
        <div className={styles.grid2}>
          <div className={styles.fieldGroup}>
            <label htmlFor="field-phone" className={styles.label}>
              <span>Phone / WhatsApp</span>
              <span className={styles.optionalTag}>Optional</span>
            </label>
            <input
              id="field-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+[country code] [number]"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`${styles.input} ${
                errors.phone ? styles.inputError : ''
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className={styles.errorMessage} role="alert">
                <AlertCircle size={14} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="field-company" className={styles.label}>
              <span>Company / Brand</span>
              <span className={styles.optionalTag}>Optional</span>
            </label>
            <input
              id="field-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Corp or Personal Brand"
              value={formData.company}
              onChange={handleChange}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'company-error' : undefined}
              className={`${styles.input} ${
                errors.company ? styles.inputError : ''
              }`}
            />
            {errors.company && (
              <p
                id="company-error"
                className={styles.errorMessage}
                role="alert"
              >
                <AlertCircle size={14} />
                <span>{errors.company}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service of Interest & Budget Range */}
        <div className={styles.grid2}>
          <div className={styles.fieldGroup}>
            <label htmlFor="field-service" className={styles.label}>
              <span>
                Service of Interest{' '}
                <span className={styles.requiredAsterisk}>*</span>
              </span>
            </label>
            <select
              id="field-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${styles.select} ${
                errors.service ? styles.selectError : ''
              }`}
            >
              <option value="">Select a service...</option>
              {publishedCategories.map((category) => {
                const categoryServices = publishedServices.filter(
                  (s) => s.categorySlug === category.slug
                );
                if (categoryServices.length === 0) return null;

                return (
                  <optgroup key={category.id} label={category.name}>
                    {categoryServices.map((service) => (
                      <option key={service.id} value={service.slug}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
            {errors.service && (
              <p
                id="service-error"
                className={styles.errorMessage}
                role="alert"
              >
                <AlertCircle size={14} />
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="field-budget" className={styles.label}>
              <span>Estimated Budget</span>
              <span className={styles.optionalTag}>Optional</span>
            </label>
            <input
              id="field-budget"
              name="budget"
              type="text"
              placeholder="e.g. $50, $200, or custom budget"
              value={formData.budget}
              onChange={handleChange}
              aria-invalid={!!errors.budget}
              aria-describedby={errors.budget ? 'budget-error' : undefined}
              className={`${styles.input} ${
                errors.budget ? styles.inputError : ''
              }`}
            />
            {errors.budget && (
              <p id="budget-error" className={styles.errorMessage} role="alert">
                <AlertCircle size={14} />
                <span>{errors.budget}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Project Details */}
        <div className={styles.fieldGroup}>
          <div className={styles.label}>
            <span>
              Project Requirements / Scope{' '}
              <span className={styles.requiredAsterisk}>*</span>
            </span>
          </div>
          <textarea
            id="field-message"
            name="message"
            required
            rows={5}
            placeholder="Please describe your project, timeline, deliverables needed, or any specific questions (minimum 20 characters)..."
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby="message-counter message-error"
            className={`${styles.textarea} ${
              errors.message ? styles.textareaError : ''
            }`}
          />
          <div className={styles.counterRow}>
            {errors.message ? (
              <p
                id="message-error"
                className={styles.errorMessage}
                role="alert"
              >
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </p>
            ) : (
              <span />
            )}
            <span
              id="message-counter"
              className={`${styles.charCounter} ${
                charCount === 0
                  ? ''
                  : isMessageValid
                  ? styles.charCounterValid
                  : styles.charCounterWarn
              }`}
              aria-live="polite"
            >
              {charCount} / 2,000 characters (min. 20)
            </span>
          </div>
        </div>

        {/* Row 5: Privacy Consent Checkbox */}
        <div className={styles.consentRow}>
          <input
            id="field-consent"
            name="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            className={styles.checkbox}
          />
          <div className="flex-1">
            <label htmlFor="field-consent" className={styles.consentText}>
              I consent to {siteConfig.name} processing my name, email, and
              project details in accordance with the{' '}
              <Link
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.consentLink}
              >
                Privacy Policy
              </Link>{' '}
              for the purpose of providing a quote and consultation.{' '}
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            {errors.consent && (
              <p
                id="consent-error"
                className={`${styles.errorMessage} mt-1`}
                role="alert"
              >
                <AlertCircle size={14} />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !isKeyConfigured}
            className={[
              styles.submitBtn,
              isSubmitting ? styles.submitting : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className={styles.spinner} />
                <span>Sending Enquiry...</span>
              </>
            ) : !isKeyConfigured ? (
              <>
                <Mail size={18} />
                <span>Submissions Not Configured (Email Instead)</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Request for Quote</span>
              </>
            )}
          </button>
          <p className="text-center text-xs text-[var(--color-muted)] mt-2">
            No upfront commitment. We review each request and respond with
            transparent scope and options.
          </p>
        </div>
      </form>
    </div>
  );
}
