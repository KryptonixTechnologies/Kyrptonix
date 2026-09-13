import { ArrowUpRight, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IT & Software Services in Kenya",
  description:
    "Explore software development, website development, e-commerce, ERP systems, cloud services, cybersecurity, IT support, business automation, and AI solutions for organisations in Kenya.",
  path: "/services",
  keywords: [
    "IT services Kenya",
    "software development Kenya",
    "website development Kenya",
    "custom software development Kenya",
    "ERP software Kenya",
    "cloud services Kenya",
    "cybersecurity services Kenya",
    "managed IT services Kenya",
    "business automation Kenya",
    "AI integration services Kenya",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Technology & Software Services in Kenya"
        description="Explore software development, website development, e-commerce, ERP systems, cloud services, cybersecurity, IT support, business automation, and AI solutions for organisations in Kenya."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <GlassCard className="sticky top-24 p-6">
              <SlidersHorizontal
                className="h-6 w-6 text-kryptonix-cyan"
                aria-hidden="true"
              />

              <SectionHeading
                className="mt-6"
                eyebrow="Find your fit"
                title="Start broad, then drill down."
                description="Choose the service category that matches your business goal, then move into a focused consultation or quote request."
              />

              <div className="mt-6 grid gap-3">
                {[
                  "Build",
                  "Operate",
                  "Protect",
                  "Transform",
                  "Grow",
                  "Launch",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-kryptonix-green"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-medium text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button href="/quote/" className="mt-6 w-full" showArrow>
                Get Service Quote
              </Button>
            </GlassCard>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Primary Core Services</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Business Website Development",
                      href: "/services/website-design-development-kenya/",
                      category: "Primary Focus",
                      description: "Corporate websites, mobile responsive design, lead generation, and local SEO for Kenyan businesses.",
                      tags: ["Corporate Sites", "Mobile Responsive", "Lead Generation"],
                    },
                    {
                      title: "E-Commerce & M-Pesa Integration",
                      href: "/services/ecommerce-website-development-kenya/",
                      category: "Primary Focus",
                      description: "Online stores with Daraja M-Pesa API, product catalogs, stock management, and automated receipts.",
                      tags: ["Online Stores", "Daraja M-Pesa API", "Stock Control"],
                    },
                    {
                      title: "Custom Business Systems (ERP/POS)",
                      href: "/services/enterprise-solutions/",
                      category: "Primary Focus",
                      description: "Custom ERPs, point-of-sale tills, inventory management, HR & payroll, and water company software.",
                      tags: ["Custom ERP", "POS Tills", "Inventory Systems"],
                    },
                    {
                      title: "Business Automation & AI",
                      href: "/services/digital-transformation/",
                      category: "Primary Focus",
                      description: "Workflow automation, real-time analytics dashboards, AI chatbots, and WhatsApp Business API sync.",
                      tags: ["Workflow Sync", "AI Chatbots", "Dashboards"],
                    },
                    {
                      title: "Cloud Hosting & Managed IT Support",
                      href: "/services/cloud-services/",
                      category: "Primary Focus",
                      description: "Managed cloud hosting, server management, backup & disaster recovery, and outsourced IT helpdesk.",
                      tags: ["Cloud Hosting", "Disaster Recovery", "IT Helpdesk"],
                    },
                  ].map((service) => (
                    <a key={service.href} href={service.href} className="block h-full">
                      <GlassCard className="group h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-kryptonix-cyan/50">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                            {service.category}
                          </p>
                          <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" aria-hidden="true" />
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-white">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">Additional Capabilities</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {serviceCategories
                    .filter(
                      (s) =>
                        ![
                          "software-development",
                          "enterprise-solutions",
                          "digital-transformation",
                          "cloud-services",
                          "web-digital-solutions",
                        ].includes(s.slug)
                    )
                    .map((service) => {
                      const Icon = service.icon;
                      return (
                        <a key={service.href} href={service.href} className="block h-full">
                          <GlassCard className="group h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <Icon className="h-5 w-5 text-slate-400" />
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                  Secondary Capability
                                </span>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-white" />
                            </div>
                            <h3 className="mt-3 text-base font-semibold text-white">{service.title}</h3>
                            <p className="mt-2 text-xs leading-5 text-slate-400">{service.description}</p>
                          </GlassCard>
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}