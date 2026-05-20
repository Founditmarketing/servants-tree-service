import { motion } from "motion/react";
import { Truck, Trash2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactSection from "@/components/sections/ContactSection";

export default function DebrisHauling() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-32 bg-white relative overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/71591059574__33771C23-8E7E-49AD-B420-33464AF79A33-scaled.jpg" alt="About Hero Background" className="w-full h-full object-cover" />
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
                            <span className="text-white">Site Restoration & Cleanup</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">DEBRIS <br /><span className="text-secondary italic">HAULING</span></h1>
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
                            <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Comprehensive Removal Solutions</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                In addition to our expert tree care services, we offer comprehensive debris hauling to ensure your property is left immaculate after the job is done. Our team understands that a clean landscape is a vital aspect of the overall tree care process.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                We utilize state-of-the-art equipment and tools to ensure a thorough cleanup, regardless of the size or scope of the project. Our machinery and personnel are well-prepared to handle even the most extensive debris removal tasks. We take care of it all, so you can enjoy the transformed, pristine landscape without a trace of the work that went into it.
                            </p>

                        </div>

                        <div className="bg-primary/5 p-42 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/images/Gallary/IMG_2577-400x284.jpg" className="w-full h-full object-cover" />
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
