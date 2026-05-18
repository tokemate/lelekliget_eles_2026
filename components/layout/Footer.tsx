import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";

const locations = [
  { label: "Inárcsi Magánrendelő", href: "/szolgaltatasok/inarcs" },
  { label: "Dabasi Egység", href: "/szolgaltatasok/dabas" },
  { label: "Online Tanácsadás", href: "/idopontfoglalas" },
];

const legal = [
  { label: "ÁSZF", href: "/aszf" },
  { label: "Adatkezelés", href: "/adatkezeles" },
  { label: "Cookie", href: "/cookie" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Lélekliget Gyógycentrum logó"
                width={40}
                height={40}
                className="h-9 w-auto"
              />
              <span className="font-heading text-base font-semibold text-black">
                Lélekliget
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Szakmai precizitás és holisztikus szemléletmód a gyógyítás szolgálatában.
            </p>
          </div>

          {[
            { title: "Navigáció", items: navLinks },
            { title: "Helyszínek", items: locations },
            { title: "Jogi nyilatkozatok", items: legal },
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Lélekliget Gyógycentrum — Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
