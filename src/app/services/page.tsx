import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service) => {
              const Icon = service.icon;

              return (
                <a key={service.href} href={service.href} className="block h-full">
                  <GlassCard className="group h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="h-6 w-6 text-kyptonix-cyan" aria-hidden="true" />
                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                  </GlassCard>
                </a>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
