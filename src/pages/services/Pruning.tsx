import { motion } from "motion/react";
import { Scissors, Microscope, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactSection from "@/components/sections/ContactSection";

export default function Pruning() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/IMG_2903-scaled.jpg" alt="About Hero Background" className="w-full h-full object-cover" />
                </div>
                {/* Dual Color Edge */}
                {/* Dual Color Edge - Adjusted for Responsiveness */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/70 -skew-x-12 transform translate-x-1/3 z-0 shadow-2xl block" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/50 -skew-x-12 transform translate-x-1/2 z-0 block" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:max-w-2xl"
                    >
                        <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <span className="text-white">Long-Term Health & Preservation</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">STRUCTURAL <br /><span className="text-secondary italic">PRUNING</span></h1>
                        <p className="text-white/64 text-lg max-w-xl leading-relaxed font-medium">
                            Serving North & Central Louisiana
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
                                At Servants Tree Services, our precision tree pruning services are designed to enhance the beauty, health, and safety of your trees. Proper tree pruning is an essential component of tree care, as it promotes growth, reduces the risk of disease, and improves the aesthetic appeal of your landscape.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                We begin each pruning project with a detailed assessment of your trees to help us identify the specific needs and goals for each tree. Our skilled team employs a variety of pruning techniques to ensure that your trees are pruned with precision and care. Safety is our top priority. We address any hazardous branches that may pose risks to your property, vehicles, or loved ones. Contact us today to schedule a consultation and let our team of experts bring out the best in your trees, ensuring a safer, more beautiful, and healthier landscape for you and your family.
                            </p>
                        </div>

                        <div className="bg-primary/5 p-42 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/images/Gallary/IMG_2845-480x1039.jpg" className="w-full h-full object-cover object-[position:0%_30%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
