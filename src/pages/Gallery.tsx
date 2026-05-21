import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const galleryImages = [
    { id: 1, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2142-400x284.jpg" },
    { id: 2, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2211-400x284.jpg" },
    { id: 3, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2267-400x284.jpg" },
    { id: 4, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2497-400x284.jpg" },
    { id: 5, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2519-400x284.jpg" },
    { id: 6, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2523-400x284.jpg" },
    { id: 7, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2577-400x284.jpg" },
    { id: 8, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2584-400x284.jpg" },
    { id: 9, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2587-400x284.jpg" },
    { id: 10, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2835-400x284.jpg" },
    { id: 11, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2845-400x284.jpg" },
    { id: 12, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2846-400x284.jpg" },
    { id: 13, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2858-400x284.jpg" },
    { id: 14, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_2903-400x284.jpg" },
    { id: 15, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_3009-400x284.jpg" },
    { id: 16, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_3107-400x284.jpg" },
    { id: 17, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_3494-400x284.jpg" },
    { id: 18, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_3495-400x284.jpg" },
    { id: 19, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_5157-400x284.jpg" },
    { id: 20, title: "Project Work", category: "Showcase", url: "/images/Gallary/IMG_5278-400x284.jpg" }
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') {
                setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowLeft') {
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Escape') {
                setSelectedIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <main className="min-h-screen bg-background">
            <section className="py-32 relative overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src="/images/Gallary_Hero_background.jpg" alt="Gallery Hero Background" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:max-w-2xl text-left"
                    >
                        <div className="inline-flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-[0.4em] mb-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <span>Project Showcase</span>
                        </div>
                        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tighter text-white">OUR <br /><span className="text-secondary italic underline decoration-accent/20 underline-offset-8">WORK</span></h1>
                        <p className="text-white/80 text-lg leading-relaxed font-medium">
                            A visual record of our technical precision and dedication to preservation across the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-sans text-3xl md:text-4xl font-black text-foreground mb-6 uppercase tracking-tight">Our Work IN Pictures</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            We invite you to explore our Tree Service Gallery to see the incredible transformations we’ve achieved for our clients. If you’re looking for professional, skilled, and passionate tree care services, Servants Tree Services is here to make your vision a reality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: "some" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                onClick={() => setSelectedIndex(index)}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        transition: { duration: 0.5 }
                                    }
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    rotateX: 2,
                                    rotateY: -2,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-heavy bg-muted perspective-1000 cursor-pointer"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <motion.span
                                        initial={{ y: 10, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="text-accent font-black text-[10px] uppercase tracking-widest mb-2"
                                    >
                                        {image.category}
                                    </motion.span>
                                    <h3 className="text-white text-2xl font-black tracking-tight">{image.title}</h3>
                                    <div className="mt-4 flex items-center text-white/60 text-xs font-bold uppercase tracking-widest">
                                        <ZoomIn className="w-4 h-4 mr-2" />
                                        Expand View
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        {selectedIndex > 0 && (
                            <button
                                className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(selectedIndex - 1);
                                }}
                            >
                                <ChevronLeft className="w-12 h-12" />
                            </button>
                        )}

                        {selectedIndex < galleryImages.length - 1 && (
                            <button
                                className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(selectedIndex + 1);
                                }}
                            >
                                <ChevronRight className="w-12 h-12" />
                            </button>
                        )}

                        <motion.img
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            src={galleryImages[selectedIndex].url}
                            alt={galleryImages[selectedIndex].title}
                            className="w-[90vw] max-w-2xl max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
