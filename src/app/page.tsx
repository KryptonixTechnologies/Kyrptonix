import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  CirclePlay,
  ClipboardCheck,
  CloudCog,
  Code2,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Hotel,
  Linkedin,
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
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { HeroBackgroundVideo } from "@/components/visuals/hero-background-video";

const trustItems = ["50+ Projects Delivered", "Fast Turnaround", "Responsive Design", "Ongoing Support", "Built in Kenya"];

const heroStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Technologies" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const solutions = [
  {
    title: "Websites & Digital Presence",
    icon: Store,
    points: ["Corporate Websites", "E-commerce Solutions", "Landing Pages", "SEO & Performance"],
    art: "web",
  },
  {
    title: "Business Systems",
    icon: BriefcaseBusiness,
    points: ["ERP & Business Management", "POS & Inventory Systems", "HR & Payroll Systems", "Custom Web Applications"],
    art: "systems",
  },
  {
    title: "Cloud & Infrastructure",
    icon: CloudCog,
    points: ["Cloud Hosting & Deployment", "Server Management", "Backup & Disaster Recovery", "DevOps & Monitoring"],
    art: "cloud",
  },
  {
    title: "Automation & AI Solutions",
    icon: Bot,
    points: ["Workflow Automation", "Real-time Dashboards", "Reporting & Analytics", "AI & API Integrations"],
    art: "ai",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    problem: "Full-featured online store with payments and inventory.",
    solution: "React - Node.js - MongoDB",
    variant: "shop",
  },
  {
    title: "Water Industry ERP",
    problem: "Complete ERP for water treatment business operations.",
    solution: "Next.js - PostgreSQL - Tailwind",
    variant: "erp",
  },
  {
    title: "Corporate Website",
    problem: "Modern corporate website for a lead generation firm.",
    solution: "WordPress - PHP - Elementor",
    variant: "site",
  },
  {
    title: "Service Booking Platform",
    problem: "Appointment and booking system with payment integration.",
    solution: "Vue.js - Laravel - MySQL",
    variant: "booking",
  },
];

const process = [
  { step: "01", title: "Discovery", text: "We understand your business, goals, and challenges.", icon: Search },
  { step: "02", title: "Design", text: "We create wireframes and UI/UX that users will love.", icon: PenTool },
  { step: "03", title: "Development", text: "We build scalable, secure, and fast solutions.", icon: Code2 },
  { step: "04", title: "Testing", text: "We test thoroughly to make sure everything works perfectly.", icon: ClipboardCheck },
  { step: "05", title: "Launch", text: "We deploy your solution and ensure smooth rollout.", icon: Rocket },
  { step: "06", title: "Support", text: "We provide ongoing support and improvements.", icon: Headphones },
];

