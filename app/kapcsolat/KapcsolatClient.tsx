"use client";

import { useState } from "react";
import { MapPin, Globe, Users, Share2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function LocationCard({
  name,
  address,
  phone,
  email,
  hours,
}: {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: { days: string; time: string }[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
          <MapPin className="size-5 text-brand-dark" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <p>{address}</p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-brand hover:underline font-medium"
        >
          {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="text-brand hover:underline font-medium"
        >
          {email}
        </a>
      </div>

      <hr className="border-gray-100" />

      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold tracking-widest text-brand uppercase">
          Nyitvatartás
        </p>
        <div className="flex flex-col gap-1.5">
          {hours.map(({ days, time }) => (
            <div key={days} className="flex justify-between text-sm">
              <span className="text-gray-700">{days}</span>
              <span className="font-medium text-gray-900">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  const [active, setActive] = useState<"inarcs" | "dabas">("inarcs");

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-72 bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <MapPin className="size-8" />
          <span className="text-sm font-medium">Térkép betöltése...</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActive("inarcs")}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full px-5 h-9 text-sm transition-colors",
            active === "inarcs"
              ? "bg-brand text-white border-brand hover:bg-brand-dark"
              : "border-gray-300 text-gray-700 hover:border-brand hover:text-brand"
          )}
        >
          📍 Inárcs
        </button>
        <button
          type="button"
          onClick={() => setActive("dabas")}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full px-5 h-9 text-sm transition-colors",
            active === "dabas"
              ? "bg-brand text-white border-brand hover:bg-brand-dark"
              : "border-gray-300 text-gray-700 hover:border-brand hover:text-brand"
          )}
        >
          📍 Dabas
        </button>
      </div>
      <p className="text-center text-xs text-gray-400">
        Valódi Google Maps embed az élesítéskor kerül ide.
      </p>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-brand font-medium text-lg">Köszönjük üzenetét!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700" htmlFor="nev">
            Név
          </label>
          <input
            id="nev"
            name="nev"
            type="text"
            required
            placeholder="Kovács Anna"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="pelda@email.hu"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:border-brand transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="telefon"
          >
            Telefon{" "}
            <span className="text-gray-400 font-normal">(opcionális)</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="+36 30 123 4567"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="helyszin"
          >
            Helyszín
          </label>
          <select
            id="helyszin"
            name="helyszin"
            className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:border-brand transition-colors bg-white"
          >
            <option value="inarcs">Inárcs</option>
            <option value="dabas">Dabas</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700" htmlFor="uzenet">
          Üzenet
        </label>
        <textarea
          id="uzenet"
          name="uzenet"
          rows={4}
          required
          placeholder="Írja le kérdését vagy megjegyzését..."
          className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:border-brand transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className={cn(
          buttonVariants({ variant: "default" }),
          "w-full rounded-full bg-brand hover:bg-brand-dark border-0 text-white h-11 text-sm font-semibold uppercase tracking-widest"
        )}
      >
        Üzenet elküldése
      </button>
    </form>
  );
}

export function KapcsolatPageClient() {
  return (
    <>
      {/* Location cards */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LocationCard
              name="Inárcs"
              address="2344 Inárcs, Rákóczi út 12."
              phone="+36 30 123 4567"
              email="inarcs@lelekliget.hu"
              hours={[
                { days: "Hétfő - Szerda", time: "08:00 – 18:00" },
                { days: "Péntek", time: "08:00 – 14:00" },
              ]}
            />
            <LocationCard
              name="Dabas"
              address="2370 Dabas, Bartók Béla út 45."
              phone="+36 30 987 6543"
              email="dabas@lelekliget.hu"
              hours={[
                { days: "Kedd - Csütörtök", time: "09:00 – 19:00" },
                { days: "Szombat", time: "09:00 – 13:00" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 px-4">
        <div className="mx-auto max-w-5xl">
          <MapPlaceholder />
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Üzenetet küldök
            </h2>
            <p className="text-gray-600">
              Töltse ki az alábbi űrlapot, és munkatársunk hamarosan felveszi
              Önnel a kapcsolatot.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer extras row */}
      <section className="py-8 px-4 border-t border-gray-100">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Hivatalos Partner doTERRA Wellness Advocate
          </p>
          <div className="flex items-center gap-4">
            <Globe className="size-5 text-gray-400 hover:text-brand cursor-pointer transition-colors" />
            <Users className="size-5 text-gray-400 hover:text-brand cursor-pointer transition-colors" />
            <Share2 className="size-5 text-gray-400 hover:text-brand cursor-pointer transition-colors" />
          </div>
        </div>
      </section>
    </>
  );
}
