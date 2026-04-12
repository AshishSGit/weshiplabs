"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "how-much-does-saas-mvp-cost",
    title: "How Much Does a SaaS MVP Cost in 2026?",
    category: "Engineering",
    readTime: "8 min",
  },
  {
    slug: "rag-implementation-cost-and-timeline",
    title: "RAG Implementation Cost and Timeline: A Real Breakdown",
    category: "AI",
    readTime: "8 min",
  },
  {
    slug: "ship-mvp-in-4-weeks",
    title: "How We Ship MVPs in 4 Weeks",
    category: "Engineering",
    readTime: "10 min",
  },
  {
    slug: "how-much-does-web-app-cost",
    title: "How Much Does It Cost to Build a Web App in 2026?",
    category: "Engineering",
    readTime: "7 min",
  },
  {
    slug: "claude-vs-gpt-4-for-product-builders",
    title: "Claude vs GPT-4 for Product Builders: Which to Pick in 2026",
    category: "AI",
    readTime: "8 min",
  },
];

export default function LatestInsights() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Blog</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Latest <span className="gradient-text">Insights</span>
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card flex items-center justify-between gap-4 p-4 md:p-5 group hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 flex-shrink-0">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base truncate group-hover:text-violet-300 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-text-subtle hidden sm:block">{post.readTime}</span>
                  <ArrowRight size={14} className="text-text-subtle group-hover:text-violet-400 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            Read all insights
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
