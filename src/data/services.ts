
import {
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  Headphones,
  Network,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";

export const primaryServices = [
  {
    title: "Business Website Development",
    slug: "business-website-development",
    category: "Primary",
    href: "/services/business-website-development/",
    description:
      "Professional websites designed to help businesses establish credibility, explain their services clearly, and generate enquiries.",
    summary:
      "We design and develop responsive business websites around your organisation, customers, goals, and growth plans.",
    offerings: [
      "Corporate websites",
      "Organisation websites",
      "Landing pages",
      "Website redesign",
      "UI/UX design",
      "SEO-ready website structures",
    ],
    tools: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Web3Forms",
      "Google Analytics",
    ],
    audiences: [
      "Startups establishing their online presence",
      "SMEs improving their digital visibility",
      "Organisations that need a professional website",
    ],
    benefits: [
      "Improve online credibility",
      "Make services easier to understand",
      "Generate more qualified enquiries",
    ],
    icon: Code2,
  },

  {
    title: "E-commerce Website Development",
    slug: "e-commerce-website-development",
    category: "Primary",
    href: "/services/e-commerce-website-development/",
    description:
      "E-commerce websites and online stores that help businesses showcase products, manage orders, and support digital payments.",
    summary:
      "We build practical online shopping experiences with product management, customer journeys, payments, and business workflows in mind.",
    offerings: [
      "Online stores",
      "Product catalogues",
      "Shopping carts",
      "Order management",
      "Payment integrations",
      "Supplier and marketplace workflows",
    ],
    tools: [
      "React",
      "Next.js",
      "Django",
      "Python",
      "M-Pesa",
      "PayPal",
    ],
    audiences: [
      "Retail businesses moving online",
      "Product-based SMEs",
      "Businesses building supplier marketplaces",
    ],
    benefits: [
      "Sell products online",
      "Simplify order management",
      "Make purchasing easier for customers",
    ],
    icon: ShoppingCart,
  },

  {
    title: "Custom Business Systems",
    slug: "custom-business-systems",
    category: "Primary",
    href: "/services/custom-business-systems/",
    description:
      "Custom applications and business systems that organise operations, information, workflows, and reporting.",
    summary:
      "We build systems around the way your organisation actually works instead of forcing your team to adapt to unsuitable generic software.",
    offerings: [
      "Custom business applications",
      "Customer management systems",
      "Inventory systems",
      "Dashboards and reporting",
      "Booking and service systems",
      "Workflow platforms",
    ],
    tools: [
      "React",
      "Next.js",
      "Django",
      "Python",
      "PostgreSQL",
      "APIs",
    ],
    audiences: [
      "SMEs digitising operations",
      "Growing organisations with manual processes",
      "Businesses requiring tailored software",
    ],
    benefits: [
      "Reduce manual processes",
      "Organise business information",
      "Improve operational visibility",
    ],
    icon: BriefcaseBusiness,
  },

  {
    title: "Business Automation & AI Integrations",
    slug: "business-automation-ai",
    category: "Primary",
    href: "/services/business-automation-ai/",
    description:
      "Business automation and practical AI integrations that reduce repetitive work and connect everyday workflows.",
    summary:
      "We identify repetitive processes and introduce appropriate automation, integrations, dashboards, and AI-assisted workflows.",
    offerings: [
      "Workflow automation",
      "API integrations",
      "AI-assisted workflows",
      "Chatbots",
      "Document workflows",
      "Automated notifications",
    ],
    tools: [
      "Python",
      "OpenAI integrations",
      "APIs",
      "Webhooks",
      "Automation platforms",
      "Chatbots",
    ],
    audiences: [
      "Operations-heavy businesses",
      "Teams handling repetitive processes",
      "Organisations exploring practical AI adoption",
    ],
    benefits: [
      "Reduce repetitive work",
      "Improve process consistency",
      "Give teams more time for higher-value work",
    ],
    icon: Workflow,
  },

  {
    title: "Cloud Hosting & Managed IT Support",
    slug: "cloud-managed-it-support",
    category: "Primary",
    href: "/services/cloud-managed-it-support/",
    description:
      "Cloud hosting, infrastructure support, monitoring, maintenance, backup, and managed IT services for growing organisations.",
    summary:
      "We help organisations maintain dependable technology environments through hosting, cloud services, technical support, monitoring, and maintenance.",
    offerings: [
      "Cloud hosting",
      "Cloud migration",
      "Website and application hosting",
      "Backup and recovery planning",
      "Remote technical support",
      "IT monitoring and maintenance",
    ],
    tools: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Cloudflare",
      "Docker",
      "Linux",
    ],
    audiences: [
      "SMEs without large internal IT teams",
      "Businesses modernising infrastructure",
      "Organisations needing dependable technical support",
    ],
    benefits: [
      "Improve technology reliability",
      "Reduce avoidable downtime",
      "Get dependable technical support",
    ],
    icon: Cloud,
  },
];

