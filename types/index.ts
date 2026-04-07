export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  startingAt: string;
  timeline: string;
  icon: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  category: "ai" | "web" | "mobile";
  liveUrl?: string;
  image?: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
};
