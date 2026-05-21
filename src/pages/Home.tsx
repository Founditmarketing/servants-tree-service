import Hero from "@/components/sections/Hero";
import FeaturesSplit from "@/components/sections/FeaturesSplit";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FullServicesList from "@/components/sections/FullServicesList";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed Side Gutter Content (Eye Candy) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col items-center gap-12 mix-blend-difference pointer-events-none">
        <div className="w-[1px] h-32 bg-white/20" />
        <div className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[1em] text-white/40">
          ESTABLISHED MMVI
        </div>
        <div className="w-[1px] h-32 bg-white/20" />
      </div>

      <Hero />
      <FeaturesSplit />
      <WhyChooseUs />
      <GalleryPreview />
      <FullServicesList />
      <TestimonialsCarousel />
      <ContactSection />
    </main>
  );
}
