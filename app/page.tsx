import { Header } from "@/components/Header";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <p className="text-sm font-medium tracking-wide text-accent">
            {site.location}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 font-display text-2xl italic text-muted sm:text-3xl">
            {site.role}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#experience"
              className="inline-flex items-center bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-85"
            >
              See experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-foreground/20 px-5 py-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 border-t border-line bg-surface/50"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Experience
            </h2>
            <ul className="mt-12 divide-y divide-line">
              {site.experience.map((job) => (
                <li
                  key={`${job.org}-${job.role}`}
                  className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-8"
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {job.href ? (
                        <a
                          href={job.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {job.org}
                        </a>
                      ) : (
                        <span className="text-lg font-medium">{job.org}</span>
                      )}
                      <span className="text-muted">·</span>
                      <span className="text-muted">{job.role}</span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                      {job.blurb}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-muted sm:pt-1 sm:text-right">
                    {job.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Work
            </h2>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
              {site.work.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent">
                      {project.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <span className="mt-4 inline-block text-sm text-accent">
                      Visit site →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-line bg-surface/50"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              About
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              {site.about}
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Contact
            </h2>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-lg">
              {site.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-muted sm:px-8">
          <span>{site.name}</span>
          <span>{site.location}</span>
        </div>
      </footer>
    </>
  );
}
