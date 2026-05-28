"use client";

import { useBuild } from "@/lib/BuildContext";
import { ButtonLink } from "@/components/ui/Button";
import { StepHeader } from "@/components/ui/StepHeader";
import { StickyActions } from "@/components/ui/StickyActions";
import { NameSuggestionChips } from "@/components/NameSuggestionChips";

export default function NamePage() {
  const { indexName, setIndexName } = useBuild();
  const trimmed = indexName.trim();

  return (
    <main className="flex flex-1 flex-col">
      <StepHeader backHref="/build/impact" step="Step 4 of 5" />

      <div className="px-5 pt-5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          Name your index
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Give your personalised index a name. Type your own or pick a starting
          point.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 px-5 py-6">
        <div>
          <label
            htmlFor="index-name"
            className="mb-2 block text-sm font-medium text-ink-soft"
          >
            Index name
          </label>
          <input
            id="index-name"
            type="text"
            value={indexName}
            onChange={(e) => setIndexName(e.target.value)}
            placeholder="e.g. Durable Moats Index"
            maxLength={48}
            className="w-full rounded-2xl border border-black/[0.08] bg-surface px-4 py-3.5 text-base text-ink shadow-soft placeholder:text-ink-faint focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-ink-soft">Suggestions</p>
          <NameSuggestionChips active={indexName} onPick={setIndexName} />
        </div>
      </div>

      <StickyActions>
        <ButtonLink
          href="/build/compare"
          aria-disabled={!trimmed}
          className={!trimmed ? "pointer-events-none opacity-50" : undefined}
        >
          See comparison
        </ButtonLink>
      </StickyActions>
    </main>
  );
}
