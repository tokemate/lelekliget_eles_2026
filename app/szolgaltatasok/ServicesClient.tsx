"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Baby,
  Activity,
  Stethoscope,
  Utensils,
  Smile,
  Leaf,
  Check,
  ArrowRight,
  User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  specialist: {
    name: string;
    role: string;
  };
  locations: ("inarcs" | "dabas")[];
}

const SERVICES: Service[] = [
  {
    id: "gyermek-elso-vizit",
    category: "Gyermekgyógyászat",
    title: "Csecsemő- és gyermekgyógyászati első vizit",
    description: "Részletes anamnézis felvétel, fizikális vizsgálat és egyéni gyógykezelési vagy prevenciós terv felállítása csecsemők és gyermekek számára.",
    price: "25 000 Ft",
    specialist: {
      name: "Dr. Kovács Eszter",
      role: "Csecsemő- és gyermekgyógyász",
    },
    locations: ["inarcs"],
  },
  {
    id: "gyermek-kontroll",
    category: "Gyermekgyógyászat",
    title: "Gyermekgyógyászati kontroll vizsgálat",
    description: "A megkezdett kezelések nyomon követése, állapotellenőrzés és szükség esetén a terápia finomhangolása.",
    price: "18 000 Ft",
    specialist: {
      name: "Dr. Kovács Eszter",
      role: "Csecsemő- és gyermekgyógyász",
    },
    locations: ["inarcs"],
  },
  {
    id: "gyermek-tanacsadas",
    category: "Gyermekgyógyászat",
    title: "Fejlődési és táplálkozási tanácsadás",
    description: "Szakértő tanácsadás a gyermek növekedése, mozgásfejlődése és a korcsoportnak megfelelő egészséges táplálás kapcsán.",
    price: "20 000 Ft",
    specialist: {
      name: "Dr. Kovács Eszter",
      role: "Csecsemő- és gyermekgyógyász",
    },
    locations: ["inarcs"],
  },
  {
    id: "funkcionalis-elso-konzultacio",
    category: "Funkcionális orvoslás",
    title: "Funkcionális orvoslás első konzultáció (90 perc)",
    description: "Részletes életmód- és panaszkutatás az egyén egészét vizsgálva, a háttérben meghúzódó élettani gyökérokok feltárására.",
    price: "38 000 Ft",
    specialist: {
      name: "Dr. Szabó Anna",
      role: "Holisztikus orvos",
    },
    locations: ["inarcs"],
  },
  {
    id: "funkcionalis-kontroll",
    category: "Funkcionális orvoslás",
    title: "Funkcionális orvoslás kontroll konzultáció (45 perc)",
    description: "A személyre szabott regenerációs program eredményeinek áttekintése, az életmódbeli változások követése és korrekciója.",
    price: "22 000 Ft",
    specialist: {
      name: "Dr. Szabó Anna",
      role: "Holisztikus orvos",
    },
    locations: ["inarcs"],
  },
  {
    id: "labor-kiertekeles",
    category: "Funkcionális orvoslás",
    title: "Anyagcsere- és laborvizsgálat kiértékelés",
    description: "A hozott leletek részletes elemzése és kiértékelése a funkcionális orvoslás szemlélete szerint, összefüggések feltárásával.",
    price: "20 000 Ft",
    specialist: {
      name: "Dr. Szabó Anna",
      role: "Holisztikus orvos",
    },
    locations: ["inarcs"],
  },
  {
    id: "nls-allapotfelmeres",
    category: "NLS diagnosztika",
    title: "Teljes NLS állapotfelmérés és kiértékelés (75 perc)",
    description: "Nem-lineáris rendszerrel (rezgésdiagnosztika) végzett fájdalommentes, teljes körű vizsgálat, amely kimutatja a sejtszintű energetikai eltéréseket.",
    price: "28 000 Ft",
    specialist: {
      name: "Balogh Réka",
      role: "NLS-szakértő",
    },
    locations: ["inarcs", "dabas"],
  },
  {
    id: "nls-kontroll",
    category: "NLS diagnosztika",
    title: "NLS kontroll mérés és energetikai harmonizálás (45 perc)",
    description: "Rövidebb kontrollmérés a változások nyomon követésére, kiegészítve finom energetikai frekvenciás harmonizálással.",
    price: "18 000 Ft",
    specialist: {
      name: "Balogh Réka",
      role: "NLS-szakértő",
    },
    locations: ["inarcs", "dabas"],
  },
  {
    id: "etrend-tanacsadas",
    category: "Étrend-tanácsadás",
    title: "Életmód- és táplálkozási konzultáció (60 perc)",
    description: "Egyéni étrendi szokások felmérése, célok meghatározása és a fenntartható életmódváltás elméleti alapjainak átbeszélése.",
    price: "22 000 Ft",
    specialist: {
      name: "Táth Katalin",
      role: "Étrend-tanácsadó",
    },
    locations: ["dabas"],
  },
  {
    id: "etrend-terv-keszites",
    category: "Étrend-tanácsadás",
    title: "Személyre szabott étrend és életmódtérkép készítése",
    description: "Az anamnézis és NLS leletek alapján kidolgozott, egyénre szabott, könnyen követhető, táplálkozási és életmódbeli útmutató.",
    price: "30 000 Ft",
    specialist: {
      name: "Táth Katalin",
      role: "Étrend-tanácsadó",
    },
    locations: ["dabas"],
  },
  {
    id: "etrend-kontroll",
    category: "Étrend-tanácsadás",
    title: "Táplálkozási kontroll konzultáció (30 perc)",
    description: "Rendszeres kontroll, tapasztalatok átbeszélése, felmerülő kérdések megválaszolása és finomhangolás a tartós sikerekért.",
    price: "12 000 Ft",
    specialist: {
      name: "Táth Katalin",
      role: "Étrend-tanácsadó",
    },
    locations: ["dabas"],
  },
  {
    id: "fogaszat-allapotfelmeres",
    category: "Fogászat",
    title: "Fogászati állapotfelmérés és szaktanácsadás",
    description: "A szájüreg és a fogak alapos fizikális vizsgálata, digitális diagnosztika elemzése és egyéni kezelési terv javaslata.",
    price: "15 000 Ft",
    specialist: {
      name: "Dr. Molnár Péter",
      role: "Fogász",
    },
    locations: ["inarcs"],
  },
  {
    id: "fogko-eltavolitas",
    category: "Fogászat",
    title: "Ultrahangos fogkő-eltávolítás és polírozás",
    description: "A fogfelszínek professzionális megtisztítása a lerakódásoktól, fogkőtől ultrahanggal, majd kíméletes polírozás.",
    price: "22 000 Ft",
    specialist: {
      name: "Dr. Molnár Péter",
      role: "Fogász",
    },
    locations: ["inarcs"],
  },
  {
    id: "terapia-fitoterapia",
    category: "Kiegészítő terápiák",
    title: "Fitoterápiás / Gyógynövény-tanácsadás (45 perc)",
    description: "Személyre szabott gyógynövény- és illóolaj-javaslatok (doTERRA) a szervezet természetes egyensúlyának támogatására.",
    price: "16 000 Ft",
    specialist: {
      name: "Lélekliget Team",
      role: "Holisztikus szakemberek",
    },
    locations: ["inarcs", "dabas"],
  },
  {
    id: "terapia-stresszkezeles",
    category: "Kiegészítő terápiák",
    title: "Holisztikus stresszkezelés és relaxáció (60 perc)",
    description: "Mentális feszültségoldó technikák, életmódbeli tippek és vezetett relaxáció a stressz mindennapi kezelésére.",
    price: "18 000 Ft",
    specialist: {
      name: "Lélekliget Team",
      role: "Holisztikus szakemberek",
    },
    locations: ["inarcs", "dabas"],
  },
];

