import { site } from "@/content/site";

export const email = "samuel.antoncich@gmail.com";

export const oneLiner = "I build products and get them in front of people.";

export const now =
  "Building Carnile solo — a Socratic writing coach that helps students write college essays that still sound like them.";

const metrics: Record<string, string> = {
  Carnile: "Top 10 · solo",
  Instagram: "3.6M views",
  "Momentum Labs": "GTM → product",
  "IvyAdmit.ai": "2.6M views",
  "Solvance Business Solutions": "Web · builds · AI",
  "Econocorp Inc.": "2× build rate",
};

const shortOrg: Record<string, string> = {
  "Solvance Business Solutions": "Solvance",
  "Econocorp Inc.": "Econocorp",
};

function years(dates: string) {
  const found = dates.match(/\d{4}/g) ?? [];
  const start = found[0];
  if (dates.includes("Present")) return `${start}–`;
  const end = found[1];
  if (!end || end === start) return start;
  return `${start}–${end.slice(2)}`;
}

function domain(href: string) {
  return new URL(href).hostname.replace(/^www\./, "");
}

const shortRole: Record<string, string> = {
  "Internal Sales and Engineering Intern": "Sales & Eng. Intern",
  "Head of Digital Operations": "Head of Digital Ops",
};

export const experience = site.experience.map((job) => ({
  ...job,
  name: shortOrg[job.org] ?? job.org,
  role: shortRole[job.role] ?? job.role,
  metric: metrics[job.org],
  years: years(job.dates),
  domain: domain(job.href),
}));

export const stats = [
  {
    value: "3.6M",
    label: "views on Instagram",
    note: "Mostly from messing around.",
    href: "https://www.instagram.com/sam_shumi/",
  },
  {
    value: "Top 10",
    label: "Stockholm hackathon",
    note: "The only solo team there.",
    href: "https://carnile.com",
  },
  {
    value: "20",
    label: "B2B pilots lined up",
    note: "IvyAdmit. Verbal agreements, as an intern.",
    href: "https://ivyadmit.ai",
  },
  {
    value: "20,000%",
    label: "lead re-engagement",
    note: "Econocorp. Not a typo.",
    href: "https://www.econocorp.com",
  },
];

export const elsewhere = site.contact.filter((c) => !c.href.startsWith("mailto:"));
