import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function NotFound() {
  return (
    <main>
      <Section className="min-h-[calc(100vh-4rem)]">
        <Container>
          <GlassCard className="mx-auto max-w-2xl p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kyptonix-cyan">404</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white">Page not found</h1>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              The page you are looking for is not available yet. Use the main navigation or return home.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/" showArrow>
                Back Home
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
