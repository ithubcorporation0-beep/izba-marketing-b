import { serviceCategories, getCategoryDetailBySlug } from './services';
import { CategoryDetail } from '@/types';

/**
 * 9 Main Service Categories
 * Re-exported from the unified master content file: `src/content/services.ts`.
 */
export const categories: CategoryDetail[] = serviceCategories;
export { getCategoryDetailBySlug };
