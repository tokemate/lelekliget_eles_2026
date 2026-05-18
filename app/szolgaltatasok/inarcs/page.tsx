import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Inárcsi Magánrendelő | Lélekliget Gyógycentrum",
  description:
    "Csendes, természetközeli környezetben, modern technológiával és szakértelemmel várjuk pácienseinket Inárcson. Ahol a gyógyítás és a nyugalom találkozik.",
};

const ImagePlaceholder = () => (
  <div className="w-full aspect-[4/3] bg-brand-light rounded-2xl flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent rounded-2xl" />
    <span className="relative text-sm text-brand-dark font-medium">Fotó hamarosan</span>
  </div>
);

export default function InarcsPage() {
  return (
    <main className="flex-1">
      {/* Section 1 — Hero */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block border border-brand text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Hamarosan nyílik – 2026. május
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inárcsi Magánrendelő
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Csendes, természetközeli környezetben, modern technológiával és szakértelemmel
            várjuk pácienseinket Inárcson. Ahol a gyógyítás és a nyugalom találkozik.
          </p>
          <div className="w-full h-72 bg-brand-light rounded-2xl flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent rounded-2xl" />
            <span className="relative text-sm text-brand-dark font-medium">Fotó hamarosan</span>
          </div>
        </div>
      </section>

      {/* Section 2 — Gyermekgyógyászat */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-gray-900">
                A gyerek egészségére figyelünk
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Speciális gyermekgyógyászati ellátásunk során a legkisebbeknek test és lelki
                fejlődését kísérjük figyelemmel szakértő kezekben.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-gray-700">Rendszeres csecsemő- és gyermekvizsgálatok</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-gray-700">Szakértő tanácsadás táplálkozás és fejlődés kérdéseiben</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-gray-700">Barátságos, stresszmenetes környezet a kicsiknek</span>
                </li>
              </ul>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Section 3 — Funkcionális orvoslás */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Amikor a szokásos vizsgálatok nem adnak választ
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A funkcionális orvoslás az egyént egységként kezeli, keresve a tünetek mögötti
                meghatározó gyökérrokokat és anyagcsere-folyamatokat.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Anyagcsere-analízis",
                  "Személyre szabott terv",
                  "Részletes laborvizsgálatok és kiértékelés",
                  "Étrend és táplálékoktató nyomda",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center text-center border border-brand text-brand text-xs font-medium px-3 py-2 rounded-full leading-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — NLS diagnosztika */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Nem invazív diagnosztika a mélységekből
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Az NLS (Non-Lineáris Szisztéma) mérés lehetővé teszi a test szervezet finom
            energetikai eltérések feltérképezését fájdalommentesen.
          </p>
          <blockquote className="border-l-4 border-brand pl-6 py-2 text-left w-full">
            <p className="text-gray-700 italic leading-relaxed">
              „A prevenció alapja a korai felismerés, ahol a technológia segít belátni a láthatatlamba."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 5 — Kiegészítő terápiák */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Holisztikus szemléletű kiegészítő terápiák
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Inárcsi rendelőnkben nemcsak tüneteket kezelünk, hanem támogatjuk a test
            öngyógyító folyamatát speciális wellness és energetikai kezelésekkel.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fitoterápia", "Stresszkezelés", "Életmód-tanácsadás", "Homeopátia"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center border border-brand text-brand text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/kapcsolat"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 h-10 text-sm font-medium transition-colors"
            )}
          >
            Ismerje meg módszereinkkel
          </Link>
        </div>
      </section>

      {/* Section 6 — CTA foglalás */}
      <section className="bg-brand py-20 px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white">
            Foglaljon időpontot az inárcsi rendelőbe
          </h2>
          <p className="text-white/85 leading-relaxed max-w-xl">
            Válassza ki az Önnek megfelelő időpontot időpontfoglaló rendszerünkben,
            vagy hívja asszisztensünket direkt.
          </p>
          <Link
            href="/idopontfoglalas"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-white text-brand hover:bg-white/90 px-8 h-11 text-sm font-semibold transition-colors"
            )}
          >
            Időpontot foglalok
          </Link>
        </div>
      </section>
    </main>
  );
}
