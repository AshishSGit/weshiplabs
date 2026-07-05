"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight, Sparkles } from "lucide-react";

const rows = [
  { feature: "Fixed pricing upfront", us: true, agency: false, freelancer: false },
  { feature: "Ships in under 4 weeks", us: true, agency: false, freelancer: "maybe" },
  { feature: "You talk to the person writing code", us: true, agency: false, freelancer: true },
  { feature: "Smart features (search, chatbots, automation)", us: true, agency: "maybe", freelancer: false },
  { feature: "Full-stack (web + mobile + backend)", us: true, agency: true, freelancer: false },
  { feature: "Auth, payments, deployment included", us: true, agency: true, freelancer: false },
  { feature: "Live portfolio you can click", us: true, agency: false, freelancer: false },
  { feature: "Post-ship support included", us: true, agency: "maybe", freelancer: false },
  { feature: "Under $8K for an MVP", us: true, agency: false, freelancer: true },
];

function Cell({ val, highlight = false }: { val: boolean | string; highlight?: boolean }) {
  if (val === true) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full ${
          highlight
            ? "w-7 h-7 bg-emerald-500/15 ring-1 ring-emerald-400/40"
            : "w-6 h-6 bg-emerald-500/10"
        }`}
      >
        <Check size={highlight ? 16 : 14} strokeWidth={3} className="text-emerald-400" />
      </span>
    );
  }
  if (val === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.03]">
        <X size={14} strokeWidth={2.5} className="text-slate-600" />
      </span>
    );
  }
  // "maybe"
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/[0.08]">
      <Minus size={14} strokeWidth={2.5} className="text-amber-400/70" />
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Why us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Big agency quality. <span className="gradient-text">Freelancer speed.</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-lg mx-auto">
            The reach of a full team, the pace and price of working with one person who actually ships.
          </p>
        </motion.div>

        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[520px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left p-4 align-bottom font-medium text-text-subtle text-xs md:text-sm w-[40%]"></th>
                  <th className="p-4 pt-5 text-center align-bottom whitespace-nowrap bg-gradient-to-b from-violet-500/[0.14] to-violet-500/[0.05] border-x border-t border-violet-500/30 rounded-t-2xl">
                    <div className="flex flex-col items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-[length:200%_100%] animate-[gradient-shift_4s_ease-in-out_infinite] text-white text-[10px] font-bold uppercase tracking-[0.12em] whitespace-nowrap shadow-[0_6px_20px_-4px_rgba(168,85,247,0.8)] ring-1 ring-white/25">
                        <Sparkles size={11} strokeWidth={2.5} className="text-white drop-shadow" />
                        Best value
                      </span>
                      <span className="gradient-text font-heading font-bold text-base md:text-lg leading-none">WeShipLabs</span>
                    </div>
                  </th>
                  <th className="p-4 text-center align-bottom text-text-subtle font-medium text-xs md:text-sm whitespace-nowrap">Big agency</th>
                  <th className="p-4 text-center align-bottom text-text-subtle font-medium text-xs md:text-sm whitespace-nowrap">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const last = i === rows.length - 1;
                  return (
                    <tr key={row.feature} className="group">
                      <td className="p-4 text-text-primary text-xs md:text-[15px] border-b border-border/40 group-hover:bg-surface-elevated/20 transition-colors">
                        {row.feature}
                      </td>
                      <td
                        className={`p-4 text-center bg-gradient-to-b from-violet-500/[0.07] to-violet-500/[0.04] border-x border-violet-500/30 ${
                          last ? "rounded-b-2xl border-b" : "border-b border-b-violet-500/10"
                        }`}
                      >
                        <Cell val={row.us} highlight />
                      </td>
                      <td className="p-4 text-center border-b border-border/40 group-hover:bg-surface-elevated/20 transition-colors">
                        <Cell val={row.agency} />
                      </td>
                      <td className="p-4 text-center border-b border-border/40 group-hover:bg-surface-elevated/20 transition-colors">
                        <Cell val={row.freelancer} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-text-subtle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-1.5"><Check size={13} strokeWidth={3} className="text-emerald-400" /> Included</span>
          <span className="flex items-center gap-1.5"><Minus size={13} strokeWidth={2.5} className="text-amber-400/70" /> Sometimes, costs extra</span>
          <span className="flex items-center gap-1.5"><X size={13} strokeWidth={2.5} className="text-slate-600" /> Not on offer</span>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="btn-primary group justify-center">
            Get a free quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
