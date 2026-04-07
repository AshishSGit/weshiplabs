"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const showcase = [
  {
    name: "Knoah",
    tagline: "AI Knowledge Base",
    description: "Upload docs, ask questions, get answers with citations. RAG-powered SaaS with Stripe billing.",
    image: "/portfolio/getknoah.png",
    url: "https://www.getknoah.com",
    tech: ["Next.js", "Claude AI", "Supabase", "Stripe"],
    accent: "from-violet-500/20 to-blue-500/10",
  },
  {
    name: "Clippified",
    tagline: "Video Clip Generator",
    description: "Paste a YouTube URL, get viral-ready clips with captions. Deepgram + FFmpeg pipeline.",
    image: "/portfolio/clippified.png",
    url: "https://clippified.com",
    tech: ["Next.js", "Deepgram", "FFmpeg", "R2"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    name: "ResumeIdol",
    tagline: "AI Resume Tailor",
    description: "Paste a job description, get a tailored resume in seconds. Magic-link auth + Stripe.",
    image: "/portfolio/resumeidol.png",
    url: "https://resumeidol.com",
    tech: ["Next.js", "Claude AI", "Supabase", "Stripe"],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    name: "BlushWed",
    tagline: "Wedding Planning Platform",
    description: "Budget tracking, vendor management, AI timelines, custom wedding websites.",
    image: "/portfolio/blushwed.png",
    url: "https://blushwed.com",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    accent: "from-rose-500/20 to-pink-500/10",
  },
];

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border-hover shadow-2xl bg-surface-elevated">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="section relative overflow-hidden isolate" id="showcase">
      <div className="orb orb-violet w-[500px] h-[500px] top-20 -left-40 pointer-events-none -z-10" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-20 -right-20 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Real products,
            <br />
            <span className="gradient-text">live in production.</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Every project here is running right now with real users and real payments. Click any card to see it live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {showcase.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener"
              className="group relative block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.accent} rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />

              <div className="relative glass-card p-5 sm:p-6 h-full flex flex-col">
                {/* Browser mockup */}
                <div className="mb-5 sm:mb-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                  <BrowserFrame src={item.image} alt={item.name} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold">{item.name}</h3>
                    <ExternalLink size={16} className="text-text-subtle group-hover:text-violet-400 transition-colors" />
                  </div>
                  <p className="text-sm text-violet-400 font-medium mb-3">{item.tagline}</p>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] px-2 py-1 rounded-md bg-surface-elevated text-text-subtle border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live indicator */}
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live in production
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio" className="btn-ghost inline-flex">
            See All Projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
