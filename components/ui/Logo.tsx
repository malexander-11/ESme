interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/** Simple ESme mark — a calm overlapping-leaves glyph plus wordmark. */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={["inline-flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500 text-white shadow-soft"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 13c0-4 3.5-7 8-7 1.5 0 3 .4 4 1-3 1-5 3.5-5 7H4Z"
            fill="currentColor"
            opacity="0.55"
          />
          <path
            d="M20 11c0 4-3.5 7-8 7-1.5 0-3-.4-4-1 3-1 5-3.5 5-7h7Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="text-lg font-bold tracking-tight text-ink">ESme</span>
      ) : null}
    </span>
  );
}
