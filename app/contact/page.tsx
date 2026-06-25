"use client";

import { useState } from "react";
import { Send, Mail, Clock, ArrowRight, MessageSquare, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
];

const projectTypes = [
  "Chatbot / Knowledge Base",
  "Full Web App / MVP",
  "Mobile App (iOS / Android)",
  "Smart Feature for Existing Product",
  "Technical Audit / Consulting",
  "Something Else",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", budget: "", message: "" });
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
      // GA4 key event: a real lead came through the contact form. Fire only
      // after a successful POST so it maps 1:1 to a quote request.
      if (typeof window !== "undefined") {
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "lead_submitted",
          { project_type: form.type || "unspecified", budget: form.budget || "unspecified" }
        );
      }
      setForm({ name: "", email: "", company: "", type: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface-elevated border border-border rounded-xl px-4 py-3.5 text-base text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/25 transition-all";
  const selectClass =
    inputClass + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat pr-10";

  return (
    <div className="pt-10 md:pt-14 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Get a Free Quote</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Tell us what you need.
            <br />
            <span className="gradient-text">We&apos;ll tell you the cost.</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto text-lg">
            Takes 30 seconds. No calls, no meetings, no obligation. We respond within 24 hours with a clear scope and price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass-card p-5 sm:p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-emerald-400" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Got it!</h3>
                <p className="text-base text-text-muted">
                  We&apos;ll review your project and reply within 24 hours with a clear scope and price. Keep an eye on your inbox.
                </p>
                <p className="text-sm text-text-subtle mt-3">
                  Didn&apos;t hear back? Email us directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name *"
                    aria-label="Your name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    aria-label="Email address"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  aria-label="Company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                />
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={selectClass}
                  aria-label="What do you need?"
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
                  className={selectClass}
                  aria-label="Budget range (optional)"
                >
                  <option value="">Budget range (optional)</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Describe your project in a few sentences *"
                  aria-label="Describe your project"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass + " resize-none"}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center text-base py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Quote <ArrowRight size={16} />
                    </>
                  )}
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
                  <li key={i} className="flex items-start gap-3 text-base text-text-muted">
                    <span className="w-6 h-6 rounded-full bg-violet-600/10 flex items-center justify-center text-violet-400 text-sm flex-shrink-0 mt-0.5">
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
                <p className="text-base text-text-muted mb-4">
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
              <p className="text-base text-text-muted">We reply to every quote request within <span className="text-text-primary font-medium">24 hours</span>. Usually faster.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
