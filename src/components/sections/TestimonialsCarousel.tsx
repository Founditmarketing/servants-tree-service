import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Holly Wilkins",
    role: "Google Review",
    content: "The guys at Servants Tree Service are top tier. They know what they're doing and get the job done safely and professionally. They are the only company I'll call for any tree service.",
    rating: 5,
    date: "September 2025"
  },
  {
    id: 2,
    name: "Denise Jones",
    role: "The Perrault House",
    content: "Servants Tree Service recently spent two days at The Perrault House in Natchitoches, expertly removing oak trees from my property that were overhanging my neighbor's house. Each day began with the team holding hands and praying to God, a practice that clearly reflected their dedication and unity. They completed the project with remarkable precision, leaving the worksite immaculate, as if they had never been there. I highly recommend Servants Tree Service.",
    rating: 5,
    date: "January 2025"
  },
  {
    id: 3,
    name: "Karla Simonds",
    role: "Google Review",
    content: "I just want to say these guys were dropped from heaven. I've used a lot of tree companies and have not been happy at all — they don't clean up and leave sticks and holes in your yard. Till I was told about this tree company. Not a stick or hole in your yard. I promise it didn't even look like trees were cut. Wow, so amazing. This tree company is all you need. They will be my tree company for life. Thank you guys for the amazing job. 🌳🌳🌳",
    rating: 5,
    date: "August 2023"
  },
  {
    id: 4,
    name: "Caroline Graves",
    role: "Google Review",
    content: "I have several rent houses that are surrounded by trees. We contacted Servant's Tree Service and set up a time to look at the properties and give us a quote. They showed up on time and gave us a very reasonable, competitive quote. They took care of our trees expeditiously and safely. We are extremely satisfied with Servant's Tree Service and will definitely use them for all of our tree service needs. I highly, highly recommend this company.",
    rating: 5,
    date: "August 2023"
  },
  {
    id: 5,
    name: "Kenneth Banks",
    role: "Google Review",
    content: "You will not find a better group of guys who work hard with a spirit of integrity. I highly recommend this company for any of your tree needs.",
    rating: 5,
    date: "August 2023"
  }
];

const MAX_CHARS = 200;

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef(0);
  const [expanded, setExpanded] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lock the container height to the old card's height before the transition,
  // then once the new card finishes entering, smoothly animate to the new height.
  const updateHeight = () => {
    if (cardRef.current) {
      setContainerHeight(cardRef.current.offsetHeight);
    }
  };

  // Update height whenever index or expanded state changes
  useEffect(() => {
    // Small delay to ensure the DOM has updated with the new content
    const timer = setTimeout(updateHeight, 0);
    return () => clearTimeout(timer);
  }, [currentIndex, expanded]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    visible: {
      x: "0",
      opacity: 1,
      scale: 1,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      pointerEvents: "none" as any,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      },
    }),
  };

  const handleNext = () => {
    directionRef.current = 1;
    setExpanded(false);
    setCurrentIndex((prev) => (prev + 1 === reviews.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    directionRef.current = -1;
    setExpanded(false);
    setCurrentIndex((prev) => (prev - 1 < 0 ? reviews.length - 1 : prev - 1));
  };

  const handleDot = (idx: number) => {
    directionRef.current = idx > currentIndex ? 1 : -1;
    setExpanded(false);
    setCurrentIndex(idx);
  };

  const review = reviews[currentIndex];
  const isLong = review.content.length > MAX_CHARS;
  const displayContent = isLong && !expanded
    ? review.content.slice(0, MAX_CHARS) + "…"
    : review.content;

  return (
    <section id="reviews" className="pt-24 pb-40 bg-slate-50 relative overflow-hidden bg-dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <span className="w-10 h-[2px] bg-accent"></span>
            <span>Client Success</span>
            <span className="w-10 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black mt-4 tracking-tighter text-primary">
            REVIEWS & <span className="text-secondary italic">FEEDBACK</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-12 md:px-20">
          {/* Height-locked outer wrapper — clips slides horizontally only */}
          <motion.div
            className="relative"
            style={{ overflowX: "clip", overflowY: "visible" }}
            animate={{ height: containerHeight }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
          >
            <AnimatePresence initial={false} custom={directionRef.current} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={directionRef.current}
                variants={slideVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                className="w-full pointer-events-none"
              >
                {/* cardRef wraps card + dots so height includes both */}
                <div ref={cardRef} className="pb-12 pointer-events-auto">
                  <div className="bg-white p-10 rounded-2xl border border-border/50 shadow-xl shadow-primary/5 relative group hover:border-primary/20 transition-all mx-2">
                    <Quote className="absolute top-8 right-10 w-12 h-12 text-muted/20 transition-colors group-hover:text-accent/20" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Animated text expand/collapse */}
                    <div className="overflow-hidden">
                      <motion.p
                        className="text-xl font-serif text-foreground/90 leading-relaxed italic"
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        "{displayContent}"
                      </motion.p>
                    </div>

                    {isLong && (
                      <motion.button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors mt-3 mb-4 flex items-center gap-1"
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          animate={{ rotate: expanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="inline-block"
                        >
                          ↓
                        </motion.span>
                        {expanded ? "Show less" : "Read more"}
                      </motion.button>
                    )}

                    <div className="flex items-center justify-between border-t border-border pt-6 mt-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-black text-foreground uppercase text-xs tracking-widest">{review.name}</p>
                          <p className="text-[10px] text-accent font-black uppercase tracking-tighter">{review.role}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest hidden sm:block">{review.date}</span>
                    </div>
                  </div>

                  {/* Dots inside measured area so height includes them */}
                  <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onPointerDown={() => handleDot(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentIndex ? "bg-accent w-6" : "bg-primary/20 hover:bg-primary/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            onPointerDown={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all z-50 border-border/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onPointerDown={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all z-50 border-border/50"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Google Rating */}
      <div className="container mx-auto px-4 md:px-6 mt-20 relative z-10 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          <strong className="text-foreground">Google</strong> rating score:{" "}
          <strong className="text-foreground">5.0</strong> of 5, based on{" "}
          <strong className="text-foreground">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJVSCkGwOPMIYRQ6J0AZqqFv0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              14 reviews
            </a>
          </strong>
        </p>
      </div>

      {/* Arrow Down Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] text-white drop-shadow-sm">
          <polygon fill="currentColor" points="0,0 50,10 100,0 100,10 0,10" />
        </svg>
      </div>
    </section>
  );
}
