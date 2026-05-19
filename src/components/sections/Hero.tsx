import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, TreeDeciduous, Scissors } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" /> {/* Gradient for text readability */}
        <video
          src="/videos/Servants-Tree-Service.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              className="inline-flex items-center space-x-3 text-accent font-bold text-sm uppercase tracking-[0.3em] mb-6"
            >
              <div className="flex -space-x-1">
                <span className="w-12 h-[2px] bg-accent"></span>
              </div>
              <span>Chartered Tree Specialists</span>
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-white mb-8 tracking-tighter"
            >
              CULTIVATING <br />
              <span className="text-accent italic">YOUR</span> <br />
              ESTATE.
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-xl leading-relaxed font-medium border-l-4 border-accent pl-6"
            >
              Elite arboricultural management for those who view their landscape as an investment in legacy.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
            >
              <Button asChild size="lg" className="rounded-xl px-12 py-8 text-xl font-bold bg-accent text-white hover:bg-accent/90 shadow-xl transition-all">
                <Link to="/contact">Start Your Review</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl px-10 py-8 text-xl font-bold text-white border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                <a href="#services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
