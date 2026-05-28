/** Format a signed percentage-point value, e.g. 8 -> "+8%", -5 -> "-5%". */
export function signedPercent(value: number): string {
  const rounded = Math.round(value);
  const sign = rounded > 0 ? "+" : "";
  return `${sign}${rounded}%`;
}

/** Tailwind text-color class for a directional value. */
export function deltaColorClass(value: number): string {
  if (value > 0) return "text-positive";
  if (value < 0) return "text-negative";
  return "text-ink-faint";
}
