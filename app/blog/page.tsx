import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI development, building MVPs, and shipping software fast.",
};

const posts = [
  {
    slug: "how-much-does-ai-chatbot-cost",
    title: "How Much Does an AI Chatbot Cost in 2026?",
    description: "A real breakdown of what it costs to build a production AI chatbot — from simple FAQ bots to full RAG systems. No fluff, actual numbers.",
    date: "2026-03-31",
    readTime: "8 min",
    category: "AI",
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs Fine-Tuning: Which Does Your Business Need?",
    description: "We've built both. Here's when RAG makes sense, when fine-tuning wins, and when you need neither.",
    date: "2026-03-28",
    readTime: "6 min",
    category: "AI",
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
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Insights from the <span className="gradient-text">build floor</span>
          </h1>
          <p className="text-text-muted text-lg">
            Real lessons from shipping real products. No theory — just what works.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-6 block group">
              <div className="flex items-center gap-3 mb-3">
                <span className="tech-badge text-[11px]">{post.category}</span>
                <span className="text-xs text-text-subtle flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
                <span className="text-xs text-text-subtle">{post.date}</span>
              </div>
              <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-3">{post.description}</p>
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
