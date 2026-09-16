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
    "@id": absoluteUrl("/#business"),

    name: siteConfig.name,
    alternateName: "KryptoniX",

    url: absoluteUrl("/"),

    logo: absoluteUrl("/Kryptonix logo.png"),
    image: absoluteUrl("/Kryptonix logo.png"),

    email: siteConfig.email,
    telephone: siteConfig.phone,

    priceRange: "$$",
    currenciesAccepted: "KES",
    paymentAccepted: "Cash, M-Pesa, Bank Transfer",

    description:
      "Kryptonix Technologies builds custom websites, business systems, automation tools, cloud infrastructure, cybersecurity solutions, and digital products for startups, SMEs, enterprises, NGOs, and public sector teams in Kenya and East Africa.",

    founder: {
      "@type": "Person",
      name: "Newton Manyisa",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: "Nairobi County",
      addressCountry: "KE",
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
        "@type": "Country",
        name: "Kenya",
      },
      {
        "@type": "AdministrativeArea",
        name: "East Africa",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },

    ...(sameAs.length ? { sameAs } : {}),

    knowsAbout: [
      "Custom Software Development",
      "Web Development",
      "E-commerce Solutions",
      "Mobile App Development",
      "Cloud Hosting & Deployment",
      "Cloud Migration",
      "Cybersecurity",
      "Penetration Testing",
      "Managed IT Support",
      "IT Infrastructure",
      "Network Design",
      "Server Management",
      "Backup & Disaster Recovery",
      "Digital Transformation",
      "Workflow Automation",
      "ERP Systems",
      "CRM Systems",
      "POS & Inventory Systems",
      "HR & Payroll Systems",
      "SEO & Digital Marketing",
      "UI/UX Design",
      "API Integrations",
      "Business Process Automation",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kryptonix Technologies Services",
      itemListElement: [
        "Software Development",
        "IT Infrastructure",
        "Cloud Services",
        "Cybersecurity",
        "Managed IT Support",
        "Digital Transformation",
        "Web & Digital Solutions",
        "Enterprise Solutions",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
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
