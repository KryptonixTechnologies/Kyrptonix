import { Mail, Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredResource, resourceCategories, resources } from "@/data/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Read Kryptonix Technologies guides and insights on website development, business software, cloud infrastructure, cybersecurity, automation, AI, data, and practical IT strategy.",
  path: "/resources",
  keywords: ["technology guides Kenya", "cloud insights", "cybersecurity resources", "software development articles"],
});

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Insights, guides, and practical technology content."
        description="A resource library for articles, guides, whitepapers, webinars, and practical technology insights."
      />
      <Section>
        <Container>
          <GlassCard className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-64 bg-[radial-gradient(circle_at_35%_30%,rgb(var(--color-gold-accent)/0.25),transparent_36%),radial-gradient(circle_at_70%_75%,rgb(var(--color-gold-accent)/0.3),transparent_40%),linear-gradient(135deg,rgb(var(--color-primary-navy)/0.92),rgb(3 13 42/0.98))]" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
                  Featured resource
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white">{featuredResource.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{featuredResource.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[featuredResource.type, featuredResource.author, featuredResource.readTime].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button href="/contact" className="mt-6" variant="secondary">
                  Request Notification
                </Button>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section className="border-t border-ink-950/10 bg-[var(--off-white)]">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Library"
              title="Practical technology guidance for business decisions."
              description="Search, categories, articles, guides, webinars, and downloadable resources help business leaders understand software, cloud, security, automation, and digital growth."
            />
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-500">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search coming soon
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {resourceCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {resources.map((post) => (
              <GlassCard key={post.title} className="p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-kryptonix-cyan/20 bg-kryptonix-cyan/10 px-3 py-1 text-xs font-semibold text-kryptonix-cyan">
                    {post.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                    {post.type}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-7 text-white">{post.title}</h2>
                <p className="mt-2 text-xs text-slate-500">
                  {post.author} · {post.date} · {post.readTime}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-10 p-6">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <Mail className="h-6 w-6 text-kryptonix-cyan" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-semibold text-white">Newsletter updates</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Frontend-only email capture area. Later this can connect to Mailchimp, Brevo, or a CRM.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  aria-label="Newsletter email address"
                  className="h-11 rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-kryptonix-cyan"
                  placeholder="Email address"
                />
                <Button href="/contact" showArrow>
                  Notify Me
                </Button>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
