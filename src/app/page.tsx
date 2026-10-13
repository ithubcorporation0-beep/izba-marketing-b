import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { FeaturedServicesSection } from '@/components/sections/FeaturedServicesSection';
import { Process } from '@/components/sections/Process';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'IT HUB Corporation — Technology, Marketing & AI Solutions',
  description:
    'From websites and software to digital marketing, creative production, and AI automation, IT HUB Corporation helps businesses move their ideas forward.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with PRD 4.2 copy & 2. Verifiable trust points */}
      <Hero />

      {/* 3. Service Category Cards (all 9 categories) */}
      <CategoriesSection />

      {/* 4. Featured Services Section (10 owner-featured offerings) */}
      <FeaturedServicesSection />

      {/* 5. How We Work Process (4 steps: Discuss, Plan, Build, Deliver and support) */}
      <Process />

      {/* 6. Portfolio Preview (graceful 'coming soon' state when empty) */}
      <PortfolioPreview />

      {/* 7. Client Testimonials (automatically hidden when array is empty) */}
      <TestimonialsSection />

      {/* 8. FAQ Accordion from faqs.ts */}
      <FAQSection />

      {/* 9. Final CTA Banner */}
      <CTASection />
    </div>
  );
}
