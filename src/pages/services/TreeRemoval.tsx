import { motion } from "motion/react";
import { TreeDeciduous, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactSection from "@/components/sections/ContactSection";

export default function TreeRemoval() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/IMG_2584-scaled.jpg" alt="About Hero Background" className="w-full h-full object-cover" />
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
                        <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 ">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <span className="text-white">Primary Capability</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-primary uppercase">TREE <br /><span className="text-secondary italic">REMOVAL</span></h1>
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
                            <h2 className="text-4xl font-black tracking-tight text-primary uppercase">Why Professional Removal Matters</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                Tree removal is a critical aspect of arboriculture, and our expert tree removal service is here to address all your tree-related needs. Whether you have a tree that poses a safety hazard, is diseased, or simply needs to be removed for property development purposes, our skilled arborists are at your service.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                We employ advanced techniques and state-of-the-art equipment to ensure the safe and efficient removal of trees, all while prioritizing the preservation of your property’s integrity. Experience the peace of mind that comes with our professional tree removal service, knowing your project will be executed with precision and care from start to finish.
                            </p>
                            {/*
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
                            */}
                        </div>

                        <div className="bg-primary/5 p-42 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/images/IMG_2497-scaled.jpg" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*
             Process Section 
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
*/}
            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
