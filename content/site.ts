export const site = {
  name: "Samuel Antoncich",
  role: "Founder of Carnile",
  location: "Stockholm",
  tagline:
    "Building tools that help people write like themselves — and shipping products that grow.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      org: "Carnile",
      role: "Founder",
      dates: "Sep 2026 – Present",
      href: "https://carnile.com",
      blurb:
        "Socratic writing tool for college essays. Built solo; top 10 at a Stockholm hackathon as the only solo team.",
    },
    {
      org: "Instagram",
      role: "Content Creator",
      dates: "Aug 2025 – Present",
      href: "https://www.instagram.com/sam_shumi/",
      blurb: "3.6M views. Messing around.",
    },
    {
      org: "Momentum Labs",
      role: "Co-Founder",
      dates: "Jun 2026 – Jul 2026",
      href: "https://admissionsos.ai",
      blurb:
        "Started in GTM; moved into product and design. Left over creative differences.",
    },
    {
      org: "IvyAdmit.ai",
      role: "Growth Intern",
      dates: "Dec 2025 – May 2026",
      href: "https://ivyadmit.ai",
      blurb:
        "Built the content and Instagram funnel to ~2.6M views and $2K MRR in month one. Shaped B2B strategy with verbal agreements for 20 pilots; scraped Common App data from 50 colleges.",
    },
    {
      org: "Solvance Business Solutions",
      role: "Founder",
      dates: "Mar 2025 – May 2026",
      href: "https://solvance.net",
      blurb:
        "Wine-menu iOS app for an EY senior partner ($4K). Meta ads and lead nurture for a Hunter Douglas seller ($700). Local-business sites at $400 MRR.",
    },
    {
      org: "Econocorp Inc.",
      role: "Internal Sales and Engineering Intern",
      dates: "Jun 2025 – Jul 2025",
      href: "https://www.econocorp.com",
      blurb:
        "Assembled $50,000 packaging machines at twice the expected rate. Organized customer data and raised lead re-engagement by 20,000%.",
    },
  ],
  work: [
    {
      name: "Carnile",
      href: "https://carnile.com",
      description:
        "A Socratic writing coach that helps applicants turn their own ideas into stronger essays — without sounding like AI.",
    },
    {
      name: "Solvance",
      href: "https://solvance.net",
      description:
        "Agency work spanning product, ads, and sites: wine-menu scanner, Meta funnels, and local business websites.",
    },
  ],
  about:
    "Based in Stockholm, building Carnile solo. Participant in Sweden’s Youngest Entrepreneurs.",
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samuel-antoncich-785647358/",
    },
    { label: "GitHub", href: "https://github.com/sambam0" },
    { label: "X", href: "https://x.com/SamuelAntoncich" },
    { label: "Email", href: "mailto:samuel.antoncich@gmail.com" },
  ],
} as const;
