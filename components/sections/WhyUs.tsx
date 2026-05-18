import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Holisztikus szemlélet",
    description: "Nem csak a tüneteket, hanem az embert egészségében kezeljük, figyelembe véve a környezeti és lelki tényezőket.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Két helyszín",
    description: "Modern felszereltségű rendelőink Inárcson és Dabasban várják pácienseinket a környező életmódért.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Egyszerű foglalás",
    description: "Gyors és áttekinthető online felületen foglalhat időpontot szakrendelőinkre ottthona kényelméből.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black text-center mb-12">
          Miért válasszon minket?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6 lg:p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand">
                  {f.icon}
                </div>
                <h3 className="text-lg font-medium text-black">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
