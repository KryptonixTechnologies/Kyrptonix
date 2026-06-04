import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Kryptonix Technologies privacy policy covering how website inquiries, quote requests, contact details, analytics, and service communications are handled.",
  path: "/privacy",
  keywords: ["Kryptonix privacy policy", "privacy policy Kenya"],
});

export default function PrivacyPage() {
  return <LegalPage {...legalContent.privacy} />;
}
