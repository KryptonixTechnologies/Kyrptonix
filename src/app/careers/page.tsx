import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { careerBenefits, careerFilters, cultureHighlights, openRoles } from "@/data/careers";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Explore Kryptonix Technologies careers, internships, future roles, culture, and opportunities to build software, cloud, cybersecurity, and IT solutions for real organisations.",
  path: "/careers",
  keywords: ["Kryptonix careers", "technology internships Kenya", "IT jobs Kenya"],
});

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build meaningful technology with Kryptonix."
        description="Explore future roles, internships, benefits, and the kind of technology work Kryptonix is building around."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <GlassCard className="sticky top-24 p-6">
              <BriefcaseBusiness className="h-6 w-6 text-kryptonix-cyan" aria-hidden="true" />
              <SectionHeading
                className="mt-6"
                eyebrow="Open Roles"
                title="A hiring structure ready for real vacancies."
                description="Current openings are presented as upcoming roles. Detailed job pages and application flows can be added as hiring begins."
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
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
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
                      <span key={skill} className="rounded-full border border-kryptonix-cyan/20 bg-kryptonix-cyan/10 px-3 py-1 text-xs text-kryptonix-cyan">
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

      <Section className="border-t border-ink-950/10 bg-[var(--off-white)]">
        <Container>
          <SectionHeading
            eyebrow="Life at Kryptonix"
            title="Built for people who like useful technology."
            description="This section frames the working environment, with culture photography and employee stories ready to follow as the team grows."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cultureHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-5">
                  <Icon className="h-6 w-6 text-kryptonix-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-ink-950/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="Reasons to build here."
                description="A benefits structure is in place for compensation, perks, policies, and role-specific details as they are approved."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {careerBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <GlassCard key={benefit.title} className="p-5">
                      <Icon className="h-5 w-5 text-kryptonix-cyan" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{benefit.description}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </div>

            <GlassCard className="p-6">
              <GraduationCap className="h-7 w-7 text-kryptonix-cyan" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                Internship Programme
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">A pathway for early talent.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                The PRD includes internships and graduate opportunities. This area is prepared for eligibility,
                tracks, duration, mentorship approach, and application windows.
              </p>
              <div className="mt-6 grid gap-3">
                {["Software and web development", "IT support and infrastructure", "Cloud and cybersecurity basics", "Digital marketing and content"].map((track) => (
                  <div key={track} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-kryptonix-green" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-300">{track}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section id="general-application" className="border-t border-ink-950/10 bg-[var(--off-white)]">
        <Container>
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">General Application</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white">
              Do not see the right role yet?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Send a general inquiry for future opportunities. A full application workflow can be connected when hiring opens.
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
