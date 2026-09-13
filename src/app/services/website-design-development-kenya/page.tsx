import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Design & Development in Kenya & Nairobi | Kryptonix",
  description:
    "Professional website design and development services in Kenya and Nairobi. Responsive business websites, corporate portals, mobile optimization, SEO, and WhatsApp integration.",
  path: "/services/website-design-development-kenya/",
});

const deliverables = [
  "Mobile-responsive, modern design customized for your brand",
  "Up to 10 structured pages (Home, About, Services, Portfolio, Contact, etc.)",
  "WhatsApp live chat integration & instant click-to-call buttons",
  "On-page SEO optimization & metadata configuration",
  "Google Analytics 4 & Search Console setup",
  "Domain configuration & fast cloud hosting setup",
  "Contact forms with spam honeypot protection",
  "30 days post-launch technical support and maintenance",
];

const whatsIncluded = [
  "Custom UI/UX layout design",
  "Content formatting & image optimization",
  "Mobile, tablet & desktop testing",
  "Basic search engine indexing",
  "SSL security certificate setup",
  "Staff CMS administration training",
];

const whatsNotIncluded = [
  "Third-party domain & hosting subscription fees",
  "Ongoing monthly content writing / copywriting",
  "Complex custom software backend integrations (available separately)",
  "Paid ad campaign management",
];

const faqs = [
  {
    q: "How much does a business website cost in Kenya?",
    a: "Website development costs depend on your specific scope, features, number of pages, and integrations. Contact Kryptonix Technologies for a tailored project quotation.",
  },
  {
    q: "How long does it take to develop a business website?",
    a: "Standard business websites take between 7 to 14 business days. Larger corporate portals with custom design asset creation take 14 to 21 business days after project requirements and content are finalized.",
  },
  {
    q: "Will my website work well on mobile phones and slow networks in Kenya?",
    a: "Yes. All Kryptonix websites are engineered mobile-first and optimized for fast performance on mobile data networks across Kenya.",
  },
  {
    q: "Can you assist with domain registration (.co.ke or .com) and cloud hosting?",
    a: "Yes. We configure .co.ke or .com domain registration, SSL certificates, cloud hosting, and official business emails (@yourcompany.com) as part of our setup process.",
  },
];

export default function WebsiteDesignKenyaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Web Design Kenya & Nairobi"
        title="Professional Website Design & Development in Kenya"
        description="We build fast, responsive, conversion-focused business websites that help Kenyan companies establish credibility, generate leads, and grow online."
      />

      {/* OVERVIEW & PROBLEM SOLVED */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                The Business Problem We Solve
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Turn Website Visitors Into Real Customers & Business Inquiries
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Many businesses in Kenya suffer from outdated, slow, or hard-to-navigate websites that fail to generate inquiries or rank on search engines. A weak digital presence costs you potential clients who research your business online before reaching out.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Kryptonix Technologies designs fast, modern corporate websites engineered specifically for the Kenyan market — equipped with mobile responsiveness, clear value messaging, WhatsApp integration, and local SEO structure.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/quote/" showArrow>
                  Get a Website Quote
                </Button>
                <Button href="/contact/" variant="secondary">
                  Book Free Consultation
                </Button>
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white">Why Work With Kryptonix in Nairobi?</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Mobile-First Engineering</h4>
                    <p className="text-sm text-slate-400">Over 80% of web traffic in Kenya comes from mobile phones. We optimize for speed and usability on mobile networks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageSquare className="h-6 w-6 shrink-0 text-kryptonix-green" />
                  <div>
                    <h4 className="font-semibold text-white">Instant Lead Conversion</h4>
                    <p className="text-sm text-slate-400">Direct WhatsApp CTAs, click-to-call links, and quick contact forms mean potential clients reach you faster.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Truthful & Documented Work</h4>
                    <p className="text-sm text-slate-400">No hidden fees, transparent project deliverables, and SLA-backed post-launch technical support.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* DELIVERABLES SECTION */}
      <Section className="bg-white/[0.02]">
        <Container>
          <SectionHeading
            eyebrow="What We Deliver"
            title="Complete Web Development Package Deliverables"
            description="Every website project from Kryptonix includes everything required for a professional online presence."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, idx) => (
              <GlassCard key={idx} className="p-6">
                <CheckCircle2 className="h-6 w-6 text-kryptonix-green" />
                <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{item}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-kryptonix-green" />
                What is Included
              </h3>
              <ul className="mt-4 space-y-3">
                {whatsIncluded.map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-kryptonix-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-400" />
                What is Not Included (Separate Options)
              </h3>
              <ul className="mt-4 space-y-3">
                {whatsNotIncluded.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>



      {/* FAQS SECTION */}
      <Section className="bg-white/[0.02]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Questions About Website Development in Kenya"
              description="Direct answers to common questions about our website design process and technical deliverables."
            />

            <div className="mt-12 space-y-6">
              {faqs.map((faq, idx) => (
                <GlassCard key={idx} className="p-6">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-kryptonix-cyan shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 pl-8">{faq.a}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section>
        <Container>
          <GlassCard className="p-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Build Your Website in Kenya?</h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-slate-300">
              Speak with our Nairobi web design team today. We respond to all project inquiries within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote/" showArrow>
                Get a Website Quote
              </Button>
              <Button href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Kryptonix, I am interested in a business website design project.")}`} target="_blank" variant="secondary">
                Chat on WhatsApp
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
