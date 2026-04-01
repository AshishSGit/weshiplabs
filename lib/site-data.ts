import type { Service, Project } from "@/types";

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    subtitle: "Full-stack web apps that actually work",
    description:
      "SaaS platforms, dashboards, internal tools, marketplaces, landing pages — anything that runs in a browser. We handle frontend, backend, database, auth, payments, deployment, and SEO. You get a running product, not a zip file.",
    features: [
      "SaaS platforms & subscription products",
      "Admin dashboards & analytics panels",
      "Landing pages & marketing sites",
      "E-commerce & marketplace features",
      "Internal tools & company portals",
      "Authentication (magic link, Google, GitHub, email)",
      "Stripe payments, subscriptions & invoicing",
      "Real-time features (WebSockets, live updates)",
      "SEO optimization, sitemap, meta tags",
      "Production deployment (Railway, Vercel, AWS)",
    ],
    startingAt: "$3,000",
    timeline: "1–6 weeks",
    icon: "rocket",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "iOS, Android, or both",
    description:
      "Cross-platform with React Native or native iOS with SwiftUI. We handle App Store submission, push notifications, in-app purchases, and all the platform-specific headaches. Built to pass Apple review on the first try.",
    features: [
      "React Native cross-platform (iOS + Android)",
      "Native iOS with SwiftUI",
      "App Store & Play Store submission",
      "In-app purchases & subscriptions (StoreKit, Google Play Billing)",
      "Push notifications",
      "Camera, location, HealthKit integrations",
      "Offline support & local storage",
      "Deep linking & universal links",
      "Backend API included",
      "30 days post-launch support",
    ],
    startingAt: "$8,000",
    timeline: "4–8 weeks",
    icon: "smartphone",
  },
  {
    id: "ai-features",
    title: "AI Features & Automation",
    subtitle: "Make your product smarter",
    description:
      "We add AI to your existing product or build AI-first tools from scratch. RAG chatbots, document processing, voice transcription, content generation, workflow automation — production-grade, not a ChatGPT wrapper.",
    features: [
      "RAG knowledge bases with source citations",
      "AI chatbots & conversational interfaces",
      "Document processing & data extraction (PDF, DOCX, images)",
      "Voice transcription & audio analysis (Whisper, Deepgram)",
      "AI content generation & summarization",
      "Intelligent search & recommendations",
      "Workflow automation (email, invoices, reports)",
      "Video processing & AI clip generation",
      "Custom model integration (Claude, GPT, Gemini, open-source)",
      "Vector databases & semantic search",
    ],
    startingAt: "$5,000",
    timeline: "2–6 weeks",
    icon: "brain",
  },
  {
    id: "consulting",
    title: "Consulting & Rescue",
    subtitle: "Fix what's broken, plan what's next",
    description:
      "Your last developer disappeared. Your app is slow. You don't know what tech stack to use. We audit existing codebases, fix broken projects, and create architecture plans you can actually follow.",
    features: [
      "Codebase audit & technical debt assessment",
      "Architecture planning & tech stack selection",
      "Performance optimization (speed, SEO, Core Web Vitals)",
      "AI opportunity assessment for your business",
      "Rescue & fix broken/abandoned projects",
      "Database design & migration",
      "API design & integration planning",
      "Security review & hardening",
      "DevOps setup (CI/CD, monitoring, logging)",
      "Technical due diligence for investors",
    ],
    startingAt: "$500",
    timeline: "1–5 days",
    icon: "wrench",
  },
];

