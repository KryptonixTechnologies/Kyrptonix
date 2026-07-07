import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { CompanyLogo } from "@/components/brand/company-logo";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";

const socialIcons = {
  LinkedIn: Linkedin,
  X: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M13.9 10.5 21.3 2h-1.8l-6.4 7.3L8 2H2.1l7.8 11.1L2.1 22h1.8l6.8-7.8 5.4 7.8H22l-8.1-11.5Zm-2.4 2.7-.8-1.1L4.4 3.3h2.7l5 7 .8 1.1 6.6 9.3h-2.7l-5.3-7.5Z" />
    </svg>
  ),
  Facebook,
  Instagram,
  YouTube: Youtube,
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
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{siteConfig.description}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400">
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
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-ink-950">
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
                  className="text-sm text-slate-400 transition hover:text-ink-950"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Start</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Tell us what you are building, improving, or protecting.
            </p>
            <Button href="/quote" className="mt-5" showArrow>
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-950/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kryptonix Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md border border-ink-950/10 bg-white text-slate-400 transition hover:-translate-y-0.5 hover:border-ink-950/20 hover:bg-ink-950/[0.04] hover:text-ink-950"
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
