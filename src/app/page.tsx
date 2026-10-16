import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CapabilitiesStrip } from '@/components/sections/CapabilitiesStrip';
import { StatsSection } from '@/components/sections/Stats';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { WhatWeDoShowcase } from '@/components/sections/WhatWeDoShowcase';
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

      {/* 1. Hero with preserved headline, copy, buttons, and showcase photo */}
      <Hero />

      {/* 2. Horizontal Capabilities Strip with core skills */}
      <CapabilitiesStrip />

      {/* 3. Verified Statistics Row (9 categories, 90 services) */}
      <StatsSection />

      {/* 4. Service Category Bento Grid (all 9 categories with mini illustrations) */}
      <CategoriesSection />

      {/* 5. What We Do: Accessible Tabbed Showcase (Build, Market, Create, Automate) */}
      <WhatWeDoShowcase />

      {/* 6. Featured Services Section */}
      <FeaturedServicesSection />

      {/* 7. How We Work Process (Connected 4-step timeline with large outlined step numbers) */}
      <Process />

      {/* 8. Why Choose Us (4 verifiable operational tiles) */}
      <WhyChooseUs />

      {/* 9. Portfolio Preview (graceful 'coming soon' state when empty) */}
      <PortfolioPreview />

      {/* 10. Client Testimonials (automatically hidden when array is empty) */}
      <TestimonialsSection />

      {/* 11. FAQ Accordion (with side illustration) */}
      <FAQSection />

      {/* 12. Final Closing CTA Banner (with gradient, pattern, and floating shapes) */}
      <CTASection />
    </div>
  );
}
