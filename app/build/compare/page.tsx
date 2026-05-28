"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useBuild } from "@/lib/BuildContext";
import { getBaseIndex } from "@/data/baseIndices";
import {
  computeImpact,
  getComparisonNarrative,
  getComparisonSeries,
} from "@/lib/impact";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { StepHeader } from "@/components/ui/StepHeader";
import { ComparisonChart } from "@/components/ComparisonChart";
import { Disclaimer } from "@/components/Disclaimer";

const explainerIcons = {
  backing: (
    <path
      d="M5 12l4 4L19 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  avoiding: (
    <path
      d="M7 12h10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  ),
  risk: (
    <>
      <path
        d="M12 4l8 14H4L12 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" />
    </>
  ),
};

export default function ComparePage() {
  const router = useRouter();
  const { choices, indexName, baseIndexId, reset } = useBuild();

  const summary = useMemo(() => computeImpact(choices), [choices]);
  const narrative = useMemo(() => getComparisonNarrative(summary), [summary]);
  const series = useMemo(() => getComparisonSeries(summary), [summary]);

  const baseIndex = getBaseIndex(baseIndexId);
  const displayName = indexName.trim() || "Your custom index";

  function startAgain() {
    reset();
    router.push("/");
  }

  const explainers = [
    {
      key: "backing" as const,
      title: "What you’re backing",
      body: narrative.backing,
      tone: "text-positive",
      bg: "bg-positive/10",
    },
    {
      key: "avoiding" as const,
      title: "What you’re avoiding",
      body: narrative.avoiding,
      tone: "text-negative",
      bg: "bg-negative/10",
    },
    {
      key: "risk" as const,
      title: "Main risk",
      body: narrative.mainRisk,
      tone: "text-caution",
      bg: "bg-caution/10",
    },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <StepHeader backHref="/build/name" step="Step 5 of 5" />

      <div className="px-5 pt-5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          {displayName}
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          A side-by-side look at your index versus the broad market.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5 py-6">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">
              Relative shape
            </h2>
            <span className="text-xs text-ink-faint">Illustrative</span>
          </div>
          <p className="mb-3 mt-1 text-xs text-ink-faint">
            vs {baseIndex?.name ?? "Global Market Index"}
          </p>
          <ComparisonChart market={series.market} custom={series.custom} />
        </Card>

        {explainers.map((item) => (
          <Card key={item.key}>
            <div className="flex items-start gap-3">
              <span
                className={[
                  "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                  item.bg,
                  item.tone,
                ].join(" ")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {explainerIcons[item.key]}
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            </div>
          </Card>
        ))}

        <div className="mt-2 flex flex-col gap-3">
          <ButtonLink href="/build/customise" variant="secondary">
            Review choices
          </ButtonLink>
          <Button onClick={startAgain} variant="ghost">
            Start again
          </Button>
        </div>

        <Disclaimer className="mt-2" />
      </div>
    </main>
  );
}
