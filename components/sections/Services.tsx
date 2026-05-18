import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Gyermekgyógyászat",
    description: "Átfogó ellátás a legkisebbeknek, a prevenciótól az akut betegségek szakszerű kezeléséig.",
    href: "/szolgaltatasok/inarcs",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Funkcionális orvoslás",
    description: "A gyökéroknál ragadja meg a problémát, az élettani folyamatok helyreállítására törekedve.",
    href: "/szolgaltatasok/inarcs",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "NLS mérés",
    description: "Modern, non-invazív állapotfelmérés a szervezet információs mezőinek elemzésével.",
    href: "/szolgaltatasok/dabas",
  },
];

export function Services() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black text-center mb-12">
          Miben segíthetünk?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 hover:border-brand/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-medium text-black">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors mt-auto"
              >
                tovább <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
