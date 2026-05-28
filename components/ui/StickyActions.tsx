import type { ReactNode } from "react";

/**
 * Sticky bottom action bar for mobile flows. Sits at the bottom of the viewport
 * with a soft fade so primary CTAs are always within thumb reach.
 */
export function StickyActions({ children }: { children: ReactNode }) {
  return (
    <div className="sticky bottom-0 z-10 mt-auto">
      <div className="pointer-events-none h-6 bg-gradient-to-t from-surface/90 to-transparent" />
      <div className="safe-bottom bg-surface/90 px-5 pt-2 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
}
