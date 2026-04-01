"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const liveProducts = [
  { name: "Knoah", url: "https://www.getknoah.com", desc: "Knowledge Base" },
  { name: "Clippified", url: "https://clippified.com", desc: "Clip Generator" },
  { name: "ResumeIdol", url: "https://resumeidol.com", desc: "Resume Tailor" },
  { name: "BlushWed", url: "https://blushwed.com", desc: "Wedding Planner" },
  { name: "KaraokeLover", url: "https://www.karaokelover.com", desc: "Karaoke Platform" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="orb orb-violet w-[600px] h-[600px] -top-60 left-1/2 -translate-x-1/2" />
      <div className="orb orb-blue w-[300px] h-[300px] bottom-20 -right-20" />

      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-32 w-full">
        <motion.h1
          className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your idea.
          <br />
          <span className="gradient-text">Live in weeks.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          We design, build, and deploy web apps, mobile apps, and smart features.
          <br className="hidden md:block" />
          You get working software every week — not status updates.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact" className="btn-primary text-base py-3.5 px-10 justify-center">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn-ghost text-base py-3.5 px-10 justify-center">
            See Our Work <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">
            These are ours. Click any of them — they&apos;re live right now.
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
