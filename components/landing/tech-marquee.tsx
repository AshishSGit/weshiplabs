"use client";

import { techLogos } from "@/lib/site-data";

// A brand accent per tech so each pill carries a small glowing dot of colour
// instead of a flat grey row. Anything unmapped falls back to the brand violet.
const TECH_COLOR: Record<string, string> = {
  "Next.js": "#FFFFFF", React: "#61DAFB", "React Native": "#61DAFB",
  SwiftUI: "#FF7B4D", TypeScript: "#3B82F6", Python: "#FFD43B",
  "Node.js": "#3EAF54", Claude: "#D97757", OpenAI: "#10A37F",
  Deepgram: "#13EF93", Supabase: "#3ECF8E", Firebase: "#FFCA28",
  Stripe: "#8B84FF", "Tailwind CSS": "#38BDF8", FFmpeg: "#5CB85C",
  Railway: "#C4B5FD", Vercel: "#FFFFFF", AWS: "#FF9900",
};

function Pill({ tech }: { tech: string }) {
  const color = TECH_COLOR[tech] || "#A78BFA";
  return (
    <span className="group/pill inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[15px] font-semibold text-slate-200 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.28)]">
      <span
        className="h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover/pill:scale-125"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}, 0 0 2px ${color}` }}
      />
      {tech}
    </span>
  );
}

function Row({ items, reverse, duration }: { items: string[]; reverse?: boolean; duration: number }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee-track"
      style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal", gap: "20px" }}
    >
      {doubled.map((tech, i) => (
        <Pill key={`${tech}-${i}`} tech={tech} />
      ))}
    </div>
  );
}

export default function TechMarquee() {
  // Split into two rows so they can drift in opposite directions (more alive
  // than one long strip). Interleave so each row has a good colour mix.
  const rowA = techLogos.filter((_, i) => i % 2 === 0);
  const rowB = techLogos.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-16">
      {/* ambient glow so the strip glows off the flat black */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_120%_at_50%_50%,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="relative mx-auto mb-9 max-w-6xl px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-violet-400/60 sm:w-20" />
          <p className="whitespace-nowrap bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-center text-[11px] font-bold uppercase tracking-[0.16em] text-transparent sm:text-sm sm:tracking-[0.28em]">
            Technologies we ship with
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-blue-400/60 sm:w-20" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />
        <div className="flex flex-col gap-4">
          <Row items={rowA} duration={38} />
          <Row items={rowB} duration={46} reverse />
        </div>
      </div>
    </section>
  );
}
