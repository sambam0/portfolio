export const site = {
  name: "Samuel Antoncich",
  role: "Founder of Carnile",
  location: "Stockholm",
  tagline:
    "Building tools that help people write like themselves — and shipping products that grow.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      org: "The Hockey Formula",
      role: "Head of Digital Operations",
      dates: "Oct 2026 – Present",
      href: "https://thehockeyformula.com",
      blurb:
        "Building the online side of former NHL player Taylor Leier's player-development business: the course, the member community, and the funnel and automations that sell them.",
    },
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
      href: "https://momentumlabs.ai/",
      blurb:
        "Started in GTM; moved into product and design.",
    },
    {
      org: "IvyAdmit.ai",
      role: "Growth Intern",
      dates: "Dec 2025 – May 2026",
      href: "https://ivyadmit.ai",
      blurb:
        "Built the content and Instagram funnel to ~2.6M views in month one. Shaped B2B strategy with verbal agreements for 20 pilots; scraped Common App data from 50 colleges.",
    },
    {
      org: "Solvance Business Solutions",
      role: "Founder",
      dates: "Mar 2025 – May 2026",
      href: "https://solvance.net",
      blurb:
        "Agency doing websites, custom builds and AI. Clients included an EY senior partner (iOS app), a Hunter Douglas seller (Meta ads and lead nurture) and local businesses.",
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
        "An agency doing websites, custom builds and AI: an iOS app, Meta funnels, and local business websites.",
    },
  ],
  stack: [
    { name: "Claude", href: "https://claude.ai", icon: "/stack/claude.ai.png" },
    { name: "Cursor", href: "https://cursor.com", icon: "/stack/cursor.com.png" },
    { name: "Obsidian", href: "https://obsidian.md", icon: "/stack/obsidian.md.jpg" },
    { name: "Paper", href: "https://paper.design", icon: "/stack/paper.design.png" },
    { name: "Goldfish", href: "https://goldfish.sh", icon: "/stack/goldfish.sh.png" },
    { name: "Aqua Voice", href: "https://aquavoice.com", icon: "/stack/aquavoice.com.png" },
  ],
  about:
    "Based in Stockholm, building Carnile solo. Participant in Sweden’s Youngest Entrepreneurs.",
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samuel-antoncich-785647358/",
    },
    { label: "GitHub", href: "https://github.com/sambam0" },
    { label: "Instagram", href: "https://www.instagram.com/sam_shumi/" },
    { label: "Last.fm", href: "https://www.last.fm/user/sams0nyte" },
    { label: "X", href: "https://x.com/SamuelAntoncich" },
    { label: "Email", href: "mailto:samuel.antoncich@gmail.com" },
  ],
} as const;
