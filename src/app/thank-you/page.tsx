import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thank You | Request Received",
  description:
    "Thank you for contacting Kryptonix Technologies. We have received your request and will respond within one business day.",
  path: "/thank-you/",
});

export default function ThankYouPage() {
  return (
    <main>
      <PageHero
        eyebrow="Inquiry Received"
        title="Thank You for Contacting Kryptonix"
        description="Your message or quote request has been delivered to our team in Nairobi, Kenya."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <GlassCard className="p-8 text-center sm:p-10">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-kryptonix-green/40 bg-kryptonix-green/15 text-kryptonix-green">
                <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                What Happens Next?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Our team reviews project requirements carefully to ensure we provide an accurate solution proposal and timeline.
              </p>

              <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-kryptonix-cyan" aria-hidden="true" />
                    <h3 className="font-semibold text-white">Response Time</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    We respond to all verified inquiries within <strong>1 business day</strong> (Monday to Friday, 8:00 AM – 5:00 PM EAT).
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-kryptonix-green" aria-hidden="true" />
                    <h3 className="font-semibold text-white">Instant Consultation</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Need immediate assistance? Connect with our technical team directly via WhatsApp for quick answers.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Hello Kryptonix Technologies, I just submitted an inquiry on your website and would like to follow up."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>

                <Button href="/portfolio/" variant="secondary">
                  Explore Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-kryptonix-cyan" />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-kryptonix-cyan" />
                  <span>{siteConfig.phone}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
