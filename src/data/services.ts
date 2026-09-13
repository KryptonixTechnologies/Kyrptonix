import {
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  Headphones,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";

export const serviceCategories = [
  {
    title: "Software Development",
    slug: "software-development",
    category: "Build",
    href: "/services/software-development/",
    description:
      "Custom software development in Kenya for web applications, business systems, APIs, SaaS products, mobile apps, and digital platforms.",
    summary:
      "Plan, design, build, test, and evolve software that fits your workflows instead of forcing your team around generic tools.",
    offerings: [
      "Custom software development",
      "Business systems",
      "Web applications",
      "API integrations",
      "SaaS products",
      "Testing and QA",
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Flutter",
      "PostgreSQL",
    ],
    audiences: [
      "Startups building MVPs",
      "SMEs digitising operations",
      "Enterprises modernising systems",
    ],
    benefits: [
      "Own your workflow",
      "Reduce manual work",
      "Launch faster with scalable architecture",
    ],
    icon: Code2,
  },
  {
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    category: "Operate",
    href: "/services/it-infrastructure/",
    description:
      "IT infrastructure services in Kenya covering networks, servers, hardware, data centres, audits, and unified communications.",
    summary:
      "Design and maintain the physical and virtual IT foundation your organisation depends on every day.",
    offerings: [
      "Network design",
      "Server setup",
      "Hardware supply",
      "Data centre solutions",
      "IT audits",
      "VoIP systems",
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
      "Institutions with critical infrastructure",
    ],
    benefits: [
      "Improve reliability",
      "Reduce downtime",
      "Make infrastructure easier to support",
    ],
    icon: Network,
  },
  {
    title: "Cloud Services",
    slug: "cloud-services",
    category: "Scale",
    href: "/services/cloud-services/",
    description:
      "Cloud services in Kenya including migration, hosting, managed cloud, backup, disaster recovery, security, and optimisation.",
    summary:
      "Move, host, secure, and optimise workloads across cloud platforms with cost and continuity in mind.",
    offerings: [
      "Cloud migration",
      "Managed hosting",
      "Backup and disaster recovery",
      "Multi-cloud planning",
      "Cloud security",
      "Cost optimisation",
    ],
    tools: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Cloudflare",
      "Docker",
      "Kubernetes",
    ],
    audiences: [
      "Teams outgrowing shared hosting",
      "Businesses modernising infrastructure",
      "Organisations needing resilience",
    ],
    benefits: [
      "Scale on demand",
      "Improve recovery",
      "Control cloud spend",
    ],
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    category: "Protect",
    href: "/services/cybersecurity/",
    description:
      "Cybersecurity services in Kenya covering security audits, penetration testing, endpoint protection, monitoring, and compliance support.",
    summary:
      "Understand risk, close vulnerabilities, and build a security posture your clients and stakeholders can trust.",
    offerings: [
      "Security audits",
      "Penetration testing",
      "Endpoint security",
      "SOC monitoring",
      "Compliance support",
      "Incident response",
    ],
    tools: [
      "EDR",
      "SIEM",
      "Firewalls",
      "VPN",
      "ISO 27001",
      "KDPA",
    ],
    audiences: [
      "Regulated organisations",
      "Teams handling sensitive data",
      "Businesses preparing for compliance",
    ],
    benefits: [
      "Reduce exposure",
      "Improve readiness",
      "Strengthen client trust",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Managed IT Support",
    slug: "managed-it-support",
    category: "Support",
    href: "/services/managed-it-support/",
    description:
      "Managed IT support in Kenya including helpdesk, remote support, on-site support, IT outsourcing, SLAs, and monitoring.",
    summary:
      "Give your team dependable support, proactive monitoring, and predictable IT operations without building a full internal department.",
    offerings: [
      "Helpdesk",
      "Remote support",
      "On-site support",
      "IT outsourcing",
      "SLA contracts",
      "Asset management",
    ],
    tools: [
      "Remote desktop",
      "Ticketing",
      "Monitoring",
      "Microsoft 365",
      "Google Workspace",
      "Endpoint tools",
    ],
    audiences: [
      "SMEs without in-house IT",
      "Teams needing SLA cover",
      "Organisations with hybrid offices",
    ],
    benefits: [
      "Resolve issues faster",
      "Control support costs",
      "Improve staff productivity",
    ],
    icon: Headphones,
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    category: "Transform",
    href: "/services/digital-transformation/",
    description:
      "Digital transformation services in Kenya covering business automation, ERP, CRM, AI, analytics, advisory, and document workflows.",
    summary:
      "Replace slow manual processes with connected systems, automation, dashboards, and practical digital operating models.",
    offerings: [
      "Process automation",
      "ERP implementation",
      "CRM rollout",
      "AI solutions",
      "Dashboards",
      "Digital advisory",
    ],
    tools: [
      "Power BI",
      "Tableau",
      "Odoo",
      "HubSpot",
      "Zoho",
      "Power Automate",
    ],
    audiences: [
      "Operations-heavy businesses",
      "Leadership teams needing visibility",
      "Organisations changing how work gets done",
    ],
    benefits: [
      "Increase visibility",
      "Automate repetitive work",
      "Improve decision-making",
    ],
    icon: Workflow,
  },
  {
    title: "Web & Digital Solutions",
    slug: "web-digital-solutions",
    category: "Grow",
    href: "/services/web-digital-solutions/",
    description:
      "Website development, e-commerce website development, UI/UX design, SEO optimization, and digital solutions for businesses in Kenya.",
    summary:
      "Build a professional online presence that helps your business attract customers, generate leads, build trust, and improve online visibility.",
    offerings: [
      "Business website development",
      "E-commerce website development",
      "Responsive website design",
      "UI/UX design",
      "SEO optimization",
      "Digital marketing",
    ],
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Figma",
      "Shopify",
      "WooCommerce",
      "Google Analytics 4",
    ],
    audiences: [
      "Small and medium-sized businesses in Kenya",
      "Businesses needing professional websites",
      "E-commerce businesses selling online",
      "Companies looking to improve online visibility",
    ],
    benefits: [
      "Build credibility online",
      "Generate more qualified leads",
      "Improve search visibility",
      "Reach customers on mobile devices",
      "Make services easier for customers to find",
    ],
    icon: Sparkles,
  },
  {
    title: "Enterprise Solutions",
    slug: "enterprise-solutions",
    category: "Systemise",
    href: "/services/enterprise-solutions/",
    description:
      "Enterprise software solutions in Kenya including ERP, HRMS, POS, inventory, fleet, school, health, and property management systems.",
    summary:
      "Implement or customise operational platforms that bring finance, HR, inventory, sales, and sector workflows together.",
    offerings: [
      "ERP systems",
      "HRMS",
      "POS systems",
      "Inventory platforms",
      "Fleet systems",
      "Sector-specific systems",
    ],
    tools: [
      "Odoo",
      "SAP",
      "Dynamics",
      "PostgreSQL",
      "APIs",
      "Dashboards",
    ],
    audiences: [
      "Enterprises",
      "Retail and service businesses",
      "Sector-specific institutions",
    ],
    benefits: [
      "Unify operations",
      "Reduce duplicate data",
      "Improve reporting",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "IoT & Emerging Tech",
    slug: "iot-emerging-tech",
    category: "Innovate",
    href: "/services/iot-emerging-tech/",
    description:
      "IoT and emerging technology solutions including smart systems, blockchain, AR/VR, drone integrations, and connected devices.",
    summary:
      "Explore connected devices and emerging technologies with practical prototypes, integrations, and deployment plans.",
    offerings: [
      "IoT development",
      "Smart systems",
      "Blockchain",
      "AR/VR",
      "Drone integrations",
      "Device dashboards",
    ],
    tools: [
      "MQTT",
      "Arduino",
      "Raspberry Pi",
      "Sensors",
      "WebGL",
      "Blockchain APIs",
    ],
    audiences: [
      "Innovation teams",
      "Smart building projects",
      "Industrial and field operations",
    ],
    benefits: [
      "Prototype new ideas",
      "Connect physical operations",
      "Unlock new data sources",
    ],
    icon: Building2,
  },
  {
    title: "Training",
    slug: "training-capacity-building",
    category: "Enable",
    href: "/services/training-capacity-building/",
    description:
      "Corporate ICT training, certification preparation, software user training, workshops, bootcamps, and STEM programs in Kenya.",
    summary:
      "Equip teams, students, and professionals with practical technology skills that improve adoption and capability.",
    offerings: [
      "Corporate ICT training",
      "Certification preparation",
      "Software user training",
      "Workshops",
      "Bootcamps",
      "STEM programs",
    ],
    tools: [
      "CompTIA",
      "Cisco",
      "Microsoft",
      "AWS",
      "Google Cloud",
      "Learning labs",
    ],
    audiences: [
      "Corporate teams",
      "Students and graduates",
      "Users adopting new systems",
    ],
    benefits: [
      "Increase adoption",
      "Build internal capacity",
      "Reduce support friction",
    ],
    icon: GraduationCap,
  },
  {
    title: "Public Sector",
    slug: "government-public-sector",
    category: "Serve",
    href: "/services/government-public-sector/",
    description:
      "Public sector technology solutions including e-government, civic technology, public infrastructure, integrations, and GIS solutions.",
    summary:
      "Support public institutions with citizen-facing platforms, infrastructure, integrations, and transparent digital services.",
    offerings: [
      "E-government",
      "Civic tech",
      "Public infrastructure IT",
      "Government integrations",
      "GIS",
      "Open data",
    ],
    tools: [
      "eCitizen",
      "IFMIS",
      "GHRIS",
      "GIS tools",
      "APIs",
      "Secure hosting",
    ],
    audiences: [
      "Government agencies",
      "County institutions",
      "Public service programmes",
    ],
    benefits: [
      "Improve service delivery",
      "Increase transparency",
      "Support compliant integrations",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Startup & SME Packages",
    slug: "startup-sme-packages",
    category: "Launch",
    href: "/services/startup-sme-packages/",
    description:
      "Technology packages for startups and SMEs in Kenya including MVP development, automation, technology advisory, and growth support.",
    summary:
      "Affordable technology bundles for teams that need to move quickly without overbuilding too early.",
    offerings: [
      "Starter tech bundles",
      "MVP development",
      "Tech advisory",
      "Automation starters",
      "Growth marketing",
      "Support retainers",
    ],
    tools: [
      "Next.js",
      "Cloud hosting",
      "Email hosting",
      "M-Pesa",
      "SEO",
      "Analytics",
    ],
    audiences: [
      "New businesses",
      "Startup founders",
      "SMEs preparing to grow",
    ],
    benefits: [
      "Launch affordably",
      "Validate faster",
      "Get senior tech guidance",
    ],
    icon: Rocket,
  },
];

export const serviceProcess = [
  "Discovery and scoping",
  "Solution design",
  "Implementation",
  "Testing and handover",
  "Support and optimisation",
];

export const serviceFaqs = {
  default: [
    {
      question:
        "Can Kryptonix help if we are not sure what service we need?",
      answer:
        "Yes. The first step is a discovery conversation where we clarify the business problem, urgency, budget, and best-fit solution path.",
    },
    {
      question:
        "Do these services support both small businesses and enterprises?",
      answer:
        "Yes. The site is structured for startups, SMEs, enterprises, NGOs, and public sector organisations, with scope adjusted to need and budget.",
    },
  ],

  "software-development": [
    {
      question: "What types of custom software does Kryptonix develop?",
      answer:
        "Kryptonix Technologies develops custom software solutions for businesses and organisations in Kenya. Projects can include web applications, business systems, APIs, dashboards, SaaS products, workflow solutions, and integrations based on project requirements.",
    },
    {
      question: "Can custom software integrate with existing systems?",
      answer:
        "Yes. Custom software can be designed to integrate with existing business systems, databases, APIs, payment platforms, and other approved third-party services where the project requirements support the integration.",
    },
  ],

  "web-digital-solutions": [
    {
      question:
        "What types of websites does Kryptonix Technologies develop?",
      answer:
        "Kryptonix Technologies develops responsive business websites and e-commerce websites for businesses and organisations in Kenya. The scope can include website design, e-commerce functionality, SEO, analytics, and other integrations based on project requirements.",
    },
    {
      question:
        "Can a Kryptonix website be optimised for search engines?",
      answer:
        "Yes. Website projects can include search engine optimisation, technical SEO improvements, structured content, analytics, and other SEO requirements depending on the project scope.",
    },
  ],

  "cloud-services": [
    {
      question: "What cloud services does Kryptonix provide?",
      answer:
        "Cloud services can include cloud migration, managed hosting, backup and disaster recovery, cloud security, multi-cloud planning, and cost optimisation depending on the organisation's requirements.",
    },
    {
      question: "Can Kryptonix help migrate an existing application to the cloud?",
      answer:
        "Yes. Cloud migration can include assessing the existing environment, planning the migration, moving workloads, testing, improving security, and supporting the resulting cloud environment.",
    },
  ],

  cybersecurity: [
    {
      question: "What cybersecurity services are available?",
      answer:
        "Cybersecurity services can include security assessments, penetration testing, endpoint protection, monitoring, compliance support, and incident response based on the organisation's security requirements.",
    },
    {
      question: "Can cybersecurity services support compliance requirements?",
      answer:
        "Yes. Security assessments and improvement plans can help organisations understand their security posture and address requirements relevant to their operations and applicable regulations.",
    },
  ],

  "managed-it-support": [
    {
      question: "What does managed IT support include?",
      answer:
        "Managed IT support can include helpdesk services, remote and on-site support, monitoring, asset management, IT outsourcing, and support agreements with defined service expectations.",
    },
    {
      question: "Can small businesses outsource their IT support?",
      answer:
        "Yes. Managed IT support can provide SMEs with access to ongoing technical support without requiring them to build a full internal IT department.",
    },
  ],

  "digital-transformation": [
    {
      question: "What is included in digital transformation services?",
      answer:
        "Digital transformation projects can include business process automation, ERP and CRM implementation, dashboards, AI solutions, document workflows, analytics, and technology advisory.",
    },
    {
      question: "Can Kryptonix automate manual business processes?",
      answer:
        "Yes. Business automation projects can identify repetitive manual workflows and replace suitable steps with connected software, integrations, automated processes, and reporting tools.",
    },
  ],

  "enterprise-solutions": [
    {
      question: "What enterprise systems can Kryptonix implement?",
      answer:
        "Enterprise solutions can include ERP, HRMS, POS, inventory, fleet, school, health, property, and other operational systems depending on the organisation's requirements.",
    },
    {
      question: "Can enterprise systems be customised?",
      answer:
        "Yes. Enterprise platforms can be configured or customised around approved business workflows, integrations, reporting requirements, and operational needs.",
    },
  ],

  "it-infrastructure": [
    {
      question: "What IT infrastructure services are available?",
      answer:
        "IT infrastructure services can include network design, server setup, hardware solutions, data centre solutions, IT audits, and unified communications.",
    },
    {
      question: "Can Kryptonix support an organisation's existing infrastructure?",
      answer:
        "Yes. Infrastructure projects can include assessment, configuration, improvement, maintenance, and support of existing environments depending on the project scope.",
    },
  ],

  "iot-emerging-tech": [
    {
      question: "What emerging technology solutions can Kryptonix develop?",
      answer:
        "Projects can include IoT systems, smart technology solutions, device dashboards, blockchain integrations, AR/VR experiences, and other emerging technology applications.",
    },
    {
      question: "Can an IoT project start with a prototype?",
      answer:
        "Yes. IoT and emerging technology projects can begin with a practical prototype or proof of concept before moving toward a larger deployment.",
    },
  ],

  "training-capacity-building": [
    {
      question: "What technology training does Kryptonix provide?",
      answer:
        "Training can include corporate ICT programmes, certification preparation, software user training, workshops, bootcamps, and STEM programmes.",
    },
    {
      question: "Can training be customised for an organisation?",
      answer:
        "Yes. Training programmes can be structured around the technologies, roles, skill gaps, and learning objectives identified by the organisation.",
    },
  ],

  "government-public-sector": [
    {
      question: "What technology solutions are available for public institutions?",
      answer:
        "Public sector solutions can include e-government platforms, civic technology, public infrastructure IT, system integrations, GIS solutions, and open-data initiatives.",
    },
    {
      question: "Can public sector systems integrate with existing platforms?",
      answer:
        "Where technically and contractually appropriate, systems can be designed to integrate with existing platforms through approved APIs and other integration methods.",
    },
  ],

  "startup-sme-packages": [
    {
      question: "What are Startup and SME technology packages?",
      answer:
        "These packages are designed for startups and SMEs that need practical technology support such as MVP development, websites, automation, technology advisory, analytics, and ongoing support.",
    },
    {
      question: "Can a startup begin with a smaller project?",
      answer:
        "Yes. Project scope can be structured around the startup's immediate business requirements and then expanded as the business and technology needs grow.",
    },
  ],
};