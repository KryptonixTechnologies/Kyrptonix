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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
