import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";

type LegalPageProps = {
  title: string;
  description: string;
};

export function LegalPage({ title, description }: LegalPageProps) {
  return (
    <main>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <Section>
        <Container>
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-white">Content pending legal review</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
              This page is intentionally scaffolded as a placeholder. Final policy copy should be reviewed by legal counsel before launch.
            </p>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
