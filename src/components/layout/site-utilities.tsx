"use client";

import { ArrowUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const consentKey = "kryptonix-cookie-consent";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.01 3.2c-7.06 0-12.8 5.66-12.8 12.64 0 2.23.6 4.4 1.73 6.31L3.1 28.8l6.83-1.78a12.94 12.94 0 0 0 6.08 1.52c7.06 0 12.8-5.66 12.8-12.64S23.07 3.2 16.01 3.2Zm0 22.98c-1.95 0-3.85-.54-5.5-1.56l-.4-.24-4.05 1.06 1.08-3.91-.26-.4a10.16 10.16 0 0 1-1.6-5.49c0-5.68 4.82-10.3 10.73-10.3s10.72 4.62 10.72 10.3-4.8 10.54-10.72 10.54Zm5.88-7.7c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.51-.16-.72.16-.21.31-.83 1.03-1.02 1.24-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.6-1.9-1.8-2.22-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.72-.99-2.36-.26-.63-.52-.54-.72-.55h-.62c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.6 0 1.53 1.13 3.01 1.28 3.22.16.21 2.23 3.37 5.4 4.73.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function SiteUtilities() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    setShowCookieBanner(!window.localStorage.getItem(consentKey));

    function handleScroll() {
      setShowBackToTop(window.scrollY > 640);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function saveConsent(value: "accepted" | "rejected") {
    window.localStorage.setItem(consentKey, value);
    setShowCookieBanner(false);
  }

  return (
    <>
      <div
        className={cn(
          "fixed right-5 z-50 flex flex-col items-end gap-3 transition-[bottom] duration-200",
          showCookieBanner ? "bottom-44 sm:bottom-32" : "bottom-5",
        )}
      >
        <button
          type="button"
          aria-label="Back to top"
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border border-ink-950/20 bg-ink-900 text-white shadow-glow backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-kryptonix-gold hover:bg-kryptonix-gold hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kryptonix-cyan",
            showBackToTop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Kryptonix Technologies, I would like to discuss a project.")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Kryptonix Technologies on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full border border-[#1ebe5d] bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.38)] transition duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_16px_34px_rgba(37,211,102,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
        </a>
      </div>

      {showCookieBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6">
          <div className="glass-panel glow-edge mx-auto flex max-w-5xl flex-col gap-4 rounded-lg p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Cookie preferences</p>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
                We use essential cookies for the site experience. Analytics and marketing cookies will only run after consent controls are finalised.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
                onClick={() => saveConsent("rejected")}
              >
                Reject
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md bg-kryptonix-green px-4 text-sm font-semibold text-ink-950 transition hover:bg-kryptonix-green/90"
                onClick={() => saveConsent("accepted")}
              >
                Accept
              </button>
              <button
                type="button"
                aria-label="Dismiss cookie banner"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                onClick={() => setShowCookieBanner(false)}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}