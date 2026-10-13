import { z } from 'zod';

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Please provide your full name (at least 2 characters).' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Business email is required.' })
    .email({ message: 'Please enter a valid email address (e.g., name@company.com).' }),
  phone: z
    .string()
    .trim()
    .max(30, { message: 'Phone number must not exceed 30 characters.' })
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .trim()
    .max(100, { message: 'Company name must not exceed 100 characters.' })
    .optional()
    .or(z.literal('')),
  service: z
    .string()
    .trim()
    .min(1, { message: 'Please select a service of interest.' }),
  budget: z
    .string()
    .trim()
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, { message: 'Please provide at least 20 characters describing your project.' })
    .max(2000, { message: 'Project details must not exceed 2,000 characters.' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to the processing of your enquiry details to proceed.',
    }),
  honeypot: z
    .string()
    .optional()
    .or(z.literal('')),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
