import { motion } from "motion/react";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-muted/20 pb-24">
            {/* Page Header */}
            <section className="py-32 bg-primary relative overflow-hidden">
                {/* Dark Background Setup */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[80%] md:w-1/2 h-full bg-black/20 -skew-x-12 transform translate-x-1/4 z-0 shadow-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0 hidden md:block" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:max-w-3xl"
                    >
                        <div className="inline-flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-[0.4em] mb-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <span>Connect Now</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-white">SECURE AN <br /><span className="text-secondary italic underline decoration-accent/20 underline-offset-8">ESTIMATE</span></h1>
                        <p className="text-white/80 text-lg leading-relaxed font-medium">
                            Professional assessment for all tree removal and health requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto flex flex-col gap-12">
                        {/* Contact Info */}
                        <div className="w-full">
                            <div className="relative bg-primary p-8 md:p-12 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Grid pattern overlay */}
                                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                                {/* Noise texture */}
                                <div className="absolute inset-0 bg-noise opacity-20" />
                                {/* Decorative blobs */}
                                <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
                                {/* Accent corner bar */}
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent rounded-l-2xl" />

                                <h3 className="relative z-10 font-sans text-xs font-black text-accent uppercase tracking-[0.2em] mb-10 text-center md:text-left">Directorate Contact</h3>

                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-10">
                                        <div className="flex gap-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                                <Phone className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-1">Direct Line</p>
                                                <a href="tel:3186132388" className="text-xl font-black text-white hover:text-accent transition-all tracking-tight">(318) 613-2388</a>
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                                <Mail className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-1">Digital Inquiries</p>
                                                <a href="mailto:servantstreeservice@gmail.com" className="text-lg sm:text-xl font-black text-white hover:text-accent transition-all tracking-tight">servantstreeservice<wbr />@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                                <Clock className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-1">Operation Hours</p>
                                                <div className="text-base font-bold text-white/80 tracking-tight space-y-1 mt-2">
                                                    <p className="flex justify-between w-40"><span>Mon:</span> <span>8am – 5pm</span></p>
                                                    <p className="flex justify-between w-40"><span>Tue:</span> <span>8am – 5pm</span></p>
                                                    <p className="flex justify-between w-40"><span>Wed:</span> <span>8am – 5pm</span></p>
                                                    <p className="flex justify-between w-40"><span>Thur:</span> <span>8am – 5pm</span></p>
                                                    <p className="flex justify-between w-40"><span>Fri:</span> <span>8am – 5pm</span></p>
                                                    <p className="flex justify-between w-40 text-white/40"><span>Sat:</span> <span>Closed</span></p>
                                                    <p className="flex justify-between w-40 text-white/40"><span>Sun:</span> <span>Closed</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="w-full">
                            <ContactFormSection />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[40px] overflow-hidden border border-secondary h-[400px] relative">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1BXLFxGofQdgdAFmJAN5uLviF66A3i2s&ehbc=2E312F"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
