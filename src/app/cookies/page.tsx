import { LegalPage } from "@/components/layout/legal-page";
import { legalContent } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Read the Kryptonix Technologies cookie policy explaining essential cookies, preference storage, analytics readiness, and visitor control options.",
  path: "/cookies",
  keywords: ["Kryptonix cookie policy", "website cookies"],
});

export default function CookiesPage() {
  return <LegalPage {...legalContent.cookies} />;
}
