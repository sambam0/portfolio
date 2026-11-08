"use client";

import { useEffect, useState } from "react";
import { email } from "./data";

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Stockholm",
  hour: "2-digit",
  minute: "2-digit",
});

export function StockholmTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(timeFormat.format(new Date()));
    update();
    const id = setInterval(update, 10_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

export function Avatar({ size = 56 }: { size?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="grid shrink-0 place-items-center rounded-full bg-foreground font-display italic text-background"
    >
      SA
    </div>
  );
}

export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`proto-press relative inline-flex h-9 items-center rounded-full border border-line bg-background px-4 text-sm text-foreground hover:border-foreground/30 ${className}`}
    >
      <span className="proto-swap" data-show={!copied}>
        Copy email
      </span>
      <span className="proto-swap absolute inset-0 grid place-items-center" data-show={copied} aria-live="polite">
        {copied ? "Copied ✓" : ""}
      </span>
    </button>
  );
}
