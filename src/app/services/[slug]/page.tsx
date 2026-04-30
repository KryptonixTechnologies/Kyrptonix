import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main>
      <PageHero eyebrow="Service" title={service.title} description={service.description} />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-6">
              <Icon className="h-8 w-8 text-kyptonix-cyan" aria-hidden="true" />
              <SectionHeading
                className="mt-6"
                eyebrow="Overview"
                title="What this service covers."
                description="This frontend template is ready for the full service copy, process, industries, technologies, ROI, FAQs, and related case studies."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote" showArrow>
                  Get a Quote
                </Button>
                <Button href="/contact" variant="secondary">
                  Book Consultation
                </Button>
              </div>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.offerings.map((offering) => (
                <GlassCard key={offering} className="p-5">
                  <CheckCircle2 className="h-5 w-5 text-kyptonix-green" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-white">{offering}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold text-white">How we work</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Discovery, solution design, implementation, testing, launch, and support.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold text-white">Who it is for</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                SMEs, enterprises, startups, NGOs, and public sector teams that need dependable outcomes.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold text-white">Tools and platforms</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
