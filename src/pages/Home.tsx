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
      {/* Hero: sticky in 500vh wrapper, z-0 */}
      <Hero />

      {/* Content layer: z-10 renders above hero.
          -mt-[300vh] pulls it up so doors close while hero is still visible,
          and hero stays frozen behind ~2 more sections before scrolling away. */}
      <div className="relative z-10" style={{ marginTop: "-300vh" }}>
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
