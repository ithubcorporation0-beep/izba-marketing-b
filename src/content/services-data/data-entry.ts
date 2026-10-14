import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We review the source data, required output formats, timeline, and privacy requirements.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We create data entry templates, validation rules, sample benchmark tests, and turnaround schedules.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our team executes the data operations with double-entry checks, verification scripts, and accuracy reviews.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We deliver clean, formatted spreadsheets and databases, conduct quality audits, and securely dispose of temporary records.',
  },
];

export const dataEntryServices: Service[] = [
  {
    id: 'data-entry-services',
    name: 'Data Entry Services',
    title: 'Data Entry Services',
    slug: 'data-entry-services',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Accurate, confidential manual and automated data entry into spreadsheets, databases, and business software.',
    description: [
      'Maintaining accurate business records is critical for sound operational reporting. Our Data Entry Services handle large volumes of administrative data processing with high precision and confidentiality.',
      'We input information from physical receipts, invoices, forms, handwritten notes, or scanned records directly into your designated database, CRM, or spreadsheets.',
      'All projects undergo spot-checking and systematic validation rules to eliminate typographical errors, duplicates, and missing values.',
    ],
    includes: [
      'High-speed manual and OCR-assisted data input',
      'Format standardization across customer records and transactions',
      'Quality assurance review with dual-verification checks',
      'Strict client non-disclosure agreement (NDA) safeguards',
      'Delivery in Excel, Google Sheets, CSV, or direct database entry',
    ],
    deliverables: [
      'Completed, validated spreadsheet or database records',
      'Data error reconciliation and exception log',
      'Project completion report with accuracy metrics',
      'Secure deletion confirmation of source document copies',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'How do you ensure our sensitive customer data remains secure?',
        answer:
          'All team members operate under signed non-disclosure agreements (NDAs) using encrypted file storage and access-restricted environments.',
      },
      {
        question: 'What is your typical accuracy rate for data entry?',
        answer:
          'We maintain a >99.5% accuracy standard by applying automated spreadsheet validation formulas and secondary peer reviews on completed batches.',
      },
    ],
    relatedServiceSlugs: [
      'data-cleaning-and-formatting',
      'excel-google-sheets-management',
      'virtual-assistant-services',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Professional Data Entry Services — IZBA Marketing agency',
    seoDescription:
      'Accurate, confidential data entry services for businesses. Fast turnaround, quality verification, and secure spreadsheet management.',
  },
  {
    id: 'data-collection',
    name: 'Data Collection',
    title: 'Data Collection',
    slug: 'data-collection',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Systematic gathering of business directories, market intelligence, contact information, and public datasets.',
    description: [
      'Having comprehensive, up-to-date market information enables sales teams and analysts to make informed commercial decisions. Our Data Collection service gathers public business intelligence systematically.',
      'We aggregate public contact details, industry directory listings, commercial pricing benchmarks, and product specifications from verified sources across the web.',
      'Data is compiled into structured spreadsheets with categorized columns, verified contact fields, and source reference links.',
    ],
    includes: [
      'Public business directory research and aggregation',
      'Contact intelligence gathering (company, phone, email, website)',
      'Product specifications and market pricing collection',
      'Deduplication and format standardization',
      'Compliance with public data collection best practices',
    ],
    deliverables: [
      'Structured dataset in Excel or Google Sheets format',
      'Source attribution and verification timestamp column',
      'Data dictionary explaining column fields and metrics',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you collect private or protected personal data?',
        answer:
          'No. We collect only publicly available commercial information and public business directories in full compliance with online privacy regulations.',
      },
      {
        question: 'Can you verify that collected email addresses exist?',
        answer:
          'Yes. We pass collected business emails through verification tools to filter out non-existent domains and inactive inboxes.',
      },
    ],
    relatedServiceSlugs: [
      'web-research',
      'data-entry-services',
      'lead-generation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'B2B Data Collection Services — IZBA Marketing agency',
    seoDescription:
      'Systematic data collection for business intelligence. Structured aggregation of public market data, contact lists, and commercial directories.',
  },
  {
    id: 'web-research',
    name: 'Web Research',
    title: 'Web Research',
    slug: 'web-research',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'In-depth online research on competitors, market trends, suppliers, and industry benchmark reports.',
    description: [
      'Thorough research provides the evidence needed to launch products, evaluate suppliers, or understand competitive dynamics. Our Web Research service provides structured investigation into specific business topics.',
      'We sift through industry reports, regulatory filings, supplier catalogs, competitor pricing pages, and news archives to extract actionable insights.',
      'Findings are organized into clear executive briefing documents and comparative spreadsheets, saving your leadership team dozens of hours of manual browsing.',
    ],
    includes: [
      'Competitor feature, pricing, and service comparison matrices',
      'Supplier and vendor sourcing research with credential verification',
      'Industry trend synthesis and regulatory update tracking',
      'Academic and market report summarization',
      'Source link verification and bibliography compilation',
    ],
    deliverables: [
      'Executive research summary report (PDF/Word)',
      'Comparative data matrix in Excel/Google Sheets',
      'Annotated links and source reference documentation',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you research international suppliers or vendors?',
        answer:
          'Yes. We conduct global online research across international supplier directories, trade databases, and cross-border vendor reviews.',
      },
      {
        question: 'How do you ensure the information is reliable?',
        answer:
          'We cross-reference multiple primary and secondary sources, noting verification timestamps and flagging any conflicting information clearly.',
      },
    ],
    relatedServiceSlugs: [
      'data-collection',
      'online-research-assistance',
      'virtual-assistant-services',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Online Web Research & Competitor Analysis — IZBA Marketing agency',
    seoDescription:
      'In-depth web research for business leaders. Competitor benchmarking, vendor discovery, market intelligence, and structured data summaries.',
  },
  {
    id: 'data-cleaning-and-formatting',
    name: 'Data Cleaning and Formatting',
    title: 'Data Cleaning and Formatting',
    slug: 'data-cleaning-and-formatting',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Standardize messy databases, remove duplicates, fix formatting errors, and validate critical records.',
    description: [
      'Messy data filled with inconsistent capitalization, broken phone numbers, missing postal codes, and duplicate contacts degrades CRM efficiency and email deliverability.',
      'Our Data Cleaning and Formatting service audits your existing spreadsheets or databases, identifying and repairing anomalies systematically.',
      'We standardize phone number formats (+1 international notation), validate email syntaxes, trim hidden whitespace, and merge duplicate customer profiles accurately.',
    ],
    includes: [
      'Duplicate identification, matching, and deduplication',
      'Name, address, and phone number standardization (e.g. E.164 format)',
      'Correction of corrupted character encoding and typographical errors',
      'Splitting combined fields (e.g. separating Full Name into First and Last)',
      'Missing data imputation or flagging for manual review',
    ],
    deliverables: [
      'Cleaned, standardized dataset in preferred format (CSV/XLSX)',
      'Data cleaning log showing total records altered, merged, or removed',
      'Standardized schema template for future clean data entry',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Will our original records be preserved in case we need them?',
        answer:
          'Yes. We always maintain an untouched archive copy of your original dataset before initiating any cleaning or transformation scripts.',
      },
      {
        question:
          'Can you clean large datasets with tens of thousands of rows?',
        answer:
          'Yes. We utilize automated Python and regex cleaning scripts combined with manual spot-checking to handle datasets of any scale efficiently.',
      },
    ],
    relatedServiceSlugs: [
      'data-entry-services',
      'excel-google-sheets-management',
      'database-design-and-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Data Cleaning & Formatting Services — IZBA Marketing agency',
    seoDescription:
      'Professional data cleaning and deduplication. Clean messy spreadsheets, fix formatting errors, and standardize customer databases.',
  },
  {
    id: 'excel-google-sheets-management',
    name: 'Excel & Google Sheets Management',
    title: 'Excel & Google Sheets Management',
    slug: 'excel-google-sheets-management',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Custom formulas, pivot tables, automated dashboard views, and Google Sheets App Script macros.',
    description: [
      'Spreadsheets power daily operations in countless businesses, but poorly structured sheets quickly become slow, fragile, and difficult to interpret.',
      'Our Excel & Google Sheets Management service builds automated, intuitive workbook models with dynamic formulas (XLOOKUP, INDEX/MATCH, ARRAYFORMULA), conditional formatting, and pivot summaries.',
      'We create executive dashboard views that automatically aggregate raw data sheets into clean charts, KPI scorecards, and interactive filter controls.',
    ],
    includes: [
      'Advanced formula construction (XLOOKUP, LAMBDA, dynamic arrays)',
      'Pivot table summary reports and interactive slicers',
      'Google Apps Script or Excel VBA automation for routine tasks',
      'Data validation dropdowns and cell input protection rules',
      'Visual chart and dashboard scorecard creation',
    ],
    deliverables: [
      'Organized, formula-optimized Excel workbook (.xlsx) or Google Sheet',
      'Automated script or macro documentation if custom logic was used',
      'User guide explaining how to enter new raw records without breaking formulas',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you repair a broken Excel formula that is returning errors?',
        answer:
          'Yes. We troubleshoot broken calculations, circular reference warnings, and #N/A / #VALUE errors to restore formula integrity.',
      },
      {
        question: 'Can Google Sheets update automatically from external forms?',
        answer:
          'Yes. We can link Google Sheets to Google Forms, website webhooks, or external software via App Scripts for real-time data sync.',
      },
    ],
    relatedServiceSlugs: [
      'data-cleaning-and-formatting',
      'data-entry-services',
      'business-process-automation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Excel & Google Sheets Management — IZBA Marketing agency',
    seoDescription:
      'Expert Excel and Google Sheets consulting. Advanced formulas, automated dashboards, pivot summaries, and custom Apps Script workflows.',
  },
  {
    id: 'pdf-to-word-excel-conversion',
    name: 'PDF to Word/Excel Conversion',
    title: 'PDF to Word/Excel Conversion',
    slug: 'pdf-to-word-excel-conversion',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Accurate conversion of scanned PDFs, bank statements, and tables into fully editable Word and Excel documents.',
    description: [
      'Automated online PDF converters often scramble tables, misalign numbers, and create uneditable text boxes. Our PDF to Word/Excel Conversion service guarantees clean, fully editable formatting.',
      'We extract tables, multi-column reports, scanned invoices, financial statements, and contracts from read-only PDF files into native Microsoft Word and Excel files.',
      'Numbers are converted into actual numeric cells rather than text images, allowing you to run formulas and calculations immediately.',
    ],
    includes: [
      'High-accuracy Optical Character Recognition (OCR) processing',
      'Table alignment and cell structure reconstruction in Excel',
      'Font matching, margins, and header/footer alignment in Word',
      'Manual line-by-line verification against original scanned pages',
      'Batch processing for multi-page documents (100+ pages)',
    ],
    deliverables: [
      'Clean editable Microsoft Word (.docx) or Excel (.xlsx) file',
      'Matching searchable PDF document with text layer',
      'Side-by-side reconciliation check on financial tables',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you convert handwritten PDFs into Word?',
        answer:
          'Yes, provided the handwriting is reasonably legible. We manually transcribe and review handwritten notes and forms into clean digital text.',
      },
      {
        question:
          'Are numbers in converted Excel tables formatted for formulas?',
        answer:
          'Yes. We format numbers as actual numeric values so mathematical SUM, AVERAGE, and accounting formulas work immediately without formatting errors.',
      },
    ],
    relatedServiceSlugs: [
      'pdf-editing-and-formatting',
      'document-formatting',
      'data-entry-services',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'PDF to Word & Excel Conversion Services — IZBA Marketing agency',
    seoDescription:
      'Accurate PDF conversion to Word and Excel. Flawless table extraction, financial statement recreation, and searchable document formats.',
  },
  {
    id: 'copy-paste-tasks',
    name: 'Copy-Paste Tasks',
    title: 'Copy-Paste Tasks',
    slug: 'copy-paste-tasks',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'High-volume manual copying, pasting, and content migration across disparate internal systems and web portals.',
    description: [
      'When legacy software lacks API integration, moving data between portals requires meticulous manual copying and pasting. Our Copy-Paste Tasks service handles high-volume content migrations reliably.',
      'Our team moves information from old websites, internal intranets, email archives, or PDF files into new databases, CRMs, or CMS fields with strict attention to detail.',
      'We follow documented field-mapping protocols, ensuring every snippet, image link, or record lands in its exact destination field.',
    ],
    includes: [
      'System-to-system manual data migration and field population',
      'Copying and formatting content from legacy websites to new CMS platforms',
      'Image asset downloading, renaming, and uploading',
      'Quality checklist verification on every transferred record',
      'Progress tracking updates and daily batch completions',
    ],
    deliverables: [
      'Fully migrated database, CMS, or application records',
      'Migration audit log with source and destination URLs',
      'Final completion checklist verified by project supervisor',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you copy content directly into our custom CMS or backend?',
        answer:
          'Yes. We work directly within your authenticated web admin or backend portal following your exact operational instructions.',
      },
      {
        question: 'How do you prevent missed fields or copy errors?',
        answer:
          'We use dual-monitor verification setups and a structured checklist to ensure each field is copied, pasted, and validated against the source.',
      },
    ],
    relatedServiceSlugs: [
      'data-entry-services',
      'product-listing-management',
      'document-formatting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Copy-Paste & Data Migration Services — IZBA Marketing agency',
    seoDescription:
      'Reliable manual copy-paste tasks and content migration. Move data across portals, websites, and CRMs with 100% accuracy and strict quality checks.',
  },
  {
    id: 'product-listing-management',
    name: 'Product Listing Management',
    title: 'Product Listing Management',
    slug: 'product-listing-management',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Upload, categorize, and maintain product listings on Shopify, WooCommerce, Amazon, and eBay.',
    description: [
      'Managing a growing e-commerce catalog requires ongoing attention to product titles, SKU codes, pricing tiers, variant inventory, and descriptive specifications.',
      'Our Product Listing Management service handles catalog additions, inventory updates, image cropping, and category tagging across major online shopping platforms.',
      'We format titles and bullet points to match platform marketplace search guidelines, helping shoppers discover your products easily.',
    ],
    includes: [
      'Product creation with titles, descriptions, and SKU mapping',
      'Variant configuration (sizes, colors, materials, prices)',
      'Product image resizing, background removal, and gallery order',
      'Category, collection, and search tag optimization',
      'Bulk inventory spreadsheet imports (CSV/XLSX)',
    ],
    deliverables: [
      'Live, published product listings on your store platform',
      'Master product inventory spreadsheet with mapped image links',
      'Listing error report and out-of-stock reconciliation log',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Which e-commerce platforms do you support for product listing?',
        answer:
          'We manage listings across Shopify, WooCommerce, Amazon Seller Central, eBay, Etsy, Walmart, and custom e-commerce backends.',
      },
      {
        question: 'Can you write product descriptions as part of the listing?',
        answer:
          'Yes. We can craft clear, benefit-driven product descriptions and bullet points that highlight key product specifications.',
      },
    ],
    relatedServiceSlugs: [
      'ecommerce-website-development',
      'digital-product-store-management',
      'data-entry-services',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'E-commerce Product Listing Management — IZBA Marketing agency',
    seoDescription:
      'Product listing and catalog management for Shopify, WooCommerce, and Amazon. Variant setup, image optimization, and accurate SKU mapping.',
  },
  {
    id: 'document-formatting',
    name: 'Document Formatting',
    title: 'Document Formatting',
    slug: 'document-formatting',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Format corporate reports, proposals, user manuals, and contracts with consistent typography, margins, and tables.',
    description: [
      'Inconsistently formatted business documents look unprofessional and diminish client confidence. Our Document Formatting service transforms messy drafts into cohesive publications.',
      'We configure proper style hierarchies in Microsoft Word or Google Docs: consistent heading styles, paragraph leading, page numbers, dynamic tables of contents, and branded header/footer artwork.',
      'Tables, callout boxes, and figures are aligned neatly to ensure that printed copies and shared PDFs reflect executive polish.',
    ],
    includes: [
      'Corporate style sheet application (fonts, colors, line spacing)',
      'Dynamic Table of Contents (TOC) and List of Figures creation',
      'Header, footer, and section break formatting (different first page/odd-even)',
      'Table restyling, column alignment, and border cleanup',
      'Conversion to clean, bookmarked, accessible PDF files',
    ],
    deliverables: [
      'Fully formatted Microsoft Word (.docx) document with template styles',
      'Publication-quality PDF with interactive document bookmarks',
      'Reusable Word template (.dotx) for future internal reports',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you work with complex documents over 100 pages long?',
        answer:
          'Yes. We specialize in long-form technical reports, policy manuals, RFP bids, and academic dissertations with multiple sections.',
      },
      {
        question: 'Will the Table of Contents update automatically?',
        answer:
          'Yes. We build dynamic Tables of Contents mapped to native Word heading styles so you can update page numbers with a single click.',
      },
    ],
    relatedServiceSlugs: [
      'document-and-report-formatting',
      'pdf-editing-and-formatting',
      'pdf-to-word-excel-conversion',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Professional Document Formatting Services — IZBA Marketing agency',
    seoDescription:
      'Professional formatting for corporate reports, proposals, and manuals in Microsoft Word and PDF. Dynamic tables of contents, clean styles, and executive polish.',
  },
  {
    id: 'virtual-assistant-services',
    name: 'Virtual Assistant Services',
    title: 'Virtual Assistant Services',
    slug: 'virtual-assistant-services',
    categorySlug: 'data-entry-virtual-assistance',
    shortDescription:
      'Reliable remote administrative assistance for calendar management, customer replies, spreadsheet updates, and office tasks.',
    description: [
      'Busy entrepreneurs and executives lose hours every day to routine administrative tasks. Our Virtual Assistant Services provide dedicated remote support to keep operations running smoothly.',
      'We assist with calendar scheduling, customer inquiry triage, web research, document drafting, data entry, and CRM record upkeep.',
      'You receive dependable, communicative assistance following documented standard operating procedures (SOPs), giving you time back to focus on high-level growth.',
    ],
    includes: [
      'Inbox triage, email drafting, and priority flag management',
      'Calendar scheduling and meeting coordination across timezones',
      'Spreadsheet updates and CRM contact data maintenance',
      'Travel itinerary research and meeting room booking',
      'Vendor follow-up and basic customer inquiry responses',
    ],
    deliverables: [
      'Daily/weekly task completion log and summary updates',
      'Clean inbox and organized calendar schedules',
      'Standard Operating Procedure (SOP) documentation for repeated tasks',
      'Direct communication channel via Slack, WhatsApp, or email',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do we communicate with our virtual assistant?',
        answer:
          'We communicate through your preferred business channel, including Slack, Microsoft Teams, WhatsApp, Trello, or daily email check-ins.',
      },
      {
        question:
          'Can the virtual assistant work during specific business hours?',
        answer:
          'Yes. We coordinate operating hours to align with your primary business timezone (US, UK, Europe, or Asia-Pacific).',
      },
    ],
    relatedServiceSlugs: [
      'data-entry-services',
      'web-research',
      'excel-google-sheets-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Virtual Assistant Services for Businesses — IZBA Marketing agency',
    seoDescription:
      'Dedicated remote virtual assistant services. Calendar management, inbox organization, data entry, and dependable administrative support.',
  },
];