const technologies = ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "Tailwind CSS", "GitHub"];

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
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-ink-950"}`}>
        {title}
      </h2>
      <p className={`mt-3 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}

function SolutionIllustration({ variant }: { variant: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-md bg-[linear-gradient(135deg,#eef4ff,#ffffff_48%,#fff4d8)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgb(var(--color-light-gold)/0.7),transparent_8rem),radial-gradient(circle_at_20%_70%,rgb(var(--color-secondary-navy)/0.12),transparent_7rem)]" />
      <div className="absolute left-7 top-9 h-24 w-32 rounded-md border border-ink-950/10 bg-white shadow-xl">
        <div className="h-6 rounded-t-md bg-ink-950" />
        <div className="space-y-2 p-3">
          <span className="block h-2 w-16 rounded bg-kryptonix-gold/70" />
          <span className="block h-2 w-24 rounded bg-ink-950/12" />
          <span className="block h-2 w-20 rounded bg-ink-950/12" />
        </div>
      </div>
      <div className="absolute right-8 top-12 grid h-24 w-24 place-items-center rounded-full bg-kryptonix-gold/20">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-ink-950 text-sm font-bold text-white">
          {variant === "ai" ? "AI" : variant === "cloud" ? "CL" : variant === "systems" ? "ERP" : "WEB"}
        </div>
      </div>
      <div className="absolute bottom-6 left-24 h-16 w-28 rounded-md border border-kryptonix-gold/30 bg-white/80 shadow-lg" />
    </div>
  );
}

function ProjectMockup({ variant }: { variant: string }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-md bg-[linear-gradient(135deg,#f6f7fb,#d7e0ef)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgb(var(--color-gold-accent)/0.35),transparent_8rem)]" />
      <div className="absolute left-8 top-8 h-28 w-40 rounded-md border border-white/70 bg-ink-950 shadow-2xl">
        <div className="h-5 rounded-t-md bg-white/12" />
        <div className="grid grid-cols-3 gap-2 p-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className={`h-4 rounded ${index % 3 === 0 ? "bg-kryptonix-gold/80" : "bg-white/18"}`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-7 right-8 h-28 w-20 rounded-xl border-[5px] border-ink-950 bg-white shadow-xl">
        <div className="mx-auto mt-2 h-1.5 w-7 rounded-full bg-ink-950/20" />
        <div className="mt-4 space-y-2 px-3">
          <span className="block h-2 rounded bg-kryptonix-gold/80" />
          <span className="block h-2 rounded bg-ink-950/15" />
          <span className="block h-2 rounded bg-ink-950/15" />
        </div>
      </div>
      <div className="absolute bottom-5 left-8 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-950 shadow">
        {variant.toUpperCase()}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Section className="relative overflow-hidden bg-white pb-0 pt-10 sm:pt-14">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_47%,rgba(255,255,255,0.12)_74%)]" />
        <div className="ambient-grid pointer-events-none absolute inset-0 opacity-45" />

        <Container className="relative z-10">
          <div className="grid min-h-[560px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal className="max-w-2xl">
              <span className="inline-flex rounded-full border border-kryptonix-gold/25 bg-white px-4 py-2 text-xs font-semibold text-ink-950 shadow-sm">
                Your Trusted Technology Partner
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[0.98] text-ink-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Building Software That Moves Businesses <span className="text-kryptonix-cyan">Forward</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Custom websites, business systems, automation, cloud solutions, and digital products engineered for growth.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote" showArrow>
                  Get Free Consultation
                </Button>
                <Button href="/portfolio" variant="secondary" className="gap-2">
                  View Our Work <CirclePlay className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative min-h-[420px] overflow-hidden rounded-l-[2rem] border border-ink-950/10 shadow-2xl lg:-mr-12">
              <HeroBackgroundVideo className="opacity-95" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,92,0.12),rgba(8,31,92,0.52))]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <button
                  type="button"
                  className="grid h-20 w-20 place-items-center rounded-full bg-white text-kryptonix-cyan shadow-2xl transition hover:scale-105"
                  aria-label="Play Kryptonix story video"
                >
                  <CirclePlay className="h-10 w-10" aria-hidden="true" />
                </button>
                <p className="mt-5 text-base font-bold">Watch Our Story</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                  See how we help businesses grow through technology.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative z-20 -mb-10 grid gap-3 rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(var(--color-secondary-navy)))] p-5 shadow-2xl sm:grid-cols-2 lg:grid-cols-5 lg:p-7">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 border-white/10 lg:border-r last:lg:border-r-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-kryptonix-cyan/50 text-kryptonix-cyan">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs font-medium text-slate-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-24">
        <Container>
          <Reveal className="grid gap-3 rounded-md border border-ink-950/10 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                <Check className="h-4 w-4 text-kryptonix-cyan" aria-hidden="true" />
                {item}
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-8">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="What We Do"
              title="Solutions That Drive Real Business Results"
              description="We build custom solutions tailored to your unique challenges and goals."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <Reveal key={solution.title} transition={{ delay: index * 0.06 }}>
                  <Link
                    href="/services"
                    className="group block h-full rounded-md border border-ink-950/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <SolutionIllustration variant={solution.art} />
                    <Icon className="mt-6 h-7 w-7 text-kryptonix-cyan" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold text-ink-950">{solution.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="h-3.5 w-3.5 text-kryptonix-cyan" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink-950">
                      Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="px-3 py-0">
        <Container className="rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(3,13,42))] py-10 shadow-2xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">Our Work</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white">Recent Projects</h2>
              <p className="mt-2 text-sm text-slate-300">Real solutions. Real impact.</p>
            </Reveal>
            <Reveal>
              <Button href="/portfolio" variant="secondary" showArrow className="border-white/20 bg-transparent text-white hover:bg-white/10">
                View All Projects
              </Button>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.title} transition={{ delay: index * 0.06 }}>
                <article className="h-full overflow-hidden rounded-md border border-white/15 bg-white/[0.04] shadow-xl">
                  <ProjectMockup variant={project.variant} />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.problem}</p>
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

      <Section className="bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Our Process"
              title="A Simple, Proven Process"
              description="We follow a clear process to deliver quality results on time."
            />
          </Reveal>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
            <div className="absolute left-10 right-10 top-12 hidden h-px bg-kryptonix-cyan/50 xl:block" />
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} transition={{ delay: index * 0.05 }}>
                  <div className="relative text-center">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-ink-950 text-kryptonix-cyan shadow-[0_0_0_1px_rgb(var(--color-gold-accent)/0.4)]">
                      <Icon className="h-9 w-9" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-ink-950">
                      {item.step} {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="px-3 py-0">
        <Container className="rounded-md bg-[linear-gradient(135deg,rgb(var(--color-primary-navy)),rgb(var(--color-secondary-navy)))] py-10 shadow-xl">
          <Reveal>
            <SectionIntro
              eyebrow="Technologies We Work With"
              title="Modern Technologies. Powerful Solutions."
              description="We choose practical tools that make products faster, safer, and easier to maintain."
              light
            />
          </Reveal>
          <Reveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-10">
            {technologies.map((tech) => (
              <div key={tech} className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-black text-ink-950">
                  {tech.slice(0, 2)}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{tech}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">Industries We Serve</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                Solutions for Every Industry
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {industries.map((industry) => {
                  const Icon = industry.icon;

                  return (
                    <div key={industry.title} className="rounded-md border border-ink-950/10 bg-white p-4 text-center shadow-sm">
                      <Icon className="mx-auto h-7 w-7 text-kryptonix-cyan" aria-hidden="true" />
                      <p className="mt-3 text-sm font-semibold leading-5 text-ink-950">{industry.title}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-8 border-ink-950/10 lg:grid-cols-[1fr_0.8fr] lg:border-l lg:pl-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-kryptonix-cyan">Meet The Founder</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950">Hi, I&apos;m Newton Manyisa</h2>
                  <p className="mt-5 text-base leading-7 text-slate-600">
                    I&apos;m a software developer focused on building practical digital solutions that help businesses operate
                    more efficiently, generate more leads, and scale with confidence.
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    With experience building software for different industries, I focus on quality, communication, and results.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button href="https://www.linkedin.com/" variant="secondary" className="gap-2">
                      <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                    </Button>
                    <Button href="/portfolio" showArrow>
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[330px] overflow-hidden rounded-md bg-[linear-gradient(160deg,#f4f6fb,#ffffff)]">
                  <div className="absolute right-4 top-4 grid grid-cols-4 gap-2 opacity-35">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <span key={index} className="h-1.5 w-1.5 rounded-full bg-kryptonix-cyan" />
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-t-full bg-[linear-gradient(180deg,rgb(var(--color-light-gold)/0.35),rgb(var(--color-primary-navy)/0.12))]" />
                  <div className="absolute bottom-0 left-1/2 h-56 w-44 -translate-x-1/2 rounded-t-[5rem] bg-ink-950 shadow-2xl" />
                  <div className="absolute bottom-44 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,#8b5e3c,#d6a879)] shadow-xl" />
                  <div className="absolute bottom-36 left-1/2 h-14 w-28 -translate-x-1/2 rounded-t-full bg-white" />
                  <p className="absolute bottom-6 left-0 right-0 text-center text-sm font-bold text-white">Newton Manyisa</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

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
                <Reveal key={benefit.title} transition={{ delay: index * 0.05 }}>
                  <div className="h-full rounded-md border border-ink-950/10 bg-white p-5 text-center shadow-sm">
                    <Icon className="mx-auto h-8 w-8 text-kryptonix-cyan" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-bold text-ink-950">{benefit.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

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
                <h2 className="mt-2 font-display text-3xl font-semibold text-white">Ready to Transform Your Business?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Whether you need a website, business system, automation platform, or cloud infrastructure, Kryptonix can help.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-sm font-semibold text-white">
                  <a href="tel:+254799425417">0799 425 417</a>
                  <a href="mailto:manyisanewton26@gmail.com">manyisanewton26@gmail.com</a>
                </div>
              </div>
            </Reveal>
            <Reveal className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="/quote" showArrow>
                Book Free Consultation
              </Button>
              <Button href="/contact" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                Get a Quote
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
