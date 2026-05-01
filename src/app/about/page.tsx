import type { Metadata } from "next";
import { ArrowDownToLine, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutValues, leadershipPlaceholders, milestones, recognitionItems } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kyptonix Technologies, our mission, vision, values, and growth story.",
};

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
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <GlassCard className="p-6">
              <SectionHeading
                eyebrow="Company Story"
                title="From technology needs to dependable digital systems."
                description="Kyptonix Technologies is being shaped as a practical technology partner for organisations that need more than a single tool. The company brings software development, IT infrastructure, cloud, cybersecurity, support, and digital transformation into one clear service ecosystem."
              />
              <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-400">
                <p>
                  The website reflects that ambition: every visitor should quickly understand what Kyptonix does,
                  why the team can be trusted, and how to begin a conversation about the right solution.
                </p>
                <p>
                  As real case studies, leadership bios, certifications, and client proof become available,
                  this page will evolve into the main credibility hub for procurement officers, partners,
                  investors, clients, and future employees.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <ArrowDownToLine className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">Profile</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Company profile download</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Placeholder for the official Kyptonix company profile PDF, required by the PRD for About and Contact pages.
              </p>
              <Button href="/contact" className="mt-6" variant="secondary">
                Request Profile
              </Button>
            </GlassCard>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <GlassCard className="relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kyptonix-cyan to-transparent" />
              <h2 className="text-xl font-semibold text-white">Mission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To empower businesses, governments, and communities through cutting-edge technology solutions that solve real-world problems and drive sustainable growth.
              </p>
            </GlassCard>
            <GlassCard className="relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kyptonix-purple to-transparent" />
              <h2 className="text-xl font-semibold text-white">Vision</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To be East Africa&apos;s most trusted technology partner, known for excellence, reliability, and innovation.
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="Principles behind the work."
            description="These values will guide how the brand communicates, how projects are delivered, and how clients experience Kyptonix."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => {
              const Icon = value.icon;

              return (
                <GlassCard key={value.title} className="p-5">
                  <Icon className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{value.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Milestones"
              title="A roadmap for credibility."
              description="The PRD expects company story, milestones, awards, and leadership proof. These placeholders give the page a strong structure while real facts are prepared."
            />

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <GlassCard key={milestone.title} className="p-5">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                        {milestone.year}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Leadership"
                title="Team structure placeholders."
                description="Real names, photos, titles, LinkedIn links, and bios will be added when approved."
              />
              <div className="mt-8 grid gap-4">
                {leadershipPlaceholders.map((person) => (
                  <GlassCard key={person.name} className="p-5">
                    <div className="flex gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(47,129,247,0.22),rgba(137,87,229,0.22))] text-sm font-semibold text-white">
                        KT
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{person.name}</h3>
                        <p className="mt-1 text-sm text-kyptonix-cyan">{person.role}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{person.focus}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                Recognition
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Awards, certifications, and trust signals.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                This section is reserved for approved recognitions, partner certifications, compliance proof, and media mentions.
              </p>
              <div className="mt-6 grid gap-3">
                {recognitionItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-kyptonix-green" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">Work with us</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white">
              Ready to see how Kyptonix can support your organisation?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Start with a conversation, request a quote, or ask for the company profile once the official document is ready.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/quote" showArrow>
                Get a Quote
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
