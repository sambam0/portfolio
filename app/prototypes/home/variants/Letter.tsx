import { Stack } from "@/components/Stack";
import { elsewhere, experience } from "../data";
import { Avatar, CopyEmail, StockholmTime } from "../parts";

const refs = {
  carnile: {
    href: "https://carnile.com",
    title: "Carnile",
    metric: "Top 10 · only solo team",
    body: "Socratic writing coach for college essays. Asks, never writes for you.",
  },
  ivy: {
    href: "https://ivyadmit.ai",
    title: "IvyAdmit.ai",
    metric: "~2.6M views",
    body: "Built the content and Instagram funnel in month one.",
  },
  momentum: {
    href: "https://momentumlabs.ai/",
    title: "Momentum Labs",
    metric: "Co-founder · 2026",
    body: "Started in GTM, moved into product and design.",
  },
  solvance: {
    href: "https://solvance.net",
    title: "Solvance",
    metric: "Web · builds · AI",
    body: "Agency for websites, custom builds and AI. Clients from an EY senior partner to local businesses.",
  },
  instagram: {
    href: "https://www.instagram.com/sam_shumi/",
    title: "@sam_shumi",
    metric: "3.6M views",
    body: "Messing around, on purpose.",
  },
} as const;

function Ref({ id, children }: { id: keyof typeof refs; children: React.ReactNode }) {
  const ref = refs[id];
  return (
    <span className="ltr-ref relative inline-block">
      <a
        href={ref.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline decoration-line decoration-1 underline-offset-[5px] transition-colors duration-150 hover:decoration-accent"
      >
        {children}
      </a>
      <span
        aria-hidden="true"
        className="ltr-card absolute left-0 top-full z-20 mt-2 block w-64 rounded-xl border border-line bg-background/95 p-3.5 font-sans text-sm shadow-[0_12px_32px_-12px_rgba(20,20,20,0.25)] backdrop-blur-xl"
      >
        <span className="flex items-baseline justify-between gap-3">
          <span className="font-medium text-foreground">{ref.title}</span>
          <span className="font-mono text-[0.72rem] text-accent">{ref.metric}</span>
        </span>
        <span className="mt-1.5 block leading-snug text-muted">{ref.body}</span>
      </span>
    </span>
  );
}

export function LetterVariant() {
  return (
    <main className="mx-auto w-full max-w-[600px] px-6 pb-32 pt-16 sm:pt-24">
      <header className="flex items-center gap-4">
        <Avatar size={44} />
        <div className="text-sm">
          <p className="font-medium">Samuel Antoncich</p>
          <p className="text-muted">
            Stockholm, <StockholmTime />
          </p>
        </div>
      </header>

      <article className="mt-14 space-y-6 font-display text-[1.3rem] leading-[1.55] tracking-[-0.003em] text-foreground/90 sm:text-[1.4rem]">
        <p>Hi, I’m Sam. I build products and then figure out how to get them in front of people.</p>
        <p>
          Right now that’s <Ref id="carnile">Carnile</Ref>, a writing coach that asks questions
          instead of writing your college essay for you, so it still sounds like you. I built it solo
          and placed top 10 at a Stockholm hackathon as the only solo team.
        </p>
        <p>
          Before that I ran growth at <Ref id="ivy">IvyAdmit</Ref>, co-founded{" "}
          <Ref id="momentum">Momentum Labs</Ref>, and ran{" "}
          <Ref id="solvance">Solvance</Ref>, an agency doing websites, custom builds and AI.
        </p>
        <p>
          On the side I post on <Ref id="instagram">Instagram</Ref>. 3.6M views so far, mostly from
          messing around. I once raised a company’s lead re-engagement by 20,000%. I’m told that’s a
          lot.
        </p>
      </article>

      <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
        <CopyEmail />
        {elsewhere.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-sm text-muted">What I use</h2>
        <div className="mt-3">
          <Stack />
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-6">
        <h2 className="text-sm text-muted">For skimmers</h2>
        <ul className="mt-3 text-sm">
          {experience.map((job) => (
            <li key={job.org + job.role} className="flex items-baseline gap-3 py-1.5">
              <span className="font-medium">{job.name}</span>
              <span className="truncate text-muted">{job.role}</span>
              <span className="mx-1 flex-1 translate-y-[-3px] border-b border-dotted border-line" />
              <span className="tabular-nums text-muted">{job.years}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
