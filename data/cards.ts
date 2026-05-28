import type { BaseCard } from "@/types";

/**
 * The 14 customisation cards: 6 companies, 4 themes, 4 beliefs.
 * `effects` values are directional, illustrative nudges (per +1 of action) used
 * by lib/impact.ts. They are intentionally simple, not a real financial model.
 */
export const cards: BaseCard[] = [
  // ---- Companies ----
  {
    id: "microsoft",
    type: "company",
    name: "Microsoft",
    description: "Enterprise software, cloud and AI infrastructure.",
    exposureLabel: "3.8%",
    tags: ["Technology", "Cloud", "Enterprise"],
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "nvidia",
    type: "company",
    name: "Nvidia",
    description: "Semiconductors powering AI infrastructure.",
    exposureLabel: "3.2%",
    tags: ["Technology", "Semiconductors", "AI"],
    effects: {
      sectors: { Technology: 3, "Speculative growth": 3 },
      regions: { US: 2 },
    },
  },
  {
    id: "tesla",
    type: "company",
    name: "Tesla",
    description: "Electric vehicles, batteries and autonomy.",
    exposureLabel: "1.1%",
    tags: ["Autos", "Energy", "Speculative"],
    effects: {
      sectors: { "Speculative growth": 4, Technology: 1 },
      regions: { US: 1 },
    },
  },
  {
    id: "shell",
    type: "company",
    name: "Shell",
    description: "Global energy production and transition investments.",
    exposureLabel: "0.6%",
    tags: ["Energy", "Commodities"],
    effects: { sectors: { Energy: 4 }, regions: { Europe: 1, UK: 1 } },
  },
  {
    id: "unilever",
    type: "company",
    name: "Unilever",
    description: "Consumer staples with global household brands.",
    exposureLabel: "0.4%",
    tags: ["Consumer staples", "Defensive"],
    effects: {
      sectors: { "Consumer staples": 4 },
      regions: { Europe: 2, UK: 1 },
    },
  },
  {
    id: "salesforce",
    type: "company",
    name: "Salesforce",
    description: "Enterprise CRM software with sticky customer contracts.",
    exposureLabel: "0.5%",
    tags: ["Technology", "Enterprise", "SaaS"],
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },

  // ---- Themes ----
  {
    id: "ai-infrastructure",
    type: "theme",
    name: "AI Infrastructure",
    description:
      "Companies enabling compute, chips, data centres and cloud services.",
    exposureLabel: "14%",
    tags: ["Technology", "AI", "Growth"],
    effects: {
      sectors: { Technology: 4, "Speculative growth": 3 },
      regions: { US: 2 },
    },
  },
  {
    id: "enterprise-software",
    type: "theme",
    name: "Enterprise Software",
    description:
      "Businesses with locked-in contracts and high switching costs.",
    exposureLabel: "11%",
    tags: ["Technology", "Enterprise", "Recurring revenue"],
    effects: { sectors: { Technology: 4 }, regions: { US: 2 } },
  },
  {
    id: "energy-resilience",
    type: "theme",
    name: "Energy Resilience",
    description:
      "Companies linked to energy security, generation and distribution.",
    exposureLabel: "7%",
    tags: ["Energy", "Infrastructure"],
    effects: { sectors: { Energy: 4 }, regions: { Europe: 1 } },
  },
  {
    id: "luxury-brands",
    type: "theme",
    name: "Luxury Brands",
    description: "Premium consumer businesses with pricing power.",
    exposureLabel: "4%",
    tags: ["Luxury", "Consumer", "Pricing power"],
    effects: { sectors: { Luxury: 4 }, regions: { Europe: 2 } },
  },

  // ---- Beliefs ----
  // For beliefs, `effects` describe the "Agree" direction; the engine flips the
  // sign for "Disagree" and zeroes it for "Neutral".
  {
    id: "belief-ai-slower",
    type: "belief",
    name: "AI adoption will be slower than markets expect",
    description:
      "Reduce exposure to the most hyped AI names and increase exposure to durable enterprise businesses.",
    tags: ["AI", "Contrarian"],
    effects: { sectors: { "Speculative growth": -4, Technology: 2 } },
  },
  {
    id: "belief-sticky-enterprise",
    type: "belief",
    name: "Enterprise contracts are stickier than people think",
    description:
      "Increase exposure to companies with recurring B2B revenue and high switching costs.",
    tags: ["Enterprise", "Quality"],
    effects: { sectors: { Technology: 3 }, regions: { US: 1 } },
  },
  {
    id: "belief-energy-demand",
    type: "belief",
    name: "Energy demand will keep rising",
    description:
      "Increase exposure to energy producers, infrastructure and grid-adjacent businesses.",
    tags: ["Energy", "Macro"],
    effects: { sectors: { Energy: 4 } },
  },
  {
    id: "belief-defence",
    type: "belief",
    name: "Defence spending will stay elevated",
    description:
      "Increase exposure to defence and national security supply chains.",
    tags: ["Defence", "Industrials"],
    effects: { sectors: { Technology: 2 }, regions: { US: 2 } },
  },
];

export const TOTAL_CARDS = cards.length;

export function getCard(id: string): BaseCard | undefined {
  return cards.find((card) => card.id === id);
}
