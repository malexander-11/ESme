"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cards, TOTAL_CARDS } from "@/data/cards";
import { useBuild } from "@/lib/BuildContext";
import type { CardAction } from "@/types";
import { CustomisationCard } from "@/components/CustomisationCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function CustomisePage() {
  const router = useRouter();
  const { setChoice, getChoice } = useBuild();
  const [index, setIndex] = useState(0);

  const card = cards[index];
  const isLast = index === TOTAL_CARDS - 1;

  function goBack() {
    if (index === 0) {
      router.push("/build/base");
    } else {
      setIndex((i) => i - 1);
    }
  }

  function handleAction(action: CardAction) {
    setChoice(card.id, action);
    if (isLast) {
      router.push("/build/impact");
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 px-5 pt-6">
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-ink-soft shadow-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex-1">
          <ProgressBar
            current={index + 1}
            total={TOTAL_CARDS}
            label={`Card ${index + 1} of ${TOTAL_CARDS}`}
          />
        </div>
      </header>

      <div className="flex flex-1 flex-col justify-center px-5 py-6">
        <p className="mb-4 text-center text-sm text-ink-faint">
          How would you like to adjust this in your index?
        </p>
        <CustomisationCard
          key={card.id}
          card={card}
          selected={getChoice(card.id)}
          onAction={handleAction}
        />
        <p className="mt-5 text-center text-xs text-ink-faint">
          Tap an option to continue. You can go back to revisit any card.
        </p>
      </div>
    </main>
  );
}
