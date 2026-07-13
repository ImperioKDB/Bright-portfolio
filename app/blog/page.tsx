import { POSTS } from "@/lib/posts";

export default function BlogPage() {
  return (
    <div className="animate-rise">
      <p className="entry-tag mb-4">04</p>
      <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        Log
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        Build notes, bugs worth remembering, and things learned in public.
      </p>

      <div className="mt-16">
        {POSTS.length === 0 ? (
          <div className="rounded-md border border-dashed border-line px-5 py-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              No entries yet
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              The first post goes in{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                lib/posts.ts
              </code>
              . Add an entry there and it shows up here.
            </p>
          </div>
        ) : (
          <ul className="space-y-8">
            {POSTS.map((post) => (
              <li key={post.slug} className="border-b border-line pb-8">
                <p className="entry-tag mb-2">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="font-display text-xl font-bold">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
