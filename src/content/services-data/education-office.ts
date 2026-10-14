import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We discuss your document or training requirements, target audience, format needs, and deadline.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We establish visual structure, style guides, slide outlines, and formatting templates.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our team crafts the layouts, verifies typographic consistency, creates diagrams, and checks details.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We review drafts together, make adjustments, and deliver editable source files alongside print/PDF versions.',
  },
];

export const educationOfficeServices: Service[] = [
  {
    id: 'powerpoint-presentation-design',
    name: 'PowerPoint Presentation Design',
    title: 'PowerPoint Presentation Design',
    slug: 'powerpoint-presentation-design',
    categorySlug: 'education-office-services',
    shortDescription:
      'High-impact corporate slide decks, pitch decks, and webinar presentations custom-designed in PowerPoint.',
    description: [
      'A presentation full of cluttered bullet points and awkward clipart fails to engage audiences. Our PowerPoint Presentation Design service transforms raw ideas and notes into visually compelling slide stories.',
      'We restructure content into scannable visual slides, incorporating branded infographics, data visualization charts, clean typography, and purposeful iconography.',
      'All decks are built on native slide masters, allowing your team to edit text, swap photos, or add future slides seamlessly.',
    ],
    includes: [
      'Complete slide deck design in 16:9 widescreen format',
      'Data visualization: converting complex numbers into clear charts',
      'Custom vector iconography and diagram design',
      'Master slide template setup with branded color palettes',
      'Editable deliverable in PowerPoint (.pptx) and presentation PDF',
    ],
    deliverables: [
      'Fully editable PowerPoint master deck (.pptx)',
      'Presentation-ready PDF export',
      'Embedded font files and icon assets',
      'Speaker notes and slide transitions configuration',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you work from our existing rough PowerPoint slides?',
        answer:
          'Yes. Send us your rough draft or bulleted outline, and we will redesign every slide with executive visual polish.',
      },
      {
        question: 'Are the charts and graphs editable in Excel/PowerPoint?',
        answer:
          'Yes. All charts are linked to native PowerPoint data tables so you can edit numbers and update data series at any time.',
      },
    ],
    relatedServiceSlugs: [
      'presentation-templates',
      'ai-presentation-creation',
      'flyer-and-brochure-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom PowerPoint Presentation Design — IZBA Marketing agency',
    seoDescription:
      'Executive PowerPoint presentation design. Pitch decks, corporate slides, and webinar decks with custom charts and master templates.',
  },
  {
    id: 'document-and-report-formatting',
    name: 'Document and Report Formatting',
    title: 'Document and Report Formatting',
    slug: 'document-and-report-formatting',
    categorySlug: 'education-office-services',
    shortDescription:
      'Polish annual reports, corporate whitepapers, proposals, and manuals in Microsoft Word and InDesign.',
    description: [
      'Publishing a 50-page annual report or corporate proposal with inconsistent fonts, broken margins, and misaligned page numbers undermines professional credibility.',
      'Our Document and Report Formatting service establishes editorial hierarchy across long-form documents in Microsoft Word, Google Docs, or Adobe InDesign.',
      'We configure automated headers and footers, dynamic tables of contents, standardized table styling, and professional cover pages that give reports executive presence.',
    ],
    includes: [
      'Corporate typographic hierarchy (H1, H2, H3, body, quotes)',
      'Automated Table of Contents, List of Figures, and page numbering',
      'Header and footer configuration with chapter titles',
      'Standardized table formatting, callout boxes, and figure captions',
      'Print-ready prepress and digital bookmarked PDF export',
    ],
    deliverables: [
      'Editable Microsoft Word (.docx) or InDesign (.indd) file',
      'Interactive, bookmarked publication-ready PDF',
      'Reusable document template (.dotx) for future company reports',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'How do you handle complex multi-page tables across page breaks?',
        answer:
          'We configure repeating header rows, consistent column widths, and clean border styles so tables read seamlessly across page transitions.',
      },
      {
        question:
          'Can you include custom branded cover pages and divider tabs?',
        answer:
          'Yes. We design full-bleed cover pages, section dividers, and back covers that reflect your corporate visual identity.',
      },
    ],
    relatedServiceSlugs: [
      'document-formatting',
      'pdf-editing-and-formatting',
      'training-materials-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Corporate Document & Report Formatting — IZBA Marketing agency',
    seoDescription:
      'Executive formatting for annual reports, proposals, and whitepapers. Dynamic tables of contents, clean typography, and branded layouts.',
  },
  {
    id: 'resume-and-cv-design',
    name: 'Resume and CV Design',
    title: 'Resume and CV Design',
    slug: 'resume-and-cv-design',
    categorySlug: 'education-office-services',
    shortDescription:
      'Professional, ATS-friendly resume and executive CV designs crafted to showcase career achievements clearly.',
    description: [
      'In competitive hiring environments, recruiters spend an average of six seconds scanning an applicant’s resume. Our Resume and CV Design service crafts clean, scannable layouts that highlight your strongest accomplishments.',
      'We balance modern visual aesthetics with strict Applicant Tracking System (ATS) compatibility, avoiding non-standard columns or unreadable graphics that confuse automated job board parsers.',
      'Deliverables include editable Microsoft Word templates and polished PDFs formatted for both online application systems and in-person interviews.',
    ],
    includes: [
      'ATS-compliant single-column and dual-column layout options',
      'Typographic hierarchy highlighting job titles, dates, and metrics',
      'Matching cover letter template and references sheet',
      'Action-oriented bullet point structuring and formatting',
      'Export in editable Word (.docx) and high-resolution PDF',
    ],
    deliverables: [
      'Editable resume file in Microsoft Word (.docx) format',
      'High-resolution PDF formatted for printing or email',
      'Matching branded cover letter template',
      'ATS compatibility checklist and tips guide',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Will an ATS (Applicant Tracking System) be able to read this resume?',
        answer:
          'Yes. We use standard font encodings, clear heading tags, and clean text streams that parse accurately into corporate ATS software.',
      },
      {
        question: 'Can I easily update my job history later?',
        answer:
          'Yes. The primary file is delivered in standard Microsoft Word format, allowing you to add new jobs and skills at any time.',
      },
    ],
    relatedServiceSlugs: [
      'assignment-typing-and-formatting',
      'document-and-report-formatting',
      'business-card-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Professional Resume & CV Design (ATS-Friendly) — IZBA Marketing agency',
    seoDescription:
      'ATS-friendly resume and executive CV design. Scannable layouts, modern typography, matching cover letters, and editable Word files.',
  },
  {
    id: 'assignment-typing-and-formatting',
    name: 'Assignment Typing and Formatting',
    title: 'Assignment Typing and Formatting',
    slug: 'assignment-typing-and-formatting',
    categorySlug: 'education-office-services',
    shortDescription:
      'Academic paper formatting (APA, MLA, Harvard, Chicago) and accurate typing from handwritten or scanned notes.',
    description: [
      'Academic manuscripts, thesis dissertations, and research assignments must adhere to strict citation and formatting standards (APA 7th, MLA 9th, Chicago, or Harvard).',
      'Our Assignment Typing and Formatting service accurately transcribes handwritten or audio notes and aligns references, in-text citations, margins, and bibliographies according to official style manuals.',
      'We ensure title pages, abstract sections, running headers, and reference indentation comply with academic institution submission rules.',
    ],
    includes: [
      'Typing from handwritten, scanned, or recorded voice notes',
      'Academic style guide compliance (APA 7, MLA 9, Chicago, Harvard)',
      'Hanging indent reference lists and bibliography formatting',
      'Math equation and symbol formatting in Word Equation Editor',
      'Spell checking, grammar review, and margin alignment',
    ],
    deliverables: [
      'Properly formatted Microsoft Word document (.docx)',
      'Matching submission-ready PDF file',
      'Citation style verification checklist',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you write academic assignments for students?',
        answer:
          'No. To maintain academic integrity, we do not write assignments or essays. We provide formatting, typing from student drafts, and reference styling services only.',
      },
      {
        question: 'Which citation formats can you apply?',
        answer:
          'We support APA (6th & 7th edition), MLA (8th & 9th edition), Chicago Notes & Bibliography, Harvard, and IEEE technical formatting.',
      },
    ],
    relatedServiceSlugs: [
      'document-and-report-formatting',
      'online-research-assistance',
      'microsoft-office-services',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Academic Paper Typing & Formatting (APA/MLA) — IZBA Marketing agency',
    seoDescription:
      'Accurate typing and academic formatting in APA, MLA, Chicago, and Harvard styles. Reference lists, title pages, and clean Word formatting.',
  },
  {
    id: 'online-research-assistance',
    name: 'Online Research Assistance',
    title: 'Online Research Assistance',
    slug: 'online-research-assistance',
    categorySlug: 'education-office-services',
    shortDescription:
      'Assistance with literature searches, scholarly article retrieval, source verification, and structured data summaries.',
    description: [
      'Finding reliable academic papers, governmental statistics, and verified case studies requires disciplined search skills across scholarly repositories.',
      'Our Online Research Assistance service assists educators, researchers, and business analysts by locating peer-reviewed studies, aggregating datasets, and compiling annotated bibliographies.',
      'We organize findings with direct DOI links, publication dates, author credentials, and executive summaries of key conclusions.',
    ],
    includes: [
      'Search across academic databases (Google Scholar, PubMed, JSTOR, arXiv)',
      'Annotated bibliography compiling key findings and methodology summaries',
      'Data extraction from published reports and statistical tables',
      'Citation verification and DOI linking',
      'Topic overview briefings highlighting current consensus and debate',
    ],
    deliverables: [
      'Structured research summary document (Word/PDF)',
      'Annotated bibliography with live source links',
      'Folder of downloaded open-access PDF reference papers',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Do you provide research for business feasibility studies as well as academic topics?',
        answer:
          'Yes. We conduct research for academic background reviews as well as corporate market sizing and industry feasibility studies.',
      },
      {
        question:
          'Can you summarize 10-20 research papers on a specific topic?',
        answer:
          'Yes. We extract core hypotheses, sample sizes, findings, and conclusions into a single comparative spreadsheet or briefing document.',
      },
    ],
    relatedServiceSlugs: [
      'web-research',
      'assignment-typing-and-formatting',
      'training-materials-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Academic & Business Online Research Assistance — IZBA Marketing agency',
    seoDescription:
      'Professional research assistance and literature searches. Annotated bibliographies, scholarly source retrieval, and executive summaries.',
  },
  {
    id: 'educational-video-creation',
    name: 'Educational Video Creation',
    title: 'Educational Video Creation',
    slug: 'educational-video-creation',
    categorySlug: 'education-office-services',
    shortDescription:
      'Instructional video lessons, online course modules, screen-recorded tutorials, and voiceover walkthroughs.',
    description: [
      'Educational institutions, online course creators, and corporate HR departments need clear, engaging video materials to train students and employees.',
      'Our Educational Video Creation service produces step-by-step instructional lessons combining crystal-clear screen recordings, highlighted mouse clicks, animated key concepts, and professional voiceover.',
      'We break complex curriculum topics into digestible 3-to-7-minute learning modules designed for high comprehension and retention.',
    ],
    includes: [
      'Lesson script outline review and visual slide preparation',
      'High-definition software screen recording with cursor zooms and highlights',
      'Voiceover recording and audio cleanup (noise reduction, EQ)',
      'Chapter titles, quiz question pauses, and on-screen summary cards',
      'Export in LMS-compliant video formats (MP4 in 1080p, SCORM if needed)',
    ],
    deliverables: [
      'Completed educational video lesson files (MP4)',
      'Synchronized closed caption subtitle files (.srt)',
      'Accompanying slide deck and PDF student handout',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you produce videos for Learning Management Systems (LMS)?',
        answer:
          'Yes. We deliver standard MP4 video formats that upload directly into Teachable, Thinkific, Kajabi, Canvas, Moodle, or custom LMS platforms.',
      },
      {
        question:
          'Can you blur sensitive student or company data in screen recordings?',
        answer:
          'Yes. We apply motion-tracked privacy blurs over sensitive emails, passwords, student IDs, or proprietary internal data.',
      },
    ],
    relatedServiceSlugs: [
      'ai-explainer-videos',
      'training-materials-development',
      'youtube-video-editing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Educational Video Creation & Course Production — IZBA Marketing agency',
    seoDescription:
      'Instructional video production for e-learning and corporate training. Step-by-step screen tutorials, professional voiceovers, and student handouts.',
  },
  {
    id: 'training-materials-development',
    name: 'Training Materials Development',
    title: 'Training Materials Development',
    slug: 'training-materials-development',
    categorySlug: 'education-office-services',
    shortDescription:
      'Comprehensive employee onboarding handbooks, Standard Operating Procedures (SOPs), and training workbooks.',
    description: [
      'Effective corporate training requires structured documentation so new team members can learn company systems independently without constant supervision.',
      'Our Training Materials Development service creates clear Standard Operating Procedures (SOPs), employee onboarding workbooks, step-by-step software guides, and quick reference cards.',
      'We use visual screenshots, callout numbered arrows, checklist boxes, and concise instructions that make learning procedures straightforward.',
    ],
    includes: [
      'Process workflow discovery and step-by-step documentation',
      'Annotated screenshots with visual callout indicators',
      'Interactive PDF workbooks with fillable fields and checkboxes',
      'Standard Operating Procedure (SOP) template standardization',
      'Knowledge-check quiz questions and review exercise design',
    ],
    deliverables: [
      'Complete Training Manual or SOP document (Word and PDF)',
      'Interactive fillable PDF student workbook',
      'Quick-reference laminated cheat sheet (1-2 pages)',
      'Reusable corporate training document template',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you document procedures by watching our team work on a call?',
        answer:
          'Yes. We can record a demonstration of your workflow via Zoom or Teams, then transcribe, screenshot, and format it into a comprehensive step-by-step SOP.',
      },
      {
        question:
          'Are the training materials editable for future company updates?',
        answer:
          'Yes. We deliver editable source files in Microsoft Word or Canva so you can adjust screenshots and steps as internal software evolves.',
      },
    ],
    relatedServiceSlugs: [
      'document-and-report-formatting',
      'educational-video-creation',
      'microsoft-office-services',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Training Materials & SOP Development — IZBA Marketing agency',
    seoDescription:
      'Corporate training manuals, employee onboarding guides, and SOP documentation. Clear visual instructions, step-by-step screenshots, and fillable workbooks.',
  },
  {
    id: 'invoice-and-form-design',
    name: 'Invoice and Form Design',
    title: 'Invoice and Form Design',
    slug: 'invoice-and-form-design',
    categorySlug: 'education-office-services',
    shortDescription:
      'Custom branded invoices, purchase orders, estimate sheets, and fillable PDF forms with auto-calculations.',
    description: [
      'Sending generic, plain-text receipts or invoices to clients misses an opportunity to project professional credibility and make billing details clear.',
      'Our Invoice and Form Design service creates beautifully branded business stationery: invoices, purchase orders, quotes, work orders, and intake questionnaires.',
      'We also build interactive fillable PDF forms with digital signature fields, automated calculation formulas (subtotal, tax, and total), and responsive text boxes.',
    ],
    includes: [
      'Branded invoice and purchase order design matching company identity',
      'Interactive fillable PDF form fields (text boxes, dropdowns, checkboxes)',
      'Automated PDF calculation scripts (quantity x price = total)',
      'Digital signature field integration for paperless client signoff',
      'Editable Microsoft Excel / Word and print-ready PDF formats',
    ],
    deliverables: [
      'Interactive fillable PDF form with working calculation fields',
      'Editable Microsoft Word and Excel invoice templates',
      'Print-ready vector PDF for physical receipt pads',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can customers fill out and sign the form on mobile devices or computers?',
        answer:
          'Yes. Our interactive PDFs work on free Adobe Acrobat Reader, Apple Preview, and mobile PDF apps with digital signature support.',
      },
      {
        question:
          'Can the invoice template automatically calculate sales tax and total?',
        answer:
          'Yes. In both our Excel and interactive PDF templates, we embed calculation formulas that automatically compute line totals, tax, and the final grand total.',
      },
    ],
    relatedServiceSlugs: [
      'microsoft-office-services',
      'business-card-design',
      'document-and-report-formatting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom Invoice & Fillable PDF Form Design — IZBA Marketing agency',
    seoDescription:
      'Professional invoice, estimate, and fillable PDF form design. Automated calculation scripts, digital signatures, and branded company stationery.',
  },
  {
    id: 'microsoft-office-services',
    name: 'Microsoft Office Services',
    title: 'Microsoft Office Services',
    slug: 'microsoft-office-services',
    categorySlug: 'education-office-services',
    shortDescription:
      'Advanced Word templates, Excel automation, PowerPoint master themes, and Outlook email signature integration.',
    description: [
      'Microsoft Office remains the global foundation of corporate productivity, but few companies leverage its full power to automate daily work.',
      'Our Microsoft Office Services provide specialized configuration and design across Word, Excel, PowerPoint, and Outlook.',
      'We build locked corporate Word templates that prevent accidental font changes, develop automated Excel workbooks with macro automation, and install HTML email signatures across employee inboxes.',
    ],
    includes: [
      'Custom corporate template development for Word (.dotx) and PowerPoint (.potx)',
      'Excel formula modeling, pivot tables, and automated VBA macro scripts',
      'Cross-client responsive HTML email signatures for Outlook and webmail',
      'Document protection settings (editable fields with locked brand headers)',
      'Bulk mail-merge setup for letters, certificates, and email broadcasts',
    ],
    deliverables: [
      'Standardized Microsoft Office template suite (.dotx, .potx, .xltx)',
      'Cross-client compatible HTML email signature code and setup guide',
      'VBA macro or formula automation documentation',
      'Staff deployment walkthrough video',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you create an email signature that works in Outlook and mobile phones?',
        answer:
          'Yes. We code responsive HTML email signatures with hosted image assets that display cleanly across desktop Outlook, webmail, and iPhone Mail.',
      },
      {
        question: 'How do locked Word templates help our employees?',
        answer:
          'Locked templates protect your company logo, margins, and legal headers from accidental deletion while allowing staff to type in designated content areas.',
      },
    ],
    relatedServiceSlugs: [
      'excel-google-sheets-management',
      'powerpoint-presentation-design',
      'document-and-report-formatting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Microsoft Office Consulting & Template Design — IZBA Marketing agency',
    seoDescription:
      'Specialized Microsoft Office services. Custom Word templates, Excel macro automation, PowerPoint master decks, and Outlook HTML email signatures.',
  },
  {
    id: 'pdf-editing-and-formatting',
    name: 'PDF Editing and Formatting',
    title: 'PDF Editing and Formatting',
    slug: 'pdf-editing-and-formatting',
    categorySlug: 'education-office-services',
    shortDescription:
      'Direct PDF text corrections, page reordering, file compression, form field creation, and security permissions.',
    description: [
      'When you have an existing PDF file but have lost the original Word or design source document, updating prices, phone numbers, or dates can seem impossible.',
      'Our PDF Editing and Formatting service modifies read-only PDF files directly using professional desktop prepress tools without degrading document layout.',
      'We update text with exact matching fonts, replace images, split or combine pages, compress file size for email attachments, and add password security permissions.',
    ],
    includes: [
      'Direct text editing, typo correction, and font-matched revisions in existing PDFs',
      'Splitting, merging, rotating, and re-indexing multi-page documents',
      'File size compression optimization (reducing 50MB files to under 5MB for email)',
      'Interactive form field additions (fillable text, check boxes, signatures)',
      'PDF security permissions (encryption, password protection, print restrictions)',
    ],
    deliverables: [
      'Revised, fully verified PDF file with requested text/image edits applied',
      'Compressed web-optimized PDF copy for fast emailing and web downloads',
      'Audit notes detailing every modified page and field',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you match the exact font in an old PDF if we don’t know what font was used?',
        answer:
          'Yes. We inspect the embedded font metadata in the PDF and match the exact typeface, weight, kerning, and color.',
      },
      {
        question:
          'Can you reduce a large PDF so it can be sent as an email attachment?',
        answer:
          'Yes. We downsample oversized images and remove redundant document metadata to drastically compress file size while keeping text and diagrams crisp.',
      },
    ],
    relatedServiceSlugs: [
      'pdf-to-word-excel-conversion',
      'document-formatting',
      'invoice-and-form-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'PDF Editing & Document Formatting Services — IZBA Marketing agency',
    seoDescription:
      'Direct PDF editing, font-matched text revisions, file compression, and interactive form fields. Modify read-only PDFs without losing layout quality.',
  },
];
