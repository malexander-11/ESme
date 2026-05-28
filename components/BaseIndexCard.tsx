import type { BaseIndex } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface BaseIndexCardProps {
  index: BaseIndex;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function BaseIndexCard({
  index,
  selected,
  onSelect,
}: BaseIndexCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index.id)}
      aria-pressed={selected}
      className={[
        "w-full rounded-3xl border bg-surface p-5 text-left transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
        selected
          ? "border-brand-500 shadow-lift ring-1 ring-brand-500"
          : "border-black/[0.05] shadow-soft hover:border-brand-200",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{index.name}</h3>
        <span
          aria-hidden
          className={[
            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
            selected ? "border-brand-500 bg-brand-500" : "border-ink-faint/40",
          ].join(" ")}
        >
          {selected ? (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6.2 5 8.5l4.5-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-ink-soft">{index.description}</p>
      <div className="mt-3">
        <Badge tone={selected ? "brand" : "neutral"}>Risk: {index.risk}</Badge>
      </div>
    </button>
  );
}
