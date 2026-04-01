"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/site-data";

const featured = projects.filter((p) => p.featured);

export default function CaseStudiesPreview() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Real products, <span className="gradient-text">live in production</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-lg mx-auto">
            Not mockups. Not concepts. These are shipping products with real users and real revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              className="glass-card p-6 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="tech-badge">
                  {project.category === "ai" ? "AI" : project.category === "web" ? "Web" : "Mobile"}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-text-subtle hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <h3 className="font-heading text-lg font-bold mb-1">{project.name}</h3>
              <p className="text-sm text-violet-400 font-medium mb-3">{project.tagline}</p>
              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center p-2 rounded-lg bg-bg/50">
                    <p className="text-xs text-text-subtle">{m.label}</p>
                    <p className="text-sm font-semibold text-text-primary">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-subtle">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-subtle">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio" className="btn-ghost">
            View All Projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
