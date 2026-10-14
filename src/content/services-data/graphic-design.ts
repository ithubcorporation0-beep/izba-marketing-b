import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We discuss your brand personality, target audience, aesthetic preferences, and project deliverables.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We assemble mood boards, color concepts, typographic pairings, and rough structural sketches.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our designers produce high-resolution vector and raster assets with careful attention to detail.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We present draft concepts, incorporate your feedback, and deliver production-ready print and digital files.',
  },
];

export const graphicDesignServices: Service[] = [
  {
    id: 'logo-design',
    name: 'Logo Design',
    title: 'Logo Design',
    slug: 'logo-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Distinctive, memorable vector logo marks crafted to represent your business across digital and print mediums.',
    description: [
      'Your logo is often the very first visual element prospective clients associate with your company. Our Logo Design service crafts unique, versatile marks that communicate your values and industry position clearly.',
      'We avoid generic stock icons and AI template cliches. Every concept is developed from structured discovery, exploring typographic balance, icon geometry, and practical scalability.',
      'Deliverables include vector master files, transparent formats, horizontal and stacked layouts, and dark/light color variations so your mark reproduces crisply everywhere.',
    ],
    includes: [
      '3 distinct logo design concepts based on creative brief',
      'Iterative refinement rounds on chosen concept',
      'Full color, black & white, and reverse monochrome versions',
      'Vector master formats (AI, EPS, SVG) and web formats (PNG, JPG)',
      'Favicon and social media profile avatar exports',
    ],
    deliverables: [
      'Master vector logo package (AI, EPS, SVG)',
      'High-resolution PNGs with transparent backgrounds',
      'One-page logo usage guideline (color codes and font pairing)',
      'Full commercial ownership rights transfer',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Will the logo look sharp on both business cards and large banners?',
        answer:
          'Yes. We deliver vector files (EPS/SVG) that scale infinitely without pixelation or loss of quality.',
      },
      {
        question: 'Do I own the copyright to the finished logo?',
        answer:
          'Yes. Upon final approval and project completion, you retain 100% full intellectual property ownership of the logo design.',
      },
    ],
    relatedServiceSlugs: [
      'brand-identity-design',
      'graphic-design',
      'business-card-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom Logo Design Services — IZBA Marketing agency',
    seoDescription:
      'Professional logo design for companies and startups. Memorable vector marks, versatile formats, and full commercial copyright ownership.',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    title: 'Graphic Design',
    slug: 'graphic-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Comprehensive visual design services for digital marketing campaigns, web assets, and corporate print collaterals.',
    description: [
      'Our Graphic Design service delivers polished, cohesive visual assets that elevate your marketing materials and strengthen brand recognition across touchpoints.',
      'Whether you require custom illustrations, advertising graphics, annual reports, or event signage, our designers apply disciplined typography, balanced whitespace, and purposeful color harmony.',
      'We deliver all assets in web-ready and print-ready formats adhering to color profiles (CMYK vs. RGB) and resolution specifications.',
    ],
    includes: [
      'Custom graphic asset creation for print and digital channels',
      'Color management and CMYK/RGB profile calibration',
      'Typography pairing and layout composition',
      'High-resolution source files (Adobe Illustrator / Photoshop / Figma)',
      'Revisions based on client editorial review',
    ],
    deliverables: [
      'Production-ready artwork files (PDF, PNG, JPG, SVG)',
      'Original layered source files (AI/PSD/FIG)',
      'Web-optimized exports with proper compression',
      'Asset usage and printing specification guide',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you work within our existing company brand guidelines?',
        answer:
          'Yes. We strictly adhere to your established brand books, color codes (HEX/Pantone), fonts, and voice guidelines.',
      },
      {
        question: 'Do you prepare files with print bleed and trim marks?',
        answer:
          'Yes. All print-destined designs include industry-standard 0.125-inch bleeds, crop marks, and 300 DPI resolution settings.',
      },
    ],
    relatedServiceSlugs: [
      'logo-design',
      'brand-identity-design',
      'banner-cover-design',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Professional Graphic Design Services — IZBA Marketing agency',
    seoDescription:
      'Creative graphic design services for digital and print. Branded visuals, marketing graphics, and custom corporate collateral.',
  },
  {
    id: 'brand-identity-design',
    name: 'Brand Identity Design',
    title: 'Brand Identity Design',
    slug: 'brand-identity-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Complete corporate visual identity systems including color palettes, typography rules, and comprehensive style guides.',
    description: [
      'A successful brand is much more than just a logo; it is an integrated visual language that builds trust whenever someone encounters your business.',
      'Our Brand Identity Design service develops comprehensive brand systems: primary and secondary logos, curated color palettes, typography hierarchies, icon treatments, and image styling rules.',
      'We compile these standards into a practical Brand Guidelines manual that ensures internal teams and external contractors produce cohesive assets.',
    ],
    includes: [
      'Primary logo, secondary badge, and sub-mark designs',
      'Brand color palette with HEX, RGB, CMYK, and Pantone values',
      'Typography hierarchy (primary heading, body, and accent fonts)',
      'Brand pattern, iconography, and photography style direction',
      'Complete digital Brand Guidelines document (PDF)',
    ],
    deliverables: [
      'Comprehensive Brand Style Guide (PDF)',
      'Master logo asset suite across all color configurations',
      'Font files (licensed or Google Font alternatives)',
      'Stationery mockups demonstrating real-world brand application',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What is included in the Brand Guidelines document?',
        answer:
          'The guide covers logo spacing and minimum sizing, color breakdowns, font pairings, do’s and don’ts, icon styles, and sample layouts.',
      },
      {
        question: 'How long does a brand identity project take?',
        answer:
          'A full corporate identity system typically takes 3 to 5 weeks from initial mood boarding to final guideline delivery.',
      },
    ],
    relatedServiceSlugs: [
      'logo-design',
      'graphic-design',
      'business-card-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Brand Identity Design & Brand Guidelines — IZBA Marketing agency',
    seoDescription:
      'Complete corporate brand identity design. Logo systems, typography rules, color palettes, and comprehensive brand guideline manuals.',
  },
  {
    id: 'social-media-post-design',
    name: 'Social Media Post Design',
    title: 'Social Media Post Design',
    slug: 'social-media-post-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'High-impact square, vertical, and carousel graphic templates tailored for LinkedIn, Instagram, and Facebook.',
    description: [
      'In fast-scrolling social media feeds, clear visuals with bold typography stop users from scrolling past your content. Our Social Media Post Design service delivers branded post templates and customized graphics.',
      'We design carousels, quotation cards, infographic summaries, and announcement banners that present your business news clearly.',
      'Graphics are built in optimal canvas dimensions for each target platform to ensure images are not cropped awkwardly in mobile feeds.',
    ],
    includes: [
      'Platform-specific canvas sizing (1080x1080, 1080x1350, 1080x1920)',
      'Multi-slide carousel design with seamless slide continuity',
      'Branded color themes and readable mobile font sizes',
      'Canva template setup or Adobe source file handoff',
      'Content-ready batch packages (10, 20, or 30 graphics)',
    ],
    deliverables: [
      'Exported high-res PNG/JPG graphics ready for posting',
      'Editable Canva or Figma template links',
      'Organized folder structure categorized by post format',
      'Stock image and icon asset library',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you provide editable templates in Canva?',
        answer:
          'Yes. We can deliver editable Canva templates so your internal team can update text while maintaining consistent brand styling.',
      },
      {
        question:
          'Do you design multi-slide carousels for LinkedIn and Instagram?',
        answer:
          'Yes. Carousel educational posts are one of our core formats and perform exceptionally well for B2B engagement.',
      },
    ],
    relatedServiceSlugs: [
      'social-media-marketing',
      'banner-cover-design',
      'youtube-thumbnail-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Social Media Post Design Services — IZBA Marketing agency',
    seoDescription:
      'Custom social media post and carousel design for LinkedIn, Instagram, and Facebook. Stand out in feeds with branded, mobile-optimized graphics.',
  },
  {
    id: 'youtube-thumbnail-design',
    name: 'YouTube Thumbnail Design',
    title: 'YouTube Thumbnail Design',
    slug: 'youtube-thumbnail-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Click-worthy, high-contrast YouTube video thumbnails engineered to improve click-through rates (CTR).',
    description: [
      'Your YouTube thumbnail is the single most decisive factor influencing whether a browsing viewer clicks your video. Our YouTube Thumbnail Design service applies visual hierarchy and contrast principles to maximize discoverability.',
      'We combine bold typography, expressive facial cutouts, branded color backdrops, and strategic focal points that communicate video topic instantly even on small mobile screens.',
      'We optimize colors and contrast specifically so thumbnails stand out against YouTube’s dark and light mode interfaces.',
    ],
    includes: [
      'High-contrast composition and focal point arrangement',
      'Expressive subject cutout, color grading, and edge lighting',
      'Bold, legible typography (3-5 words maximum for mobile scanning)',
      'A/B test thumbnail variant creation',
      'YouTube-compliant 1280x720 (16:9) PNG/JPG exports (< 2MB)',
    ],
    deliverables: [
      'Optimized thumbnail files in JPG and PNG format',
      'High-resolution layered PSD or Figma source file',
      'Alternate headline or color variant for A/B testing',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do thumbnails really affect YouTube video performance?',
        answer:
          'Yes. Higher click-through rates (CTR) signal viewer interest to the YouTube algorithm, leading to increased impressions and recommendations.',
      },
      {
        question: 'What materials do I need to provide for a thumbnail?',
        answer:
          'Provide your video title, a short concept summary, and high-resolution photos of the speaker or key subjects.',
      },
    ],
    relatedServiceSlugs: [
      'youtube-video-editing',
      'youtube-marketing',
      'banner-cover-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'YouTube Thumbnail Design — IZBA Marketing agency',
    seoDescription:
      'High-CTR YouTube thumbnail design. Bold typography, high-contrast compositions, and mobile-optimized visual hierarchy to grow channel views.',
  },
  {
    id: 'banner-cover-design',
    name: 'Banner & Cover Design',
    title: 'Banner & Cover Design',
    slug: 'banner-cover-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Professional header banners and profile covers for LinkedIn, Twitter, Facebook, YouTube, and website heroes.',
    description: [
      'When prospects visit your company LinkedIn profile, Facebook page, or YouTube channel, your header banner serves as a prominent digital billboard.',
      'Our Banner & Cover Design service crafts balanced headers that communicate your core value proposition clearly without being obscured by profile avatars.',
      'We ensure essential contact details and tagline text remain perfectly centered across desktop and mobile viewing dimensions.',
    ],
    includes: [
      'Platform safe-zone alignment (LinkedIn, X, Facebook, YouTube)',
      'Brand-consistent typography, icons, and hero photography',
      'Clear value proposition and website URL integration',
      'Responsive mobile safe-zone preview checks',
      'High-resolution JPG and PNG exports under platform file limits',
    ],
    deliverables: [
      'Optimized banner files for each requested platform',
      'Layered source files (PSD/Figma)',
      'Installation guide showing how to update profile headers',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Why do my current banners look cut off on phones?',
        answer:
          'Social platforms crop banners differently on mobile vs. desktop. We design using platform "safe zones" so important text is never clipped.',
      },
      {
        question: 'Can you design matching banners for multiple platforms?',
        answer:
          'Yes. We often create an aligned suite covering LinkedIn company page, personal profile, Twitter/X, and YouTube simultaneously.',
      },
    ],
    relatedServiceSlugs: [
      'social-media-post-design',
      'youtube-thumbnail-design',
      'brand-identity-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Banner & Social Cover Design — IZBA Marketing agency',
    seoDescription:
      'Professional header banners for LinkedIn, YouTube, Facebook, and Twitter. Safe-zone aligned, mobile-tested, and brand-consistent.',
  },
  {
    id: 'flyer-and-brochure-design',
    name: 'Flyer and Brochure Design',
    title: 'Flyer and Brochure Design',
    slug: 'flyer-and-brochure-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Print-ready bi-fold, tri-fold, and single-sheet marketing flyers and brochures for corporate presentations.',
    description: [
      'Physical printed collateral remains a powerful touchpoint at conferences, trade shows, client meetings, and point-of-sale displays.',
      'Our Flyer and Brochure Design service organizes complex service details, product specifications, and pricing matrices into elegant, scannable print layouts.',
      'We handle fold geometry, typography hierarchy, imagery placement, and strict CMYK prepress calibration to guarantee that printed copies look vibrant.',
    ],
    includes: [
      'Bi-fold, tri-fold, Z-fold, or single-page flyer layouts',
      'Prepress setup (CMYK color mode, 300 DPI, bleed margins)',
      'Infographic and bullet list layout for easy reading',
      'Interactive digital PDF version with clickable website links',
      'Commercial print vendor file coordination',
    ],
    deliverables: [
      'Print-ready PDF with bleed and crop marks',
      'Interactive web-optimized PDF for digital email distribution',
      'Layered InDesign or Illustrator source files',
      'Print specification sheet for your local or online printer',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you deliver a digital version to send over email?',
        answer:
          'Yes. We provide both a 300 DPI print-ready file and a lightweight interactive PDF with live clickable hyperlinks for email attachments.',
      },
      {
        question: 'What fold formats do you support?',
        answer:
          'We support standard tri-fold (letter/A4), half-fold bi-fold, multi-page corporate booklets, and single-sided event flyers.',
      },
    ],
    relatedServiceSlugs: [
      'business-card-design',
      'product-packaging-design',
      'powerpoint-presentation-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Brochure & Flyer Design Services — IZBA Marketing agency',
    seoDescription:
      'Professional bi-fold, tri-fold, and flyer design for corporate marketing. Prepress calibrated print files and interactive digital PDFs.',
  },
  {
    id: 'business-card-design',
    name: 'Business Card Design',
    title: 'Business Card Design',
    slug: 'business-card-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Modern, tactile business cards featuring clean typography, QR code integration, and print finish specifications.',
    description: [
      'When meeting prospective clients and partners in person, exchanging a high-quality business card establishes professional credibility immediately.',
      'Our Business Card Design service creates clean, memorable cards that emphasize readability, brand harmony, and contact clarity.',
      'We incorporate modern dynamic elements, such as scannable vCard QR codes that allow recipients to save your contact information into their smartphone contacts with one tap.',
    ],
    includes: [
      'Front and back business card concept design',
      'Dynamic QR code generation linking to digital contact cards or website',
      'Standard dimensions (3.5" x 2" US, 85mm x 55mm EU, or custom)',
      'Special finish styling guidance (spot UV, foil stamping, embossed)',
      'Print-ready vector export with bleeds and safety margins',
    ],
    deliverables: [
      'Print-ready vector PDF files with 300 DPI and CMYK profiles',
      'Layered editable source files (AI/PSD)',
      'Team member template for creating future employee cards',
      'Print vendor setup instructions (VistaPrint, Moo, or local printer)',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can we create cards for multiple team members?',
        answer:
          'Yes. We establish a master template and can generate individual personalized print files for your entire team.',
      },
      {
        question: 'Can you include a QR code linking to our contact info?',
        answer:
          'Yes. We generate high-resolution QR codes that link directly to your vCard, website, or digital booking page.',
      },
    ],
    relatedServiceSlugs: [
      'logo-design',
      'brand-identity-design',
      'flyer-and-brochure-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom Business Card Design — IZBA Marketing agency',
    seoDescription:
      'Modern business card design with QR code integration. Print-ready vector files, multi-employee templates, and premium finish specifications.',
  },
  {
    id: 'product-packaging-design',
    name: 'Product Packaging Design',
    title: 'Product Packaging Design',
    slug: 'product-packaging-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'Retail and e-commerce product packaging, box dielines, bottle labels, and pouch designs.',
    description: [
      'Packaging is the physical interface between your product and the customer. Our Product Packaging Design service creates retail-ready packaging that commands attention on store shelves and e-commerce unboxing moments.',
      'We work directly from manufacturer dieline templates, ensuring graphics, ingredient lists, barcodes, and regulatory disclaimers fit structural dimensions accurately.',
      'Deliverables include 3D digital mockups so you can inspect how the physical box, bottle, or pouch will look from every angle prior to factory manufacturing.',
    ],
    includes: [
      'Custom packaging dieline layout and structural mapping',
      'Front panel branding, back panel typography, and legal text formatting',
      'Barcode, QR code, and recycling symbol placement',
      'Prepress calibration (color separations, spot colors, bleed allowances)',
      '3D photorealistic product render mockups for website/listing use',
    ],
    deliverables: [
      'Production-ready print PDF files formatted to printer dielines',
      'Layered master vector artwork files (Adobe Illustrator)',
      '3D realistic packaging render images (PNG/JPG)',
      'Factory print technical notes and Pantone color reference sheet',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you need the manufacturer dieline before starting?',
        answer:
          'Yes. Working from your packaging manufacturer’s exact dieline template guarantees that fold lines, glue tabs, and cutouts align without errors.',
      },
      {
        question: 'Do you provide 3D mockups for our online store?',
        answer:
          'Yes. We render high-resolution 3D mockups of your packaged product suitable for Shopify, Amazon, and marketing brochures.',
      },
    ],
    relatedServiceSlugs: [
      'brand-identity-design',
      'graphic-design',
      'ui-ux-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Product Packaging & Label Design — IZBA Marketing agency',
    seoDescription:
      'Retail and e-commerce packaging and label design. Dieline precision, 3D product mockups, and factory-ready print files.',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    categorySlug: 'graphic-design-branding',
    shortDescription:
      'User interface and experience design in Figma. Wireframing, interactive prototypes, and design systems for web and mobile.',
    description: [
      'Exceptional software begins with thoughtful user experience design. Our UI/UX Design service turns complex user workflows into intuitive, clean digital interfaces that users enjoy navigating.',
      'We conduct wireframing sprints, user journey mapping, and clickable Figma prototyping before any code is written, validating usability and interaction design early.',
      'We build comprehensive design systems with reusable components, consistent token spacing, and responsive auto-layout frames ready for smooth developer handoff.',
    ],
    includes: [
      'Information architecture and user journey flowcharts',
      'Low-fidelity wireframing and interactive user testing',
      'High-fidelity UI mockups for desktop, tablet, and mobile views',
      'Figma design system with typography, color tokens, and components',
      'Clickable prototype for stakeholder presentations and developer handoff',
    ],
    deliverables: [
      'Organized, interactive Figma file with component library',
      'Clickable prototype link for stakeholder walkthroughs',
      'Asset export package (SVG icons, imagery, vector illustrations)',
      'Developer handoff documentation with spacing tokens and states',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Which design tools do you use for UI/UX?',
        answer:
          'We use Figma as our primary design tool, enabling real-time collaboration, interactive prototyping, and seamless developer inspection.',
      },
      {
        question:
          'Can you work directly with our engineering team for implementation?',
        answer:
          'Yes. We structure Figma files using auto-layout, tokens, and inspectable component properties so developers can translate designs into code accurately.',
      },
    ],
    relatedServiceSlugs: [
      'web-application-development',
      'mobile-app-development',
      'website-development',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'UI/UX Design & Figma Prototyping — IZBA Marketing agency',
    seoDescription:
      'Human-centered UI/UX design for web and mobile applications. Wireframes, design systems, and interactive Figma prototypes.',
  },
];
