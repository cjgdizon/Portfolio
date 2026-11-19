import type { MetadataRoute } from "next";

import { profile } from "@/lib/profile";
import { projects } from "@/features/projects/project-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.siteUrl}/projects/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
