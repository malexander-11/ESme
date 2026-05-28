import { nameSuggestions } from "@/data/nameSuggestions";

interface NameSuggestionChipsProps {
  active: string;
  onPick: (name: string) => void;
}

export function NameSuggestionChips({
  active,
  onPick,
}: NameSuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {nameSuggestions.map((name) => {
        const isActive = active.trim() === name;
        return (
          <button
            key={name}
            type="button"
            onClick={() => onPick(name)}
            aria-pressed={isActive}
            className={[
              "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
              isActive
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-black/[0.06] bg-surface text-ink-soft hover:bg-surface-muted",
            ].join(" ")}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
