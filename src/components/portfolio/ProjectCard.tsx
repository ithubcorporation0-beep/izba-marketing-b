import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { categories } from '@/content/categories';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const category = categories.find((c) => c.slug === project.categorySlug);
  const categoryName = category ? category.name : project.categorySlug;
  const clientName = project.clientName || project.client;
  const deliverables = project.deliverables || [];

  return (
    <article className={styles.card}>
      <div className={styles.topMeta}>
        <span className={styles.categoryBadge}>{categoryName}</span>
        {clientName && <span className={styles.clientName}>{clientName}</span>}
      </div>

      <h3 className={styles.title}>
        <Link
          href={`/portfolio/${project.slug}`}
          className="hover:text-[var(--color-primary-blue)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
        >
          {project.title}
        </Link>
      </h3>

      <p className={styles.summary}>{project.summary}</p>

      {deliverables.length > 0 && (
        <div className={styles.deliverablesBox}>
          <div className={styles.deliverablesLabel}>Key Deliverables</div>
          <ul className={styles.deliverablesList}>
            {deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.linkRow}>
        <Link href={`/portfolio/${project.slug}`} className={styles.viewLink}>
          <span>Read Case Study</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};
