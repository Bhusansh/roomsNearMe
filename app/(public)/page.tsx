import HeroSection from "@/components/landing/HeroSection";
import CategorySection from "@/components/landing/CategorySection";
import PopularLocations from "@/components/landing/PopularLocations";
import FeaturedListings from "@/components/landing/FeaturedListings";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import WhySection from "@/components/landing/WhySection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection/>
      <CategorySection />
       <PopularLocations /> 
       <FeaturedListings /> 
       <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}