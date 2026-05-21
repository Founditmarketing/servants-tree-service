import { motion } from "motion/react";
import { ShieldCheck, Clock, Award, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Deep Roots",
    description: "With deep roots in this vibrant community, we take pride in serving our neighbors and preserving the natural beauty of our region.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Team",
    description: "Our dedicated team of arborists and tree care professionals bring years of experience to every project.",
    icon: Award,
  },
  {
    title: "Unwavering Commitment",
    description: "We’re committed to excellence and safety in all that we do, and our good reputation speaks to our unwavering commitment to quality service.",
    icon: Clock,
  },
  {
    title: "Honest Communication",
    description: "At Servants Tree Service, we believe in fair pricing and honest, transparent communication.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden bg-noise">
      {/* Decorative Stamp (Eye Candy) - Adjusted position */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 left-4 w-32 h-32 md:-top-12 md:-left-12 md:w-48 md:h-48 border-2 border-primary/10 rounded-full flex items-center justify-center opacity-40 select-none pointer-events-none z-20"
      >
        <div className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-[0.3em] text-center p-4 md:p-8">
          Natchitoches Louisiana • Integrity and expertise • Quality Service • 
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Horizontal Intro Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block drop-shadow-sm">About Us</span>
            <h2 className="font-sans text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-primary"> 
              WELCOME TO <span className="text-secondary italic underline decoration-accent/20 decoration-8 underline-offset-8">SERVANTS TREE SERVICE.</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              Your trusted tree care partner nestled in the heart of Natchitoches, Louisiana.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dark Horizontal Divide for Reasons */}
      <div className="bg-foreground pt-24 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ y: -10 }}
                className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] shadow-soft hover:shadow-heavy transition-all group text-center text-white"
              >
                <div className="bg-accent rounded-2xl w-14 h-14 flex items-center justify-center mb-8 mx-auto shadow-accent-glow transition-transform group-hover:rotate-12">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-sans text-xl font-black mb-4 uppercase tracking-tighter text-white">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Arrow Down Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] text-white drop-shadow-sm">
            <polygon fill="currentColor" points="0,0 50,10 100,0 100,10 0,10" />
          </svg>
        </div>
      </div>
    </section>
  );
}

