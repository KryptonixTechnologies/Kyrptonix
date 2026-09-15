import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Code2,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Hotel,
  PackageCheck,
  PenTool,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Waves,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { HeroImageCarousel } from "@/components/visuals/hero-image-carousel";

const heroStats = [
  { value: "Custom", label: "Project Delivery" },
  { value: "Available", label: "Consultation" },
  { value: "Responsive", label: "Design" },
  { value: "Ongoing", label: "Support Options" },
  { value: "Kenya", label: "Based Team" },
];

const solutions = [
  {
    title: "Business Website Development",
    href: "/services/website-design-development-kenya/",
    icon: Store,
    points: [
      "Corporate Websites",
      "Mobile-Responsive Design",
      "Lead Generation Systems",
      "SEO & Performance Optimization",
    ],
    image: "/websites-digital-presence.webp",
    imageAlt: "Business website development in Kenya",
  },
  {
    title: "E-Commerce & M-Pesa Integration",
    href: "/services/ecommerce-website-development-kenya/",
    icon: ShoppingCart,
    points: [
      "Online Store Platforms",
      "Daraja M-Pesa Integration",
      "Product Catalog & Inventory",
      "Automated Order Receipts",
    ],
    image: "/e-commerce-platform.webp",
    imageAlt:
      "E-commerce website development with M-Pesa integration in Kenya",
  },
  {
    title: "Custom Business Systems",
    href: "/services/enterprise-solutions/",
    icon: BriefcaseBusiness,
    points: [
      "Custom ERP & CRM Software",
      "POS & Stock Management",
      "HR & Payroll Solutions",
      "Water Company ERP Systems",
    ],
    image: "/business-systems.webp",
    imageAlt: "Custom business management software in Kenya",
  },
  {
    title: "Business Automation & AI",
    href: "/services/digital-transformation/",
    icon: Bot,
    points: [
      "Workflow Automation",
      "Real-time Dashboards",
      "AI Chatbot Integration",
      "WhatsApp Business APIs",
    ],
    image: "/automation-ai-solutions.webp",
    imageAlt:
      "Business process automation and AI integration in Kenya",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    problem:
      "Full-featured online store with payments and inventory.",
    solution: "React - Node.js - MongoDB",
    image: "/e-commerce-platform.webp",
    imageAlt: "E-commerce platform displayed on a laptop",
  },
  {
    title: "Water Industry ERP",
    problem:
      "Complete ERP for water treatment business operations.",
    solution: "Next.js - PostgreSQL - Tailwind",
    image: "/water-industry.webp",
    imageAlt: "Water industry business software project",
  },
  {
    title: "Corporate Website",
    problem:
      "Modern corporate website for a lead generation firm.",
    solution: "WordPress - PHP - Elementor",
    image: "/corporate-website.webp",
    imageAlt:
      "Corporate website shown across desktop and mobile screens",
  },
  {
    title: "Service Booking Platform",
    problem:
      "Appointment and booking system with payment integration.",
    solution: "Vue.js - Laravel - MySQL",
    image: "/service-booking-platform.webp",
    imageAlt: "Online service booking platform",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    text: "We understand your business, goals, and challenges.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    text: "We create wireframes and UI/UX that users will love.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Development",
    text: "We build scalable, secure, and fast solutions.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    text: "We test thoroughly to make sure everything works perfectly.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Launch",
    text: "We deploy your solution and ensure smooth rollout.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support",
    text: "We provide ongoing support and improvements.",
    icon: Headphones,
  },
];

const benefits = [
  { title: "Fast Delivery", icon: Rocket },
  { title: "Business-Focused Solutions", icon: PackageCheck },
  { title: "Secure & Reliable Systems", icon: ShieldCheck },
  { title: "Growth-Oriented Design", icon: ShoppingCart },
  { title: "Ongoing Support", icon: Headphones },
];

