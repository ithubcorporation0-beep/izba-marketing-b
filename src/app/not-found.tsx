import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Compass, Home, Layers } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 lg:py-32 flex items-center justify-center text-center">
      <Container size="narrow">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--color-primary-blue)]/10 border border-[var(--color-primary-blue)]/20 flex items-center justify-center text-[var(--color-primary-blue)]">
            <Compass size={32} />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight">
              404 — Route Not Found
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-md mx-auto">
              The requested page does not exist or has been moved within the IT
              HUB Corporation platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<Home size={16} />}
            >
              Return Home
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="md"
              icon={<Layers size={16} />}
            >
              Browse Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
