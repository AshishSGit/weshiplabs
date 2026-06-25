"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    week: "Day 1",
    title: "You tell us what you need",
    desc: "Fill out the form. We respond with a clear quote within 24 hours. No calls required.",
  },
  {
    week: "Week 1",
    title: "Architecture + first build",
    desc: "We nail down the plan, pick the stack, and start building immediately. You get a staging link by end of week.",
  },
  {
    week: "Week 2-3",
    title: "Core product + features",
    desc: "The real thing comes together: auth, payments, smart features, mobile responsiveness. You see demos every 7 days.",
  },
  {
    week: "Week 4",
    title: "Polish + go live",
    desc: "Bug fixes, performance, SEO, production deploy. Your product goes live on your domain. 30 days of free support starts.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Idea to live. <span className="gradient-text">4 weeks.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/40 to-transparent hidden md:block" />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.week}
                className="group flex gap-5 items-start rounded-2xl p-4 -mx-4 transition-colors duration-300 hover:bg-surface-elevated/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-10 h-10 rounded-full bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold flex-shrink-0 transition-all duration-300 group-hover:bg-violet-600/20 group-hover:border-violet-500/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">{step.week}</p>
                  <h3 className="font-heading font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="btn-primary group justify-center">
            Start your build
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-text-subtle mt-3">Free quote in 24 hours. No calls required.</p>
        </motion.div>
      </div>
    </section>
  );
}
