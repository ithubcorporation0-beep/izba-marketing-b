import { categories } from '../src/content/categories';
import { services } from '../src/content/services';
import { featuredServices } from '../src/content/featured';

/**
 * Content Validation Script (npm run check:content)
 *
 * Verifies:
 * 1. Exact count of categories (9).
 * 2. Exact count of services (90, with 10 per category).
 * 3. No duplicate slugs across categories or services.
 * 4. Every service points to a valid category slug.
 * 5. Every relatedServiceSlug resolves to an existing service.
 * 6. All featured services map to valid services or categories.
 */

function runValidation() {
  console.log('🔍 Running content validation check...\n');
  const errors: string[] = [];

  // 1. Check Category Count
  console.log(`Checking categories count: ${categories.length} found.`);
  if (categories.length !== 9) {
    errors.push(
      `Expected exactly 9 categories, but found ${categories.length}.`
    );
  }

  // 2. Check Service Count
  console.log(`Checking services count: ${services.length} found.`);
  if (services.length !== 90) {
    errors.push(`Expected exactly 90 services, but found ${services.length}.`);
  }

  // 3. Check for Duplicate Category Slugs
  const categorySlugs = new Set<string>();
  for (const cat of categories) {
    if (categorySlugs.has(cat.slug)) {
      errors.push(`Duplicate category slug found: "${cat.slug}".`);
    }
    categorySlugs.add(cat.slug);
  }

  // 4. Check for Duplicate Service Slugs
  const serviceSlugs = new Set<string>();
  for (const service of services) {
    if (serviceSlugs.has(service.slug)) {
      errors.push(`Duplicate service slug found: "${service.slug}".`);
    }
    serviceSlugs.add(service.slug);
  }

  // 5. Check Category Distribution (exactly 10 services per category)
  for (const cat of categories) {
    const categoryServices = services.filter(
      (s) => s.categorySlug === cat.slug
    );
    console.log(
      `  • ${cat.name} (${cat.slug}): ${categoryServices.length} services`
    );
    if (categoryServices.length !== 10) {
      errors.push(
        `Category "${cat.name}" (${cat.slug}) has ${categoryServices.length} services (expected exactly 10).`
      );
    }
  }

  // 6. Check Service Foreign Keys and Related Slugs
  for (const service of services) {
    // Check category link
    if (!categorySlugs.has(service.categorySlug)) {
      errors.push(
        `Service "${service.name}" (${service.slug}) references invalid categorySlug: "${service.categorySlug}".`
      );
    }

    // Check relatedServiceSlugs
    for (const relSlug of service.relatedServiceSlugs) {
      if (!serviceSlugs.has(relSlug)) {
        errors.push(
          `Service "${service.name}" (${service.slug}) references missing relatedServiceSlug: "${relSlug}".`
        );
      }
    }
  }

  // 7. Check Featured Services Mapping
  for (const featured of featuredServices) {
    if (featured.targetType === 'service') {
      if (!serviceSlugs.has(featured.slug)) {
        errors.push(
          `Featured service "${featured.displayName}" references missing service slug: "${featured.slug}".`
        );
      }
    } else if (featured.targetType === 'category') {
      if (!categorySlugs.has(featured.slug)) {
        errors.push(
          `Featured category "${featured.displayName}" references missing category slug: "${featured.slug}".`
        );
      }
    }
  }

  // Report Results
  console.log('\n----------------------------------------');
  if (errors.length > 0) {
    console.error(`❌ Validation FAILED with ${errors.length} error(s):\n`);
    errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
    console.log('----------------------------------------\n');
    process.exit(1);
  } else {
    console.log('✅ Content Validation PASSED!');
    console.log(`   - 9 Categories verified (100% valid)`);
    console.log(`   - 90 Services verified (10 per category)`);
    console.log(`   - All slugs and foreign keys verified without errors.`);
    console.log('----------------------------------------\n');
    process.exit(0);
  }
}

runValidation();
