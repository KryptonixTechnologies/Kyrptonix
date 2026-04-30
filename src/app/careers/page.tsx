import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore future roles, internships, and culture information at Kyptonix Technologies.",
};

const jobs = ["Frontend Developer", "IT Support Technician", "Cloud Engineer", "Digital Marketing Associate"];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build meaningful technology with Kyptonix."
        description="This page is prepared for job listings, internships, culture photos, benefits, and application forms."
      />
      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {jobs.map((job) => (
              <GlassCard key={job} className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">Placeholder role</p>
                <h2 className="mt-4 text-xl font-semibold text-white">{job}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Department, location, job type, and application details will be added later.</p>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="mt-6 p-6">
            <h2 className="text-xl font-semibold text-white">General application</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Frontend-only application placeholder. Backend submission will come in a later phase.</p>
            <Button href="/contact" className="mt-5" variant="secondary">
              Contact HR
            </Button>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
