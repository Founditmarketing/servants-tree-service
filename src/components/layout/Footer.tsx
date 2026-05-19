import { Trees, Mail, Phone, MapPin, Facebook, Instagram, ShieldCheck, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer overflow-hidden">
      <div className="bg-primary h-8 w-full relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-30" />
      </div>
      <div className="bg-foreground py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-primary p-2.5 rounded-lg shadow-lg shadow-primary/40">
                  <Trees className="w-5 h-5 text-white" />
                </div>
                <span className="font-sans text-2xl font-black text-white tracking-widest">
                  SERVANT'S
                </span>
              </Link>
              <p className="text-white/60 leading-relaxed font-medium">
                High-performance tree care solutions for discerning property owners who value safety, precision, and architectural beauty.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/40 hover:text-accent transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/40 hover:text-accent transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs font-black uppercase tracking-[0.2em] mb-8 text-accent">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/#services" className="text-white/60 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/gallery" className="text-white/60 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/#reviews" className="text-white/60 hover:text-white transition-colors">Reviews</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-black uppercase tracking-[0.2em] mb-8 text-accent">Expertise</h4>
              <ul className="space-y-4 text-sm font-medium text-white/60 uppercase tracking-tighter">
                <li className="hover:text-white transition-colors cursor-default">Tree Removal</li>
                <li className="hover:text-white transition-colors cursor-default">Tree Trimming</li>
                <li className="hover:text-white transition-colors cursor-default">Debris Hauling</li>
                <li className="hover:text-white transition-colors cursor-default">Land Clearing</li>
                <li className="hover:text-white transition-colors cursor-default">Tree Inspections</li>
                <li className="hover:text-white transition-colors cursor-default">Pruning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-black uppercase tracking-[0.2em] mb-8 text-accent">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-white/40 mt-1 shrink-0" />
                  <a href="tel:3186132388" className="text-white/80 font-bold hover:text-white transition-all tracking-tight">
                    (318) 613-2388
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-white/40 mt-1 shrink-0" />
                  <a href="mailto:servantstreeservice@gmail.com" className="text-white/80 font-bold hover:text-white transition-all tracking-tight break-all">
                    servantstreeservice@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-white/40 mt-1 shrink-0" />
                  <span className="text-white/60 font-medium leading-relaxed">
                    515 Fisherman Wharf Rd, Converse, LA 71419
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
