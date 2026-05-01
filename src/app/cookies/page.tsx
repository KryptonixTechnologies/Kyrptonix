import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Kyptonix Technologies cookie policy placeholder.",
};

export default function CookiesPage() {
  return <LegalPage {...legalContent.cookies} />;
}
