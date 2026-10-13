import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Briefcase, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies',
  description:
    'Verified enterprise case studies and client projects delivered by IT HUB Corporation.',
};

export default function PortfolioPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="narrow">
        <SectionHeading
          badge="Case Studies"
          title="Portfolio & Client Work"
          subtitle="Real-world technology outcomes and architectural implementations."
          align="center"
        />
        <div className="mt-8">
          <EmptyState
            icon={<Briefcase size={24} />}
            title="Coming in a later phase"
            description="The portfolio and project case studies will be implemented in the Portfolio phase."
            action={
              <Button
                href="/"
                variant="secondary"
                size="sm"
                icon={<ArrowLeft size={14} />}
              >
                Back to Home
              </Button>
            }
          />
        </div>
      </Container>
    </div>
  );
}
