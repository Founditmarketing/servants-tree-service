import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const previewImages = [
  "/images/Gallary/IMG_2142-400x284.jpg",
  "/images/Gallary/IMG_2267-400x284.jpg",
  "/images/Gallary/IMG_2577-400x284.jpg",
  "/images/Gallary/IMG_2835-400x284.jpg",
  "/images/Gallary/IMG_2858-400x284.jpg",
  "/images/Gallary/IMG_3107-400x284.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          <div>
            <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">
              Project Showcase
            </span>
            <h2 className="font-sans text-5xl md:text-6xl font-black tracking-tighter text-primary leading-[0.95]">
              OUR <span className="text-secondary italic">WORK</span>
              <br />IN PICTURES.
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-[2px] bg-accent" />
            <p className="text-muted-foreground font-medium max-w-xs leading-relaxed text-sm">
              A visual record of our technical precision and dedication to tree care across the region.
            </p>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {previewImages.map((url, i) => (
            <motion.div
              key={url}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`relative group overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-[260px] md:h-auto" : "h-[160px] md:h-[200px]"
              }`}
            >
              <img
                src={url}
                alt="Gallery preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-xl px-12 py-7 text-base font-black uppercase tracking-widest bg-primary text-white hover:bg-accent transition-all shadow-xl"
          >
            <Link to="/gallery" className="flex items-center gap-3">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
