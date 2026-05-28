"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useBuild } from "@/lib/BuildContext";
import { shuffledBatch } from "@/lib/deck";
import { cards } from "@/data/cards";
import type { BaseCard, CardAction } from "@/types";
import { CustomisationCard } from "@/components/CustomisationCard";

export default function CustomisePage() {
  const { setChoice, getChoice, choices } = useBuild();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Seed deterministically (matches the server render to avoid a hydration
  // mismatch), then shuffle into the endless deck once mounted on the client.
  const [feed, setFeed] = useState<BaseCard[]>(cards);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setFeed(shuffledBatch());
  }, []);

  const appendBatch = useCallback(() => {
    setFeed((prev) => [...prev, ...shuffledBatch(prev[prev.length - 1]?.id)]);
  }, []);

  // Track the visible card and top up the deck as the user nears the end.
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollTop / el.clientHeight);
    setActiveIndex(idx);
    setFeed((prev) =>
      idx >= prev.length - 3
        ? [...prev, ...shuffledBatch(prev[prev.length - 1]?.id)]
        : prev,
    );
  }, []);

  // Safety net: ensure the deck always has runway even without scrolling.
  useEffect(() => {
    if (feed.length < 6) appendBatch();
  }, [feed.length, appendBatch]);

  const personalised = choices.length;

  return (
    <main className="relative h-[100dvh] overflow-hidden">
      {/* Top overlay: back + live personalisation count */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 px-5 pt-6">
        <Link
          href="/build/base"
          aria-label="Go back"
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-surface/90 text-ink-soft shadow-soft backdrop-blur transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
        </Link>
        <span className="pointer-events-auto rounded-full bg-surface/90 px-3.5 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur">
          {personalised} personalised
        </span>
      </div>

      {/* The swipe feed: full-height scroll-snap sections */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll overscroll-contain scroll-smooth"
      >
        {feed.map((card, i) => (
          <section
            key={`${card.id}-${i}`}
            className="flex h-[100dvh] snap-start flex-col justify-center px-5 pb-28 pt-24"
          >
            <CustomisationCard
              card={card}
              selected={getChoice(card.id)}
              onAction={(action: CardAction) => setChoice(card.id, action)}
            />
            {i === 0 && activeIndex === 0 ? (
              <div className="mt-5 flex flex-col items-center gap-1 text-ink-faint">
                <span className="text-xs">Swipe up for more</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="animate-bounce"
                >
                  <path
                    d="M12 5v14M6 13l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* Bottom overlay: jump to the impact summary whenever ready */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="pointer-events-none h-8 bg-gradient-to-t from-surface to-transparent" />
        <div className="safe-bottom bg-surface/95 px-5 pt-2 backdrop-blur">
          <Link
            href="/build/impact"
            className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 text-base font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            View your personalisation and risk
          </Link>
        </div>
      </div>
    </main>
  );
}
