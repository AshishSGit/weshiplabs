"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const liveProducts = [
  { name: "KaraokeLover", url: "https://www.karaokelover.com", desc: "Karaoke" },
  { name: "ResumeIdol", url: "https://resumeidol.com", desc: "Resume Tailor" },
  { name: "Knoah", url: "https://www.getknoah.com", desc: "Knowledge Base" },
  { name: "Clippified", url: "https://clippified.com", desc: "Clip Generator" },
  { name: "BlushWed", url: "https://blushwed.com", desc: "Wedding Planner" },
  { name: "AstroZodly", url: "https://www.astrozodly.com", desc: "Astrology" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center isolate">
      {/* Cinematic background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Aurora blobs over video for color depth */}
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)",
          }}
        />
        {/* Overlay: light enough that the aurora reads, dark enough to keep text crisp.
            Vignette keeps the headline legible without flattening the motion. */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-bg/45 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(11,11,22,0.55),transparent_75%)]" />
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-10 sm:py-12 w-full relative z-10">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="group inline-flex items-center gap-2 max-w-[92vw] pl-2.5 pr-3.5 py-1.5 rounded-full border border-violet-400/25 bg-violet-500/[0.07] backdrop-blur-md shadow-[0_0_24px_-6px_rgba(139,92,246,0.45)]">
            <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500">
              <Sparkles size={11} className="text-white" />
            </span>
            <span className="max-w-[14.5rem] sm:max-w-none text-[10px] tracking-[0.06em] sm:text-xs sm:tracking-[0.12em] text-violet-200 font-semibold uppercase whitespace-normal sm:whitespace-nowrap text-center leading-snug">
              We build websites, mobile apps &amp; AI-powered tools
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-center mb-4 sm:mb-5 tracking-[-0.03em]"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-text-primary [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">Your idea, </span>
          <motion.span
            className="gradient-text [filter:drop-shadow(0_4px_24px_rgba(139,92,246,0.35))]"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            live in weeks.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl md:text-[1.375rem] text-slate-200 text-center max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          A senior team that designs, builds, and ships your product. Real, working software in weeks, at a fixed price agreed up front.
          <span className="block mt-2.5 text-slate-400 text-base sm:text-lg">
            Working software every week. Not status updates.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-5 sm:mb-5 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <Link href="/contact" className="btn-primary text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 justify-center group">
            Get a Free Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/portfolio" className="btn-primary text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 justify-center group">
            See Our Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust line: reduce friction at the decision point */}
        <motion.ul
          className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-6 sm:mb-7 text-xs sm:text-sm text-text-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          {["Free quote in 24 hours", "No calls required", "You own the code"].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" />
              {item}
            </li>
          ))}
        </motion.ul>

        {/* Live products strip: the proof. We don't just bill hours, we ship and run
            our own products. Framed as a curated panel so it reads as a portfolio wall. */}
        <motion.div
          className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-5 py-5 sm:px-7 sm:py-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          {/* top hairline glow */}
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 mb-4 text-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-violet-300 via-fuchsia-200 to-blue-300 bg-clip-text text-transparent">
              Live products we built &amp; run
            </p>
            <span className="hidden sm:inline text-white/15">•</span>
            <span className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs text-amber-300/90">
              <Star size={11} className="fill-amber-300/90 text-amber-300/90" />
              Real users, real revenue
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {liveProducts.map((product, i) => (
              <motion.a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.07 }}
                className="group relative px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm rounded-full border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.05] hover:border-violet-400/60 hover:bg-white/[0.12] hover:shadow-[0_10px_34px_-8px_rgba(139,92,246,0.55),0_0_0_1px_rgba(167,139,250,0.25)_inset]"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)] animate-pulse" />
                <span className="text-white font-semibold group-hover:[text-shadow:0_0_12px_rgba(167,139,250,0.6)] transition-all">{product.name}</span>
                <span className="text-slate-400 text-xs sm:text-sm hidden sm:inline">{product.desc}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
