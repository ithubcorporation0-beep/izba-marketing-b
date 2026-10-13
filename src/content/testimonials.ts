import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Apex Global FinTech',
    quote:
      'IT HUB Corporation overhauled our mission-critical transaction settlement engine with zero downtime. Their engineers did not just write code; they fundamentally elevated our architectural resilience and enabled 40x higher throughput.',
    rating: 5,
    avatarText: 'ER',
    statHighlight: '40x Throughput Increase',
  },
  {
    id: 'test-2',
    author: 'Marcus Vance',
    role: 'VP of Cloud & Infrastructure',
    company: 'OmniHealth Network',
    quote:
      'Finding an engineering partner that genuinely understands HIPAA compliance, Kubernetes orchestration, and enterprise SLAs is exceptionally rare. IT HUB delivered our cloud data migration three weeks ahead of schedule.',
    rating: 5,
    avatarText: 'MV',
    statHighlight: '100% HIPAA Audit Pass',
  },
  {
    id: 'test-3',
    author: 'Dr. Sarah Chen',
    role: 'Head of Digital Operations',
    company: 'Vanguard Logistics',
    quote:
      'The predictive IoT telemetry platform built by IT HUB saved our fleet operations over $9M in unscheduled maintenance within the very first year. Their technical depth and transparency are peerless.',
    rating: 5,
    avatarText: 'SC',
    statHighlight: '$9.4M Direct Cost Saved',
  },
];
