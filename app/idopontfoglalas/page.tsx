import type { Metadata } from "next";
import { BookingPageClient } from "./BookingClient";

export const metadata: Metadata = {
  title: "Időpontfoglalás | Lélekliget Gyógycentrum",
  description:
    "Foglaljon időpontot online egyszerűen, pár kattintással. Válasszon helyszínt, szakembert és időpontot.",
};

export default function IdopontfoglalasPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-brand-50 py-20 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Foglaljon időpontot online
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Válassza ki a kívánt helyszínt és orvost, majd foglalja le a
            kezelést egyszerűen, pár kattintással otthona kényelméből.
          </p>
        </div>
      </section>

      <BookingPageClient />
    </main>
  );
}
