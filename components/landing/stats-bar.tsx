"use client";

import { motion } from "framer-motion";

const proofPoints = [
  { value: "6 products", label: "Live & running in production" },
  { value: "Real revenue", label: "Live payments in our own apps" },
  { value: "<4 weeks", label: "Typical time to ship" },
  { value: "100% yours", label: "You own all the code" },
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-border bg-surface/50 overflow-hidden">
      {/* subtle top hairline glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {proofPoints.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`group text-center px-4 transition-transform duration-300 hover:-translate-y-0.5 ${
                i > 0 ? "md:border-l md:border-border/60" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1 transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_14px_rgba(139,92,246,0.4))]">
                {stat.value}
              </p>
              <p className="text-base text-text-subtle">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
