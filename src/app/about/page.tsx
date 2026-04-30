import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kyptonix Technologies, our mission, vision, values, and growth story.",
};

const values = ["Reliability", "Innovation", "Affordability", "Accountability", "Security", "Partnership"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Kyptonix"
        title="A technology partner built for practical growth."
        description="Kyptonix Technologies empowers businesses, governments, and communities through technology solutions that solve real problems and support sustainable growth."
      />

      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <GlassCard className="p-6 lg:col-span-2">
              <SectionHeading
                eyebrow="Company Story"
                title="From technology needs to dependable digital systems."
                description="This section will hold the full founding story, milestones, leadership narrative, and company growth journey once the final content is provided."
              />
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">Profile</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Company profile download</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Placeholder for the downloadable Kyptonix company profile PDF.
              </p>
            </GlassCard>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white">Mission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To empower businesses, governments, and communities through cutting-edge technology solutions that solve real-world problems and drive sustainable growth.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white">Vision</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To be East Africa&apos;s most trusted technology partner, known for excellence, reliability, and innovation.
              </p>
            </GlassCard>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <GlassCard key={value} className="p-5">
                <p className="text-base font-semibold text-white">{value}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
