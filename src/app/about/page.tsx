import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Info, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About IT HUB Corporation',
  description: 'Learn about IT HUB Corporation enterprise technology leadership and standards.',
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="narrow">
        <SectionHeading
          badge="Company"
          title="About IT HUB Corporation"
          subtitle="Enterprise IT solutions, cloud architecture, and cybersecurity platform."
          align="center"
        />
        <div className="mt-8">
          <EmptyState
            icon={<Info size={24} />}
            title="Coming in a later phase"
            description="The About page content and leadership overview will be implemented in an upcoming milestone."
            action={
              <Button href="/" variant="secondary" size="sm" icon={<ArrowLeft size={14} />}>
                Back to Home
              </Button>
            }
          />
        </div>
      </Container>
    </div>
  );
}
