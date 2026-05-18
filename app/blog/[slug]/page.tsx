import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Lélekliget Gyógycentrum",
};

export async function generateStaticParams() {
  return [{ slug: "immunrendszer-erosites" }];
}

type RelatedPost = {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
};

const RELATED_POSTS: RelatedPost[] = [
  {
    slug: "mikrobiom-mentalis-egeszseg",
    category: "Táplálkozás",
    title: "A mikrobiom szerepe a mentális egészségben",
    author: "Kovács Péter",
    date: "2026. Március 08.",
  },
  {
    slug: "gyermek-immunrendszer",
    category: "Gyermekgyógyászat",
    title: "Hogyan erősítsük gyermekünk immunrendszerét természetesen?",
    author: "Dr. Molnár Péter",
    date: "2026. Február 15.",
  },
  {
    slug: "funkcionalis-orvoslas-alapjai",
    category: "Funkcionális orvoslás",
    title: "A funkcionális orvoslás alapjai: miért fontos a gyökérre nézni?",
    author: "Dr. Szabó Anna",
    date: "2026. Február 01.",
  },
];

function RelatedPostCard({ post }: { post: RelatedPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow"
    >
      <div className="h-36 w-full bg-brand-light flex items-center justify-center">
        <svg
          className="size-8 text-brand/40"
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
      <div className="p-4 flex flex-col gap-2">
        <Badge
          variant="default"
          className="w-fit bg-brand text-white border-0 text-xs font-medium px-2.5 py-0.5 h-auto rounded-full"
        >
          {post.category}
        </Badge>
        <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-brand transition-colors">
          {post.title}
        </p>
        <p className="text-xs text-gray-400">
          {post.author} · {post.date}
        </p>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // In a real app, we'd fetch post data by slug.
  // For now, all slugs render the same representative article.
  void slug;

  return (
    <main className="flex-1 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand-dark transition-colors mb-8"
        >
          ← Vissza a blogra
        </Link>

        {/* Article header */}
        <header className="text-center mb-10">
          <Badge
            variant="default"
            className="bg-brand text-white border-0 text-xs font-medium px-3 py-1 h-auto rounded-full mb-4"
          >
            Holisztikus
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Az immunrendszer támogatása természetes módszerekkel
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="size-9 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
              <span className="text-brand-dark text-sm font-semibold">A</span>
            </div>
            <span className="text-sm text-gray-500">
              Dr. Szabó Anna · 2026. Március 12.
            </span>
          </div>
        </header>

        {/* Full-width cover image placeholder */}
        <div className="aspect-video w-full bg-brand-light rounded-2xl flex items-center justify-center mb-12">
          <svg
            className="size-16 text-brand/30"
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

        {/* Article body */}
        <article className="prose-like text-gray-700 leading-relaxed space-y-6 mb-14">
          <p>
            Az immunrendszerünk az egyik legösszetettebb védelmi hálózat, amelyet
            szervezetünk valaha is kifejlesztett. Egy finely tuned rendszer, amely
            folyamatosan figyeli és semlegesíti a kórokozókat, a méreganyagokat,
            és az abnormális sejteket. Azonban a modern életmód — a stressz, a
            feldolgozott élelmiszerek és az alváshiány — számos tényező révén
            gyengítheti ezt a védelmet.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">
            A természet ereje az immunitás szolgálatában
          </h2>
          <p>
            A népi gyógyászat évszázadok óta alkalmaz olyan gyógynövényeket,
            amelyek mai tudományos vizsgálatok alapján valóban hatással vannak az
            immunfunkcióra. Az echinacea például megnövelheti a fehérvérsejtek
            aktivitását, az elderberry (bodza) antioxidánsai segítik a sejtvédelmet,
            az astragalus gyökér adaptogén tulajdonságai pedig a stresszrezisztenciát
            fokozzák. Fontos azonban, hogy ezeket ne önálló terápiás szerekként,
            hanem egy átfogó életmódstratégia részeként alkalmazzuk.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">
            Táplálkozás és bélflóra: az immunrendszer alapja
          </h2>
          <p>
            Az immunsejtek mintegy 70–80%-a a bélrendszerben helyezkedik el, ezért
            a bélflóra egészségi állapota közvetlenül befolyásolja immunkapacitásunkat.
            A fermentált ételek — kefir, savanyú káposzta, kimchi — élő probiotikus
            kultúrákat tartalmaznak, amelyek erősítik a bélmikrobiomot. A rostban
            gazdag táplálkozás prebiotikus hatása révén táplálja ezeket a hasznos
            baktériumokat, és csökkenti a gyulladásos folyamatok intenzitását.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Mindennapi szokások, amelyek számítanak
          </h3>
          <p>
            Az immunrendszer optimális működéséhez nem elegendő csupán a
            táplálkozásra figyelni. A rendszeres, mérsékelt intenzitású mozgás —
            napi 30-40 perc séta, úszás vagy jóga — szignifikánsan emeli az
            NK-sejtek (természetes ölősejtek) aktivitását. A minőségi alvás 7-9
            óra időtartamban elengedhetetlen az immunológiai memória konszolidálásához.
            A krónikus stressz kezelése pedig — legyen az meditáció, légzőgyakorlat
            vagy természetben töltött idő — csökkenti a kortizol immunszuppresszív
            hatásait.
          </p>
          <p>
            Rendelőnkben holisztikus szemlélettel vizsgáljuk meg az Ön immunrendszerének
            aktuális állapotát, és személyre szabott támogatási tervet dolgozunk ki
            — a táplálkozástól a gyógynövényes protokollokig és az életmód-módosításokig.
            Kérdéseivel keressen minket bizalommal.
          </p>
        </article>

        {/* CTA card */}
        <div className="bg-brand-50 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center gap-5 mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-dark uppercase">
            Személyes konzultáció
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Kérdése van? Foglaljon időpontot rendelőnkbe.
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            Szakembereink szívesen segítenek személyre szabott immunerősítő programot
            összeállítani — természetes módszerekkel, holisztikus szemlélettel.
          </p>
          <Link
            href="/idopontfoglalas"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-brand text-white hover:bg-brand-dark border-0 px-7 h-auto py-2.5 text-sm font-medium transition-colors"
            )}
          >
            Időpontot foglalok
          </Link>
        </div>

        {/* Related posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((post) => (
              <RelatedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
