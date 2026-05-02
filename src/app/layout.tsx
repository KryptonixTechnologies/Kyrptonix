import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteUtilities } from "@/components/layout/site-utilities";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/config/site";
import { jsonLd, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kyptonix Technologies",
    template: "%s | Kyptonix Technologies",
  },
  description:
    "Kyptonix Technologies provides software development, cloud services, cybersecurity, IT infrastructure, managed support, and digital transformation solutions for organisations in Kenya, East Africa, and beyond.",
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Kyptonix Technologies",
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
    title: siteConfig.name,
    description:
      "Software development, cloud, cybersecurity, IT infrastructure, managed support, and digital transformation solutions for growing organisations.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Software development, cloud, cybersecurity, IT infrastructure, managed support, and digital transformation solutions for growing organisations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "j7AB3AXs71xxkhdiGeJ3azOw9u1VouHmN9b4_nrAv2I",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
