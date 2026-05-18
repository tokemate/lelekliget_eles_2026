import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const posts = [
  {
    category: "Prevenció",
    title: "Hogyan erősítsük gyermekünk immunrendszerét természetesen?",
    href: "/blog/immunrendszer-erosites",
  },
  {
    category: "Életmód",
    title: "A funkcionális orvoslás alapjai: miért fontos a gyökérre nézni?",
    href: "/blog/funkcionalis-orvoslas-alapjai",
  },
  {
    category: "Diagnosztika",
    title: "NLS mérés: Modern technológia a holisztikus gyógyításban",
    href: "/blog/nls-meres-technologia",
  },
];

export function BlogHighlights() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black text-center mb-12">
          Hasznos tartalmak Önnek
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <article
              key={post.href}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full h-44 bg-brand-light flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#41bdc4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="relative opacity-40">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <Badge variant="secondary" className="w-fit text-xs uppercase tracking-wider bg-brand-50 text-brand-dark border-0">
                  {post.category}
                </Badge>
                <h3 className="text-base font-normal text-black leading-snug group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors mt-auto"
                >
                  Olvasom <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-8 border-gray-300 text-gray-700 hover:border-brand hover:text-brand transition-colors"
            )}
          >
            Összes cikk
          </Link>
        </div>
      </div>
    </section>
  );
}
