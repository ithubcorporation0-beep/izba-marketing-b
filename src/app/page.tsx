import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Palette, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <div className="py-20 lg:py-28 bg-[var(--color-white)]">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="blue" size="md" dot>
            Phase: Design System Complete
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-navy)] leading-tight">
            {siteConfig.name}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {siteConfig.tagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/design-preview"
              variant="primary"
              size="lg"
              icon={<Palette size={18} />}
            >
              Explore /design-preview
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverable className="space-y-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary-blue)]/10 text-[var(--color-primary-blue)] flex items-center justify-center">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-navy)]">
              PRD 10.2 Tokens
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Standardized colors, spacing, radii, and shadows implemented as CSS variables and Tailwind utilities.
            </p>
          </Card>

          <Card hoverable className="space-y-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet)] flex items-center justify-center">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-navy)]">
              Accessible Components
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              12 fully-typed UI components with visible keyboard focus rings and responsive scaling.
            </p>
          </Card>

          <Card hoverable className="space-y-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-success)]/10 text-[var(--color-success)] flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-navy)]">
              Mobile Navigation & Layout
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Sticky header, focus-trapped drawer, landmarks, skip link, and responsive footer.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
