"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, NAV_LINKS } from "@/lib/constants";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.78)] backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-[rgba(10,10,15,0.4)] backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* gradient sheen along the bottom edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

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
          className="group flex items-center gap-2 font-heading text-lg font-bold text-text-primary"
        >
          <span className="gradient-text transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
            &lt;/&gt;
          </span>
          <span className="relative">
            {SITE.name}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-blue-400 transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  active ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                }`}
              >
                {/* hover background glow */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-blue-500/10"
                />
                {/* radial spotlight */}
                <span
                  aria-hidden
                  className="absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-violet-500/20"
                />
                <span className="relative z-10">{link.label}</span>
                {/* animated underline */}
                <span
                  aria-hidden
                  className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative ml-3 inline-flex items-center gap-1.5 text-sm font-semibold py-2 px-5 rounded-full text-white overflow-hidden transition-all duration-300 ease-out shadow-[0_4px_16px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(139,92,246,0.55),0_0_55px_rgba(59,130,246,0.3)] active:scale-100 active:translate-y-0 active:duration-100"
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
              size={14}
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
                className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 px-5 rounded-full text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500"
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
