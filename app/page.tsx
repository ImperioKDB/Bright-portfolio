import Link from "next/link";
import Trace from "@/components/Trace";
import { PROJECTS } from "@/lib/projects";
import { SOCIALS } from "@/lib/socials";

export default function AboutPage() {
  const building = PROJECTS.filter((p) => p.featured);

  return (
    <div className="animate-rise">
      <p className="entry-tag mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-phosphor" />
        STATUS: SHIPPING
      </p>

      <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        Hey, I&apos;m Happy
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        Solo developer working at the intersection of Next.js and Solana/Anchor.
        I build tools for Nigerian university contexts — treasury systems,
        exam prep, and everything in between — and study physics on the side.
        No desktop; every deploy leaves through a Colab script and lands on
        GitHub.
      </p>

      <section className="mt-16">
        <h2 className="entry-tag mb-8">02 // CURRENTLY BUILDING</h2>
        <Trace
          items={building.map((p) => ({
            id: p.id,
            status: p.status,
            content: (
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <span className="entry-tag text-phosphor">
                    {p.statusLabel}
                  </span>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ),
          }))}
        />
        <Link
          href="/projects"
          className="mt-2 inline-block font-mono text-xs uppercase tracking-widest text-copper hover:underline"
        >
          Full archive →
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="entry-tag mb-6">03 // FIND ME ON</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink transition-colors hover:text-copper"
            >
              /{s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
