import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Kyptonix Technologies for sales, support, partnerships, careers, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you need to build, secure, or improve."
        description="Use the frontend-only contact form for now. Later we will connect it to email, CRM notifications, CAPTCHA, and analytics events."
      />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <div className="grid gap-4">
              <GlassCard className="p-5">
                <Mail className="h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Email</p>
                <a className="mt-1 block text-sm text-slate-400 hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </GlassCard>
              <GlassCard className="p-5">
                <Phone className="h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Phone</p>
                <a className="mt-1 block text-sm text-slate-400 hover:text-white" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </GlassCard>
              <GlassCard className="p-5">
                <MapPin className="h-5 w-5 text-kyptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Office</p>
                <p className="mt-1 text-sm text-slate-400">Kenya address and map embed placeholder.</p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
