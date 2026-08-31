import { BadgeCheck, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Amelia Hart", role: "Food critic, Sable Mag", quote: "The truffle spaghetti alone justifies the flight. Faultless from amuse to petit four.", stars: 5 },
  { name: "Idris Kane", role: "Regular guest", quote: "Twelve visits and the menu has never repeated itself once. Extraordinary discipline.", stars: 5 },
  { name: "Noor Haddad", role: "Sommelier", quote: "Pairings that actually argue with the dish, in the best possible way.", stars: 5 },
  { name: "Theo Marchand", role: "Chef, Maison Verte", quote: "The kitchen runs like a quartet. You taste the calm on the plate.", stars: 4 },
  { name: "Sana Rehman", role: "Travel writer", quote: "Glass, brass and sage green — and food that outshines all of it.", stars: 5 },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <article className="glass w-[19rem] shrink-0 rounded-[1.75rem] p-6 sm:w-[23rem]">
      <div className="flex items-center gap-3">
        <div className="gradient-lux grid h-11 w-11 place-items-center rounded-full font-semibold text-white">
          {r.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
            {r.name}
            <BadgeCheck className="h-4 w-4 text-[var(--lux-green)]" />
          </p>
          <p className="truncate text-xs text-white/55">{r.role}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            style={{
              color: "var(--lux-amber)",
              fill: i < r.stars ? "var(--lux-amber)" : "transparent",
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/75">"{r.quote}"</p>
      <p className="mt-4 text-[11px] tracking-[0.18em] text-[var(--lux-green)] uppercase">
        Verified dining
      </p>
    </article>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="py-24">
      <Reveal className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs tracking-[0.28em] text-[var(--lux-amber)] uppercase">
            Guest Book
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
            Loved by the table next to yours
          </h2>
        </div>
      </Reveal>

      <div className="group relative mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
