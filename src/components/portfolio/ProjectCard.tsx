import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TrendingUp, Layers, CheckCircle } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.topMeta}>
        <span className={styles.clientBadge}>{project.client}</span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.metricsGrid}>
        {project.metrics.map((metric, idx) => (
          <div key={idx} className={styles.metricItem}>
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.architectureBox}>
        <div className={styles.archLabel}>
          <Layers size={14} className={styles.archIcon} />
          <span>Core Deliverables</span>
        </div>
        <p className={styles.archDetail}>{project.solution}</p>
      </div>

      <div className={styles.stackTags}>
        {project.stack.map((item) => (
          <span key={item} className={styles.stackTag}>
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
};
