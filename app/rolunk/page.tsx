import Link from "next/link";
import { Eye, Shield, Atom, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Rólunk | Lélekliget Gyógycentrum",
  description:
    "Ismerje meg csapatunkat és értékeinket. A Lélekliget Gyógycentrum alapítója és szakemberei a holisztikus gyógyítás megközelítését képviselik.",
};

const teamMembers = [
  {
    name: "Dr. Molnár Péter",
    role: "Fogász",
    description:
      "Precíz szakember, aki a legmodernebb technológiákkal varázsol egészséges mosolyt.",
  },
  {
    name: "Táth Katalin",
    role: "Étrend-tanácsadó",
    description:
      "Személyre szabott táplálkozási tervekkel segít az életmódváltás rögös útján.",
  },
  {
    name: "Balogh Réka",
    role: "NLS-szakértő",
    description:
      "A szervezet rezgéseinek elemzésével segít feltárni az egyensúlytalanságokat.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Figyelem",
    description:
      "Minden páciensünkre elegendő időt szánunk, hogy valóban megértsük a panaszt.",
  },
  {
    icon: Shield,
    title: "Átláthatóság",
    description:
      "Kezelési terveink világosak, érthetőek és minden lépéssel előre egyeztetjük.",
  },
  {
    icon: Atom,
    title: "Integráció",
    description:
      "Ötvözzük a hagyományos orvosi ismereteket a természetes gyógymódokkal.",
  },
  {
    icon: Heart,
    title: "Megelőzés",
    description:
      "Nem csak tüzet oltunk, hanem megtanítjuk, hogyan őrizheti meg hosszú távon egészségét.",
  },
];

export default function RolunkPage() {
  return (
    <main className="flex-1">
      {/* Section 1 — Hero */}
      <section className="bg-brand-50 py-20 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A gyógyítás mögött emberek állnak
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Rendelőnk egy csapat munkájának eredménye, ahol a tudományos
            precizitás találkozik az emberi figyelemmel és a természetes
            megoldásokkal.
          </p>
        </div>
      </section>

      {/* Section 2 — Founder spotlight */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait placeholder */}
            <div className="w-full rounded-2xl overflow-hidden">
              <div className="w-full bg-brand-light rounded-2xl flex items-center justify-center relative" style={{ height: "500px" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent rounded-2xl" />
                <span className="relative text-sm text-brand-dark font-medium">
                  Fotó hamarosan
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-6">
              <Badge
                variant="secondary"
                className="w-fit bg-brand-light text-brand-dark border-0 text-xs font-medium px-3 py-1 h-auto rounded-full"
              >
                Dr. Kovács Eszter — Gyermekorvos, rendelőalapító
              </Badge>

              <h2 className="text-3xl font-bold text-gray-900">
                Hivatásunk a holisztikus gyógyítás
              </h2>

              <p className="text-gray-600 leading-relaxed">
                18 éves klinikai tapasztalattal a hátam mögött alapítottam meg
                a Lélekligetet. Célom egy olyan centrum létrehozása volt, ahol
                nem csak a tüneteket kezeljük, hanem az embert a maga
                teljességében vizsgáljuk. Hiszek abban, hogy a gyógyulás útja
                a bizalom és a folyamatos odafigyelésen alapul.
              </p>

              <blockquote className="border-l-4 border-brand pl-5 py-2">
                <p className="text-gray-700 italic leading-relaxed">
                  „A legfontosabb eszközöm a figyelem, a legnagyobb sikerem
                  pedig a mosolygó páciens."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Team */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Csapatunk
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-0 shadow-sm bg-white"
              >
                <div className="aspect-square w-full bg-brand-light flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
                  <span className="relative text-sm text-brand-dark font-medium">
                    Fotó hamarosan
                  </span>
                </div>
                <CardContent className="p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="w-fit bg-brand-light text-brand-dark border-0 text-xs font-medium px-3 py-1 h-auto rounded-full"
                  >
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Values 2x2 grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="border border-gray-100 shadow-sm bg-white"
                >
                  <CardContent className="p-8 flex flex-col gap-4">
                    <div className="size-12 rounded-xl bg-brand-light flex items-center justify-center">
                      <Icon className="size-6 text-brand-dark" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — doTERRA partner block */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="bg-brand-light rounded-2xl px-8 py-14 text-center flex flex-col items-center gap-6">
            <p className="text-xs font-semibold tracking-widest text-brand-dark uppercase">
              Természetes megoldások a mindennapi élethez
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Természetes megoldások a mindennapi élethez
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-xl">
              Rendelőnk kiemelt partnere a doTERRA, a világ vezető
              illóolaj-gyártója. Hiszünk abban, hogy a természet ereje hatékony
              kiegészítője lehet a gyógyulási folyamatnak és a megelőzésnek
              egyaránt. Ismerje meg tiszta, terápiás minőségű megoldásainkat.
            </p>

            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 h-auto text-sm font-medium transition-colors"
              )}
            >
              Tovább a doTERRA oldalra →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
