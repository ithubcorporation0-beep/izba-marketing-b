import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We review your target market, competitors, current traffic channels, and growth objectives.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We build a focused marketing strategy with defined channel tactics, content calendars, and tracking setup.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our team crafts ad copy, optimizes technical SEO assets, sets up campaigns, and verifies tracking pixels.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We monitor incoming data, deliver structured performance summaries, and recommend informed refinements.',
  },
];

export const digitalMarketingServices: Service[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Integrated digital marketing strategies spanning search, social channels, and paid traffic to build brand visibility.',
    description: [
      'Our comprehensive Digital Marketing service connects your business offerings with active online audiences across multiple channels. We coordinate search visibility, targeted paid advertising, and organic social initiatives under one aligned strategy.',
      'Rather than relying on disjointed tactics, we establish structured funnels that guide prospects from initial awareness through interest to direct inquiries.',
      'All efforts are grounded in transparent reporting and web analytics so you understand which channels are generating genuine customer engagement.',
    ],
    includes: [
      'Multi-channel marketing strategy and audience profiling',
      'Competitor landscape analysis and channel prioritization',
      'Campaign setup across search and social networks',
      'Monthly performance dashboards and review calls',
      'Conversion tracking and attribution setup',
    ],
    deliverables: [
      'Comprehensive digital marketing strategy document',
      'Channel implementation roadmap and action plan',
      'Configured analytics and event tracking dashboard',
      'Bi-weekly or monthly performance reports',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you guarantee specific sales or revenue numbers?',
        answer:
          'No. We adhere to honest, ethical marketing practices. We focus on executing proven best practices, testing messaging, and optimizing conversion rates rather than making unsubstantiated guarantees.',
      },
      {
        question:
          'How do you determine which marketing channels to prioritize?',
        answer:
          'We evaluate where your target customers research and spend time, analyzing search intent, competitive advertising activity, and your current budget.',
      },
    ],
    relatedServiceSlugs: [
      'search-engine-optimization-seo',
      'social-media-marketing',
      'lead-generation',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Digital Marketing Services — IT HUB Corporation',
    seoDescription:
      'Integrated digital marketing services for businesses. Multi-channel search, social, and paid advertising strategies focused on qualified lead acquisition.',
  },
  {
    id: 'search-engine-optimization-seo',
    name: 'Search Engine Optimization (SEO)',
    title: 'Search Engine Optimization (SEO)',
    slug: 'search-engine-optimization-seo',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Technical, on-page, and content SEO optimizations to improve organic discoverability in Google search results.',
    description: [
      'Search Engine Optimization (SEO) helps your website earn long-term organic visibility when prospective clients search for the services you provide.',
      'Our approach covers three critical pillars: technical health (crawlability, indexing, and mobile speed), on-page relevance (keyword targeting, headers, and meta structure), and helpful content development.',
      'We follow official search engine guidelines exclusively, avoiding risky automated tactics that can harm long-term domain reputation.',
    ],
    includes: [
      'Technical SEO audit and crawl error remediation',
      'Keyword research and search intent mapping',
      'Title, meta description, and heading tag optimization',
      'Internal linking structure and XML sitemap cleanup',
      'Google Search Console and Google Analytics configuration',
    ],
    deliverables: [
      'Comprehensive baseline SEO audit report',
      'Prioritized keyword target matrix',
      'On-page optimization implementation across priority pages',
      'Monthly keyword visibility and organic traffic report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How long does it take to see organic SEO results?',
        answer:
          'SEO is a medium- to long-term investment. Measurable improvements in crawl health and search rankings generally appear within 3 to 6 months depending on competition.',
      },
      {
        question: 'Can you guarantee a #1 ranking on Google?',
        answer:
          'No reputable agency can guarantee a #1 ranking because search engines continually update algorithms independently. We guarantee disciplined adherence to search quality guidelines.',
      },
    ],
    relatedServiceSlugs: [
      'local-seo',
      'content-marketing',
      'digital-marketing',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'Search Engine Optimization (SEO) — IT HUB Corporation',
    seoDescription:
      'Professional SEO services to increase organic search presence. Technical audits, on-page optimization, and ethical keyword ranking strategies.',
  },
  {
    id: 'local-seo',
    name: 'Local SEO',
    title: 'Local SEO',
    slug: 'local-seo',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Targeted local search optimization and Google Business Profile management to attract nearby customers.',
    description: [
      'For service-area businesses, professional practices, and local storefronts, appearing in Google Maps and localized search packs is essential for foot traffic and incoming phone calls.',
      'Our Local SEO service optimizes your Google Business Profile (GBP), ensures Name-Address-Phone (NAP) consistency across online directories, and optimizes local landing pages.',
      'We also assist with structured review gathering workflows and local citation building to strengthen regional search prominence.',
    ],
    includes: [
      'Google Business Profile complete setup and optimization',
      'NAP consistency audit and local citation building',
      'Local schema markup (`LocalBusiness` JSON-LD) implementation',
      'Location page on-page optimization',
      'Review generation guidance and response templates',
    ],
    deliverables: [
      'Fully optimized Google Business Profile',
      'Directory citation submission report (20+ directories)',
      'Local schema code implemented on target location pages',
      'Local map rank and calls tracking report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What is required to verify our Google Business Profile?',
        answer:
          'Google requires verification via phone call, email, or a video recording demonstrating your physical business premises or service vehicle.',
      },
      {
        question: 'Can you help if our business serves multiple cities?',
        answer:
          'Yes. We build dedicated location landing pages tailored to each service area without duplicating content.',
      },
    ],
    relatedServiceSlugs: [
      'search-engine-optimization-seo',
      'digital-marketing',
      'lead-generation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Local SEO & Google Business Profile Management — IT HUB Corporation',
    seoDescription:
      'Dominate local search and Google Maps results. Complete Google Business Profile optimization, local citation management, and review strategies.',
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Organic brand building and audience engagement across LinkedIn, Facebook, Instagram, and X (Twitter).',
    description: [
      'Maintaining an active and professional social media presence builds credibility when prospective clients research your company before reaching out.',
      'Our Social Media Marketing service handles content calendar planning, custom visual post creation, insightful industry commentary, and community monitoring.',
      'We align post topics with your core service offerings, keeping your business top-of-mind for partners, existing clients, and new prospects.',
    ],
    includes: [
      'Monthly social media content calendar planning',
      'Branded graphic post and carousel design',
      'Copywriting tailored to specific channel tones (LinkedIn vs. Instagram)',
      'Hashtag research and profile bio optimization',
      'Community monitoring and comment notifications',
    ],
    deliverables: [
      'Monthly calendar with scheduled post drafts and visuals',
      'Published posts across approved social accounts',
      'Optimized profile assets (covers, bios, links)',
      'Monthly audience engagement and reach summary',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you need access to our social media passwords?',
        answer:
          'We prefer invitation via official platform business tools (Meta Business Suite, LinkedIn Page Admin) so you never have to share raw passwords.',
      },
      {
        question: 'Can we review and approve posts before they go live?',
        answer:
          'Yes. We provide a monthly content preview document so you can approve or request changes on all text and visual assets in advance.',
      },
    ],
    relatedServiceSlugs: [
      'social-media-post-design',
      'facebook-instagram-ads',
      'content-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Social Media Marketing & Management — IT HUB Corporation',
    seoDescription:
      'Organic social media management for LinkedIn, Instagram, and Facebook. Consistent posting, branded graphics, and community engagement.',
  },
  {
    id: 'facebook-instagram-ads',
    name: 'Facebook & Instagram Ads',
    title: 'Facebook & Instagram Ads',
    slug: 'facebook-instagram-ads',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Targeted paid advertising campaigns across Meta platforms designed to generate inquiries and product interest.',
    description: [
      'Meta advertising provides granular demographic, geographic, and interest-based targeting to present your message to qualified prospect audiences.',
      'We build, test, and manage Facebook and Instagram ad campaigns. Our team develops clear visual creatives, persuasive ad copy, and dedicated lead-generation or click-to-WhatsApp funnels.',
      'We run systematic A/B testing on audiences and creatives while optimizing cost-per-lead (CPL) to make every advertising dollar count.',
    ],
    includes: [
      'Meta Business Manager and Pixel/Conversions API setup',
      'Audience research, custom audiences, and lookalikes',
      'Ad creative design (image ads, carousels, and video snippets)',
      'Ad copywriting and headline variations',
      'Ongoing budget optimization and bid management',
    ],
    deliverables: [
      'Active Meta ad campaign structure',
      'Tested lead form or landing page integration',
      'Ad creative asset library',
      'Weekly performance monitoring and monthly summary report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Is the ad spend included in your service fee?',
        answer:
          'No. Ad spend is paid directly to Meta using your business credit card. Our fee covers strategy, creative production, campaign management, and optimization.',
      },
      {
        question: 'What is a reasonable starting budget for Meta ads?',
        answer:
          'We generally recommend a minimum ad spend of $300 to $1,000 per month depending on your target geographic region to gather sufficient testing data.',
      },
    ],
    relatedServiceSlugs: [
      'google-ads-management',
      'landing-page-design',
      'social-media-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Facebook & Instagram Ads Management — IT HUB Corporation',
    seoDescription:
      'High-performance Meta ad management. Targeted campaigns, creative testing, and lead generation on Facebook and Instagram.',
  },
  {
    id: 'google-ads-management',
    name: 'Google Ads Management',
    title: 'Google Ads Management',
    slug: 'google-ads-management',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'High-intent Google Search and Performance Max campaigns targeting users actively searching for your solutions.',
    description: [
      'Google Ads allows your business to appear immediately at the exact moment potential buyers search for relevant services or products.',
      'Our Google Ads Management service designs targeted search campaigns with precise keyword matching, negative keyword lists, responsive search ads, and conversion tracking.',
      'We continually prune non-performing queries to avoid wasted spend and improve Quality Scores, helping you capture higher-intent inquiries.',
    ],
    includes: [
      'Keyword intent analysis and negative keyword research',
      'Campaign architecture (Search, Call-only, Performance Max)',
      'Responsive Search Ad copy and extension assets setup',
      'Google Tag Manager and conversion action tracking',
      'Bid strategy optimization (Target CPA / Maximize Conversions)',
    ],
    deliverables: [
      'Configured Google Ads campaign structure',
      'Verified conversion tracking setup on your website',
      'Search query audit logs and negative keyword lists',
      'Monthly analytics and cost-per-conversion report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How does Google Ads compare to SEO?',
        answer:
          'Google Ads generates visibility immediately upon campaign launch through paid bidding, while SEO takes time to build organic trust but requires no per-click fee.',
      },
      {
        question: 'How do you stop irrelevant clicks from wasting budget?',
        answer:
          'We use strict phrase/exact match keywords and build comprehensive negative keyword lists that filter out job seekers, free queries, and unrelated searches.',
      },
    ],
    relatedServiceSlugs: [
      'facebook-instagram-ads',
      'search-engine-optimization-seo',
      'landing-page-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Google Ads Management (PPC) — IT HUB Corporation',
    seoDescription:
      'Certified Google Ads management. High-intent search campaigns, conversion tracking, and ongoing bid optimization to capture ready-to-buy clients.',
  },
  {
    id: 'youtube-marketing',
    name: 'YouTube Marketing',
    title: 'YouTube Marketing',
    slug: 'youtube-marketing',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Channel optimization, video SEO metadata, and paid YouTube video ad campaigns to expand visual brand reach.',
    description: [
      'As the second-largest search engine in the world, YouTube offers businesses an unparalleled medium for establishing authority and explaining complex services visually.',
      'Our YouTube Marketing service helps organizations optimize channel structure, metadata, video titles, and descriptions for organic search discovery.',
      'We also configure targeted YouTube in-stream and bumper video ads, placing your company’s message directly before viewers interested in your industry.',
    ],
    includes: [
      'YouTube channel audit and branding optimization',
      'Video SEO: titles, timestamps, tags, and descriptions',
      'Custom thumbnail strategy and playlist architecture',
      'YouTube video ad campaign setup through Google Ads',
      'Audience retention analysis and keyword optimization',
    ],
    deliverables: [
      'Fully branded and configured YouTube channel',
      'Optimized metadata templates for video uploads',
      'Active YouTube video ad campaigns (if running paid ads)',
      'Quarterly viewership and subscriber growth report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you produce the video footage as well?',
        answer:
          'Yes. We can handle video editing, motion graphics, and voiceovers through our Video & Content Production practice.',
      },
      {
        question: 'Can YouTube videos help our website SEO?',
        answer:
          'Yes. Embedding relevant YouTube videos on your website increases user engagement duration and can appear in Google Video search results.',
      },
    ],
    relatedServiceSlugs: [
      'youtube-video-editing',
      'ai-video-creation',
      'google-ads-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'YouTube Marketing & Video SEO — IT HUB Corporation',
    seoDescription:
      'Grow your video presence with YouTube marketing. Channel optimization, video SEO metadata, and targeted YouTube advertising campaigns.',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    title: 'Content Marketing',
    slug: 'content-marketing',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Educational articles, blog posts, and thought leadership content written to inform customers and support SEO.',
    description: [
      'Content Marketing positions your company as a trusted industry authority by providing thoughtful, well-researched answers to the questions your buyers are asking.',
      'We research industry topics and write clear, well-structured articles, guides, and case summaries that provide genuine value without fluff or buzzwords.',
      'Every piece of content is structured for easy reading, incorporates internal links to relevant service pages, and includes clear calls to action.',
    ],
    includes: [
      'Editorial topic research and content calendar planning',
      'Long-form blog articles (800 - 1,500 words) with proper headings',
      'Content optimization for target search queries',
      'Featured image selection and formatting',
      'Internal linking strategy to support conversion paths',
    ],
    deliverables: [
      'Monthly editorial calendar with approved topic outlines',
      'Professionally written and formatted articles ready to publish',
      'Supporting metadata (meta titles, descriptions, image alt tags)',
      'Content performance and pageviews tracking report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Who writes the content?',
        answer:
          'Our content team researches and drafts all articles with strict quality checks, ensuring accurate industry terminology and engaging tone.',
      },
      {
        question: 'Do we get to review the articles before publishing?',
        answer:
          'Yes. You have full editorial approval on every draft before it is published to your live blog or resource center.',
      },
    ],
    relatedServiceSlugs: [
      'search-engine-optimization-seo',
      'email-marketing',
      'social-media-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Content Marketing & Article Writing — IT HUB Corporation',
    seoDescription:
      'Educational content marketing and blog writing services. Authoritative articles that answer customer questions and boost organic search authority.',
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    title: 'Email Marketing',
    slug: 'email-marketing',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Automated email sequences, customer newsletters, and re-engagement campaigns built for inbox deliverability.',
    description: [
      'Email marketing remains one of the highest-ROI direct communication channels for nurturing inbound leads and retaining existing client relationships.',
      'Our Email Marketing service sets up professional email service providers (Mailchimp, Klaviyo, Brevo), designs mobile-responsive templates, and configures automated welcome flows.',
      'We adhere to anti-spam compliance guidelines (CAN-SPAM, GDPR) with clean list hygiene, DKIM/SPF domain authentication, and explicit unsubscribe mechanisms.',
    ],
    includes: [
      'Email marketing platform configuration and list segmentation',
      'Domain authentication setup (SPF, DKIM, DMARC records)',
      'Responsive email newsletter template design',
      'Automated nurture workflows (welcome series, quote follow-ups)',
      'A/B testing on subject lines and send timings',
    ],
    deliverables: [
      'Branded, tested email template in your ESP',
      'Configured automated email sequences with trigger rules',
      'Verified domain authentication status report',
      'Monthly open rate, click-through rate, and deliverability metrics',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you help clean an outdated contact list?',
        answer:
          'Yes. We can run list verification through validation tools to remove inactive or bouncing email addresses before initiating broadcasts.',
      },
      {
        question: 'Will our emails end up in the spam folder?',
        answer:
          'We configure proper technical domain authentication records (SPF, DKIM, DMARC) and follow content best practices to maintain high deliverability.',
      },
    ],
    relatedServiceSlugs: [
      'content-marketing',
      'lead-generation',
      'digital-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Email Marketing & Automation Services — IT HUB Corporation',
    seoDescription:
      'Professional email marketing campaigns and automated sequences. Clean template design, domain authentication, and responsive client newsletters.',
  },
  {
    id: 'lead-generation',
    name: 'Lead Generation',
    title: 'Lead Generation',
    slug: 'lead-generation',
    categorySlug: 'digital-marketing-seo',
    shortDescription:
      'Structured lead capture funnels and outreach workflows to connect with qualified commercial prospects.',
    description: [
      'Our Lead Generation service focuses on identifying and capturing interest from business prospects who require your specific expertise.',
      'We design multi-step inquiry funnels that filter out casual browsers and collect critical project details upfront, including scope, budget, and timeline.',
      'We configure automated alerts so your sales or technical representatives can respond promptly while interest is highest.',
    ],
    includes: [
      'Lead qualification form design with conditional questions',
      'Lead magnet or consultation booking page development',
      'CRM routing and instant notification alerts (email/Slack)',
      'Lead verification and spam filtering (honeypot/CAPTCHA)',
      'Funnel drop-off analysis and conversion rate optimization',
    ],
    deliverables: [
      'Operational lead capture funnel connected to your website',
      'Automated email lead notification workflow',
      'Integrated lead spreadsheet or CRM pipeline view',
      'Monthly lead volume and conversion rate report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you sell pre-made lists of contact numbers?',
        answer:
          'No. We do not sell scraped contact lists. We build inbound and permission-based funnels that attract prospects who intentionally request your services.',
      },
      {
        question: 'How do you prevent spam submissions on quote forms?',
        answer:
          'We implement invisible honeypots, time-based submission validation, and domain-level anti-spam filters to block automated bot submissions.',
      },
    ],
    relatedServiceSlugs: [
      'digital-marketing',
      'facebook-instagram-ads',
      'google-ads-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'B2B Lead Generation & Funnel Design — IT HUB Corporation',
    seoDescription:
      'High-intent B2B lead generation funnels. Capture qualified quotes, filter inquiries, and connect with prospective clients reliably.',
  },
];