export const projects: Project[] = [
  {
    slug: "knoah",
    name: "Knoah",
    tagline: "AI-Powered Knowledge Base for Teams",
    description:
      "Upload docs, get instant answers with source citations. Built for teams drowning in Notion pages and Google Drives nobody reads.",
    challenge:
      "Teams waste hours searching through scattered documents. Existing tools require complex setup and per-seat pricing kills adoption.",
    solution:
      "Built a RAG-powered knowledge base that ingests PDFs, docs, and URLs. Uses vector embeddings for semantic search and Claude for natural-language answers with exact source citations.",
    results:
      "Live SaaS product with paying customers. Sub-2-second response times on 10K+ document corpora. Stripe billing, team invites, and usage analytics built in.",
    techStack: ["Next.js", "TypeScript", "Claude API", "OpenAI Embeddings", "Supabase", "Stripe", "Tailwind"],
    category: "web",
    liveUrl: "https://www.getknoah.com",
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Document Types", value: "PDF, DOCX, URL" },
      { label: "Time to Build", value: "3 weeks" },
    ],
    featured: true,
  },
  {
    slug: "clippified",
    name: "Clippified",
    tagline: "AI-Powered Clip Generator",
    description:
      "Paste a YouTube URL, get viral-ready clips with captions. Automatically finds the best moments, transcribes with Deepgram, and renders with FFmpeg.",
    challenge:
      "Content creators spend 4-6 hours editing a single long video into short clips. Existing tools are either expensive or produce low-quality captions.",
    solution:
      "Built an automated pipeline: Deepgram transcribes audio, Claude identifies viral-worthy segments, FFmpeg renders clips with styled captions. All processed server-side with R2 storage.",
    results:
      "Production SaaS with Stripe subscriptions. Processes videos up to 3 hours long. Average clip generation under 90 seconds.",
    techStack: ["Next.js", "Deepgram", "Claude API", "FFmpeg", "Cloudflare R2", "Supabase", "Stripe"],
    category: "web",
    liveUrl: "https://clippified.com",
    metrics: [
      { label: "Processing Time", value: "<90s" },
      { label: "Max Video Length", value: "3 hours" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
  {
    slug: "resumeidol",
    name: "ResumeIdol",
    tagline: "AI-Powered Resume Tailor",
    description:
      "Paste your resume and a job description — get a perfectly tailored version in seconds. Automatically rewrites bullet points to match the role.",
    challenge:
      "Job seekers send the same generic resume everywhere. Tailoring manually takes 30-60 minutes per application.",
    solution:
      "Claude analyzes the job description, identifies key requirements, and rewrites resume bullet points to highlight relevant experience. Preserves voice while optimizing for the role.",
    results:
      "Live product with magic-link auth, saved resumes, and job URL auto-fetch. Pro tier with Stripe billing.",
    techStack: ["Next.js", "TypeScript", "Claude API", "Supabase Auth", "Stripe", "Tailwind"],
    category: "web",
    liveUrl: "https://resumeidol.com",
    metrics: [
      { label: "Tailor Time", value: "<10s" },
      { label: "Auth", value: "Magic Link" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
  {
    slug: "blushwed",
    name: "BlushWed",
    tagline: "Wedding Planning Platform",
    description:
      "Complete wedding planning platform with smart vendor recommendations, budget tracking, and timeline management.",
    challenge:
      "Wedding planning is overwhelming — couples juggle spreadsheets, Pinterest boards, and vendor emails across 12+ months.",
    solution:
      "Built a comprehensive planning platform with AI-powered suggestions for venues, vendors, and timelines. Stripe subscriptions for premium features, SEO-optimized blog for organic traffic.",
    results:
      "33 routes, 5 blog posts, full Stripe integration. SEO driving organic signups from wedding-related searches.",
    techStack: ["Next.js", "TypeScript", "Claude API", "Supabase", "Stripe", "Tailwind", "Framer Motion"],
    category: "web",
    liveUrl: "https://blushwed.com",
    metrics: [
      { label: "Pages", value: "33 routes" },
      { label: "Blog Posts", value: "5 SEO" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: false,
  },
  {
    slug: "karaoke-lover",
    name: "KaraokeLover",
    tagline: "YouTube Karaoke Platform",
    description:
      "Search any song, get the YouTube video with synchronized lyrics. Firebase auth, Firestore favorites, and a beautiful singing experience.",
    challenge:
      "Karaoke apps are either expensive monthly subscriptions or have terrible song libraries. YouTube has every song but no lyrics overlay.",
    solution:
      "Combined YouTube Data API for video search with LRCLib for synchronized lyrics. Firebase Auth for user accounts, Firestore for favorites and history.",
    results:
      "Live at karaokelover.com with real users. Deployed on Railway with automatic deploys from GitHub.",
    techStack: ["Python", "Flask", "YouTube API", "LRCLib", "Firebase Auth", "Firestore", "Railway"],
    category: "web",
    liveUrl: "https://www.karaokelover.com",
    metrics: [
      { label: "Songs Available", value: "Unlimited" },
      { label: "Lyrics Sync", value: "Real-time" },
      { label: "Time to Build", value: "3 weeks" },
    ],
    featured: false,
  },
  {
    slug: "hersync",
    name: "PinkSync",
    tagline: "Cycle Syncing iOS App",
    description:
      "Meals, workouts, and hormone insights synced to menstrual cycle phases. Native iOS app with in-app purchases.",
    challenge:
      "Generic fitness apps ignore hormonal cycles. Women's energy, nutrition needs, and optimal workout types change throughout the month.",
    solution:
      "Built a React Native app that tracks cycle phases and provides phase-specific meal plans, workout routines, and hormone insights. StoreKit integration for subscriptions.",
    results:
      "Published on App Store. In-app purchases live with monthly and annual tiers.",
    techStack: ["React Native", "Expo", "Supabase", "Claude API", "StoreKit", "iOS"],
    category: "mobile",
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "IAP", value: "Monthly + Annual" },
      { label: "Time to Build", value: "3 weeks" },
    ],
    featured: false,
  },
  {
    slug: "crucible",
    name: "Crucible",
    tagline: "AI-Powered Fitness Companion",
    description:
      "Native SwiftUI fitness app with HealthKit integration, personalized workout plans, and progress tracking with Swift Charts. Currently in development.",
    challenge:
      "Most fitness apps are either too simple (just a timer) or too complex (require a personal trainer to understand).",
    solution:
      "Built a native SwiftUI app that reads HealthKit data and uses Claude to generate personalized workout plans. Swift Charts for beautiful progress visualization.",
    results:
      "Native iOS app with HealthKit, Charts, and AI integration. Clean SwiftUI architecture. Launching soon on the App Store.",
    techStack: ["SwiftUI", "HealthKit", "Swift Charts", "Claude API", "iOS 16+"],
    category: "mobile",
    metrics: [
      { label: "Platform", value: "Native iOS" },
      { label: "Framework", value: "SwiftUI" },
      { label: "Status", value: "Coming Soon" },
    ],
    featured: false,
  },
];

export const stats = [
  { value: "5", label: "Live Products You Can Click Right Now" },
  { value: "3", label: "Platforms (Web, iOS, Android)" },
  { value: "<4wk", label: "Average Time from Call to Launch" },
  { value: "$0", label: "Quote — Always Free" },
];

export const techLogos = [
  "Next.js", "React", "React Native", "SwiftUI", "TypeScript", "Python",
  "Node.js", "Claude AI", "OpenAI", "Deepgram", "Supabase", "Firebase",
  "Stripe", "Tailwind CSS", "FFmpeg", "Railway", "Vercel", "AWS",
];
