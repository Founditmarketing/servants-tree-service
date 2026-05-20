import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactFormSection";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#f5fbff] relative overflow-hidden" id="contact-preview">
      {/* Inject self-contained keyframe styles for a seamless drift animation */}
      <style>{`
        @keyframes drift {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        .animate-drift {
          animation: drift 16s linear infinite;
        }
      `}</style>

      {/* Top Solid White Strip above the Divider */}
      <div className="absolute top-0 left-0 w-full h-[60px] md:h-[90px] bg-white z-10 pointer-events-none" />

      {/* Seamless Repeating Organic Pine Needle & Leaf Branch Pattern covering the entire section background below the divider */}
      <div 
        className="absolute top-[60px] md:top-[90px] bottom-0 left-0 right-0 pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 1) 100%)"
        }}
      >
        {/* Large skewed, slightly scaled pattern that moves slowly in a continuous loop */}
        <div 
          className="absolute -inset-16 opacity-100 origin-center transform skew-y-[-6deg] rotate-[-2deg] scale-110 animate-drift" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20,0 L20,40' stroke='rgba(14,116,144,0.16)' stroke-width='2' stroke-dasharray='2,2'/%3E%3Cpath d='M20,32 L10,22 M20,32 L30,22 M20,22 L10,12 M20,22 L30,12 M20,12 L10,2 M20,12 L30,2' stroke='rgba(56,189,248,0.45)' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Arrow Up Divider (positioned lower down, keeping its full elegant unsquashed shape) */}
      <div className="absolute top-[60px] md:top-[90px] left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[90px]">
          {/* Outer White Corners (covering everything outside/above the sloped arrow) */}
          <polygon points="0,0 50,0 0,10" fill="#ffffff" />
          <polygon points="50,0 100,0 100,10" fill="#ffffff" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Details Column */}
          <div className="space-y-12 lg:pt-10">
            <div className="space-y-6">
              <h2 className="font-sans text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase text-center lg:text-left">
                GET IN <span className="text-secondary italic">TOUCH</span>.
              </h2>
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
                  <div className="text-muted-foreground font-medium text-sm space-y-1 mt-1">
                    <p className="flex justify-between w-40"><span>Mon:</span> <span>8am – 5pm</span></p>
                    <p className="flex justify-between w-40"><span>Tue:</span> <span>8am – 5pm</span></p>
                    <p className="flex justify-between w-40"><span>Wed:</span> <span>8am – 5pm</span></p>
                    <p className="flex justify-between w-40"><span>Thur:</span> <span>8am – 5pm</span></p>
                    <p className="flex justify-between w-40"><span>Fri:</span> <span>8am – 5pm</span></p>
                    <p className="flex justify-between w-40 text-muted-foreground/50"><span>Sat:</span> <span>Closed</span></p>
                    <p className="flex justify-between w-40 text-muted-foreground/50"><span>Sun:</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-2 -z-10" />
            <div className="shadow-2xl rounded-[32px] overflow-hidden">
              <ContactForm className="bg-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
