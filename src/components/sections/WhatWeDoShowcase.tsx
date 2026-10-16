'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, TrendingUp, Palette, Bot, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/motion';
import styles from './WhatWeDoShowcase.module.css';

interface ShowcaseService {
  name: string;
  slug: string;
  description: string;
  deliverables: string[];
}

interface Pillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  services: ShowcaseService[];
}

const pillars: Pillar[] = [
  {
    id: 'build',
    name: 'Build',
    tagline: 'High-performance digital products and custom engineering',
    description:
      'We architect scalable web applications, robust backends, and digital storefronts engineered for fast load times, enterprise security, and clean maintainability.',
    icon: <Code2 size={20} strokeWidth={1.75} />,
    badge: 'Engineering & Development',
    services: [
      {
        name: 'Website Development',
        slug: 'website-development',
        description: 'Modern, responsive business websites built on clean code with optimal CWV metrics.',
        deliverables: ['Custom Next.js/React architecture', 'Mobile responsive layouts', 'SEO structural markup'],
      },
      {
        name: 'Custom Software Development',
        slug: 'custom-software-development',
        description: 'Bespoke web portals, internal tools, and client dashboards designed for operational efficiency.',
        deliverables: ['Role-based authentication', 'REST & GraphQL APIs', 'Database schema design'],
      },
      {
        name: 'E-commerce Website Development',
        slug: 'ecommerce-website-development',
        description: 'Conversion-focused e-commerce storefronts with secure checkout and catalog management.',
        deliverables: ['Payment gateway setup', 'Inventory management', 'Automated order workflows'],
      },
      {
        name: 'SaaS Development',
        slug: 'saas-development',
        description: 'End-to-end multi-tenant Software-as-a-Service products with subscription billing.',
        deliverables: ['Multi-tenant architecture', 'Stripe billing setup', 'User onboarding flows'],
      },
    ],
  },
  {
    id: 'market',
    name: 'Market',
    tagline: 'Measurable organic reach and targeted customer acquisition',
    description:
      'Data-driven digital marketing campaigns and technical SEO strategies designed to improve search visibility, capture qualified demand, and lower acquisition costs.',
    icon: <TrendingUp size={20} strokeWidth={1.75} />,
    badge: 'Growth & Acquisition',
    services: [
      {
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Multi-channel digital marketing coordination across search, social, and paid campaigns.',
        deliverables: ['Audience profiling', 'Channel prioritization', 'Attribution analytics'],
      },
      {
        name: 'Search Engine Optimization (SEO)',
        slug: 'search-engine-optimization-seo',
        description: 'Technical audits, on-page optimization, and authoritative backlink strategies.',
        deliverables: ['Core Web Vitals tuning', 'Keyword ranking strategy', 'Content architecture'],
      },
      {
        name: 'Local SEO',
        slug: 'local-seo',
        description: 'Targeted local search optimization and Google Business Profile management.',
        deliverables: ['Google Business Profile setup', 'NAP directory citations', 'Local schema markup'],
      },
      {
        name: 'Social Media Marketing',
        slug: 'social-media-marketing',
        description: 'Organic channel management, multi-platform publishing, and community engagement.',
        deliverables: ['Monthly editorial calendars', 'Branded post assets', 'Performance review'],
      },
    ],
  },
  {
    id: 'create',
    name: 'Create',
    tagline: 'Distinctive visual identities and engaging multimedia production',
    description:
      'We craft memorable visual branding, intuitive UI/UX design systems, and cinematic video assets that elevate credibility and captivate your target audience.',
    icon: <Palette size={20} strokeWidth={1.75} />,
    badge: 'Creative & Media',
    services: [
      {
        name: 'Logo Design',
        slug: 'logo-design',
        description: 'Distinctive vector logo marks crafted to represent your business across digital and print.',
        deliverables: ['Vector logo package (AI, EPS, SVG)', 'Usage guidelines PDF', 'Commercial rights transfer'],
      },
      {
        name: 'Graphic Design',
        slug: 'graphic-design',
        description: 'Comprehensive visual design services for digital marketing campaigns and web collateral.',
        deliverables: ['Production-ready artwork', 'Layered source files', 'Web-optimized exports'],
      },
      {
        name: 'Brand Identity Design',
        slug: 'brand-identity-design',
        description: 'Complete corporate visual identity systems including color palettes and style guides.',
        deliverables: ['Brand style guide PDF', 'Typography hierarchy', 'Social media template pack'],
      },
      {
        name: 'AI Explainer Videos',
        slug: 'ai-explainer-videos',
        description: 'Concise, engaging explainer videos combining AI voice narration and motion graphics.',
        deliverables: ['Full HD 1080p MP4 master', 'Synchronized SRT subtitles', 'Audio mix & stems'],
      },
    ],
  },
  {
    id: 'automate',
    name: 'Automate',
    tagline: 'Streamlined workflows, AI integration, and operational systems',
    description:
      'Empower your team by eliminating manual bottlenecks through intelligent AI automation, verified data processing, and reliable business IT infrastructure.',
    icon: <Bot size={20} strokeWidth={1.75} />,
    badge: 'Systems & Intelligence',
    services: [
      {
        name: 'AI Video Creation',
        slug: 'ai-video-creation',
        description: 'AI-assisted video generation, realistic avatars, synthetic voiceovers, and rapid mockups.',
        deliverables: ['Multi-format MP4 exports', 'Localized voiceovers', 'Subtitles & script document'],
      },
      {
        name: 'AI Image Generation',
        slug: 'ai-image-generation',
        description: 'High-resolution conceptual imagery and bespoke visuals crafted with generative AI.',
        deliverables: ['4K/8K resolution exports', 'Prompt seed reproducibility', 'Commercial licensing'],
      },
      {
        name: 'AI Chatbot Development',
        slug: 'ai-chatbot-development',
        description: 'Conversational chatbots trained on your company knowledge base via verified RAG architecture.',
        deliverables: ['Embedded web chat widget', 'Admin document portal', 'Lead capture routing'],
      },
      {
        name: 'AI Agent Development',
        slug: 'ai-agent-development',
        description: 'Autonomous multi-step AI agents capable of querying databases and triggering webhooks.',
        deliverables: ['API connectors & tool loops', 'Structured output validation', 'Execution audit log'],
      },
    ],
  },
];

