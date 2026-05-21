import { motion } from "motion/react";
import ContactSection from "@/components/sections/ContactSection";

export default function TreeTrimming() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/IMG_2267-scaled.jpg" alt="Tree Trimming Services" className="w-full h-full object-cover" />
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
                            <span className="text-white">Aesthetic & Structural Excellence</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-white uppercase">TREE <br /><span className="text-accent italic">TRIMMING</span></h1>
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
                            <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Professional Tree Maintenance</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                At Servants Tree Services our tree trimming services are designed to promote the overall health and vitality of your trees. Our tree trimming experts will assess and remove any hazardous branches, reducing the risk of property damage and personal injury. Regular pruning can remove dead or diseased branches, improving air circulation and sunlight exposure, reducing the risk of diseases, and encouraging new growth.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                Trimming your trees not only keeps them healthy but also enhances their appearance. Our skilled arborists are trained to maintain the natural shape of your trees while removing overgrown branches and maintaining a harmonious balance in your landscape.
                            </p>
                        </div>

                        <div className="bg-primary/5 aspect-[4/3] rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/images/Gallary/IMG_2211-400x284.jpg" className="w-full h-full object-cover" />
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
