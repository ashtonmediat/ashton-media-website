import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";
import { formats } from "@/content/formats";
import { work } from "@/content/work";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/billboards-in-tanzania/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/rates-and-booking/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/billboard-advertising-cost-tanzania/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/advertising-in-tanzania/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/plan-a-campaign/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/work/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/awards/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/insights/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy/", priority: 0.1, changeFrequency: "yearly" },
  ];
  return [
    ...staticPages.map((p) => ({ url: abs(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...formats.map((f) => ({ url: abs(`/${f.slug}/`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...work.map((w) => ({ url: abs(`/work/${w.slug}/`), lastModified: new Date(w.date), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: abs(`/insights/${p.slug}/`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.4 })),
  ];
}
