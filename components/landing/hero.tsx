"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const liveProducts = [
  { name: "KaraokeLover", url: "https://www.karaokelover.com", desc: "Karaoke" },
  { name: "ResumeIdol", url: "https://resumeidol.com", desc: "Resume Tailor" },
  { name: "Knoah", url: "https://www.getknoah.com", desc: "Knowledge Base" },
  { name: "Clippified", url: "https://clippified.com", desc: "Clip Generator" },
  { name: "BlushWed", url: "https://blushwed.com", desc: "Wedding Planner" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] sm:min-h-[100vh] flex items-center isolate">
      {/* Cinematic background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Aurora blobs over video for color depth */}
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/70 to-bg" />
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-20 sm:py-32 w-full relative z-10">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm">
            <Sparkles size={12} className="text-violet-400" />
            <span className="text-[11px] sm:text-xs text-violet-300 font-medium tracking-wide uppercase">
              Software Studio
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-5 sm:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-text-primary">Your idea.</span>
          <motion.span
            className="block gradient-text"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Live in weeks.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-text-muted text-center max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          We design, build, and deploy web apps, mobile apps, and smart features.
          <span className="block mt-1 text-text-subtle text-sm sm:text-base">
            Working software every week. Not status updates.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <Link href="/contact" className="btn-primary text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 justify-center group">
            Get a Free Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/portfolio" className="btn-ghost text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 justify-center">
            See Our Work
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Live products strip */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-text-subtle mb-4">
            Live products built by us
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {liveProducts.map((product, i) => (
              <motion.a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                className="group glass-card px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm hover:border-violet-500/40 hover:scale-[1.03] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-text-primary font-medium group-hover:text-violet-400 transition-colors">{product.name}</span>
                <span className="text-text-subtle text-[10px] sm:text-xs hidden sm:inline">{product.desc}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-5 h-8 rounded-full border border-text-subtle/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
