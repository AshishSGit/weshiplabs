import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Smartphone, Zap, Globe, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "About  - Who We Are and How We Work",
  description: "WeShipLabs builds web apps, mobile apps, and smart features. Full-stack expertise across Next.js, React Native, SwiftUI, Python, and more.",
  alternates: { canonical: "https://www.weshiplabs.com/about" },
};

const skills = [
  { icon: <Code2 size={20} />, label: "Frontend", items: ["Next.js / React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML / CSS", "Responsive Design", "SwiftUI"] },
  { icon: <Smartphone size={20} />, label: "Mobile", items: ["React Native", "Expo", "SwiftUI", "HealthKit", "StoreKit / IAP", "Google Play Billing", "Push Notifications", "Deep Linking", "Camera / Location / Sensors"] },
  { icon: <Brain size={20} />, label: "Smart Features", items: ["RAG Systems", "Claude / GPT / Gemini APIs", "Whisper / Deepgram (Speech-to-Text)", "Vector Search & Embeddings", "Document Processing (PDF, DOCX, Images)", "Chatbots & Conversational UI", "Content Generation & Summarization", "Workflow Automation", "Video Processing & Clip Generation"] },
  { icon: <Zap size={20} />, label: "Backend", items: ["Node.js", "Python / Flask", "REST APIs", "WebSockets / Real-time", "FFmpeg (Audio / Video)", "Cron Jobs & Background Tasks", "File Upload & Processing", "Email (Resend, SendGrid)", "Rate Limiting & Security"] },
  { icon: <Globe size={20} />, label: "Infrastructure", items: ["Railway", "Vercel", "AWS (S3, Lambda, EC2)", "Cloudflare R2 / CDN", "CI/CD Pipelines", "Docker", "DNS & Domain Setup", "SSL & HTTPS", "Monitoring & Logging"] },
  { icon: <CreditCard size={20} />, label: "Business & Integrations", items: ["Stripe (Payments, Subscriptions, Invoicing)", "Supabase / Firebase", "Google Analytics", "SEO (Sitemap, Meta, Structured Data)", "App Store & Play Store Submission", "OAuth (Google, GitHub, Apple Sign-In)", "Magic Link Auth", "Webhooks & Third-party APIs", "Cloudflare, YouTube, LRC APIs"] },
];

export default function AboutPage() {
  return (
    <div className="section pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">About</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            We build software that
            <br />
            <span className="gradient-text">actually ships.</span>
          </h1>
          <div className="space-y-4 text-text-muted leading-relaxed text-lg text-left">
            <p>
              WeShipLabs exists because too many businesses wait months for agencies
              to deliver half-working prototypes. We do things differently  - you see
              working software every week, and your product goes live in weeks, not months.
            </p>
            <p>
              We specialize in full-stack web apps, mobile apps, and smart features
              that make products faster, smarter, and more useful. Every project includes
              design, development, testing, deployment, and 30 days of support.
            </p>
            <p>
              Our portfolio speaks for itself  - live products with real users and real
              payments that you can click on right now. No NDAs hiding empty promises.
              No Figma mockups pretending to be progress.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold">
              What we <span className="gradient-text">work with</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            How we <span className="gradient-text">work</span>
          </h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "Understand the business, not just the ticket", desc: "We dig into why you need this, who it's for, and what success looks like before writing a line of code." },
              { num: "02", title: "Ship fast, iterate faster", desc: "You see working software every week. Not Figma comps  - actual deployed code you can click on." },
              { num: "03", title: "Full stack, no handoffs", desc: "Frontend, backend, database, payments, deployment, App Store  - one team handles everything. No gaps." },
              { num: "04", title: "Your product, your code", desc: "We hand over everything  - clean codebase, documentation, deployment access. No lock-in, no hostage situations." },
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