export const additionalCapabilities = [
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    category: "Additional Capability",
    href: "/services/cybersecurity/",
    description:
      "Security reviews, protection, awareness, and risk-management support for organisations handling important digital information.",
    summary:
      "Strengthen your organisation's security posture and improve preparedness for common digital risks.",
    offerings: [
      "Security reviews",
      "Risk assessments",
      "Endpoint protection",
      "Security awareness",
      "Backup readiness",
      "Compliance guidance",
    ],
    tools: [
      "EDR",
      "SIEM",
      "Firewalls",
      "VPN",
      "ISO 27001",
      "Kenya Data Protection Act guidance",
    ],
    audiences: [
      "Businesses handling sensitive information",
      "Organisations improving security readiness",
      "Teams preparing for compliance requirements",
    ],
    benefits: [
      "Reduce exposure to common risks",
      "Improve security awareness",
      "Strengthen organisational preparedness",
    ],
    icon: ShieldCheck,
  },

  {
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    category: "Additional Capability",
    href: "/services/it-infrastructure/",
    description:
      "Networks, servers, workplace technology, infrastructure planning, and IT environment support.",
    summary:
      "Build and maintain the technology foundation your organisation relies on for everyday operations.",
    offerings: [
      "Network design",
      "Server setup",
      "Hardware support",
      "IT audits",
      "Office connectivity",
      "Infrastructure planning",
    ],
    tools: [
      "Cisco",
      "MikroTik",
      "Fortinet",
      "VMware",
      "Hyper-V",
      "Linux",
    ],
    audiences: [
      "Growing offices",
      "Distributed teams",
      "Organisations improving their IT environment",
    ],
    benefits: [
      "Improve reliability",
      "Reduce infrastructure issues",
      "Make IT environments easier to manage",
    ],
    icon: Network,
  },

  {
    title: "Digital Transformation & Advisory",
    slug: "digital-transformation",
    category: "Additional Capability",
    href: "/services/digital-transformation/",
    description:
      "Digital transformation planning, process improvement, systems integration, analytics, and technology advisory.",
    summary:
      "Connect business goals with practical technology improvements and a clear digital roadmap.",
    offerings: [
      "Digital transformation planning",
      "Process improvement",
      "Systems integration",
      "Business dashboards",
      "Technology advisory",
      "Digital operating models",
    ],
    tools: [
      "Power BI",
      "APIs",
      "Dashboards",
      "Cloud platforms",
      "Automation tools",
      "Analytics",
    ],
    audiences: [
      "Growing organisations",
      "Leadership teams",
      "Businesses modernising operations",
    ],
    benefits: [
      "Improve visibility",
      "Connect disconnected systems",
      "Make better technology decisions",
    ],
    icon: Sparkles,
  },

  {
    title: "IoT & Emerging Technology",
    slug: "iot-emerging-tech",
    category: "Additional Capability",
    href: "/services/iot-emerging-tech/",
    description:
      "Exploration, prototyping, and integration of connected devices and emerging technologies.",
    summary:
      "Explore practical applications of connected devices and emerging technologies for specific operational needs.",
    offerings: [
      "IoT development",
      "Smart systems",
      "Device dashboards",
      "Sensor integrations",
      "Emerging technology prototypes",
    ],
    tools: [
      "MQTT",
      "Arduino",
      "Raspberry Pi",
      "Sensors",
      "Web APIs",
    ],
    audiences: [
      "Innovation teams",
      "Industrial projects",
      "Organisations exploring connected technology",
    ],
    benefits: [
      "Explore new technology opportunities",
      "Connect physical operations",
      "Create new sources of operational data",
    ],
    icon: Building2,
  },

  {
    title: "Training & Capacity Building",
    slug: "training-capacity-building",
    category: "Additional Capability",
    href: "/services/training-capacity-building/",
    description:
      "Technology training, user enablement, workshops, and capacity-building programmes.",
    summary:
      "Help teams and learners develop the practical skills required to adopt and use technology effectively.",
    offerings: [
      "Corporate ICT training",
      "Software user training",
      "Technology workshops",
      "Bootcamps",
      "STEM programmes",
      "Digital skills training",
    ],
    tools: [
      "Microsoft",
      "AWS",
      "Google Cloud",
      "Learning platforms",
      "Practical labs",
    ],
    audiences: [
      "Corporate teams",
      "Students and graduates",
      "Organisations adopting new systems",
    ],
    benefits: [
      "Increase technology adoption",
      "Build internal capability",
      "Reduce user-support friction",
    ],
    icon: GraduationCap,
  },

  {
    title: "Public Sector Solutions",
    slug: "government-public-sector",
    category: "Additional Capability",
    href: "/services/government-public-sector/",
    description:
      "Digital platforms, integrations, information systems, and technology support for public-sector environments.",
    summary:
      "Support public institutions with practical digital services and information-management solutions.",
    offerings: [
      "Digital service platforms",
      "Information systems",
      "Systems integrations",
      "GIS solutions",
      "Public-sector technology advisory",
    ],
    tools: [
      "APIs",
      "GIS tools",
      "Secure hosting",
      "Dashboards",
      "Information systems",
    ],
    audiences: [
      "Government agencies",
      "County institutions",
      "Public-service programmes",
    ],
    benefits: [
      "Improve service delivery",
      "Organise information",
      "Support digital service initiatives",
    ],
    icon: Building2,
  },
];

export const serviceCategories = [
  ...primaryServices,
  ...additionalCapabilities,
];

export const serviceProcess = [
  "Discovery and scoping",
  "Solution design",
  "Implementation",
  "Testing and handover",
  "Support and optimisation",
];

export const serviceFaqs = [
  {
    question: "What does Kryptonix Technologies specialise in?",
    answer:
      "Kryptonix Technologies primarily focuses on business website development, e-commerce website development, custom business systems, business automation and AI integrations, and cloud hosting and managed IT support.",
  },
  {
    question: "Does Kryptonix offer services beyond its primary focus?",
    answer:
      "Yes. Cybersecurity, IT infrastructure, digital transformation advisory, IoT and emerging technology, training, and public-sector solutions are available as additional capabilities depending on the organisation's needs and project requirements.",
  },
  {
    question: "Can Kryptonix help if we are not sure which service we need?",
    answer:
      "Yes. The first step is a discovery conversation where we clarify the business problem, priorities, users, budget, and desired outcome before recommending a suitable solution.",
  },
  {
    question: "Do you support both small businesses and larger organisations?",
    answer:
      "Yes. Project scope can be adapted to the organisation's needs, resources, complexity, and growth plans.",
  },
];

