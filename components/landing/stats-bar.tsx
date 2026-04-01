"use client";

import { motion } from "framer-motion";

const proofPoints = [
  { value: "5", label: "Live Products You Can Click Right Now" },
  { value: "3", label: "Platforms (Web, iOS, Android)" },
  { value: "<4wk", label: "Average Time from Call to Launch" },
  { value: "$0", label: "Discovery Call — Always Free" },
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
