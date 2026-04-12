import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* CTA band */}
      <div className="section py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">ship something?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-md mx-auto mb-8">
            Tell us what you need. We&apos;ll reply with a quote in 24 hours. No calls required.
          </p>
          <Link href="/contact" className="btn-primary text-lg py-4 px-10">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-heading font-bold text-text-primary mb-4">
            <span className="gradient-text">&lt;/&gt;</span> {SITE.name}
          </p>
          <p className="text-base text-text-subtle leading-relaxed">
            Software that ships. From idea to production in weeks, not months.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-subtle mb-4">Pages</p>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-base text-text-muted hover:text-text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-base text-text-muted hover:text-text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-subtle mb-4">Services</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/services#web-apps" className="text-base text-text-muted hover:text-text-primary transition-colors">Web Applications</Link>
            <Link href="/services#mobile-apps" className="text-base text-text-muted hover:text-text-primary transition-colors">Mobile Apps</Link>
            <Link href="/services#ai-features" className="text-base text-text-muted hover:text-text-primary transition-colors">Smart Features</Link>
            <Link href="/services#consulting" className="text-base text-text-muted hover:text-text-primary transition-colors">Consulting & Rescue</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-subtle mb-4">Connect</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/contact" className="text-base text-text-muted hover:text-text-primary transition-colors">Contact</Link>
            <Link href="/contact" className="text-base text-text-muted hover:text-text-primary transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-subtle">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="text-sm text-text-subtle">Built with Next.js, shipped with love.</p>
      </div>
    </footer>
  );
}
