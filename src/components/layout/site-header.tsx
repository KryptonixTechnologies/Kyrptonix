"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { CompanyLogo } from "@/components/brand/company-logo";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/80 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Kyptonix Technologies home">
          <CompanyLogo priority />
          <span className="sr-only">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {siteConfig.navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Services
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="glass-panel grid grid-cols-2 gap-2 rounded-lg p-3">
                    {serviceCategories.slice(0, 8).map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-md p-3 transition hover:bg-white/[0.06]"
                        >
                          <div className="flex gap-3">
                            <Icon className="mt-1 h-5 w-5 shrink-0 text-kyptonix-cyan" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-semibold text-white">{service.title}</p>
                              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="ghost">
            Talk to us
          </Button>
          <Button href="/quote" showArrow>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      <div className={cn("border-t border-white/10 lg:hidden", isOpen ? "block" : "hidden")}>
        <Container className="py-4">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
            <Button href="/contact" variant="secondary">
              Talk to us
            </Button>
            <Button href="/quote" showArrow>
              Get a Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
