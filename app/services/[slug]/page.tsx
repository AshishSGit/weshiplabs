import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { servicePages, servicePageBySlug } from "@/lib/service-pages";

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://www.weshiplabs.com/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      url: `https://www.weshiplabs.com/services/${page.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.kicker,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "WeShipLabs",
      url: "https://www.weshiplabs.com",
    },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: page.startingAtNumber,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: page.startingAtNumber,
        priceCurrency: "USD",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.weshiplabs.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.weshiplabs.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: page.kicker,
        item: `https://www.weshiplabs.com/services/${page.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="section pt-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="text-xs sm:text-sm text-text-subtle mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-violet-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-violet-400 transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{page.kicker}</span>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">
              {page.kicker}
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {page.h1} <span className="gradient-text">{page.h1Accent}</span>
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
              <div className="px-4 py-3 rounded-xl bg-surface-elevated border border-border">
                <p className="text-xs text-text-subtle mb-1">Starting at</p>
                <p className="font-heading text-xl font-bold gradient-text">{page.startingAt}</p>
              </div>
              <div className="px-4 py-3 rounded-xl bg-surface-elevated border border-border">
                <p className="text-xs text-text-subtle mb-1">Timeline</p>
                <p className="font-heading text-xl font-bold text-text-primary">{page.timeline}</p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={14} />
            </Link>
          </header>

          {/* Intro */}
          <section className="prose-section mb-20">
            {page.intro.map((para, i) => (
              <p
                key={i}
                className="text-lg text-text-muted leading-relaxed mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </section>

          {/* What you get */}
          <section className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-2">What&apos;s included</h2>
            <p className="text-text-muted mb-10">
              Every project ships with everything below, no surprise add-ons.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {page.whatYouGet.map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Check
                      size={18}
                      className="text-emerald-400 mt-1 flex-shrink-0"
                    />
                    <h3 className="font-heading font-bold text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-2">How it works</h2>
            <p className="text-text-muted mb-10">
              Same playbook for every project. Predictable, weekly demos.
            </p>
            <div className="space-y-5">
              {page.process.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600/15 border border-violet-500/30 flex items-center justify-center font-heading font-bold text-violet-300">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case studies */}
          <section className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-2">Live products built this way</h2>
            <p className="text-text-muted mb-10">
              Click any of these. They&apos;re running in production right now.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.caseStudies.map((c) => (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noopener"
                  className="glass-card p-6 group hover:border-violet-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="font-heading font-bold text-text-primary group-hover:text-violet-400 transition-colors">
                      {c.name}
                    </h3>
                    <ExternalLink
                      size={13}
                      className="text-text-subtle group-hover:text-violet-400 transition-colors ml-auto"
                    />
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {c.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="font-heading text-4xl font-bold mb-2">Frequently asked</h2>
            <p className="text-text-muted mb-10">
              The questions we get most often before someone signs.
            </p>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="glass-card p-6">
                  <h3 className="font-heading font-bold mb-2 text-text-primary">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="glass-card p-10 sm:p-12 text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
              {page.ctaHeadline}
            </h2>
            <p className="text-text-muted mb-7 max-w-xl mx-auto">{page.ctaSubtext}</p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get a Free Quote <ArrowRight size={14} />
            </Link>
          </section>

          {/* Other services */}
          <section className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-6">Other services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {servicePages
                .filter((p) => p.slug !== page.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/services/${p.slug}`}
                    className="glass-card p-5 group hover:border-violet-500/40 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-subtle mb-1">
                        {p.kicker}
                      </p>
                      <p className="font-heading font-bold text-text-primary group-hover:text-violet-400 transition-colors">
                        {p.h1} {p.h1Accent}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-text-subtle group-hover:text-violet-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                    />
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
