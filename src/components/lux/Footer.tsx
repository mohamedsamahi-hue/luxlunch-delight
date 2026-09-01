import { useState } from "react";
import { ArrowRight, Instagram, Facebook, Twitter, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const quickLinks = ["Home", "Menu", "Culinary Experience", "Chef's Special", "Reservations"];
const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "X" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-[2.5rem] p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-white">LuxLunch</h3>
            <p className="mt-3 max-w-sm text-sm text-white/65">
              Join the list for seasonal menu drops, chef's table releases and members-only evenings.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("You're on the list.");
                setEmail("");
              }}
              className="glass mt-6 flex max-w-md items-center gap-2 rounded-full p-1.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 place-items-center rounded-full text-white transition-all duration-200 hover:brightness-125 active:scale-95"
                style={{ background: "var(--lux-green)", boxShadow: "var(--shadow-glow-green)" }}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick links</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${(l.toLowerCase().split(" ")[0] ?? "").replace("'", "")}`}
                    className="text-sm text-white/65 transition-colors hover:text-[var(--lux-green)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock className="h-4 w-4 text-[var(--lux-amber)]" /> Opening hours
              </p>
              <p className="mt-2 text-sm text-white/65">Tue – Sun · 12:00 — 23:00</p>
              <p className="text-sm text-white/65">Monday closed</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4 text-[var(--lux-amber)]" /> Address
              </p>
              <p className="mt-2 text-sm text-white/65">14 Verdant Row, Marylebone, London</p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="glass grid h-10 w-10 place-items-center rounded-full text-white transition-all hover:text-[var(--lux-amber)] hover:shadow-[var(--shadow-glow-orange)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} LuxLunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
