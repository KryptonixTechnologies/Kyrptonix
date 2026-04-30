import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { blogPosts } from "@/data/home";

export const metadata: Metadata = {
  title: "Resources",
  description: "Read Kyptonix Technologies articles, guides, and future resources.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Insights, guides, and practical technology content."
        description="Blog posts, whitepapers, e-books, webinars, and how-to guides will live here. For V1, the content cards are placeholders."
      />
      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <GlassCard key={post.title} className="p-5">
                <p className="text-sm text-kyptonix-cyan">{post.date}</p>
                <h2 className="mt-4 text-lg font-semibold leading-7 text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
