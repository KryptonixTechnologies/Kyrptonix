import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/config/site";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Kryptonix Technologies",
    };
  }

  return pageMetadata({
    title: `${post.title} | Kryptonix Technology Insights`,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    image: post.poster,
    keywords: [
      post.title,
      post.topic,
      "technology articles Kenya",
      "Kryptonix blog",
      "business technology Nairobi",
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get up to 3 related posts (excluding the current one)
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.poster),
    datePublished: "2026-08-01T08:00:00+03:00",
    dateModified: "2026-10-15T10:00:00+03:00",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Kryptonix logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}/`),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog/"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}/`),
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd)}
      />

      {/* Article Header & Navigation */}
      <section className="border-b border-ink-950/10 bg-slate-50/70 py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Back button */}
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kryptonix-blue transition hover:text-kryptonix-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all articles
            </Link>

            {/* Meta Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-kryptonix-blue px-3 py-1 font-semibold text-white">
                {post.topic}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-kryptonix-blue" aria-hidden="true" />
                {post.date}
              </span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-kryptonix-blue" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Author */}
            <p className="mt-4 text-sm text-slate-600">
              Written by <span className="font-semibold text-ink-950">{post.author}</span> · Kryptonix Technologies
            </p>
          </div>
        </Container>
      </section>

      {/* Main Article Content */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Featured Image */}
            <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink-950/10 bg-white shadow-sm sm:rounded-3xl">
              <Image
                src={post.poster}
                alt={post.alt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Lead / Excerpt quote */}
            <div className="mb-10 rounded-2xl border-l-4 border-kryptonix-blue bg-blue-50/50 p-6 sm:p-8">
              <p className="text-base italic leading-8 text-slate-700 sm:text-lg">
                &ldquo;{post.excerpt}&rdquo;
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10 text-slate-800">
              {post.sections.map((section, index) => (
                <section key={section.heading} className="space-y-3">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                    <span className="mr-3 text-kryptonix-blue">{index + 1}.</span>
                    {section.heading}
                  </h2>
                  <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-8">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="mt-12 rounded-2xl border border-ink-950/10 bg-[#f5f7fb] p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-kryptonix-blue" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-kryptonix-blue">
                  Key Takeaways
                </h3>
              </div>
              <ul className="mt-5 space-y-4">
                {post.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-slate-800 sm:text-base">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-kryptonix-green" aria-hidden="true" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Attribution Card */}
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-ink-950/10 bg-white p-6 sm:flex-row sm:items-center sm:gap-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-kryptonix-blue text-lg font-bold text-white shadow-sm">
                KT
              </div>
              <div>
                <h4 className="font-bold text-ink-950">Kryptonix Technologies Engineering Team</h4>
                <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                  Technology consultancy and software engineering firm based in Nairobi, Kenya. We specialize in custom business websites, enterprise systems, Daraja M-Pesa integrations, and cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Call to Action Banner */}
            <div className="mt-12 rounded-3xl border border-ink-950/10 bg-gradient-to-br from-slate-900 to-ink-950 p-8 text-white shadow-xl sm:p-10">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-kryptonix-cyan">
                  Work with our Nairobi team
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Need Help Implementing This in Your Business?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                  Whether you are planning a new website, migrating to the cloud, or looking to automate your business processes, we respond within one business day.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button href="/quote/" showArrow>
                    Get a Project Quote
                  </Button>
                  <Button
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello Kryptonix, I read your article "${post.title}" and would like to discuss a project.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-ink-950/10 bg-slate-50/70 py-16">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-kryptonix-blue">
                    More Technology Insights
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                    Related Articles &amp; Guides
                  </h2>
                </div>
                <Link
                  href="/blog/"
                  className="hidden items-center gap-1.5 text-sm font-semibold text-kryptonix-blue transition hover:text-kryptonix-gold sm:inline-flex"
                >
                  View all articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((item) => (
                  <article
                    key={item.slug}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white shadow-sm transition hover:shadow-lg"
                  >
                    <Link
                      href={`/blog/${item.slug}/`}
                      className="relative aspect-[4/3] overflow-hidden bg-white"
                      tabIndex={-1}
                    >
                      <Image
                        src={item.poster}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-kryptonix-blue px-2.5 py-1 text-xs font-semibold text-white">
                        {item.topic}
                      </span>
                    </Link>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5 text-kryptonix-blue" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5 text-kryptonix-blue" />
                          {item.readTime}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-950 transition group-hover:text-kryptonix-blue">
                        <Link href={`/blog/${item.slug}/`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto pt-4">
                        <Link
                          href={`/blog/${item.slug}/`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-kryptonix-blue transition hover:text-kryptonix-gold"
                        >
                          Read full article
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 text-center sm:hidden">
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-kryptonix-blue"
                >
                  View all articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
