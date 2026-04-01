"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Fixed pricing upfront", us: true, agency: false, freelancer: false },
  { feature: "Ships in under 4 weeks", us: true, agency: false, freelancer: "maybe" },
  { feature: "You talk to the person writing code", us: true, agency: false, freelancer: true },
  { feature: "Smart features (search, chatbots, automation)", us: true, agency: "maybe", freelancer: false },
  { feature: "Full-stack (web + mobile + backend)", us: true, agency: true, freelancer: false },
  { feature: "Auth, payments, deployment included", us: true, agency: true, freelancer: false },
  { feature: "Live portfolio you can click", us: true, agency: false, freelancer: false },
  { feature: "Post-launch support included", us: true, agency: "maybe", freelancer: false },
  { feature: "Under $15K for an MVP", us: true, agency: false, freelancer: true },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <Check size={16} className="text-emerald-400 mx-auto" />;
  if (val === false) return <X size={16} className="text-red-400/60 mx-auto" />;
  return <Minus size={16} className="text-text-subtle mx-auto" />;
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
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Why Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Big agency quality. <span className="gradient-text">Freelancer speed.</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 md:p-4 text-text-subtle font-medium text-xs md:text-sm"></th>
                <th className="p-3 md:p-4 text-center whitespace-nowrap">
                  <span className="gradient-text font-bold text-xs md:text-sm">WeShipLabs</span>
                </th>
                <th className="p-3 md:p-4 text-center text-text-subtle font-medium text-xs md:text-sm whitespace-nowrap">Big Agency</th>
                <th className="p-3 md:p-4 text-center text-text-subtle font-medium text-xs md:text-sm whitespace-nowrap">Freelancer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors">
                  <td className="p-3 md:p-4 text-text-muted text-xs md:text-sm">{row.feature}</td>
                  <td className="p-3 md:p-4 text-center"><Cell val={row.us} /></td>
                  <td className="p-3 md:p-4 text-center"><Cell val={row.agency} /></td>
                  <td className="p-3 md:p-4 text-center"><Cell val={row.freelancer} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
