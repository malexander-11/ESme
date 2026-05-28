# ESme

**Start with the market. Make it yours.**

ESme is a mobile-first **prototype** for *configurable index funds*. You begin
with a sensible, diversified base index, then personalise it — choosing whether
you want more, less, no change, or removal of exposure to specific companies,
sectors, themes and beliefs — while keeping an eye on diversification and risk.

> This is a **front-end-only prototype**. There is no backend, no authentication,
> no payments, no live market data and no real investment execution. All data is
> mocked and illustrative.
>
> _This prototype is for educational and exploratory purposes only. It does not
> provide financial advice._

## Getting started

Requires Node.js 18.18+ (developed on Node 22).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The experience is designed mobile-first — it looks best around **390px wide**
(use your browser's device toolbar), and remains comfortable on desktop.

### Other scripts

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build
npm run lint    # run ESLint
```

## The journey

1. **Landing** — the pitch and a single call to action.
2. **Base index selection** — choose one of four diversified starting indices
   (defaults to the Global Market Index).
3. **Customisation cards** — work through 14 cards one at a time. Companies and
   themes offer **More / Keep / Less / Remove**; beliefs offer
   **Agree / Neutral / Disagree**.
4. **Portfolio impact summary** — see how your choices shift sector and
   geographic exposure, diversification health, top-10 concentration and a
   plain-English risk note. The summary responds directionally to your choices.
5. **Name your index** — type a name or pick from suggestions.
6. **Final comparison** — a compact, mocked chart plus "What you're backing /
   avoiding / Main risk", with options to review your choices or start again.

Progress is kept in `localStorage`, so a refresh won't lose your place.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- React Context for the build-flow state (no backend, no external state library)
- Hand-rolled inline SVG for the comparison chart (no charting dependency)

## Project structure

```
app/                     # routes (App Router)
  page.tsx               # 1. Landing
  build/base/            # 2. Base index selection
  build/customise/       # 3. Customisation cards
  build/impact/          # 4. Portfolio impact summary
  build/name/            # 5. Name your index
  build/compare/         # 6. Final comparison
components/              # UI + feature components (components/ui = primitives)
data/                    # mocked base indices, cards, name suggestions
lib/                     # BuildContext (state), impact engine, formatting
types/                   # shared TypeScript types
```

## How the (mocked) impact engine works

Each card carries small, illustrative directional "effects" on a handful of
sectors and regions (`data/cards.ts`). Your action scales those effects
(`lib/impact.ts`): More/Agree increase exposure, Less/Disagree decrease it,
Remove decreases more, and Keep/Neutral leaves it unchanged. The summary then
derives diversification health, top-10 concentration and a risk note from the
combined tilt. It's intentionally simple and directional — **not** a real
financial model.
