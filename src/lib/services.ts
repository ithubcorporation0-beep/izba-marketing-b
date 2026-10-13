import { Category, Service, FeaturedService } from '@/types';
import { categories } from '@/content/categories';
import { services } from '@/content/services';
import { featuredServices } from '@/content/featured';

/**
 * Get all published services.
 */
export function getPublishedServices(): Service[] {
  return services.filter((s) => s.status === 'published');
}

/**
 * Get all published service categories in sort order.
 */
export function getAllCategories(): Category[] {
  return categories
    .filter((cat) => cat.isPublished)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get a single published category by its unique slug.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.isPublished && cat.slug === slug);
}

/**
 * Get all published services belonging to a category.
 */
export function getServicesByCategory(categorySlug: string): Service[] {
  return services.filter(
    (s) => s.status === 'published' && s.categorySlug === categorySlug
  );
}

/**
 * Get a single published service by its unique slug.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.status === 'published' && s.slug === slug);
}

/**
 * Get all published services flagged as featured.
 */
export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.status === 'published' && s.isFeatured);
}

/**
 * Get the owner's featured services list metadata from PRD Section 5.1.
 */
export function getFeaturedMetadata(): FeaturedService[] {
  return featuredServices;
}

/**
 * Get related published services for a given service.
 * Looks up explicit relatedServiceSlugs first, and fills with same-category services if needed.
 */
export function getRelatedServices(slug: string, limit: number = 3): Service[] {
  const currentService = services.find((s) => s.slug === slug);
  if (!currentService) return [];

  const explicitRelated = (currentService.relatedServiceSlugs || [])
    .map((relSlug) =>
      services.find((s) => s.status === 'published' && s.slug === relSlug)
    )
    .filter((s): s is Service => Boolean(s));

  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }

  // Fallback: pick other services in the same category
  const fallback = services.filter(
    (s) =>
      s.status === 'published' &&
      s.categorySlug === currentService.categorySlug &&
      s.slug !== slug &&
      !explicitRelated.some((item) => item.slug === s.slug)
  );

  return [...explicitRelated, ...fallback].slice(0, limit);
}

/**
 * Search published services by text query and optional category filter.
 */
export function searchServices(
  query: string,
  categorySlug?: string
): Service[] {
  const normalizedQuery = query.trim().toLowerCase();

  return services.filter((service) => {
    if (service.status !== 'published') return false;

    if (categorySlug && service.categorySlug !== categorySlug) {
      return false;
    }

    if (!normalizedQuery) return true;

    const matchesName = service.name.toLowerCase().includes(normalizedQuery);
    const matchesShortDesc = service.shortDescription
      .toLowerCase()
      .includes(normalizedQuery);
    const matchesIncludes = (service.includes || []).some((inc) =>
      inc.toLowerCase().includes(normalizedQuery)
    );
    const matchesDeliverables = (service.deliverables || []).some((del) =>
      del.toLowerCase().includes(normalizedQuery)
    );

    return (
      matchesName || matchesShortDesc || matchesIncludes || matchesDeliverables
    );
  });
}
