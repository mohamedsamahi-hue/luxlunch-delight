import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import chef from "@/assets/chef.jpg";
import { Reveal } from "./Reveal";
import { useReveal } from "@/hooks/use-reveal";

function Counter({
  to,
  suffix = "",
  decimals = 0,
  run,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  run: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setValue(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return (
    <span className="text-gradient-lux font-display text-5xl font-bold sm:text-6xl">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 15, suffix: "+", decimals: 0, label: "Michelin Stars Combined" },
  { to: 100, suffix: "%", decimals: 0, label: "Organic Local Sourcing" },
  { to: 4.9, suffix: "/5", decimals: 1, label: "Customer Satisfaction Rate" },
];

export function ChefTable() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.35);

  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div ref={ref} className="glass mx-auto grid max-w-7xl items-center gap-12 rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={chef}
              alt="Michelin-star chef plating a signature dish at the LuxLunch chef's table"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <button
              aria-label="Play the chef's table film"
              className="glass-strong absolute bottom-6 left-6 flex items-center gap-3 rounded-full py-2.5 pr-5 pl-2.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-125 active:scale-95"
            >
              <span className="gradient-lux grid h-10 w-10 place-items-center rounded-full">
                <Play className="h-4 w-4 fill-white text-white" />
              </span>
              The Chef's Table film
            </button>
          </div>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="text-xs tracking-[0.28em] text-[var(--lux-amber)] uppercase">
              The Chef's Table
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Sixteen seats. One evening. Zero repetition.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Chef Arnaud composes each menu the morning it is served, guided by what the growers
              bring to the pass. You sit at the marble counter, close enough to hear the sear.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={200 + i * 160}>
                <div className="glass flex items-center justify-between gap-6 rounded-3xl px-6 py-5">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} run={shown} />
                  <p className="max-w-[10rem] text-right text-sm text-white/70">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
