import { motion } from "motion/react";
import { Trees, ShieldCheck, Heart, Search, MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactFormSection";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-white selection:bg-primary selection:text-white">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-[40px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/about/800/800" 
                  alt="Our professional team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>

            <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Geometric Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
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
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Organic Texture */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary">Get In Touch</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Ready to get started? Contact us today for a free estimate!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Call Us</h4>
                    <a href="tel:3186132388" className="text-xl font-bold hover:text-primary transition-colors text-primary">(318) 613-2388</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground font-medium">515 Fisherman Wharf RD<br />Converse, LA 71419</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground font-medium break-all md:break-normal">
                      servantstreeservice<wbr />@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Open Hours</h4>
                    <p className="text-muted-foreground font-medium">
                      Mon – Fri: 8am – 5pm<br />
                      Sat – Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-2 -z-10" />
              <div className="shadow-2xl rounded-[32px] overflow-hidden">
                <ContactForm className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
