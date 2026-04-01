import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Smartphone, Zap, Globe, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the engineer behind WeShipLabs. 7+ production apps, AI expertise, full-stack across web and mobile.",
};

const skills = [
  { icon: <Brain size={20} />, label: "AI & ML", items: ["RAG Systems", "Claude / GPT APIs", "Whisper / Deepgram", "Vector Search", "Document Processing"] },
  { icon: <Code2 size={20} />, label: "Frontend", items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Framer Motion", "SwiftUI"] },
  { icon: <Smartphone size={20} />, label: "Mobile", items: ["React Native", "Expo", "SwiftUI", "HealthKit", "StoreKit / IAP"] },
  { icon: <Zap size={20} />, label: "Backend", items: ["Node.js", "Python / Flask", "REST APIs", "WebSockets", "FFmpeg"] },
  { icon: <Globe size={20} />, label: "Infrastructure", items: ["Railway", "Vercel", "AWS", "Cloudflare R2", "CI/CD"] },
  { icon: <CreditCard size={20} />, label: "Business", items: ["Stripe Billing", "Supabase / Firebase", "SEO", "App Store", "Analytics"] },
];

export default function AboutPage() {
  return (
    <div className="section pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">About</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              One engineer.<br />
              <span className="gradient-text">Seven live products.</span>
            </h1>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;m Ashish — a full-stack engineer who builds AI-powered software.
                Not concept decks. Not wireframes. Production apps with real users, real
                payments, and real infrastructure.
              </p>
              <p>
                I started WeShipLabs because I kept seeing the same gap: founders with
                great ideas stuck waiting months for agencies to deliver half-working
                prototypes. I build faster, leaner, and with AI baked in from day one.
              </p>
              <p>
                Every product in our portfolio — from Knoah&apos;s RAG knowledge base to
                Clippified&apos;s video pipeline — was architected, built, and deployed
                by me. When you hire WeShipLabs, you get the person who actually writes the code.
              </p>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-border flex items-center justify-center">
                <span className="font-heading text-7xl font-bold gradient-text">AS</span>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2">
                <p className="text-xs text-text-subtle">Status</p>
                <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Taking new projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">
              Full-stack <span className="gradient-text">expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.label} className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-violet-400">{skill.icon}</span>
                  <h3 className="font-heading font-bold text-sm">{skill.label}</h3>
                </div>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="text-xs text-text-muted">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            How I <span className="gradient-text">work</span>
          </h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "Understand the business, not just the ticket", desc: "I dig into why you need this, who it's for, and what success looks like before writing a line of code." },
              { num: "02", title: "Ship fast, iterate faster", desc: "You see working software every week. Not Figma comps — actual deployed code you can click on." },
              { num: "03", title: "AI-first, not AI-afterthought", desc: "I architect AI into the product from the start, not bolted on later. Better UX, lower costs, fewer rewrites." },
              { num: "04", title: "Own the full stack", desc: "Auth, payments, deployment, SEO, App Store submission — I don't hand you a half-finished project and wish you luck." },
            ].map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="font-heading text-2xl font-bold text-violet-500/30">{step.num}</span>
                <div>
                  <h3 className="font-heading font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-border">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Let&apos;s build <span className="gradient-text">your next product</span>
          </h3>
          <p className="text-text-muted mb-6">Tell us what you need. We&apos;ll reply with a quote in 24 hours.</p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
