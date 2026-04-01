"use client";

import { techLogos } from "@/lib/site-data";

export default function TechMarquee() {
  const doubled = [...techLogos, ...techLogos];

  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle text-center">
          Technologies We Ship With
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm text-text-subtle font-medium whitespace-nowrap px-4 py-2 rounded-lg border border-border hover:border-violet-500/20 hover:text-violet-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
