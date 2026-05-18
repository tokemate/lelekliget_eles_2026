import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Szabályzat | Lélekliget Gyógycentrum",
  description: "Lélekliget Gyógycentrum Cookie Szabályzata.",
};

export default function CookiePage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1>Cookie Szabályzat</h1>
      <p className="text-gray-500 mt-4 mb-8">Utolsó frissítés: 2026. május</p>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600">
          A cookie szabályzat tartalma folyamatban van. Kérjük, látogasson
          vissza később, vagy vegye fel velünk a kapcsolatot a{" "}
          <Link href="/kapcsolat" className="text-brand hover:underline">
            Kapcsolat
          </Link>{" "}
          oldalon.
        </p>
      </div>
    </main>
  );
}
