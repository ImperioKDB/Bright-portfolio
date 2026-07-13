-- Run this in the Supabase SQL editor for whichever project
-- you point NEXT_PUBLIC_SUPABASE_URL at (a fresh project is fine —
-- it doesn't need to be the same one as CookVerse).

create extension if not exists pgcrypto;

create table if not exists marks (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 40),
  message text not null check (char_length(message) between 1 and 280),
  created_at timestamptz not null default now()
);

alter table marks enable row level security;

-- Anyone can read the guestbook.
create policy "marks_select_public"
  on marks for select
  using (true);

-- Anyone can leave a mark, but only insert — no editing or deleting
-- someone else's entry from the client.
create policy "marks_insert_public"
  on marks for insert
  with check (true);
