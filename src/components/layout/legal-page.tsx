import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";

type LegalPageProps = {
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <GlassCard className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                Review Required
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">Content pending legal approval</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                This V1 copy is a structured placeholder. Final wording should be reviewed by legal counsel before launch.
              </p>
            </GlassCard>

            <div className="grid gap-4">
              {sections.map((section) => (
                <GlassCard key={section.heading} className="p-5">
                  <h2 className="text-lg font-semibold text-white">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{section.body}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
