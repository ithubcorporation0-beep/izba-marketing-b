import { categories } from './categories';
import { services } from './services';

export interface VerifiedStat {
  id: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

/**
 * FACT-VERIFIED PROJECT STATISTICS (AGENT RULES COMPLIANT)
 *
 * CRITICAL RULE:
 * This file contains ONLY facts verified directly from the codebase.
 * - Total service categories: computed dynamically from categories.length (9)
 * - Total services offered: computed dynamically from services.length (90)
 *
 * NEVER invent fake revenue, fabricated client metrics, or fake ratings.
 */

// Dynamically computed verified facts
const totalCategoriesCount = categories.length;
const totalServicesCount = services.length;
export const verifiedStats: VerifiedStat[] = [
  {
    id: 'categories',
    numericValue: totalCategoriesCount,
    suffix: '',
    label: 'Service Categories',
    description: 'Comprehensive IT & digital capabilities structured under dedicated domains',
  },
  {
    id: 'services',
    numericValue: totalServicesCount,
    suffix: '',
    label: 'Services Offered',
    description: 'Distinct, documented services with clear deliverables and processes',
  },
];

/* =========================================================================
   OPTIONAL CLIENT-VERIFIED METRICS SLOTS:
   The client may uncomment and populate these ONLY when real, verified, and officially confirmed:
   
   // TODO: Fill ONLY when real company data is confirmed:
   // export const clientVerifiedMetrics = [
   //   {
   //     id: 'years-experience',
   //     numericValue: 0, // e.g., 5
   //     suffix: '+',
   //     label: 'Years of Operation',
   //     description: 'Verified years delivering software and marketing solutions'
   //   },
   //   {
   //     id: 'projects-delivered',
   //     numericValue: 0, // e.g., 120
   //     suffix: '+',
   //     label: 'Projects Delivered',
   //     description: 'Successfully completed client deliveries with verified sign-off'
   //   }
   // ];
   ========================================================================= */
