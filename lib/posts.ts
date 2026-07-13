export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-07-13"
  excerpt: string;
};

// Add entries here as you write them. Newest first.
export const POSTS: Post[] = [];
