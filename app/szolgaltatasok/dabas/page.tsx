import Link from "next/link";
import { Check, Utensils, RefreshCw, Activity, Dumbbell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Dabasi Egység | Lélekliget Gyógycentrum",
  description:
    "NLS mérés és személyre szabott étrend-tanácsadás. Fedezze fel szervezetének rejtett összefüggéseit Dabas szívében, egy nyugodt és professzionális környezetben.",
};

const ImagePlaceholder = () => (
  <div className="w-full aspect-[4/3] bg-brand-light rounded-2xl flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent rounded-2xl" />
    <span className="relative text-sm text-brand-dark font-medium">Fotó hamarosan</span>
  </div>
);

const specialAreas = [
  { icon: Utensils, label: "Ételintoleranciák" },
  { icon: RefreshCw, label: "Anyagcsere-zavarok" },
  { icon: Activity, label: "Hormonális egyensúly" },
  { icon: Dumbbell, label: "Sporttáplálkozás" },
];

export default function DabasPage() {
  return (
    <main className="flex-1">
      {/* Section 1 — Hero */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-block w-fit border border-brand text-brand text-xs font-semibold px-4 py-1.5 rounded-full">
                Dabasi Egység
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Dabasi Egység – közel Önhöz
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                NLS mérés és személyre szabott étrend-tanácsadás. Fedezze fel szervezetének
                rejtett összefüggéseit Dabas szívében, egy nyugodt és professzionális
                környezetben.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/idopontfoglalas"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-full bg-brand text-white hover:bg-brand-dark px-6 h-10 text-sm font-semibold transition-colors"
                  )}
                >
                  Konzultáció kérése
                </Link>
                <Link
                  href="#szolgaltatasok"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full border-brand text-brand hover:bg-brand hover:text-white px-6 h-10 text-sm font-medium transition-colors"
                  )}
                >
                  Részletek
                </Link>
              </div>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Section 2 — NLS diagnosztika */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder />
            <div className="flex flex-col gap-6">
              <span className="inline-block w-fit bg-brand-light text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full">
                NLS technológia
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Nem invazív diagnosztika
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Az NLS (Non-Linear System) mérés egy korszerű, fájdalommentes technológia,
                amely lehetővé teszi a szervezet funkcionális állapotának feltérképezését.
                Segítségével még azelőtt felismerjük az egyensúlyvesztéseket, hogy azok
                fizikai tünetekké válnának.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Gyors és pontos",
                  "Fájdalommentes",
                  "Személyre szabott",
                  "Részletes elemzés",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-brand shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Étrend-tanácsadás */}
      <section id="szolgaltatasok" className="bg-brand-50 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left card — Process */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6">
              <blockquote className="border-l-4 border-brand pl-5 py-1">
                <p className="text-gray-700 italic leading-relaxed text-sm">
                  „A táplálkozás nem csupán kalóriák bevitele, hanem a gyógyulás első lépése."
                </p>
              </blockquote>
              <h2 className="text-2xl font-bold text-gray-900">
                Az étrend, ami megváltoztatja az életet
              </h2>
              <h3 className="text-base font-semibold text-gray-800">Folyamatunk</h3>
              <ol className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <span className="size-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Első konzultáció</p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      Alapos anamnézis felvétele az élemedőbizosítások áttekintése
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="size-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Étrendi terv</p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      Az NLS eredmények és az Ön céljai alapján összeállított, fenntartható
                      táplálkozási útmutató
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="size-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Nyomon követés</p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      Rendszeres kontroll és finomhangolás az optimális eredmények eléréséhez
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Right card — Special areas */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-900">Speciális területek</h3>
              <div className="grid grid-cols-2 gap-6 flex-1">
                {specialAreas.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-3 bg-brand-50 rounded-xl p-6 text-center"
                  >
                    <div className="size-10 rounded-xl bg-brand-light flex items-center justify-center">
                      <Icon className="size-5 text-brand-dark" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="bg-brand py-20 px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white">
            Foglaljon időpontot Dabasban
          </h2>
          <p className="text-white/85 leading-relaxed max-w-xl">
            Várjuk szeretettel a Dabasi Egységben, ahol szakértőink segítenek Önnek az
            egészségesebb életmód kialakításában.
          </p>
          <Link
            href="/idopontfoglalas"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-white text-brand hover:bg-white/90 px-8 h-11 text-sm font-semibold transition-colors"
            )}
          >
            Online időpontfoglalás
          </Link>
        </div>
      </section>
    </main>
  );
}
