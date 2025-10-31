import HeroSection from "@/components/HeroSection";
import PriceCalculator from "@/components/PriceCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurClients from "@/components/OurClients";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PriceCalculator/>
      <WhyChooseUs/>
      <OurClients/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
