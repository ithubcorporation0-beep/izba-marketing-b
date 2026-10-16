'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  X,
  RotateCcw,
  ArrowRight,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { Service, Category } from '@/types';
import { ServiceCard } from './ServiceCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { EmptyStateIllustration } from '@/components/illustrations/EmptyStateIllustration';
import styles from './ServiceSearch.module.css';

interface ServiceSearchProps {
  services: Service[];
  categories: Category[];
}

function CategoryParamSync({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams?.get('category') || 'all';

  useEffect(() => {
    if (urlCategory) {
      onCategoryChange(urlCategory);
    }
  }, [urlCategory, onCategoryChange]);

  return null;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({
  services,
  categories,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeScrollSpyCategory, setActiveScrollSpyCategory] = useState<string>('all');

  // Scroll-spy observer for category sections when viewing all categories
  useEffect(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catSlug = entry.target.getAttribute('data-category-slug');
            if (catSlug) {
              setActiveScrollSpyCategory(catSlug);
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px -55% 0px',
        threshold: 0,
      }
    );

    const sectionElements = document.querySelectorAll<HTMLElement>(
      'section[data-category-slug]'
    );
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selectedCategory, searchQuery, categories]);

  const handleCategoryChange = (newCat: string) => {
    setSelectedCategory(newCat);
    setActiveScrollSpyCategory(newCat);
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(search);
    if (newCat === 'all') {
      params.delete('category');
    } else {
      params.set('category', newCat);
    }
    const newQuery = params.toString() ? `?${params.toString()}` : '';
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setActiveScrollSpyCategory('all');
    router.replace(pathname, { scroll: false });
  };

  // Group services by category after applying search & category filter
  const { groupedResults, totalCount } = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    let count = 0;
    const groups: Array<{
      category: Category;
      services: Service[];
    }> = [];

    // Filter categories to display
    const targetCategories =
      selectedCategory === 'all'
        ? categories
        : categories.filter(
            (c) => c.slug === selectedCategory || c.id === selectedCategory
          );

    targetCategories.forEach((cat) => {
      const catServices = services.filter((s) => {
        const matchesCategory =
          s.categorySlug === cat.slug || s.category === cat.id;
        if (!matchesCategory) return false;

        if (!q) return true;

        const title = (s.name || s.title || '').toLowerCase();
        const desc = (s.shortDescription || '').toLowerCase();
        return title.includes(q) || desc.includes(q);
      });

      if (catServices.length > 0) {
        count += catServices.length;
        groups.push({
          category: cat,
          services: catServices,
        });
      }
    });

    return { groupedResults: groups, totalCount: count };
  }, [services, categories, searchQuery, selectedCategory]);

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'all';

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={null}>
        <CategoryParamSync onCategoryChange={setSelectedCategory} />
      </Suspense>

      {/* Search Input Box */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBox}>
          <label htmlFor="service-search-input" className={styles.searchLabel}>
            Search services
          </label>
          <div className={styles.inputWrapper}>
            <Search
              size={18}
              className={styles.searchIcon}
              aria-hidden="true"
            />
            <input
              id="service-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by service name or description (e.g. Website, SEO, AI, Design)..."
              className={styles.searchInput}
              aria-describedby="search-live-status"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles.clearBtn}
                aria-label="Clear search input"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Category Chip Bar with Scroll-Spy indicator */}
      <nav
        className={styles.stickyChipBar}
        role="navigation"
        aria-label="Filter directory by category"
      >
        <div className={styles.chipScrollContainer}>
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={[
              styles.categoryPill,
              selectedCategory === 'all' && (activeScrollSpyCategory === 'all' || isFiltered)
                ? styles.activePill
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-pressed={selectedCategory === 'all'}
          >
            All Categories ({services.length})
          </button>

          {categories.map((cat) => {
            const isFilterSelected =
              selectedCategory === cat.slug || selectedCategory === cat.id;
            const isScrollSpyActive =
              selectedCategory === 'all' && activeScrollSpyCategory === cat.slug;
            const isCurrent = isFilterSelected || isScrollSpyActive;
            const count = services.filter(
              (s) => s.categorySlug === cat.slug || s.category === cat.id
            ).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={[
                  styles.categoryPill,
                  isCurrent ? styles.activePill : '',
                  isScrollSpyActive && selectedCategory === 'all' ? styles.scrollSpyPill : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-pressed={isFilterSelected}
              >
                {cat.name || cat.title} ({count})
              </button>
            );
          })}
        </div>
      </nav>

      {/* Screen Reader Live Announcement */}
      <div
        id="search-live-status"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {`${totalCount} services found matching your criteria.`}
      </div>

      {/* Result Status & Reset Control */}
      <div className={styles.statusBar}>
        <div className={styles.resultCount}>
          <span className={styles.countNumber}>{totalCount}</span>
          <span>
            {totalCount === 1 ? 'service' : 'services'} available
            {selectedCategory !== 'all'
              ? ' in this category'
              : ' across 9 disciplines'}
          </span>
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetFilterBtn}
            aria-label="Reset all search filters"
          >
            <RotateCcw size={14} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Directory Content (Always grouped under its category) */}
      {totalCount === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIllustrationWrapper} aria-hidden="true">
            <EmptyStateIllustration width={220} height={165} />
          </div>
          <h3 className={styles.emptyTitle}>No services found</h3>
          <p className={styles.emptyText}>
            We couldn&apos;t find any service matching &ldquo;{searchQuery}
            &rdquo;
            {selectedCategory !== 'all' ? ' in the selected category' : ''}. Try
            searching with broader terms or clear your filters to view the full
            directory.
          </p>
          <Button
            onClick={handleReset}
            variant="secondary"
            size="md"
            icon={<RotateCcw size={16} />}
          >
            Reset All Filters
          </Button>
        </div>
      ) : (
        <div className={styles.directoryGroups}>
          {groupedResults.map(({ category, services: catServices }) => (
            <section
              key={category.id}
              id={`cat-section-${category.slug}`}
              data-category-slug={category.slug}
              className={styles.categorySection}
              aria-labelledby={`cat-heading-${category.slug}`}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryInfo}>
                  <Badge variant="blue" size="sm">
                    {catServices.length}{' '}
                    {catServices.length === 1 ? 'Service' : 'Services'}
                  </Badge>
                  <h3
                    id={`cat-heading-${category.slug}`}
                    className={styles.categoryTitle}
                  >
                    {category.name || category.title}
                  </h3>
                  <p className={styles.categoryDesc}>
                    {category.shortDescription || category.description}
                  </p>
                </div>
                <Link
                  href={`/services/${category.slug}`}
                  className={styles.categoryLandingLink}
                  aria-label={`View dedicated page for ${category.title}`}
                >
                  <span>Category Overview</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.servicesGrid}>
                {catServices.map((service, idx) => (
                  <div
                    key={`${selectedCategory}-${searchQuery}-${service.id}`}
                    className={styles.animatingCard}
                    style={
                      {
                        '--stagger-idx': Math.min(idx, 12),
                      } as React.CSSProperties
                    }
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};
