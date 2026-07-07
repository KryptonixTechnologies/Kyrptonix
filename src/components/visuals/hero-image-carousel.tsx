"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
};

const slides: HeroSlide[] = [
  {
    src: "/landing section/system design homepage.jpeg",
    alt: "System design and software architecture planning",
    label: "Business systems planned for scale and reliability",
  },
  {
    src: "/landing section/website-development-hero.webp",
    alt: "Website development workspace showing a modern business website",
    label: "Websites built for a stronger online presence",
  },
  {
    src: "/landing section/Website Customization.jpeg",
    alt: "Developer customizing a website interface",
    label: "Custom interfaces shaped around your business",
  },
  {
    src: "/landing section/Managed IT Support.jpeg",
    alt: "Managed IT support and infrastructure operations",
    label: "Reliable support for the systems you depend on",
  },
  {
    src: "/landing section/digital presence.jpeg",
    alt: "Digital presence and online growth strategy",
    label: "Digital presence that helps customers find you",
  },
  {
    src: "/landing section/Five Things That Everyone Should Know About Cybersecurityhomepage landing section.jpeg",
    alt: "Cybersecurity concept for protecting business systems",
    label: "Secure foundations for business growth",
  },
];

export function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <div className="relative min-h-[470px] overflow-hidden lg:-mr-12 lg:min-h-[500px]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "auto"}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className={`object-cover transition duration-1000 ease-out ${
            index === activeIndex ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_7%,rgba(255,255,255,0.82)_18%,rgba(255,255,255,0.35)_32%,rgba(255,255,255,0.04)_48%,rgba(8,31,92,0.18)_100%)]" />

      <div className="absolute bottom-6 left-8 right-6 sm:left-14 lg:left-24">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-kryptonix-gold">What we build</p>
        <p className="mt-1 max-w-xs text-lg font-bold text-ink-950">{activeSlide.label}</p>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2" aria-label="Hero image carousel progress">
        {slides.map((slide, index) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? "w-7 bg-kryptonix-gold" : "w-2 bg-ink-950/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
