import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Clinics } from "@/components/sections/Clinics";
import { BlogHighlights } from "@/components/sections/BlogHighlights";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyUs />
      <Services />
      <Clinics />
      <BlogHighlights />
      <CTABanner />
    </main>
  );
}
