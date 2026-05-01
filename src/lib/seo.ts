import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageMetadata({ title, description, path, keywords = [] }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords: [
      "Kyptonix Technologies",
      "IT solutions Kenya",
      "software development Kenya",
      "cloud services",
      "cybersecurity",
      "managed IT support",
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url: path,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    areaServed: ["Kenya", "East Africa", "Africa", "Global"],
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    knowsAbout: [
      "Software development",
      "Cloud services",
      "Cybersecurity",
      "IT infrastructure",
      "Managed IT support",
      "Digital transformation",
      "Data analytics",
      "Business automation",
    ],
  };
}
