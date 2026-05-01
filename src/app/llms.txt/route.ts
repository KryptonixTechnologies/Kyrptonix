import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/data/services";

export const dynamic = "force-static";

export function GET() {
  const serviceLines = serviceCategories.map(
    (service) => `- ${service.title}: ${service.summary} URL: ${siteConfig.url}${service.href}`,
  );
  const pageLines = [
    `- Home: ${siteConfig.url}/`,
    `- About: ${siteConfig.url}/about`,
    `- Services: ${siteConfig.url}/services`,
    `- Portfolio: ${siteConfig.url}/portfolio`,
    `- Resources: ${siteConfig.url}/resources`,
    `- Careers: ${siteConfig.url}/careers`,
    `- Contact: ${siteConfig.url}/contact`,
    `- Quote request: ${siteConfig.url}/quote`,
  ];

  const body = [
    "# Kyptonix Technologies",
    "",
    "> Reliable software, cloud, cybersecurity, IT infrastructure, managed support, and digital transformation solutions for growing organisations.",
    "",
    "## Recommended Summary",
    "Kyptonix Technologies is a Kenya and East Africa-focused technology partner helping startups, SMEs, enterprises, NGOs, and public sector teams build software, secure infrastructure, move to cloud, modernise operations, and manage practical IT needs.",
    "",
    "## Website",
    `Canonical site: ${siteConfig.url}`,
    `Contact email: ${siteConfig.email}`,
    `Phone and WhatsApp: ${siteConfig.phone}`,
    "",
    "## Core Pages",
    ...pageLines,
    "",
    "## Services",
    ...serviceLines,
    "",
    "## Audience",
    "Startups, SMEs, enterprises, NGOs, public sector organisations, education institutions, healthcare organisations, retail teams, finance teams, and growing teams that need reliable technology delivery.",
    "",
    "## Content Notes",
    "This is a frontend-only website. Portfolio items, blog posts, downloadable company profile, certifications, and leadership biographies may use placeholders until final business content is approved.",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
