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

function normalizePagePath(path: string) {
  if (path === "/" || path.endsWith("/") || /\.[a-z0-9]+$/i.test(path)) {
    return path;
  }

  return `${path}/`;
}

export function pageMetadata({ title, description, path, keywords = [] }: PageMetadataOptions): Metadata {
  const canonicalPath = normalizePagePath(path);
  const url = absoluteUrl(canonicalPath);
  const socialImage = {
    url: "/Kryptonix logo.png",
    width: 1001,
    height: 249,
    alt: "Kryptonix Technologies",
  };

  return {
    title,
    description,
    keywords: [
      "Kryptonix Technologies",
      "IT solutions Kenya",
      "software development Kenya",
      "cloud services",
      "cybersecurity",
      "managed IT support",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [socialImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function organizationJsonLd() {
  const sameAs = siteConfig.socialLinks
    .map((link) => link.href)
    .filter((href) => !["https://www.linkedin.com", "https://x.com", "https://www.facebook.com", "https://www.instagram.com", "https://www.youtube.com"].includes(href));

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl("/Kryptonix logo.png"),
    image: absoluteUrl("/Kryptonix logo.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    priceRange: "$$",
    areaServed: ["Kenya", "East Africa", "Africa", "Global"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: ["KE", "EA", "Africa"],
        availableLanguage: ["English", "Swahili"],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout: [
      "Software development",
      "Website development",
      "Cloud services",
      "Cybersecurity",
      "IT infrastructure",
      "Managed IT support",
      "Digital transformation",
      "Data analytics",
      "Business automation",
      "AI integration",
      "ERP systems",
      "E-commerce platforms",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/Kryptonix logo.png"),
    },
    inLanguage: "en-KE",
  };
}
