import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import { Layers } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const clientName = project.client || project.clientName;
  const metrics = project.metrics || [];
  const stack = project.stack || project.technologies || [];
  const solutionText = project.solution || project.outcome || project.summary;

  return (
    <Card className={styles.card}>
      <div className={styles.topMeta}>
        {clientName && <span className={styles.clientBadge}>{clientName}</span>}
        {project.year && <span className={styles.year}>{project.year}</span>}
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      {metrics.length > 0 && (
        <div className={styles.metricsGrid}>
          {metrics.map((metric, idx) => (
            <div key={idx} className={styles.metricItem}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {solutionText && (
        <div className={styles.architectureBox}>
          <div className={styles.archLabel}>
            <Layers size={14} className={styles.archIcon} />
            <span>Core Deliverables</span>
          </div>
          <p className={styles.archDetail}>{solutionText}</p>
        </div>
      )}

      {stack.length > 0 && (
        <div className={styles.stackTags}>
          {stack.map((item) => (
            <span key={item} className={styles.stackTag}>
              {item}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
};
