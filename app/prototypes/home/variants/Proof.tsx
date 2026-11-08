import type { CSSProperties } from "react";
import { Stack } from "@/components/Stack";
import { elsewhere, experience, oneLiner, stats } from "../data";
import { Avatar, CopyEmail, StockholmTime } from "../parts";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export function ProofVariant() {
  return (
    <main className="mx-auto w-full max-w-[760px] px-6 pb-32 pt-16 sm:pt-20">
      <header className="proof-in flex flex-wrap items-center justify-between gap-6" style={stagger(0)}>
        <div className="flex items-center gap-4">
          <Avatar size={52} />
          <div>
            <h1 className="text-lg font-semibold tracking-[-0.01em]">Samuel Antoncich</h1>
            <p className="text-sm text-muted">{oneLiner}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span className="font-mono text-xs uppercase tracking-[0.08em]">
            STHLM <StockholmTime />
          </span>
          <CopyEmail />
        </div>
      </header>

      <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        {stats.map((stat, i) => (
          <li key={stat.label} className="proof-in bg-background" style={stagger(i + 1)}>
            <a
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-4 transition-colors duration-150 hover:bg-surface active:bg-line/40 sm:p-5"
            >
              <p className="font-display text-[2rem] leading-none tracking-[-0.03em] tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium">{stat.label}</p>
              <p className="mt-1 text-[0.8rem] leading-snug text-muted">{stat.note}</p>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://carnile.com"
        target="_blank"
        rel="noopener noreferrer"
        className="proof-in proto-press group mt-6 flex items-center justify-between gap-6 rounded-2xl bg-foreground p-6 text-background"
        style={stagger(5)}
      >
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-background/55">
            Building now
          </p>
          <p className="mt-2 font-display text-2xl tracking-[-0.01em]">Carnile</p>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-background/70">
            A Socratic writing coach for college essays. It asks the questions; you write the essay.
          </p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>

      <section className="proof-in mt-16" style={stagger(6)}>
        <h2 className="text-sm text-muted">Experience</h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <li key={job.org + job.role}>
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4 transition-colors duration-150 hover:bg-surface/60 sm:grid-cols-[140px_1fr_auto]"
              >
                <span className="col-start-1 row-start-1 font-medium">{job.name}</span>
                <span className="col-span-2 col-start-1 row-start-2 text-sm leading-relaxed text-muted sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  <span className="text-foreground">{job.role}.</span> {job.blurb}
                </span>
                <span className="col-start-2 row-start-1 whitespace-nowrap text-sm tabular-nums text-muted sm:col-start-3">
                  {job.years}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="proof-in mt-16" style={stagger(7)}>
        <h2 className="text-sm text-muted">Stack</h2>
        <div className="mt-4">
          <Stack />
        </div>
      </section>

      <footer className="proof-in mt-14 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={stagger(8)}>
        {elsewhere.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-foreground"
          >
            {link.label} ↗
          </a>
        ))}
        <span className="ml-auto text-muted">Sweden’s Youngest Entrepreneurs</span>
      </footer>
    </main>
  );
}
