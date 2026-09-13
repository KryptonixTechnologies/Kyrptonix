import type { Metadata } from "next";
import {
  CheckCircle2,
  HelpCircle,
  Lock,
  Package,
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
  title: "E-Commerce Website Development in Kenya with M-Pesa Integration",
  description:
    "Custom e-commerce website development in Kenya with Daraja M-Pesa API integration, product catalog management, shopping cart, stock control, and automated order notifications.",
  path: "/services/ecommerce-website-development-kenya/",
});

const deliverables = [
  "Daraja M-Pesa API integration (STK Push, C2B online payment prompts)",
  "Product catalog with variants (size, color, weight, pricing)",
  "Shopping cart, checkout workflow, and guest checkout options",
  "Automated SMS & email order notifications for buyers and store admins",
  "Stock control & low inventory warning dashboard",
  "Admin management dashboard for products, categories, orders, and sales reports",
  "Mobile-first responsive storefront optimized for 3G/4G networks in Kenya",
  "SSL security certificate & encrypted payment data handling",
];

const faqs = [
  {
    q: "How does M-Pesa integration work on an e-commerce website?",
    a: "When a customer reaches checkout, they enter their Safaricom phone number and click 'Pay via M-Pesa'. An STK Push notification appears directly on their mobile phone requesting their M-Pesa PIN. Once entered, the payment is confirmed instantly, updating the store order status automatically.",
  },
  {
    q: "Can I sell physical products and accept card payments as well?",
    a: "Yes. In addition to Safaricom M-Pesa, we can integrate Visa, Mastercard, and PayPal payment options for international or credit card buyers.",
  },
  {
    q: "How much does an e-commerce website cost in Kenya?",
    a: "E-commerce website development costs depend on your product catalog size, payment gateways, and custom inventory workflow requirements. Contact Kryptonix Technologies for a custom project quote.",
  },
  {
    q: "Will I be able to manage products and view sales reports myself?",
    a: "Yes. Every Kryptonix e-commerce platform includes an intuitive admin dashboard allowing your team to add new products, update prices, manage stock, view sales analytics, and export customer order records.",
  },
];

export default function EcommerceKenyaPage() {
  return (
    <main>
      <PageHero
        eyebrow="E-Commerce & M-Pesa Development"
        title="E-Commerce Website Development in Kenya with M-Pesa"
        description="Build a high-converting online shop in Kenya equipped with automated Daraja M-Pesa payments, product inventory control, and seamless mobile checkout."
      />

      {/* OVERVIEW SECTION */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                Commercial E-Commerce Engineering
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Turn Your Product Catalog Into a 24/7 Revenue Engine in Kenya
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Selling online in Kenya requires more than a simple product gallery. Customers expect instant M-Pesa mobile checkout, fast page loading on mobile phones, clear product specifications, and reliable order tracking.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                At Kryptonix Technologies, we build custom e-commerce stores engineered for the Kenyan retail and B2B environment — combining Daraja M-Pesa API integrations with real-time stock management and order administration.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/quote/" showArrow>
                  Get E-Commerce Quote
                </Button>
                <Button href="/services/mpesa-integration-services/" variant="secondary">
                  Explore M-Pesa API Services
                </Button>
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white">E-Commerce Features Tailored for Kenya</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-kryptonix-green" />
                  <div>
                    <h4 className="font-semibold text-white">Daraja M-Pesa STK Push</h4>
                    <p className="text-sm text-slate-400">Instant mobile PIN prompt on customer phones for frictionless mobile checkout.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Package className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Stock & Inventory Controls</h4>
                    <p className="text-sm text-slate-400">Automatic stock deduction upon payment with email notifications when inventory drops low.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lock className="h-6 w-6 shrink-0 text-kryptonix-cyan" />
                  <div>
                    <h4 className="font-semibold text-white">Secure Encrypted Transactions</h4>
                    <p className="text-sm text-slate-400">SSL data encryption and secure callback handling protecting store owners and customers.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* DELIVERABLES */}
      <Section className="bg-white/[0.02]">
        <Container>
          <SectionHeading
            eyebrow="Technical Deliverables"
            title="What Comes With Your E-Commerce Store"
            description="Our e-commerce builds include complete frontend storefronts and backend administration tools."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, idx) => (
              <GlassCard key={idx} className="p-6">
                <CheckCircle2 className="h-6 w-6 text-kryptonix-green" />
                <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{item}</p>
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
              eyebrow="E-Commerce FAQs"
              title="Frequently Asked Questions About E-Commerce in Kenya"
              description="Everything you need to know about accepting online payments and launching an online store."
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Selling Online with M-Pesa Integration</h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-slate-300">
              Get an exact quotation for your e-commerce store project today. We respond to all inquiries within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote/" showArrow>
                Get a E-Commerce Quote
              </Button>
              <Button href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Kryptonix, I want to build an e-commerce website with M-Pesa integration.")}`} target="_blank" variant="secondary">
                Chat on WhatsApp
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
