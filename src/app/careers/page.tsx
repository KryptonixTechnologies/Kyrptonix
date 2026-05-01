import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { careerBenefits, careerFilters, cultureHighlights, openRoles } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore future roles, internships, and culture information at Kyptonix Technologies.",
};

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
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <GlassCard className="sticky top-24 p-6">
              <BriefcaseBusiness className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
              <SectionHeading
                className="mt-6"
                eyebrow="Open Roles"
                title="A hiring structure ready for real vacancies."
                description="These are frontend placeholders. Once roles are approved, we can add detailed job pages and connected application forms."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {careerFilters.map((filter) => (
                  <span key={filter} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300">
                    {filter}
                  </span>
                ))}
              </div>
              <Button href="#general-application" className="mt-6 w-full" showArrow>
                General Application
              </Button>
            </GlassCard>

            <div className="grid gap-4">
              {openRoles.map((job) => (
                <GlassCard key={job.title} className="group p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                        {job.department}
                      </p>
                      <h2 className="mt-4 text-xl font-semibold text-white">{job.title}</h2>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[job.location, job.type, job.posted].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{job.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-kyptonix-cyan/20 bg-kyptonix-cyan/10 px-3 py-1 text-xs text-kyptonix-cyan">
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <SectionHeading
            eyebrow="Life at Kyptonix"
            title="Built for people who like useful technology."
            description="Culture photography and real employee stories can be added later. For now, this section frames the working environment the PRD expects."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cultureHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-5">
                  <Icon className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="Reasons to build here."
                description="This is a V1 benefits structure. Compensation, perks, policies, and role-specific benefits can be added once approved."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {careerBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <GlassCard key={benefit.title} className="p-5">
                      <Icon className="h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{benefit.description}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </div>

            <GlassCard className="p-6">
              <GraduationCap className="h-7 w-7 text-kyptonix-cyan" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                Internship Programme
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">A pathway for early talent.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                The PRD includes internships and graduate opportunities. This area is reserved for eligibility,
                tracks, duration, mentorship approach, and application windows.
              </p>
              <div className="mt-6 grid gap-3">
                {["Software and web development", "IT support and infrastructure", "Cloud and cybersecurity basics", "Digital marketing and content"].map((track) => (
                  <div key={track} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-kyptonix-green" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-300">{track}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section id="general-application" className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">General Application</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white">
              Do not see the right role yet?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Send a general inquiry for future opportunities. Backend application handling will come in a later phase.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" showArrow>
                Contact HR
              </Button>
              <Button href="/resources" variant="secondary">
                Learn More
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
