// Shared domain types for the ESme prototype.
// Everything here is mocked, front-end-only data — no real market data.

export type CardType = "company" | "theme" | "belief";

/** Actions available on company & theme cards. */
export type CompanyThemeAction = "more" | "keep" | "less" | "remove";

/** Actions available on belief cards. */
export type BeliefAction = "agree" | "neutral" | "disagree";

export type CardAction = CompanyThemeAction | BeliefAction;

export interface BaseIndex {
  id: string;
  name: string;
  description: string;
  risk: string;
}

/** Named sectors and regions used by the (mocked) impact engine. */
export type Sector =
  | "Technology"
  | "Financials"
  | "Healthcare"
  | "Industrials"
  | "Energy"
  | "Consumer staples"
  | "Luxury"
  | "Speculative growth";

export type Region = "US" | "UK" | "Europe" | "Asia" | "Emerging markets";

/**
 * Directional nudges a card applies "per +1 of action".
 * Positive = increase exposure, negative = decrease. Values are intentionally
 * small and illustrative — this is not a real financial model.
 */
export interface CardEffects {
  sectors?: Partial<Record<Sector, number>>;
  regions?: Partial<Record<Region, number>>;
}

/** Mocked, illustrative "AI" bull/bear takes shown on a card. */
export interface AiPerspectives {
  optimist: string;
  pessimist: string;
}

export interface BaseCard {
  id: string;
  type: CardType;
  name: string;
  description: string;
  tags: string[];
  /** Display label for current weight/exposure, e.g. "3.8%" (companies/themes). */
  exposureLabel?: string;
  /** Optional mocked AI optimist/pessimist views (companies & themes). */
  ai?: AiPerspectives;
  /** Hidden metadata driving the impact summary. */
  effects: CardEffects;
}

export interface Choice {
  cardId: string;
  action: CardAction;
}

export type DiversificationHealth = "Good" | "Watch" | "Concentrated";
export type ConcentrationLevel = "Low" | "Medium" | "High";

export interface ExposureChange {
  label: string;
  /** Signed percentage points, e.g. +8 or -5. */
  delta: number;
}

export interface ImpactSummary {
  choicesMade: number;
  diversification: DiversificationHealth;
  sectorChanges: ExposureChange[];
  geoChanges: ExposureChange[];
  topTenConcentration: ConcentrationLevel;
  riskNote: string;
}
