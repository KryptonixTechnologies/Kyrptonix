import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteUtilities } from "@/components/layout/site-utilities";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/config/site";
import { jsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./theme.css";
import "./globals.css";

const googleAnalyticsId = "G-KHP0N6DBY1";

export const metadata: Metadata = {
  title: {
    default: "Kryptonix Technologies | Software, Websites, Cloud & Automation in Kenya",
    template: "%s | Kryptonix Technologies",
  },
  description:
    "Kryptonix Technologies builds custom websites, business systems, automation tools, cloud infrastructure, cybersecurity solutions, and digital products for startups, SMEs, enterprises, NGOs, and public sector teams in Kenya and East Africa.",
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "295x317", type: "image/png" }],
    apple: [{ url: "/favicon.png", sizes: "295x317", type: "image/png" }],
  },
  keywords: [
    "Kryptonix Technologies",
    "IT solutions Kenya",
    "software development Kenya",
    "cloud services",
    "cybersecurity",
    "managed IT support",
    "digital transformation",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Kryptonix Technologies | Software, Websites, Cloud & Automation in Kenya",
    description:
      "Custom websites, business systems, automation tools, cloud infrastructure, cybersecurity, and digital products engineered for business growth.",
    images: [
      {
        url: "/Kryptonix logo.png",
        width: 1001,
        height: 249,
        alt: "Kryptonix Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kryptonix Technologies | Software, Websites, Cloud & Automation in Kenya",
    description:
      "Custom websites, business systems, automation tools, cloud infrastructure, cybersecurity, and digital products engineered for business growth.",
    images: ["/Kryptonix logo.png"],
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
  verification: {
    google: ["j7AB3AXs71xxkhdiGeJ3azOw9u1VouHmN9b4_nrAv2I", "nhtIGL18QUzXE-RTvyjUsNv5U_iWLmILEMxzn7ikkcE"],
  },
};

export const viewport: Viewport = {
  themeColor: "#081F5C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <a
          href="#site-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="site-content">{children}</div>
        <SiteFooter />
        <SiteUtilities />
        <ScrollReveal />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={jsonLd(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={jsonLd(websiteJsonLd())}
        />
      </body>
    </html>
  );
}
