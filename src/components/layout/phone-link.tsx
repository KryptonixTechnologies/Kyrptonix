"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PhoneLink() {
  function handlePhoneClick() {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "phone_click", {
        event_category: "lead_generation",
        event_label: "Footer phone",
        contact_method: "phone",
      });
    }
  }

  return (
    <a
      className="inline-flex items-center gap-2 transition hover:text-ink-950"
      href={`tel:${siteConfig.phone}`}
      onClick={handlePhoneClick}
    >
      <Phone
        className="h-4 w-4 text-kryptonix-cyan"
        aria-hidden="true"
      />
      {siteConfig.phone}
    </a>
  );
}