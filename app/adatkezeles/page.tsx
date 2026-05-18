import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | Lélekliget Gyógycentrum",
  description: "Lélekliget Gyógycentrum Adatkezelési Tájékoztatója.",
};

export default function AdatkezelesPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1>Adatkezelési Tájékoztató</h1>
      <p className="text-gray-500 mt-4 mb-8">Utolsó frissítés: 2026. május</p>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600">
          Az adatkezelési tájékoztató tartalma folyamatban van. Kérjük,
          látogasson vissza később, vagy vegye fel velünk a kapcsolatot a{" "}
          <Link href="/kapcsolat" className="text-brand hover:underline">
            Kapcsolat
          </Link>{" "}
          oldalon.
        </p>
      </div>
    </main>
  );
}
