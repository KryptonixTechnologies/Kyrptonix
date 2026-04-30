import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Kyptonix Technologies terms of service placeholder.",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Service" description="Website usage and service terms placeholder." />;
}
