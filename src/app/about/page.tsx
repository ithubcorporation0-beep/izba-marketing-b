import React from 'react';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Compass,
  Sparkles,
  Headphones,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTA';
import { StatsSection } from '@/components/sections/Stats';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'About Us',
  description:
    'Learn about IZBA Marketing agency, our mission, core values of honesty, clarity, quality, and support, and our practical approach to digital solutions.',
  pathname: '/about',
});

/**
 * Core Company Values (PRD & Specifications: Honesty, Clarity, Quality, Support)
 */
const coreValues = [
  {
    title: 'Honesty',
    description:
      'We operate with strict integrity: realistic scopes, upfront pricing, and zero inflated promises, fake logos, or fabricated metrics.',
    icon: <ShieldCheck size={24} />,
    styleClass: styles.iconBlue,
  },
  {
    title: 'Clarity',
    description:
      'We communicate complex technical ideas in clear, business-friendly language so you always understand what is being built and why.',
    icon: <Compass size={24} />,
    styleClass: styles.iconCyan,
  },
  {
    title: 'Quality',
    description:
      'From clean code architecture to refined visual design and accurate data processing, we take pride in delivering dependable work.',
    icon: <Sparkles size={24} />,
    styleClass: styles.iconPurple,
  },
  {
    title: 'Support',
    description:
      'We believe in lasting partnerships with responsive communication, proper asset handovers, and dependable ongoing technical assistance.',
    icon: <Headphones size={24} />,
    styleClass: styles.iconEmerald,
  },
];

/**
 * Our Practical Working Approach
 */
const approachPillars = [
  {
    step: '01',
    title: 'Goal-Oriented Discovery',
    description:
      'Before writing code or producing creative media, we take the time to understand your specific business objectives, existing tools, and operational constraints.',
  },
  {
    step: '02',
    title: 'Modular & Structured Execution',
    description:
      'We break projects into clear, trackable milestones with transparent progress updates, ensuring you remain in control of the direction.',
  },
  {
    step: '03',
    title: 'Complete Ownership Handover',
    description:
      'Upon project completion, all source code, design assets, and credentials belong 100% to your organization, with thorough documentation provided.',
  },
];

// =========================================================================
// OWNER PLACEHOLDER BLOCK: LEADERSHIP TEAM & FOUNDING STORY
// TODO: When confirmed by the business owner, populate official leadership details,
// biographies, and company history. Strictly no fabricated names, years, or stock images.
// Set isStoryPublished to true once verified by the owner.
// =========================================================================
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const isStoryPublished = false;
const ownerStoryData: {
  foundingYear: string;
  storyText: string;
  teamMembers: TeamMember[];
} = {
  foundingYear: '', // TODO: To be supplied by owner
  storyText: '', // TODO: To be supplied by owner
  teamMembers: [], // TODO: To be supplied by owner
};

export default function AboutPage() {
  return (
    <div className={styles.aboutWrapper}>
      {/* 1. Hero Header */}
      <header className={styles.heroSection}>
        <Container size="default">
          <Reveal className={styles.heroContent}>
            <Badge variant="blue" size="md">
              About IZBA Marketing agency
            </Badge>
            <h1 className={styles.pageTitle}>
              Dedicated to Practical, Reliable{' '}
              <span className={styles.gradientText}>Digital Solutions</span>
            </h1>
            <p className={styles.pageSubtitle}>
              A comprehensive technology, marketing, and business-support
              partner helping organizations build and improve their digital
              operations.
            </p>
          </Reveal>
        </Container>
      </header>

      {/* 2. Company Overview & Mission */}
      <section
        className={styles.overviewSection}
        aria-labelledby="overview-heading"
      >
        <Container size="default">
          <div className={styles.overviewGrid}>
            <Reveal className={styles.overviewContent}>
              <Badge variant="neutral" size="sm">
                Company Overview
              </Badge>
              <h2 id="overview-heading" className={styles.sectionHeading}>
                Who We Are
              </h2>
              <p className={styles.positioningLead}>
                IZBA Marketing agency provides technology, marketing, creative, AI,
                and business-support services to help organizations build and
                improve their digital operations.
              </p>
              <p className={styles.overviewBody}>
                We understand that modern businesses often struggle with
                managing disconnected agencies, fragmented tech stacks, and
                complicated jargon. Our model brings essential services under
                one roof — from custom websites and software to digital
                marketing, automated AI workflows, graphic design, and accurate
                office data entry.
              </p>
              <p className={styles.overviewBody}>
                We prioritize clear communication, straightforward project
                milestones, and practical recommendations suited to your current
                operational scale.
              </p>
            </Reveal>

            <Reveal delay={0.15} className={styles.missionCard}>
              <div className={styles.missionBadge}>
                <Badge variant="cyan" size="sm">
                  Our Mission
                </Badge>
              </div>
              <h3 className={styles.missionTitle}>
                Empowering Business Operations Through Honest Technology
              </h3>
              <p className={styles.missionText}>
                Our mission is to make modern technology, digital marketing, and
                intelligent workflow automation accessible and dependable for
                every business — delivered with transparent pricing,
                business-friendly explanations, and dedicated support.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Verified Statistics Row */}
      <StatsSection />

      {/* 4. Core Values (Honesty, Clarity, Quality, Support) */}
      <section
        className={styles.valuesSection}
        aria-labelledby="values-heading"
      >
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="blue" size="md">
              Guiding Principles
            </Badge>
            <h2 id="values-heading" className={styles.sectionHeading}>
              Our Core Values
            </h2>
            <p className={styles.pageSubtitle}>
              These four pillars guide every proposal, line of code, design
              deliverable, and client interaction.
            </p>
          </Reveal>

          <RevealStagger className={styles.valuesGrid}>
            {coreValues.map((val, idx) => (
              <Card key={idx} hoverable className={styles.valueCard}>
                <div className={[styles.valueIcon, val.styleClass].join(' ')}>
                  {val.icon}
                </div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.description}</p>
              </Card>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* 5. Our Working Approach */}
      <section
        className={styles.approachSection}
        aria-labelledby="approach-heading"
      >
        <Container size="default">
          <Reveal className={styles.sectionHeaderCenter}>
            <Badge variant="cyan" size="md">
              How We Collaborate
            </Badge>
            <h2 id="approach-heading" className={styles.sectionHeading}>
              Our Approach
            </h2>
            <p className={styles.pageSubtitle}>
              A collaborative methodology centered on understanding your goals,
              delivering with discipline, and providing long-term reliability.
            </p>
          </Reveal>

          <RevealStagger className={styles.approachGrid}>
            {approachPillars.map((pillar, idx) => (
              <div key={idx} className={styles.approachCard}>
                <span className={styles.approachStepNum}>{pillar.step}</span>
                <h3 className={styles.approachTitle}>{pillar.title}</h3>
                <p className={styles.approachDesc}>{pillar.description}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* 6. Team / Founding Story Placeholder (Hidden until confirmed by owner) */}
      {isStoryPublished && ownerStoryData.teamMembers.length > 0 && (
        <section className={styles.teamSection} aria-labelledby="team-heading">
          <Container size="default">
            <div className={styles.sectionHeaderCenter}>
              <Badge variant="neutral" size="md">
                Leadership
              </Badge>
              <h2 id="team-heading" className={styles.sectionHeading}>
                Meet Our Team
              </h2>
            </div>
          </Container>
        </section>
      )}

      {/* 7. Contact CTA */}
      <CTASection />
    </div>
  );
}
