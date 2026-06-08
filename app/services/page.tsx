import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Rocket, Smartphone, Wrench, Check } from "lucide-react";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services: Web Apps, Mobile Apps, AI Integration",
  description:
    "Custom web app development from $3K. Mobile apps from $8K. AI integration from $5K. Fixed pricing, delivered in weeks. See what's included.",
  alternates: { canonical: "https://www.weshiplabs.com/services" },
};

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={32} />,
  rocket: <Rocket size={32} />,
  smartphone: <Smartphone size={32} />,
  wrench: <Wrench size={32} />,
};

const faqs = [
  {
    q: "What does your process look like?",
    a: "You fill out a form, we reply with a quote in 24 hours. If you approve, we start that week. Weekly demos so you see progress. Final week: testing, deployment, and handoff.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Absolutely. Most of our clients are non-technical. We translate your vision into architecture decisions and keep you updated in plain English.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free support. After that, we offer maintenance retainers ($150-300/mo) for updates, bug fixes, and scaling. Or we hand over the code and docs. It's your product.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Yes. We can add smart features to your existing app, fix broken code, refactor problem areas, or build new modules that plug into your current stack.",
  },
  {
    q: "What tech stack do you use?",
    a: "Next.js, React, React Native, SwiftUI, TypeScript, Python, Node.js, Supabase, Firebase, Stripe, Claude/GPT APIs, Deepgram, FFmpeg, and more. We pick what's best for your project.",
  },
  {
    q: "Do you do design?",
    a: "Yes. We design directly in code  - no Figma mockups that look nothing like the final product. You see real, working UI from week one.",
  },
];

export default function ServicesPage() {
  return (
    <div className="section pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What we <span className="gradient-text">build for you</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto text-lg">
            Every project includes architecture, development, testing, deployment, and 30 days of post-launch support.
          </p>
        </div>

        {/* Service sections */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <section key={service.id} id={service.id} className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Info */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-5">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-2">{service.title}</h2>
                  <p className="text-violet-400 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-text-muted leading-relaxed mb-8">{service.description}</p>

                  <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                    <div className="px-4 py-3 rounded-xl bg-surface-elevated border border-border">
                      <p className="text-xs text-text-subtle mb-1">Starting at</p>
                      <p className="font-heading text-xl font-bold gradient-text">{service.startingAt}</p>
                    </div>
                    <div className="px-4 py-3 rounded-xl bg-surface-elevated border border-border">
                      <p className="text-xs text-text-subtle mb-1">Timeline</p>
                      <p className="font-heading text-xl font-bold text-text-primary">{service.timeline}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Get a Free Quote <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Features */}
                <div className={`glass-card p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-6">What&apos;s included</p>
                  <div className="space-y-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-text-muted">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">FAQ</p>
            <h2 className="font-heading text-4xl font-bold">Common questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-heading font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
