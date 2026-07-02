import { QuoteWizard } from "@/components/forms/quote-wizard";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get a Quote",
  description:
    "Request a free quote or consultation from Kryptonix Technologies for website development, custom software, ERP systems, cloud migration, cybersecurity, automation, AI integration, or IT support.",
  path: "/quote",
  keywords: ["Kryptonix quote", "request IT quote", "software development quote Kenya", "website development quote Kenya"],
});

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell us what you want to build."
        description="Select the services you need, describe your project, and shape an initial brief for the Kryptonix team."
      />
      <Section>
        <Container>
          <QuoteWizard />
        </Container>
      </Section>
    </main>
  );
}
