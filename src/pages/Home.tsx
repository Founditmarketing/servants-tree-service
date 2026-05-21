import Hero from "@/components/sections/Hero";
import FeaturesSplit from "@/components/sections/FeaturesSplit";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FullServicesList from "@/components/sections/FullServicesList";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero: sticky inside 200vh wrapper (z-0) — scrolls away after doors cover it */}
      <Hero />

      {/* All content renders above the hero (z-10) */}
      <div className="relative z-10">
        <FeaturesSplit />
        <WhyChooseUs />
        <GalleryPreview />
        <FullServicesList />
        <TestimonialsCarousel />
        <ContactSection />
      </div>
    </>
  );
}
