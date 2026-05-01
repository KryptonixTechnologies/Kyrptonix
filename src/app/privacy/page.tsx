import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kyptonix Technologies privacy policy placeholder.",
};

export default function PrivacyPage() {
  return <LegalPage {...legalContent.privacy} />;
}
