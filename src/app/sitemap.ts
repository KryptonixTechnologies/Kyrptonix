import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";

export const dynamic = "force-static";

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/about/", priority: 0.8 },
  { path: "/services/", priority: 0.9 },
  { path: "/services/website-design-development-kenya/", priority: 1.0 },
  { path: "/services/ecommerce-website-development-kenya/", priority: 1.0 },
  { path: "/services/mpesa-integration-services/", priority: 0.9 },
  { path: "/portfolio/", priority: 0.8 },
  { path: "/resources/", priority: 0.7 },
  { path: "/careers/", priority: 0.6 },
  { path: "/contact/", priority: 0.9 },
  { path: "/quote/", priority: 0.9 },
  { path: "/thank-you/", priority: 0.4 },
  { path: "/privacy/", priority: 0.3 },
  { path: "/terms/", priority: 0.3 },
  { path: "/cookies/", priority: 0.3 },
  { path: "/llms.txt", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPages.map((page) => ({
      url: new URL(page.path, siteConfig.url).toString(),
      lastModified,
      changeFrequency: page.path === "/" ? "weekly" as const : "monthly" as const,
      priority: page.priority,
    })),
    ...serviceCategories.map((service) => ({
      url: new URL(service.href, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
