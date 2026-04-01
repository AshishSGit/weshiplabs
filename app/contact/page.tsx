"use client";

import { useState } from "react";
import { Send, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/constants";

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

const projectTypes = [
  "AI Chatbot / Knowledge Base",
  "Full Web App / MVP",
  "Mobile App (iOS / Android)",
  "AI Feature for Existing Product",
  "AI Audit / Consulting",
  "Something Else",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", type: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-violet-500/40 transition-colors";

  return (
    <div className="section pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">Get a Free Quote</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Tell us what you need.
            <br />
            <span className="gradient-text">We&apos;ll tell you the cost.</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto text-lg">
            Takes 30 seconds. No calls, no meetings, no obligation. We respond within 24 hours with a clear scope and price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass-card p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-emerald-400" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Got it!</h3>
                <p className="text-sm text-text-muted">We&apos;ll get back to you within 24 hours with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={inputClass}
                  required
                >
                  <option value="">What do you need? *</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Budget range (optional)</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Describe your project in a few sentences *"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass + " resize-none"}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center text-base py-3"
                >
                  {status === "sending" ? "Sending..." : "Get My Free Quote"} <ArrowRight size={16} />
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">Something went wrong. Try emailing us directly.</p>
                )}
              </form>
            )}
          </div>

          {/* Right side */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-heading font-bold mb-3 flex items-center gap-2">
                <MessageSquare size={18} className="text-violet-400" />
                How it works
              </h3>
              <ol className="space-y-3">
                {[
                  "You fill out this form (30 seconds)",
                  "We respond within 24 hours with a clear quote",
                  "If you like it, we start building that week",
                  "You see working software every 7 days",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="w-5 h-5 rounded-full bg-violet-600/10 flex items-center justify-center text-violet-400 text-xs flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {SITE.calendly && (
              <div className="glass-card p-6">
                <h3 className="font-heading font-bold mb-3 flex items-center gap-2">
                  <Clock size={18} className="text-violet-400" />
                  Prefer a call instead?
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  Totally fine. Book a free 30-minute call.
                </p>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost text-sm w-full justify-center"
                >
                  Open Calendly <ArrowRight size={14} />
                </a>
              </div>
            )}

            <div className="glass-card p-6">
              <h3 className="font-heading font-bold mb-3 flex items-center gap-2">
                <Mail size={18} className="text-violet-400" />
                Response time
              </h3>
              <p className="text-sm text-text-muted">We reply to every quote request within <span className="text-text-primary font-medium">24 hours</span>. Usually faster.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
