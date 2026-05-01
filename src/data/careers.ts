import { BookOpenCheck, Clock3, GraduationCap, HeartHandshake, Laptop, MapPin, Sparkles, Users } from "lucide-react";

export const careerFilters = ["All roles", "Engineering", "Cloud & IT", "Security", "Marketing", "Internships"];

export const openRoles = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Hybrid / Remote",
    type: "Full-time",
    posted: "Coming soon",
    summary: "Build polished, accessible interfaces for web platforms, dashboards, and client-facing digital products.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "IT Support Technician",
    department: "Cloud & IT",
    location: "Nairobi / On-site",
    type: "Full-time",
    posted: "Coming soon",
    summary: "Support clients with troubleshooting, device setup, network issues, remote support, and SLA-backed service requests.",
    skills: ["Helpdesk", "Networking", "Microsoft 365", "Remote support"],
  },
  {
    title: "Cloud Engineer",
    department: "Cloud & IT",
    location: "Hybrid",
    type: "Contract / Full-time",
    posted: "Coming soon",
    summary: "Plan and manage cloud migrations, hosting environments, backups, monitoring, and cost optimisation.",
    skills: ["AWS", "Azure", "Linux", "Cloud security"],
  },
  {
    title: "Digital Marketing Associate",
    department: "Marketing",
    location: "Remote-friendly",
    type: "Full-time",
    posted: "Coming soon",
    summary: "Support SEO, campaign execution, content publishing, analytics reporting, and lead generation workflows.",
    skills: ["SEO", "GA4", "Content", "Social media"],
  },
];

export const careerBenefits = [
  {
    title: "Meaningful client problems",
    description: "Work on systems that help businesses, institutions, and communities operate better.",
    icon: Sparkles,
  },
  {
    title: "Learning culture",
    description: "Grow across software, cloud, cybersecurity, infrastructure, and digital transformation.",
    icon: BookOpenCheck,
  },
  {
    title: "Flexible work mindset",
    description: "Role structure can support remote, hybrid, or on-site delivery depending on client need.",
    icon: Laptop,
  },
  {
    title: "Team ownership",
    description: "Small teams need people who can communicate clearly, take initiative, and own outcomes.",
    icon: Users,
  },
];

export const cultureHighlights = [
  {
    title: "Professional but approachable",
    description: "The company voice is forward-thinking, solution-oriented, and easy to work with.",
    icon: HeartHandshake,
  },
  {
    title: "Growth through delivery",
    description: "Every project is a chance to improve process, documentation, quality, and client trust.",
    icon: Clock3,
  },
  {
    title: "Early talent welcome",
    description: "Internships and graduate programmes are part of the PRD roadmap for talent acquisition.",
    icon: GraduationCap,
  },
  {
    title: "Kenya-first, global-ready",
    description: "Build for local market realities while learning global standards and modern tools.",
    icon: MapPin,
  },
];
