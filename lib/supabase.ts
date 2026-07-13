import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Surfaces a clear message in the browser console instead of a silent
  // failed fetch if env vars weren't set before deploy.
  console.warn(
    "Supabase env vars are missing — the guestbook will not load or save entries."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
