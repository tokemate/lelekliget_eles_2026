import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Szolgáltatások és Árak | Lélekliget Gyógycentrum",
  description:
    "Részletes szolgáltatás- és árlistánk. Gyermekgyógyászat, NLS diagnosztika, funkcionális orvoslás, étrend-tanácsadás és fogászat Inárcson és Dabasban.",
};

export default function SzolgaltatasokPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-brand-50 py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Szolgáltatásaink és Áraink
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ismerje meg részletes, tételes árlistánkat, rendelőink kínálatát és a nálunk dolgozó elkötelezett szakembereket.
          </p>
        </div>
      </section>

      <ServicesPageClient />
    </main>
  );
}
