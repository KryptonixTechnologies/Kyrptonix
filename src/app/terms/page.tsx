import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Read the Kyptonix Technologies terms of service for website use, service inquiries, quote requests, acceptable use, intellectual property, and legal notices.",
  path: "/terms",
  keywords: ["Kyptonix terms", "terms of service"],
});

export default function TermsPage() {
  return <LegalPage {...legalContent.terms} />;
}
