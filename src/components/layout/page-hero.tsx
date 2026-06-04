import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlowBadge } from "@/components/ui/glow-badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <Section className={cn("relative border-b border-ink-950/10 py-16 sm:py-20 lg:py-24", className)}>
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-kryptonix-gold/20 blur-3xl" />
      <Container data-reveal className="relative z-10">
        <GlowBadge>{eyebrow}</GlowBadge>
        <h1 className="mt-7 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
      </Container>
    </Section>
  );
}
