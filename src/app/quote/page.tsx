import { QuoteWizard } from "@/components/forms/quote-wizard";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { pageMetadata } from "@/lib/seo";
import { Mail, Phone } from "lucide-react";

export const metadata = pageMetadata({
  title: "Get a Quote",
  description:
    "Request a free quote or consultation from Kryptonix Technologies for website development, custom software, ERP systems, cloud migration, cybersecurity, automation, AI integration, or IT support.",
  path: "/quote",
  keywords: [
    "Kryptonix quote",
    "request IT quote",
    "software development quote Kenya",
    "website development quote Kenya",
  ],
});

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology Solutions for Growing Businesses"
        description="Select the services you need, describe your project, and shape an initial brief for the Kryptonix team."
      />
      
      <Section className="py-8 sm:py-12">
        <Container>
          {/* 2-Column Split Grid matching Contact Page */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Interactive Quote Wizard */}
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
              <QuoteWizard />
            </div>

            {/* Right Column: Contact Side Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500 mb-4">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">sales@kryptonixtechnologies.com</p>
              </div>

              {/* Phone Card */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500 mb-4">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+254 799 425 417</p>
              </div>

              {/* Location & Hours Card */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-base mb-3">Location & Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Location:</strong> Nairobi, Kenya</p>
                  <p><strong className="text-foreground">Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM EAT</p>
                  <p><strong className="text-foreground">SLA:</strong> We respond within 1 business day.</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </main>
  );
}