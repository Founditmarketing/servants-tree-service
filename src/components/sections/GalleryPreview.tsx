import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Hand } from "lucide-react";
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

export default function GalleryPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const speedRef = useRef(-0.4); // pixels per frame

  // Calculate drag bounds
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const scrollW = trackRef.current.scrollWidth;
        const containerW = trackRef.current.parentElement?.clientWidth ?? window.innerWidth;
        setMaxDrag(Math.max(scrollW - containerW, 0));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Slow auto-scroll
  useAnimationFrame(() => {
    if (isDragging || maxDrag === 0) return;
    const current = x.get();
    let next = current + speedRef.current;
    // Bounce at edges
    if (next < -maxDrag) {
      next = -maxDrag;
      speedRef.current = 0.4;
    } else if (next > 0) {
      next = 0;
      speedRef.current = -0.4;
    }
    x.set(next);
  });

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

      {/* Auto-scrolling gallery strip */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragStart={() => { setIsDragging(true); setHasInteracted(true); }}
          onDragEnd={() => setIsDragging(false)}
          className="flex gap-5 md:gap-8 pl-[5vw] pr-[5vw] cursor-grab active:cursor-grabbing"
        >
          {previewImages.map((url, i) => (
            <div
              key={url}
              className="w-[300px] md:w-[420px] shrink-0 relative group overflow-hidden rounded-2xl bg-slate-100 shadow-lg aspect-[4/3]"
            >
              <img
                src={url}
                alt={`Gallery preview ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Swipe hint — fades out after first interaction */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: hasInteracted ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full pointer-events-none"
        >
          <Hand className="w-4 h-4" />
          <span>Swipe to explore</span>
        </motion.div>
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
