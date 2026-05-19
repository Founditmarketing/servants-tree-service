import Hero from "@/components/sections/Hero";
import FullServicesList from "@/components/sections/FullServicesList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactFormSection from "@/components/sections/ContactFormSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import FeaturesSplit from "@/components/sections/FeaturesSplit";
import GalleryPreview from "@/components/sections/GalleryPreview";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed Side Gutter Content (Eye Candy) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col items-center gap-12 mix-blend-difference pointer-events-none">
        <div className="w-[1px] h-32 bg-white/20" />
        <div className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[1em] text-white/40">
          ESTABLISHED MMVI
        </div>
        <div className="w-[1px] h-32 bg-white/20" />
      </div>

      <Hero />
      
      <FeaturesSplit />
      


      <WhyChooseUs />

      <GalleryPreview />

      <FullServicesList />
      
      <TestimonialsCarousel />



      {/* Contact Section Preview */}
      <section className="py-24 bg-white relative" id="contact-preview">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -z-10 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Direct Communication</span>
                <h2 className="font-sans text-4xl md:text-6xl font-black text-primary mt-6 mb-8 tracking-tighter">LET'S TALK ABOUT YOUR <span className="text-secondary italic">TREES</span>.</h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg font-medium">
                  Whether you have a specific project in mind or just need professional advice on tree health, our mission-ready team is here to help.
                </p>
              </div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                className="space-y-8"
              >
                {[
                  { title: "Initial Consultation", desc: "We'll visit your property and provide a detailed analysis." },
                  { title: "Transparent Pricing", desc: "No hidden fees. You'll get a clear, written estimate." },
                  { title: "Safe Execution", desc: "Our team uses industry-leading safety protocols." },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-primary/5">{idx + 1}</div>
                    <div className="pt-1">
                      <h4 className="font-black text-primary uppercase text-sm tracking-tight mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 blur-2xl" />
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
