import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Kyptonix Technologies cookie policy placeholder.",
};

export default function CookiesPage() {
  return <LegalPage title="Cookie Policy" description="Cookie consent and analytics tracking policy placeholder." />;
}
