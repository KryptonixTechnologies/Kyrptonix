"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, X } from "lucide-react";
import { resources } from "@/data/resources";

const articleContent = [
  {
    sections: [
      { heading: "Start with the business problem", body: "Write down the outcome you need before comparing vendors. That might mean reducing manual work, reaching new customers, improving reporting, or replacing a system that no longer receives support. Clear goals make proposals easier to compare." },
      { heading: "Assess capability and fit", body: "Look for relevant delivery experience, a team that can explain its approach, and a realistic plan for discovery, implementation, testing, and handover. Ask who will do the work and how decisions and changes will be handled." },
      { heading: "Review security and ownership", body: "Understand how data is protected, where it is hosted, who can access it, and how incidents are handled. Confirm who owns the source code, content, accounts, and documentation when the engagement ends." },
      { heading: "Compare the whole cost", body: "Include implementation, subscriptions, integrations, training, support, and future changes. A lower initial quote may not represent the lower long-term cost if essential services are excluded." },
    ],
    takeaways: ["Define measurable business outcomes before requesting proposals.", "Compare delivery approach, security, ownership, and ongoing support.", "Evaluate total cost over the expected life of the solution."],
  },
  {
    sections: [
      { heading: "Inventory what you have", body: "List applications, servers, databases, integrations, users, and data owners. Identify systems that cannot be interrupted and any dependencies that are not documented." },
      { heading: "Set the migration plan", body: "Choose a migration approach for each workload: move it as-is, adjust it for the new environment, replace it, or retire it. Sequence the work around dependencies and agree how success will be measured." },
      { heading: "Prepare security and recovery", body: "Define identity and access controls, encryption, network boundaries, logging, backup retention, and recovery responsibilities before moving production data. Test a restore rather than assuming backups are usable." },
      { heading: "Test, move, and review", body: "Run a pilot with a low-risk workload, validate performance and integrations, and document a rollback plan. After cutover, review cost, reliability, access, and monitoring against the original goals." },
    ],
    takeaways: ["Map dependencies and data owners before scheduling migration work.", "Test security controls, backups, and rollback procedures in advance.", "Track cost and reliability after migration, not only on launch day."],
  },
  {
    sections: [
      { heading: "Protect access first", body: "Require multi-factor authentication for email, cloud services, and administrator accounts. Remove access promptly when roles change, and give each person only the permissions they need." },
      { heading: "Keep devices and software current", body: "Install security updates for operating systems, applications, routers, and business tools. Replace software that no longer receives updates and maintain an inventory of devices that connect to company data." },
      { heading: "Prepare for recovery", body: "Keep separate backups of important information and test that files and systems can be restored. Write down who makes decisions during an incident and how employees should report suspicious activity." },
      { heading: "Make security routine", body: "Use short, relevant staff guidance and a clear reporting route. Review access, backups, updates, and incident contacts regularly, and revisit the plan after a major change to the business." },
    ],
    takeaways: ["Enable MFA and review account permissions regularly.", "Patch supported devices and remove software that has reached end of life.", "Maintain tested backups and a simple incident response plan."],
  },
  {
    sections: [
      { heading: "Review the work", body: "Identify repetitive tasks, hand-offs, delays, and common errors. Speak with the people doing the work to understand what happens in practice, not only what the process document says." },
      { heading: "Check data and tools", body: "Find where essential information lives, who maintains it, and whether teams can trust it. Record the systems in use, overlapping subscriptions, manual exports, and integrations that need attention." },
      { heading: "Assess people and readiness", body: "Consider who will own the change, which teams need training, and how users will get support. A technically sound system can still fail to deliver value if people are not prepared to adopt it." },
      { heading: "Choose a first measurable step", body: "Prioritise improvements by expected value, effort, risk, and dependencies. Start with a manageable pilot, define a baseline, and agree how the team will evaluate the result before expanding." },
    ],
    takeaways: ["Map workflows and data before selecting new tools.", "Include user readiness, ownership, and support in the assessment.", "Start with a measurable pilot and expand based on evidence."],
  },
  {
    sections: [
      { heading: "Design for slower connections", body: "Keep pages focused and limit large images, unnecessary scripts, and heavy third-party tools. Compress media, use appropriate image sizes, and test how the site behaves on mobile data rather than only fast office Wi-Fi." },
      { heading: "Make key tasks easy to complete", body: "Put essential information and actions where visitors can find them. Use clear labels, readable text, accessible contrast, and forms that work well with touch and assistive technologies." },
      { heading: "Measure real performance", body: "Test representative pages on common mobile devices and network conditions. Review loading, interaction, and layout stability, then fix the largest bottlenecks before adding more features." },
      { heading: "Keep it dependable", body: "Use reliable hosting, monitor availability, maintain software dependencies, and keep backups. A clear content and maintenance process helps the site stay useful after launch." },
    ],
    takeaways: ["Prioritise lightweight pages and a mobile-first experience.", "Test real user journeys on mobile devices and constrained networks.", "Plan for monitoring, updates, and ongoing content maintenance."],
  },
  {
    sections: [
      { heading: "Set the context", body: "Explain the client's situation, the challenge they needed to solve, and the constraints that shaped the work. Keep the description specific enough to be useful while respecting confidentiality." },
      { heading: "Describe the work", body: "Summarise the agreed scope, key decisions, integrations, and delivery process. Distinguish between what was planned and what was ultimately implemented." },
      { heading: "Report outcomes carefully", body: "Use approved measurements with a clear baseline and time period. Attribute results accurately, avoid unsupported claims, and label estimates or qualitative feedback as such." },
      { heading: "Get approval before publishing", body: "Confirm the client has approved names, logos, screenshots, quotations, and performance data. Remove sensitive details and agree who can answer follow-up questions about the project." },
    ],
    takeaways: ["Tell a clear story from challenge to delivered solution.", "Use verifiable outcomes with context and client approval.", "Protect confidential information in every example and screenshot."],
  },
  {
    sections: [
      { heading: "Make maintenance part of the plan", body: "A website is not a one-time launch. Ongoing maintenance keeps it secure, fast, accessible, and aligned with the business as it grows and changes." },
      { heading: "Protect the site from drift", body: "Apply updates carefully, review plugins or dependencies, monitor uptime, and keep backups ready in case the site or data needs recovery. Security checks should be part of routine operations, not an afterthought." },
      { heading: "Measure what matters", body: "Track form submissions, page speed, downtime, broken links, and content quality. These are the small signals that often reveal underlying issues before they become more serious business problems." },
      { heading: "Keep improvements ongoing", body: "Retainers are most useful when they support planned improvements, quick fixes, and regular reviews. That gives the business a stable digital foundation without the cost and disruption of waiting for problems to escalate." },
    ],
    takeaways: ["Treat website maintenance as a business continuity activity, not a one-off task.", "Monitor security, performance, backups, and uptime regularly.", "Use a retainer to reduce risk, improve reliability, and keep digital growth moving."],
  },
];

