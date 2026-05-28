import type { BaseIndex } from "@/types";

export const baseIndices: BaseIndex[] = [
  {
    id: "global-market",
    name: "Global Market Index",
    description: "Broad exposure across global equities.",
    risk: "Balanced",
  },
  {
    id: "us-large-cap",
    name: "US Large Cap Index",
    description: "Focused on established US companies.",
    risk: "Higher US concentration",
  },
  {
    id: "uk-all-share",
    name: "UK All-Share Index",
    description: "Exposure to UK-listed companies.",
    risk: "Home-market bias",
  },
  {
    id: "climate-conscious",
    name: "Climate-Conscious Index",
    description: "Reduced exposure to high-emissions sectors.",
    risk: "Sector exclusions",
  },
];

export const DEFAULT_BASE_INDEX_ID = "global-market";

export function getBaseIndex(id: string): BaseIndex | undefined {
  return baseIndices.find((index) => index.id === id);
}
