import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We audit your current technology infrastructure, hosting, credentials, and business operational requirements.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We outline architecture diagrams, migration steps, security protocols, and backup rollback procedures.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our systems engineers configure servers, DNS records, databases, security patches, and integrations.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We conduct failover and uptime tests, deliver documented credentials, and provide administrative handover training.',
  },
];

export const itSupportServices: Service[] = [
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    title: 'IT Consulting',
    slug: 'it-consulting',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Strategic technology guidance, architecture audits, vendor selection, and software modernization roadmaps.',
    description: [
      'Navigating technical decisions without an experienced advisor can lead to costly software purchases, insecure configurations, and technical debt. Our IT Consulting service provides objective, vendor-neutral technology advice.',
      'We assess your existing software stack, security posture, and workflow bottlenecks, advising executive leadership on practical technology investments that support long-term goals.',
      'We help businesses evaluate cloud migrations, SaaS tools, and compliance standards, producing clear roadmaps with realistic budgets and milestones.',
    ],
    includes: [
      'Infrastructure, software stack, and security posture assessment',
      'Technology modernization roadmap with prioritized quarterly milestones',
      'Vendor and SaaS platform evaluation and contract review guidance',
      'Cloud cost optimization and license redundancy audit',
      'Disaster recovery and business continuity planning',
    ],
    deliverables: [
      'Comprehensive IT audit and recommendations report (PDF)',
      'Systems architecture diagram and migration roadmap',
      'Vendor comparison scorecard and budget estimate',
      'Executive presentation summarizing key strategic findings',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Do you recommend specific software vendors because of commissions?',
        answer:
          'No. We provide 100% vendor-neutral consulting focused exclusively on what is most cost-effective and reliable for your business.',
      },
      {
        question:
          'Can you help our internal team implement the recommendations?',
        answer:
          'Yes. We can either provide hands-on implementation through our engineering practice or supervise your internal developers as technical advisors.',
      },
    ],
    relatedServiceSlugs: [
      'cloud-based-solutions',
      'website-security-improvements',
      'technical-support-and-maintenance',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Strategic IT Consulting & Advisory — IZBA Marketing agency',
    seoDescription:
      'Vendor-neutral IT consulting and architecture advisory. Technology roadmaps, software stack audits, and strategic modernization planning.',
  },
  {
    id: 'website-hosting-setup',
    name: 'Website Hosting Setup',
    title: 'Website Hosting Setup',
    slug: 'website-hosting-setup',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Reliable hosting setup and migration across Vercel, Cloudflare, AWS, DigitalOcean, or cPanel servers.',
    description: [
      'Slow, unreliable hosting causes website downtime, frustrated visitors, and degraded search engine rankings. Our Website Hosting Setup service configures reliable, high-speed hosting tailored to your traffic needs.',
      'We migrate existing websites with zero downtime, configure automatic SSL certificates, optimize server caching, and set up daily automated off-site backups.',
      'Whether you need modern serverless edge hosting (Vercel, Cloudflare Pages), managed VPS cloud servers, or traditional cPanel setups, we ensure your server runs reliably.',
    ],
    includes: [
      'Hosting environment provisioning and PHP/Node/serverless configuration',
      'Zero-downtime website and database migration from old hosts',
      'Automated SSL/TLS certificate installation (HTTPS enforcement)',
      'Server-level caching and CDN acceleration setup (Cloudflare)',
      'Automated daily backup schedule and disaster recovery tests',
    ],
    deliverables: [
      'Configured hosting account with live, working website',
      'Automated backup logs and offsite storage verification',
      'Hosting access credentials securely transferred via password manager',
      'Server configuration reference document',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Will our website experience downtime during the hosting migration?',
        answer:
          'No. We migrate files and databases to the new host in advance and only switch DNS records once everything is verified, ensuring zero visitor disruption.',
      },
      {
        question: 'Which hosting provider do you recommend?',
        answer:
          'For static/Next.js websites we recommend Vercel or Cloudflare; for WordPress we recommend managed hosts like Cloudways, SiteGround, or WP Engine.',
      },
    ],
    relatedServiceSlugs: [
      'domain-setup',
      'business-email-setup',
      'website-security-improvements',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Website Hosting Setup & Migration — IZBA Marketing agency',
    seoDescription:
      'Professional website hosting setup and zero-downtime migration. Serverless edge hosting, managed VPS, automated SSL, and daily cloud backups.',
  },
  {
    id: 'domain-setup',
    name: 'Domain Setup',
    title: 'Domain Setup',
    slug: 'domain-setup',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Domain registration, clean DNS management, nameserver configuration, and redirection rules.',
    description: [
      'Domain Name System (DNS) records are the digital switchboard of your internet presence, directing traffic to your website, email, and verification servers.',
      'Our Domain Setup service handles domain registration, DNS record cleanup (A, CNAME, MX, TXT, SRV), nameserver delegation, and domain forwarding.',
      'We resolve DNS conflicts that cause email delivery failures or broken subdomains, ensuring your company web address resolves quickly and securely worldwide.',
    ],
    includes: [
      'Domain purchase guidance and registrar account security setup',
      'Nameserver migration to reliable providers (Cloudflare DNS, Route53)',
      'A, AAAA, CNAME, and ALIAS record configuration for websites',
      'Domain forwarding and 301 permanent redirects (e.g., non-www to www)',
      'WHOIS privacy protection and two-factor authentication enforcement',
    ],
    deliverables: [
      'Correctly resolving domain with global DNS propagation verification',
      'Complete DNS zone file export backup',
      'Domain registrar ownership and credential documentation',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How long does DNS propagation take?',
        answer:
          'While global propagation can take up to 24-48 hours, modern DNS providers (like Cloudflare) typically propagate changes within 5 to 15 minutes.',
      },
      {
        question:
          'Do you help protect our domain against accidental expiration or theft?',
        answer:
          'Yes. We turn on auto-renewal, registrar transfer locks, WHOIS privacy protection, and two-factor authentication on registrar accounts.',
      },
    ],
    relatedServiceSlugs: [
      'website-hosting-setup',
      'business-email-setup',
      'website-security-improvements',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Domain Setup & DNS Management — IZBA Marketing agency',
    seoDescription:
      'Professional domain setup and DNS configuration. Registrar security, nameserver migration, 301 redirects, and global propagation checks.',
  },
  {
    id: 'business-email-setup',
    name: 'Business Email Setup',
    title: 'Business Email Setup',
    slug: 'business-email-setup',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Professional Google Workspace or Microsoft 365 email configuration with SPF, DKIM, and DMARC security.',
    description: [
      'Using a free generic email (like `@gmail.com` or `@yahoo.com`) for business communications looks amateur and diminishes client confidence. Our Business Email Setup provides branded corporate email on your own domain (e.g. `you@yourcompany.com`).',
      'We set up Google Workspace or Microsoft 365, create user mailboxes and team aliases (`info@`, `sales@`, `support@`), and migrate historic emails.',
      'Critically, we configure advanced domain authentication records (SPF, DKIM, DMARC) so your outgoing invoices and proposals land in client inboxes rather than spam filters.',
    ],
    includes: [
      'Google Workspace or Microsoft 365 organization tenant setup',
      'User inbox creation, alias configuration, and shared mailboxes',
      'Advanced email deliverability authentication (SPF, DKIM, DMARC records)',
      'Historic email, calendar, and contact migration from old webmail',
      'Mobile phone (iOS/Android) and desktop Outlook/Apple Mail configuration guide',
    ],
    deliverables: [
      'Active business email accounts running on your domain',
      'Verified 10/10 email deliverability score on Mail-Tester',
      'Admin credentials and user onboarding instructions',
      'Security checklist (two-factor authentication policy)',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Which platform is better: Google Workspace or Microsoft 365?',
        answer:
          'Google Workspace is ideal for collaborative cloud teams who love Gmail and Google Drive; Microsoft 365 is preferred by companies relying heavily on native desktop Excel, Word, and Outlook.',
      },
      {
        question:
          'Will our emails stop going to spam after setting up SPF, DKIM, and DMARC?',
        answer:
          'Yes. Major email providers like Gmail and Yahoo now require valid SPF, DKIM, and DMARC records. Implementing these technical records dramatically improves inbox placement.',
      },
    ],
    relatedServiceSlugs: [
      'domain-setup',
      'website-hosting-setup',
      'email-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Professional Business Email Setup (Google & M365) — IZBA Marketing agency',
    seoDescription:
      'Setup custom business email with Google Workspace or Microsoft 365. Full SPF, DKIM, DMARC authentication for flawless inbox deliverability.',
  },
  {
    id: 'database-design-and-management',
    name: 'Database Design and Management',
    title: 'Database Design and Management',
    slug: 'database-design-and-management',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Relational and NoSQL database modeling, schema normalization, index tuning, and automated backups.',
    description: [
      'Databases are the core storage engine of your software applications. Poorly modeled tables and missing query indexes lead to slow application loading and data corruption as records grow.',
      'Our Database Design and Management service architects relational (PostgreSQL, MySQL) and document (MongoDB, Supabase) database schemas built for durability and fast query execution.',
      'We implement normalized relational structures, automated migrations, query optimization, connection pooling, and automated point-in-time recovery backups.',
    ],
    includes: [
      'Entity-Relationship Diagram (ERD) schema modeling',
      'Table normalization (3NF) and constraint enforcement (Foreign Keys, NOT NULL)',
      'Index optimization (B-tree, GIN indexes) for slow queries',
      'Automated database migration scripts and versioning',
      'Point-in-time recovery backup schedules and encryption-at-rest',
    ],
    deliverables: [
      'Production database instance deployed on secure cloud infrastructure',
      'Documented Entity-Relationship Diagram (ERD) and schema schema.sql',
      'Automated daily backup schedule and test restore confirmation',
      'Database monitoring and connection pooling configuration',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you speed up our slow database queries?',
        answer:
          'Yes. We analyze query execution plans (`EXPLAIN ANALYZE`), identify table scans, and build targeted indexes to reduce query latency significantly.',
      },
      {
        question:
          'Do you work with managed databases like Supabase or AWS RDS?',
        answer:
          'Yes. We regularly build and manage databases on Supabase, AWS RDS, Neon, PlanetScale, and self-hosted PostgreSQL instances.',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'web-application-development',
      'cloud-based-solutions',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Database Design & Management (PostgreSQL & MySQL) — IZBA Marketing agency',
    seoDescription:
      'Relational database architecture, query optimization, and schema design. PostgreSQL, MySQL, and Supabase database consulting.',
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    title: 'API Integration',
    slug: 'api-integration',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Connect external APIs, payment gateways, CRM webhooks, and third-party cloud services securely.',
    description: [
      'Modern digital ecosystems rely on smooth communication between independent software services. Our API Integration service connects your website and applications with third-party web services.',
      'We integrate payment processors (Stripe, PayPal), marketing automation tools, inventory systems, shipping carriers, and SMS messaging gateways via secure REST and GraphQL endpoints.',
      'We implement error-tolerant webhook handlers, authentication headers (OAuth2, API keys), and rate-limit buffering so data syncs reliably without drops.',
    ],
    includes: [
      'RESTful and GraphQL API connector development',
      'OAuth 2.0, JWT, and API key authentication flows',
      'Incoming webhook listener endpoints with cryptographic signature verification',
      'Payload transformation, sanitization, and data validation',
      'Retry queues and exception alerting for temporary third-party outages',
    ],
    deliverables: [
      'Working API connection deployed and verified in production',
      'API endpoint documentation and data schema mapping table',
      'Secure secrets management configuration (.env / secret manager)',
      'Unit test suite simulating successful and failed third-party responses',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What happens if a third-party API is temporarily down?',
        answer:
          'We implement asynchronous job queues and retry backoff logic so data is safely held and re-attempted once the external API recovers.',
      },
      {
        question:
          'Can you build custom webhooks between two apps that don’t talk to each other?',
        answer:
          'Yes. We build lightweight microservices or serverless functions that receive webhooks from App A, transform the format, and post to App B.',
      },
    ],
    relatedServiceSlugs: [
      'web-application-development',
      'business-process-automation',
      'ai-workflow-integration',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom API Integration & Webhook Services — IZBA Marketing agency',
    seoDescription:
      'Secure third-party API integrations. Connect Stripe, CRMs, shipping gateways, and cloud platforms with robust error handling.',
  },
  {
    id: 'cloud-based-solutions',
    name: 'Cloud-Based Solutions',
    title: 'Cloud-Based Solutions',
    slug: 'cloud-based-solutions',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Cloud architecture on AWS, Google Cloud, and DigitalOcean. Serverless hosting, storage buckets, and CDN caching.',
    description: [
      'Modern cloud platforms provide elastic scalability, high availability, and global distribution. Our Cloud-Based Solutions service helps companies architect and manage cost-effective cloud infrastructure.',
      'We design cloud topologies using object storage (AWS S3, Cloudflare R2), compute instances, serverless functions, and global content delivery networks (CDNs).',
      'We focus on infrastructure-as-code principles, right-sizing resources to avoid bloated cloud bills while ensuring your services scale effortlessly during traffic spikes.',
    ],
    includes: [
      'Cloud platform architecture design (AWS, Google Cloud, DigitalOcean)',
      'Object storage setup with public/private bucket security policies',
      'Serverless computing and edge function deployments',
      'Global CDN acceleration and DDoS mitigation rules',
      'Cloud billing optimization and automated spending alert thresholds',
    ],
    deliverables: [
      'Configured cloud infrastructure environment',
      'Architecture diagram showing component connections',
      'IAM security roles and access policy documentation',
      'Cost control checklist and monthly billing forecast',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do you keep cloud costs under control?',
        answer:
          'We right-size server resources, use pay-as-you-go serverless models where appropriate, and configure hard spending alerts and budget caps.',
      },
      {
        question: 'Can you migrate our on-premise files to cloud storage?',
        answer:
          'Yes. We securely migrate local company files, media libraries, and backups into encrypted cloud object storage buckets with granular team access.',
      },
    ],
    relatedServiceSlugs: [
      'it-consulting',
      'website-hosting-setup',
      'database-design-and-management',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Cloud Architecture & Cloud-Based Solutions — IZBA Marketing agency',
    seoDescription:
      'Scalable cloud infrastructure on AWS, Google Cloud, and DigitalOcean. Object storage, serverless functions, and cost-optimized cloud setups.',
  },
  {
    id: 'website-security-improvements',
    name: 'Website Security Improvements',
    title: 'Website Security Improvements',
    slug: 'website-security-improvements',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Security hardening, malware removal, Web Application Firewall (WAF) setup, and vulnerability patching.',
    description: [
      'Cybersecurity threats, automated bot attacks, and vulnerability exploits target websites of all sizes daily. Our Website Security Improvements service identifies and neutralizes vulnerabilities before harm occurs.',
      'We conduct vulnerability scans, remove malicious backdoor scripts, enforce HTTPS with HTTP Strict Transport Security (HSTS), and implement Web Application Firewalls (WAF via Cloudflare).',
      'We harden administration logins with two-factor authentication, brute-force protection, and secure Content Security Policies (CSP).',
    ],
    includes: [
      'Malware detection scanning and infected file cleanup',
      'Web Application Firewall (WAF) and DDoS protection setup',
      'Security HTTP headers configuration (HSTS, CSP, X-Frame-Options)',
      'Brute-force login protection and two-factor authentication setup',
      'File permission hardening and outdated software dependency patching',
    ],
    deliverables: [
      'Clean, malware-free website with security hardening applied',
      'Before-and-after security scan and vulnerability audit score',
      'Active Cloudflare or WAF firewall rule configuration',
      'Security response protocol and emergency recovery guide',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you clean a website that has already been hacked?',
        answer:
          'Yes. We can quarantine infected files, remove malicious database injections, replace compromised core files, and restore clean operations.',
      },
      {
        question: 'Do security improvements slow down page load speed?',
        answer:
          'No. In fact, routing traffic through a Web Application Firewall like Cloudflare blocks malicious bot traffic, often reducing server load and speeding up page delivery.',
      },
    ],
    relatedServiceSlugs: [
      'website-hosting-setup',
      'technical-support-and-maintenance',
      'software-testing-and-bug-fixing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Website Security Hardening & Malware Removal — IZBA Marketing agency',
    seoDescription:
      'Comprehensive website security hardening. Malware cleanup, Web Application Firewall (WAF) configuration, and vulnerability patching.',
  },
  {
    id: 'software-testing-and-bug-fixing',
    name: 'Software Testing and Bug Fixing',
    title: 'Software Testing and Bug Fixing',
    slug: 'software-testing-and-bug-fixing',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Rigorous manual QA testing, automated test scripts, and rapid diagnosis of frontend/backend software bugs.',
    description: [
      'Software bugs degrade user experience, cause checkout failures, and damage customer trust. Our Software Testing and Bug Fixing service systematically identifies and resolves software defects.',
      'We test applications across multiple browser engines, operating systems, and screen resolutions, cataloging edge-case issues in reproducible bug reports.',
      'Our engineers then inspect source code, debug console errors and server exception logs, and apply permanent code patches with regression verification.',
    ],
    includes: [
      'Comprehensive manual exploratory QA testing across user journeys',
      'Cross-browser and cross-device compatibility verification',
      'Console error, broken link, and network request diagnosis',
      'Root-cause debugging and clean code bug fixes',
      'Regression testing to verify that fixes do not break related features',
    ],
    deliverables: [
      'Tested and verified bug fix code deployed to production',
      'Detailed QA audit report with reproduction steps and resolution notes',
      'Automated regression test scripts (Playwright or Jest) if requested',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you fix bugs in code written by a previous developer?',
        answer:
          'Yes. We routinely step in to audit, troubleshoot, and fix existing codebases developed by previous agencies or contractors.',
      },
      {
        question: 'How quickly can critical bugs be addressed?',
        answer:
          'For critical operational bugs (broken checkouts, server crashes), we offer priority same-day emergency triage and diagnostics.',
      },
    ],
    relatedServiceSlugs: [
      'technical-support-and-maintenance',
      'custom-software-development',
      'website-redesign-and-maintenance',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Software Testing & Bug Fixing Services — IZBA Marketing agency',
    seoDescription:
      'Expert QA testing and software bug fixing. Cross-browser testing, console error resolution, and root-cause code debugging for web applications.',
  },
  {
    id: 'technical-support-and-maintenance',
    name: 'Technical Support and Maintenance',
    title: 'Technical Support and Maintenance',
    slug: 'technical-support-and-maintenance',
    categorySlug: 'it-support-business-solutions',
    shortDescription:
      'Ongoing technical support retainers, software updates, uptime monitoring, and priority issue resolution.',
    description: [
      'Websites and digital applications require regular maintenance to remain fast, secure, and compatible with evolving web standards and browser updates.',
      'Our Technical Support and Maintenance service provides peace of mind through proactive monitoring, software version updates, and dependable technical assistance.',
      'We monitor your site 24/7 for unexpected downtime, perform scheduled off-site backups, and provide dedicated support hours each month for content updates or feature enhancements.',
    ],
    includes: [
      '24/7 automated uptime and SSL certificate expiration monitoring',
      'Core software, CMS, theme, and plugin compatibility updates',
      'Off-site automated database and asset backups',
      'Monthly allotment of developer support hours for content or feature tweaks',
      'Priority email and ticketing support queue',
    ],
    deliverables: [
      'Monthly maintenance and health summary report',
      'Uptime performance metrics and incident resolution log',
      'Verified backup archives stored securely off-site',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'What happens if our website goes down outside of office hours?',
        answer:
          'Our automated uptime monitoring detects outages immediately and dispatches priority alerts to on-call engineers for swift diagnosis.',
      },
      {
        question: 'Can unused maintenance hours roll over to the next month?',
        answer:
          'Support agreements are structured transparently based on your monthly tier; we discuss rollover options during your service agreement onboarding.',
      },
    ],
    relatedServiceSlugs: [
      'website-hosting-setup',
      'website-security-improvements',
      'it-consulting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle:
      'Technical Support & Website Maintenance Retainers — IZBA Marketing agency',
    seoDescription:
      'Reliable technical support and website maintenance. 24/7 uptime monitoring, security patching, cloud backups, and dedicated developer hours.',
  },
];
