import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Kyptonix Technologies terms of service placeholder.",
};

export default function TermsPage() {
  return <LegalPage {...legalContent.terms} />;
}
