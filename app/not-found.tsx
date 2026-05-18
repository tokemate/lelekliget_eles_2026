import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center flex flex-col items-center gap-6">
        <p className="text-8xl font-bold text-brand leading-none">404</p>
        <h2 className="text-2xl font-semibold text-gray-900">
          Az oldal nem található
        </h2>
        <p className="text-gray-500 max-w-sm">
          A keresett tartalom nem létezik vagy áthelyezésre került.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-full bg-brand hover:bg-brand-dark border-0 text-white px-8 h-11 text-sm font-medium"
          )}
        >
          Vissza a főoldalra
        </Link>
      </div>
    </main>
  );
}
