import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { projects } from '@/content/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import styles from './PortfolioPreview.module.css';

export const PortfolioPreview: React.FC = () => {
  const publishedProjects = projects.filter((p) => p.isPublished);

  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-preview-heading"
    >
      <Container>
        <Reveal className={styles.header}>
          <Badge variant="blue" size="md">
            Verified Work
          </Badge>
          <h2 id="portfolio-preview-heading" className={styles.title}>
            Recent Projects & Case Studies
          </h2>
          <p className={styles.subtitle}>
            A showcase of client deliverables, web development, and digital
            solutions.
          </p>
        </Reveal>

        {publishedProjects.length === 0 ? (
          /* Tasteful Coming Soon State (No invented client projects, fake logos, or false metrics) */
          <Reveal>
            <div className={styles.comingSoonCard}>
              <div className={styles.iconCircle}>
                <Clock size={28} className={styles.comingSoonIcon} />
              </div>
              <h3 className={styles.comingSoonTitle}>Portfolio Coming Soon</h3>
              <p className={styles.comingSoonText}>
                In accordance with our strict honesty policy, we only showcase
                real, client-permitted case studies and verified results. Client
                project features are currently being documented and will be
                published here shortly.
              </p>
              <div className={styles.comingSoonMeta}>
                <div className={styles.metaBadge}>
                  <ShieldCheck size={16} />
                  <span>NDA & Client Privacy Protected</span>
                </div>
              </div>
              <div className={styles.comingSoonAction}>
                <Button href="/contact" variant="secondary" size="md">
                  Discuss Your Project Scope
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <RevealStagger className={styles.grid}>
            {publishedProjects.slice(0, 3).map((project) => (
              <Card key={project.id} hoverable className={styles.projectCard}>
                <Badge variant="cyan" size="sm">
                  {project.categorySlug}
                </Badge>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                <div className={styles.projectFooter}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className={styles.viewLink}
                    aria-label={`Read case study for ${project.title}`}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </RevealStagger>
        )}
      </Container>
    </section>
  );
};
