import { Container } from "@/components/layout/container";
import { BlogLibrary } from "@/components/blog-library";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Insights",
  description:
    "Technology articles and practical guides for Kenyan businesses, covering software, cybersecurity, cloud, and digital growth.",
  path: "/blog",
  keywords: ["technology blog Kenya", "business technology insights", "software articles Kenya"],
});

export default function BlogPage() {
  return (
    <main>
      <section className="relative bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-sm font-semibold text-kryptonix-blue">Technology Insights</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
              Latest Technology Articles &amp; Guides
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Practical insights on software, cybersecurity, cloud, and digital growth for businesses in Kenya.
            </p>
          </div>
          <BlogLibrary />
        </Container>
      </section>
    </main>
  );
}