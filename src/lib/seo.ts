import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
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

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/Kryptonix logo.png",
}: PageMetadataOptions): Metadata {
  const canonicalPath = normalizePagePath(path);
  const url = absoluteUrl(canonicalPath);

  const socialImage = {
    url: image,
    width: 1001,
    height: 249,
    alt: `${title} - ${siteConfig.name}`,
  };

  return {
    title,
    description,

    keywords: keywords.length ? keywords : undefined,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: "website",
      locale: "en_KE",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [socialImage],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
  const genericSocialLinks = [
    "https://www.linkedin.com",
    "https://x.com",
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.youtube.com",
  ];

  const sameAs = siteConfig.socialLinks
    .map((link) => link.href)
    .filter((href) => !genericSocialLinks.includes(href));

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

    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
      streetAddress: siteConfig.address.full,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Nairobi",
      },
      {
        "@type": "Country",
        name: "Kenya",
      },
    ],

    ...(sameAs.length ? { sameAs } : {}),

    knowsAbout: [
      "Software development",
      "Website development",
      "E-commerce platforms",
      "Business systems",
      "Cloud services",
      "Cybersecurity",
      "IT infrastructure",
      "Managed IT support",
      "Digital transformation",
      "Business automation",
      "AI integration",
      "ERP systems",
      "POS systems",
      "Inventory management systems",
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