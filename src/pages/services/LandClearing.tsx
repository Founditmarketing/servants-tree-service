import { motion } from "motion/react";
import { Construction, Map, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandClearing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Dual Color Edge */}
        {/* Dual Color Edge - Adjusted for Responsiveness */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary -skew-x-12 transform translate-x-1/4 z-0 shadow-2xl hidden lg:block" />
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-40 lg:h-full bg-primary z-0 lg:hidden" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 transform translate-x-1/3 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">
              <span className="w-12 h-[2px] bg-accent"></span>
              <span>Development & Site Prep</span>
            </div>
            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">LAND <br /><span className="text-secondary italic">CLEARING</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-medium">
              Transforming overgrown lots into construction-ready canvases. We handle everything from brush mowing to full-scale timber management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Precision Development Support</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                Lot clearing is the foundation of any development project. We provide specialized land preparation services that consider soil health, local regulations, and the long-term integrity of the land. Whether it's a small backyard expansion or a multi-acre commercial development, we have the fleet to deliver.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Selective Timber Clearing",
                  "Brush & Undergrowth Mowing",
                  "Construction Site Prep",
                  "Viewshed Restoration",
                  "Trail & Path Creation",
                  "Invasive Species Removal"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-12 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
              <Construction className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-2xl font-black text-primary mb-4 uppercase">Environmental Stewardry</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                We follow strict local adherence to environmental codes, ensuring that our clearing practices minimize erosion and protect the root zones of trees designated for preservation.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-primary text-white font-black py-6 rounded-xl hover:bg-primary/90">
                  Request Site Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-16">The Clearing Phasing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Analysis", desc: "Digital mapping and selective marking of trees for preservation vs removal." },
              { title: "Clearing", desc: "Removal of lower vegetation and designated timber using our specialized fleet." },
              { title: "Restoration", desc: "Soil grading and debris processing to prepare for next-phase development." }
            ].map((p) => (
              <div key={p.title} className="p-10 bg-white rounded-2xl shadow-sm border border-border/50">
                <Map className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-foreground">{p.title}</h4>
                <p className="text-muted-foreground font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">PREPARE YOUR CANVAS.</h2>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-white px-12 py-8 rounded-xl font-black text-xl shadow-2xl shadow-accent/20 hover:scale-[1.02] transition-transform">
              Request Land Quote
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
