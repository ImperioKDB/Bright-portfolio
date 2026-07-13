import type { ReactNode } from "react";

export type TraceItem = {
  id: string;
  status: "live" | "done";
  content: ReactNode;
};

export default function Trace({ items }: { items: TraceItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.id} className="relative flex gap-5">
          <div className="flex flex-col items-center">
            <span
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] ${
                item.status === "live"
                  ? "animate-pulse-soft border-phosphor bg-phosphor/40"
                  : "border-copper bg-bg"
              }`}
              aria-hidden="true"
            />
            {i !== items.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
            )}
          </div>
          <div
            className="flex-1 animate-rise pb-12 last:pb-0"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
