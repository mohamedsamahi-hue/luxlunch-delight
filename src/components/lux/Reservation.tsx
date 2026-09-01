import { useState } from "react";
import { Loader2, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const times = ["12:00", "13:30", "15:00", "18:30", "20:00", "21:30"];

type Table = { id: string; x: number; y: number; seats: number; taken?: boolean };
const tables: Table[] = [
  { id: "T1", x: 12, y: 18, seats: 2 },
  { id: "T2", x: 40, y: 12, seats: 4 },
  { id: "T3", x: 70, y: 20, seats: 2, taken: true },
  { id: "T4", x: 16, y: 55, seats: 6 },
  { id: "T5", x: 45, y: 52, seats: 4 },
  { id: "T6", x: 74, y: 58, seats: 8 },
  { id: "T7", x: 30, y: 82, seats: 2, taken: true },
  { id: "T8", x: 62, y: 84, seats: 4 },
];

export function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[3]);
  const [guests, setGuests] = useState(2);
  const [table, setTable] = useState<string | null>("T5");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`Table ${table ?? "—"} held for ${guests} at ${time}`);
    }, 1400);
  };

  return (
    <section id="reservations" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.28em] text-[var(--lux-amber)] uppercase">
              Reservations
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Choose your table
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={submit}
            className="glass mt-12 grid gap-10 rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-2 lg:p-12"
          >
            <div className="space-y-8">
              <div>
                <label htmlFor="res-date" className="text-sm font-medium text-white/80">
                  Date
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="glass mt-2 w-full rounded-2xl px-5 py-3.5 text-white outline-none focus:border-[var(--lux-green)]"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white/80">Time slot</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={cn(
                        "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                        time === t
                          ? "gradient-lux text-white shadow-[var(--shadow-glow-orange)]"
                          : "glass text-white/75 hover:text-white",
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white/80">Guests</p>
                <div className="glass mt-3 inline-flex items-center gap-6 rounded-full px-4 py-2.5">
                  <button
                    type="button"
                    aria-label="Remove guest"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/12 text-white hover:bg-white/20"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-xl font-semibold text-white">{guests}</span>
                  <button
                    type="button"
                    aria-label="Add guest"
                    onClick={() => setGuests((g) => Math.min(12, g + 1))}
                    className="gradient-lux grid h-9 w-9 place-items-center rounded-full text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="ripple gradient-lux flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow-orange)] transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-70"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Holding your table…" : "Confirm reservation"}
              </button>
            </div>

            <div>
              <p className="text-sm font-medium text-white/80">Floorplan</p>
              <div className="glass relative mt-3 aspect-4/3 w-full overflow-hidden rounded-[2rem]">
                <div className="absolute inset-x-8 top-4 h-1.5 rounded-full bg-white/20" />
                <span className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] text-white/40 uppercase">
                  Open Pass
                </span>
                {tables.map((t) => {
                  const selected = table === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      disabled={t.taken}
                      onClick={() => setTable(t.id)}
                      style={{
                        left: `${t.x}%`,
                        top: `${t.y}%`,
                        background: t.taken
                          ? "rgba(255,255,255,0.08)"
                          : selected
                            ? "var(--lux-orange)"
                            : "var(--lux-green)",
                        boxShadow: t.taken
                          ? "none"
                          : selected
                            ? "var(--shadow-glow-orange)"
                            : "var(--shadow-glow-green)",
                      }}
                      className={cn(
                         "absolute grid h-14 w-14 place-items-center rounded-2xl text-xs font-bold text-white transition-all duration-200",
                        t.taken ? "cursor-not-allowed text-white/35" : "hover:brightness-125 active:scale-95",
                      )}
                    >
                      <span>{t.id}</span>
                      <span className="text-[10px] font-medium opacity-80">{t.seats}p</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-5 text-xs text-white/65">
                <span className="flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full" style={{ background: "var(--lux-green)" }} />
                  Available
                </span>
                <span className="flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full" style={{ background: "var(--lux-orange)" }} />
                  Selected
                </span>
                <span className="flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full bg-white/20" />
                  Reserved
                </span>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
