import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const clinics = [
  {
    name: "Inárcsi Magánrendelő",
    address: "2345 Inárcs, Liget utca 12.",
    hours: "H–P: 08:00 – 18:00",
    href: "/szolgaltatasok/inarcs",
    badge: "Hamarosan nyílik",
  },
  {
    name: "Dabasi Egység",
    address: "2370 Dabas, Szent István tér 5.",
    hours: "K–Cs: 09:00 – 17:00",
    href: "/szolgaltatasok/dabas",
    badge: null,
  },
];

export function Clinics() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.name}
              className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full h-48 bg-brand-light flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-brand/5" />
                <div className="relative flex flex-col items-center gap-2 text-center p-4">
                  <MapPin size={32} className="text-brand/60" />
                  <span className="text-xs text-brand-dark font-medium">Rendelő fotó hamarosan</span>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col gap-3">
                {clinic.badge && (
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand-dark">
                    {clinic.badge}
                  </span>
                )}
                <h3 className="text-xl font-normal text-black">{clinic.name}</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-brand shrink-0" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-brand shrink-0" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>
                <Link
                  href={clinic.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors mt-2"
                >
                  Megnézem <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
