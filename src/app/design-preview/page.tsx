'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Accordion } from '@/components/ui/Accordion';
import { Skeleton } from '@/components/ui/Skeleton';
import { EmptyState } from '@/components/ui/EmptyState';
import {
  ArrowRight,
  Download,
  Search,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Inbox,
} from 'lucide-react';

export default function DesignPreviewPage() {
  // Interactive state demos
  const [inputValue, setInputValue] = useState('demo@ithubcorp.com');
  const [textareaValue, setTextareaValue] = useState(
    'Need cloud infrastructure migration for our fintech application.'
  );
  const [selectedService, setSelectedService] = useState('cloud-devops');
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const colors = [
    { name: 'Navy', hex: '#101828', variable: 'var(--color-navy)', textDark: false },
    { name: 'Primary Blue', hex: '#3157D5', variable: 'var(--color-primary-blue)', textDark: false },
    { name: 'Accent Violet', hex: '#7657E8', variable: 'var(--color-accent-violet)', textDark: false },
    { name: 'White', hex: '#FFFFFF', variable: 'var(--color-white)', textDark: true, border: true },
    { name: 'Soft Bg', hex: '#F5F7FB', variable: 'var(--color-soft-bg)', textDark: true, border: true },
    { name: 'Text Main', hex: '#172033', variable: 'var(--color-text-main)', textDark: false },
    { name: 'Muted', hex: '#667085', variable: 'var(--color-muted)', textDark: false },
    { name: 'Border', hex: '#E4E7EC', variable: 'var(--color-border)', textDark: true, border: true },
    { name: 'Success', hex: '#067647', variable: 'var(--color-success)', textDark: false },
    { name: 'Error', hex: '#B42318', variable: 'var(--color-error)', textDark: false },
  ];

  const serviceOptions = [
    { value: 'cloud-devops', label: 'Cloud & DevOps Architecture' },
    { value: 'software-engineering', label: 'Enterprise Software Engineering' },
    { value: 'cybersecurity', label: 'Cybersecurity & Zero Trust' },
    { value: 'ai-automation', label: 'Applied AI & Automation' },
  ];

  const accordionItems = [
    {
      id: 'faq-1',
      title: 'How does IT HUB Corporation guarantee 99.99% system availability?',
      content:
        'We architect multi-region immutable topologies using Kubernetes, automated failover triggers, and zero-downtime blue/green deployment pipelines.',
    },
    {
      id: 'faq-2',
      title: 'What security standards and compliance frameworks do you adhere to?',
      content:
        'All client deliverables are built under strict SOC 2 Type II controls, zero-trust network segregation, automated SAST/DAST testing, and end-to-end data encryption.',
    },
    {
      id: 'faq-3',
      title: 'Can we hire IT HUB Corporation for targeted architectural audits?',
      content:
        'Yes. We offer rapid 2-week architectural assessment sprints focusing on bottlenecks, security posture, and cloud cost optimization.',
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-[var(--color-white)]">
      <Container size="default">
        {/* Page Intro */}
        <div className="mb-14">
          <SectionHeading
            badge="Phase: Design System"
            title="Design System & Component Preview"
            subtitle="Interactive catalog reviewing every token, typography rule, and accessible UI component in all visual states."
            align="left"
          />
        </div>

        <div className="space-y-16">
          {/* SECTION 1: Design Tokens & Palette */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              1. Color Tokens (PRD Section 10.2)
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              All colors are managed via CSS tokens and Tailwind variables. Hardcoded color hexes are forbidden.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colors.map((c) => (
                <div
                  key={c.name}
                  className={`rounded-[var(--radius-md)] p-4 flex flex-col justify-between h-28 shadow-[var(--shadow-sm)] ${
                    c.border ? 'border border-[var(--color-border)]' : ''
                  }`}
                  style={{ backgroundColor: c.variable }}
                >
                  <span
                    className={`font-semibold text-sm ${
                      c.textDark ? 'text-[var(--color-navy)]' : 'text-white'
                    }`}
                  >
                    {c.name}
                  </span>
                  <div
                    className={`text-xs font-mono opacity-90 ${
                      c.textDark ? 'text-[var(--color-muted)]' : 'text-white/80'
                    }`}
                  >
                    <div>{c.hex}</div>
                    <div className="text-[10px] truncate">{c.variable}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Typography Hierarchy */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              2. Typography (Inter via next/font)
            </h2>
            <div className="space-y-4 bg-[var(--color-soft-bg)] p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">H1 (Fluid clamp 2.25rem - 3.5rem)</span>
                <h1>Enterprise Technology Solutions</h1>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">H2 (Fluid clamp 1.75rem - 2.5rem)</span>
                <h2>Architectural Foundations & Standards</h2>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">H3 (Fluid clamp 1.35rem - 1.875rem)</span>
                <h3>High-Throughput Microservice Architecture</h3>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">H4 (Fluid clamp 1.15rem - 1.375rem)</span>
                <h4>Continuous Integration & Observability</h4>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">Lead Text (.text-lead)</span>
                <p className="text-lead">
                  We engineer mission-critical systems for Fortune 500 banks, healthcare providers, and high-growth technology enterprises.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">Body Text (.text-body)</span>
                <p className="text-body">
                  Zero-trust security policies, immutable deployments, and modular micro-frontends ensure uninterrupted operational velocity.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase text-[var(--color-muted)] font-mono">Small Text (.text-small)</span>
                <p className="text-small">
                  SOC 2 Type II Certified &middot; 99.99% Uptime SLA Guaranteed &middot; 24/7 Follow-the-sun operations.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: Buttons */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              3. Buttons & Interactive States
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md">
                  Primary Button
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Button
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Button
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                >
                  With Icon
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  loading={buttonLoading}
                  onClick={() => {
                    setButtonLoading(true);
                    setTimeout(() => setButtonLoading(false), 1500);
                  }}
                >
                  {buttonLoading ? 'Simulating...' : 'Click to Test Loading'}
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
              </div>

              {/* Sizes */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="sm">
                  Small (sm)
                </Button>
                <Button variant="primary" size="md">
                  Medium (md)
                </Button>
                <Button variant="primary" size="lg">
                  Large (lg)
                </Button>
                <Button href="/contact" variant="secondary" size="md" icon={<Download size={16} />}>
                  As Link Version
                </Button>
              </div>
            </div>
          </section>

          {/* SECTION 4: Badges */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              4. Badges
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="blue" size="md" dot>
                Primary Blue
              </Badge>
              <Badge variant="violet" size="md" dot>
                Accent Violet
              </Badge>
              <Badge variant="navy" size="md">
                Navy Solid
              </Badge>
              <Badge variant="success" size="md" dot>
                Success (99.99% SLA)
              </Badge>
              <Badge variant="error" size="md" dot>
                Error (Required)
              </Badge>
              <Badge variant="neutral" size="md">
                Neutral
              </Badge>
              <Badge variant="blue" size="sm">
                Small Size
              </Badge>
            </div>
          </section>

          {/* SECTION 5: Cards */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              5. Cards & Containers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card padding="md">
                <h4 className="text-base font-semibold text-[var(--color-navy)] mb-2">
                  Static Card (Default)
                </h4>
                <p className="text-sm text-[var(--color-muted)]">
                  Standard container with border, subtle shadow, and token-based padding.
                </p>
              </Card>

              <Card hoverable padding="md">
                <h4 className="text-base font-semibold text-[var(--color-navy)] mb-2">
                  Hoverable Card
                </h4>
                <p className="text-sm text-[var(--color-muted)]">
                  Elevates on hover with smooth transition and enhanced shadow.
                </p>
              </Card>

              <Card hoverable padding="lg" className="border-[var(--color-primary-blue)]/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-[var(--color-navy)]">
                    Featured Card
                  </h4>
                  <Badge variant="violet" size="sm">
                    New
                  </Badge>
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  Customizable border styling and internal composition.
                </p>
              </Card>
            </div>
          </section>

          {/* SECTION 6: Form Elements */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              6. Form Controls & Validation States
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--color-soft-bg)] p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              {/* Input States */}
              <Input
                label="Work Email"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="We will send architectural estimates to this address."
                placeholder="name@company.com"
              />

              <Input
                label="Work Email (Error State)"
                required
                value="invalid-email"
                error="Please enter a valid business email address."
                placeholder="name@company.com"
                onChange={() => {}}
              />

              {/* Select */}
              <Select
                label="Primary Service Interest"
                required
                options={serviceOptions}
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                helperText="Select the practice area matching your upcoming project."
              />

              <Select
                label="Service (Disabled State)"
                disabled
                options={serviceOptions}
                value="cloud-devops"
                onChange={() => {}}
              />

              {/* Textarea */}
              <div className="md:col-span-2">
                <Textarea
                  label="Project Scope & Deliverables"
                  required
                  rows={3}
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  helperText="Describe target deployment timeline, user volumes, or security constraints."
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Checkbox
                  label="Require Mutual Non-Disclosure Agreement (NDA)"
                  description="Automatically generate and dispatch a bilateral NDA before discovery call."
                  checked={isChecked1}
                  onChange={(e) => setIsChecked1(e.target.checked)}
                />

                <Checkbox
                  label="Subscribe to Engineering Whitepapers"
                  description="Monthly architectural benchmarks on Kubernetes, Zero Trust, and AI."
                  checked={isChecked2}
                  onChange={(e) => setIsChecked2(e.target.checked)}
                />

                <Checkbox
                  label="Disabled Checkbox Option"
                  disabled
                  checked={false}
                  onChange={() => {}}
                />
              </div>
            </div>
          </section>

          {/* SECTION 7: Accordion */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              7. Accordion (Keyboard Accessible)
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Supports Enter and Space keys to expand/collapse, aria-expanded state, and smooth transitions.
            </p>
            <Accordion items={accordionItems} defaultOpenId="faq-1" />
          </section>

          {/* SECTION 8: Skeleton / Loading */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              8. Skeleton & Loading States
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton variant="circular" width={40} height={40} />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="70%" />
                    <Skeleton variant="text" width="40%" />
                  </div>
                </div>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="85%" />
              </Card>

              <Skeleton variant="card" />

              <Card className="space-y-4">
                <Skeleton variant="text" width="50%" height={20} />
                <Skeleton variant="rectangular" height={90} />
                <div className="flex gap-2">
                  <Skeleton variant="rectangular" width={80} height={32} />
                  <Skeleton variant="rectangular" width={80} height={32} />
                </div>
              </Card>
            </div>
          </section>

          {/* SECTION 9: EmptyState */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] border-b border-[var(--color-border)] pb-3">
              9. Empty State
            </h2>
            <EmptyState
              icon={<Inbox size={24} />}
              title="No Architecture RFQs Found"
              description="There are currently no active quotes in this view. Use the button below to submit a new inquiry."
              action={
                <Button href="/contact" variant="primary" size="sm">
                  Create New Request
                </Button>
              }
            />
          </section>
        </div>
      </Container>
    </div>
  );
}
