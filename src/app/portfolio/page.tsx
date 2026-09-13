
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  const publicProjects = portfolioProjects.filter(
    (project) => project.approvedForPublicUse,
  );

  return (
    <main>
      <Section className="pt-24 pb-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Selected projects and digital solutions
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Explore selected digital solutions delivered for businesses
              across different industries. Each project page presents the
              available project information, technology used, and supporting
              evidence where available.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          {publicProjects.length === 0 ? (
            <GlassCard className="mx-auto max-w-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold">
                Portfolio projects coming soon
              </h2>

              <p className="mt-3 text-muted-foreground">
                We are preparing approved project case studies with verified
                project information and supporting evidence.
              </p>

              <div className="mt-6">
                <Button href="/contact">
                  Discuss a Project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </GlassCard>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publicProjects.map((project) => (
                <GlassCard
                  key={project.slug}
                  className="flex h-full flex-col overflow-hidden"
                >
                  {project.image ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-6">
                    {project.category ? (
                      <p className="text-sm font-medium text-primary">
                        {project.category}
                      </p>
                    ) : null}

                    <h2 className="mt-2 text-xl font-semibold">
                      {project.title}
                    </h2>

                    {project.client ? (
                      <p className="mt-2 text-sm text-muted-foreground">
                        Client: {project.client}
                      </p>
                    ) : null}

                    {project.description ? (
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    ) : null}

                    <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                      <span
                        className="h-2 w-2 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>Approved for public portfolio</span>
                    </div>

                    <div className="mt-6">
                      <Button href={`/portfolio/${project.slug}/`}>
                        View Case Study
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <GlassCard className="p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us what your business needs and we can discuss the right
              website, software, e-commerce, or digital solution for your
              goals.
            </p>

            <div className="mt-7">
              <Button href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}

