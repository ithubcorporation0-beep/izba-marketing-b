import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-4xl) var(--space-lg)',
        minHeight: '65vh',
        gap: 'var(--space-lg)',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(0, 242, 254, 0.1)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-accent-cyan)',
        }}
      >
        <Compass size={36} />
      </div>

      <h1
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}
      >
        404 &mdash; Route Not Found
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-muted)',
          maxWidth: '540px',
          lineHeight: 1.6,
        }}
      >
        The requested endpoint or architecture document does not exist in the IT
        HUB system catalog.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-md)',
          marginTop: 'var(--space-sm)',
        }}
      >
        <Button href="/" variant="primary" size="md" icon={<Home size={16} />}>
          Return Home
        </Button>
        <Button href="/services" variant="outline" size="md">
          Browse Services
        </Button>
      </div>
    </div>
  );
}
