import type { ExposureChange } from "@/types";
import { signedPercent, deltaColorClass } from "@/lib/format";

/** A single labelled exposure change with a directional bar. */
export function ImpactRow({ change }: { change: ExposureChange }) {
  const magnitude = Math.min(100, Math.abs(change.delta) * 7);
  const positive = change.delta > 0;

  return (
    <div className="flex items-center gap-3 py-2">
      <span className="w-32 shrink-0 text-sm text-ink-soft">
        {change.label}
      </span>
      {/* Diverging bar from a center baseline. */}
      <div className="relative h-2 flex-1 rounded-full bg-surface-sunken">
        <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-ink-faint/30" />
        <span
          className={[
            "absolute top-0 h-2 rounded-full",
            positive ? "left-1/2 bg-positive" : "right-1/2 bg-negative",
          ].join(" ")}
          style={{ width: `${magnitude / 2}%` }}
        />
      </div>
      <span
        className={[
          "w-12 shrink-0 text-right text-sm font-semibold tabular-nums",
          deltaColorClass(change.delta),
        ].join(" ")}
      >
        {signedPercent(change.delta)}
      </span>
    </div>
  );
}
