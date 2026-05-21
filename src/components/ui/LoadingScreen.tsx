import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 60 ? 2 : prev < 85 ? 3 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("reveal"), 300);
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1600);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1628] overflow-hidden"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Glowing orbs */}
          <motion.div
            animate={{ x: [0, 100, -50, 0], y: [0, -80, 40, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -70, 80, 0], y: [0, 60, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Brand Mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-sm">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 4 L20 36" strokeLinecap="round" />
                  <path d="M12 10 Q20 16 28 10" strokeLinecap="round" />
                  <path d="M10 18 Q20 24 30 18" strokeLinecap="round" />
                  <path d="M8 26 Q20 32 32 26" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* Brand Name — letter by letter */}
            <div className="flex gap-[2px] mb-3 overflow-hidden">
              {"SERVANTS".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.06,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-4xl md:text-5xl font-black text-white tracking-[0.15em]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-accent/40" />
              <span className="text-accent/80 text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
                Tree Service
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-accent/40" />
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
              className="text-white text-[10px] font-bold tracking-[0.4em] uppercase tabular-nums"
            >
              {progress}%
            </motion.span>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 text-white/30 text-[9px] font-bold tracking-[0.6em] uppercase"
          >
            Cultivating Your Estate
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
