import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Culinary Experience", href: "#experience" },
  { label: "Chef's Special", href: "#reviews" },
  { label: "Reservations", href: "#reservations" },
];

function DomeLogo() {
  return (
    <svg viewBox="0 0 48 40" className="h-9 w-11" aria-hidden="true">
      <defs>
        <linearGradient id="domeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFAA33" />
          <stop offset="100%" stopColor="#FF8107" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="6" r="3" fill="url(#domeGrad)" />
      <path d="M4 28a20 16 0 0 1 40 0Z" fill="url(#domeGrad)" />
      <rect x="1" y="29" width="46" height="4" rx="2" fill="url(#domeGrad)" opacity="0.75" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass-strong" : "glass",
        )}
        style={scrolled ? { backdropFilter: "blur(38px) saturate(170%)" } : undefined}
      >
        <a href="#home" className="flex items-center gap-2">
          <DomeLogo />
          <span className="font-display text-2xl font-bold tracking-wide text-white">LuxLunch</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--lux-green)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-semibold text-[var(--lux-green)] transition-all hover:drop-shadow-[var(--shadow-glow-green)]">
            Be a member
          </button>
          <a
            href="#reservations"
            className="ripple gradient-lux rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow-orange)] transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-7xl rounded-3xl p-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-white/85 hover:text-[var(--lux-green)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-4">
            <button className="text-sm font-semibold text-[var(--lux-green)]">Be a member</button>
            <a
              href="#reservations"
              onClick={() => setOpen(false)}
              className="gradient-lux rounded-full px-5 py-2 text-sm font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
