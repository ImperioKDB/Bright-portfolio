import { SOCIALS } from "@/lib/socials";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="entry-tag">
          © {new Date().getFullYear()} · built in Nigeria
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-copper"
            >
              /{s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
