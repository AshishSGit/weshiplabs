"use client";

import Link from "next/link";
import { ArrowRight, Check, Search, Zap, Rocket, Smartphone, Globe, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Quick Audit",
    price: "$500",
    description: "We look at your business, product, or codebase and tell you exactly what to build, fix, or automate  - and what it'll cost.",
    icon: <Search size={24} />,
    features: [
      "We review your product or business",
      "Written report with recommendations",
      "Architecture plan or AI-powered opportunity map",
      "Implementation roadmap with costs",
      "No obligation  - keep the report either way",
    ],
    timeline: "3–5 days",
    popular: false,
    cta: "Get an Audit",
  },
  {
    name: "Landing Page / Website",
    price: "From $3,000",
    description: "A fast, beautiful, SEO-optimized website that converts visitors into customers. Not a WordPress template  - custom built.",
    icon: <Globe size={24} />,
    features: [
      "Custom design (not templates)",
      "Mobile-responsive",
      "SEO setup (sitemap, meta tags, structured data)",
      "Contact form & lead capture",
      "Analytics integration",
      "Hosting & deployment included",
    ],
    timeline: "1–2 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "Web App / MVP",
    price: "From $8,000",
    description: "A complete web application  - designed, built, and deployed. Auth, payments, dashboards  - everything included. Ready for users.",
    icon: <Rocket size={24} />,
    features: [
      "Full-stack web application",
      "Authentication & user accounts",
      "Stripe payments & subscriptions",
      "Admin dashboard & analytics",
      "Mobile-responsive design",
      "SEO & sitemap",
      "Production deployment",
      "30 days post-launch support",
    ],
    timeline: "2–6 weeks",
    popular: true,
    cta: "Get a Quote",
  },
  {
    name: "Mobile App",
    price: "From $8,000",
    description: "iOS, Android, or both. App Store submission included. In-app purchases, push notifications, HealthKit  - whatever you need.",
    icon: <Smartphone size={24} />,
    features: [
      "React Native (cross-platform) or SwiftUI (native iOS)",
      "App Store & Play Store submission",
      "Push notifications & deep links",
      "In-app purchases & subscriptions",
      "Camera, location, health integrations",
      "Backend API included",
      "30 days post-launch support",
    ],
    timeline: "4–8 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "AI-Powered Integration",
    price: "From $5,000",
    description: "Add AI-powered features to your existing product or build smart tools from scratch. Chatbots, document processing, voice transcription, automation.",
    icon: <Zap size={24} />,
    features: [
      "RAG chatbots with source citations",
      "Document processing (PDF, DOCX, images)",
      "Voice transcription & analysis",
      "AI-powered content generation & summarization",
      "Workflow automation",
      "Video processing & clip generation",
      "Custom model integration",
      "30 days post-launch support",
    ],
    timeline: "2–6 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "Rescue & Fix",
    price: "From $2,000",
    description: "Your last developer disappeared. Your app is slow. Something's broken. We'll fix it fast.",
    icon: <Wrench size={24} />,
    features: [
      "Codebase audit & assessment",
      "Bug fixes & performance optimization",
      "Fix broken/abandoned projects",
      "Database migration & cleanup",
      "Security hardening",
      "DevOps setup (CI/CD, monitoring)",
    ],
    timeline: "1–2 weeks",
    popular: false,
    cta: "Get a Quote",
  },
];

export default function Packages() {
  return (
    <section className="section" id="packages">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Packages</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Clear scope. <span className="gradient-text">Fixed price.</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-lg mx-auto">
            No hourly billing. No surprise invoices. You know exactly what you get and what it costs before we start.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`glass-card p-6 flex flex-col relative ${pkg.popular ? "border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[11px] font-semibold">
                  Most Popular
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4">
                {pkg.icon}
              </div>

              <h3 className="font-heading text-lg font-bold mb-1">{pkg.name}</h3>
              <p className="font-heading text-2xl font-bold gradient-text mb-3">{pkg.price}</p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">{pkg.description}</p>

              <div className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-text-muted">{f}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-text-subtle mb-4">
                Timeline: <span className="text-text-muted font-medium">{pkg.timeline}</span>
              </div>

              <Link
                href="/contact"
                className={pkg.popular ? "btn-primary text-sm justify-center w-full" : "btn-ghost text-sm justify-center w-full"}
              >
                {pkg.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-text-subtle">
            Need something custom? <Link href="/contact" className="text-violet-400 hover:underline">Tell us what you&apos;re building</Link>  - we&apos;ll scope it for free.
          </p>
          <p className="text-sm text-text-subtle">
            All projects include <span className="text-text-muted">30 days free support</span> + optional maintenance retainers from <span className="text-text-muted">$150/mo</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
