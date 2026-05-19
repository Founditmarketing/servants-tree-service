import { motion } from "motion/react";
import { TreeDeciduous, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TreeRemoval() {
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
              <span>Primary Capability</span>
            </div>
            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">TREE <br /><span className="text-secondary italic">REMOVAL</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-medium">
              Surgical extraction for hazardous, dead, or encroaching trees. We protect your property with advanced rigging and precision control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Why Professional Removal Matters</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                Tree removal is one of the most dangerous tasks in the arboricultural industry. DIY removal or hiring unlicensed crews puts your home and safety at extreme risk. Our teams utilize industry-leading safety protocols and high-capacity equipment to handle even the most complex removals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Hazardous Branch Management",
                  "Dead/Diseased Tree Extraction",
                  "Construction Lot Clearing",
                  "Encroachment Mitigation",
                  "Storm Damage Cleanup",
                  "Precision Felling"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-12 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
              <ShieldAlert className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-2xl font-black text-primary mb-4 uppercase">Advanced Safety Protocols</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                Every removal begins with a documented site safety analysis. We use specialized rigging systems to ensure every limb is lowered with total control, never risking a free-fall near structures.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-primary text-white font-black py-6 rounded-xl hover:bg-primary/90">
                  Request Safety Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Our Removal Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", title: "Assessment", desc: "Detailed analysis of tree health and structural integrity." },
              { step: "02", title: "Mobilization", desc: "Arrival with high-capacity trucks and specialized rigging." },
              { step: "03", title: "Execution", desc: "Surgical removal and complete site restoration." }
            ].map((s) => (
              <div key={s.step} className="p-10 bg-white rounded-2xl shadow-sm border border-border/50">
                <span className="text-accent font-black text-4xl mb-4 block opacity-20">{s.step}</span>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-primary">{s.title}</h4>
                <p className="text-muted-foreground font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">SECURE YOUR PROPERTY TODAY.</h2>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-white px-12 py-8 rounded-xl font-black text-xl shadow-2xl shadow-accent/20 hover:scale-[1.02] transition-transform">
              Free Removal Estimate
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
