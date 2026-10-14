import { Testimonial } from '@/types';

/**
 * CLIENT TESTIMONIALS & REVIEWS
 *
 * NOTE: This array is intentionally empty to comply with AGENT_RULES.md (Rule 2: No invented testimonials,
 * fake customer quotes, or fabricated reviews).
 *
 * HOW TO ADD REAL TESTIMONIALS:
 * When the business owner receives real, verified client feedback with publication permission,
 * add them here following this structure:
 *
 * export const testimonials: Testimonial[] = [
 *   {
 *     id: 'testimonial-1',
 *     clientName: 'Jane Smith',
 *     role: 'Founder & CEO',
 *     company: 'Acme Logistics',
 *     content: 'IZBA Marketing agency delivered our website ahead of schedule with exceptional communication.',
 *     serviceSlug: 'website-development',
 *     rating: 5,
 *     isPublished: true,
 *     date: '2026-02-10',
 *   },
 * ];
 */
export const testimonials: Testimonial[] = [];
