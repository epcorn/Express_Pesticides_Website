import HeroSection from "@/components/HeroSection";
import PriceCalculator from "@/components/PriceCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurClients from "@/components/OurClients";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ShowCities from "@/components/ShowCities";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PriceCalculator />
      <ShowCities />
      <WhyChooseUs />
      <OurClients />
      <FAQ />
      <Footer />
      <Analytics /> {/* vercel analytics */}
      {/* <SpeedInsights /> vercel analytics */}
    </div>
  );
}
