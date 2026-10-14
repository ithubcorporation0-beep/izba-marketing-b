import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { RevealStagger } from '@/components/ui/motion/RevealStagger';
import { projects } from '@/content/projects';
import { Briefcase, ArrowRight, Layers } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Portfolio & Case Studies',
  description:
    'Explore verified case studies and technical implementations delivered by IT HUB Corporation.',
  pathname: '/portfolio',
});

export default function PortfolioPage() {
  const publishedProjects = projects.filter((p) => p.isPublished);

  return (
    <div className={styles.pageWrapper}>
      <Container size="default">
        <SectionHeading
          badge="Client Projects"
          title="Portfolio & Case Studies"
          subtitle="Real-world technology outcomes and implementations. We publish only verified work with explicit client permission."
          align="center"
        />

        {publishedProjects.length === 0 ? (
          /* Honest Empty State when projects array is empty */
          <div className={styles.emptyContainer}>
            <div className={styles.emptyCard}>
              <div className={styles.iconCircle} aria-hidden="true">
                <Briefcase size={36} />
              </div>
              <h2 className={styles.emptyTitle}>Portfolio Coming Soon</h2>
              <p className={styles.emptyText}>
                We are currently documenting recent client implementations with
                full permission. In accordance with our privacy commitments, we
                never display mock metrics or fabricated case studies.
              </p>
              <p className={styles.emptySubtext}>
                Interested in how we can solve your specific business or technical
                challenge? Browse our 90 published services or request a tailored
                consultation.
              </p>
              <div className={styles.emptyActions}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                >
                  Request a Quote
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="md"
                  icon={<Layers size={16} />}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Project Grid with staggered motion reveal for when real projects are added */
          <RevealStagger stagger={0.1} duration={0.6}>
            <div className={styles.projectsGrid}>
              {publishedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </RevealStagger>
        )}
      </Container>
    </div>
  );
}
