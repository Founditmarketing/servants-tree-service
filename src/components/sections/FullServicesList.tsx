import { motion } from "motion/react";
import { TreeDeciduous, Scissors, Truck, Construction, Search, Wind } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const allServices = [
  {
    id: "removal",
    title: "Tree Removal",
    subtitle: "Safe, precision extraction.",
    icon: TreeDeciduous,
    description: "Whether a tree is hazardous, dead, or diseased, our team provides safe removal using advanced rigging techniques.",
    details: "We specialize in 'tight-space' removals near structures. Our process includes a full safety assessment and complete debris disposal."
  },
  {
    id: "trimming",
    title: "Tree Trimming",
    subtitle: "Aesthetic & Structural Balance.",
    icon: Wind,
    description: "Thinning and shaping to improve health, safety, and property appearance while protecting against storm breakage.",
    details: "We focus on canopy weight reduction and directional pruning to promote long-term structural integrity and light penetration."
  },
  {
    id: "hauling",
    title: "Debris Hauling",
    subtitle: "Efficient Site Clearing.",
    icon: Truck,
    description: "Efficient removal of tree limbs, brush, and storm debris to keep your property clean and safe.",
    details: "Our fleet handles everything from small brush piles to entire tree logs, ensuring organic material is hauled to appropriate recycling facilities."
  },
  {
    id: "clearing",
    title: "Land Clearing",
    subtitle: "Construction-Ready Preparation.",
    icon: Construction,
    description: "Professional preparation for new construction, trail building, or yard expansions.",
    details: "We handle vegetation management, brush mowing, and selective clearing to create a clean slate for your next project."
  },
  {
    id: "inspection",
    title: "Tree Inspections",
    subtitle: "Diagnosis & Risk Assessment.",
    icon: Search,
    description: "Comprehensive assessments to identify disease, decay, or structural weaknesses before they become a liability.",
    details: "Our experts provide documented health reports and risk mitigation plans to help you make informed decisions about your landscape."
  },
  {
    id: "pruning",
    title: "Pruning",
    subtitle: "Scientific Plant Care.",
    icon: Scissors,
    description: "Selective removal of branches to improve health, manage size, and encourage compartmentalization.",
    details: "We follow industry-standard ANSI A300 guidelines for precision pruning that enhances vigor and prevents disease transmission."
  }
];

export default function FullServicesList() {
  const navigate = useNavigate();

  const getServicePath = (id: string) => {
    switch (id) {
      case 'inspection': return '/services/tree-inspections';
      case 'clearing': return '/services/land-clearing';
      case 'hauling': return '/services/debris-hauling';
      case 'removal': return '/services/tree-removal';
      case 'trimming': return '/services/tree-trimming';
      case 'pruning': return '/services/pruning';
      default: return `/services/${id}`;
    }
  };

  return (
    <section id="services" className="pt-24 pb-40 bg-slate-950 relative overflow-hidden selection:bg-accent selection:text-white">
      {/* High-Fidelity Background Textures */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Parallax Glowing Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" 
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" 
        />
        
        {/* Luminous Data-Stream Line */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-30" />

        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Large Typographic Watermark */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.01] uppercase tracking-[-0.08em] whitespace-nowrap select-none pointer-events-none italic">
          ArborCare
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-24"
        >
          <div className="inline-flex items-center space-x-4 text-accent font-black text-[10px] uppercase tracking-[0.5em] mb-6">
            <span className="w-12 h-[1px] bg-accent/50"></span>
            <span>Technical Capabilities // VER. 2.0</span>
          </div>
          <h2 className="font-sans text-5xl sm:text-7xl lg:text-9xl font-black mt-4 tracking-tighter text-white uppercase leading-[0.8] mb-6">
            TECHNICAL <br />
            <span className="text-secondary italic underline decoration-white/5 underline-offset-[16px]">EXCELLENCE</span>
          </h2>
          <p className="text-white/40 font-serif italic text-xl max-w-xl">
            Precision engineering meets biological heritage. Explore our specialized arboreal solutions.
          </p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {allServices.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => navigate(getServicePath(service.id))}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              className="group relative p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-700 overflow-hidden cursor-pointer"
            >
              {/* Interactive Luminous Flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                <div className="w-20 h-20 bg-white/5 text-accent rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-2xl border border-white/10 group-hover:rotate-[15deg] group-hover:scale-110">
                  <service.icon className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-sans text-4xl font-black text-white mb-3 tracking-tighter transition-colors group-hover:text-accent italic">{service.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-[1px] bg-secondary/40"></span>
                    <p className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">{service.subtitle}</p>
                  </div>
                  <p className="text-white/50 mb-10 leading-relaxed font-medium text-lg lg:pr-10">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-6 items-center">
                    <Button variant="outline" className="rounded-2xl border-white/10 bg-white/5 text-white hover:bg-accent hover:border-accent hover:text-white font-black transition-all uppercase tracking-widest text-[11px] h-12 px-10 shadow-lg hover:shadow-accent/20">
                      ACCESS DATA // 0{allServices.indexOf(service) + 1}
                    </Button>
                    
                    <Accordion type="single" className="w-full" onClick={(e) => e.stopPropagation()}>
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-[11px] font-black text-white/40 hover:text-accent hover:no-underline py-4 uppercase tracking-[0.4em] transition-all">
                          SYSTEM DETAILS
                        </AccordionTrigger>
                        <AccordionContent className="text-white/30 pt-6 border-t border-white/5 mt-2 font-medium leading-relaxed italic text-base lg:max-w-md">
                          {service.details}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Arrow Down Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] text-slate-50 drop-shadow-sm">
          <polygon fill="currentColor" points="0,0 50,10 100,0 100,10 0,10" />
        </svg>
      </div>
    </section>
  );
}
