import type { BaseCard } from "@/types";

/**
 * The pool of customisation cards (companies, themes and beliefs) that feeds
 * the endless swipe deck. `effects` values are directional, illustrative nudges
 * (per +1 of action) used by lib/impact.ts — intentionally simple, not a real
 * financial model. `ai` holds mocked optimist/pessimist takes (illustrative,
 * not advice).
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
    ai: {
      optimist:
        "Cloud and AI demand keep compounding on top of software the world already runs on.",
      pessimist:
        "Huge AI capex could outrun real revenue, and antitrust scrutiny is rising.",
    },
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "nvidia",
    type: "company",
    name: "Nvidia",
    description: "Semiconductors powering AI infrastructure.",
    exposureLabel: "3.2%",
    tags: ["Technology", "Semiconductors", "AI"],
    ai: {
      optimist:
        "It sells the picks and shovels of the AI boom with margins rivals can't match.",
      pessimist:
        "Expectations are sky-high; any slowdown in AI spending hits it hardest.",
    },
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
    ai: {
      optimist:
        "More than a carmaker — energy storage and autonomy could open vast new markets.",
      pessimist:
        "Margins are squeezed by EV price wars and the valuation prices in a lot of hope.",
    },
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
    ai: {
      optimist:
        "Cash-generative today while funding a measured pivot toward lower-carbon energy.",
      pessimist:
        "Long-term demand and policy risk hang over fossil-fuel earnings.",
    },
    effects: { sectors: { Energy: 4 }, regions: { Europe: 1, UK: 1 } },
  },
  {
    id: "unilever",
    type: "company",
    name: "Unilever",
    description: "Consumer staples with global household brands.",
    exposureLabel: "0.4%",
    tags: ["Consumer staples", "Defensive"],
    ai: {
      optimist:
        "Everyday brands and emerging-market reach give steady, defensive cash flows.",
      pessimist:
        "Low growth and private-label competition can cap the upside.",
    },
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
    ai: {
      optimist:
        "Mission-critical software with high switching costs and growing AI add-ons.",
      pessimist:
        "Growth is maturing and buyers are scrutinising software budgets.",
    },
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "apple",
    type: "company",
    name: "Apple",
    description: "Consumer technology — devices, services and silicon.",
    exposureLabel: "4.1%",
    tags: ["Technology", "Consumer", "Hardware"],
    ai: {
      optimist:
        "A loyal install base and fast-growing services keep the cash machine humming.",
      pessimist:
        "Hardware sales are mature and it has looked slow to ship its own AI.",
    },
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "amazon",
    type: "company",
    name: "Amazon",
    description: "E-commerce and cloud computing at global scale.",
    exposureLabel: "2.9%",
    tags: ["Technology", "Cloud", "Retail"],
    ai: {
      optimist:
        "Cloud profits fund relentless reinvestment across retail, ads and logistics.",
      pessimist:
        "Thin retail margins and heavy spending can squeeze overall profitability.",
    },
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
    ai: {
      optimist:
        "Dominant search plus deep AI research and a fast-growing cloud business.",
      pessimist:
        "AI chat could erode classic search ads, and regulators are circling.",
    },
    effects: { sectors: { Technology: 3 }, regions: { US: 2 } },
  },
  {
    id: "meta",
    type: "company",
    name: "Meta",
    description: "Social platforms investing heavily in AI and compute.",
    exposureLabel: "1.8%",
    tags: ["Technology", "Social", "AI"],
    ai: {
      optimist:
        "Billions of daily users and AI-tuned ads drive efficient, scalable profits.",
      pessimist:
        "Open-ended AI and metaverse spending could strain returns for years.",
    },
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
    ai: {
      optimist:
        "Scale, a fortress balance sheet and rates that lift net interest income.",
      pessimist:
        "Banks are cyclical — recessions and credit losses can bite quickly.",
    },
    effects: { sectors: { Financials: 4 }, regions: { US: 2 } },
  },
  {
    id: "visa",
    type: "company",
    name: "Visa",
    description: "Global payments network with wide margins.",
    exposureLabel: "1.0%",
    tags: ["Financials", "Payments"],
    ai: {
      optimist:
        "A toll booth on global spending with huge margins and a powerful network.",
      pessimist:
        "Fintech rails and regulation of interchange fees are long-term threats.",
    },
    effects: { sectors: { Financials: 3 }, regions: { US: 2 } },
  },
  {
    id: "berkshire",
    type: "company",
    name: "Berkshire Hathaway",
    description: "Diversified holding company with an insurance core.",
    exposureLabel: "1.4%",
    tags: ["Financials", "Conglomerate", "Quality"],
    ai: {
      optimist:
        "A diversified, cash-rich conglomerate built to compound through cycles.",
      pessimist:
        "Sheer size limits growth, and succession is an open question.",
    },
    effects: { sectors: { Financials: 3 }, regions: { US: 1 } },
  },
  {
    id: "jnj",
    type: "company",
    name: "Johnson & Johnson",
    description: "Healthcare, pharmaceuticals and medical devices.",
    exposureLabel: "1.1%",
    tags: ["Healthcare", "Pharma", "Defensive"],
    ai: {
      optimist:
        "Diversified, defensive healthcare demand with a reliable dividend.",
      pessimist:
        "Patent cliffs and litigation risk can weigh on results.",
    },
    effects: { sectors: { Healthcare: 4 }, regions: { US: 1 } },
  },
  {
    id: "eli-lilly",
    type: "company",
    name: "Eli Lilly",
    description: "Pharmaceuticals with a strong late-stage pipeline.",
    exposureLabel: "1.5%",
    tags: ["Healthcare", "Pharma", "Growth"],
    ai: {
      optimist:
        "Blockbuster metabolic drugs could drive years of above-average growth.",
      pessimist:
        "The valuation leans on a few drugs; competition is intensifying fast.",
    },
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
    ai: {
      optimist:
        "A leader in fast-growing weight and diabetes treatment markets.",
      pessimist:
        "Supply constraints and rival drugs could erode its lead.",
    },
    effects: { sectors: { Healthcare: 4 }, regions: { Europe: 2 } },
  },
  {
    id: "tsmc",
    type: "company",
    name: "TSMC",
    description: "Leading-edge contract chip manufacturing.",
    exposureLabel: "1.0%",
    tags: ["Technology", "Semiconductors", "Asia"],
    ai: {
      optimist:
        "The indispensable foundry behind nearly every advanced chip on earth.",
      pessimist:
        "Concentrated in Taiwan, it carries real geopolitical and cyclical risk.",
    },
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
    ai: {
      optimist:
        "A near-monopoly on the machines needed to make cutting-edge chips.",
      pessimist:
        "Lumpy orders and export controls make revenue volatile.",
    },
    effects: { sectors: { Technology: 3 }, regions: { Europe: 2 } },
  },
  {
    id: "lvmh",
    type: "company",
    name: "LVMH",
    description: "Global luxury houses across fashion and spirits.",
    exposureLabel: "0.6%",
    tags: ["Luxury", "Consumer", "Europe"],
    ai: {
      optimist:
        "Irreplaceable brands with pricing power and aspirational global demand.",
      pessimist:
        "Luxury spending is cyclical and exposed to a slowing China.",
    },
    effects: { sectors: { Luxury: 4 }, regions: { Europe: 2 } },
  },
  {
    id: "nestle",
    type: "company",
    name: "Nestlé",
    description: "Global food and beverage staples.",
    exposureLabel: "0.5%",
    tags: ["Consumer staples", "Defensive", "Europe"],
    ai: {
      optimist:
        "Defensive demand and a deep brand portfolio across the globe.",
      pessimist:
        "Slow growth and health-trend headwinds limit excitement.",
    },
    effects: { sectors: { "Consumer staples": 4 }, regions: { Europe: 2 } },
  },
  {
    id: "coca-cola",
    type: "company",
    name: "Coca-Cola",
    description: "Global beverages with iconic brands.",
    exposureLabel: "0.5%",
    tags: ["Consumer staples", "Defensive"],
    ai: {
      optimist:
        "A timeless brand and distribution moat that funds a dependable dividend.",
      pessimist:
        "Sugar-trend pressure and mature markets cap growth.",
    },
    effects: { sectors: { "Consumer staples": 3 }, regions: { US: 1 } },
  },
  {
    id: "caterpillar",
    type: "company",
    name: "Caterpillar",
    description: "Heavy machinery for construction and mining.",
    exposureLabel: "0.4%",
    tags: ["Industrials", "Cyclical"],
    ai: {
      optimist:
        "A bet on infrastructure, mining and reshoring spending.",
      pessimist:
        "Deeply cyclical — earnings swing hard with the economy.",
    },
    effects: { sectors: { Industrials: 4 }, regions: { US: 1 } },
  },
  {
    id: "lockheed",
    type: "company",
    name: "Lockheed Martin",
    description: "Aerospace and defence prime contractor.",
    exposureLabel: "0.4%",
    tags: ["Industrials", "Defence"],
    ai: {
      optimist:
        "Long government contracts and elevated defence budgets give visibility.",
      pessimist:
        "Reliant on government spending and exposed to budget politics.",
    },
    effects: { sectors: { Industrials: 3 }, regions: { US: 2 } },
  },
  {
    id: "exxon",
    type: "company",
    name: "ExxonMobil",
    description: "Integrated oil and gas major.",
    exposureLabel: "0.7%",
    tags: ["Energy", "Oil & gas"],
    ai: {
      optimist:
        "Strong cash flows and shareholder returns while oil demand persists.",
      pessimist:
        "Commodity-price swings and the energy transition cloud the long run.",
    },
    effects: { sectors: { Energy: 4 }, regions: { US: 1 } },
  },
  {
    id: "alibaba",
    type: "company",
    name: "Alibaba",
    description: "Chinese e-commerce and cloud services.",
    exposureLabel: "0.5%",
    tags: ["Technology", "Emerging markets", "Asia"],
    ai: {
      optimist:
        "A dominant platform trading cheaply with cloud and overseas optionality.",
      pessimist:
        "Regulatory and geopolitical risk in China keeps a lid on sentiment.",
    },
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
    ai: {
      optimist:
        "WeChat is a super-app moat spanning gaming, payments and social.",
      pessimist:
        "Gaming regulation and China risk can hit growth without warning.",
    },
    effects: {
      sectors: { Technology: 2 },
      regions: { "Emerging markets": 3, Asia: 2 },
    },
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
    ai: {
      optimist:
        "The build-out of AI compute could be a multi-year spending supercycle.",
      pessimist:
        "If AI returns disappoint, today's capex could become tomorrow's glut.",
    },
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
    ai: {
      optimist:
        "Recurring revenue and sticky contracts make for durable, high-margin cash flows.",
      pessimist:
        "AI tools could compress seat-based pricing and reshuffle winners.",
    },
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
    ai: {
      optimist:
        "Energy security and electrification underpin steady, real-world demand.",
      pessimist:
        "Policy shifts and commodity cycles make returns uneven.",
    },
    effects: { sectors: { Energy: 4 }, regions: { Europe: 1 } },
  },
  {
    id: "luxury-brands",
    type: "theme",
    name: "Luxury Brands",
    description: "Premium consumer businesses with pricing power.",
    exposureLabel: "4%",
    tags: ["Luxury", "Consumer", "Pricing power"],
    ai: {
      optimist:
        "Scarcity and brand heritage support pricing power through cycles.",
      pessimist:
        "Discretionary spending fades fast when consumers tighten up.",
    },
    effects: { sectors: { Luxury: 4 }, regions: { Europe: 2 } },
  },
  {
    id: "semiconductors",
    type: "theme",
    name: "Semiconductors",
    description: "The global chip supply chain, end to end.",
    exposureLabel: "9%",
    tags: ["Technology", "Semiconductors"],
    ai: {
      optimist:
        "Chips are the backbone of AI, autos and everything digital.",
      pessimist:
        "Notoriously cyclical and increasingly caught in trade tensions.",
    },
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
    ai: {
      optimist:
        "Rising threats make security a non-negotiable, growing budget line.",
      pessimist:
        "A crowded field where consolidation can pressure smaller players.",
    },
    effects: { sectors: { Technology: 4 }, regions: { US: 1 } },
  },
  {
    id: "clean-energy",
    type: "theme",
    name: "Clean Energy",
    description: "Renewables, storage and electrification.",
    exposureLabel: "6%",
    tags: ["Energy", "Climate"],
    ai: {
      optimist:
        "Falling costs and policy support point to decades of growth.",
      pessimist:
        "Rate-sensitive and policy-dependent — returns have been bumpy.",
    },
    effects: { sectors: { Energy: 3, "Speculative growth": 1 } },
  },
  {
    id: "healthcare-innovation",
    type: "theme",
    name: "Healthcare Innovation",
    description: "Drug discovery, devices and diagnostics.",
    exposureLabel: "10%",
    tags: ["Healthcare", "Innovation"],
    ai: {
      optimist:
        "Ageing populations and new science expand demand for decades.",
      pessimist:
        "Trials fail, pricing is political, and approvals are slow.",
    },
    effects: { sectors: { Healthcare: 4 } },
  },
  {
    id: "financial-services",
    type: "theme",
    name: "Financial Services",
    description: "Banks, payments networks and insurers.",
    exposureLabel: "12%",
    tags: ["Financials"],
    ai: {
      optimist:
        "Higher rates and a broad economy lift a diversified financial sector.",
      pessimist:
        "Credit cycles and disruption from fintech are persistent risks.",
    },
    effects: { sectors: { Financials: 4 } },
  },
  {
    id: "defence-security",
    type: "theme",
    name: "Defence & Security",
    description: "Defence primes and national-security suppliers.",
    exposureLabel: "4%",
    tags: ["Industrials", "Defence"],
    ai: {
      optimist:
        "Geopolitical tension is driving multi-year increases in defence budgets.",
      pessimist:
        "Earnings hinge on government priorities that can shift.",
    },
    effects: { sectors: { Industrials: 4 }, regions: { US: 1 } },
  },
  {
    id: "emerging-markets-growth",
    type: "theme",
    name: "Emerging Markets Growth",
    description: "Faster-growing economies outside the developed West.",
    exposureLabel: "8%",
    tags: ["Emerging markets", "Growth"],
    ai: {
      optimist:
        "Young populations and rising incomes offer long-run growth at low prices.",
      pessimist:
        "Currency, governance and political risk can erase the gains.",
    },
    effects: { regions: { "Emerging markets": 4, Asia: 2 } },
  },
  {
    id: "dividend-payers",
    type: "theme",
    name: "Dividend Payers",
    description: "Mature companies with long records of paying dividends.",
    exposureLabel: "9%",
    tags: ["Income", "Quality", "Defensive"],
    ai: {
      optimist:
        "Steady income and lower volatility can smooth the ride.",
      pessimist:
        "Slower growth and rate competition from bonds limit upside.",
    },
    effects: { sectors: { "Consumer staples": 2, Financials: 1 } },
  },
  {
    id: "infrastructure",
    type: "theme",
    name: "Infrastructure",
    description: "Roads, grids, utilities and transport assets.",
    exposureLabel: "5%",
    tags: ["Industrials", "Infrastructure"],
    ai: {
      optimist:
        "Long-lived, inflation-linked assets with reliable cash flows.",
      pessimist:
        "Capital-intensive and sensitive to interest rates.",
    },
    effects: { sectors: { Industrials: 3, Energy: 1 } },
  },

  // ---- Beliefs (effects describe the "Agree" direction) ----
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
    effects: { sectors: { Industrials: 2 }, regions: { US: 2 } },
  },
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
