"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Mark = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function MarkPage() {
  const [marks, setMarks] = useState<Mark[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("marks")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setLoadError(true);
        } else {
          setMarks(data ?? []);
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) {
      setSubmitError("Both fields need something in them.");
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from("marks")
      .insert({ name: trimmedName, message: trimmedMessage })
      .select("id, name, message, created_at")
      .single();
    setSubmitting(false);

    if (error || !data) {
      setSubmitError("That didn't save — try again in a moment.");
      return;
    }

    setMarks((prev) => [data, ...prev]);
    setName("");
    setMessage("");
  }

  return (
    <div className="animate-rise">
      <p className="entry-tag mb-4">03</p>
      <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        Leave a Mark
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        A public log. Say who you are and why you stopped by — it gets
        appended below, timestamped, and stays.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="entry-tag mb-1.5 block">
            NAME
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Who's this?"
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-muted/60 focus:border-copper"
          />
        </div>
        <div>
          <label htmlFor="message" className="entry-tag mb-1.5 block">
            MESSAGE
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={280}
            rows={3}
            placeholder="Leave something behind."
            className="w-full resize-none rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-muted/60 focus:border-copper"
          />
        </div>
        {submitError && (
          <p className="font-mono text-xs text-copper">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="rounded-md border border-copper px-4 py-2 font-mono text-xs uppercase tracking-widest text-copper transition-colors hover:bg-copper hover:text-bg disabled:opacity-50"
        >
          {submitting ? "Saving…" : "Append entry"}
        </button>
      </form>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="entry-tag mb-8">LOG // {marks.length} ENTRIES</h2>

        {loading && (
          <p className="font-mono text-xs text-muted">Reading the log…</p>
        )}

        {!loading && loadError && (
          <p className="font-mono text-xs text-muted">
            The log didn&apos;t load. Check the Supabase env vars and the
            `marks` table, then refresh.
          </p>
        )}

        {!loading && !loadError && marks.length === 0 && (
          <p className="font-mono text-xs text-muted">
            No entries yet — be the first to leave one above.
          </p>
        )}

        {!loading && !loadError && marks.length > 0 && (
          <ul className="space-y-5">
            {marks.map((m) => (
              <li key={m.id} className="border-l border-line pl-4">
                <p className="text-sm text-ink">
                  <span className="text-copper">{m.name}</span> — {m.message}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                  {new Date(m.created_at).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
