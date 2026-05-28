import type { BaseCard, CardAction } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface ActionOption {
  action: CardAction;
  label: string;
  tone: "positive" | "neutral" | "caution" | "negative";
}

const COMPANY_THEME_ACTIONS: ActionOption[] = [
  { action: "more", label: "More", tone: "positive" },
  { action: "keep", label: "Keep", tone: "neutral" },
  { action: "less", label: "Less", tone: "caution" },
  { action: "remove", label: "Remove", tone: "negative" },
];

const BELIEF_ACTIONS: ActionOption[] = [
  { action: "agree", label: "Agree", tone: "positive" },
  { action: "neutral", label: "Neutral", tone: "neutral" },
  { action: "disagree", label: "Disagree", tone: "negative" },
];

const TYPE_LABEL: Record<BaseCard["type"], string> = {
  company: "Company",
  theme: "Theme",
  belief: "Belief",
};

const selectedTone: Record<ActionOption["tone"], string> = {
  positive: "bg-positive text-white border-positive",
  neutral: "bg-ink text-white border-ink",
  caution: "bg-caution text-white border-caution",
  negative: "bg-negative text-white border-negative",
};

interface CustomisationCardProps {
  card: BaseCard;
  selected?: CardAction;
  onAction: (action: CardAction) => void;
}

export function CustomisationCard({
  card,
  selected,
  onAction,
}: CustomisationCardProps) {
  const actions =
    card.type === "belief" ? BELIEF_ACTIONS : COMPANY_THEME_ACTIONS;

  return (
    <div className="rounded-3xl border border-black/[0.05] bg-surface p-6 shadow-lift">
      <div className="flex items-center justify-between gap-3">
        <Badge tone="brand">{TYPE_LABEL[card.type]}</Badge>
        {card.exposureLabel ? (
          <span className="text-sm font-medium text-ink-soft">
            {card.type === "theme" ? "Exposure" : "Weight"} {card.exposureLabel}
          </span>
        ) : null}
      </div>

      <h2
        className={[
          "mt-4 font-semibold text-ink",
          card.type === "belief" ? "text-lg leading-snug" : "text-2xl",
        ].join(" ")}
      >
        {card.type === "belief" ? `“${card.name}”` : card.name}
      </h2>

      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        {card.description}
      </p>

      {card.tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <div
        className={[
          "mt-6 grid gap-2.5",
          actions.length === 4 ? "grid-cols-2" : "grid-cols-3",
        ].join(" ")}
      >
        {actions.map((option) => {
          const isSelected = selected === option.action;
          return (
            <button
              key={option.action}
              type="button"
              onClick={() => onAction(option.action)}
              aria-pressed={isSelected}
              className={[
                "min-h-[3rem] rounded-2xl border text-sm font-semibold transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
                isSelected
                  ? selectedTone[option.tone]
                  : "border-black/[0.06] bg-surface-muted text-ink hover:bg-surface-sunken",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
