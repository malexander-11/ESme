import { cards } from "@/data/cards";
import type { BaseCard } from "@/types";

/** Fisher–Yates shuffle (returns a new array). */
function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Build one shuffled "batch" of the full card pool. The endless feed appends a
 * fresh batch each time the user nears the end, so the deck never runs out.
 * `avoidFirstId` prevents a card repeating back-to-back across batch seams.
 */
export function shuffledBatch(avoidFirstId?: string): BaseCard[] {
  const batch = shuffle(cards);
  if (avoidFirstId && batch.length > 1 && batch[0].id === avoidFirstId) {
    [batch[0], batch[1]] = [batch[1], batch[0]];
  }
  return batch;
}
