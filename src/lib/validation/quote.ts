import { QuoteFormData, FormValidationResult } from '@/types';

export function validateQuoteForm(
  data: Partial<QuoteFormData>
): FormValidationResult {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Full name is required (minimum 2 characters).';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  // Company validation
  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Company or organization name is required.';
  }

  // Service category validation
  if (!data.serviceCategory || data.serviceCategory === '') {
    errors.serviceCategory = 'Please select a primary service category.';
  }

  // Budget range validation
  if (!data.budgetRange || data.budgetRange === '') {
    errors.budgetRange = 'Please select an estimated budget tier.';
  }

  // Timeline validation
  if (!data.timeline || data.timeline === '') {
    errors.timeline = 'Please select your target launch timeline.';
  }

  // Project scope details
  if (!data.projectScope || data.projectScope.trim().length < 15) {
    errors.projectScope =
      'Please provide at least 15 characters describing your project goals or challenges.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}
