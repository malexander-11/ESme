"use client";

import { useMemo } from "react";
import { useBuild } from "@/lib/BuildContext";
import { computeImpact } from "@/lib/impact";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { StepHeader } from "@/components/ui/StepHeader";
import { StickyActions } from "@/components/ui/StickyActions";
import { ImpactRow } from "@/components/ImpactRow";
import { DiversificationGauge } from "@/components/DiversificationGauge";

const concentrationTone = {
  Low: "positive",
  Medium: "caution",
  High: "negative",
} as const;

export default function ImpactPage() {
  const { choices } = useBuild();
  const summary = useMemo(() => computeImpact(choices), [choices]);

  return (
    <main className="flex flex-1 flex-col">
      <StepHeader backHref="/build/customise" step="Step 3 of 5" />

      <div className="px-5 pt-5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          Your portfolio impact
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Here’s how your choices shift exposure compared with the base index.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5 py-6">
        <Card className="flex items-center justify-between">
          <div>
            <p className="text-sm text-ink-soft">Choices made</p>
            <p className="text-3xl font-bold text-ink">{summary.choicesMade}</p>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5 9 17.5 20 6.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Card>

        <Card>
          <DiversificationGauge health={summary.diversification} />
        </Card>

        <Card>
          <h2 className="text-base font-semibold text-ink">
            Sector exposure changes
          </h2>
          <div className="mt-3 divide-y divide-black/[0.04]">
            {summary.sectorChanges.length ? (
              summary.sectorChanges.map((change) => (
                <ImpactRow key={change.label} change={change} />
              ))
            ) : (
              <p className="py-2 text-sm text-ink-faint">
                No sector tilts yet — you’re tracking the base index.
              </p>
            )}
          </div>
        </Card>

        <Card>
          <h2 className="text-base font-semibold text-ink">
            Geographic exposure changes
          </h2>
          <div className="mt-3 divide-y divide-black/[0.04]">
            {summary.geoChanges.length ? (
              summary.geoChanges.map((change) => (
                <ImpactRow key={change.label} change={change} />
              ))
            ) : (
              <p className="py-2 text-sm text-ink-faint">
                No regional tilts yet.
              </p>
            )}
          </div>
        </Card>

        <Card className="flex items-center justify-between">
          <div>
            <p className="text-sm text-ink-soft">Top 10 concentration</p>
            <p className="mt-1 text-xs text-ink-faint">
              How much sits in your largest holdings
            </p>
          </div>
          <Badge tone={concentrationTone[summary.topTenConcentration]}>
            {summary.topTenConcentration}
          </Badge>
        </Card>

        <Card className="bg-brand-50/60">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="7.6" r="1.2" fill="currentColor" />
              </svg>
            </span>
            <div>
              <h2 className="text-sm font-semibold text-brand-800">Risk note</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {summary.riskNote}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <StickyActions>
        <ButtonLink href="/build/name">Name my index</ButtonLink>
      </StickyActions>
    </main>
  );
}
