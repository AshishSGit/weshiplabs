import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; description: string; date: string; readTime: string; category: string; content: string }> = {
  "how-much-does-ai-chatbot-cost": {
    title: "How Much Does an AI Chatbot Cost in 2026?",
    description: "A real breakdown of what it costs to build a production AI chatbot  - from simple FAQ bots to full RAG systems.",
    date: "2026-03-31",
    readTime: "8 min",
    category: "AI",
    content: `
## The Short Answer

A production AI chatbot costs **$3,000–$25,000+** to build, depending on complexity. Here's the real breakdown.

## Tier 1: Simple FAQ Bot ($3,000–$5,000)

A bot that answers predefined questions from a knowledge base. Think customer support for a small business.

**What you get:**
- Chat widget on your website
- Answers from a static set of Q&As
- Basic conversation flow
- Fallback to human support

**Tech:** OpenAI API + simple prompt engineering + a web widget. No vector database needed.

**Timeline:** 1–2 weeks.

## Tier 2: RAG-Powered Knowledge Bot ($8,000–$15,000)

This is where it gets interesting. The bot reads your actual documents  - PDFs, Google Docs, Notion pages  - and answers questions with source citations.

We built [Knoah](https://www.getknoah.com) as exactly this. Upload your docs, ask questions, get answers with page-number citations.

**What you get:**
- Document ingestion (PDF, DOCX, URLs)
- Vector embeddings for semantic search
- Natural-language answers with citations
- User authentication and usage tracking
- Admin dashboard

**Tech:** Claude/GPT API + vector database (Supabase pgvector or Pinecone) + document processing pipeline + Next.js frontend.

**Timeline:** 3–4 weeks.

## Tier 3: Full Conversational AI Product ($15,000–$25,000+)

A product where AI is the core feature  - not just a support widget. Think AI-powered onboarding, AI content generation, or AI analysis tools.

**What you get:**
- Everything in Tier 2
- Custom AI pipeline (multiple models, chained prompts)
- Streaming responses
- User-specific context and memory
- Billing integration (Stripe)
- Production infrastructure (rate limiting, error handling, monitoring)

**Tech:** Multiple AI APIs + custom orchestration + production-grade infrastructure.

**Timeline:** 4–8 weeks.

## The Hidden Costs Most Agencies Don't Tell You

1. **API costs**  - Claude/GPT API calls cost $0.003–$0.06 per query depending on model and context length. Budget $50–$500/month for a typical B2B product.
2. **Vector database**  - Supabase pgvector is nearly free at small scale. Pinecone starts at $70/month.
3. **Hosting**  - $5–$50/month on Railway or Vercel for most apps.
4. **Ongoing maintenance**  - Models update, APIs change, edge cases surface. Budget $150–$300/month or handle it yourself.

## What We'd Recommend

For most businesses, **Tier 2 (RAG-powered)** is the sweet spot. You get genuinely useful AI that understands your specific business, without over-engineering.

**Want to talk specifics?** [Get a free quote](/contact) and we'll scope your chatbot in 30 minutes.
    `,
  },
  "rag-vs-fine-tuning": {
    title: "RAG vs Fine-Tuning: Which Does Your Business Need?",
    description: "We've built both. Here's when RAG makes sense, when fine-tuning wins, and when you need neither.",
    date: "2026-03-28",
    readTime: "6 min",
    category: "AI",
    content: `
## The Quick Version

**Use RAG** when your AI needs to reference specific, changing documents (company knowledge base, product docs, legal documents).

**Use fine-tuning** when you need the AI to behave in a specific way consistently (brand voice, domain-specific reasoning, structured outputs).

**Use neither** when a well-crafted prompt with examples does the job. Seriously  - start here.

## What is RAG?

Retrieval-Augmented Generation. Instead of hoping the AI "knows" your content, you feed it relevant documents at query time.

**How it works:**
1. Upload your documents
2. Split them into chunks, convert to vector embeddings
3. When a user asks a question, find the most relevant chunks
4. Send those chunks + the question to the AI
5. AI answers based on your actual content

**We built Knoah using this exact approach.** Teams upload their docs, and the AI answers questions with source citations.

**Best for:** Knowledge bases, customer support, internal docs search, legal document Q&A.

**Cost:** $8K–$15K to build. Minimal ongoing API costs.

## What is Fine-Tuning?

Training a model on your specific data so it "learns" patterns, tone, and domain knowledge.

**Best for:** Consistent brand voice, domain-specific classification, structured data extraction.

**Cost:** $5K–$20K depending on dataset size and iteration cycles. Higher ongoing costs (custom model hosting).

## Our Honest Take

90% of businesses that think they need fine-tuning actually need RAG  - or just better prompts.

RAG is cheaper, faster to build, and easier to update (just add new documents). Fine-tuning is powerful but overkill for most use cases.

**Not sure which you need?** [Let's talk](/contact)  - we'll recommend the simplest approach that actually works.
    `,
  },
  "ship-mvp-in-4-weeks": {
    title: "How We Ship MVPs in 4 Weeks",
    description: "Our exact process for going from discovery call to production deploy in under a month.",
    date: "2026-03-25",
    readTime: "10 min",
    category: "Engineering",
    content: `
## The Process

Every product we build follows the same 4-week cadence. Here's exactly what happens each week.

## Week 1: Discovery + Architecture

**Day 1–2: Discovery call.** We learn your business, your users, and what success looks like. Not requirements gathering  - understanding.

**Day 3–5: Architecture + tech decisions.** We pick the stack, design the database schema, map out the API, and identify the riskiest technical unknowns. You get a document explaining every decision.

**Deliverable:** Architecture doc, database schema, API spec. You approve before we write code.

## Week 2: Core Build

The core product loop. The one thing your app does that makes it valuable.

For Knoah, this was: upload a doc → ask a question → get an answer with citations.
For Clippified, this was: paste a URL → select a clip → download with captions.

**No auth, no payments, no settings.** Just the core thing, working end-to-end.

**Deliverable:** Working prototype deployed to a staging URL. You can click on it.

## Week 3: Production Features

Auth, payments, deployment, error handling. The stuff that turns a prototype into a product.

- Supabase or Firebase auth (magic link, Google, etc.)
- Stripe billing if needed
- Error boundaries and loading states
- Mobile responsiveness
- Basic SEO (meta tags, sitemap, robots.txt)

**Deliverable:** Feature-complete product on staging.

## Week 4: Polish + Launch

- Bug fixes from your testing
- Performance optimization
- Production deployment (Railway, Vercel, or your infrastructure)
- Domain setup, SSL, monitoring
- Handoff documentation

**Deliverable:** Live product on your domain.

## Why This Works

1. **Fixed scope, not fixed time.** We agree on what's in v1 before starting. No scope creep.
2. **Weekly deploys.** You see real progress, not status reports.
3. **Senior engineer, not a team.** One person who understands the whole stack. No communication overhead.
4. **Proven patterns.** We've built 7+ products with this exact stack. We're not learning on your dime.

## What We Skip (On Purpose)

- Figma mockups (we design in code  - faster feedback)
- Sprint ceremonies (we ship, not meeting)
- Feature flags (v1 doesn't need them)
- Microservices (monolith until you need to scale)

## Ready to Ship?

[Tell us what you need](/contact) and we'll scope your MVP in 30 minutes.
    `,
  },
  "how-much-does-web-app-cost": {
    title: "How Much Does It Cost to Build a Web App in 2026?",
    description: "Real pricing for landing pages, web apps, and SaaS platforms. What you should expect to pay and what you get at each price point.",
    date: "2026-04-03",
    readTime: "7 min",
    category: "Engineering",
    content: `
## The Quick Answer

A web app costs anywhere from **$3,000 to $50,000+** depending on what it does. Here's the honest breakdown by complexity.

## Landing Page / Marketing Site ($3,000 - $5,000)

A fast, SEO-optimized website that looks great and converts visitors into leads or customers.

**What you get:**
- Custom design (not a template)
- Mobile responsive
- Contact form or lead capture
- SEO setup (sitemap, meta tags, structured data)
- Analytics integration
- Hosting and deployment

**Timeline:** 1-2 weeks.

**When you need this:** You have a business and need a professional web presence. You don't need user accounts or a dashboard.

## Web App with Auth and Dashboard ($8,000 - $15,000)

A real application where users sign up, log in, and do something useful.

**What you get:**
- Everything from the landing page tier
- User authentication (email, Google, magic link)
- User dashboard with real functionality
- Database and API
- Basic admin panel
- Production deployment with SSL

**Timeline:** 2-4 weeks.

**When you need this:** You're building a tool, marketplace, or internal app. Users need accounts and data.

## Full SaaS Platform ($15,000 - $30,000+)

A complete software product with billing, teams, and advanced features.

**What you get:**
- Everything above plus:
- Stripe subscriptions and billing portal
- Team management and invitations
- Role-based access control
- Usage tracking and analytics
- Email notifications (welcome, billing, etc.)
- Blog for SEO
- Multiple user flows

**Timeline:** 4-8 weeks.

**When you need this:** You're launching a product that people pay monthly for. You need billing, teams, and a polished experience.

## What Drives the Cost Up

1. **Number of user roles** - one type of user is simple. Admin + regular user + team leads = more complexity.
2. **Integrations** - Stripe, third-party APIs, and webhooks add time.
3. **Real-time features** - chat, live updates, and notifications require WebSockets.
4. **Mobile app on top** - if you need iOS/Android too, budget an additional $8,000+.

## What to Ask Before Hiring

- Can I see your live work? (not mockups)
- Is the price fixed or hourly?
- What's included in post-launch support?
- How often will I see working software during development?

If an agency can't answer these clearly, keep looking.

**Need a quote?** [Tell us what you're building](/contact) and we'll send you a clear scope and price within 24 hours.
    `,
  },
  "add-ai-to-existing-product": {
    title: "How to Add AI to Your Existing Product (Without Starting Over)",
    description: "A practical guide to integrating AI features into your current app. What works, what doesn't, and what it costs.",
    date: "2026-04-05",
    readTime: "8 min",
    category: "AI",
    content: `
## You Don't Need to Rebuild

The most common mistake: thinking you need to throw away your current product and start from scratch with "AI." You don't. AI features plug into existing products.

Here's what that actually looks like.

## The 5 Most Useful AI Features You Can Add Today

### 1. Smart Search ($3,000 - $5,000)

Replace your basic keyword search with semantic search. Users describe what they want in plain language and your product finds it.

**How it works:** Convert your content into vector embeddings. When a user searches, convert their query to a vector and find the closest matches. Way more accurate than keyword matching.

**Best for:** E-commerce, documentation sites, knowledge bases, any product with lots of content.

### 2. Document Q&A / Chatbot ($5,000 - $10,000)

Let users ask questions about their documents and get answers with citations.

**How it works:** This is RAG (Retrieval-Augmented Generation). Upload documents, chunk them, create embeddings, and use an LLM to answer questions based on the relevant chunks.

**Best for:** Internal tools, customer support, legal tech, education platforms.

### 3. Content Generation ($3,000 - $8,000)

Auto-generate product descriptions, email drafts, summaries, or reports based on user data.

**How it works:** Take user input or existing data, send it to Claude or GPT with a well-crafted prompt, return the result. The quality depends entirely on the prompt engineering.

**Best for:** Marketing tools, CRM systems, reporting dashboards, any product where users write repetitive content.

### 4. Classification and Routing ($2,000 - $5,000)

Automatically categorize incoming data - support tickets, leads, content, transactions.

**How it works:** Send the item to an LLM with examples of each category. It classifies with 90%+ accuracy. Much cheaper than training a custom model.

**Best for:** Help desks, CRM, e-commerce (product categorization), content platforms.

### 5. Voice Transcription ($3,000 - $6,000)

Turn audio into text with Whisper or Deepgram. Then do something useful with that text.

**How it works:** User records or uploads audio. Whisper/Deepgram transcribes it. Optionally, an LLM summarizes or extracts action items.

**Best for:** Meeting tools, voice journals, podcast platforms, customer call analysis.

## What It Actually Costs

The AI API costs are tiny. Claude costs $0.003-0.06 per query. The real cost is the engineering to integrate it properly - error handling, streaming, caching, rate limiting, and making it feel good in the UI.

**Budget:**
- Simple feature (search, classification): $2,000-5,000
- Medium feature (chatbot, content gen): $5,000-10,000
- Complex feature (multi-model pipeline, voice + analysis): $8,000-15,000

## What to Avoid

- **Don't use AI where a simple rule works.** If-else is cheaper and more reliable.
- **Don't build a "ChatGPT wrapper."** Users can already talk to ChatGPT. Your AI feature needs to do something specific that generic AI can't.
- **Don't skip the prompt engineering.** A bad prompt with a great model gives bad results. Spend time on this.

## Ready to Add AI to Your Product?

[Tell us what you're building](/contact) and we'll recommend the simplest approach that actually works. No obligation - we'll send you a clear plan and price within 24 hours.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://weshiplabs.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "WeShipLabs", url: "https://weshiplabs.com" },
    publisher: { "@type": "Organization", name: "WeShipLabs", url: "https://weshiplabs.com" },
    mainEntityOfPage: `https://weshiplabs.com/blog/${slug}`,
  };

  return (
    <div className="section pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-subtle hover:text-violet-400 transition-colors mb-8">
          <ArrowLeft size={14} /> All Posts
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="tech-badge text-[11px]">{post.category}</span>
            <span className="text-xs text-text-subtle flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span className="text-xs text-text-subtle">{post.date}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-text-muted">{post.description}</p>
        </div>

        <div
          className="prose prose-invert prose-sm max-w-none
            [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-text-primary
            [&_h3]:font-heading [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-text-primary
            [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4
            [&_strong]:text-text-primary
            [&_ul]:space-y-1 [&_li]:text-text-muted [&_li]:text-sm
            [&_ol]:space-y-1
            [&_a]:text-violet-400 [&_a:hover]:underline
            [&_code]:text-cyan-400 [&_code]:text-xs [&_code]:bg-surface-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
          "
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/^## (.*$)/gm, '<h2>$1</h2>')
              .replace(/^### (.*$)/gm, '<h3>$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
              .replace(/^- (.*$)/gm, '<li>$1</li>')
              .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
              .replace(/`(.*?)`/g, '<code>$1</code>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(?!<[hluop])/gm, '<p>')
          }}
        />

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Need help with <span className="gradient-text">this</span>?
          </h3>
          <p className="text-text-muted mb-6">We build exactly what this article describes. Let&apos;s talk.</p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
