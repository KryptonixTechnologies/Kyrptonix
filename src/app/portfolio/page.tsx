import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredCaseStudy, portfolioProjects, projectFilters } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Explore Kryptonix Technologies portfolio structure for software, cloud, cybersecurity, IT infrastructure, public sector, and digital transformation project case studies.",
  path: "/portfolio",
  keywords: ["Kryptonix portfolio", "technology case studies", "software project gallery"],
});

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Project gallery structure is ready."
        description="Explore the project gallery framework for software, cloud, cybersecurity, public sector, and digital work."
      />
      <Section>
        <Container>
          <GlassCard className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-72 bg-[radial-gradient(circle_at_30%_20%,rgb(var(--color-secondary-navy)/0.35),transparent_36%),radial-gradient(circle_at_75%_70%,rgb(var(--color-gold-accent)/0.34),transparent_42%),linear-gradient(135deg,rgb(var(--color-primary-navy)/0.92),rgb(3 13 42/0.98))]" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                  Featured case study
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white">{featuredCaseStudy.name}</h2>
                <p className="mt-2 text-sm text-slate-500">
                  {featuredCaseStudy.client} · {featuredCaseStudy.region}
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    ["Problem", featuredCaseStudy.problem],
                    ["Solution", featuredCaseStudy.solution],
                    ["Result", featuredCaseStudy.result],
                  ].map(([label, text]) => (
                    <div key={label} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section className="border-t border-ink-950/10 bg-[var(--off-white)]">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Gallery"
              title="Project cards ready for approved work."
              description="Filter categories and project cards are prepared for approved case studies, measurable outcomes, and detailed pages."
            />
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <GlassCard key={project.name} className="group overflow-hidden">
                <div className="h-32 border-b border-ink-950/10 bg-[linear-gradient(135deg,rgb(var(--color-secondary-navy)/0.22),rgb(var(--color-gold-accent)/0.18)_48%,rgb(var(--color-gold-accent)/0.12))]" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">{project.service}</p>
                      <h2 className="mt-4 text-lg font-semibold text-white">{project.name}</h2>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{project.client}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[project.industry, project.region].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{project.outcome}</p>
                  <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <p className="text-xs leading-5 text-slate-400">&ldquo;{project.testimonial}&rdquo;</p>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-kryptonix-cyan">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {project.status}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-10 p-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-white">Have a project we should feature?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Once client approval is available, this section can become a real case study library with measurable outcomes.
            </p>
            <Button href="/contact" className="mt-6" variant="secondary">
              Discuss a Case Study
            </Button>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
