"use client";

import Link from "next/link";
import { Brain, Rocket, Smartphone, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} />,
  rocket: <Rocket size={28} />,
  smartphone: <Smartphone size={28} />,
  wrench: <Wrench size={28} />,
};

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Everything you need to <span className="gradient-text">ship</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="glass-card p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-5">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-violet-400 font-medium mb-3">{service.subtitle}</p>
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-subtle">From {service.startingAt}</span>
                <Link
                  href={`/services#${service.id}`}
                  className="text-violet-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
