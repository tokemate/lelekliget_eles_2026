import type { Metadata } from "next";
import { KapcsolatPageClient } from "./KapcsolatClient";

export const metadata: Metadata = {
  title: "Kapcsolat | Lélekliget Gyógycentrum",
  description:
    "Vegye fel velünk a kapcsolatot. Rendelőink Inárcson és Dabasban várják. Időpontfoglalás, kérdések, nyitvatartás.",
};

export default function KapcsolatPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-brand-50 py-20 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Keressen minket
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kérdése van szolgáltatásainkkal kapcsolatban? Forduljon hozzánk
            bizalommal, kollégáink készséggel állnak rendelkezésére Inárcson és
            Dabason is.
          </p>
        </div>
      </section>

      <KapcsolatPageClient />
    </main>
  );
}
