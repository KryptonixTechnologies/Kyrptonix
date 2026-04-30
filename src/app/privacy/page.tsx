import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kyptonix Technologies privacy policy placeholder.",
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" description="KDPA 2019 and GDPR-aligned privacy content placeholder." />;
}
