"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav";

const ctaCls = cn(
  buttonVariants({ size: "default" }),
  "bg-brand hover:bg-brand-dark text-white rounded-full px-6 border-transparent"
);

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Lélekliget Gyógycentrum logó"
              width={48}
              height={48}
              className="h-10 w-auto lg:h-12"
              priority
            />
            <span className="font-heading text-lg font-semibold tracking-tight text-black hidden sm:block">
              Lélekliget
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/idopontfoglalas" className={cn(ctaCls, "hidden sm:inline-flex")}>
              Időpontot foglalok
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-brand"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü megnyitása"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-brand transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/idopontfoglalas"
              className={cn(ctaCls, "mt-2 w-full justify-center")}
              onClick={() => setMobileOpen(false)}
            >
              Időpontot foglalok
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