export const WhatWeDoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('build');
  const tabListRef = useRef<HTMLDivElement>(null);

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  // Keyboard navigation for tablist (WAI-ARIA compliance)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % pillars.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + pillars.length) % pillars.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = pillars.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(pillars[nextIndex].id);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('button[role="tab"]');
    buttons?.[nextIndex]?.focus();
  };

  return (
    <section className={styles.section} aria-labelledby="showcase-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <Container size="default">
        <Reveal className={styles.header}>
          <Badge variant="gold" size="md">
            Integrated Service Matrix
          </Badge>
          <h2 id="showcase-heading" className={styles.title}>
            What We <span className="highlight-gold">Do</span>
          </h2>
          <p className={styles.subtitle}>
            Explore our four core pillars designed to take your business from initial concept to market leadership.
          </p>

          {/* Accessible Segmented Tab Bar */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Service disciplines"
            className={styles.tabList}
          >
            {pillars.map((pillar, idx) => {
              const isSelected = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  id={`tab-${pillar.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${pillar.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={[styles.tabButton, isSelected ? styles.tabSelected : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setActiveTab(pillar.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  <span className={styles.tabIcon} aria-hidden="true">
                    {pillar.icon}
                  </span>
                  <span className={styles.tabLabel}>{pillar.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tab Panel */}
        <div
          id={`panel-${currentPillar.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentPillar.id}`}
          tabIndex={0}
          className={styles.panel}
        >
          {/* Pillar Highlight Banner */}
          <div className={styles.pillarBanner}>
            <div className={styles.bannerInfo}>
              <span className={styles.bannerBadge}>{currentPillar.badge}</span>
              <h3 className={styles.bannerTagline}>{currentPillar.tagline}</h3>
              <p className={styles.bannerDesc}>{currentPillar.description}</p>
            </div>
            <div className={styles.bannerAction}>
              <Link href="/services" className={styles.viewDirectoryLink}>
                <span>View Full Directory</span>
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* 4 Service Cards Grid */}
          <div className={styles.servicesGrid}>
            {currentPillar.services.map((svc) => (
              <div key={svc.slug} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.serviceName}>{svc.name}</h4>
                  <Link
                    href={`/services/${svc.slug}`}
                    className={styles.cardArrowLink}
                    aria-label={`Explore ${svc.name}`}
                  >
                    <ArrowRight size={16} strokeWidth={2} />
                  </Link>
                </div>
                <p className={styles.serviceDesc}>{svc.description}</p>
                <div className={styles.deliverablesList}>
                  {svc.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className={styles.deliverableItem}>
                      <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
