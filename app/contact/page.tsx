"use client";

import { useState } from "react";
import { Send, Mail, ArrowRight, Loader2, CalendarClock, Check, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/constants";

// Optional structured fields. Kept available so the team gets richer context
// when a buyer chooses to share it, but NEVER required: the only required
// inputs are name, email, and the project description.
const projectTypes = [
  "Chatbot / Knowledge Base",
  "Full Web App / MVP",
  "Mobile App (iOS / Android)",
  "Smart Feature for Existing Product",
  "Technical Audit / Consulting",
  "Something Else",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
];

// Reassurance shown right by the form + submit button to lower friction.
const trustSignals = [
  "Reply within 24 hours",
  "No obligation, keep the quote",
  "You own all the code",
  "No calls required unless you want one",
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
    <div className="relative overflow-hidden pt-10 md:pt-16 pb-24 isolate">
      {/* Aurora background, consistent with the rest of the site */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="aurora-blob aurora-blob-1 opacity-40" />
        <div className="aurora-blob aurora-blob-2 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">Get a free quote</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">
            Tell us what you need.
            <br />
            <span className="gradient-text">We&apos;ll tell you the cost.</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Takes 30 seconds. No calls, no meetings, no obligation. We respond within 24 hours with a clear scope and a fixed price.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
          {/* === Form === */}
          <div className="glass-card p-5 sm:p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                  <Check className="text-emerald-400" size={28} strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Got it. You&apos;re in good hands.</h3>
                <p className="text-base text-text-muted max-w-sm mx-auto">
                  We&apos;ll review your project and reply within 24 hours with a clear scope and price. Keep an eye on your inbox.
                </p>
                <p className="text-sm text-text-subtle mt-4">
                  Need us sooner? Email us directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-xl font-bold mb-1">Send us your project</h2>
                <p className="text-sm text-text-subtle mb-6">Only three things needed: your name, email, and what you want built.</p>
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
                  <textarea
                    placeholder="What do you want to build? A few sentences is plenty. *"
                    aria-label="Describe your project"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-none"}
                  />

                  {/* Optional context: collapsed visually with a soft label so it never reads as required */}
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-wider text-text-subtle mb-3">Optional, helps us scope faster</p>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Company"
                        aria-label="Company (optional)"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <select
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className={selectClass}
                          aria-label="Project type (optional)"
                        >
                          <option value="">Project type</option>
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
                          <option value="">Budget range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Get my free quote <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {/* Trust line directly under the submit button */}
                  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-1 text-xs text-text-subtle">
                    {trustSignals.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <Check size={13} className="text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {status === "error" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/[0.06] p-4 text-center">
                      <p className="text-sm text-red-300">
                        Something went wrong sending that. Please email us directly at{" "}
                        <a href={`mailto:${SITE.email}`} className="font-medium underline">
                          {SITE.email}
                        </a>{" "}
                        and we&apos;ll reply fast.
                      </p>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* === Other ways to reach us === */}
          <div className="space-y-5">
            {/* Prominent, equally-weighted alternative path: book a call + email */}
            <div className="glass-card p-6 sm:p-7 border-violet-500/25 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
              <h2 className="font-heading text-lg font-bold mb-1">Prefer to skip the form?</h2>
              <p className="text-sm text-text-muted mb-5">
                Plenty of people would rather just talk or email. Either works, and you&apos;ll reach a real person.
              </p>

              <div className="space-y-3">
                {SITE.calendly && (
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener"
                    className="btn-primary group w-full justify-center py-3.5"
                  >
                    <CalendarClock size={18} />
                    Book a 30-min call
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
                <a
                  href={`mailto:${SITE.email}?subject=Project%20enquiry`}
                  className="btn-primary group w-full justify-center py-3.5"
                >
                  <Mail size={18} />
                  Email us directly
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-sm font-medium text-text-primary mt-4 text-center break-all">
                <a href={`mailto:${SITE.email}`} className="text-violet-300 hover:text-violet-200 transition-colors">
                  {SITE.email}
                </a>
              </p>
            </div>

            {/* Reassurance card */}
            <div className="glass-card p-6 sm:p-7">
              <h3 className="font-heading font-bold mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                What to expect
              </h3>
              <ul className="space-y-3">
                {trustSignals.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-text-muted">
                    <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How it works */}
            <div className="glass-card p-6 sm:p-7">
              <h3 className="font-heading font-bold mb-4 flex items-center gap-2">
                <Send size={16} className="text-violet-400" />
                How it works
              </h3>
              <ol className="space-y-3">
                {[
                  "You send us a few sentences (30 seconds)",
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
          </div>
        </div>
      </div>
    </div>
  );
}
