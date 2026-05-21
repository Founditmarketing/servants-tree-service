import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import TreeRemoval from "@/pages/services/TreeRemoval";
import TreeTrimming from "@/pages/services/TreeTrimming";
import DebrisHauling from "@/pages/services/DebrisHauling";
import LandClearing from "@/pages/services/LandClearing";
import TreeInspections from "@/pages/services/TreeInspections";
import Pruning from "@/pages/services/Pruning";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services/tree-removal" element={<TreeRemoval />} />
          <Route path="/services/tree-trimming" element={<TreeTrimming />} />
          <Route path="/services/debris-hauling" element={<DebrisHauling />} />
          <Route path="/services/land-clearing" element={<LandClearing />} />
          <Route path="/services/tree-inspections" element={<TreeInspections />} />
          <Route path="/services/pruning" element={<Pruning />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen" style={{ overflowX: "clip" }}>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </>
  );
}
