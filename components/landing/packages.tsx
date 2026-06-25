"use client";

import Link from "next/link";
import { ArrowRight, Check, Search, Zap, Rocket, Smartphone, Globe, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Quick Audit",
    price: "$250",
    description: "We look at your business, product, or codebase and tell you exactly what to build, fix, or automate, and what it will cost.",
    icon: <Search size={24} />,
    features: [
      "We review your product or business",
      "Written report with recommendations",
      "Architecture plan or opportunity map",
      "Implementation roadmap with costs",
      "No obligation. Keep the report either way",
    ],
    timeline: "3-5 days",
    popular: false,
    cta: "Get an Audit",
  },
  {
    name: "Landing Page / Website",
    price: "From $1,500",
    description: "A fast, beautiful, SEO-optimized website that converts visitors into customers. Not a WordPress template. Fully custom built.",
    icon: <Globe size={24} />,
    features: [
      "Custom design (not templates)",
      "Mobile-responsive",
      "SEO setup (sitemap, meta tags, structured data)",
      "Contact form & lead capture",
      "Analytics integration",
      "Hosting & deployment included",
    ],
    timeline: "1-2 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "Web App / MVP",
    price: "From $4,000",
    description: "A complete web application: designed, built, and deployed. Auth, payments, dashboards, everything included. Ready for users.",
    icon: <Rocket size={24} />,
    features: [
      "Full-stack web application",
      "Authentication & user accounts",
      "Stripe payments & subscriptions",
      "Admin dashboard & analytics",
      "Mobile-responsive design",
      "SEO & sitemap",
      "Production deployment",
      "30 days post-ship support",
    ],
    timeline: "2-6 weeks",
    popular: true,
    cta: "Get a Quote",
  },
  {
    name: "Mobile App",
    price: "From $4,500",
    description: "iOS, Android, or both. App Store submission included. In-app purchases, push notifications, HealthKit, whatever you need.",
    icon: <Smartphone size={24} />,
    features: [
      "React Native (cross-platform) or SwiftUI (native iOS)",
      "App Store & Play Store submission",
      "Push notifications & deep links",
      "In-app purchases & subscriptions",
      "Camera, location, health integrations",
      "Backend API included",
      "30 days post-ship support",
    ],
    timeline: "4-8 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "AI Integration",
    price: "From $2,500",
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
      "30 days post-ship support",
    ],
    timeline: "2-6 weeks",
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "Rescue & Fix",
    price: "From $1,000",
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
    timeline: "1-2 weeks",
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
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Packages</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
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
              className={`group glass-card p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 ${pkg.popular ? "border-violet-500/40 shadow-[0_0_50px_rgba(139,92,246,0.12)]" : "hover:shadow-[0_0_40px_rgba(139,92,246,0.10)]"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[11px] font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.45)]">
                  Most Popular
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4 transition-all duration-300 group-hover:bg-violet-600/20 group-hover:scale-105">
                {pkg.icon}
              </div>

              <h3 className="font-heading text-xl font-bold mb-1">{pkg.name}</h3>
              <p className="font-heading text-3xl font-bold gradient-text mb-3">{pkg.price}</p>
              <p className="text-base text-text-muted leading-relaxed mb-5">{pkg.description}</p>

              <div className="space-y-3 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-text-primary leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <div className="text-sm text-text-subtle mb-4">
                Timeline: <span className="text-text-muted font-medium">{pkg.timeline}</span>
              </div>

              <Link
                href="/contact"
                className="btn-primary justify-center w-full"
              >
                {pkg.cta} <ArrowRight size={16} />
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
            Need something custom? <Link href="/contact" className="text-violet-400 hover:underline">Tell us what you&apos;re building</Link>. We&apos;ll scope it for free.
          </p>
          <p className="text-sm text-text-subtle">
            All projects include <span className="text-text-muted">30 days free support</span> + optional maintenance retainers from <span className="text-text-muted">$150/mo</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
