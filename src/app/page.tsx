import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GlowBadge } from "@/components/ui/glow-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroBackgroundVideo } from "@/components/visuals/hero-background-video";
import {
  blogPosts,
  differentiators,
  featuredProjects,
  partners,
  stats,
  testimonials,
} from "@/data/home";
import { serviceCategories } from "@/data/services";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Section className="relative flex min-h-[24rem] items-center py-8 text-center sm:min-h-[28rem] sm:py-10 lg:min-h-[32rem]">
        <div className="pointer-events-none absolute inset-x-0 top-[7.25rem] h-[20rem] overflow-hidden sm:inset-0 sm:h-full">
          <HeroBackgroundVideo className="opacity-64 sm:opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,9,0.28),rgba(13,17,23,0.54)_42%,rgba(1,4,9,0.9))]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(137,87,229,0.36),transparent_34rem),radial-gradient(circle_at_20%_42%,rgba(47,129,247,0.24),transparent_28rem)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-[linear-gradient(180deg,transparent,rgba(1,4,9,0.88)_52%,rgba(1,4,9,0.98))] sm:hidden" />
        <div className="ambient-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kyptonix-purple/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,rgba(137,87,229,0.28),transparent)]" />

        <Container className="relative z-10 flex flex-col items-center">
          <Reveal>
            <GlowBadge>IT solutions, software development, cloud, and security</GlowBadge>
          </Reveal>

          <Reveal transition={{ delay: 0.08 }}>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              The technology partner that <span className="gradient-text">powers your growth.</span>
            </h1>
          </Reveal>

          <Reveal transition={{ delay: 0.16 }}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Kyptonix Technologies helps startups, SMEs, enterprises, NGOs, and public sector
              teams build reliable digital systems, secure infrastructure, and smarter operations.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center gap-3 sm:flex-row" transition={{ delay: 0.24 }}>
            <Button href="/services" showArrow>
              Explore Services
            </Button>
            <Button href="/quote" variant="secondary">
              Get a Free Quote
            </Button>
          </Reveal>

          <Reveal className="mt-16 w-full max-w-5xl" transition={{ delay: 0.32 }}>
            <GlassCard className="overflow-hidden p-4 text-left sm:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-md border border-white/10 bg-ink-950/80 p-4">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-500">kyptonix-growth-stack.ts</span>
                  </div>
                  <pre className="overflow-x-auto text-xs leading-6 text-slate-300 sm:text-sm">
                    <code>{`const growthStack = [
  "Custom software",
  "Cloud infrastructure",
  "Cybersecurity",
  "Managed IT support",
  "Data and automation"
];

deploy({
  partner: "Kyptonix Technologies",
  outcome: "secure, scalable growth"
});`}</code>
                  </pre>
                </div>

                <div className="grid gap-3">
                  {[
                    { icon: Cpu, label: "Software delivery", meta: "Web, mobile, APIs, SaaS" },
                    { icon: DatabaseZap, label: "Cloud operations", meta: "Migration, backup, hosting" },
                    { icon: LockKeyhole, label: "Security posture", meta: "Audits, endpoints, compliance" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-start gap-3">
                          <Icon className="mt-1 h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="mt-1 text-sm text-slate-400">{item.meta}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4" transition={{ delay: 0.4 }}>
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="relative overflow-hidden border-t border-white/10 bg-ink-950/45">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_center,rgba(47,129,247,0.14),transparent_58%)]" />
        <Container className="relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="End-to-end technology solutions."
              description="Every visitor should find a relevant solution quickly. This homepage snapshot introduces the main catalogue, with dedicated pages coming next."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.href} transition={{ delay: Math.min(index * 0.03, 0.24) }}>
                  <a href={service.href} className="block h-full">
                    <GlassCard className="group h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]">
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
                        <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                    </GlassCard>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="relative border-t border-white/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Why Kyptonix"
                title="Built for teams that need technology to actually move the business."
                description="The PRD is clear: credibility, breadth, lead generation, and self-service clarity matter. This section turns that into a direct value story."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/about" variant="secondary" showArrow>
                  About Kyptonix
                </Button>
                <Button href="/contact" variant="ghost">
                  Talk to an Expert
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal key={item.title} transition={{ delay: index * 0.06 }}>
                  <GlassCard className="h-full p-5">
                    <CheckCircle2 className="h-5 w-5 text-kyptonix-green" aria-hidden="true" />
                    <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title="Project stories taking shape."
              description="A first set of project cards is in place, ready for approved client work, measurable outcomes, and detailed case studies."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.name} transition={{ delay: index * 0.08 }}>
                <GlassCard className="h-full overflow-hidden">
                  <div className="h-36 border-b border-white/10 bg-[linear-gradient(135deg,rgba(47,129,247,0.28),rgba(137,87,229,0.24)_45%,rgba(57,197,207,0.12))]" />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">
                      {project.category}
                    </p>
                    <h3 className="mt-4 text-lg font-semibold text-white">{project.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{project.client}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{project.outcome}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden border-t border-white/10">
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Trust"
                title="Security and reliability are not add-ons."
                description="From support contracts to cloud hosting and cybersecurity audits, the site needs to keep trust visible across the journey."
              />
            </Reveal>

            <Reveal>
              <GlassCard className="p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, label: "Security-first delivery" },
                    { icon: GitBranch, label: "Scalable implementation" },
                    { icon: MessageSquareText, label: "Clear client communication" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                        <Icon className="h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                        <p className="mt-4 text-sm font-semibold leading-6 text-white">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 rounded-md border border-white/10 bg-ink-950/70 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Sparkles className="h-4 w-4 text-kyptonix-purple" aria-hidden="true" />
                    V1 is built as a fast, polished public website. CRM, analytics, chat, and email integrations are ready to be layered in when needed.
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-ink-950/55">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Social Proof"
              title="Client proof area."
              description="This area is prepared for approved testimonials, client logos, and partner signals as the brand story grows."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} transition={{ delay: index * 0.08 }}>
                <GlassCard className="h-full p-5">
                  <p className="text-base leading-7 text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-semibold text-slate-300"
              >
                {partner}
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Insights"
                title="Insights and resources."
                description="The publishing structure is ready for articles, guides, whitepapers, and case study summaries."
              />
            </Reveal>
            <Reveal>
              <Button href="/resources" variant="secondary" showArrow>
                View Resources
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} transition={{ delay: index * 0.08 }}>
                <GlassCard className="h-full p-5">
                  <p className="text-sm text-kyptonix-cyan">{post.date}</p>
                  <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(22,27,34,0.78),rgba(1,4,9,0.98))]">
        <Container className="relative z-10">
          <Reveal>
            <GlassCard className="relative overflow-hidden p-8 text-center sm:p-12">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kyptonix-cyan to-transparent" />
              <SectionHeading
                title="Ready to transform your business?"
                description="Tell us what you need, and we will shape the right technology path for your team."
                align="center"
              />
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/quote" showArrow>
                  Get a Free Quote
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Kyptonix
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
