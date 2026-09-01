import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Clock, Flame } from "lucide-react";
import spaghetti from "@/assets/dish-spaghetti.png";
import salad from "@/assets/dish-salad.png";
import salmon from "@/assets/dish-salmon.png";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const categories = ["Starters", "Main Course", "Hi-Tea", "Desserts"] as const;
type Category = (typeof categories)[number];

type Dish = {
  name: string;
  note: string;
  kcal: number;
  time: string;
  price: string;
  img: string;
  cat: Category;
};

const dishes: Dish[] = [
  { name: "Veg Crunch Garden", note: "Heirloom leaves, aged pecorino", kcal: 240, time: "10 min", price: "18", img: salad, cat: "Starters" },
  { name: "Salmon Fois", note: "Torched salmon, citrus pearls", kcal: 520, time: "22 min", price: "34", img: salmon, cat: "Starters" },
  { name: "Golden Twirl Bites", note: "Crisped pasta, saffron aioli", kcal: 310, time: "12 min", price: "16", img: spaghetti, cat: "Starters" },
  { name: "Amber Beet Tartare", note: "Smoked beet, horseradish cream", kcal: 210, time: "9 min", price: "19", img: salad, cat: "Starters" },
  { name: "Citrus Cure Salmon", note: "Yuzu cure, fennel pollen", kcal: 280, time: "14 min", price: "24", img: salmon, cat: "Starters" },
  { name: "Truffle Spaghetti", note: "Black truffle, 36-month parmesan", kcal: 610, time: "18 min", price: "29", img: spaghetti, cat: "Main Course" },
  { name: "Cedar Salmon Royale", note: "Cedar smoked, saffron beurre", kcal: 480, time: "26 min", price: "42", img: salmon, cat: "Main Course" },
  { name: "Garden Verde Bowl", note: "Charred greens, green goddess", kcal: 380, time: "16 min", price: "26", img: salad, cat: "Main Course" },
  { name: "Saffron Tagliatelle", note: "Hand-cut, brown butter, sage", kcal: 560, time: "20 min", price: "31", img: spaghetti, cat: "Main Course" },
  { name: "Ember Salmon en Croûte", note: "Herb crust, champagne velouté", kcal: 540, time: "28 min", price: "44", img: salmon, cat: "Main Course" },
  { name: "Herb Tea Platter", note: "Seasonal greens, honey drizzle", kcal: 180, time: "8 min", price: "14", img: salad, cat: "Hi-Tea" },
  { name: "Emerald Bloom", note: "Pistachio, matcha, sea salt", kcal: 275, time: "11 min", price: "17", img: salad, cat: "Hi-Tea" },
  { name: "Salmon Rillette Toast", note: "Brioche, dill crème fraîche", kcal: 320, time: "10 min", price: "19", img: salmon, cat: "Hi-Tea" },
  { name: "Angel Hair Nest", note: "Light pasta nest, lemon zest", kcal: 290, time: "9 min", price: "15", img: spaghetti, cat: "Hi-Tea" },
  { name: "Golden Angel Nest", note: "Sweet pasta nest, vanilla cream", kcal: 390, time: "15 min", price: "16", img: spaghetti, cat: "Desserts" },
  { name: "Citrus Cloud", note: "Blood orange, torched meringue", kcal: 300, time: "12 min", price: "15", img: salmon, cat: "Desserts" },
  { name: "Matcha Garden", note: "Matcha mousse, candied herbs", kcal: 260, time: "10 min", price: "14", img: salad, cat: "Desserts" },
  { name: "Caramel Silk Twirl", note: "Salted caramel, cocoa soil", kcal: 420, time: "13 min", price: "17", img: spaghetti, cat: "Desserts" },
  { name: "Amber Honey Sphere", note: "Wildflower honey, smoked cream", kcal: 340, time: "11 min", price: "18", img: salmon, cat: "Desserts" },
];

export function MenuSwiper() {
  const [active, setActive] = useState<Category>("Starters");
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", dragFree: true, loop: false });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const update = () => {
      const idx = categories.indexOf(active);
      const el = tabRefs.current[idx];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  const scroll = useCallback((dir: -1 | 1) => {
    if (!embla) return;
    dir === -1 ? embla.scrollPrev() : embla.scrollNext();
  }, [embla]);

  const visible = dishes.filter((d) => d.cat === active);

  return (
    <section id="menu" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.28em] text-[var(--lux-amber)] uppercase">
                The Collection
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
                Explore Our <span className="text-gradient-lux">Curated Menu</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous dishes"
                className="glass grid h-11 w-11 place-items-center rounded-full text-white transition-all duration-200 hover:text-[var(--lux-amber)] active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next dishes"
                className="glass grid h-11 w-11 place-items-center rounded-full text-white transition-all duration-200 hover:text-[var(--lux-amber)] active:scale-95"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass relative mt-9 inline-flex flex-wrap gap-1 rounded-full p-1.5">
            <span
              aria-hidden="true"
              className={cn(
                "gradient-lux absolute top-1.5 bottom-1.5 rounded-full shadow-[var(--shadow-glow-orange)] transition-all duration-300 ease-out",
                !indicator.ready && "opacity-0",
              )}
              style={{ left: indicator.left, width: indicator.width }}
            />
            {categories.map((c, i) => (
              <button
                key={c}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => {
                  setActive(c);
                  embla?.scrollTo(0);
                }}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                  active === c ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {visible.map((d) => (
              <article
                key={d.name}
                className="glass group relative min-w-0 flex-[0_0_86%] rounded-[2rem] p-5 sm:flex-[0_0_46%] lg:flex-[0_0_31%]"
              >
                <div className="relative grid aspect-4/3 place-items-center overflow-hidden rounded-3xl bg-white/8">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="h-4/5 w-4/5 object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)]"
                  />
                  <span className="glass absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                    <Flame className="h-3 w-3 text-[var(--lux-orange)]" />
                    {d.kcal} kcal
                  </span>
                  <span className="glass absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                    <Clock className="h-3 w-3 text-[var(--lux-amber)]" />
                    {d.time}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{d.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{d.note}</p>
                  </div>
                  <p className="text-xl font-bold text-[var(--lux-amber)]">${d.price}</p>
                </div>

                <button className="mt-5 w-full rounded-full py-3 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 focus-visible:opacity-100 hover:brightness-110 active:scale-95"
                  style={{ background: "var(--lux-green)", boxShadow: "var(--shadow-glow-green)" }}>
                  Add to Order
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
