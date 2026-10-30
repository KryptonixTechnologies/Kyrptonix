"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function BlogLibrary() {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <article
          key={post.slug}
          className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink-950/10"
        >
          {/* Card Image */}
          <Link
            href={`/blog/${post.slug}/`}
            className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kryptonix-blue"
            aria-label={`Read article: ${post.title}`}
          >
            <Image
              src={post.poster}
              alt={post.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-4 top-4 rounded-full bg-kryptonix-blue px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
              {post.topic}
            </span>
          </Link>

          {/* Card Body */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-kryptonix-blue" aria-hidden="true" />
                {post.date === "Publishing soon" ? "Recent Guide" : post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-kryptonix-blue" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <h2 className="mt-4 font-display text-xl font-bold leading-snug text-ink-950 transition-colors group-hover:text-kryptonix-blue">
              <Link href={`/blog/${post.slug}/`}>
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink-950/10 pt-4 mt-5">
              <p className="text-xs font-medium text-slate-500">{post.author}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="inline-flex min-h-10 items-center gap-2 text-xs font-bold uppercase tracking-wide text-kryptonix-blue transition-colors hover:text-kryptonix-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kryptonix-blue rounded"
                aria-label={`Read full article: ${post.title}`}
              >
                Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
