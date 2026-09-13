import type { Metadata } from "next";
import {
  CheckCircle2,
  HelpCircle,
  Lock,
  RefreshCw,
  Smartphone,
  Zap,
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
  title: "M-Pesa Integration Services in Kenya | Daraja API Solutions",
  description:
    "Professional M-Pesa API integration services in Kenya for websites, e-commerce stores, ERPs, POS systems, and mobile apps. Daraja STK Push, C2B, B2C, and automated reconciliation.",
  path: "/services/mpesa-integration-services/",
});

const mpesaFeatures = [
  {
    title: "Daraja STK Push (Lipa Na M-Pesa Express)",
    description:
      "Triggers an automatic mobile PIN prompt on the customer's phone during checkout, eliminating manual Till/Paybill number typing errors.",
  },
  {
    title: "C2B (Customer to Business) Callbacks",
    description:
      "Real-time payment notification callbacks into your website, ERP, or POS database whenever a customer pays via your Paybill or Till Number.",
  },
  {
    title: "B2C (Business to Customer) Disbursements",
    description:
      "Automate mass payouts, supplier payments, refund disbursements, and commission transfers directly from your business software to recipient M-Pesa accounts.",
  },
  {
    title: "Automated Ledger Reconciliation",
    description:
      "Match M-Pesa confirmation receipts with sales invoices in real time, preventing manual bookkeeping mismatches and fake transaction SMS fraud.",
  },
];

const integrationUseCases = [
  "E-Commerce & Online Stores (Shopify, WooCommerce, Custom React/Next.js platforms)",
  "POS & Retail Inventory Systems for supermarket tills and service counters",
  "Water Utility & Meter Billing Systems (monthly bill collection and automated receipting)",
  "School & Institution Fee Portals with student admission number matching",
  "Service Booking & Reservation Platforms (hotels, tours, clinics, beauty salons)",
  "Custom ERP & SaaS Platforms requiring automated payment status updates",
];

const faqs = [
  {
    q: "What is required to integrate M-Pesa payments into my website or software?",
    a: "You need a registered Safaricom Lipa Na M-Pesa Paybill or Till Number, Daraja API Developer credentials (Consumer Key, Consumer Secret, Passkey), and a secure server with HTTPS enabled to receive callback notifications.",
  },
  {
    q: "What is the difference between Paybill and Till Number for web integration?",
    a: "A Paybill number allows customers to attach an account number (such as an Invoice ID or Admission Number), which is ideal for utility billing, ERPs, and fee collection. A Till Number (Buy Goods) is standard for instant retail point-of-sale payments.",
  },
  {
    q: "How does STK Push reduce payment abandonment?",
    a: "With STK Push, the customer does not need to exit the website app, navigate to their SIM toolkit, or type in a business number manually. The payment prompt appears directly on their phone screen, requiring only their secret M-Pesa PIN.",
  },
  {
    q: "Can Kryptonix help setup Daraja API credentials if we are not tech-savvy?",
    a: "Yes. Kryptonix Technologies guides business owners through the entire Safaricom Daraja portal onboarding, sandbox testing, production key generation, and live deployment.",
  },
];

export default function MpesaIntegrationPage() {
  return (
    <main>
      <PageHero
        eyebrow="M-Pesa API Engineering"
        title="M-Pesa Integration Services in Kenya"
        description="Connect your website, e-commerce platform, ERP, or retail POS system to Safaricom's Daraja M-Pesa API for automated, real-time payment collection."
      />

      {/* OVERVIEW SECTION */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                Automated Mobile Money Processing
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Eliminate Manual M-Pesa Verification & Speed Up Cash Flow
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Manually verifying M-Pesa SMS messages or asking customers to type confirmation codes slows down sales and exposes your business to fake payment receipt fraud.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Kryptonix Technologies builds secure, production-tested M-Pesa API integrations using Safaricom&apos;s official Daraja platform. Our integrations automatically confirm payments in milliseconds, update database ledgers, and trigger instant customer receipts.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/quote/" showArrow>
                  Request M-Pesa Integration Quote
                </Button>
                <Button href="/contact/" variant="secondary">
                  Book Technical Consultation
                </Button>
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white">Why Integrate M-Pesa with Kryptonix?</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 shrink-0 text-kryptonix-green" />
                  <div>
                    <h4 className="font-semibold text-white">Instant Payment Callbacks</h4>
                    <p className="text-sm text-slate-400">Order statuses update automatically without human intervention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lock className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Protection Against Fraud</h4>
                    <p className="text-sm text-slate-400">Server-to-server digital verification prevents spoofed SMS receipts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <RefreshCw className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Full Accounting Reconciliation</h4>
                    <p className="text-sm text-slate-400">Sync payment records with your accounting, ERP, or POS inventory software.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* MPESA API CAPABILITIES */}
      <Section className="bg-white/[0.02]">
        <Container>
          <SectionHeading
            eyebrow="Daraja Capabilities"
            title="M-Pesa API Features We Implement"
            description="End-to-end integration options tailored to your business operational workflow."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mpesaFeatures.map((feat, idx) => (
              <GlassCard key={idx} className="p-6">
                <Smartphone className="h-7 w-7 text-kryptonix-green" />
                <h3 className="mt-4 text-lg font-bold text-white">{feat.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{feat.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* USE CASES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Supported Platforms"
            title="Where We Integrate M-Pesa Payments"
            description="We connect Safaricom M-Pesa into diverse business software architectures across Kenya."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrationUseCases.map((useCase, idx) => (
              <GlassCard key={idx} className="p-5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-kryptonix-cyan shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-200">{useCase}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQS */}
      <Section className="bg-white/[0.02]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Integration FAQs"
              title="Frequently Asked Questions About M-Pesa Integration"
              description="Clear answers regarding technical setup, Safaricom requirements, and pricing."
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

      {/* CTA */}
      <Section>
        <Container>
          <GlassCard className="p-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Automate Your M-Pesa Payments Today</h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-slate-300">
              Speak with our Nairobi software engineering team to integrate M-Pesa STK Push or C2B callbacks into your business system.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote/" showArrow>
                Get Integration Quote
              </Button>
              <Button href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Kryptonix, I want to integrate M-Pesa payments into my website/software.")}`} target="_blank" variant="secondary">
                Chat on WhatsApp
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
