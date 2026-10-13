'use client';

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Service, Category } from '@/types';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceSearch.module.css';

interface ServiceSearchProps {
  services: Service[];
  categories: Category[];
  initialCategory?: string;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({
  services,
  categories,
  initialCategory = 'all',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        service.categorySlug === selectedCategory ||
        service.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const serviceTitle = (service.name || service.title || '').toLowerCase();
      const serviceDesc = (service.shortDescription || '').toLowerCase();
      const matchesSearch =
        !query ||
        serviceTitle.includes(query) ||
        serviceDesc.includes(query) ||
        (service.technologies || []).some((tech) =>
          tech.toLowerCase().includes(query)
        ) ||
        (service.includes || []).some((inc) =>
          inc.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [services, selectedCategory, searchQuery]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services by keyword (e.g. Website, SEO, Python, AI)..."
            className={styles.searchInput}
            aria-label="Search IT services"
          />
        </div>

        <div
          className={styles.categoryTabs}
          role="tablist"
          aria-label="Filter by Service Category"
        >
          <button
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={[
              styles.tab,
              selectedCategory === 'all' ? styles.activeTab : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            All Services ({services.length})
          </button>
          {categories.map((cat) => {
            const count = services.filter(
              (s) => s.categorySlug === cat.slug || s.category === cat.id
            ).length;
            const catKey = cat.slug || cat.id;
            const isSelected = selectedCategory === catKey;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(catKey)}
                className={[styles.tab, isSelected ? styles.activeTab : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                {cat.name || cat.title} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.resultsInfo}>
        <span>
          Showing {filteredServices.length}{' '}
          {filteredServices.length === 1 ? 'service' : 'services'}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className={styles.clearBtn}
          >
            Clear search
          </button>
        )}
      </div>

      {filteredServices.length > 0 ? (
        <div className={styles.grid}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>
            <SlidersHorizontal size={36} />
          </div>
          <h3>No services match your criteria</h3>
          <p>
            Try refining your search term or selecting &ldquo;All
            Services&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className={styles.resetBtn}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
