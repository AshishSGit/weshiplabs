import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "7+ production apps shipped — AI SaaS, web platforms, and mobile apps. See our live work.",
};

export default function PortfolioPage() {
  return (
    <div className="section pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Built, shipped, <span className="gradient-text">running in production</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto text-lg">
            Every project here is live. Real users, real payments, real infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="glass-card p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-badge">
                  {project.category === "ai" ? "AI" : project.category === "web" ? "Web" : "Mobile"}
                </span>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener" className="text-text-subtle hover:text-violet-400 transition-colors flex items-center gap-1 text-xs">
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold mb-1">{project.name}</h2>
              <p className="text-sm text-violet-400 font-medium mb-3">{project.tagline}</p>
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center p-2 rounded-lg bg-bg/50 border border-border">
                    <p className="text-xs text-text-subtle">{m.label}</p>
                    <p className="text-sm font-semibold text-text-primary">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-subtle">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="text-sm text-violet-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read Case Study <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
