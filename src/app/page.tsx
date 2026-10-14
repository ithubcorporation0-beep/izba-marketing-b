import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CategoryMarquee } from '@/components/sections/CategoryMarquee';
import { StatsSection } from '@/components/sections/Stats';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { FeaturedServicesSection } from '@/components/sections/FeaturedServicesSection';
import { Process } from '@/components/sections/Process';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationJsonLd } from '@/lib/seo/jsonLd';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Technology, Marketing & AI Solutions for Business',
  description:
    'From custom software and web development to digital marketing, creative production, and AI automation, IT HUB Corporation helps businesses build and grow.',
  pathname: '/',
});

export default function HomePage() {
  const organizationSchema = getOrganizationJsonLd();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data: Organization */}
      <JsonLd data={organizationSchema} />

      {/* 1. Hero with PRD 4.2 copy & 2. Verifiable trust points */}
      <Hero />

      {/* 2. Infinite Continuous Category Marquee */}
      <CategoryMarquee />

      {/* 3. Verified Project Statistics Row */}
      <StatsSection />

      {/* 4. Service Category Cards (all 9 categories) */}
      <CategoriesSection />

      {/* 5. Featured Services Section (10 owner-featured offerings) */}
      <FeaturedServicesSection />

      {/* 6. How We Work Process (Animated connected timeline) */}
      <Process />

      {/* 7. Portfolio Preview (graceful 'coming soon' state when empty) */}
      <PortfolioPreview />

      {/* 8. Client Testimonials (automatically hidden when array is empty) */}
      <TestimonialsSection />

      {/* 9. FAQ Accordion from faqs.ts */}
      <FAQSection />

      {/* 10. Final CTA Banner */}
      <CTASection />
    </div>
  );
}
