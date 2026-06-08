export interface ServicePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  h1Accent: string;
  intro: string[];
  startingAt: string;
  startingAtNumber: string;
  timeline: string;
  whatYouGet: { title: string; description: string }[];
  process: { title: string; description: string }[];
  caseStudies: { name: string; url: string; description: string }[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSubtext: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "mvp-development",
    metaTitle: "MVP Development Agency: Build a SaaS in 4 Weeks",
    metaDescription:
      "We build production-ready MVPs in 4 weeks for founders. Fixed price from $8,000. Auth, payments, deployment included. See live products we've shipped.",
    kicker: "MVP Development",
    h1: "Build your MVP",
    h1Accent: "in 4 weeks.",
    intro: [
      "If you've been quoted $50,000 and 6 months for an MVP, you've been quoted wrong. Most MVPs don't need 200 features, they need 5 features that work, a paywall, and a way to get to users.",
      "We build production-grade MVPs in 4 weeks for non-technical founders, technical founders who don't have time, and operators validating a side bet. Fixed price, fixed scope, weekly demos. You see working software every Friday, not Figma mockups, not Jira tickets, the real thing.",
      "Every MVP we ship includes authentication, Stripe payments, a database, hosting, SEO basics, and 30 days of free support after launch. The five products at the bottom of this page were all built using this exact playbook.",
    ],
    startingAt: "From $8,000",
    startingAtNumber: "8000",
    timeline: "2-6 weeks",
    whatYouGet: [
      {
        title: "Full-stack web app",
        description:
          "Next.js or your preferred stack. Frontend, backend, database, auth, and payments, wired up end-to-end and deployed to your domain.",
      },
      {
        title: "Authentication that works",
        description:
          "Magic link, Google, GitHub, email/password, or all of the above. Supabase or Firebase under the hood. Password reset flows tested.",
      },
      {
        title: "Stripe payments & subscriptions",
        description:
          "Checkout, subscriptions, webhooks, and customer portal. Handle upgrades, downgrades, cancellations, and failed payments without a support ticket.",
      },
      {
        title: "Admin & analytics dashboards",
        description:
          "User list, usage metrics, revenue. Either custom-built or wired to Supabase Studio / Stripe Dashboard / GA4, whatever fits.",
      },
      {
        title: "SEO setup",
        description:
          "Sitemap, structured data, meta tags, OpenGraph, Core Web Vitals optimization. Submitted to Google Search Console on launch day.",
      },
      {
        title: "Production deployment",
        description:
          "Custom domain, SSL, automated deploys from GitHub. Hosted on Railway, Vercel, or AWS, your choice or ours.",
      },
      {
        title: "30 days of free support",
        description:
          "Bug fixes, small tweaks, deploy issues, and questions. We don't disappear after handover.",
      },
    ],
    process: [
      {
        title: "Day 1: Quote in 24 hours",
        description:
          "You fill out the form. We reply with a fixed-price quote, scope, and timeline within a day. No exploratory calls required (but available if you want one).",
      },
      {
        title: "Week 1: Architecture + first build",
        description:
          "We pick the stack, set up the repo, and start shipping. Auth and the core data model usually land by end of week 1. You get a staging link with real working features.",
      },
      {
        title: "Week 2-3: Core product",
        description:
          "Payments, the main user flow, dashboards, AI features (if any). Demo every Friday. You give feedback Monday morning, it's in by Wednesday.",
      },
      {
        title: "Week 4: Polish + launch",
        description:
          "Bug fixes, performance, SEO, responsive design, deploy to your custom domain. Then 30 days of free support kicks in.",
      },
    ],
    caseStudies: [
      {
        name: "ResumeIdol",
        url: "https://resumeidol.com",
        description:
          "AI resume tailor. Magic link auth, Stripe Pro tier, AI integration, SEO blog. Live in 2 weeks.",
      },
      {
        name: "Knoah",
        url: "https://www.getknoah.com",
        description:
          "RAG knowledge base SaaS. Document ingestion, semantic search, Claude answers, team invites, Stripe billing. Live in 3 weeks.",
      },
      {
        name: "BlushWed",
        url: "https://blushwed.com",
        description:
          "AI wedding planning platform. 33 routes, blog, vendor recommendations, Stripe subscriptions. Live in 2 weeks.",
      },
    ],
    faqs: [
      {
        q: "What if my MVP needs more than 4 weeks?",
        a: "Most MVPs fit in 4 weeks if scope is honest. If yours genuinely needs 6 weeks, we'll quote 6 weeks, not 4 with surprise overruns. Larger products can be split into a 4-week MVP launch followed by a maintenance retainer for v2 features.",
      },
      {
        q: "Do I own the code?",
        a: "Yes, fully. Everything goes into a GitHub repo you own from day one. We commit to your repo, not ours. You can hire anyone else to take it over the day after launch.",
      },
      {
        q: "Can you work with my designer / co-founder?",
        a: "Yes. If you have a designer with Figma files, we'll build to spec. If you have a technical co-founder, we'll work alongside them in the same repo with PR reviews.",
      },
      {
        q: "What if I don't know what I want yet?",
        a: "Start with the $500 Quick Audit. We'll review your idea, suggest the smallest version that proves the concept, and give you a roadmap. Most clients realize their MVP is 30% smaller than they thought.",
      },
      {
        q: "What's NOT included?",
        a: "Domain registration ($10/yr, you keep it), hosting after the first month (~$5-20/mo on Railway), Stripe fees (2.9%+30¢, paid by you on real transactions), and ongoing AI API usage if you're using Claude/GPT (typically $5-50/mo at MVP scale). We give you a cost estimate up front.",
      },
    ],
    ctaHeadline: "Ready to ship your MVP?",
    ctaSubtext: "Tell us what you're building. Quote in 24 hours.",
  },
  {
    slug: "mobile-app-development",
    metaTitle: "Mobile App Development Agency: iOS & Android Apps",
    metaDescription:
      "Cross-platform React Native or native SwiftUI iOS apps from $8,000. App Store submission, in-app purchases, push notifications included. Built to pass review on the first try.",
    kicker: "Mobile App Development",
    h1: "Mobile apps that ship to",
    h1Accent: "the App Store.",
    intro: [
      "Mobile development is full of landmines: App Store rejections, push notification setup, in-app purchase StoreKit configuration, iOS 17 vs iOS 18 quirks, Android push reliability, App Tracking Transparency, privacy manifests. A first-time submission has a roughly 40% rejection rate.",
      "We build cross-platform apps with React Native (Expo) when you need iOS + Android fast, and native SwiftUI when you need Apple-grade polish or HealthKit-deep integration. Either way, you get a real app in the App Store, not a prototype.",
      "Every mobile project includes the backend API, in-app purchase setup, push notifications, deep links, App Store and Play Store submission, and the privacy paperwork Apple now requires. We handle the review process, including responding to rejections.",
    ],
    startingAt: "From $8,000",
    startingAtNumber: "8000",
    timeline: "4-8 weeks",
    whatYouGet: [
      {
        title: "iOS, Android, or both",
        description:
          "React Native (Expo) for true cross-platform, one codebase, both stores. SwiftUI for native iOS when you need HealthKit, ARKit, or Apple-grade animation.",
      },
      {
        title: "App Store + Play Store submission",
        description:
          "We write the listing copy, take screenshots in the right device frames, fill out the privacy questionnaire, and submit. Including the App Tracking Transparency dance.",
      },
      {
        title: "In-app purchases & subscriptions",
        description:
          "StoreKit 2 (iOS) and Google Play Billing (Android) wired up properly, receipts validated server-side, restore purchases working, free trials handled.",
      },
      {
        title: "Push notifications",
        description:
          "APNs and FCM setup, device token storage, and a way to send notifications (OneSignal, Expo Push, or a custom server).",
      },
      {
        title: "Camera, location, HealthKit",
        description:
          "Whatever device APIs your app needs. Permissions handled gracefully, no \"why does this app want my camera\" rejection from Apple.",
      },
      {
        title: "Backend API",
        description:
          "Supabase, Firebase, or a custom Node/Python backend. Auth, data, file storage, push triggers, everything the app talks to.",
      },
      {
        title: "OTA updates",
        description:
          "EAS Update (Expo) or a custom OTA path so you can ship JS-only fixes without resubmitting to the App Store.",
      },
    ],
    process: [
      {
        title: "Week 1: Stack decision + scaffolding",
        description:
          "We decide React Native vs SwiftUI based on your features. Set up the repo, EAS or Xcode project, signing, bundle IDs. By end of week 1 you have a TestFlight build of a 'Hello World' with your branding.",
      },
      {
        title: "Week 2-4: Core features",
        description:
          "Your main user flows. Auth, data, payments, the screens that make the product feel like itself. New TestFlight build every Friday.",
      },
      {
        title: "Week 5-6: Polish + integrations",
        description:
          "Push, deep links, HealthKit/Camera/Location, IAP edge cases, dark mode, accessibility. The 'making it not feel beta' phase.",
      },
      {
        title: "Week 7-8: App Store submission",
        description:
          "Screenshots, listing, privacy questionnaire, submission. We handle reviewer responses if they push back. Live within 1-2 weeks of submission.",
      },
    ],
    caseStudies: [
      {
        name: "KaraokeLover (web + mobile)",
        url: "https://www.karaokelover.com",
        description:
          "Real-time karaoke with synced lyrics, recording, and voice scoring. SwiftUI iOS app on the way.",
      },
      {
        name: "HerSync iOS",
        url: "https://blushwed.com",
        description:
          "Cycle-syncing app with React Native + Expo SDK 55. StoreKit IAP, Supabase backend, App Store ready.",
      },
    ],
    faqs: [
      {
        q: "React Native or SwiftUI, which should I pick?",
        a: "If you need iOS + Android with shared code, React Native (we use Expo). If you need Apple-grade polish, HealthKit-deep features, or expect 80%+ iOS users, SwiftUI. We'll recommend on the call.",
      },
      {
        q: "How much do Apple and Google charge?",
        a: "Apple: $99/year for the developer account. Google: $25 one-time. App Store + Play Store take 30% of digital purchases (15% if you're under $1M/yr through Apple's small-business program). These are not paid to us.",
      },
      {
        q: "How long until my app is in the App Store?",
        a: "Typically 5-7 weeks total. About 4-6 weeks of build + 1-2 weeks of Apple review. We optimize for first-pass approval, most of our submissions clear review in under 24 hours.",
      },
      {
        q: "What if Apple rejects the app?",
        a: "We respond to the reviewer, fix what they flagged, and resubmit. Most rejections are resolvable in 24-48 hours (privacy strings, screenshots, IAP test accounts). Rejection-handling is included in the price, no extra fees.",
      },
      {
        q: "Can you do Android only?",
        a: "Yes. React Native or Kotlin. Often cheaper because Google Play review is much faster and less strict than App Store.",
      },
    ],
    ctaHeadline: "Build your mobile app",
    ctaSubtext: "Quote in 24 hours. App Store submission included.",
  },
  {
    slug: "ai-integration",
    metaTitle: "AI Integration Services: RAG, Chatbots, Automation",
    metaDescription:
      "Production-grade AI features from $5,000. RAG chatbots, document processing, voice transcription, content generation. Claude, GPT, Deepgram. Not a ChatGPT wrapper.",
    kicker: "AI Integration",
    h1: "AI features that ship",
    h1Accent: "to production.",
    intro: [
      "Every founder has been pitched AI. Most of what's been built is a thin ChatGPT wrapper that answers wrong, hallucinates citations, and falls over the moment you upload a real document. We build the kind that doesn't.",
      "We add AI to existing products and build AI-first products from scratch. RAG knowledge bases with proper citation, document processing pipelines for PDFs and DOCX, voice transcription with Deepgram or Whisper, content generation with Claude, and workflow automation that actually replaces a human task.",
      "What you don't get: generic GPT-4 wrapper, demo that breaks on real data, vague \"AI strategy\" decks. What you do get: working code, evaluation against real inputs, cost estimates per query, and a system that's safe to put in front of paying customers.",
    ],
    startingAt: "From $5,000",
    startingAtNumber: "5000",
    timeline: "2-6 weeks",
    whatYouGet: [
      {
        title: "RAG knowledge bases",
        description:
          "Upload docs, ask questions, get answers with exact source citations. Vector embeddings (OpenAI, Voyage), Supabase pgvector or Pinecone, Claude or GPT-4 for generation. Same architecture that powers Knoah.",
      },
      {
        title: "AI chatbots & agents",
        description:
          "Conversational interfaces grounded in your data. Tool use, function calling, multi-turn memory, and guardrails so it doesn't go off-script.",
      },
      {
        title: "Document processing",
        description:
          "PDF, DOCX, image OCR, structured data extraction. Process invoices, resumes, contracts, medical records, at scale, with Claude or GPT-4 Vision.",
      },
      {
        title: "Voice transcription & analysis",
        description:
          "Deepgram (real-time, fast, cheap) or Whisper (offline, accurate). Speaker diarization, timestamps, and downstream Claude analysis (summaries, action items, sentiment).",
      },
      {
        title: "AI content generation",
        description:
          "Resume rewrites, blog post drafts, product descriptions, email replies. With your tone, your data, and your guardrails. Same engine that powers ResumeIdol.",
      },
      {
        title: "Video AI pipelines",
        description:
          "Auto-clip generation, captions, viral moment detection. Deepgram + Claude + FFmpeg. Same pipeline that powers Clippified.",
      },
      {
        title: "Workflow automation",
        description:
          "n8n, Zapier, or custom Node workers. Email triage, invoice generation, lead scoring, report writing, anything where a human is currently doing pattern-matching.",
      },
    ],
    process: [
      {
        title: "Week 1: Spec + evaluation harness",
        description:
          "What does \"correct\" mean for your use case? We define eval criteria up front and build a test set. This is the step most agencies skip and most AI products fail on.",
      },
      {
        title: "Week 2-4: Build + tune",
        description:
          "Pipeline implementation, prompt engineering, model selection (Claude Opus vs Sonnet vs Haiku, GPT-4 vs 4o, when to fine-tune). Run against eval set every iteration.",
      },
      {
        title: "Week 5: Production hardening",
        description:
          "Rate limiting, cost monitoring per query, caching, fallback models, error handling. So a 5x traffic spike doesn't blow your API bill or crash the product.",
      },
      {
        title: "Week 6: Launch + handover",
        description:
          "Deploy, monitor in production, hand over the eval harness so you can keep improving after we're gone.",
      },
    ],
    caseStudies: [
      {
        name: "Knoah",
        url: "https://www.getknoah.com",
        description:
          "RAG knowledge base. Sub-2-second response on 10K+ document corpora, exact citations, Claude under the hood.",
      },
      {
        name: "Clippified",
        url: "https://clippified.com",
        description:
          "Video → viral clips. Deepgram transcribes, Claude picks moments, FFmpeg renders with captions. Sub-90-second processing.",
      },
      {
        name: "ResumeIdol",
        url: "https://resumeidol.com",
        description:
          "AI resume tailor. Claude rewrites bullets to match a job description while preserving voice. Sub-10-second generation.",
      },
    ],
    faqs: [
      {
        q: "Will it hallucinate?",
        a: "Less than out-of-the-box GPT, because we ground responses in your data via RAG and force exact citations. We can't promise 0%, nobody can, but we can promise an eval harness so you can measure it.",
      },
      {
        q: "Claude or GPT?",
        a: "Depends on the task. Claude is better at long-context reasoning, careful instruction-following, and writing. GPT-4o is better at multimodal and faster. We pick per use case and often use both. We're also vendor-agnostic, if you'd rather use only one provider, we'll respect that.",
      },
      {
        q: "What about cost at scale?",
        a: "We cost-model up front. Typical RAG chatbot is $0.01-$0.10 per query depending on context size and model. We add caching, prompt compression, and routing to cheaper models where possible. You'll know the per-query cost before launch.",
      },
      {
        q: "Can you fine-tune?",
        a: "Sometimes. 90% of the time, prompt engineering + RAG beats fine-tuning. The other 10% (very specific style, structured output reliability) we'll fine-tune Haiku, Llama, or a small open-source model, usually for $1K-3K extra.",
      },
      {
        q: "Is my data safe?",
        a: "We default to Claude (Anthropic) and OpenAI's enterprise APIs which don't train on your data. For regulated workloads (HIPAA, etc.) we can route to AWS Bedrock or Azure OpenAI inside your own cloud account.",
      },
    ],
    ctaHeadline: "Add AI to your product",
    ctaSubtext: "Tell us the use case. Quote in 24 hours.",
  },
  {
    slug: "landing-page-design",
    metaTitle: "Custom Landing Page Design & Development from $3,000",
    metaDescription:
      "Custom-coded landing pages that convert. SEO setup, analytics, contact forms, deployed to your domain. From $3,000. Not a WordPress template.",
    kicker: "Landing Page Design",
    h1: "A landing page that",
    h1Accent: "converts.",
    intro: [
      "A WordPress template costs $50 and converts like a WordPress template. We build custom-coded landing pages with the same stack we use for $50K SaaS apps, Next.js, Tailwind, Framer Motion, sized down to a single page that loads under a second and ranks on Google.",
      "Every landing page we ship includes the page itself, mobile-responsive design, a contact form connected to your email or CRM, analytics, SEO basics (sitemap, structured data, OpenGraph), and deployment to your custom domain. From quote to live in 1-2 weeks.",
      "Used for product launches, agency sites, lead capture pages, course pages, app marketing, and consultancy sites. All five live products linked at the bottom of this site started with a landing page built on this exact pattern.",
    ],
    startingAt: "From $3,000",
    startingAtNumber: "3000",
    timeline: "1-2 weeks",
    whatYouGet: [
      {
        title: "Custom design, not templates",
        description:
          "Designed for your brand and your product. We don't use Webflow templates or WordPress themes. Every animation and interaction is intentional.",
      },
      {
        title: "Mobile-responsive",
        description:
          "Designed mobile-first. Tested on real devices, not just Chrome DevTools. Touch targets, font sizes, scroll behavior, the lot.",
      },
      {
        title: "SEO setup",
        description:
          "Sitemap, robots.txt, structured data (Organization, FAQPage, BreadcrumbList), meta tags, OpenGraph, Twitter cards. Submitted to Google Search Console.",
      },
      {
        title: "Contact form & lead capture",
        description:
          "Form connected to your email, CRM, Slack, Notion, or Google Sheet. Spam protection. Email confirmations to you and the lead.",
      },
      {
        title: "Analytics integration",
        description:
          "GA4 + your choice of Plausible, PostHog, or Mixpanel. Conversion tracking on the form. Heatmap-ready (Hotjar, FullStory) if you want it.",
      },
      {
        title: "Performance optimization",
        description:
          "Targeting Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS under 0.1. Image optimization, font preloading, code splitting.",
      },
      {
        title: "Hosting & deployment",
        description:
          "Deployed to your custom domain on Vercel or Railway. Auto-deploys from GitHub if you want to make edits later. SSL, CDN, the works.",
      },
    ],
    process: [
      {
        title: "Day 1-2: Brief + content",
        description:
          "You fill out the form. We confirm scope and ask for: your value prop in one sentence, three benefits, social proof, and any visual references you like. No 60-question discovery deck.",
      },
      {
        title: "Day 3-7: Design in code",
        description:
          "We design directly in Next.js, no Figma round-trips. You see the actual page, on real devices, by end of week 1. One round of revisions included.",
      },
      {
        title: "Day 8-10: Polish + integrations",
        description:
          "Form integration, analytics, SEO, performance tuning, the loading-state details that separate a $50 page from a $3K page.",
      },
      {
        title: "Day 11-14: Launch",
        description:
          "Deploy to your custom domain. Submit to Google Search Console. 30 days of free support starts.",
      },
    ],
    caseStudies: [
      {
        name: "WeShipLabs",
        url: "https://www.weshiplabs.com",
        description:
          "This site you're reading. Built on the same stack we use for client projects.",
      },
      {
        name: "ResumeIdol",
        url: "https://resumeidol.com",
        description:
          "Marketing landing + product. Hero, social proof, pricing, blog, converting paid signups since launch.",
      },
    ],
    faqs: [
      {
        q: "Why $3K when I can get a Webflow site for $500?",
        a: "You can, and if a Webflow template fits your brand, do that. Our pages are for founders who've tried templates and want something that looks like their own product, loads faster, ranks better, and doesn't have a Webflow URL in the source. Different tier of work.",
      },
      {
        q: "Can you also do the copywriting?",
        a: "We can write a draft based on your brief and refine with you, but copy is your superpower, you know your customer better than we do. If you want a copywriter, we partner with a couple of good ones we can refer.",
      },
      {
        q: "What if I want to add more pages later?",
        a: "Easy. Either you take over the GitHub repo and add pages yourself, or we add them on a maintenance retainer ($150-300/mo). Multi-page sites scope into the $5-8K range.",
      },
      {
        q: "Do you do branding (logo, colors)?",
        a: "If you have a brand, we'll use it. If you don't, we'll pick smart defaults (one accent color, a font pair, a vibe). We don't do full brand identity work, for that you want a brand designer.",
      },
      {
        q: "Will it rank on Google?",
        a: "It'll be technically optimized to rank: clean HTML, structured data, Core Web Vitals, sitemap, semantic headings. Whether it actually ranks depends on your domain authority and content depth, which we can't fix in a single landing page. We'll be honest about expectations.",
      },
    ],
    ctaHeadline: "Build a landing page that converts",
    ctaSubtext: "Live on your domain in 1-2 weeks. Quote in 24 hours.",
  },
];

export const servicePageBySlug = (slug: string) =>
  servicePages.find((p) => p.slug === slug);
