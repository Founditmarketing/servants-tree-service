import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import { ScrollReveal, HorizontalScroll } from "@/components/ui/ScrollReveal";

const previewImages = [
  "/images/Gallary/IMG_2142-400x284.jpg",
  "/images/Gallary/IMG_2267-400x284.jpg",
  "/images/Gallary/IMG_2577-400x284.jpg",
  "/images/Gallary/IMG_2835-400x284.jpg",
  "/images/Gallary/IMG_2858-400x284.jpg",
  "/images/Gallary/IMG_3107-400x284.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="bg-white relative" style={{ overflowX: "clip" }}>
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Header — sits above the horizontal scroll area */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-8">
        <ScrollReveal direction="up" duration={0.7}>
          <div className="flex flex-row items-end justify-between gap-4 sm:gap-8">
            <div className="min-w-0 flex-1">
              <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-2 sm:mb-4 block">
                Project Showcase
              </span>
              <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary leading-[0.95]">
                OUR <span className="text-secondary italic">WORK</span>
                <br />IN PICTURES.
              </h2>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 shrink-0 max-w-[45%] sm:max-w-xs">
              <div className="hidden sm:block w-6 sm:w-12 h-[2px] bg-accent shrink-0" />
              <p className="text-muted-foreground font-medium leading-relaxed text-[11px] sm:text-sm">
                A visual record of our technical precision and dedication to tree care across the region.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal Scroll Strip */}
      <HorizontalScroll className="relative z-10" contentClassName="pl-[5vw] pr-[5vw] py-12 gap-5 md:gap-8">
        {previewImages.map((url, i) => (
          <div
            key={url}
            className="w-[350px] md:w-[450px] shrink-0 relative group overflow-hidden rounded-2xl bg-slate-100 shadow-lg aspect-[4/3]"
          >
            <img
              src={url}
              alt={`Gallery preview ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Camera className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
          </div>
        ))}

        {/* CTA Card — last item in the horizontal strip */}
        <Link
          to="/gallery"
          className="w-[350px] md:w-[450px] shrink-0 rounded-2xl bg-primary text-white flex flex-col items-center justify-center gap-6 shadow-lg hover:bg-accent transition-all duration-500 group aspect-[4/3]"
        >
          <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-center leading-tight">
            View Full
            <br />
            Gallery
          </span>
          <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </HorizontalScroll>
    </section>
  );
}
