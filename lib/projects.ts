export type Project = {
  id: string;
  name: string;
  href?: string;
  blurb: string;
  stack: string[];
  status: "live" | "done";
  statusLabel: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "levyledger",
    name: "LevyLedger",
    blurb:
      "Multisig treasury management for Nigerian student organizations, built on Solana. Wallet-based roles, proposal signing, and real on-chain balances replace spreadsheets and trust-me accounting.",
    stack: ["Solana", "Anchor", "Rust", "Next.js"],
    status: "live",
    statusLabel: "Hackathon build — in progress",
    featured: true,
  },
  {
    id: "pastq",
    name: "PastQ",
    blurb:
      "An AI-powered past-question bank for Nigerian university students, with a quiz engine and OpenRouter-backed generation on top of a Supabase question store.",
    stack: ["Next.js", "Express", "Supabase", "OpenRouter"],
    status: "live",
    statusLabel: "In progress — KaTeX + rate limiting next",
    featured: true,
  },
  {
    id: "cookverse",
    name: "CookVerse",
    blurb:
      "A recipe and social cooking platform — profiles, recipe posts, and media storage on a Supabase backend, with the deploy pipeline currently being wired up.",
    stack: ["Next.js", "Supabase"],
    status: "live",
    statusLabel: "In progress — deploy pipeline underway",
    featured: true,
  },
  {
    id: "forge",
    name: "Forge",
    blurb:
      "An AI-powered coding agent. Worked as frontend engineer — execution-plan-driven UI builds and a WCAG-checked light theme variant.",
    stack: ["Next.js", "React"],
    status: "done",
    statusLabel: "Contributed — frontend",
  },
  {
    id: "tacsfon-merch",
    name: "TACSFON Merch",
    blurb:
      "E-commerce storefront for a merch line — order management and payment status on a Next.js frontend with an Express backend.",
    stack: ["Next.js", "Express", "Vercel", "Render"],
    status: "done",
    statusLabel: "Shipped",
  },
];
