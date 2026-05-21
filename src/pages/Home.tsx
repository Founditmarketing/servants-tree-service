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
      {/* Fixed hero behind everything */}
      <Hero />

      {/* All scrollable content — sits above the hero */}
      <div className="relative z-10">
        {/* Spacer: lets the hero be visible for one full screen before doors close */}
        <div className="h-screen" />

        {/* Doors close over hero, then rest of page scrolls normally */}
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
