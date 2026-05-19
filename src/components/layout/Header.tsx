import { Link, useLocation } from "react-router-dom";
import { Trees, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Our Services", 
    href: "/#services",
    subItems: [
      { name: "Tree Removal", href: "/services/tree-removal" },
      { name: "Tree Trimming", href: "/services/tree-trimming" },
      { name: "Debris Hauling", href: "/services/debris-hauling" },
      { name: "Land Clearing", href: "/services/land-clearing" },
      { name: "Tree Inspections", href: "/services/tree-inspections" },
      { name: "Pruning", href: "/services/pruning" },
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="transition-transform hover:scale-110">
            <img src="/images/Logo.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <span className={cn(
            "font-sans text-lg sm:text-xl xl:text-2xl font-black tracking-tighter transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            SERVANT'S <span className="text-secondary">TREE</span> CARE
          </span>
        </Link>

        {/* Desktop Nav - Breakpoint moved to lg and spacing refined */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-10 text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em]">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className={cn(
                  "transition-all hover:text-accent relative py-6 flex items-center",
                  location.pathname === item.href 
                    ? (isScrolled ? "text-primary" : "text-white") + " after:absolute after:bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-accent" 
                    : (isScrolled ? "text-muted-foreground" : "text-white/80")
                )}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-border/50 py-2 min-w-[200px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-xl px-4 xl:px-8 py-6 font-bold shadow-xl shadow-accent/20 bg-accent text-white hover:bg-accent/90 hover:scale-[1.02] active:scale-95 transition-all text-sm xl:text-base">
            <a href="tel:3186132388" className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              FREE ESTIMATE
            </a>
          </Button>
        </div>

        {/* Mobile Nav - Breakpoint moved to lg */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:3186132388" className="p-2 bg-secondary rounded-full">
            <Phone className="w-5 h-5 text-primary" />
          </a>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white")} />
              }
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col gap-6 mt-12">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <Link
                      to={item.href}
                      className={cn(
                        "text-2xl font-serif font-medium hover:text-primary transition-colors",
                        location.pathname === item.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="pl-4 flex flex-col gap-3 mt-2 border-l-2 border-primary/10">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-lg font-serif text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild size="lg" className="rounded-full mt-4">
                  <Link to="/contact">Get A Free Estimate</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
