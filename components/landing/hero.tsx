"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const liveProducts = [
  { name: "Knoah", url: "https://www.getknoah.com", desc: "AI Knowledge Base" },
  { name: "Clippified", url: "https://clippified.com", desc: "AI Clip Generator" },
  { name: "ResumeIdol", url: "https://resumeidol.com", desc: "AI Resume Tailor" },
  { name: "BlushWed", url: "https://blushwed.com", desc: "Wedding Planner" },
  { name: "KaraokeLover", url: "https://www.karaokelover.com", desc: "Karaoke Platform" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="orb orb-violet w-[600px] h-[600px] -top-60 left-1/2 -translate-x-1/2" />
      <div className="orb orb-blue w-[300px] h-[300px] bottom-20 -right-20" />

      <div className="max-w-5xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-hover bg-surface">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-text-muted font-medium">Taking new projects for Q2 2026</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We don&apos;t pitch.
          <br />
          <span className="gradient-text">We ship.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Web apps. Mobile apps. AI features.
          <br className="hidden md:block" />
          From first message to production in weeks.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact" className="btn-primary text-base py-3.5 px-10">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn-ghost text-base py-3.5 px-10">
            See the Proof <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">
            Don&apos;t take our word for it — click these. They&apos;re live.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {liveProducts.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener"
                className="group glass-card px-4 py-2.5 flex items-center gap-2 text-sm hover:border-violet-500/30 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-text-primary font-medium group-hover:text-violet-400 transition-colors">{product.name}</span>
                <span className="text-text-subtle text-xs hidden sm:inline">{product.desc}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
