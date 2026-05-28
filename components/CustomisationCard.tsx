import type { ReactNode } from "react";
import type { BaseCard, CardAction } from "@/types";
import { Badge } from "@/components/ui/Badge";

const TYPE_LABEL: Record<BaseCard["type"], string> = {
  company: "Company",
  theme: "Theme",
  belief: "Belief",
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
  const isBelief = card.type === "belief";

  return (
    <div className="flex max-h-full flex-col overflow-hidden rounded-3xl border border-black/[0.05] bg-surface p-6 shadow-lift">
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
          isBelief ? "text-lg leading-snug" : "text-2xl",
        ].join(" ")}
      >
        {isBelief ? `“${card.name}”` : card.name}
      </h2>

      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        {card.description}
      </p>

      {card.tags.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Mocked AI optimist / pessimist takes */}
      {card.ai ? (
        <div className="mt-5 rounded-2xl bg-surface-muted p-4">
          <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.8 4.7L18.5 8.5 13.8 10.3 12 15l-1.8-4.7L5.5 8.5l4.7-1.8L12 2z" />
              <circle cx="18.5" cy="17" r="1.6" />
              <circle cx="6" cy="16" r="1.2" />
            </svg>
            AI perspectives
          </div>
          <div className="space-y-3">
            <AiTake
              tone="optimist"
              label="Optimist"
              text={card.ai.optimist}
            />
            <AiTake
              tone="pessimist"
              label="Pessimist"
              text={card.ai.pessimist}
            />
          </div>
          <p className="mt-3 text-[11px] leading-snug text-ink-faint">
            AI-generated illustration — not advice.
          </p>
        </div>
      ) : null}

      {/* Action controls (swipe also drives the primary two) */}
      <div className="mt-5">
        {isBelief ? (
          <div className="grid grid-cols-2 gap-2.5">
            <ActionButton
              tone="negative"
              active={selected === "disagree"}
              onClick={() => onAction("disagree")}
            >
              <Arrow dir="left" /> Disagree
            </ActionButton>
            <ActionButton
              tone="positive"
              active={selected === "agree"}
              onClick={() => onAction("agree")}
            >
              Agree <Arrow dir="right" />
            </ActionButton>
          </div>
        ) : (
          <div className="flex items-stretch gap-2.5">
            <ActionButton
              tone="caution"
              active={selected === "less"}
              onClick={() => onAction("less")}
              className="flex-1"
            >
              <Arrow dir="left" /> Less
            </ActionButton>
            <button
              type="button"
              aria-label="Remove from index"
              aria-pressed={selected === "remove"}
              onClick={() => onAction("remove")}
              className={[
                "grid w-14 shrink-0 place-items-center rounded-2xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
                selected === "remove"
                  ? "border-negative bg-negative text-white"
                  : "border-black/[0.06] bg-surface-muted text-ink-soft hover:bg-surface-sunken hover:text-negative",
              ].join(" ")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-1 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ActionButton
              tone="positive"
              active={selected === "more"}
              onClick={() => onAction("more")}
              className="flex-1"
            >
              More <Arrow dir="right" />
            </ActionButton>
          </div>
        )}
        <p className="mt-3 text-center text-xs text-ink-faint">
          {isBelief
            ? "Swipe right to agree, left to disagree · scroll for neutral"
            : "Swipe right for more, left for less · scroll to keep"}
        </p>
      </div>
    </div>
  );
}

function AiTake({
  tone,
  label,
  text,
}: {
  tone: "optimist" | "pessimist";
  label: string;
  text: string;
}) {
  const positive = tone === "optimist";
  return (
    <div className="flex gap-2.5">
      <span
        className={[
          "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
          positive ? "bg-positive/12 text-positive" : "bg-negative/12 text-negative",
        ].join(" ")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d={positive ? "M5 15l7-7 7 7" : "M5 9l7 7 7-7"}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="text-[13px] leading-snug text-ink-soft">
        <span className="font-semibold text-ink">{label}:</span> {text}
      </p>
    </div>
  );
}

const toneClasses = {
  positive: "border-positive bg-positive text-white",
  caution: "border-caution bg-caution text-white",
  negative: "border-negative bg-negative text-white",
} as const;

function ActionButton({
  tone,
  active,
  onClick,
  className,
  children,
}: {
  tone: keyof typeof toneClasses;
  active?: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "inline-flex min-h-[3rem] items-center justify-center gap-1.5 rounded-2xl border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
        active
          ? toneClasses[tone]
          : "border-black/[0.06] bg-surface-muted text-ink hover:bg-surface-sunken",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "right" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
