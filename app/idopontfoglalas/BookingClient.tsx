"use client";

import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = [
  "Helyszín",
  "Szakember",
  "Szolgáltatás",
  "Időpont",
  "Adatok",
  "Visszaigazolás",
];

const LOCATIONS = [
  {
    id: "inarcs",
    name: "Inárcsi Klinika",
    address: "2351 Inárcs, Bajesy-Zsilinszky út 12.",
  },
  {
    id: "dabas",
    name: "Dabasi Magánrendelő",
    address: "2370 Dabas, Bartók Béla út 45.",
  },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center mb-10 px-2">
      {STEPS.map((label, idx) => {
        const step = idx + 1;
        const isCompleted = step < current;
        const isActive = step === current;
        const isFuture = step > current;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "size-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors",
                  isActive && "bg-brand border-brand text-white",
                  isCompleted && "bg-white border-brand text-brand",
                  isFuture && "bg-white border-gray-300 text-gray-400"
                )}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium leading-tight hidden sm:block",
                  isActive && "text-brand",
                  isCompleted && "text-brand",
                  isFuture && "text-gray-400"
                )}
              >
                {label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={cn(
                  "h-0.5 w-8 sm:w-12 mx-1 mb-4 transition-colors",
                  step < current ? "bg-brand" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Step1({
  selected,
  onSelect,
  onNext,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Válasszon helyszínt
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LOCATIONS.map((loc) => {
          const isSelected = selected === loc.id;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => onSelect(loc.id)}
              className={cn(
                "group text-left rounded-2xl border-2 overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
                isSelected
                  ? "border-brand shadow-sm"
                  : "border-gray-200 hover:border-brand/40"
              )}
            >
              <div className="h-32 bg-brand-light w-full" />
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <div
                    className={cn(
                      "mt-0.5 size-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                      isSelected ? "border-brand" : "border-gray-400"
                    )}
                  >
                    {isSelected && (
                      <div className="size-2 rounded-full bg-brand" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {loc.name}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin className="size-3 shrink-0" />
                      {loc.address}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "rounded-full text-gray-500 px-6 h-10"
          )}
          onClick={() => {}}
        >
          Vissza
        </button>
        <button
          type="button"
          disabled={!selected}
          onClick={onNext}
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-full bg-brand hover:bg-brand-dark border-0 text-white px-8 h-10 disabled:opacity-50 disabled:pointer-events-none"
          )}
        >
          Tovább a szakemberhez
        </button>
      </div>
    </div>
  );
}

function PlaceholderStep({ stepName }: { stepName: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
      <p className="text-gray-400 text-sm">
        A{" "}
        <span className="font-medium text-gray-600">{stepName}</span> lépés
        tartalma hamarosan elérhető lesz.
      </p>
      <p className="text-xs text-gray-400">
        Ez a lépés SimplyBook.me integrációval kerül megvalósításra.
      </p>
    </div>
  );
}

function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm max-w-3xl mx-auto p-6 sm:p-10">
      <StepIndicator current={currentStep} />

      {currentStep === 1 && (
        <Step1
          selected={selectedLocation}
          onSelect={setSelectedLocation}
          onNext={() => setCurrentStep(2)}
        />
      )}
      {currentStep === 2 && <PlaceholderStep stepName="Szakember" />}
      {currentStep === 3 && <PlaceholderStep stepName="Szolgáltatás" />}
      {currentStep === 4 && <PlaceholderStep stepName="Időpont" />}
      {currentStep === 5 && <PlaceholderStep stepName="Adatok" />}
      {currentStep === 6 && <PlaceholderStep stepName="Visszaigazolás" />}
    </div>
  );
}

const FAQ_ITEMS = [
  {
    question: "Milyen dokumentumokat kell magammal hoznom?",
    answer:
      "Személyi igazolvány vagy útlevél, TAJ kártya (ha van), korábbi leletei és ambuláns lapjai.",
  },
  {
    question: "Mennyivel korábban érjek az időpontra?",
    answer:
      "Javasoljuk, hogy az előjegyzett időpont előtt 10-15 perccel érkezzen meg, hogy legyen idő az adminisztrációs folyamatok elvégzésére.",
  },
  {
    question: "Lehetséges-e az időpont lemondása vagy módosítása?",
    answer:
      "Igen, az időpontot legkésőbb 24 órával korábban kell lemondani vagy módosítani a rendszerben vagy telefonon.",
  },
  {
    question: "Van-e parkolási lehetőség a klinikák közelében?",
    answer:
      "Mindkét helyszínnél van ingyenes parkolási lehetőség a közelben.",
  },
  {
    question: "Milyen fizetési módok állnak rendelkezésre?",
    answer: "Készpénz, bankkártya és utalás is elfogadott.",
  },
];

export function BookingPageClient() {
  return (
    <>
      {/* Booking wizard */}
      <section className="py-16 px-4">
        <BookingWizard />
        <p className="text-center text-xs text-gray-400 mt-6 max-w-3xl mx-auto">
          Az időpontfoglalás SimplyBook.me rendszeren keresztül történik. Az
          oldal fejlesztés alatt áll.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Gyakori kérdések
          </h2>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group bg-white border border-gray-200 rounded-2xl px-6 py-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 list-none font-medium text-gray-800 text-sm sm:text-base select-none">
                  {item.question}
                  <ChevronDown className="size-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
