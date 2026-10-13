/**
 * Budget range choices for the Request a Quote enquiry form.
 *
 * Business owners can freely edit or reorder these options without touching components.
 */

export interface BudgetOption {
  value: string;
  label: string;
}

export const budgetOptions: BudgetOption[] = [
  { value: 'under-500', label: 'Under $500 (Small task / Consultation)' },
  { value: '500-1500', label: '$500 – $1,500 (Starter project / Package)' },
  { value: '1500-3000', label: '$1,500 – $3,000 (Standard implementation)' },
  { value: '3000-5000', label: '$3,000 – $5,000 (Comprehensive solution)' },
  { value: '5000-plus', label: '$5,000+ (Multi-phase / Ongoing support)' },
  { value: 'undecided', label: 'Not sure / Let us discuss during consultation' },
];
