'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Clock, HelpCircle } from 'lucide-react';
import { QuoteFormData } from '@/types';
import { validateQuoteForm } from '@/lib/validation/quote';
import { categories } from '@/content/categories';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import styles from './QuoteForm.module.css';

const initialFormData: QuoteFormData = {
  name: '',
  email: '',
  company: '',
  serviceCategory: '',
  budgetRange: '',
  timeline: '',
  projectScope: '',
};

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    { label: '$25,000 – $50,000 (Targeted MVP / Audit)', value: '25k-50k' },
    {
      label: '$50,000 – $100,000 (Core System / Migration)',
      value: '50k-100k',
    },
    {
      label: '$100,000 – $250,000 (Enterprise Modernization)',
      value: '100k-250k',
    },
    { label: '$250,000+ (Full Platform / Multi-Quarter)', value: '250k+' },
  ];

  const timelineOptions = [
    { label: 'Immediate (< 2 weeks)', value: 'immediate' },
    { label: '1 – 2 Months', value: '1-2-months' },
    { label: 'Quarterly Planning (3 – 6 Months)', value: '3-6-months' },
    { label: 'Flexible / Discovery Phase', value: 'flexible' },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconWrapper}>
          <CheckCircle2 size={48} className={styles.successIcon} />
        </div>
        <h3 className={styles.successTitle}>Enterprise RFQ Received</h3>
        <p className={styles.successMessage}>
          Thank you, <strong>{formData.name}</strong>. Your technical
          requirements for <strong>{formData.company}</strong> have been
          securely routed to our Solutions Architecture Lead.
        </p>
        <div className={styles.nextStepsBox}>
          <h4>What happens next?</h4>
          <ol className={styles.nextStepsList}>
            <li>
              A Senior Solutions Architect will review your scope within 24
              hours.
            </li>
            <li>
              We will schedule a 30-minute discovery session with our technical
              leads.
            </li>
            <li>
              You will receive a formal architectural proposal and milestone
              estimate.
            </li>
          </ol>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            setFormData(initialFormData);
            setIsSubmitted(false);
          }}
          className={styles.resetBtn}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          1. Organization & Contact Details
        </h3>
        <div className={styles.grid2}>
          <Input
            label="Full Name"
            name="name"
            placeholder="e.g. Sarah Jenkins"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <Input
            label="Business Email"
            name="email"
            type="email"
            placeholder="s.jenkins@enterprise.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>
        <Input
          label="Company / Enterprise Name"
          name="company"
          placeholder="Acme Financial Corp"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          required
        />
      </div>

      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          2. Service Domain & Budget Parameters
        </h3>
        <div className={styles.selectWrapper}>
          <label htmlFor="serviceCategory" className={styles.selectLabel}>
            Primary Service Discipline{' '}
            <span className={styles.required}>*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className={[
              styles.select,
              errors.serviceCategory ? styles.hasError : '',
            ]
              .filter(Boolean)
              .join(' ')}
            required
          >
            <option value="">-- Select Technical Domain --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
          {errors.serviceCategory && (
            <span className={styles.errorText} role="alert">
              {errors.serviceCategory}
            </span>
          )}
        </div>

        <div className={styles.grid2}>
          <div className={styles.selectWrapper}>
            <label htmlFor="budgetRange" className={styles.selectLabel}>
              Estimated Investment Tier{' '}
              <span className={styles.required}>*</span>
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={[
                styles.select,
                errors.budgetRange ? styles.hasError : '',
              ]
                .filter(Boolean)
                .join(' ')}
              required
            >
              <option value="">-- Select Budget Tier --</option>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.budgetRange && (
              <span className={styles.errorText} role="alert">
                {errors.budgetRange}
              </span>
            )}
          </div>

          <div className={styles.selectWrapper}>
            <label htmlFor="timeline" className={styles.selectLabel}>
              Target Deployment Window{' '}
              <span className={styles.required}>*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={[styles.select, errors.timeline ? styles.hasError : '']
                .filter(Boolean)
                .join(' ')}
              required
            >
              <option value="">-- Select Timeline --</option>
              {timelineOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <span className={styles.errorText} role="alert">
                {errors.timeline}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          3. Scope, Architecture & Objectives
        </h3>
        <Textarea
          label="Project Goals & Technical Requirements"
          name="projectScope"
          rows={5}
          placeholder="Briefly describe your existing tech stack, key bottlenecks, scale requirements, or migration targets..."
          value={formData.projectScope}
          onChange={handleChange}
          error={errors.projectScope}
          helperText="Include any specific compliance frameworks (SOC 2, HIPAA, GDPR) or legacy stacks if applicable."
          required
        />
      </div>

      <div className={styles.securityNotice}>
        <Shield size={16} className={styles.shieldIcon} />
        <span>
          All submissions are safeguarded by strict mutual NDA protocols and
          encrypted end-to-end.
        </span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className={styles.submitBtn}
        icon={<Send size={18} />}
      >
        {isSubmitting ? 'Validating & Routing...' : 'Submit Enterprise RFQ'}
      </Button>
    </form>
  );
};
