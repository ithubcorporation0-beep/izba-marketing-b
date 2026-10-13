import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Quote & Contact',
  description: 'Connect with IT HUB Corporation solutions architects.',
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="narrow">
        <SectionHeading
          badge="Inquiries"
          title="Contact & Request a Quote"
          subtitle="Initiate a consultation or submit your project requirements."
          align="center"
        />
        <div className="mt-8">
          <EmptyState
            icon={<Mail size={24} />}
            title="Coming in a later phase"
            description="The interactive Request a Quote form and contact routing will be built out in the Contact & Forms phase."
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
