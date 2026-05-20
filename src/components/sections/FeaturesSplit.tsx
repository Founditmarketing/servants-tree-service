import { motion } from "motion/react";
import { ShieldCheck, PhoneCall } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function FeaturesSplit() {
  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row w-full">
      
      {/* Column 1: Licensed & Affordable */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-slate-50 pt-24 pb-40 md:pb-48 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center group relative z-10"
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors shadow-sm relative z-10">
          <ShieldCheck className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-sans text-3xl md:text-4xl font-black text-primary mb-4 uppercase tracking-tighter relative z-10">Licensed &amp; Affordable</h3>
        <div className="w-12 h-1 bg-accent mb-6 relative z-10" />
        <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-10 max-w-md relative z-10">
          At our tree service, affordability is at the heart of our commitment to our customers. While we maintain the highest standards of quality and safety, we also understand the importance of cost-effective solutions. Experience exceptional tree care that fits your budget without compromising on the exceptional results we provide.
        </p>
        <Link to="/about" className={cn(buttonVariants({ variant: "outline" }), "rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-white font-black uppercase tracking-widest px-10 py-6 text-base transition-all relative z-10 text-center justify-center")}>
          Learn More
        </Link>
      </motion.div>

      {/* Column 2: 24 Hour Emergency Service */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 bg-primary pt-24 pb-48 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center text-white group relative z-10"
      >
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg relative z-10">
          <PhoneCall className="w-10 h-10 text-white" />
        </div>
        <h3 className="font-sans text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter relative z-10">24 Hour Emergency Service</h3>
        <div className="w-12 h-1 bg-secondary mb-6 relative z-10" />
        <p className="text-white/80 text-lg leading-relaxed font-medium mb-10 max-w-md relative z-10">
          Our team is available around the clock, 24 hours a day, seven days a week, ready to respond swiftly to any tree-related emergencies that may arise. Whether it’s a fallen tree blocking your driveway, a hazardous limb threatening your home, or storm damage wreaking havoc on your property, we are here to provide immediate assistance.
        </p>
        <a href="tel:3186132388" className={cn(buttonVariants(), "rounded-xl bg-accent text-white hover:bg-white hover:text-accent font-black uppercase tracking-widest px-10 py-6 text-base shadow-accent-glow border-none transition-all relative z-10 text-center justify-center")}>
          Call Today
        </a>
      </motion.div>

      {/* Arrow Down Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] text-white drop-shadow-sm">
          <polygon fill="currentColor" points="0,0 50,10 100,0 100,10 0,10" />
        </svg>
      </div>
    </section>
  );
}