const blogPosts = resources.map((post, index) => ({
  ...post,
  topic: post.category,
  ...(articleContent[index] ?? articleContent[0]),
}));

export function BlogLibrary() {
  const [activePost, setActivePost] = useState<(typeof blogPosts)[number] | null>(null);

  useEffect(() => {
    if (!activePost) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePost(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePost]);

  return (
    <>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article key={post.title} className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink-950/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-white">
              <Image
                src={post.poster}
                alt={post.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-kryptonix-blue px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                {post.topic}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-kryptonix-blue" aria-hidden="true" />
                  {post.date === "Publishing soon" ? "Coming soon" : post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-kryptonix-blue" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold leading-snug text-ink-950">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink-950/10 pt-4 mt-5">
                <p className="text-xs font-medium text-slate-500">{post.author}</p>
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="inline-flex min-h-10 items-center gap-2 text-xs font-bold uppercase tracking-wide text-kryptonix-blue transition-colors hover:text-kryptonix-gold"
                  aria-label={`Read ${post.title}`}
                >
                  Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActivePost(null);
          }}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-reader-title"
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl sm:rounded-3xl"
          >
            <div className="relative h-72 shrink-0 bg-white sm:h-96">
              <Image src={activePost.poster} alt={activePost.alt} fill unoptimized sizes="(min-width: 768px) 768px, 100vw" className="h-full w-full object-contain p-3" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-slate-950/5 to-transparent" />
              <button
                type="button"
                autoFocus
                onClick={() => setActivePost(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-slate-950/50 text-white transition hover:bg-slate-950/80"
                aria-label="Close article reader"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="absolute bottom-5 left-5 right-5 space-y-2 sm:bottom-6 sm:left-7 sm:right-7">
                <div className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="rounded-full bg-kryptonix-gold px-3 py-1 text-ink-950">{activePost.topic}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{activePost.readTime}</span>
                </div>
                <h2 id="article-reader-title" className="font-display text-xl font-bold leading-tight text-white sm:text-3xl">
                  {activePost.title}
                </h2>
              </div>
            </div>

            <div className="overflow-y-auto">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-slate-200 px-5 py-4 text-xs text-slate-500 sm:px-7">
                <span className="font-semibold text-slate-700">Written by {activePost.author}</span>
                <span aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {activePost.date === "Publishing soon" ? "Draft preview" : activePost.date}
                </span>
              </div>

              <div className="space-y-7 px-5 py-6 sm:px-7 sm:py-8">
                <p className="border-l-2 border-kryptonix-gold pl-4 text-base italic leading-7 text-slate-600">
                  “{activePost.excerpt}”
                </p>
                <div className="space-y-6">
                  {activePost.sections.map((section, index) => (
                    <section key={section.heading}>
                      <h3 className="font-display text-lg font-bold text-ink-950">
                        {index + 1}. {section.heading}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{section.body}</p>
                    </section>
                  ))}
                </div>

                <section className="rounded-xl border border-ink-950/10 bg-[#f5f7fb] p-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-kryptonix-blue">Key takeaways</h3>
                  <ul className="mt-4 space-y-3">
                    {activePost.takeaways.map((takeaway) => (
                      <li key={takeaway} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-kryptonix-blue" aria-hidden="true" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-kryptonix-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-kryptonix-navy">
                    Talk to our team <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <button type="button" onClick={() => setActivePost(null)} className="min-h-11 px-4 text-sm font-semibold text-slate-600 hover:text-ink-950">
                    Close article
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}