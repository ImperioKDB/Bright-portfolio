# portfolio

A personal site — About / Archive / Leave a Mark / Log — built with
Next.js 14 (App Router), TypeScript, Tailwind, and Supabase for the
guestbook.

## Design

- **Palette** — near-black PCB-green background (`--bg`), warm off-white
  ink, a copper accent for static/shipped state, a phosphor green for
  "live" / in-progress state. All defined as CSS variables in
  `app/globals.css`.
- **Type** — Space Grotesk for display, Inter for body, IBM Plex Mono for
  labels, tags, and the ledger log.
- **Signature element** — `components/Trace.tsx`, a vertical trace that
  connects entries like solder points on a board. Node color encodes real
  status (phosphor = in progress, copper = shipped), reused on the About
  page's "currently building" list and the full Archive.

## Before you deploy — placeholders to fill

- `lib/socials.ts` — swap in your real GitHub/email/X/WhatsApp links.
- `app/layout.tsx` — `metadataBase` URL and OG description once you have
  a domain.
- `lib/projects.ts` — I drafted these from what I knew of your projects;
  check the blurbs, stack tags, and status labels are still accurate,
  and add `href` once LevyLedger/PastQ/CookVerse have live URLs.
- `app/page.tsx` — the bio paragraph is a first draft, written in your
  voice as I understood it. Edit freely.

## Guestbook setup (Supabase)

1. Run `supabase/schema.sql` in the SQL editor of whichever Supabase
   project you want to back this with — a fresh project is fine, it
   doesn't need to be the same one as CookVerse.
2. Copy `.env.local.example` to `.env.local` and fill in your project's
   URL and anon key (Project Settings → API).
3. On Vercel, add the same two env vars
   (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) under
   Project Settings → Environment Variables.

The `marks` table only allows public `select` and `insert` — no one can
edit or delete another entry from the client.

## Local dev

```
npm install
npm run dev
```

## Adding a blog post

Add an entry to the `POSTS` array in `lib/posts.ts`:

```ts
{
  slug: "shipping-levyledger",
  title: "Shipping LevyLedger",
  date: "2026-07-13",
  excerpt: "One or two sentences.",
}
```

It'll show up on `/blog` automatically, newest first.
