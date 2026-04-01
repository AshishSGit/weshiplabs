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
          <p className="text-text-muted max-w-md mx-auto mb-8">
            Tell us what you need. We&apos;ll reply with a quote in 24 hours. No calls required.
          </p>
          <Link href="/contact" className="btn-primary text-base py-3 px-8">
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
          <p className="text-sm text-text-subtle leading-relaxed">
            Software that ships. From idea to production in weeks, not months.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">Pages</p>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm text-text-muted hover:text-text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">Services</p>
          <div className="flex flex-col gap-2">
            <Link href="/services#ai-integration" className="text-sm text-text-muted hover:text-text-primary transition-colors">AI Integration</Link>
            <Link href="/services#product-builds" className="text-sm text-text-muted hover:text-text-primary transition-colors">Product Builds</Link>
            <Link href="/services#mobile-apps" className="text-sm text-text-muted hover:text-text-primary transition-colors">Mobile Apps</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4">Connect</p>
          <div className="flex flex-col gap-2">
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener" className="text-sm text-text-muted hover:text-text-primary transition-colors">LinkedIn</a>
            <a href={SITE.socials.github} target="_blank" rel="noopener" className="text-sm text-text-muted hover:text-text-primary transition-colors">GitHub</a>
            <a href={SITE.socials.twitter} target="_blank" rel="noopener" className="text-sm text-text-muted hover:text-text-primary transition-colors">Twitter / X</a>
            <Link href="/contact" className="text-sm text-text-muted hover:text-text-primary transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-text-subtle">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="text-xs text-text-subtle">Built with Next.js, shipped with love.</p>
      </div>
    </footer>
  );
}
