import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

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
    default: `${SITE.name} — AI-Powered Software That Ships`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "We build AI integrations, web platforms, and mobile apps. From idea to production in weeks. 7+ live products shipped.",
  keywords: [
    "AI software development",
    "AI integration services",
    "custom software development",
    "MVP development",
    "React Native development",
    "SwiftUI development",
    "RAG chatbot development",
    "AI consulting",
    "software consultancy",
  ],
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: `${SITE.name} — AI-Powered Software That Ships`,
    description: "We build AI integrations, web platforms, and mobile apps. From idea to production in weeks.",
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI-Powered Software That Ships`,
    description: "We build AI integrations, web platforms, and mobile apps. From idea to production in weeks.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
