import Link from "next/link";
import type { ReactNode } from "react";

interface StepHeaderProps {
  backHref: string;
  step?: string;
  right?: ReactNode;
}

/** Top bar for build steps: a back affordance and an optional step label. */
export function StepHeader({ backHref, step, right }: StepHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 px-5 pt-6">
      <Link
        href={backHref}
        aria-label="Go back"
        className="grid h-10 w-10 place-items-center rounded-full bg-surface text-ink-soft shadow-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
      {step ? (
        <span className="text-sm font-medium text-ink-faint">{step}</span>
      ) : null}
      {right ?? <span className="h-10 w-10" aria-hidden />}
    </header>
  );
}
