import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";

const baseUrl = "https://kyptonix.com";

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
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...serviceCategories.map((service) => ({
      url: `${baseUrl}${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
