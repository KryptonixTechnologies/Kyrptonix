"use client";

import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function EmailLink() {
  function handleEmailClick() {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "email_click", {
        event_category: "lead_generation",
        event_label: "Footer email",
        contact_method: "email",
      });
    }
  }

  return (
    <a
      className="inline-flex items-center gap-2 transition hover:text-ink-950"
      href={`mailto:${siteConfig.email}`}
      onClick={handleEmailClick}
    >
      <Mail
        className="h-4 w-4 text-kryptonix-cyan"
        aria-hidden="true"
      />
      {siteConfig.email}
    </a>
  );
}