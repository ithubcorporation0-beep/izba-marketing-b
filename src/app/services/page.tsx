import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Layers, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description:
    'Enterprise IT solutions and engineering services from IT HUB Corporation.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="narrow">
        <SectionHeading
          badge="Capabilities"
          title="Enterprise Services"
          subtitle="Comprehensive IT services across 9 core architectural practices."
          align="center"
        />
        <div className="mt-8">
          <EmptyState
            icon={<Layers size={24} />}
            title="Coming in a later phase"
            description="The services catalog and directory will be built out in the upcoming Services phase."
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
