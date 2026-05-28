import type { BaseCard } from "@/types";

/**
 * The pool of customisation cards (companies, themes and beliefs) that feeds
 * the endless swipe deck. `effects` values are directional, illustrative nudges
 * (per +1 of action) used by lib/impact.ts — intentionally simple, not a real
 * financial model.
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

  // ---- More companies (for the endless feed) ----
  {
    id: "apple",
    type: "company",
    name: "Apple",
    description: "Consumer technology — devices, services and silicon.",
    exposureLabel: "4.1%",
    tags: ["Technology", "Consumer", "Hardware"],
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "amazon",
    type: "company",
    name: "Amazon",
    description: "E-commerce and cloud computing at global scale.",
    exposureLabel: "2.9%",
    tags: ["Technology", "Cloud", "Retail"],
    effects: {
      sectors: { Technology: 3, "Consumer staples": 1 },
      regions: { US: 2 },
    },
  },
  {
    id: "alphabet",
    type: "company",
    name: "Alphabet",
    description: "Search, advertising, cloud and AI research.",
    exposureLabel: "2.6%",
    tags: ["Technology", "Advertising", "AI"],
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "meta",
    type: "company",
    name: "Meta",
    description: "Social platforms investing heavily in AI and compute.",
    exposureLabel: "1.8%",
    tags: ["Technology", "Social", "AI"],
    effects: {
      sectors: { Technology: 2, "Speculative growth": 2 },
      regions: { US: 2 },
    },
  },
  {
    id: "jpmorgan",
    type: "company",
    name: "JPMorgan",
    description: "Diversified global banking and financial services.",
    exposureLabel: "1.3%",
    tags: ["Financials", "Banking"],
    effects: { sectors: { Financials: 4 }, regions: { US: 2 } },
  },
  {
    id: "visa",
    type: "company",
    name: "Visa",
    description: "Global payments network with wide margins.",
    exposureLabel: "1.0%",
    tags: ["Financials", "Payments"],
    effects: { sectors: { Financials: 3 }, regions: { US: 2 } },
  },
  {
    id: "berkshire",
    type: "company",
    name: "Berkshire Hathaway",
    description: "Diversified holding company with an insurance core.",
    exposureLabel: "1.4%",
    tags: ["Financials", "Conglomerate", "Quality"],
    effects: { sectors: { Financials: 3 }, regions: { US: 1 } },
  },
  {
    id: "jnj",
    type: "company",
    name: "Johnson & Johnson",
    description: "Healthcare, pharmaceuticals and medical devices.",
    exposureLabel: "1.1%",
    tags: ["Healthcare", "Pharma", "Defensive"],
    effects: { sectors: { Healthcare: 4 }, regions: { US: 1 } },
  },
  {
    id: "eli-lilly",
    type: "company",
    name: "Eli Lilly",
    description: "Pharmaceuticals with a strong late-stage pipeline.",
    exposureLabel: "1.5%",
    tags: ["Healthcare", "Pharma", "Growth"],
    effects: {
      sectors: { Healthcare: 4, "Speculative growth": 1 },
      regions: { US: 1 },
    },
  },
  {
    id: "novo-nordisk",
    type: "company",
    name: "Novo Nordisk",
    description: "Metabolic and diabetes care leader.",
    exposureLabel: "0.9%",
    tags: ["Healthcare", "Pharma", "Europe"],
    effects: { sectors: { Healthcare: 4 }, regions: { Europe: 2 } },
  },
  {
    id: "tsmc",
    type: "company",
    name: "TSMC",
    description: "Leading-edge contract chip manufacturing.",
    exposureLabel: "1.0%",
    tags: ["Technology", "Semiconductors", "Asia"],
    effects: {
      sectors: { Technology: 3, "Speculative growth": 1 },
      regions: { Asia: 3 },
    },
  },
  {
    id: "asml",
    type: "company",
    name: "ASML",
    description: "Lithography systems essential to advanced chips.",
    exposureLabel: "0.7%",
    tags: ["Technology", "Semiconductors", "Europe"],
    effects: { sectors: { Technology: 3 }, regions: { Europe: 2 } },
  },
  {
    id: "lvmh",
    type: "company",
    name: "LVMH",
    description: "Global luxury houses across fashion and spirits.",
    exposureLabel: "0.6%",
    tags: ["Luxury", "Consumer", "Europe"],
    effects: { sectors: { Luxury: 4 }, regions: { Europe: 2 } },
  },
  {
    id: "nestle",
    type: "company",
    name: "Nestlé",
    description: "Global food and beverage staples.",
    exposureLabel: "0.5%",
    tags: ["Consumer staples", "Defensive", "Europe"],
    effects: { sectors: { "Consumer staples": 4 }, regions: { Europe: 2 } },
  },
  {
    id: "coca-cola",
    type: "company",
    name: "Coca-Cola",
    description: "Global beverages with iconic brands.",
    exposureLabel: "0.5%",
    tags: ["Consumer staples", "Defensive"],
    effects: { sectors: { "Consumer staples": 3 }, regions: { US: 1 } },
  },
  {
    id: "caterpillar",
    type: "company",
    name: "Caterpillar",
    description: "Heavy machinery for construction and mining.",
    exposureLabel: "0.4%",
    tags: ["Industrials", "Cyclical"],
    effects: { sectors: { Industrials: 4 }, regions: { US: 1 } },
  },
  {
    id: "lockheed",
    type: "company",
    name: "Lockheed Martin",
    description: "Aerospace and defence prime contractor.",
    exposureLabel: "0.4%",
    tags: ["Industrials", "Defence"],
    effects: { sectors: { Industrials: 3 }, regions: { US: 2 } },
  },
  {
    id: "exxon",
    type: "company",
    name: "ExxonMobil",
    description: "Integrated oil and gas major.",
    exposureLabel: "0.7%",
    tags: ["Energy", "Oil & gas"],
    effects: { sectors: { Energy: 4 }, regions: { US: 1 } },
  },
  {
    id: "alibaba",
    type: "company",
    name: "Alibaba",
    description: "Chinese e-commerce and cloud services.",
    exposureLabel: "0.5%",
    tags: ["Technology", "Emerging markets", "Asia"],
    effects: {
      sectors: { Technology: 2 },
      regions: { "Emerging markets": 3, Asia: 2 },
    },
  },
  {
    id: "tencent",
    type: "company",
    name: "Tencent",
    description: "Gaming, social and fintech across China.",
    exposureLabel: "0.5%",
    tags: ["Technology", "Emerging markets", "Asia"],
    effects: {
      sectors: { Technology: 2 },
      regions: { "Emerging markets": 3, Asia: 2 },
    },
  },

  // ---- More themes ----
  {
    id: "semiconductors",
    type: "theme",
    name: "Semiconductors",
    description: "The global chip supply chain, end to end.",
    exposureLabel: "9%",
    tags: ["Technology", "Semiconductors"],
    effects: {
      sectors: { Technology: 4, "Speculative growth": 2 },
      regions: { Asia: 1 },
    },
  },
  {
    id: "cybersecurity",
    type: "theme",
    name: "Cybersecurity",
    description: "Software defending networks, data and identities.",
    exposureLabel: "5%",
    tags: ["Technology", "Security"],
    effects: { sectors: { Technology: 4 }, regions: { US: 1 } },
  },
  {
    id: "clean-energy",
    type: "theme",
    name: "Clean Energy",
    description: "Renewables, storage and electrification.",
    exposureLabel: "6%",
    tags: ["Energy", "Climate"],
    effects: { sectors: { Energy: 3, "Speculative growth": 1 } },
  },
  {
    id: "healthcare-innovation",
    type: "theme",
    name: "Healthcare Innovation",
    description: "Drug discovery, devices and diagnostics.",
    exposureLabel: "10%",
    tags: ["Healthcare", "Innovation"],
    effects: { sectors: { Healthcare: 4 } },
  },
  {
    id: "financial-services",
    type: "theme",
    name: "Financial Services",
    description: "Banks, payments networks and insurers.",
    exposureLabel: "12%",
    tags: ["Financials"],
    effects: { sectors: { Financials: 4 } },
  },
  {
    id: "defence-security",
    type: "theme",
    name: "Defence & Security",
    description: "Defence primes and national-security suppliers.",
    exposureLabel: "4%",
    tags: ["Industrials", "Defence"],
    effects: { sectors: { Industrials: 4 }, regions: { US: 1 } },
  },
  {
    id: "emerging-markets-growth",
    type: "theme",
    name: "Emerging Markets Growth",
    description: "Faster-growing economies outside the developed West.",
    exposureLabel: "8%",
    tags: ["Emerging markets", "Growth"],
    effects: { regions: { "Emerging markets": 4, Asia: 2 } },
  },
  {
    id: "dividend-payers",
    type: "theme",
    name: "Dividend Payers",
    description: "Mature companies with long records of paying dividends.",
    exposureLabel: "9%",
    tags: ["Income", "Quality", "Defensive"],
    effects: { sectors: { "Consumer staples": 2, Financials: 1 } },
  },
  {
    id: "infrastructure",
    type: "theme",
    name: "Infrastructure",
    description: "Roads, grids, utilities and transport assets.",
    exposureLabel: "5%",
    tags: ["Industrials", "Infrastructure"],
    effects: { sectors: { Industrials: 3, Energy: 1 } },
  },

  // ---- More beliefs (effects describe the "Agree" direction) ----
  {
    id: "belief-rates-higher",
    type: "belief",
    name: "Interest rates will stay higher for longer",
    description:
      "Increase exposure to banks and insurers that benefit from higher rates, and trim long-duration growth.",
    tags: ["Macro", "Rates"],
    effects: { sectors: { Financials: 3, "Speculative growth": -3 } },
  },
  {
    id: "belief-reshoring",
    type: "belief",
    name: "Supply chains will keep reshoring",
    description:
      "Increase exposure to domestic industrials and infrastructure over globalised trade names.",
    tags: ["Macro", "Industrials"],
    effects: {
      sectors: { Industrials: 3 },
      regions: { "Emerging markets": -2 },
    },
  },
  {
    id: "belief-ageing-demographics",
    type: "belief",
    name: "Ageing populations will lift healthcare demand",
    description:
      "Increase exposure to pharmaceuticals, medical devices and care providers.",
    tags: ["Demographics", "Healthcare"],
    effects: { sectors: { Healthcare: 4 } },
  },
  {
    id: "belief-china-caution",
    type: "belief",
    name: "China exposure carries underappreciated risk",
    description:
      "Reduce exposure to companies heavily dependent on Chinese demand.",
    tags: ["Geopolitics", "Risk"],
    effects: { regions: { "Emerging markets": -3, Asia: -2 } },
  },
  {
    id: "belief-megacap-concentration",
    type: "belief",
    name: "Mega-cap concentration is a risk, not a strength",
    description:
      "Reduce exposure to the very largest index weights in favour of broader diversification.",
    tags: ["Diversification", "Contrarian"],
    effects: { sectors: { Technology: -3, "Speculative growth": -1 } },
  },
  {
    id: "belief-energy-transition",
    type: "belief",
    name: "The energy transition will accelerate",
    description:
      "Increase exposure to clean energy and electrification over traditional fossil fuels.",
    tags: ["Climate", "Energy"],
    effects: { sectors: { Energy: 2, "Speculative growth": 1 } },
  },
];

export const TOTAL_CARDS = cards.length;

export function getCard(id: string): BaseCard | undefined {
  return cards.find((card) => card.id === id);
}
