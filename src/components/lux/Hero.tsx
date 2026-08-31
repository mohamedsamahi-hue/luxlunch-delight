import { useRef, useState } from "react";
import spaghetti from "@/assets/dish-spaghetti.png";
import salad from "@/assets/dish-salad.png";
import salmon from "@/assets/dish-salmon.png";

const quickCards = [
  { name: "Veg Crunch", price: "$18", img: salad },
  { name: "Salmon Fois", price: "$34", img: salmon },
];

function TiltShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: -py * 16, y: px * 16 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto aspect-square w-full max-w-[30rem]"
      style={{ perspective: "1100px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div
          className="animate-spin-slow absolute inset-4 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, #FF8107 70deg, #FFAA33 140deg, transparent 220deg)",
            mask: "radial-gradient(circle, transparent 63%, black 64%, black 70%, transparent 71%)",
            WebkitMask:
              "radial-gradient(circle, transparent 63%, black 64%, black 70%, transparent 71%)",
            filter: "drop-shadow(0 0 24px rgba(255,129,7,0.7))",
          }}
        />
        <div className="glass absolute inset-10 rounded-full" />
        <img
          src={spaghetti}
          alt="Signature truffle spaghetti plated in the LuxLunch kitchen"
          width={1024}
          height={1024}
          className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="glass animate-float absolute -bottom-2 -left-2 flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40">
        <img
          src={salad}
          alt="Micro herb garden salad"
          width={768}
          height={768}
          loading="lazy"
          className="h-24 w-24 object-contain sm:h-32 sm:w-32"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative px-4 pt-32 pb-20 sm:px-6 sm:pt-40">
      <div className="glass mx-auto max-w-7xl rounded-[2.5rem] p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs tracking-[0.22em] text-white/80 uppercase">
              Gourmet · Since 1998
            </span>
            <h1 className="font-display mt-6 text-5xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
              Where <span className="text-[var(--lux-orange)]">taste</span> meets{" "}
              <span className="text-[var(--lux-amber)]">perfection</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              A curated procession of gourmet delicacies — heritage produce, rare spices and
              slow-crafted sauces, composed each morning by our Michelin-trained brigade and served
              beneath the amber light of our sage-green kitchen.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="ripple gradient-lux rounded-full px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow-orange)] transition-transform hover:scale-105"
              >
                Discover the tasting menu
              </a>
              <a
                href="#experience"
                className="text-sm font-semibold text-[var(--lux-green)] hover:underline"
              >
                Watch the chef's table →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {quickCards.map((c) => (
                <div
                  key={c.name}
                  className="glass flex flex-1 items-center gap-4 rounded-3xl p-3 pr-5 transition-transform hover:-translate-y-1"
                >
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <img
                      src={c.img}
                      alt={c.name}
                      width={768}
                      height={768}
                      loading="lazy"
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <p className="text-xs text-white/60">{c.price}</p>
                    <button className="mt-1 text-xs font-semibold text-[var(--lux-green)] hover:underline">
                      Order now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TiltShowcase />
        </div>
      </div>
    </section>
  );
}
