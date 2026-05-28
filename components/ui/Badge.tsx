import type { ReactNode } from "react";

type Tone = "brand" | "neutral" | "positive" | "caution" | "negative";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700",
  neutral: "bg-surface-sunken text-ink-soft",
  positive: "bg-positive/10 text-positive",
  caution: "bg-caution/10 text-caution",
  negative: "bg-negative/10 text-negative",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
