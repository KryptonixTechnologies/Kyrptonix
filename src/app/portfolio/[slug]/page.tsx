import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { portfolioProjects } from "@/data/portfolio";

// Enforce strict static export routing for Next.js
export const dynamicParams = false;

type PortfolioPageProps = {
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

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) =>
      item.slug === slug && item.approvedForPublicUse,
  );

  if (!project) {
    return {
      title: "Case Study | Kryptonix Technologies",
      description:
        "Selected project case study from Kryptonix Technologies.",
    };
  }

  return {
    title: `${project.title} | Kryptonix Technologies`,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Kryptonix Technologies`,
      description: project.description,
      type: "website",
    },
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) =>
      item.slug === slug && item.approvedForPublicUse,
  );

  if (!project) {
    notFound();
  }

  const hasTestimonial =
    Boolean(project.testimonial.quote) &&
    Boolean(project.testimonial.author);

  const hasEvidence =
    project.evidence.screenshots.length > 0;

  return (
    <main>
      {/* Hero */}
      <Section className="pt-24 pb-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/portfolio/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="mr-2 h-4 w-4"
                aria-hidden="true"
              />
              Back to Portfolio
            </Link>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {project.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {project.description}
              </p>

              {/* Live Website Button */}
              {project.liveUrl ? (
                <div className="mt-7">
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Website
                    <ExternalLink
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              ) : null}
            </div>

            {project.image ? (
              <div className="mt-10 overflow-hidden rounded-2xl border">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* Project Information */}
      <Section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard className="p-6">
              <p className="text-sm text-muted-foreground">
                Client
              </p>

              <p className="mt-2 font-semibold">
                {project.client}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm text-muted-foreground">
                Industry
              </p>

              <p className="mt-2 font-semibold">
                {project.industry}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm text-muted-foreground">
                Location
              </p>

              <p className="mt-2 font-semibold">
                {project.location}
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              01
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              The Problem
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {project.problem}
            </p>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              02
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Our Approach
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {project.approach}
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              03
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              The Solution
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {project.solution}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.services.map((service) => (
                <GlassCard
                  key={service}
                  className="flex items-start gap-3 p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="font-medium">
                    {service}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold">
              Project Details
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <GlassCard className="p-6">
                <p className="text-sm text-muted-foreground">
                  Project duration
                </p>

                <p className="mt-2 text-lg font-semibold">
                  {project.duration}
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <p className="text-sm text-muted-foreground">
                  Technologies
                </p>

                {project.technologies.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border px-3 py-1 text-sm"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                ) : (
                  <p className="mt-2 text-muted-foreground">
                    Technology details to be confirmed.
                  </p>
                )}
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Evidence */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              04
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Evidence
            </h2>

            <GlassCard className="mt-6 p-6">
              <p className="font-semibold">
                {project.evidence.status}
              </p>

              <p className="mt-3 leading-7 text-muted-foreground">
                {project.evidence.details}
              </p>
            </GlassCard>

            {hasEvidence ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {project.evidence.screenshots.map(
                  (screenshot: string) => (
                    <img
                      key={screenshot}
                      src={screenshot}
                      alt={`${project.title} project evidence`}
                      className="rounded-xl border"
                    />
                  ),
                )}
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Additional screenshots or project photographs
                will be added when approved for publication.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* Client Quote */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              05
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Client Feedback
            </h2>

            {hasTestimonial ? (
              <GlassCard className="mt-6 p-8">
                <blockquote className="text-lg leading-8">
                  “{project.testimonial.quote}”
                </blockquote>

                <div className="mt-6">
                  <p className="font-semibold">
                    {project.testimonial.author}
                  </p>

                  {project.testimonial.jobTitle ? (
                    <p className="text-sm text-muted-foreground">
                      {project.testimonial.jobTitle}
                    </p>
                  ) : null}
                </div>
              </GlassCard>
            ) : (
              <GlassCard className="mt-6 p-6">
                <p className="font-semibold">
                  Client testimonial pending approval
                </p>

                <p className="mt-3 text-muted-foreground">
                  An approved client testimonial will be added
                  when permission is received.
                </p>
              </GlassCard>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <GlassCard className="p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold">
              Have a similar project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us what your business needs and we can discuss
              the right digital solution for your goals.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact/">
                Discuss Your Project
                <ArrowRight
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href="/portfolio/"
                variant="secondary"
              >
                View More Projects
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}