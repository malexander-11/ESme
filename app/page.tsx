import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Disclaimer } from "@/components/Disclaimer";

const supportingPoints = [
  {
    title: "Personalise, don’t day trade",
    icon: (
      <path
        d="M4 12h4l2-6 4 12 2-6h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "See the impact of every choice",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Stay diversified by design",
    icon: (
      <>
        <rect x="3.5" y="11" width="5" height="9.5" rx="1.5" fill="currentColor" opacity="0.5" />
        <rect x="9.5" y="6" width="5" height="14.5" rx="1.5" fill="currentColor" opacity="0.75" />
        <rect x="15.5" y="9" width="5" height="11.5" rx="1.5" fill="currentColor" />
      </>
    ),
  },
];

export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col px-6 pb-8 pt-8">
      <header>
        <Logo />
      </header>

      <div className="flex flex-1 flex-col justify-center py-10">
        <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Configurable index funds
        </span>

        <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Start with the market.
          <br />
          <span className="text-brand-600">Make it yours.</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Begin with a diversified index, then personalise your exposure to
          companies, sectors and themes without losing sight of risk.
        </p>

        <ul className="mt-8 space-y-3">
          {supportingPoints.map((point) => (
            <li key={point.title} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  {point.icon}
                </svg>
              </span>
              <span className="text-[15px] font-medium text-ink">
                {point.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <ButtonLink href="/build/base" size="lg">
          Build my index
        </ButtonLink>
        <Disclaimer />
      </div>
    </main>
  );
}
