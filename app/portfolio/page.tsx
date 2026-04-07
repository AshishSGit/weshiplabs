import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio - Live Products We Built and Shipped",
  description: "See our live work - web apps, mobile apps, and AI-powered products. Every project here is running in production with real users and payments.",
  alternates: { canonical: "https://weshiplabs.com/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="section pt-32 relative overflow-hidden">
      <div className="orb orb-violet w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2" />
      <div className="orb orb-blue w-[300px] h-[300px] bottom-20 -right-20" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Built, shipped,
            <br />
            <span className="gradient-text">running in production.</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto text-base sm:text-lg">
            Every project here is live. Real users, real payments, real infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="group glass-card overflow-hidden flex flex-col">
              {/* Browser frame with screenshot */}
              {project.image && (
                <div className="border-b border-border">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-elevated/60">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <a
                    href={project.liveUrl || `/portfolio/${project.slug}`}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel="noopener"
                    className="block relative aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                </div>
              )}

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="tech-badge">
                    {project.category === "web" ? "Web" : "Mobile"}
                  </span>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener" className="text-text-subtle hover:text-violet-400 transition-colors flex items-center gap-1 text-xs">
                      <ExternalLink size={12} /> Visit Live
                    </a>
                  )}
                </div>

                <h2 className="font-heading text-2xl font-bold mb-1">{project.name}</h2>
                <p className="text-sm text-violet-400 font-medium mb-3">{project.tagline}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg bg-bg/50 border border-border">
                      <p className="text-[10px] text-text-subtle">{m.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-text-primary">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-subtle">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-subtle">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-sm text-violet-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