const industries = [
  { title: "Water Treatment", icon: Waves },
  { title: "Manufacturing", icon: Factory },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: GraduationCap },
  { title: "Retail & E-commerce", icon: Store },
  { title: "Hospitality", icon: Hotel },
  { title: "Logistics", icon: Truck },
  { title: "NGOs & Non-profits", icon: ShieldCheck },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
        {eyebrow}
      </p>

      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-3 text-base leading-7 ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function Reveal({
  children,
  className,
  transition,
}: {
  children: ReactNode;
  className?: string;
  transition?: { delay?: number };
}) {
  const style = transition?.delay
    ? ({
        "--reveal-delay": `${transition.delay * 1000}ms`,
      } as CSSProperties)
    : undefined;

  return (
    <div data-reveal className={className} style={style}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* HERO SECTION */}
      <Section className="relative overflow-visible bg-white !pb-0 !pt-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_47%,rgba(255,255,255,0.12)_74%)]" />

        <div className="ambient-grid pointer-events-none absolute inset-0 opacity-45" />

        <Container className="relative z-10">
          <div className="grid min-h-[560px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="max-w-2xl pt-6 sm:pt-8 lg:pt-10">
              <span className="inline-flex rounded-full border border-kryptonix-gold/25 bg-white px-4 py-2 text-xs font-semibold text-ink-950 shadow-sm">
                Technology Solutions for Growing Businesses
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] text-ink-950 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Empoworing businesses in {" "}
                <span className="text-kryptonix-cyan">Kenya </span> 
                through technology 
                and innovation
              </h1>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote/" showArrow>
                  Get a Website Quote
                </Button>

                <Button
                  href="/contact/"
                  variant="secondary"
                  className="gap-2"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>

            <HeroImageCarousel />
          </div>

          <div className="relative z-20 -mb-10 grid gap-3 rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(var(--color-secondary-navy)))] p-5 shadow-2xl sm:grid-cols-2 lg:grid-cols-5 lg:p-7">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 border-white/10 lg:border-r last:lg:border-r-0"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-kryptonix-cyan/50 text-kryptonix-cyan">
                  <ShieldCheck
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="text-xs font-medium text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SERVICES / SOLUTIONS */}
      <Section className="bg-white pt-24">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="What We Do"
              title="Website, Software and Digital Solutions for Businesses in Kenya"
              description="We build websites, e-commerce platforms, business systems, cloud solutions, automation tools, and digital products tailored to business goals."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <Reveal
                  key={solution.title}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={solution.href}
                    className="group block h-full rounded-md border border-ink-950/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-44 overflow-hidden rounded-md bg-slate-100">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/25 to-transparent" />
                    </div>

                    <Icon
                      className="mt-6 h-7 w-7 text-kryptonix-cyan"
                      aria-hidden="true"
                    />

                    <h3 className="mt-4 text-xl font-bold text-ink-950">
                      {solution.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {solution.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <Check
                            className="h-3.5 w-3.5 text-kryptonix-cyan"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink-950">
                      Learn More
                      <ArrowRight
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PROJECTS */}
      <Section className="px-3 py-0">
        <Container className="rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(3,13,42))] py-10 shadow-2xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                Our Work
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                Recent Projects
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Website, software, and business technology solutions.
              </p>
            </Reveal>

            <Reveal>
              <Button
                href="/portfolio"
                variant="secondary"
                showArrow
                className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
              >
                View All Projects
              </Button>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                transition={{ delay: index * 0.06 }}
              >
                <article className="h-full overflow-hidden rounded-md border border-white/15 bg-white/[0.04] shadow-xl">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 to-transparent" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {project.problem}
                    </p>

                    <p className="mt-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                      {project.solution}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Our Process"
              title="A Simple, Proven Process for Website and Software Development"
              description="We follow a clear process from discovery and design through development, testing, launch, and ongoing support."
            />
          </Reveal>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
            <div className="absolute left-10 right-10 top-12 hidden h-px bg-kryptonix-cyan/50 xl:block" />

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="relative text-center">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-ink-950 text-kryptonix-cyan shadow-[0_0_0_1px_rgb(var(--color-gold-accent)/0.4)]">
                      <Icon
                        className="h-9 w-9"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 text-sm font-bold text-ink-950">
                      {item.step} {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* INDUSTRIES WE SERVE */}
      <Section className="relative isolate overflow-hidden bg-white">
        <Container>
          <Reveal>
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                Industries We Serve
              </p>

              <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                Technology Solutions for Businesses and Organisations
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 sm:grid-cols-4">
                {industries.map((industry) => {
                  const Icon = industry.icon;

                  return (
                    <div
                      key={industry.title}
                      className="flex min-h-[120px] items-center justify-center rounded-md border border-ink-950/10 bg-white p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div>
                        <Icon
                          className="mx-auto h-8 w-8 text-kryptonix-cyan"
                          aria-hidden="true"
                        />

                        <p className="mt-3 text-sm font-semibold leading-5 text-ink-950">
                          {industry.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* BENEFITS */}
      <Section className="bg-[var(--off-white)]">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Why Businesses Work With Kryptonix"
              title="Built For Trust, Capability, and Results"
              description="Every project is shaped around business value, long-term reliability, and a clean user experience."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="h-full rounded-md border border-ink-950/10 bg-white p-5 text-center shadow-sm">
                    <Icon
                      className="mx-auto h-8 w-8 text-kryptonix-cyan"
                      aria-hidden="true"
                    />

                    <h3 className="mt-4 text-base font-bold text-ink-950">
                      {benefit.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CONTACT CTA */}
      <Section className="px-3 pb-3 pt-0">
        <Container className="rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(3,13,42))] py-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal className="flex items-center gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-kryptonix-green text-ink-950 shadow-[0_0_40px_rgb(var(--color-bright-gold)/0.35)]">
                <Phone className="h-9 w-9" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">
                  Let&apos;s Build Something Great Together
                </p>

                <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                  Ready to Transform Your Business?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Whether you need a website, e-commerce platform, business
                  system, automation solution, or cloud infrastructure,
                  Kryptonix can help.
                </p>

                <div className="mt-4 flex flex-col gap-1 text-sm font-semibold text-white">
                  <a href="tel:+254799425417">0799 425 417</a>

                  <a href="mailto:sales@kryptonixtechnologies.com">
                    sales@kryptonixtechnologies.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="/quote" showArrow>
                Book Free Consultation
              </Button>

 
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}