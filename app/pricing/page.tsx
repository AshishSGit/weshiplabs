import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Clock, Wallet, Repeat } from "lucide-react";
import Packages from "@/components/landing/packages";
import Comparison from "@/components/landing/comparison";

export const metadata: Metadata = {
  title: "Pricing: Fixed-Price Software Development",
  description:
    "Simple, fixed pricing. Websites from $1,500, web apps & MVPs from $4,000, mobile apps from $4,500, AI features from $2,500. No hourly billing, no surprise invoices. Free quote in 24 hours.",
  alternates: { canonical: "https://www.weshiplabs.com/pricing" },
};

const trust = [
  { icon: <Wallet size={18} />, label: "Fixed price", sub: "No hourly billing" },
  { icon: <Clock size={18} />, label: "Quote in 24h", sub: "No calls required" },
  { icon: <ShieldCheck size={18} />, label: "30 days support", sub: "On every project" },
  { icon: <Repeat size={18} />, label: "Weekly demos", sub: "See real software" },
];

const faqs = [
  {
    q: "Is the price really fixed?",
    a: "Yes. We agree the full scope and a fixed price before any work starts. If the scope doesn't change, the price doesn't change. No hourly billing, no surprise invoices at the end.",
  },
  {
    q: "How do payments work?",
    a: "Typically a deposit to start and the balance when your product goes live. For larger builds we can split into milestones. We confirm the exact terms in writing with your quote.",
  },
  {
    q: "What if my project needs more than a package?",
    a: "The prices are starting points. We scope your exact requirements and quote a single fixed number up front. If it's bigger, we tell you before we start, not after.",
  },
  {
    q: "What's included in every project?",
    a: "Architecture, development, testing, production deployment to your domain, and 30 days of free support after you go live. You own the code in a GitHub repo from day one.",
  },
  {
    q: "Are there ongoing costs?",
    a: "Only third-party services you'd pay anyway: domain (~$10/yr), hosting (~$5-20/mo on Railway), Stripe fees on real transactions, and model API usage if you use Claude or GPT. We estimate these up front.",
  },
  {
    q: "How do I lower my risk?",
    a: "Start with the $250 Quick Audit. We review your idea, suggest the smallest version that proves the concept, and hand you a roadmap with costs. No obligation, and you keep the report either way.",
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden isolate pt-32 pb-10">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/60 to-bg" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Pricing</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Simple pricing. <span className="gradient-text">No surprises.</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            One fixed price, agreed before we start. You see working software every week and own the
            code from day one. Most quotes go out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            <Link href="/contact" className="btn-primary justify-center">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link href="#packages" className="btn-ghost justify-center">
              See the packages <ArrowRight size={14} />
            </Link>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {trust.map((t) => (
              <div key={t.label} className="glass-card p-4 flex flex-col items-center text-center gap-1.5">
                <span className="text-violet-400">{t.icon}</span>
                <span className="text-sm font-semibold text-text-primary">{t.label}</span>
                <span className="text-xs text-text-subtle">{t.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages (reused) */}
      <Packages />

      {/* Comparison (reused) */}
      <Comparison />

      {/* Pricing FAQ */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">FAQ</p>
            <h2 className="font-heading text-4xl font-bold">Pricing questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-heading font-bold mb-2 flex items-start gap-2">
                  <Check size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
