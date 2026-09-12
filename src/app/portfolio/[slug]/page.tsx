import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Quote,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { portfolioProjects } from "@/data/portfolio";

type PortfolioCaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects
    .filter((project) => project.approvedForPublicUse)
    .map((project) => ({
      slug: project.slug,
    }));
}

function getProject(slug: string) {
  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  if (!project || !project.approvedForPublicUse) {
    return null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: PortfolioCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Kryptonix Technologies`,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      project.industry,
      project.location,
      ...project.technologies,
    ],
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: PortfolioCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.description}
      />

      <Section>
        <Container>
          <div className="mb-8">
            <Link
              href="/portfolio/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Portfolio
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <GlassCard className="overflow-hidden">
              {project.image ? (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}

              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                  Case Study
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-white">
                Project Overview
              </h2>

              <div className="mt-6 space-y-5">
                {project.client ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Client
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      {project.client}
                    </p>
                  </div>
                ) : null}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Industry
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    {project.industry}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-kryptonix-cyan"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3
                    className="mt-0.5 h-4 w-4 shrink-0 text-kryptonix-cyan"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Project Duration
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      {project.duration}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                01
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Business Problem
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The specific business problem and requirements for this
                project have not yet been formally documented for public
                publication.
              </p>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Kryptonix does not publish assumptions about a client&apos;s
                internal business challenges without verified project
                documentation or client approval.
              </p>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                02
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Approach
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The project was delivered using the technologies and services
                documented below. A detailed public implementation narrative
                will be added when the relevant project documentation has been
                verified.
              </p>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                03
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Solution Delivered
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Kryptonix delivered the digital solution represented by this
                project. The available project record identifies the
                technologies, services, duration, and public project details
                shown on this page.
              </p>

              <div className="mt-5 space-y-3">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-kryptonix-green"
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                04
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Evidence & Results
              </h2>

              <div className="mt-4">
                <p className="text-sm leading-7 text-slate-400">
                  {project.evidence.details}
                </p>

                <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                  <strong className="text-white">
                    Measurable website results:
                  </strong>{" "}
                  Verified website performance metrics are not yet available
                  for public publication.
                </p>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                Technology
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Technologies Used
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Quote
                  className="h-5 w-5 text-kryptonix-cyan"
                  aria-hidden="true"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                  Client Feedback
                </p>
              </div>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Client Testimonial
              </h2>

              {project.testimonial.quote ? (
                <blockquote className="mt-5 text-sm leading-7 text-slate-300">
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>
              ) : (
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Client testimonial pending approval and publication.
                </p>
              )}

              {project.testimonial.author ? (
                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">
                    {project.testimonial.author}
                  </p>

                  {project.testimonial.jobTitle ? (
                    <p className="mt-1 text-xs text-slate-500">
                      {project.testimonial.jobTitle}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-[var(--off-white)]">
        <Container>
          <GlassCard className="p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Need a similar digital solution?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Talk to Kryptonix Technologies about your website, e-commerce
              platform, business system, automation, cloud, or digital
              transformation requirements.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact/" showArrow>
                Discuss Your Project
                <ArrowUpRight
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Button>

              <Button href="/portfolio/" variant="secondary">
                View More Projects
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}