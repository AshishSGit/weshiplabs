import type { Service, Project } from "@/types";

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    subtitle: "Full-stack web apps that actually work",
    description:
      "SaaS platforms, dashboards, internal tools, marketplaces, landing pages  - anything that runs in a browser. We handle frontend, backend, database, auth, payments, deployment, and SEO. You get a running product, not a zip file.",
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
    startingAt: "$1,500",
    timeline: "1-6 weeks",
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
      "30 days post-ship support",
    ],
    startingAt: "$4,500",
    timeline: "4-8 weeks",
    icon: "smartphone",
  },
  {
    id: "ai-features",
    title: "AI Features & Automation",
    subtitle: "Make your product smarter",
    description:
      "We add AI to your existing product or build AI-first tools from scratch. RAG chatbots, document processing, voice transcription, content generation, workflow automation  - production-grade, not a ChatGPT wrapper.",
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
    startingAt: "$2,500",
    timeline: "2-6 weeks",
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
      "Opportunity assessment for your business",
      "Rescue & fix broken/abandoned projects",
      "Database design & migration",
      "API design & integration planning",
      "Security review & hardening",
      "DevOps setup (CI/CD, monitoring, logging)",
      "Technical due diligence for investors",
    ],
    startingAt: "$250",
    timeline: "1-5 days",
    icon: "wrench",
  },
];

