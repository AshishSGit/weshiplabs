"use client";

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
    desc: "The real thing comes together  - auth, payments, smart features, mobile responsiveness. You see demos every 7 days.",
  },
  {
    week: "Week 4",
    title: "Polish + launch",
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Idea to launch. <span className="gradient-text">4 weeks.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.week}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-10 h-10 rounded-full bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold flex-shrink-0">
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
      </div>
    </section>
  );
}
