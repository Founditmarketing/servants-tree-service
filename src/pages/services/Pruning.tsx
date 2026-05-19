import { motion } from "motion/react";
import { Scissors, Microscope, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Pruning() {
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
              <span>Long-Term Health & Preservation</span>
            </div>
            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">STRUCTURAL <br /><span className="text-secondary italic">PRUNING</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-medium">
              Precision cuts for the biological health of your landscape. We follow ANSI A300 standards to ensure every tree thrives for generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tight text-primary uppercase">The Science of Selection</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                Pruning is the most common tree maintenance procedure. While forest trees thrive with only nature's pruning, landscape trees require a higher level of care to maintain their structural integrity and aesthetics. Arid-zone or regional-specific pruning ensures that trees can handle localized environmental stressors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Canopy Weight Reduction",
                  "Diseased Tissue Isolation",
                  "Directional Growth Training",
                  "Fruit & Flower Optimization",
                  "Clearance for Structures",
                  "Water-Sprout Mitigation"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-12 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
              <Microscope className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-2xl font-black text-primary mb-4 uppercase">Compartmentalization</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                We understand CODIT (Compartmentalization of Decay in Trees). Every cut we make is placed strategically to allow the tree to naturally seal the wound and prevent fungal ingress.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-primary text-white font-black py-6 rounded-xl hover:bg-primary/90">
                  Request Pruning Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-16">The Pruning Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "No Topping", desc: "We never 'top' trees, a practice that causes starvation and extreme shock." },
              { title: "Sanitized Tools", desc: "Tools are sanitized between trees to prevent the spread of pathogens." },
              { title: "Timed Cycles", desc: "We recommend pruning during the tree's dormant phase for optimized health." }
            ].map((p) => (
              <div key={p.title} className="p-10 bg-white rounded-2xl shadow-sm border border-border/50 transition-transform hover:scale-[1.02]">
                <Scissors className="w-8 h-8 text-accent mx-auto mb-4" />
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
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">INVEST IN YOUR TREES' FUTURE.</h2>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-white px-12 py-8 rounded-xl font-black text-xl shadow-2xl shadow-accent/20 hover:scale-[1.02] transition-transform">
              Free Pruning Assessment
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
