import { Service } from '@/types';
import { webSoftwareServices } from './services-data/web-software';
import { digitalMarketingServices } from './services-data/digital-marketing';
import { aiAutomationServices } from './services-data/ai-automation';
import { graphicDesignServices } from './services-data/graphic-design';
import { dataEntryServices } from './services-data/data-entry';
import { digitalProductsServices } from './services-data/digital-products';
import { videoProductionServices } from './services-data/video-production';
import { itSupportServices } from './services-data/it-support';
import { educationOfficeServices } from './services-data/education-office';

/**
 * COMPLETE SERVICE DIRECTORY (90 Services)
 * Exactly as named in PRD Section 6 across 9 categories (10 services each).
 *
 * NOTE FOR WEBSITE OWNER:
 * All 90 services are currently set to status: "published" for full catalog initial display.
 * The owner will confirm later which offerings are active. You can toggle any service
 * between "published", "draft", or "archived" in their respective category file under
 * src/content/services-data/ without touching page templates.
 */
export const services: Service[] = [
  ...webSoftwareServices,
  ...digitalMarketingServices,
  ...aiAutomationServices,
  ...graphicDesignServices,
  ...dataEntryServices,
  ...digitalProductsServices,
  ...videoProductionServices,
  ...itSupportServices,
  ...educationOfficeServices,
];
