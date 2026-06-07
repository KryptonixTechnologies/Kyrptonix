"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
};

type HeroImageCarouselProps = {
  slides: HeroSlide[];
  className?: string;
};

export function HeroImageCarousel({ slides, className }: HeroImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <div
      className={cn("group relative h-full min-h-[470px] overflow-hidden lg:min-h-[500px]", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Kryptonix technology services"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none",
            index === activeIndex ? "scale-100 opacity-100" : "pointer-events-none scale-[1.03] opacity-0",
          )}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_7%,rgba(255,255,255,0.82)_18%,rgba(255,255,255,0.35)_32%,rgba(255,255,255,0.04)_48%,rgba(8,31,92,0.18)_100%)]" />

      <div className="absolute bottom-6 left-8 right-6 flex items-end justify-between gap-4 sm:left-14 lg:left-24">
        <div aria-live="polite">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-kryptonix-gold">What we build</p>
          <p className="mt-1 max-w-xs text-lg font-bold text-ink-950">{slides[activeIndex]?.label}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => showSlide(activeIndex - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-ink-950/45 text-white backdrop-blur transition hover:bg-ink-950/70"
            aria-label="Show previous image"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showSlide(activeIndex + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-ink-950/45 text-white backdrop-blur transition hover:bg-ink-950/70"
            aria-label="Show next image"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="absolute right-6 top-6 flex gap-2" aria-label="Choose carousel image">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => showSlide(index)}
            className={cn(
              "h-2 rounded-full shadow-sm transition-all",
              index === activeIndex ? "w-8 bg-kryptonix-gold" : "w-2 bg-ink-950/35 hover:bg-ink-950/60",
            )}
            aria-label={`Show image ${index + 1}: ${slide.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
