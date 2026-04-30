import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-sm font-bold text-white">
                K
              </span>
              <span className="font-display text-lg font-semibold text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{siteConfig.description}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
              <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4 text-kyptonix-cyan" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4 text-kyptonix-cyan" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <div className="mt-4 grid gap-3">
              {siteConfig.navItems.slice(1, 6).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <div className="mt-4 grid gap-3">
              {serviceCategories.slice(0, 6).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Start</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Tell us what you are building, improving, or protecting.
            </p>
            <Button href="/quote" className="mt-5" showArrow>
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kyptonix Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
