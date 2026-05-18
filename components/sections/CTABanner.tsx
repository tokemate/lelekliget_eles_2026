import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <section className="bg-brand py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4">
          Készen áll az első lépésre?
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Foglaljon időpontot most, és tegyük együtt az egészségéért a Lélekliget modern rendelőiben.
        </p>
        <Link
          href="/idopontfoglalas"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-white text-brand hover:bg-white/90 rounded-full px-10 font-semibold shadow-md border-transparent inline-flex items-center gap-2"
          )}
        >
          <CalendarDays size={18} />
          Időpontot foglalok
        </Link>
      </div>
    </section>
  );
}
