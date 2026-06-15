import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const GA_ID = "G-1FF3GS765X";

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: Software That Ships`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "We design, build, and deploy web apps, mobile apps, and smart features. Fixed pricing, delivered in weeks. Get a free quote today.",
  keywords: [
    "custom software development",
    "web app development company",
    "MVP development agency",
    "mobile app development",
    "React Native development",
    "SwiftUI app development",
    "AI integration services",
    "hire software developer",
    "build web app",
    "build mobile app",
    "software development agency",
    "fixed price software development",
    "startup MVP builder",
    "SaaS development",
    "AI chatbot development cost",
    "RAG development services",
    "app development cost",
    "website development cost",
  ],
  alternates: {
    canonical: "https://www.weshiplabs.com",
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: `${SITE.name}: Software That Ships`,
    description: "We design, build, and deploy web apps, mobile apps, and smart features. From idea to production in weeks.",
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}: Software That Ships`,
    description: "We design, build, and deploy web apps, mobile apps, and smart features. From idea to production in weeks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeShipLabs",
  url: "https://www.weshiplabs.com",
  logo: "https://www.weshiplabs.com/icon.svg",
  description: "We design, build, and deploy web apps, mobile apps, and smart features. Fixed pricing, delivered in weeks.",
  foundingDate: "2026",
  areaServed: "Worldwide",
  serviceType: [
    "Web Application Development",
    "Mobile App Development",
    "AI Integration",
    "MVP Development",
    "Software Consulting",
  ],
  knowsAbout: [
    "Next.js", "React", "React Native", "SwiftUI", "TypeScript",
    "Python", "Node.js", "Supabase", "Firebase", "Stripe",
    "Claude API", "OpenAI", "Deepgram", "RAG", "Chatbots",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Quick Audit", description: "Business and codebase review with recommendations" },
        priceSpecification: { "@type": "PriceSpecification", price: "250", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landing Page / Website", description: "Custom-built SEO-optimized website" },
        priceSpecification: { "@type": "PriceSpecification", price: "1500", priceCurrency: "USD", minPrice: "1500" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web App / MVP", description: "Full-stack web application with auth, payments, and deployment" },
        priceSpecification: { "@type": "PriceSpecification", price: "4000", priceCurrency: "USD", minPrice: "4000" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobile App", description: "iOS and Android app with App Store submission" },
        priceSpecification: { "@type": "PriceSpecification", price: "4500", priceCurrency: "USD", minPrice: "4500" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Integration", description: "AI-powered features for existing or new products" },
        priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "USD", minPrice: "2500" },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WeShipLabs",
  url: "https://www.weshiplabs.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main" className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
