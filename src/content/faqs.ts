import { Faq } from '@/types';

/**
 * GENERAL COMPANY FAQS
 * Honest, accurate answers without false claims or guarantees.
 */
export const faqs: Faq[] = [
  {
    id: 'faq-quote-request',
    question: 'How do I request a quote for my project?',
    answer:
      'You can submit a project brief through our online Request a Quote form or contact us via email. Please provide your business goals, target deliverables, and preferred timeline so we can provide an accurate scope estimate.',
    category: 'General',
    sortOrder: 1,
  },
  {
    id: 'faq-info-to-prepare',
    question: 'What information should I prepare before contacting you?',
    answer:
      'Having a summary of your requirements, examples of reference websites or designs you like, your target timeline, and an approximate budget helps us tailor our proposal effectively.',
    category: 'General',
    sortOrder: 2,
  },
  {
    id: 'faq-turnaround-time',
    question: 'How long does a project typically take to complete?',
    answer:
      'Turnaround times depend entirely on project scope and complexity. Small design or document formatting tasks may take a few business days, while custom software or multi-page websites typically take between 2 and 6 weeks. We provide clear milestone timelines in every proposal.',
    category: 'Services & Delivery',
    sortOrder: 3,
  },
  {
    id: 'faq-revisions-process',
    question: 'What is your review and revision policy?',
    answer:
      'Every project milestone includes review rounds where you can provide feedback and request adjustments before final delivery and signoff.',
    category: 'Services & Delivery',
    sortOrder: 4,
  },
  {
    id: 'faq-confidentiality',
    question:
      'How do you safeguard client confidentiality and intellectual property?',
    answer:
      'We respect client privacy and are happy to sign bilateral Non-Disclosure Agreements (NDAs). All source files, project assets, and custom deliverables become your full property upon project completion.',
    category: 'Security & Compliance',
    sortOrder: 5,
  },
  {
    id: 'faq-pricing-structure',
    question: 'How are your services priced?',
    answer:
      'We price projects based on estimated scope, technical complexity, and deliverables. For ongoing needs, we also offer structured monthly maintenance retainers. We provide fixed-price quotes before work begins so there are no surprises.',
    category: 'Pricing & Engagement',
    sortOrder: 6,
  },
  {
    id: 'faq-support-after-launch',
    question: 'Do you offer ongoing support after project completion?',
    answer:
      'Yes. We provide handover documentation with every project and offer ongoing technical support and maintenance packages for updates, backups, and security monitoring.',
    category: 'Services & Delivery',
    sortOrder: 7,
  },
];
