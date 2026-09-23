import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {site.name}
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm text-muted"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
