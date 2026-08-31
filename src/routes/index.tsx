import { createFileRoute } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen-bg.jpg";
import { Navbar } from "@/components/lux/Navbar";
import { Hero } from "@/components/lux/Hero";
import { MenuSwiper } from "@/components/lux/MenuSwiper";
import { ChefTable } from "@/components/lux/ChefTable";
import { Reviews } from "@/components/lux/Reviews";
import { Reservation } from "@/components/lux/Reservation";
import { Footer } from "@/components/lux/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "LuxLunch — Where Taste Meets Perfection";
const description =
  "LuxLunch is a Michelin-trained gourmet dining experience: a curated seasonal menu, a 16-seat chef's table and instant table reservations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src={kitchen}
          alt="Sage green gourmet restaurant kitchen with chefs plating dishes"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,28,20,0.72),rgba(12,20,14,0.86))]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <MenuSwiper />
        <ChefTable />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
