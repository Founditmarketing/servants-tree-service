import { motion } from "motion/react";
import ContactSection from "@/components/sections/ContactSection";

export default function TreeInspections() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/IMG_2136-scaled.jpg" alt="Tree Inspection Services" className="w-full h-full object-cover" />
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
                            <span className="text-white">Scientific Diagnosis & Analysis</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">TREE <br /><span className="text-secondary italic">INSPECTIONS</span></h1>
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
                            <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Proactive Risk Management</h2>


                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                Trees are vital components of your landscape, providing beauty, shade, and ecological benefits. However, they can also pose risks if not properly maintained. Our tree inspection services are designed to identify potential issues early, allowing us to address them proactively and help you make informed decisions about tree care.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                At Servants Tree Services we examine the overall health, structure, and appearance of each tree, looking for signs of disease, decay, infestations, or structural weaknesses. After a thorough inspection, we provide you with a detailed report that outlines the condition of your trees, any issues found, and our recommendations for tree care or maintenance.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                Our tree inspection services are a crucial part of our commitment to preserving the beauty and well-being of your trees. With our professional guidance and expert insights, you can enjoy the peace of mind that comes with knowing your trees are in the best possible hands. Contact us today to schedule a tree inspection.
                            </p>

                        </div>

                        <div className="bg-primary/5 aspect-[4/3] rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/images/Gallary/IMG_5157-480x853.jpg" className="w-full h-full object-cover object-[position:0%_15%]" />
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
