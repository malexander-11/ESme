import { getCard } from "@/data/cards";
import type {
  CardAction,
  Choice,
  ConcentrationLevel,
  DiversificationHealth,
  ExposureChange,
  ImpactSummary,
  Region,
  Sector,
} from "@/types";

const SECTOR_ORDER: Sector[] = [
  "Technology",
  "Energy",
  "Consumer staples",
  "Luxury",
  "Speculative growth",
];

const REGION_ORDER: Region[] = ["US", "UK", "Europe", "Emerging markets"];

/** How strongly an action applies a card's effects (and in which direction). */
function actionScale(action: CardAction): number {
  switch (action) {
    case "more":
    case "agree":
      return 1;
    case "less":
    case "disagree":
      return -1;
    case "remove":
      return -2;
    case "keep":
    case "neutral":
    default:
      return 0;
  }
}

interface Tilts {
  sectors: Record<Sector, number>;
  regions: Record<Region, number>;
}

function emptyTilts(): Tilts {
  return {
    sectors: {
      Technology: 0,
      Energy: 0,
      "Consumer staples": 0,
      Luxury: 0,
      "Speculative growth": 0,
    },
    regions: {
      US: 0,
      UK: 0,
      Europe: 0,
      "Emerging markets": 0,
    },
  };
}

function accumulate(choices: Choice[]): Tilts {
  const tilts = emptyTilts();

  for (const choice of choices) {
    const card = getCard(choice.cardId);
    if (!card) continue;
    const scale = actionScale(choice.action);
    if (scale === 0) continue;

    if (card.effects.sectors) {
      for (const [sector, value] of Object.entries(card.effects.sectors)) {
        tilts.sectors[sector as Sector] += (value ?? 0) * scale;
      }
    }
    if (card.effects.regions) {
      for (const [region, value] of Object.entries(card.effects.regions)) {
        tilts.regions[region as Region] += (value ?? 0) * scale;
      }
    }
  }

  // Emerging markets has no direct cards; it gently absorbs the inverse of
  // developed-market tilts so the geographic picture stays directional.
  const developed =
    tilts.regions.US + tilts.regions.UK + tilts.regions.Europe;
  tilts.regions["Emerging markets"] -= Math.round(developed * 0.35);

  return tilts;
}

function toChanges<T extends string>(
  order: T[],
  values: Record<T, number>,
): ExposureChange[] {
  return order
    .map((label) => ({ label, delta: Math.round(values[label]) }))
    .filter((change) => change.delta !== 0);
}

function diversificationFrom(totalAbs: number): DiversificationHealth {
  if (totalAbs < 16) return "Good";
  if (totalAbs < 34) return "Watch";
  return "Concentrated";
}

function concentrationFrom(techUsTilt: number): ConcentrationLevel {
  if (techUsTilt < 8) return "Low";
  if (techUsTilt < 20) return "Medium";
  return "High";
}

function topLabel(changes: ExposureChange[], positive: boolean): string | null {
  const filtered = changes.filter((c) => (positive ? c.delta > 0 : c.delta < 0));
  if (filtered.length === 0) return null;
  filtered.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  return filtered[0].label;
}

function buildRiskNote(
  health: DiversificationHealth,
  sectorChanges: ExposureChange[],
  geoChanges: ExposureChange[],
): string {
  const topSector = topLabel(sectorChanges, true);
  const topRegion = topLabel(geoChanges, true);

  if (!topSector && !topRegion) {
    return "You haven't tilted away from the base index much yet — your portfolio closely tracks the broad market.";
  }

  const lead =
    health === "Concentrated"
      ? "Your portfolio has become noticeably concentrated"
      : health === "Watch"
        ? "Your portfolio is still reasonably diversified"
        : "Your portfolio is still diversified";

  const drivers = [topSector, topRegion].filter(Boolean) as string[];
  const driverText =
    drivers.length === 2 ? `${drivers[0]} and ${drivers[1]}` : drivers[0];

  return `${lead}, but your choices have increased exposure to ${driverText}.`;
}

export function computeImpact(choices: Choice[]): ImpactSummary {
  const tilts = accumulate(choices);
  const sectorChanges = toChanges(SECTOR_ORDER, tilts.sectors);
  const geoChanges = toChanges(REGION_ORDER, tilts.regions);

  const choicesMade = choices.length;

  const totalAbs =
    [...sectorChanges, ...geoChanges].reduce(
      (sum, c) => sum + Math.abs(c.delta),
      0,
    ) || 0;

  const techUsTilt =
    Math.max(0, Math.round(tilts.sectors.Technology)) +
    Math.max(0, Math.round(tilts.regions.US));

  const diversification = diversificationFrom(totalAbs);
  const topTenConcentration = concentrationFrom(techUsTilt);
  const riskNote = buildRiskNote(diversification, sectorChanges, geoChanges);

  return {
    choicesMade,
    diversification,
    sectorChanges,
    geoChanges,
    topTenConcentration,
    riskNote,
  };
}

export interface ComparisonNarrative {
  backing: string;
  avoiding: string;
  mainRisk: string;
}

function joinLabels(labels: string[]): string {
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0];
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
}

/** Plain-English narrative for the final comparison screen. */
export function getComparisonNarrative(
  summary: ImpactSummary,
): ComparisonNarrative {
  const all = [...summary.sectorChanges, ...summary.geoChanges];

  const backing = all
    .filter((c) => c.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 3)
    .map((c) => c.label.toLowerCase());

  const avoiding = all
    .filter((c) => c.delta < 0)
    .sort((a, b) => a.delta - b.delta)
    .slice(0, 3)
    .map((c) => c.label.toLowerCase());

  return {
    backing: backing.length
      ? `You're leaning into ${joinLabels(backing)}.`
      : "You're staying close to the broad market with only light tilts.",
    avoiding: avoiding.length
      ? `You're stepping back from ${joinLabels(avoiding)}.`
      : "You haven't meaningfully reduced any major exposure.",
    mainRisk: summary.riskNote,
  };
}

/**
 * Mocked relative-performance paths for the comparison chart. The custom index
 * path nudges up or down vs the market based on the user's net positive tilt —
 * directional, not predictive.
 */
export function getComparisonSeries(summary: ImpactSummary): {
  market: number[];
  custom: number[];
} {
  const points = 13;
  const netTilt = summary.sectorChanges.reduce((s, c) => s + c.delta, 0);
  // Translate tilt into a gentle divergence and a touch more volatility.
  const drift = Math.max(-0.35, Math.min(0.45, netTilt / 60));

  const market: number[] = [];
  const custom: number[] = [];
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);
    const base = 100 + t * 8 + Math.sin(t * Math.PI * 2) * 1.5;
    market.push(base);
    const wobble = Math.sin(t * Math.PI * 3 + 1) * (1.5 + Math.abs(drift) * 4);
    custom.push(base + t * (drift * 14) + wobble * 0.4);
  }
  return { market, custom };
}
