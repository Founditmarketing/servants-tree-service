import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const previewImages = [
  "/images/Gallary/IMG_2142-400x284.jpg",
  "/images/Gallary/IMG_2267-400x284.jpg",
  "/images/Gallary/IMG_2577-400x284.jpg",
  "/images/Gallary/IMG_2835-400x284.jpg",
  "/images/Gallary/IMG_2858-400x284.jpg",
  "/images/Gallary/IMG_3107-400x284.jpg",
];

// Double the images for seamless infinite loop
const loopedImages = [...previewImages, ...previewImages];

export default function GalleryPreview() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-white relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
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

      {/* Infinite auto-scrolling gallery */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
      >
        <div
          className="flex gap-5 md:gap-8 gallery-scroll-track"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {loopedImages.map((url, i) => (
            <div
              key={`${url}-${i}`}
              className="w-[300px] md:w-[420px] shrink-0 relative group overflow-hidden rounded-2xl bg-slate-100 shadow-lg aspect-[4/3]"
            >
              <img
                src={url}
                alt={`Gallery preview ${(i % previewImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex justify-center">
            <Link
              to="/gallery"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-xl px-10 py-6 text-base font-bold text-primary border-primary/20 hover:bg-primary hover:text-white transition-all flex items-center gap-2"
              )}
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
