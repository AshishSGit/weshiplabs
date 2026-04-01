"use client";

import { motion } from "framer-motion";

const proofPoints = [
  { value: "Web, iOS, Android", label: "Platforms We Build For" },
  { value: "<4 weeks", label: "Average Time to Launch" },
  { value: "30 days", label: "Free Support on Every Project" },
  { value: "Fixed price", label: "No Hourly Billing" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {proofPoints.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-text-subtle">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
