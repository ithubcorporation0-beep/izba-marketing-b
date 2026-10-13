'use client';

import React, { useState } from 'react';
import { Project, Category } from '@/types';
import { ProjectCard } from './ProjectCard';
import styles from './PortfolioFilter.module.css';

interface PortfolioFilterProps {
  projects: Project[];
  categories: Category[];
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  projects,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(
          (p) =>
            p.categorySlug === selectedCategory ||
            p.category === selectedCategory
        );

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabContainer} role="tablist">
        <button
          role="tab"
          aria-selected={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
          className={[
            styles.filterBtn,
            selectedCategory === 'all' ? styles.active : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          All Case Studies ({projects.length})
        </button>
        {categories.map((cat) => {
          const catKey = cat.slug || cat.id;
          const count = projects.filter(
            (p) => p.categorySlug === cat.slug || p.category === cat.id
          ).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === catKey}
              onClick={() => setSelectedCategory(catKey)}
              className={[
                styles.filterBtn,
                selectedCategory === catKey ? styles.active : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {cat.name || cat.title} ({count})
            </button>
          );
        })}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
