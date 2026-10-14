import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We evaluate your current operational workflows, data sources, and automation opportunities.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We design prompt architectures, agent tools, API connections, and human-in-the-loop review safeguards.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'We configure and test AI models, fine-tune prompts, implement integrations, and test accuracy.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We demonstrate the working solution, train your team on monitoring, and hand over setup credentials.',
  },
];

export const aiAutomationServices: Service[] = [
  {
    id: 'ai-video-creation',
    name: 'AI Video Creation',
    title: 'AI Video Creation',
    slug: 'ai-video-creation',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'AI-assisted video generation, realistic avatars, synthetic voiceovers, and rapid video mockups.',
    description: [
      'Our AI Video Creation service enables companies to produce polished explainer, training, and promotional videos without requiring costly studio shoots or on-camera talent.',
      'We leverage cutting-edge generative video and avatar platforms paired with human creative direction, generating natural-sounding narration, realistic presenter avatars, and dynamic visuals.',
      'Every video is carefully edited and branded with your company logos, color palettes, background audio, and subtitles for immediate multi-platform publishing.',
    ],
    includes: [
      'Script conceptualization and storyboard formatting',
      'AI avatar selection and voiceover generation in multiple languages',
      'B-roll selection, motion transitions, and background music licensing',
      'Lower-thirds, logo watermarks, and subtitle styling',
      'Export in 1080p/4K for web, YouTube, or social formats',
    ],
    deliverables: [
      'Master video file in MP4 format (horizontal and/or vertical)',
      'Accompanying SRT subtitle file',
      'Video script and storyboard document',
      'Editable project assets and audio stems',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you produce videos in multiple languages with AI?',
        answer:
          'Yes. AI voice models allow us to generate localized versions of the same video in Spanish, French, German, Arabic, and other languages with synchronized lip movement.',
      },
      {
        question: 'Do the AI avatars look natural?',
        answer:
          'Modern generative avatars are highly realistic for corporate training, software explainers, and announcement videos when paired with professional audio mastering.',
      },
    ],
    relatedServiceSlugs: [
      'ai-image-generation',
      'ai-explainer-videos',
      'reels-and-shorts-creation',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'AI Video Creation & Avatar Production — IZBA Marketing agency',
    seoDescription:
      'AI video generation for business. Explainer videos, realistic synthetic avatars, voiceovers, and rapid training video production.',
  },
  {
    id: 'ai-image-generation',
    name: 'AI Image Generation',
    title: 'AI Image Generation',
    slug: 'ai-image-generation',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'High-resolution conceptual imagery, custom product mockups, and marketing visuals crafted with generative AI.',
    description: [
      'Finding the exact stock photo to match an abstract technology concept or brand narrative can take hours. Our AI Image Generation service creates bespoke visual assets matching your precise creative brief.',
      'We craft advanced prompts using Midjourney, Stable Diffusion, and proprietary fine-tuned checkpoints, iterating until colors, compositions, and subject styles match your visual identity.',
      'All generated images undergo post-processing, upscaling, color grading, and defect removal so they are crisp and ready for marketing collateral, web headers, or presentations.',
    ],
    includes: [
      'Art direction brief and visual style exploration',
      'Custom prompt engineering and checkpoint selection',
      'High-resolution upscaling (up to 4K/8K resolution)',
      'Photoshop touchups and artifact cleaning',
      'Commercial usage licensing clearance',
    ],
    deliverables: [
      'Curated high-resolution image package (PNG/JPG)',
      'Prompt log and seed parameters for style reproducibility',
      'Web-optimized compressed image variants (WebP)',
      'Transparent background PNG cutouts if required',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can we use the generated images commercially?',
        answer:
          'Yes. All images produced for your project are cleared for commercial marketing, website usage, and social media advertising.',
      },
      {
        question:
          'Can you maintain a consistent character or visual style across multiple images?',
        answer:
          'Yes. By using specific seeds, reference image weights, and consistent prompt tokens, we can maintain visual continuity across an entire image series.',
      },
    ],
    relatedServiceSlugs: [
      'ai-video-creation',
      'graphic-design',
      'ui-ux-design',
    ],
    status: 'published',
    isFeatured: true,
    seoTitle: 'AI Image Generation & Concept Art — IZBA Marketing agency',
    seoDescription:
      'Custom AI image generation for websites and marketing. High-resolution visuals, consistent brand styling, and professional retouching.',
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    title: 'AI Chatbot Development',
    slug: 'ai-chatbot-development',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Intelligent conversational chatbots trained on your company knowledge base to answer customer questions 24/7.',
    description: [
      'Traditional rule-based chatbots frustrate users with rigid menus and canned errors. Our AI Chatbot Development service implements conversational agents powered by modern Large Language Models (LLMs) connected directly to your documentation.',
      'Using Retrieval-Augmented Generation (RAG), the chatbot accurately answers customer inquiries about your products, pricing, service terms, and FAQs without hallucinating false information.',
      'We embed the widget directly onto your website with customizable branding, and integrate fallback options to transfer conversations to human team members when necessary.',
    ],
    includes: [
      'Document indexing and vector knowledge base configuration',
      'Prompt engineering with strict guardrails and tone instructions',
      'Embeddable web chat widget with custom theme colors',
      'Human handoff and email inquiry lead capture triggers',
      'Chat history logging and answer accuracy monitoring',
    ],
    deliverables: [
      'Working AI chatbot embedded on your website or portal',
      'Admin dashboard to upload new documents or edit answers',
      'Knowledge base synchronization guide',
      'Initial 30-day query analytics report',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do you prevent the chatbot from giving wrong answers?',
        answer:
          'We use Retrieval-Augmented Generation (RAG) which constrains the chatbot to answer strictly from your provided documents, instructing it to admit uncertainty rather than guessing.',
      },
      {
        question: 'Can the chatbot collect lead contact information?',
        answer:
          'Yes. The chatbot can politely ask for a user’s name and email address before or during the conversation and forward the lead to your inbox.',
      },
    ],
    relatedServiceSlugs: [
      'ai-agent-development',
      'ai-customer-support-solutions',
      'business-process-automation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Chatbot Development for Websites — IZBA Marketing agency',
    seoDescription:
      'Custom AI chatbot development. Train conversational bots on your documents to answer customer questions 24/7 with zero hallucinations.',
  },
  {
    id: 'ai-agent-development',
    name: 'AI Agent Development',
    title: 'AI Agent Development',
    slug: 'ai-agent-development',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Autonomous multi-step AI agents capable of querying databases, calling APIs, and executing structured tasks.',
    description: [
      'Where chatbots simply converse, AI agents take proactive action. Our AI Agent Development service designs intelligent software agents that can reason through complex business objectives and execute tools autonomously.',
      'We configure agents to query internal CRM databases, look up order statuses, summarize documents, draft responses, and trigger external webhooks based on specific events.',
      'We incorporate strict error handling, budget caps on model tokens, and human confirmation checkpoints before critical actions are executed.',
    ],
    includes: [
      'Agent reasoning loops and tool-use framework architecture',
      'API connectors for external services (CRM, Slack, Google Workspace)',
      'Structured output schemas (JSON/Pydantic validation)',
      'Security boundaries and permission validation',
      'Detailed execution logging and exception alerting',
    ],
    deliverables: [
      'Deployee AI agent service connected to designated APIs',
      'Tool definitions and function-calling documentation',
      'Configuration dashboard for managing execution triggers',
      'Security assessment and operational guide',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What is the difference between a chatbot and an AI agent?',
        answer:
          'A chatbot only outputs text responses, whereas an AI agent can execute external actions, such as querying a database, creating calendar invites, or dispatching emails.',
      },
      {
        question: 'Is human supervision possible before actions occur?',
        answer:
          'Yes. We regularly build human-in-the-loop approvals where high-impact actions require a staff member to click "Approve" before final execution.',
      },
    ],
    relatedServiceSlugs: [
      'ai-chatbot-development',
      'business-process-automation',
      'ai-workflow-integration',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Custom AI Agent Development — IZBA Marketing agency',
    seoDescription:
      'Build autonomous AI agents for your business. Multi-step reasoning, tool execution, API integration, and human-in-the-loop safeguards.',
  },
  {
    id: 'business-process-automation',
    name: 'Business Process Automation',
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Streamline repetitive data transfers, notifications, and document handoffs using automated workflow logic.',
    description: [
      'Repetitive administrative chores waste valuable team hours and introduce human data-entry errors. Our Business Process Automation service audits manual friction points and replaces them with automated workflows.',
      'We connect disparate platforms (such as your web forms, CRM, invoicing software, and team communications) using reliable middleware such as Make, Zapier, n8n, or custom serverless code.',
      'Automations run silently in the background, updating records instantly whenever new events occur.',
    ],
    includes: [
      'Workflow mapping and operational bottleneck analysis',
      'Multi-app integration setup (Zapier, Make, n8n, or custom webhooks)',
      'Data transformation, cleaning, and validation rules',
      'Automated notifications and status sync across tools',
      'Error alerting and automated retry mechanisms',
    ],
    deliverables: [
      'Configured and tested business automation scenarios',
      'Interactive workflow architecture diagram',
      'Exception handling protocol and monitoring setup',
      'Staff walkthrough and administrative maintenance manual',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do we need to pay for automation platform subscriptions?',
        answer:
          'Depending on execution volume, tools like Make, Zapier, or self-hosted n8n have tiered plans. We help you choose the most cost-effective option for your volume.',
      },
      {
        question: 'What happens if an API connection fails temporarily?',
        answer:
          'We configure automated retry loops and failure notifications so unhandled data is saved in a quarantine queue rather than lost.',
      },
    ],
    relatedServiceSlugs: [
      'ai-workflow-integration',
      'api-integration',
      'data-cleaning-and-formatting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Business Process Automation Services — IZBA Marketing agency',
    seoDescription:
      'Automate repetitive company workflows. Connect CRMs, forms, and spreadsheets with Zapier, Make, and custom webhooks to save hours weekly.',
  },
  {
    id: 'ai-voice-assistant-development',
    name: 'AI Voice Assistant Development',
    title: 'AI Voice Assistant Development',
    slug: 'ai-voice-assistant-development',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Interactive voice bots for phone call routing, appointment scheduling, and automated phone FAQs.',
    description: [
      'Our AI Voice Assistant Development service builds conversational voice systems that handle incoming or outgoing telephone calls with natural-sounding speech and low latency.',
      'Integrated with telephony services (like Twilio) and ultra-fast speech-to-text / text-to-speech models, the voice assistant can answer basic inquiries, gather customer details, or book calendar appointments.',
      'Calls are logged, transcribed, and summarized so your team can review every interaction quickly.',
    ],
    includes: [
      'Telephony configuration and SIP / Twilio trunk setup',
      'Conversational prompt script with interruption handling',
      'Real-time speech-to-text (STT) and voice synthesis (TTS)',
      'Calendar and CRM availability lookup integrations',
      'Call recording, automated transcription, and summary dispatch',
    ],
    deliverables: [
      'Tested AI voice assistant connected to a live phone number',
      'Web-based call logs and transcription dashboard',
      'Call routing tree and fallback forward-to-human logic',
      'Operational guidelines and compliance disclaimer setup',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can the voice assistant transfer the caller to a real person?',
        answer:
          'Yes. If the caller requests a representative or encounters a complex inquiry, the voice bot can instantly forward the call to your office or mobile line.',
      },
      {
        question: 'Is caller consent required for voice recording?',
        answer:
          'Yes. We configure an automatic compliance greeting (e.g. "This call may be recorded for quality purposes") matching regional telecommunication laws.',
      },
    ],
    relatedServiceSlugs: [
      'ai-chatbot-development',
      'ai-customer-support-solutions',
      'business-process-automation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Voice Assistant & Phone Automation — IZBA Marketing agency',
    seoDescription:
      'Natural AI voice assistants for customer calls. Low-latency conversational voice bots for phone scheduling, inquiries, and automated routing.',
  },
  {
    id: 'ai-powered-content-creation',
    name: 'AI-Powered Content Creation',
    title: 'AI-Powered Content Creation',
    slug: 'ai-powered-content-creation',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Human-reviewed AI content workflows to scale product descriptions, social copy, and document drafts efficiently.',
    description: [
      'Producing large volumes of marketing copy, catalog descriptions, and email drafts can bottleneck creative teams. Our AI-Powered Content Creation service creates structured generation pipelines overseen by human editors.',
      'We build customized prompts that capture your brand voice, vocabulary, and compliance standards, producing consistent drafts at scale.',
      'Every piece of content is fact-checked, edited for natural flow, and formatted by a human specialist before delivery.',
    ],
    includes: [
      'Brand tone-of-voice parameterization and prompt engineering',
      'Bulk generation workflows for e-commerce product copy',
      'Social media snippet and ad headline variation generator',
      'Human-in-the-loop proofreading and fact verification',
      'Plagiarism and AI originality detection testing',
    ],
    deliverables: [
      'Delivered batch of verified, human-edited content files',
      'Reusable prompt templates tailored to your brand voice',
      'Style guide document for ongoing internal generation',
      'Spreadsheet import sheets for immediate CMS uploading',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Is the content checked by real human editors?',
        answer:
          'Yes. We strictly combine AI drafting with experienced human proofreading to verify factual claims, tone, and grammatical elegance.',
      },
      {
        question: 'Will search engines penalize AI-generated content?',
        answer:
          'Search engines focus on content usefulness and accuracy rather than how it was produced. Our human editorial pass ensures the content is helpful, original, and compliant.',
      },
    ],
    relatedServiceSlugs: [
      'content-marketing',
      'social-media-post-design',
      'ai-presentation-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI-Powered Content Creation & Copywriting — IZBA Marketing agency',
    seoDescription:
      'Accelerate content production with AI drafting and human editorial refinement. Consistent brand tone, verified accuracy, and bulk product copy.',
  },
  {
    id: 'ai-presentation-creation',
    name: 'AI Presentation Creation',
    title: 'AI Presentation Creation',
    slug: 'ai-presentation-creation',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Fast slide deck generation, structured pitch outlines, and AI-assisted visual slide formatting.',
    description: [
      'Turning complex business ideas, reports, or research into compelling slide presentations can consume days of formatting effort. Our AI Presentation Creation service pairs intelligent outline generation with professional slide design.',
      'We convert raw notes, research papers, or product summaries into structured slide outlines with logical flow, concise bullet points, and impactful section titles.',
      'We then assemble the slides into PowerPoint, Google Slides, or Canva using clean corporate layouts, tailored iconography, and branded visuals.',
    ],
    includes: [
      'Raw document summarization and slide outline synthesis',
      'Visual hierarchy and typography alignment',
      'AI-assisted diagram and conceptual image insertion',
      'Data visualization and infographic slide layout',
      'Editable slide deck export in PPTX or Google Slides',
    ],
    deliverables: [
      'Fully editable presentation deck (PPTX and PDF)',
      'Associated master slide template for future reuse',
      'High-resolution imagery and icons embedded in slides',
      'Speaker notes and delivery outline',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can you work from our company PowerPoint template?',
        answer:
          'Yes. We can import your approved corporate slide master and apply custom content while preserving all fonts and layout guidelines.',
      },
      {
        question: 'Are the slides editable after delivery?',
        answer:
          'Yes. All slides are delivered as standard editable PowerPoint (.pptx) or Google Slides files so you can adjust text at any time.',
      },
    ],
    relatedServiceSlugs: [
      'powerpoint-presentation-design',
      'ai-powered-content-creation',
      'flyer-and-brochure-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Presentation Creation & Slide Design — IZBA Marketing agency',
    seoDescription:
      'Fast, professional presentation design powered by AI structuring and human creative polishing. Pitch decks, executive briefings, and webinars.',
  },
  {
    id: 'ai-workflow-integration',
    name: 'AI Workflow Integration',
    title: 'AI Workflow Integration',
    slug: 'ai-workflow-integration',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'Embed AI models directly into your internal software, forms, or customer portals via modern API endpoints.',
    description: [
      'Instead of forcing team members to toggle between external chat windows and internal tools, our AI Workflow Integration service embeds machine intelligence directly into your existing business software.',
      'We connect enterprise LLM APIs (OpenAI, Anthropic Claude, Google Gemini) into your customer support queues, internal databases, or inventory systems.',
      'Features like automatic support ticket classification, email draft generation, and invoice parsing operate directly inside the interfaces your team already uses daily.',
    ],
    includes: [
      'API integration of LLMs into internal web and mobile systems',
      'Custom prompt pipelining and structured response parsing',
      'Security auditing for sensitive data and PII filtering',
      'Rate limit and API cost monitoring setup',
      'Fallback logic and model redundancy failover',
    ],
    deliverables: [
      'Working API integration deployed in your software environment',
      'Sanitized API key management and secrets configuration',
      'Technical architecture and endpoint documentation',
      'Usage cost tracking guide and quota settings',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Is client customer data kept private when using AI APIs?',
        answer:
          'Yes. We use enterprise API endpoints where providers explicitly contract that input data is not used to train public foundation models.',
      },
      {
        question: 'How do you prevent high unexpected API bills?',
        answer:
          'We implement strict token caps, caching layers for repeated requests, and billing alerts to keep usage predictable.',
      },
    ],
    relatedServiceSlugs: [
      'business-process-automation',
      'ai-agent-development',
      'api-integration',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Workflow Integration & API Engineering — IZBA Marketing agency',
    seoDescription:
      'Integrate AI models directly into your business software. Custom LLM endpoints, automated data parsing, and secure API configurations.',
  },
  {
    id: 'ai-customer-support-solutions',
    name: 'AI Customer Support Solutions',
    title: 'AI Customer Support Solutions',
    slug: 'ai-customer-support-solutions',
    categorySlug: 'ai-services-automation',
    shortDescription:
      'End-to-end customer support automation with AI ticket triage, canned reply drafts, and resolution analytics.',
    description: [
      'High support ticket volumes slow down response times and frustrate customers. Our AI Customer Support Solutions integrate intelligent triage and assisted reply generation into your helpdesk platform.',
      'Incoming tickets are automatically analyzed for urgency, categorized by department, and tagged with key issue keywords. The system drafts proposed responses for agents to review with a single click.',
      'Routine questions (like return policies, order tracking, and hours) can be resolved automatically, freeing support teams for complex inquiries.',
    ],
    includes: [
      'Helpdesk platform integration (Zendesk, Freshdesk, Intercom, or email)',
      'Automated ticket categorization, urgency tagging, and routing',
      'AI draft reply generation based on knowledge base history',
      'Customer sentiment analysis and escalation triggers',
      'First-response time and resolution rate tracking',
    ],
    deliverables: [
      'Configured AI support triage rules in your helpdesk',
      'Integrated knowledge base connector for draft generation',
      'Agent training guide for approving and refining AI drafts',
      'Quarterly support efficiency and resolution report',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can agents edit AI draft replies before sending them to customers?',
        answer:
          'Yes. We configure the system in "co-pilot" mode by default, so agents can review, personalize, and approve drafts before sending.',
      },
      {
        question: 'What happens if a customer is angry or upset?',
        answer:
          'Sentiment analysis flags frustrated inquiries immediately and routes them directly to a senior supervisor queue with priority alerts.',
      },
    ],
    relatedServiceSlugs: [
      'ai-chatbot-development',
      'ai-voice-assistant-development',
      'business-process-automation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Customer Support Automation — IZBA Marketing agency',
    seoDescription:
      'Automate customer support with AI ticket triage and agent co-pilots. Reduce response times and resolve routine customer inquiries 24/7.',
  },
];
