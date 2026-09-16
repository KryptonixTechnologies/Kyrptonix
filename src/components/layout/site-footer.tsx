import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { CompanyLogo } from "@/components/brand/company-logo";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";

const socialBrandStyles: Record<string, { icon: ComponentType<SVGProps<SVGSVGElement>>; style: string }> = {
  LinkedIn: {
    icon: Linkedin,
    style: "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20 hover:bg-[#0A66C2] hover:text-white",
  },
  X: {
    icon: () => (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M13.9 10.5 21.3 2h-1.8l-6.4 7.3L8 2H2.1l7.8 11.1L2.1 22h1.8l6.8-7.8 5.4 7.8H22l-8.1-11.5Zm-2.4 2.7-.8-1.1L4.4 3.3h2.7l5 7 .8 1.1 6.6 9.3h-2.7l-5.3-7.5Z" />
      </svg>
    ),
    style: "bg-slate-900/10 text-slate-900 border-slate-900/20 hover:bg-slate-900 hover:text-white",
  },
  Facebook: {
    icon: Facebook,
    style: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white",
  },
  Instagram: {
    icon: Instagram,
    style: "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/20 hover:bg-[#E4405F] hover:text-white",
  },
  YouTube: {
    icon: Youtube,
    style: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 hover:bg-[#FF0000] hover:text-white",
  },
};

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-950/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Kryptonix Technologies home">
              <CompanyLogo variant="footer" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[rgb(var(--color-text-medium))]">{siteConfig.description}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[rgb(var(--color-text-medium))]">
              <a className="inline-flex items-center gap-2 transition hover:text-ink-950" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4 text-kryptonix-cyan" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-ink-950" href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4 text-kryptonix-cyan" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Company</h2>
            <div className="mt-4 grid gap-3">
              {siteConfig.navItems.slice(1, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[rgb(var(--color-text-medium))] transition hover:text-ink-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Services</h2>
            <div className="mt-4 grid gap-3">
              {serviceCategories.slice(0, 6).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-[rgb(var(--color-text-medium))] transition hover:text-ink-950"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Start</h2>
            <p className="mt-4 text-sm leading-6 text-[rgb(var(--color-text-medium))]">
              Tell us what you are building, improving, or protecting.
            </p>
            {/* Directs to contact page */}
            <Button href={siteConfig.quoteUrl || "/contact/"} className="mt-5" showArrow>
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Bottom Bar: Copyright on Left, Colored Socials on Right with Right Margin */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-950/10 pt-6 text-sm text-[rgb(var(--color-text-medium))] sm:flex-row">
          <p>© 2026 Kryptonix Technologies. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-3 sm:mr-16">
            {siteConfig.socialLinks.map((link) => {
              const brand = socialBrandStyles[link.label];
              const Icon = brand?.icon || (() => null);
              const brandStyle = brand?.style || "bg-slate-100 text-slate-600 border-slate-200";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className={`grid h-9 w-9 place-items-center rounded-md border transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${brandStyle}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
