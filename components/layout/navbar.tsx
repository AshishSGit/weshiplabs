"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the mobile menu is open: lock body scroll and close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(17,16,30,0.82)] backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-[rgba(15,14,26,0.55)] backdrop-blur-lg border-b border-white/[0.06]"
      }`}
    >
      {/* soft violet glow wash across the whole bar */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/[0.07] to-transparent" />
      {/* gradient sheen along the bottom edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

      <div
        className={`w-full px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center text-lg"
        >
          <Logo size={scrolled ? 28 : 32} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-200/90 hover:text-white"
                }`}
              >
                {/* hover background glow */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/25 via-fuchsia-500/15 to-blue-500/25"
                />
                {/* radial spotlight */}
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-violet-500/30"
                />
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-px group-hover:[text-shadow:0_0_12px_rgba(167,139,250,0.65)]">
                  {link.label}
                </span>
                {/* animated underline */}
                <span
                  aria-hidden
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 shadow-[0_0_10px_rgba(167,139,250,0.7)] origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative ml-3 inline-flex items-center gap-2 text-[15px] font-bold py-2.5 px-6 rounded-full text-white overflow-hidden transition-all duration-300 ease-out shadow-[0_4px_16px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(139,92,246,0.55),0_0_55px_rgba(59,130,246,0.3)] active:scale-100 active:translate-y-0 active:duration-100"
          >
            {/* base gradient, travels left→right on hover */}
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-[length:200%_100%] bg-[position:0%_50%] transition-[background-position] duration-700 ease-out group-hover:bg-[position:100%_50%]"
            />
            {/* radial spotlight */}
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.35),transparent_60%)]"
            />
            {/* sweeping light sheen */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[250%] transition-transform duration-700 ease-out group-hover:translate-x-[450%]"
            />
            <span className="relative z-10">Get a Free Quote</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-text-muted hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{
              height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.22, ease: "easeOut" },
              y: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
            }}
            className="md:hidden bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut", delay: 0.04 }}
              className="px-6 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`relative py-3 px-3 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "text-text-primary bg-violet-500/10"
                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 text-[15px] font-bold py-3 px-6 rounded-full text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500"
              >
                Get a Free Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
