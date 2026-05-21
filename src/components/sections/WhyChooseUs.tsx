import { ShieldCheck, Clock, Award, HeartHandshake } from "lucide-react";
import { ScrollReveal, TextRevealByWord } from "@/components/ui/ScrollReveal";

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
    description: "We're committed to excellence and safety in all that we do, and our good reputation speaks to our unwavering commitment to quality service.",
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


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Horizontal Intro Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ScrollReveal direction="none" duration={0.6}>
            <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block drop-shadow-sm">About Us</span>
          </ScrollReveal>
          <TextRevealByWord
            text="WELCOME TO SERVANTS TREE SERVICE."
            className="font-sans text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-primary"
            wordClassName="text-primary last:text-secondary last:italic"
          />
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              Your trusted tree care partner nestled in the heart of Natchitoches, Louisiana.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Dark Horizontal Divide for Reasons */}
      <div className="bg-foreground pt-24 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} direction="up" delay={i * 0.1} duration={0.6}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] shadow-soft hover:shadow-heavy transition-all group text-center text-white h-full"
                >
                  <div className="bg-accent rounded-2xl w-14 h-14 flex items-center justify-center mb-8 mx-auto shadow-accent-glow transition-transform group-hover:rotate-12">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-sans text-xl font-black mb-4 uppercase tracking-tighter text-white">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
