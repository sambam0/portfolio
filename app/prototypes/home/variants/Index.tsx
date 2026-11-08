"use client";

import { useState } from "react";
import { Stack } from "@/components/Stack";
import { elsewhere, experience, oneLiner } from "../data";
import { Avatar, CopyEmail, StockholmTime } from "../parts";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 sm:grid-cols-[88px_1fr] sm:gap-8">
      <h2 className="pt-px text-sm text-muted">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

function ExperienceRow({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false);
  const panelId = `idx-${job.name.replace(/\W/g, "")}`;

  return (
    <li className="border-b border-line last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="group -mx-2 grid w-[calc(100%+1rem)] grid-cols-[1fr_auto] items-baseline gap-x-4 rounded-md px-2 py-3 text-left transition-colors duration-150 hover:bg-surface active:bg-line/50"
      >
        <span className="min-w-0">
          <span className="font-medium text-foreground">{job.name}</span>
          <span className="text-muted"> · {job.role}</span>
        </span>
        <span className="flex items-baseline gap-3 text-sm tabular-nums text-muted">
          <span className="hidden font-mono text-[0.8rem] text-accent sm:inline">{job.metric}</span>
          <span className="w-[4.25rem] whitespace-nowrap text-right">{job.years}</span>
          <span aria-hidden="true" className="idx-chevron inline-block w-3 text-center text-muted/70">
            +
          </span>
        </span>
      </button>
      <div id={panelId} className="idx-panel" data-open={open} inert={!open}>
        <div className="overflow-hidden">
          <div className="pb-4 pr-8">
            <p className="font-mono text-[0.8rem] text-accent sm:hidden">{job.metric}</p>
            <p className="mt-1 leading-relaxed text-muted sm:mt-0">{job.blurb}</p>
            <a
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground"
            >
              {job.domain} ↗
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export function IndexVariant() {
  return (
    <main className="mx-auto w-full max-w-[640px] px-6 pb-32 pt-16 sm:pt-24">
      <header className="flex flex-col items-center gap-5 text-center">
        <Avatar />
        <div>
          <h1 className="text-xl font-semibold tracking-[-0.01em]">Samuel Antoncich</h1>
          <p className="mt-1 text-muted">{oneLiner}</p>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          Stockholm · <StockholmTime /> · 59.33° N
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm">
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
      </header>

      <div className="mt-16 flex flex-col gap-14">
        <Section label="Experience">
          <ul className="-mt-3">
            {experience.map((job) => (
              <ExperienceRow key={job.org + job.role} job={job} />
            ))}
          </ul>
        </Section>

        <Section label="Stack">
          <Stack />
        </Section>

        <Section label="About">
          <p className="leading-relaxed text-muted">
            Part of Sweden’s Youngest Entrepreneurs. I like starting from zero: building the product
            myself, then doing the unglamorous part of getting people to care about it.
          </p>
        </Section>
      </div>

      <footer className="mt-24 text-sm text-muted">
        Made in Stockholm. Re-engagement up 20,000% — results not typical.
      </footer>
    </main>
  );
}
