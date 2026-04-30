import type { Metadata } from "next";
import { QuoteWizard } from "@/components/forms/quote-wizard";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Start a frontend-only quote request for Kyptonix Technologies services.",
};

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell us what you want to build."
        description="This is the V1 frontend shell for the PRD quote wizard. The interactive submission workflow will be connected later."
      />
      <Section>
        <Container>
          <QuoteWizard />
        </Container>
      </Section>
    </main>
  );
}
