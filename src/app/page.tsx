import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { StatsSection } from '@/components/sections/Stats';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { FeaturedServicesSection } from '@/components/sections/FeaturedServicesSection';
import { Process } from '@/components/sections/Process';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
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
    'From custom software and web development to digital marketing, creative production, and AI automation, IZBA Marketing agency helps businesses build and grow.',
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

      {/* 2. Verified Project Statistics Row (9 categories, 90 services) */}
      <StatsSection />

      {/* 3. Service Category Bento Grid (all 9 categories) */}
      <CategoriesSection />

      {/* 4. Featured Services Section */}
      <FeaturedServicesSection />

      {/* 5. How We Work Process (Connected 4-step timeline in navy) */}
      <Process />

      {/* 6. Why Choose Us (4 verifiable operational tiles) */}
      <WhyChooseUs />

      {/* 7. Portfolio Preview (graceful 'coming soon' state when empty) */}
      <PortfolioPreview />

      {/* 8. Client Testimonials (automatically hidden when array is empty) */}
      <TestimonialsSection />

      {/* 9. FAQ Accordion (two columns with smooth accordion) */}
      <FAQSection />

      {/* 10. Final CTA Banner (large navy panel with gold button) */}
      <CTASection />
    </div>
  );
}
