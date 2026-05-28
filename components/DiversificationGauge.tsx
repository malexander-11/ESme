import type { DiversificationHealth } from "@/types";

const config: Record<
  DiversificationHealth,
  { tone: string; dot: string; step: number; note: string }
> = {
  Good: {
    tone: "text-positive",
    dot: "bg-positive",
    step: 1,
    note: "Well spread across sectors and regions.",
  },
  Watch: {
    tone: "text-caution",
    dot: "bg-caution",
    step: 2,
    note: "A few meaningful tilts are building up.",
  },
  Concentrated: {
    tone: "text-negative",
    dot: "bg-negative",
    step: 3,
    note: "Your exposure is leaning heavily in one direction.",
  },
};

export function DiversificationGauge({
  health,
}: {
  health: DiversificationHealth;
}) {
  const c = config[health];
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-ink-soft">Diversification health</span>
        <span className={["flex items-center gap-1.5 text-sm font-semibold", c.tone].join(" ")}>
          <span className={["h-2 w-2 rounded-full", c.dot].join(" ")} />
          {health}
        </span>
      </div>
      <div className="mt-3 flex gap-1.5">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={[
              "h-1.5 flex-1 rounded-full",
              s <= c.step ? c.dot : "bg-surface-sunken",
            ].join(" ")}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-faint">{c.note}</p>
    </div>
  );
}
