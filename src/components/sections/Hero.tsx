import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative h-[150vh]">
      {/* Sticky fullscreen hero — stays pinned while doors close over it */}
      <div className="sticky top-0 h-screen overflow-hidden z-0">
        {/* Full Screen Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <video
            src="/videos/Servants-Tree-Service.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 text-accent font-bold text-sm uppercase tracking-[0.3em] mb-6">
              <span className="w-12 h-[2px] bg-accent"></span>
              <span>Chartered Tree Specialists</span>
            </div>

            <h1 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-white mb-8 tracking-tighter">
              CULTIVATING <br />
              <span className="text-accent italic">YOUR</span> <br />
              ESTATE.
            </h1>

            <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-xl leading-relaxed font-medium border-l-4 border-accent pl-6">
              Serving North & Central Louisiana
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <Link
                to="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-xl px-12 py-8 text-xl font-bold bg-accent text-white hover:bg-accent/90 shadow-xl transition-all text-center justify-center"
                )}
              >
                Contact Us
              </Link>
              <a
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-xl px-10 py-8 text-xl font-bold text-white border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm text-center justify-center flex items-center"
                )}
              >
                Our Services
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
