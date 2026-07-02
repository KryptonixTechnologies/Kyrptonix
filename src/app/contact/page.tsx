import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Kryptonix Technologies to discuss a website, business system, cloud project, cybersecurity need, automation idea, IT support request, partnership, or software development quote.",
  path: "/contact",
  keywords: ["contact Kryptonix", "Kryptonix support", "IT consultation Kenya", "software consultation Kenya"],
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you need to build, secure, or improve."
        description="Send a message, request direction, or start a conversation about the right technology path for your organisation."
      />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <div className="grid gap-4">
              <GlassCard className="p-5">
                <Mail className="h-5 w-5 text-kryptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Email</p>
                <a className="mt-1 block text-sm text-slate-400 hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </GlassCard>
              <GlassCard className="p-5">
                <Phone className="h-5 w-5 text-kryptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Phone</p>
                <a className="mt-1 block text-sm text-slate-400 hover:text-white" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </GlassCard>
              <GlassCard className="p-5">
                <MapPin className="h-5 w-5 text-kryptonix-cyan" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">Office</p>
                <p className="mt-1 text-sm text-slate-400">Kenya office details and map location will be published after confirmation.</p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
