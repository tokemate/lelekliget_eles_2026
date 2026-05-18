"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Post = {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
};

const ALL_POSTS: Post[] = [
  {
    slug: "immunrendszer-erosites",
    category: "Holisztikus",
    title: "Az immunrendszer támogatása természetes módszerekkel",
    author: "Dr. Szabó Anna",
    date: "2026. Március 12.",
    excerpt:
      "Fedezze fel, hogyan segíthetnek a gyógynövények és a megfelelő életmód az immunrendszer megerősítésében.",
  },
  {
    slug: "mikrobiom-mentalis-egeszseg",
    category: "Táplálkozás",
    title: "A mikrobiom szerepe a mentális egészségben",
    author: "Kovács Péter",
    date: "2026. Március 08.",
    excerpt:
      "A bél-agy tengely működése és annak hatása a mindennapi közérzetünkre és érzelmi egyensúlyunkra.",
  },
  {
    slug: "nls-allapotfelmeres",
    category: "NLS",
    title: "NLS állapotfelmérés: Mit mutat a sejtszintű diagnosztika?",
    author: "Lélekliget Team",
    date: "2026. Február 28.",
    excerpt:
      "Hogyan nyerhetünk pontos képet szervezetünk állapotáról a legmodernebb rezgésdiagnosztikai eszközzel.",
  },
  {
    slug: "gyermek-immunrendszer",
    category: "Gyermekgyógyászat",
    title: "Hogyan erősítsük gyermekünk immunrendszerét természetesen?",
    author: "Dr. Molnár Péter",
    date: "2026. Február 15.",
    excerpt:
      "Praktikus tippek és természetes módszerek a kisebb korú gyerekek immunvédelmének természetes erősítéséhez.",
  },
  {
    slug: "funkcionalis-orvoslas-alapjai",
    category: "Funkcionális orvoslás",
    title: "A funkcionális orvoslás alapjai: miért fontos a gyökérre nézni?",
    author: "Dr. Szabó Anna",
    date: "2026. Február 01.",
    excerpt:
      "A tünetek kezelése helyett az okot kell megtalálni — a funkcionális orvoslás szemlélete és eszközei.",
  },
  {
    slug: "nls-technologia-holisztikus",
    category: "NLS",
    title: "NLS mérés: Modern technológia a holisztikus gyógyításban",
    author: "Balogh Réka",
    date: "2026. Január 20.",
    excerpt:
      "Hogyan nyerhetünk pontos képet szervezetünk állapotáról a legmodernebb technológia és a holisztikus szemlélet ötvözésével.",
  },
];

const CATEGORIES = [
  "Összes",
  "Gyermekgyógyászat",
  "Holisztikus",
  "Táplálkozás",
  "NLS",
  "Funkcionális orvoslás",
];

function ImagePlaceholder() {
  return (
    <div className="h-48 w-full bg-brand-light flex items-center justify-center rounded-t-2xl overflow-hidden">
      <svg
        className="size-12 text-brand/40"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4 34l10-10 6 6 8-10 16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      <ImagePlaceholder />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <Badge
          variant="default"
          className="w-fit bg-brand text-white border-0 text-xs font-medium px-3 py-1 h-auto rounded-full"
        >
          {post.category}
        </Badge>
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">
            {post.author} · {post.date}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm text-brand font-medium hover:text-brand-dark transition-colors"
          >
            Olvasom →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Összes");

  const filteredPosts =
    activeCategory === "Összes"
      ? ALL_POSTS
      : ALL_POSTS.filter((p) => p.category === activeCategory);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-brand-50 py-20 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Egészség, természetesen
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Szakmai cikkek, tippek és holisztikus egészségügyi útmutatók
            rendelőnk szakértőitől.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 px-4 border-b border-gray-100">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                activeCategory === cat
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Nincs cikk ebben a kategóriában.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
