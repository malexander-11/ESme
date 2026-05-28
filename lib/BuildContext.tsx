"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_BASE_INDEX_ID } from "@/data/baseIndices";
import type { CardAction, Choice } from "@/types";

interface BuildState {
  baseIndexId: string;
  choices: Choice[];
  indexName: string;
}

interface BuildContextValue extends BuildState {
  setBaseIndex: (id: string) => void;
  setChoice: (cardId: string, action: CardAction) => void;
  getChoice: (cardId: string) => CardAction | undefined;
  setIndexName: (name: string) => void;
  reset: () => void;
  hydrated: boolean;
}

const STORAGE_KEY = "esme:build-state";

const initialState: BuildState = {
  baseIndexId: DEFAULT_BASE_INDEX_ID,
  choices: [],
  indexName: "",
};

const BuildContext = createContext<BuildContextValue | null>(null);

export function BuildProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BuildState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  // Load any persisted progress once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<BuildState>;
        setState({
          baseIndexId: parsed.baseIndexId ?? initialState.baseIndexId,
          choices: parsed.choices ?? [],
          indexName: parsed.indexName ?? "",
        });
      }
    } catch {
      // Ignore malformed storage — fall back to defaults.
    }
    setHydrated(true);
  }, []);

  // Persist on change (after hydration so we don't clobber stored state).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage may be unavailable (private mode) — non-fatal for a prototype.
    }
  }, [state, hydrated]);

  const value = useMemo<BuildContextValue>(
    () => ({
      ...state,
      hydrated,
      setBaseIndex: (id) =>
        setState((prev) => ({ ...prev, baseIndexId: id })),
      setChoice: (cardId, action) =>
        setState((prev) => {
          const others = prev.choices.filter((c) => c.cardId !== cardId);
          return { ...prev, choices: [...others, { cardId, action }] };
        }),
      getChoice: (cardId) =>
        state.choices.find((c) => c.cardId === cardId)?.action,
      setIndexName: (name) =>
        setState((prev) => ({ ...prev, indexName: name })),
      reset: () => setState(initialState),
    }),
    [state, hydrated],
  );

  return (
    <BuildContext.Provider value={value}>{children}</BuildContext.Provider>
  );
}

export function useBuild(): BuildContextValue {
  const ctx = useContext(BuildContext);
  if (!ctx) {
    throw new Error("useBuild must be used within a BuildProvider");
  }
  return ctx;
}
