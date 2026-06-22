"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Rocket, Globe, Zap } from "lucide-react";

const bentoItems = [
  {
    title: "Web Apps",
    description: "Full-stack platforms with auth, payments, dashboards. From landing pages to enterprise SaaS.",
    icon: <Globe size={24} />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
    height: "min-h-[400px] md:min-h-[440px]",
    accent: "from-violet-500/30 to-blue-500/10",
  },
  {
    title: "Mobile Apps",
    description: "iOS, Android, or both. App Store ready.",
    icon: <Smartphone size={24} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    span: "md:col-span-1",
    height: "min-h-[200px]",
    accent: "from-blue-500/30 to-cyan-500/10",
  },
  {
    title: "Intelligent Features",
    description: "Chatbots, RAG, voice, automation.",
    icon: <Brain size={24} />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    span: "md:col-span-1",
    height: "min-h-[200px]",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    title: "MVP Sprints",
    description: "Idea to live product in 4 weeks. Fixed price, no surprises. Working software every Friday.",
    icon: <Rocket size={24} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    span: "md:col-span-2",
    height: "min-h-[200px]",
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    title: "Smart Architecture",
    description: "Built to scale. Modern stack.",
    icon: <Code2 size={24} />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    span: "md:col-span-1",
    height: "min-h-[200px]",
    accent: "from-violet-500/30 to-pink-500/10",
  },
  {
    title: "Performance First",
    description: "Sub-second loads. Optimized for Core Web Vitals.",
    icon: <Zap size={24} />,
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&q=80",
    span: "md:col-span-1",
    height: "min-h-[200px]",
    accent: "from-yellow-500/30 to-amber-500/10",
  },
];

export default function Bento() {
  return (
    <section className="section relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">What We Build</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need
            <br />
            <span className="gradient-text">to ship.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-min">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-violet-500/40 transition-all duration-500 ${item.span} ${item.height}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Dark overlay — light enough to let the image read clearly, weighted to the bottom where the text sits */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-bg/5" />
              {/* Extra scrim behind text for guaranteed contrast (text also has its own text-shadow) */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/85 via-bg/30 to-transparent" />
              {/* Accent gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 backdrop-blur-md border border-violet-500/30 flex items-center justify-center text-violet-300 mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-text-primary leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.95)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
