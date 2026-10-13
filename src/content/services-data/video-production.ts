import { Service } from '@/types';

const standardProcess = [
  {
    step: 1,
    title: 'Discuss',
    description:
      'We discuss video objective, target audience, core messaging, visual format, and platform destinations.',
  },
  {
    step: 2,
    title: 'Plan',
    description:
      'We write the script, develop visual storyboards, select audio tracks, and establish production milestones.',
  },
  {
    step: 3,
    title: 'Build/Create',
    description:
      'Our video editors and motion designers edit footage, create animations, mix audio, and add graphic callouts.',
  },
  {
    step: 4,
    title: 'Review and deliver',
    description:
      'We share draft revisions, make final audio/visual tweaks, and export master files in high-resolution video formats.',
  },
];

export const videoProductionServices: Service[] = [
  {
    id: 'ai-explainer-videos',
    name: 'AI Explainer Videos',
    title: 'AI Explainer Videos',
    slug: 'ai-explainer-videos',
    categorySlug: 'video-content-production',
    shortDescription:
      'Concise, engaging explainer videos combining AI voice narration, screen captures, and animated diagrams.',
    description: [
      'Explaining complex software, financial mechanisms, or business processes can be difficult with text alone. Our AI Explainer Videos distill complicated concepts into engaging visual stories under 90 seconds.',
      'We combine professional AI voice narration with curated B-roll footage, screen recordings, lower-third titles, and motion diagrams that guide viewers through each key benefit.',
      'Every video is structured with a strong hook, clear problem demonstration, product solution walkthrough, and unambiguous call to action.',
    ],
    includes: [
      'Scriptwriting and timing breakdown (60-90 second formats)',
      'Natural AI voiceover generation in desired accent and tone',
      'Stock footage curation, screen recording integration, and motion text',
      'Sound effects (SFX), licensed music track, and audio mastering',
      'Export in 1080p Full HD MP4 with synchronized subtitles',
    ],
    deliverables: [
      'Master explainer video file (MP4 in 1080p/4K)',
      'SRT subtitle file for accessibility and silent playback',
      'Script and voiceover audio stem (.wav)',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What is the ideal length for an explainer video?',
        answer:
          'Between 60 and 90 seconds is optimal for keeping viewer attention while explaining problem, solution, and next steps.',
      },
      {
        question:
          'Can you include recordings of our actual software in action?',
        answer:
          'Yes. We can record or import high-resolution screen captures of your app and zoom in on key interface actions.',
      },
    ],
    relatedServiceSlugs: [
      'ai-video-creation',
      'promotional-video-creation',
      'animated-videos',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'AI Explainer Video Production — IT HUB Corporation',
    seoDescription:
      'Engaging AI explainer videos for software and businesses. Clear scripts, realistic voiceovers, and motion graphics that convert viewers.',
  },
  {
    id: 'promotional-video-creation',
    name: 'Promotional Video Creation',
    title: 'Promotional Video Creation',
    slug: 'promotional-video-creation',
    categorySlug: 'video-content-production',
    shortDescription:
      'Dynamic commercial promo videos designed to showcase company launches, events, and special offers.',
    description: [
      'When launching a new service or promoting a seasonal campaign, a polished promo video generates excitement across your website and social feeds.',
      'Our Promotional Video Creation service crafts cinematic, fast-paced videos with bold typography, energetic transitions, high-impact music, and clear value statements.',
      'We tailor pacing to capture attention in the first three seconds, driving viewers toward your website or booking form.',
    ],
    includes: [
      'Creative concept, script hook, and visual storyboard',
      'Video editing with rhythmic cuts and sound design',
      'Motion graphics text animation and logo reveal',
      'Licensed commercial soundtrack and audio mixing',
      'Multi-format export (16:9 for web/YouTube and 9:16 for mobile)',
    ],
    deliverables: [
      'Finished promotional video in horizontal (16:9) format',
      'Vertical (9:16) format for Instagram and TikTok stories',
      'Commercial music licensing proof',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Can we use our own footage and photos in the promo video?',
        answer:
          'Yes. We encourage integrating your real team photos, product clips, and customer footage alongside professional B-roll.',
      },
      {
        question: 'How fast can a promotional video be delivered?',
        answer:
          'Standard turnaround is 5 to 10 business days from script approval, with expedited options available for urgent launches.',
      },
    ],
    relatedServiceSlugs: [
      'video-ads-creation',
      'reels-and-shorts-creation',
      'product-promotional-videos',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Promotional Video Creation & Editing — IT HUB Corporation',
    seoDescription:
      'High-impact promotional videos for business announcements and campaigns. Cinematic cuts, bold text motion, and multi-platform formats.',
  },
  {
    id: 'youtube-video-editing',
    name: 'YouTube Video Editing',
    title: 'YouTube Video Editing',
    slug: 'youtube-video-editing',
    categorySlug: 'video-content-production',
    shortDescription:
      'Professional editing for long-form YouTube videos: jump cuts, B-roll insertions, audio leveling, and pacing.',
    description: [
      'Long-form YouTube videos require tight pacing to maintain high audience retention. Our YouTube Video Editing service turns raw camera footage into engaging, watchable episodes.',
      'We remove pauses and vocal stumbles, insert context-rich B-roll, add subtle sound effects, design on-screen text graphics, and normalize audio volume levels.',
      'We format chapters, timestamps, end-screen cards, and subscribe animations to keep viewers engaged and growing your subscriber base.',
    ],
    includes: [
      'Rough cut assembly, dead air removal, and pacing optimization',
      'Color correction and multi-mic audio mastering (EQ, compression)',
      'Engaging B-roll, pop-up graphics, and motion lower-thirds',
      'Sound effects (whooshes, pops, dings) and background music leveling',
      'End-screen template and YouTube chapter timestamps generation',
    ],
    deliverables: [
      'Final 1080p/4K master video file ready for YouTube upload',
      'SRT subtitle transcript file',
      'Chapter timestamps list for the YouTube description box',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do we send you large raw video files?',
        answer:
          'You can upload raw camera clips directly via Google Drive, Dropbox, WeTransfer, or a shared cloud storage folder.',
      },
      {
        question: 'What video editing software do you use?',
        answer:
          'We edit using Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro for professional color grading and high-fidelity audio.',
      },
    ],
    relatedServiceSlugs: [
      'youtube-marketing',
      'youtube-thumbnail-design',
      'subtitles-and-captions',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'YouTube Video Editing Services — IT HUB Corporation',
    seoDescription:
      'Professional YouTube video editing. High audience retention pacing, dynamic B-roll, sound design, and color grading for creator channels.',
  },
  {
    id: 'reels-and-shorts-creation',
    name: 'Reels and Shorts Creation',
    title: 'Reels and Shorts Creation',
    slug: 'reels-and-shorts-creation',
    categorySlug: 'video-content-production',
    shortDescription:
      'Short-form vertical videos (9:16) for Instagram Reels, YouTube Shorts, and TikTok with animated karaoke captions.',
    description: [
      'Short-form vertical video is currently the fastest organic discovery format across social media. Our Reels and Shorts Creation service turns your long videos, podcasts, or raw ideas into viral short clips.',
      'We identify the most compelling 30-to-60-second hooks, crop to 9:16 vertical canvas, and overlay dynamic word-by-word karaoke captions with high-visibility colors.',
      'Clips are engineered to capture attention within the first two seconds, maximizing completion rates and shares.',
    ],
    includes: [
      'Hook extraction from long-form podcasts, webinars, or speeches',
      'Vertical 9:16 cropping with intelligent speaker auto-reframing',
      'Animated word-by-word highlighted captions (Alex Hormozi style)',
      'Visual sound effects, zoom-ins, and animated emojis/icons',
      'Batch creation workflows (batches of 10, 20, or 30 clips)',
    ],
    deliverables: [
      'Batch of edited 9:16 vertical MP4 video clips',
      'Customized caption styling matching brand colors',
      'Suggested caption text, hashtags, and titles for each clip',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you extract Shorts from our existing YouTube videos or podcasts?',
        answer:
          'Yes. Send us a YouTube link or podcast audio file, and we will identify the top conversational moments and turn them into vertical clips.',
      },
      {
        question: 'Can you customize the caption colors and fonts?',
        answer:
          'Yes. We configure font styles, highlight colors, and text sizes to match your brand guidelines perfectly.',
      },
    ],
    relatedServiceSlugs: [
      'youtube-video-editing',
      'video-ads-creation',
      'subtitles-and-captions',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Instagram Reels & YouTube Shorts Editing — IT HUB Corporation',
    seoDescription:
      'Short-form vertical video editing for Reels, Shorts, and TikTok. Dynamic animated captions, punchy hooks, and viral pacing.',
  },
  {
    id: 'video-ads-creation',
    name: 'Video Ads Creation',
    title: 'Video Ads Creation',
    slug: 'video-ads-creation',
    categorySlug: 'video-content-production',
    shortDescription:
      'Conversion-focused video ads for Facebook, Instagram, TikTok, and YouTube designed for paid acquisition campaigns.',
    description: [
      'Video ads require a different approach than organic content: they must hook scrollers immediately, present a clear problem/solution bridge, and finish with a strong direct call to action.',
      'Our Video Ads Creation service builds paid acquisition creatives tested for high click-through rates and low cost per acquisition.',
      'We deliver multiple hook variations (the first 3-5 seconds) so you can test multiple creative angles in your ad manager without re-shooting entire videos.',
    ],
    includes: [
      'Ad creative concept and direct-response script drafting',
      '3 distinct hook variations for creative split testing',
      'Captions designed for silent auto-play mobile viewing',
      'Platform-compliant aspect ratios (1:1 feed, 9:16 stories/reels)',
      'Clear on-screen CTA cards and URL end-screens',
    ],
    deliverables: [
      'Primary video ad creative in 1:1 and 9:16 dimensions',
      'Alternate hook video files for A/B testing',
      'Copywriting suggestions for the ad headline and primary text',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Why do you provide multiple hook variations?',
        answer:
          'The first 3 seconds dictate 70%+ of ad performance. Testing 3 different opening hooks allows you to find the most cost-effective creative quickly.',
      },
      {
        question: 'Do the ads work without sound?',
        answer:
          'Yes. Over 65% of mobile users browse social feeds with audio muted, so all ads feature bold, readable on-screen subtitles and graphic callouts.',
      },
    ],
    relatedServiceSlugs: [
      'facebook-instagram-ads',
      'promotional-video-creation',
      'reels-and-shorts-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'High-Converting Video Ads Creation — IT HUB Corporation',
    seoDescription:
      'Performance video ad creative for Meta, TikTok, and YouTube. Strong opening hooks, conversion-focused scripting, and multi-format exports.',
  },
  {
    id: 'animated-videos',
    name: 'Animated Videos',
    title: 'Animated Videos',
    slug: 'animated-videos',
    categorySlug: 'video-content-production',
    shortDescription:
      '2D vector character animation, storyboarded cartoon explainers, and kinetic storytelling videos.',
    description: [
      'Animation allows you to visualize abstract concepts, futuristic technologies, or sensitive subjects that cannot easily be filmed with live actors.',
      'Our Animated Videos service creates custom 2D animated explainers featuring clean vector characters, custom environments, and smooth kinetic storytelling.',
      'From healthcare patient explanations to enterprise software overviews, animation keeps viewers entertained while conveying key information clearly.',
    ],
    includes: [
      'Custom character design and scene illustration',
      'Full visual storyboard with scene-by-scene script synchronization',
      'Professional voice actor narration recording',
      '2D character rigging, keyframe animation, and scene transitions',
      'Custom sound design, foley effects, and licensed background music',
    ],
    deliverables: [
      'Full HD animated master video file (1080p/4K MP4)',
      'Complete vector character and illustration asset library',
      'Voiceover audio track and script document',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Do you create custom characters or use generic templates?',
        answer:
          'We design bespoke vector illustrations and characters tailored to your brand style rather than reusing generic template clipart.',
      },
      {
        question:
          'How long does a 60-second 2D animated video take to produce?',
        answer:
          'Custom animation involves detailed storyboarding, illustration, voiceover, and keyframing, typically taking 3 to 5 weeks from script to delivery.',
      },
    ],
    relatedServiceSlugs: [
      'motion-graphics',
      'ai-explainer-videos',
      'scriptwriting',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: '2D Animated Explainer Videos — IT HUB Corporation',
    seoDescription:
      'Custom 2D animated videos for businesses. Engaging characters, bespoke storyboarding, professional voiceovers, and smooth keyframe animation.',
  },
  {
    id: 'motion-graphics',
    name: 'Motion Graphics',
    title: 'Motion Graphics',
    slug: 'motion-graphics',
    categorySlug: 'video-content-production',
    shortDescription:
      'Kinetic typography, animated logo reveals, UI interaction mockups, and broadcast title packages.',
    description: [
      'Motion graphics add visual sophistication and polish to any video production, transforming flat logos, numbers, and user interfaces into living animations.',
      'Our Motion Graphics service designs animated logo reveals, kinetic typography titles, lower-third graphic packages, and screen mockup animations in After Effects.',
      'We deliver transparent alpha channel video files (.mov ProRes 4444) so your internal team can overlay branded animations onto future video projects easily.',
    ],
    includes: [
      'Animated logo stingers and video intro/outro sequences',
      'Kinetic typography animations synchronizing voiceover words',
      'Animated data visualization (counters, bar charts, line graphs)',
      'Software UI interface motion mockups and cursor interaction demos',
      'Alpha channel transparency exports for seamless overlay use',
    ],
    deliverables: [
      'Finished motion graphic video assets in MP4 and ProRes 4444',
      'Adobe After Effects source project files (optional upon request)',
      'Transparent overlay files for video editors',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'What is an alpha channel file?',
        answer:
          'An alpha channel video (.mov) has a transparent background, allowing you to drop an animated logo or title over any background video in your editing software.',
      },
      {
        question:
          'Can you animate statistics or growth charts for investor presentations?',
        answer:
          'Yes. We specialize in animating financial charts, metric counters, and operational diagrams for investor decks and annual reviews.',
      },
    ],
    relatedServiceSlugs: [
      'animated-videos',
      'promotional-video-creation',
      'graphic-design',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Motion Graphics & Logo Animation — IT HUB Corporation',
    seoDescription:
      'Premium motion graphics in After Effects. Animated logo stings, kinetic typography, UI motion mockups, and transparent overlay packages.',
  },
  {
    id: 'subtitles-and-captions',
    name: 'Subtitles and Captions',
    title: 'Subtitles and Captions',
    slug: 'subtitles-and-captions',
    categorySlug: 'video-content-production',
    shortDescription:
      'Accurate closed captions, open burned-in subtitles, and multilingual translation files (SRT/VTT).',
    description: [
      'Over 75% of social media videos are watched with the sound muted, and accessibility standards (WCAG) require accurate closed captions for hearing-impaired audiences.',
      'Our Subtitles and Captions service provides human-verified, time-synchronized subtitles for videos of any length.',
      'We deliver industry-standard subtitle files (SRT, VTT) for YouTube and corporate portals, or burn styled, colored subtitles directly into the video for social feeds.',
    ],
    includes: [
      'Human-verified audio transcription with zero phonetic errors',
      'Millisecond-accurate timecode synchronization',
      'Delivery in universal subtitle formats: SRT, VTT, and TXT transcript',
      'Hardcoded (burned-in) styled subtitles with custom font and background box',
      'Optional translation into Spanish, French, German, or other languages',
    ],
    deliverables: [
      'Master .srt and .vtt caption files',
      'Video with burned-in subtitles (if requested)',
      'Plain text transcript document with timestamps and speaker labels',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'Why not just use automatic YouTube captions?',
        answer:
          'Automatic captions often mishear technical terminology, brand names, and industry jargon, which can look unprofessional or alter your message.',
      },
      {
        question: 'What is the difference between open and closed captions?',
        answer:
          'Closed captions can be turned on/off by the viewer (SRT file), while open (burned-in) captions are permanently baked into the video frames.',
      },
    ],
    relatedServiceSlugs: [
      'reels-and-shorts-creation',
      'youtube-video-editing',
      'ai-explainer-videos',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Video Subtitles & Closed Captioning (SRT) — IT HUB Corporation',
    seoDescription:
      'Accurate subtitles and closed captioning services. Time-synced SRT/VTT files, burned-in social captions, and accessible video transcripts.',
  },
  {
    id: 'scriptwriting',
    name: 'Scriptwriting',
    title: 'Scriptwriting',
    slug: 'scriptwriting',
    categorySlug: 'video-content-production',
    shortDescription:
      'Engaging direct-response video scripts, voiceover narration, and interview question outlines.',
    description: [
      'A great video begins with a compelling script. Even the most stunning animations will fail if the underlying message is rambling, unclear, or dull.',
      'Our Scriptwriting service crafts focused, natural-sounding scripts tailored for commercial spots, YouTube explainers, corporate training, and social video ads.',
      'We write in two-column audio/visual formats (AV scripts) so voice talent and video editors understand the precise visual timing intended for every sentence.',
    ],
    includes: [
      'Creative briefing and narrative arc development',
      'Direct-response opening hooks and benefit-driven messaging',
      'Two-column Audio/Visual (AV) storyboard script formatting',
      'Voiceover timing estimation (words per minute calibration)',
      'Revisions based on client legal and executive review',
    ],
    deliverables: [
      'Final formatted two-column AV script (Word and PDF)',
      'Voiceover pronunciation guide for technical names and acronyms',
      'Short social video cutdown options',
    ],
    process: standardProcess,
    faqs: [
      {
        question: 'How do you calculate script length for a 60-second video?',
        answer:
          'A comfortable conversational speaking rate is approximately 130 to 145 words per minute. We pace scripts precisely to avoid rushed delivery.',
      },
      {
        question:
          'Can you rewrite our internal technical draft into a clear customer script?',
        answer:
          'Yes. We frequently take dense engineering or product whitepapers and translate them into accessible, engaging customer-facing scripts.',
      },
    ],
    relatedServiceSlugs: [
      'ai-explainer-videos',
      'animated-videos',
      'content-marketing',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Professional Video Scriptwriting Services — IT HUB Corporation',
    seoDescription:
      'High-impact video scriptwriting for commercials, explainers, and YouTube. Two-column AV scripts, natural narration, and compelling hooks.',
  },
  {
    id: 'product-promotional-videos',
    name: 'Product Promotional Videos',
    title: 'Product Promotional Videos',
    slug: 'product-promotional-videos',
    categorySlug: 'video-content-production',
    shortDescription:
      'Showcase physical or digital products with close-up feature demonstrations, 3D angles, and unboxing clips.',
    description: [
      'Customers want to see products in action before committing to a purchase. Our Product Promotional Videos service highlights product features, design craftsmanship, and real-world utility.',
      'We combine macro close-ups, 3D computer-generated rotations, lifestyle contextual shots, and animated callout arrows highlighting key specifications.',
      'Perfect for Shopify hero banners, Amazon product listing galleries, and crowdfunding Kickstarter campaigns.',
    ],
    includes: [
      'Product feature breakdown and shot list planning',
      'Lighting setup, macro photography, and clean product turntable clips',
      'Callout graphics showing materials, dimensions, and technical specs',
      'Music licensing, sound effects, and color grading for commercial polish',
      'Formats optimized for Amazon product videos, Shopify, and social ads',
    ],
    deliverables: [
      'Main product showcase video (30-60 seconds)',
      'E-commerce gallery looping snippet (15 seconds, silent)',
      'High-resolution promotional thumbnail images',
    ],
    process: standardProcess,
    faqs: [
      {
        question:
          'Can you create videos for digital products and SaaS software?',
        answer:
          'Yes. We create 3D isometric device mockups that showcase your software or web app on interactive laptops, tablets, and phones.',
      },
      {
        question:
          'Are product videos compliant with Amazon video upload rules?',
        answer:
          'Yes. We export to Amazon-compliant technical specifications (no unauthorized review claims, clean aspect ratio, clean audio).',
      },
    ],
    relatedServiceSlugs: [
      'promotional-video-creation',
      'product-packaging-design',
      'video-ads-creation',
    ],
    status: 'published',
    isFeatured: false,
    seoTitle: 'Product Promotional Video Production — IT HUB Corporation',
    seoDescription:
      'Engaging product promotional videos for e-commerce, Amazon, and social ads. Macro close-ups, feature callouts, and 3D device mockups.',
  },
];
