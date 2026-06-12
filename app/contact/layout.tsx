import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get a Free Quote",
  description:
    "Tell us about your project and get a free quote. We build web apps, mobile apps, and smart features with fixed pricing, delivered in weeks.",
  alternates: { canonical: "https://www.weshiplabs.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
