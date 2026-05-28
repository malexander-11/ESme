interface DisclaimerProps {
  className?: string;
}

export function Disclaimer({ className }: DisclaimerProps) {
  return (
    <p
      className={[
        "text-center text-xs leading-relaxed text-ink-faint",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      This prototype is for educational and exploratory purposes only. It does
      not provide financial advice.
    </p>
  );
}