export const projects: Project[] = [
  {
    slug: "karaoke-lover",
    name: "KaraokeLover",
    tagline: "Online Karaoke Platform",
    description:
      "Search any track, sing along with the lyrics on screen, then record your performance and get an instant pitch score. Secure accounts, saved favorites, and a built-in studio mixer with vocal effects turn any browser into a real karaoke studio.",
    challenge:
      "Karaoke apps are either expensive monthly subscriptions or have terrible song libraries. YouTube has every song but no lyrics overlay.",
    solution:
      "Combined YouTube Data API for video search with LRCLib for on-screen lyrics, plus pitch scoring and in-browser recording. Firebase Auth for user accounts, Firestore for favorites and history.",
    results:
      "Live at karaokelover.com with real users. Deployed on Railway with automatic deploys from GitHub.",
    techStack: ["Python", "Flask", "LRCLib", "Firebase Auth", "Firestore", "Railway"],
    category: "web",
    liveUrl: "https://www.karaokelover.com",
    image: "/portfolio/karaokelover.png",
    metrics: [
      { label: "Songs Available", value: "Unlimited" },
      { label: "Pitch Scoring", value: "Built-in" },
      { label: "Time to Build", value: "3 weeks" },
    ],
    featured: true,
  },
  {
    slug: "resumeidol",
    name: "ResumeIdol",
    tagline: "Smart Resume Tailor",
    description:
      "Paste your resume and a job description, then watch it transform into a perfectly tailored version in seconds, every bullet rewritten to match the role. Now with mock interview practice that drills you on the exact questions for the job, scores every answer out of 100 with strengths and fixes, and reveals complete model answers including full SQL and Python for technical roles.",
    challenge:
      "Job seekers send the same generic resume everywhere. Tailoring manually takes 30-60 minutes per application.",
    solution:
      "Claude analyzes the job description, identifies key requirements, and rewrites resume bullet points to highlight relevant experience. Preserves voice while optimizing for the role.",
    results:
      "Live product with magic-link auth, saved resumes, and job URL auto-fetch. Pro tier with Stripe billing.",
    techStack: ["Next.js", "TypeScript", "Claude API", "Supabase Auth", "Stripe", "Tailwind"],
    category: "web",
    liveUrl: "https://resumeidol.com",
    image: "/portfolio/resumeidol-v2.png",
    metrics: [
      { label: "Tailor Time", value: "<60s" },
      { label: "Mock Interview", value: "Scored 0-100" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
  {
    slug: "blushwed",
    name: "BlushWed",
    tagline: "Smart Wedding Planning Platform",
    description:
      "A complete wedding planning platform with smart vendor matching, budget tracking, and guest and timeline management. 33 polished routes, secure accounts, Stripe payments, and 5 SEO blog posts pulling in organic traffic, everything a couple needs in one beautiful place.",
    challenge:
      "Wedding planning is overwhelming. Couples juggle spreadsheets, Pinterest boards, and vendor emails across 12+ months.",
    solution:
      "Built a comprehensive planning platform with smart suggestions for venues, vendors, and timelines. Stripe subscriptions for premium features, SEO-optimized blog for organic traffic.",
    results:
      "33 routes, 5 blog posts, full Stripe integration. SEO driving organic signups from wedding-related searches.",
    techStack: ["Next.js", "TypeScript", "Claude API", "Supabase", "Stripe", "Tailwind", "Framer Motion"],
    category: "web",
    liveUrl: "https://blushwed.com",
    image: "/portfolio/blushwed.png",
    metrics: [
      { label: "Pages", value: "33 routes" },
      { label: "Blog Posts", value: "5 SEO" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
  {
    slug: "clippified",
    name: "Clippified",
    tagline: "Smart Clip Generator",
    description:
      "Upload one long video and get a batch of viral-ready vertical clips with styled captions in under 90 seconds. Finds the strongest moments automatically, transcribes with Deepgram, and renders broadcast-clean shorts with FFmpeg, no editing skills required.",
    challenge:
      "Content creators spend 4-6 hours editing a single long video into short clips. Existing tools are either expensive or produce low-quality captions.",
    solution:
      "Built an automated pipeline: Deepgram transcribes audio, Claude identifies viral-worthy segments, FFmpeg renders clips with styled captions. All processed server-side with R2 storage.",
    results:
      "Production SaaS with Stripe subscriptions. Processes videos up to 3 hours long. Average clip generation under 90 seconds.",
    techStack: ["Next.js", "Deepgram", "Claude API", "FFmpeg", "Cloudflare R2", "Supabase", "Stripe"],
    category: "web",
    liveUrl: "https://clippified.com",
    image: "/portfolio/clippified.png",
    metrics: [
      { label: "Processing Time", value: "<90s" },
      { label: "Max Video Length", value: "3 hours" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
  {
    slug: "knoah",
    name: "Knoah",
    tagline: "Smart Knowledge Base for Teams",
    description:
      "Upload your docs and get instant, cited answers from a knowledge base your whole team can actually trust. Semantic search across thousands of pages, sub-2-second responses, team invites, and Stripe billing, built for teams drowning in Notion pages and Drives nobody reads.",
    challenge:
      "Teams waste hours searching through scattered documents. Existing tools require complex setup and per-seat pricing kills adoption.",
    solution:
      "Built a RAG-powered knowledge base that ingests PDFs, docs, and URLs. Uses vector embeddings for semantic search and Claude for natural-language answers with exact source citations.",
    results:
      "Live SaaS product with paying customers. Sub-2-second response times on 10K+ document corpora. Stripe billing, team invites, and usage analytics built in.",
    techStack: ["Next.js", "TypeScript", "Claude API", "OpenAI Embeddings", "Supabase", "Stripe", "Tailwind"],
    category: "web",
    liveUrl: "https://www.getknoah.com",
    image: "/portfolio/getknoah.png",
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Document Types", value: "PDF, DOCX, URL" },
      { label: "Time to Build", value: "3 weeks" },
    ],
    featured: true,
  },
  {
    slug: "astrozodly",
    name: "AstroZodly",
    tagline: "Astrology & Horoscope Platform",
    description:
      "Daily horoscopes, instant birth-chart readings, compatibility matching, and a per-minute chat with the stars. A premium credit-wallet experience with geo-aware pricing in rupees and dollars, polished to feel like a true cosmic portal.",
    challenge:
      "Astrology apps either bury the reading behind sign-ups or feel cheap. People want an instant, personal reading and a way to ask real questions.",
    solution:
      "Built a premium astrology platform with daily horoscopes, instant birth-chart generation, kundli matching, and a credit-wallet model for per-action and per-minute consultations. Geo-detected pricing for India and the US.",
    results:
      "Deployed on Railway with a light saffron-portal theme. Credit-wallet monetization with geo-aware recharge and strikethrough anchors built in.",
    techStack: ["Next.js", "TypeScript", "Claude API", "Supabase", "Stripe", "Tailwind"],
    category: "web",
    liveUrl: "https://www.astrozodly.com",
    image: "/portfolio/zodly.png",
    metrics: [
      { label: "Birth Chart", value: "Instant" },
      { label: "Pricing", value: "Geo ₹ & $" },
      { label: "Time to Build", value: "2 weeks" },
    ],
    featured: true,
  },
];

export const stats = [
  { value: "6", label: "Live Products You Can Click Right Now" },
  { value: "3", label: "Platforms (Web, iOS, Android)" },
  { value: "<4wk", label: "Average Time from Call to Live" },
  { value: "$0", label: "Quote  - Always Free" },
];

export const techLogos = [
  "Next.js", "React", "React Native", "SwiftUI", "TypeScript", "Python",
  "Node.js", "Claude", "OpenAI", "Deepgram", "Supabase", "Firebase",
  "Stripe", "Tailwind CSS", "FFmpeg", "Railway", "Vercel", "AWS",
];
