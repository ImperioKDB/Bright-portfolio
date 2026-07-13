"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "About", tag: "01" },
  { href: "/projects", label: "Archive", tag: "02" },
  { href: "/mark", label: "Leave a Mark", tag: "03" },
  { href: "/blog", label: "Log", tag: "04" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-line py-6">
      <Link
        href="/"
        className="font-display text-sm font-bold tracking-tight text-ink"
      >
        Happy<span className="text-copper">.</span>
      </Link>
      <nav className="flex gap-5 sm:gap-7">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                active ? "text-copper" : "text-muted hover:text-ink"
              }`}
            >
              <span className="hidden sm:inline text-[0.65rem] text-muted/70 mr-1">
                {link.tag}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