const CATEGORIES = [
  "Összes kategória",
  "Gyermekgyógyászat",
  "NLS diagnosztika",
  "Funkcionális orvoslás",
  "Étrend-tanácsadás",
  "Fogászat",
  "Kiegészítő terápiák",
];

const LOCATIONS = [
  { id: "all", label: "Összes helyszín" },
  { id: "inarcs", label: "Inárcsi Magánrendelő" },
  { id: "dabas", label: "Dabasi Egység" },
];

function getCategoryIcon(category: string) {
  switch (category) {
    case "Gyermekgyógyászat":
      return <Baby className="size-5" />;
    case "NLS diagnosztika":
      return <Activity className="size-5" />;
    case "Funkcionális orvoslás":
      return <Stethoscope className="size-5" />;
    case "Étrend-tanácsadás":
      return <Utensils className="size-5" />;
    case "Fogászat":
      return <Smile className="size-5" />;
    case "Kiegészítő terápiák":
      return <Leaf className="size-5" />;
    default:
      return <Check className="size-5" />;
  }
}

export function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState("Összes kategória");
  const [activeLocation, setActiveLocation] = useState("all");

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === "Összes kategória" || service.category === activeCategory;
    const matchesLocation =
      activeLocation === "all" || service.locations.includes(activeLocation as "inarcs" | "dabas");
    return matchesCategory && matchesLocation;
  });

  return (
    <>
      {/* Filters section */}
      <section className="py-10 px-4 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40 shadow-sm/50">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          {/* Location Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 sm:mr-2">
              Helyszín:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocation(loc.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer",
                    activeLocation === loc.id
                      ? "bg-brand text-white border-brand shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-brand/40 hover:text-brand"
                  )}
                >
                  {loc.id !== "all" && <MapPin className="inline size-3.5 mr-1 -mt-0.5" />}
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 sm:mr-2">
              Kategória:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer",
                    activeCategory === cat
                      ? "bg-brand text-white border-brand shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-brand/40 hover:text-brand"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-brand-50/50">
        <div className="mx-auto max-w-5xl">
          {filteredServices.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredServices.map((service) => (
                <Card
                  key={service.id}
                  className="overflow-hidden border border-gray-100 shadow-sm bg-white hover:shadow-md hover:border-brand/20 transition-all rounded-2xl"
                >
                  <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                    {/* Left content: Category, Title, Description, Specialist */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge
                          variant="secondary"
                          className="w-fit bg-brand-light text-brand-dark border-0 text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                        >
                          {getCategoryIcon(service.category)}
                          {service.category}
                        </Badge>

                        {service.locations.map((loc) => (
                          <Badge
                            key={loc}
                            variant="outline"
                            className={cn(
                              "text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full border",
                              loc === "inarcs"
                                ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                                : "border-amber-200 text-amber-700 bg-amber-50"
                            )}
                          >
                            <MapPin className="size-3 mr-1" />
                            {loc === "inarcs" ? "Inárcs" : "Dabas"}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
                        <div className="size-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                          <User className="size-3 text-brand-dark" />
                        </div>
                        <span>
                          Szakember: <strong className="text-gray-700">{service.specialist.name}</strong> ({service.specialist.role})
                        </span>
                      </div>
                    </div>

                    {/* Right content: Price & Action */}
                    <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:items-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
                      <div className="text-left md:text-right">
                        <span className="block text-[10px] text-gray-400 uppercase font-semibold tracking-wider">
                          Szolgáltatás ára
                        </span>
                        <span className="text-2xl font-bold text-brand-dark leading-tight">
                          {service.price}
                        </span>
                      </div>

                      <Link
                        href="/idopontfoglalas"
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "rounded-full bg-brand hover:bg-brand-dark border-0 text-white px-6 h-10 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                        )}
                      >
                        Időpontot foglalok
                        <Calendar className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center flex flex-col items-center gap-4">
              <p className="text-gray-500 font-medium">Nincs a szűrésnek megfelelő szolgáltatás.</p>
              <button
                onClick={() => {
                  setActiveCategory("Összes kategória");
                  setActiveLocation("all");
                }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-brand text-brand hover:bg-brand hover:text-white px-6"
                )}
              >
                Szűrők alaphelyzetbe állítása
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clinics quick access cards */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Részletes rendelő bemutatók
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Tekintse meg az egyes helyszínek egyedi szolgáltatásait, hangulatát és részletesebb információit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Inárcs Card */}
            <Card className="overflow-hidden border border-gray-150 shadow-sm bg-white hover:shadow-md transition-shadow rounded-2xl">
              <div className="h-44 bg-brand-light flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-brand/5" />
                <span className="relative text-sm text-brand-dark font-medium">Inárcsi Magánrendelő fotó hamarosan</span>
              </div>
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2">
                      Hamarosan nyílik
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">Inárcsi Magánrendelő</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Csendes, természetközeli környezetben, modern technológiával, gyermekgyógyászattal, fogászattal és funkcionális orvoslással várjuk.
                </p>
                <Link
                  href="/szolgaltatasok/inarcs"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
                >
                  Rendelő megtekintése <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Dabas Card */}
            <Card className="overflow-hidden border border-gray-150 shadow-sm bg-white hover:shadow-md transition-shadow rounded-2xl">
              <div className="h-44 bg-brand-light flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-brand/5" />
                <span className="relative text-sm text-brand-dark font-medium">Dabasi Egység fotó hamarosan</span>
              </div>
              <CardContent className="p-6 flex flex-col gap-4">
                <div>
                  <span className="inline-block bg-brand-light text-brand-dark text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2">
                    Aktív rendelő
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">Dabasi Egység</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dabas szívében, professzionális környezetben állunk rendelkezésére NLS rezgésdiagnosztikával és személyre szabott étrend-tanácsadással.
                </p>
                <Link
                  href="/szolgaltatasok/dabas"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
                >
                  Rendelő megtekintése <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-brand py-20 px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white">
            Készen áll az első lépésre?
          </h2>
          <p className="text-white/85 leading-relaxed max-w-xl">
            Foglaljon időpontot most, és tegyünk együtt az egészségéért a Lélekliget modern rendelőiben.
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
    </>
  );
}
