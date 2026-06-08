import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog  - Software Development Insights",
  description: "Real lessons from building and shipping software. Chatbot costs, RAG vs fine-tuning, how to ship MVPs fast, and more.",
  alternates: { canonical: "https://www.weshiplabs.com/blog" },
};

const posts = [
  {
    slug: "hire-react-native-developer-2026",
    title: "How to Hire a React Native Developer in 2026 (Without Getting Burned)",
    description: "What to look for, what to avoid, and what it actually costs to hire a React Native developer or agency in 2026.",
    date: "2026-04-08",
    readTime: "9 min",
    category: "Engineering",
  },
  {
    slug: "nextjs-vs-react-native-for-startups",
    title: "Next.js vs React Native: Which Should Your Startup Build First?",
    description: "Web app or mobile app first? A practical comparison of cost, time to market, and reach for early-stage startups.",
    date: "2026-04-08",
    readTime: "7 min",
    category: "Engineering",
  },
  {
    slug: "how-much-does-saas-mvp-cost",
    title: "How Much Does a SaaS MVP Cost in 2026?",
    description: "Real pricing for SaaS MVPs - from $5K landing pages to $50K production-ready platforms. What you get at each tier.",
    date: "2026-04-08",
    readTime: "8 min",
    category: "Engineering",
  },
  {
    slug: "rag-implementation-cost-and-timeline",
    title: "RAG Implementation Cost and Timeline: A Real Breakdown",
    description: "What it actually costs and takes to build a RAG (Retrieval-Augmented Generation) system in 2026 - from prototype to production.",
    date: "2026-04-08",
    readTime: "8 min",
    category: "Smart Features",
  },
  {
    slug: "claude-vs-gpt-4-for-product-builders",
    title: "Claude vs GPT-4 for Product Builders: Which to Pick in 2026",
    description: "An honest comparison of Claude and GPT-4 for building real products. Cost, quality, latency, and use cases.",
    date: "2026-04-08",
    readTime: "8 min",
    category: "Smart Features",
  },
  {
    slug: "add-ai-to-existing-product",
    title: "How to Add Smart Features to Your Existing Product (Without Starting Over)",
    description: "A practical guide to integrating intelligent features into your current app. What works, what doesn't, and what it costs.",
    date: "2026-04-05",
    readTime: "8 min",
    category: "Smart Features",
  },
  {
    slug: "how-much-does-web-app-cost",
    title: "How Much Does It Cost to Build a Web App in 2026?",
    description: "Real pricing for landing pages, web apps, and SaaS platforms. What you should expect to pay and what you get at each price point.",
    date: "2026-04-03",
    readTime: "7 min",
    category: "Engineering",
  },
  {
    slug: "how-much-does-ai-chatbot-cost",
    title: "How Much Does a Chatbot Cost in 2026?",
    description: "A real breakdown of what it costs to build a production chatbot - from simple FAQ bots to full RAG systems. No fluff, actual numbers.",
    date: "2026-03-31",
    readTime: "8 min",
    category: "Smart Features",
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs Fine-Tuning: Which Does Your Business Need?",
    description: "We've built both. Here's when RAG makes sense, when fine-tuning wins, and when you need neither.",
    date: "2026-03-28",
    readTime: "6 min",
    category: "Smart Features",
  },
  {
    slug: "ship-mvp-in-4-weeks",
    title: "How We Ship MVPs in 4 Weeks",
    description: "Our exact process for going from discovery call to production deploy in under a month. Architecture decisions, shortcuts we take, and shortcuts we never take.",
    date: "2026-03-25",
    readTime: "10 min",
    category: "Engineering",
  },
];

export default function BlogPage() {
  return (
    <div className="section pt-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Insights from the <span className="gradient-text">build floor</span>
          </h1>
          <p className="text-text-muted text-lg">
            Real lessons from shipping real products. No theory  - just what works.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-6 block group">
              <div className="flex items-center gap-3 mb-3">
                <span className="tech-badge text-xs">{post.category}</span>
                <span className="text-sm text-text-subtle flex items-center gap-1">
                  <Clock size={13} /> {post.readTime}
                </span>
                <span className="text-sm text-text-subtle">{post.date}</span>
              </div>
              <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-base text-text-muted leading-relaxed mb-3">{post.description}</p>
              <span className="text-sm text-violet-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
