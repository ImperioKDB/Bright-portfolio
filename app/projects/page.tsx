import Trace from "@/components/Trace";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="animate-rise">
      <p className="entry-tag mb-4">VOL. 01</p>
      <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        Archive
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        A running ledger of what I&apos;ve built and what&apos;s still open.
        Live nodes are in progress; closed nodes have shipped.
      </p>

      <div className="mt-16">
        <Trace
          items={PROJECTS.map((p, i) => ({
            id: p.id,
            status: p.status,
            content: (
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="entry-tag">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl font-bold hover:text-copper"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <h2 className="font-display text-xl font-bold">
                      {p.name}
                    </h2>
                  )}
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted"
                    >
                      {s}
                    </span>
                  ))}
                  <span
                    className={`ml-1 font-mono text-[0.65rem] uppercase tracking-wider ${
                      p.status === "live" ? "text-phosphor" : "text-muted"
                    }`}
                  >
                    {p.statusLabel}
                  </span>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
