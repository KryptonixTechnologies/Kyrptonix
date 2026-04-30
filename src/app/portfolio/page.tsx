import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { featuredProjects } from "@/data/home";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore placeholder Kyptonix Technologies portfolio entries and future case study structure.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Project gallery structure is ready."
        description="This page will become the filterable portfolio and case study hub. Current entries are placeholders until real approved projects are provided."
      />
      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <GlassCard key={project.name} className="overflow-hidden">
                <div className="h-40 border-b border-white/10 bg-[linear-gradient(135deg,rgba(47,129,247,0.28),rgba(137,87,229,0.24)_45%,rgba(57,197,207,0.12))]" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">{project.category}</p>
                  <h2 className="mt-4 text-lg font-semibold text-white">{project.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{project.client}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{project.outcome}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
