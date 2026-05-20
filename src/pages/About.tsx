import { motion } from "motion/react";
import { Trees, ShieldCheck, Heart, Search } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

export default function About() {
    return (
        <main className="relative overflow-hidden bg-white selection:bg-primary selection:text-white">
            {/* Global Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noiseFilter\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.65\x22 numOctaves=\x223\x22 stitchTiles=\x22stitch\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noiseFilter)\x22/%3E%3C/svg%3E')" }} />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/About_Hero_Background.jpeg" alt="About Hero Background" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:max-w-3xl"
                    >
                        <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Serving North & Central Louisiana</span>
                        <h1 className="font-sans text-5xl md:text-8xl font-black text-white mt-6 mb-8 tracking-tighter leading-tight uppercase">About Us</h1>
                    </motion.div>
                </div>

                {/* Guiding Line */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 80, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent/50 to-accent z-20"
                />
            </section>

            {/* Main Narrative Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">

                        {/*
                        <div className="relative">
                            <div className="aspect-square bg-secondary rounded-[40px] overflow-hidden">
                                <img
                                    src="/images/Gallary/IMG_2211-400x284.jpg"
                                    alt="Professional tree care equipment in action"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                        
                    */}
                        <div className="space-y-8 lg:col-span-2">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Your Trusted Local Tree Service</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p>
                                    At Servants Tree Service, we’re more than just a tree service company; we’re a team of passionate professionals who genuinely care about trees, safety, and the environment. Our mission is simple yet profound: to enhance the health and beauty of your trees while ensuring the safety of your property and loved ones.
                                </p>
                                <p>
                                    You can trust that our team is trained, certified, and knowledgeable, with a deep understanding of tree care and maintenance. We are proud to serve North and Central Louisiana, and our dedication to the area is evident in our quality work and unwavering commitment to customer satisfaction.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
                            <div className="w-1/3 lg:w-full">
                                <img
                                    src="/images/award-plaque-BR538023-scaled.png"
                                    alt="Servants Tree Services 2025 Best of BusinessRate Award Plaque"
                                    className="h-full w-full mx-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-muted/30 relative overflow-hidden">

                {/* Geometric Texture */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none animate-drift"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Left Column: Video */}
                <div className="w-3/4 mb-8 mx-auto overflow-hidden border-2 border-[var(--color-secondary)] rounded-[5px]">
                    <div className="relative aspect-video w-full bg-muted shadow-lg">
                        <video
                            src="/videos/servants-tree-service-commercial.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-serif text-4xl font-bold text-primary mb-6">Why Choose Us?</h2>
                    </div>

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
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {[
                            {
                                title: "Expertise",
                                desc: "Our team of licensed and experienced tree care professionals brings a wealth of expertise to every project.",
                                icon: <Trees className="w-6 h-6 text-primary" />
                            },
                            {
                                title: "Customer-Centric",
                                desc: "Your satisfaction is our priority. We work closely with each client, understanding your unique needs and concerns, and tailor our services to exceed your expectations at a reasonable price.",
                                icon: <Heart className="w-6 h-6 text-primary" />
                            },
                            {
                                title: "Safety First",
                                desc: "Safety is a core value at Servants Tree Services. Our team is trained and equipped to handle any tree-related task with the utmost care and safety in mind.",
                                icon: <ShieldCheck className="w-6 h-6 text-primary" />
                            },
                            {
                                title: "Quality Assurance",
                                desc: "Every project we undertake is executed with precision and attention to detail. We believe in doing the job right the first time, ensuring the health and longevity of your trees.",
                                icon: <Search className="w-6 h-6 text-primary" />
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-white p-10 rounded-[32px] border border-secondary flex gap-6 hover:shadow-xl transition-shadow duration-500"
                            >
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                                    {value.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-primary mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
