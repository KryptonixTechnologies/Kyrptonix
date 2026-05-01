import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/resources",
    "/careers",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
    "/cookies",
    "/llms.txt",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/llms.txt" ? 0.5 : 0.8,
    })),
    ...serviceCategories.map((service) => ({
      url: `${siteConfig.url}${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
