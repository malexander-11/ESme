"use client";

import { baseIndices } from "@/data/baseIndices";
import { useBuild } from "@/lib/BuildContext";
import { BaseIndexCard } from "@/components/BaseIndexCard";
import { ButtonLink } from "@/components/ui/Button";
import { StepHeader } from "@/components/ui/StepHeader";
import { StickyActions } from "@/components/ui/StickyActions";

export default function BaseIndexPage() {
  const { baseIndexId, setBaseIndex } = useBuild();

  return (
    <main className="flex flex-1 flex-col">
      <StepHeader backHref="/" step="Step 1 of 5" />

      <div className="px-5 pt-5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          Choose your starting point
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Pick a diversified base index. You’ll personalise it next — nothing
          here is locked in.
        </p>
      </div>

      <div className="flex flex-col gap-3 px-5 py-6">
        {baseIndices.map((index) => (
          <BaseIndexCard
            key={index.id}
            index={index}
            selected={baseIndexId === index.id}
            onSelect={setBaseIndex}
          />
        ))}
      </div>

      <StickyActions>
        <ButtonLink href="/build/customise">Continue</ButtonLink>
      </StickyActions>
    </main>
  );
}
