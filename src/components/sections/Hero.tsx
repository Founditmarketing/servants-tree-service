import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ── Video transforms ──
  // Scale: fullscreen → card-sized
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.55]);
  // Shift left to make room for text
  const videoX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-20%"]);
  // Round corners as it shrinks
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 24]);
  // Slight vertical shift
  const videoY = useTransform(scrollYProgress, [0, 0.6], ["0%", "0%"]);

  // ── Text transforms ──
  // Fade in and slide from right
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.3, 0.6], [80, 0]);

  // ── Overlay text on video (fades out as video shrinks) ──
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // ── Background reveals ──
  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-white">
        {/* Background that reveals as video shrinks */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Main layout container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">

            {/* Video Card */}
            <motion.div
              style={{
                scale: videoScale,
                x: videoX,
                y: videoY,
                borderRadius: videoBorderRadius,
              }}
              className="relative w-full lg:w-[60%] aspect-video overflow-hidden shadow-2xl origin-center will-change-transform"
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

              {/* Video */}
              <video
                src="/videos/Servants-Tree-Service.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Overlay content that fades as video shrinks */}
              <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute inset-0 z-20 flex items-center"
              >
                <div className="px-8 md:px-16 max-w-2xl">
                  <div className="inline-flex items-center space-x-3 text-accent font-bold text-sm uppercase tracking-[0.3em] mb-6">
                    <span className="w-12 h-[2px] bg-accent"></span>
                    <span>Chartered Tree Specialists</span>
                  </div>
                  <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-white mb-6 tracking-tighter">
                    CULTIVATING <br />
                    <span className="text-accent italic">YOUR</span> <br />
                    ESTATE.
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 font-medium border-l-4 border-accent pl-6 max-w-md">
                    Serving North & Central Louisiana
                  </p>
                </div>
              </motion.div>

              {/* Border glow that appears as video becomes a card */}
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
                  borderRadius: videoBorderRadius,
                }}
                className="absolute inset-0 z-30 border-2 border-primary/20 pointer-events-none"
              />
            </motion.div>

            {/* Text Content — slides in from right */}
            <motion.div
              style={{
                opacity: textOpacity,
                x: textX,
              }}
              className="lg:w-[40%] flex flex-col items-start will-change-transform"
            >
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                Since 2006
              </span>

              <h2 className="font-sans text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter text-primary leading-[0.95] mb-6">
                TREE CARE <br />
                <span className="text-secondary italic">BUILT ON</span> <br />
                TRUST.
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-10 max-w-md">
                Professional arborists delivering safe, precise, and affordable tree services to homes and businesses across Louisiana.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-xl px-10 py-7 text-base font-bold bg-accent text-white hover:bg-accent/90 shadow-xl transition-all text-center justify-center"
                  )}
                >
                  Get Free Estimate
                </Link>
                <a
                  href="#services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-xl px-8 py-7 text-base font-bold text-primary border-primary/20 hover:bg-primary/5 transition-all text-center justify-center flex items-center"
                  )}
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
