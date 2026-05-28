interface ComparisonChartProps {
  market: number[];
  custom: number[];
}

const W = 320;
const H = 160;
const PAD = 12;

function buildPath(values: number[], min: number, max: number): string {
  const span = max - min || 1;
  return values
    .map((v, i) => {
      const x = PAD + (i / (values.length - 1)) * (W - PAD * 2);
      const y = H - PAD - ((v - min) / span) * (H - PAD * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/** Mocked relative-performance chart. Illustrative only — not real data. */
export function ComparisonChart({ market, custom }: ComparisonChartProps) {
  const all = [...market, ...custom];
  const min = Math.min(...all);
  const max = Math.max(...all);

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Illustrative comparison of your custom index against the Global Market Index"
      >
        <defs>
          <linearGradient id="customFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f8079" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2f8079" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* faint baseline gridlines */}
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={PAD}
            x2={W - PAD}
            y1={PAD + g * (H - PAD * 2)}
            y2={PAD + g * (H - PAD * 2)}
            stroke="#e3e8e7"
            strokeWidth="1"
          />
        ))}

        {/* custom index area + line */}
        <path
          d={`${buildPath(custom, min, max)} L${W - PAD},${H - PAD} L${PAD},${H - PAD} Z`}
          fill="url(#customFill)"
        />
        <path
          d={buildPath(market, min, max)}
          fill="none"
          stroke="#9aa6a3"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
        <path
          d={buildPath(custom, min, max)}
          fill="none"
          stroke="#2f8079"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mt-3 flex items-center justify-center gap-5 text-xs text-ink-soft">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded bg-brand-500" />
          Your index
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-ink-faint" />
          Global Market
        </span>
      </div>
    </div>
  );
}
