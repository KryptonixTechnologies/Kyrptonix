import { ArrowDownToLine } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutValues, milestones } from "@/data/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Kryptonix Technologies, a Kenya-based technology partner helping organisations build reliable software, modern websites, secure cloud infrastructure, automation, and practical digital systems.",
  path: "/about",
  keywords: [
    "Kryptonix mission",
    "Kryptonix values",
    "technology partner Kenya",
    "software company Kenya",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Kryptonix"
        title="A technology partner built for practical growth."
        description="Kryptonix Technologies empowers businesses, governments, and communities through technology solutions that solve real problems and support sustainable growth."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <GlassCard className="p-6">
              <SectionHeading
                eyebrow="Company Story"
                title="From technology needs to dependable digital systems."
                description="Kryptonix Technologies brings software development, IT infrastructure, cloud, cybersecurity, support, and digital transformation into one practical service ecosystem for organisations that need dependable technology delivery."
              />
              <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-400">
                <p>
                  Kryptonix helps visitors, founders, operators, and procurement teams quickly understand what the company does,
                  why the team can be trusted, and how to begin a conversation about the right solution.
                </p>
                <p>
                  The company focuses on clear communication, practical execution, reliable systems, and technology choices that
                  support real business goals rather than unnecessary complexity.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <ArrowDownToLine className="h-6 w-6 text-kryptonix-cyan" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">Profile</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Company profile download</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Request the latest Kryptonix company profile for procurement, partnership, vendor review, or project planning.
              </p>
              <Button href="/contact" className="mt-6" variant="secondary">
                Request Profile
              </Button>
            </GlassCard>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <GlassCard className="relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kryptonix-cyan to-transparent" />
              <h2 className="text-xl font-semibold text-white">Mission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To empower businesses, governments, and communities through cutting-edge technology solutions that solve real-world problems and drive sustainable growth.
              </p>
            </GlassCard>
            <GlassCard className="relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kryptonix-purple to-transparent" />
              <h2 className="text-xl font-semibold text-white">Vision</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                To be East Africa&apos;s most trusted technology partner, known for excellence, reliability, and innovation.
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-ink-950/10 bg-[var(--off-white)]">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="Principles behind the work."
            description="These values will guide how the brand communicates, how projects are delivered, and how clients experience Kryptonix."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => {
              const Icon = value.icon;

              return (
                <GlassCard key={value.title} className="p-5">
                  <Icon className="h-6 w-6 text-kryptonix-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{value.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-ink-950/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Milestones"
              title="Building credibility through delivery."
              description="Kryptonix is focused on growing a track record through useful projects, responsive support, practical documentation, and long-term client relationships."
            />

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <GlassCard key={milestone.title} className="p-5">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
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

      <Section className="border-t border-ink-950/10">
        <Container>
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">Work with us</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white">
              Ready to see how Kryptonix can support your organisation?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Start with a conversation, request a quote, or ask for the latest company profile for your project review.
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