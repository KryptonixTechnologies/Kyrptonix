import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Kyptonix Technologies services across software, cloud, cybersecurity, IT infrastructure, support, digital transformation, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="A complete technology catalogue for modern organisations."
        description="Browse the Kyptonix service categories. Each category has its own frontend detail page ready for deeper content, FAQs, case studies, and quote CTAs."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <GlassCard className="sticky top-24 p-6">
              <SlidersHorizontal className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
              <SectionHeading
                className="mt-6"
                eyebrow="Find your fit"
                title="Start broad, then drill down."
                description="This catalogue is intentionally wide so a visitor can recognise their need quickly and move toward a relevant service page or quote request."
              />
              <div className="mt-6 grid gap-3">
                {["Build", "Operate", "Protect", "Transform", "Grow", "Launch"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <CheckCircle2 className="h-4 w-4 text-kyptonix-green" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button href="/quote" className="mt-6 w-full" showArrow>
                Request Guidance
              </Button>
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-2">
            {serviceCategories.map((service) => {
              const Icon = service.icon;

              return (
                <a key={service.href} href={service.href} className="block h-full">
                  <GlassCard className="group h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Icon className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-kyptonix-purple">
                          {service.category}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.offerings.slice(0, 3).map((offering) => (
                        <span key={offering} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                          {offering}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </a>
              );
            })}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
