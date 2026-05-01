import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kyptonix Technologies",
    template: "%s | Kyptonix Technologies",
  },
  description:
    "Kyptonix Technologies builds reliable IT solutions, software products, cloud systems, cybersecurity programs, and digital platforms for modern organisations.",
  metadataBase: new URL("https://kyptonix.com"),
  applicationName: "Kyptonix Technologies",
  keywords: [
    "Kyptonix Technologies",
    "IT solutions Kenya",
    "software development Kenya",
    "cloud services",
    "cybersecurity",
    "managed IT support",
    "digital transformation",
  ],
  authors: [{ name: "Kyptonix Technologies" }],
  creator: "Kyptonix Technologies",
  publisher: "Kyptonix Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://kyptonix.com",
    siteName: "Kyptonix Technologies",
    title: "Kyptonix Technologies",
    description:
      "Reliable software, cloud, cybersecurity, IT infrastructure, and digital transformation solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyptonix Technologies",
    description:
      "Reliable software, cloud, cybersecurity, IT infrastructure, and digital transformation solutions.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kyptonix Technologies",
              url: "https://kyptonix.com",
              email: "hello@kyptonix.com",
              areaServed: ["Kenya", "East Africa", "Africa", "Global"],
              sameAs: [
                "https://www.linkedin.com",
                "https://x.com",
                "https://www.facebook.com",
                "https://www.instagram.com",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
