import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  HelpCircle,
  Layers3,
  Target,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import {
  serviceCategories,
  serviceFaqs,
  serviceProcess,
} from "@/data/services";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = serviceCategories.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const isWebDigital =
    service.slug === "web-digital-solutions";

  return pageMetadata({
    title: isWebDigital
      ? "Website Development & E-commerce Solutions in Kenya"
      : `${service.title} Services in Kenya`,

    description: isWebDigital
      ? "Professional website development, e-commerce websites, UI/UX design, and SEO solutions for businesses in Kenya. Build a modern online presence that attracts customers and generates leads."
      : `${service.description} Kryptonix Technologies provides practical ${service.title.toLowerCase()} solutions for businesses and organisations in Kenya.`,

    path: service.href,

    keywords: isWebDigital
      ? [
          "website development Kenya",
          "website design Kenya",
          "web design company Kenya",
          "website developers in Kenya",
          "e-commerce website development Kenya",
          "SEO services Kenya",
          "business website design Kenya",
        ]
      : [
          service.title,
          `${service.title} Kenya`,
          ...service.offerings,
        ],
  });
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = serviceCategories.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Services`,
    serviceType: service.title,
    category: service.category,
    description: service.summary,
    url: absoluteUrl(service.href),

    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
    },

    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },

    audience: service.audiences.map((audience) => ({
      "@type": "Audience",
      audienceType: audience,
    })),

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: service.offerings.map(
        (offering, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: offering,
            description: `${offering} delivered as part of Kryptonix ${service.title.toLowerCase()} services.`,
          },
        })
      ),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services/"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: absoluteUrl(service.href),
      },
    ],
  };

  return (
    <main>
      {/* Service structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={jsonLd(serviceJsonLd)}
      />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={jsonLd(faqJsonLd)}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbJsonLd
        )}
      />

      {/* Page Hero */}
      <PageHero
        eyebrow={`${service.category} Service`}
        title={
          service.slug === "web-digital-solutions"
            ? "Website Development & E-commerce Solutions in Kenya"
            : service.title
        }
        description={
          service.slug === "web-digital-solutions"
            ? "Professional website development, e-commerce websites, UI/UX design, and SEO solutions for businesses in Kenya."
            : service.description
        }
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-6">
              <Icon
                className="h-8 w-8 text-kryptonix-cyan"
                aria-hidden="true"
              />

              <SectionHeading
                className="mt-6"
                eyebrow={
                  service.slug === "web-digital-solutions"
                    ? "Website & Digital Solutions"
                    : "Overview"
                }
                title={
                  service.slug === "web-digital-solutions"
                    ? "Websites designed to help your business grow."
                    : "What this service covers."
                }
                description={service.summary}
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
                <GlassCard
                  key={offering}
                  className="p-5"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-kryptonix-green"
                    aria-hidden="true"
                  />

                  <p className="mt-4 text-sm font-semibold text-white">
                    {offering}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* SEO / GEO supporting content */}
          {service.slug === "web-digital-solutions" && (
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">
                Website development for businesses in Kenya
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                Kryptonix Technologies develops responsive
                business websites and e-commerce platforms for
                organisations in Kenya. Our web and digital
                solutions can include website design,
                e-commerce functionality, UI/UX design, search
                engine optimization, analytics, and digital
                marketing support, depending on the project
                requirements.
              </p>
            </div>
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6">
              <Layers3
                className="h-5 w-5 text-kryptonix-cyan"
                aria-hidden="true"
              />

              <h2 className="mt-4 text-lg font-semibold text-white">
                How we work
              </h2>

              <div className="mt-4 grid gap-3">
                {serviceProcess.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 text-sm text-slate-400"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-white">
                      {index + 1}
                    </span>

                    <span className="pt-0.5">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <Target
                className="h-5 w-5 text-kryptonix-cyan"
                aria-hidden="true"
              />

              <h2 className="mt-4 text-lg font-semibold text-white">
                Who it is for
              </h2>

              <div className="mt-4 grid gap-3">
                {service.audiences.map((audience) => (
                  <p
                    key={audience}
                    className="rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-400"
                  >
                    {audience}
                  </p>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <TrendingUp
                className="h-5 w-5 text-kryptonix-cyan"
                aria-hidden="true"
              />

              <h2 className="mt-4 text-lg font-semibold text-white">
                Benefits and ROI
              </h2>

              <div className="mt-4 grid gap-3">
                {service.benefits.map((benefit) => (
                  <p
                    key={benefit}
                    className="rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-400"
                  >
                    {benefit}
                  </p>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold text-white">
                Tools and platforms
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                The final stack depends on project scope,
                security requirements, budget, and existing
                systems.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <HelpCircle
                  className="h-5 w-5 text-kryptonix-cyan"
                  aria-hidden="true"
                />

                <h2 className="text-lg font-semibold text-white">
                  Service FAQs
                </h2>
              </div>

              <div className="mt-5 grid gap-4">
                {serviceFaqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard className="mt-10 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
              Next step
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold text-white">
              Need help scoping{" "}
              {service.title.toLowerCase()}?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Share your goals, constraints, and timeline. We
              will help you turn the requirement into a clear
              project path.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/quote" showArrow>
                Start Quote
              </Button>

              <Button
                href="/services"
                variant="secondary"
              >
                Back to Services
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}