import { Project } from '@/types';

/**
 * CLIENT PROJECTS & CASE STUDIES
 *
 * NOTE: This array is intentionally empty to comply with AGENT_RULES.md (Rule 2: No invented facts,
 * fabricated case studies, or fake metrics).
 *
 * HOW TO ADD REAL PROJECTS:
 * When the business owner approves real, client-permitted case studies, add them to this array
 * following this structure:
 *
 * export const projects: Project[] = [
 *   {
 *     id: 'client-crm-modernization',
 *     title: 'Custom CRM Pipeline Implementation',
 *     slug: 'custom-crm-pipeline-implementation',
 *     clientName: 'Example Corp (use only with explicit written permission)',
 *     categorySlug: 'web-software-development',
 *     summary: 'Migrated 50,000 customer records from spreadsheets into a unified web CRM.',
 *     challenge: 'Disconnected spreadsheets caused data conflicts and delayed follow-ups.',
 *     approach: 'Engineered a role-based Next.js CRM with automated email triggers.',
 *     outcome: 'Reduced manual administrative entry time by 15 hours weekly.',
 *     deliverables: ['Custom Web CRM', 'PostgreSQL Database', 'Staff Training Manual'],
 *     isPublished: true,
 *     publishedAt: '2026-01-15',
 *   },
 * ];
 */
export const projects: Project[] = [];
