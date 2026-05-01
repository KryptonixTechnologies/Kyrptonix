"use client";

import { ArrowUp, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const consentKey = "kyptonix-cookie-consent";

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
            "grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-900/85 text-white shadow-glow backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]",
            showBackToTop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Kyptonix Technologies, I would like to discuss a project.")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Kyptonix Technologies on WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-full border border-kyptonix-green/30 bg-kyptonix-green/20 text-white shadow-[0_0_44px_rgba(63,185,80,0.18)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-kyptonix-green/30"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
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
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
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
