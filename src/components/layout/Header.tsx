import { Link, useLocation } from "react-router-dom";
import { Trees, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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

function AvailabilityBadge({ compact = false }: { compact?: boolean }) {
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        const check = () => {
            // Central Time (America/Chicago)
            const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
            const day = now.getDay(); // 0=Sun, 6=Sat
            const hour = now.getHours();
            // Mon-Sat (1-6), 7AM-6PM
            setIsAvailable(day >= 1 && day <= 6 && hour >= 7 && hour < 18);
        };
        check();
        const interval = setInterval(check, 60000);
        return () => clearInterval(interval);
    }, []);

    if (compact) {
        return (
            <div className="flex items-center gap-1.5" title={isAvailable ? "Available Now" : "After Hours"}>
                <span className="relative flex h-2.5 w-2.5">
                    {isAvailable && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />}
                    <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", isAvailable ? "bg-green-500" : "bg-red-400")} />
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
                {isAvailable && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />}
                <span className={cn("relative inline-flex rounded-full h-2 w-2", isAvailable ? "bg-green-500" : "bg-red-400")} />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/70">
                {isAvailable ? "Available Now" : "After Hours"}
            </span>
        </div>
    );
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-slate-950/90 backdrop-blur-lg shadow-2xl py-2 border-b border-white/10" : "bg-transparent py-4"
            )}
        >
            <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <div className="transition-transform hover:scale-110">
                        <img src="/images/Logo.png" alt="Logo" className="h-9 md:h-10 xl:h-12 w-auto object-contain" />
                    </div>
                    <span className="font-sans text-base sm:text-lg xl:text-xl font-black tracking-tighter transition-colors text-white">
                        SERVANT'S <span className="text-secondary">TREE</span> SERVICE
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8 text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.12em]">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                to={item.href}
                                className={cn(
                                    "transition-all hover:text-accent relative py-4 flex items-center whitespace-nowrap",
                                    location.pathname === item.href
                                        ? "text-white after:absolute after:bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                                        : "text-white/80"
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

                <div className="hidden xl:flex items-center gap-3 shrink-0">
                    <AvailabilityBadge />
                    <Link to="/contact" className={cn(buttonVariants({ size: "default" }), "rounded-xl px-5 2xl:px-7 py-5 font-bold shadow-xl shadow-accent/20 bg-accent text-white hover:bg-accent/90 hover:scale-[1.02] active:scale-95 transition-all text-xs 2xl:text-sm flex items-center")}>
                        <Phone className="w-3.5 h-3.5 mr-1.5" />
                        FREE ESTIMATE
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden flex items-center gap-3">
                    <AvailabilityBadge compact />
                    <a href="tel:3186132388" className="p-2 bg-accent rounded-full hover:bg-accent/90 transition-colors">
                        <Phone className="w-5 h-5 text-white" />
                    </a>
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger
                            render={
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" />
                            }
                        >
                            <Menu className="w-6 h-6" />
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[90vw] sm:w-[400px] bg-slate-950 border-l border-white/10 p-0 flex flex-col h-full shadow-2xl">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                            <div className="flex-1 overflow-y-auto nav-scrollbar px-6 py-4 relative z-10">
                                <div className="mb-4 text-left">
                                    <span className="font-sans text-xs sm:text-sm font-black tracking-widest text-white uppercase">
                                        SERVANT'S <span className="text-secondary">TREE</span> CARE
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4 mt-2">
                                    {navigation.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex flex-col gap-2"
                                        >
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    "text-lg sm:text-xl font-sans font-black tracking-tight uppercase transition-colors hover:text-accent relative inline-flex w-max group",
                                                    location.pathname === item.href ? "text-accent" : "text-white"
                                                )}
                                            >
                                                {item.name}
                                                {location.pathname === item.href && (
                                                    <motion.div
                                                        layoutId="mobile-active"
                                                        className="absolute -bottom-1 left-0 h-1 bg-accent rounded-full w-full"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                                {location.pathname !== item.href && (
                                                    <div className="absolute -bottom-1 left-0 h-1 bg-accent rounded-full w-0 group-hover:w-full transition-all duration-300" />
                                                )}
                                            </Link>
                                            {item.subItems && (
                                                <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-white/10">
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-950/80 backdrop-blur-md relative z-10">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        "w-full rounded-xl py-5 text-sm sm:text-base font-black uppercase tracking-[0.2em] bg-accent text-white hover:bg-accent/90 shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                                    )}
                                >
                                    Get A Free Estimate
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
