import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name}  - ${project.tagline}`,
    description: project.description,
    alternates: {
      canonical: `https://www.weshiplabs.com/portfolio/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="section pt-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-text-subtle hover:text-violet-400 transition-colors mb-8">
          <ArrowLeft size={14} /> All Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="tech-badge">
              {project.category === "web" ? "Web" : "Mobile"}
            </span>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener" className="text-xs text-text-subtle hover:text-violet-400 flex items-center gap-1 transition-colors">
                <ExternalLink size={12} /> Visit Live Site
              </a>
            )}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-violet-400 font-medium mb-4">{project.tagline}</p>
          <p className="text-text-muted text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {project.metrics.map((m) => (
            <div key={m.label} className="glass-card p-4 text-center">
              <p className="text-xs text-text-subtle mb-1">{m.label}</p>
              <p className="font-heading text-2xl font-bold gradient-text">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Challenge / Solution / Results */}
        <div className="space-y-10 mb-12">
          <div>
            <h2 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm">1</span>
              The Challenge
            </h2>
            <p className="text-text-muted leading-relaxed pl-10">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-sm">2</span>
              The Solution
            </h2>
            <p className="text-text-muted leading-relaxed pl-10">{project.solution}</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm">3</span>
              The Results
            </h2>
            <p className="text-text-muted leading-relaxed pl-10">{project.results}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="glass-card p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-border">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Want something like <span className="gradient-text">{project.name}</span>?
          </h3>
          <p className="text-text-muted mb-6">Let&apos;s talk about your project.</p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
