import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";
import { servicePages } from "@/lib/service-pages";

const blogSlugs = [
  "hire-react-native-developer-2026",
  "nextjs-vs-react-native-for-startups",
  "how-much-does-saas-mvp-cost",
  "rag-implementation-cost-and-timeline",
  "claude-vs-gpt-4-for-product-builders",
  "how-much-does-ai-chatbot-cost",
  "rag-vs-fine-tuning",
  "ship-mvp-in-4-weeks",
  "how-much-does-web-app-cost",
  "add-ai-to-existing-product",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.weshiplabs.com";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const projectPages = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePagesEntries = servicePages.map((p) => ({
    url: `${base}/services/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePagesEntries, ...projectPages, ...blogPages];
}
