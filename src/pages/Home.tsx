import Hero from "@/components/sections/Hero";
import FeaturesSplit from "@/components/sections/FeaturesSplit";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FullServicesList from "@/components/sections/FullServicesList";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <FeaturesSplit />
        <WhyChooseUs />
        <GalleryPreview />
        <FullServicesList />
        <TestimonialsCarousel />
        <ContactSection />
      </div>
    </div>
  );
}
