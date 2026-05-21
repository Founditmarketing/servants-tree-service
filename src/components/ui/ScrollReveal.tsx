import { useRef, useEffect, useState, type ReactNode, type Key } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

// ─── ScrollReveal ──────────────────────────────────────────────
// Viewport-triggered fade + slide. Replaces repetitive whileInView.
type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  key?: Key;
}

const directionOffset = (dir: RevealDirection, dist: number) => {
  switch (dir) {
    case "up": return { y: dist, x: 0 };
    case "down": return { y: -dist, x: 0 };
    case "left": return { y: 0, x: dist };
    case "right": return { y: 0, x: -dist };
    case "none": return { y: 0, x: 0 };
  }
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const offset = directionOffset(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ParallaxLayer ─────────────────────────────────────────────
// Scroll-speed offset for depth effects.
interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // positive = slower (moves up), negative = faster (moves down)
  offset?: [string, string];
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
  offset = ["start end", "end start"],
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// ─── CountUp ──────────────────────────────────────────────────
// Animated number counter that triggers on viewport entry.
interface CountUpProps {
  target: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  target,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(latest.toFixed(decimals));
  });

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

// ─── TextRevealByWord ──────────────────────────────────────────
// Staggered word-by-word reveal driven by scroll position.
interface TextRevealByWordProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function TextRevealByWord({
  text,
  className,
  wordClassName,
}: TextRevealByWordProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress} className={wordClassName}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

function Word({
  children,
  range,
  progress,
  className,
}: {
  children: string;
  range: [number, number];
  progress: any;
  className?: string;
  key?: Key;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={cn("inline-block mr-[0.25em] transition-colors", className)}
    >
      {children}
    </motion.span>
  );
}

// ─── HorizontalScroll ──────────────────────────────────────────
// Vertical scroll drives horizontal movement.
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  speed?: number; // multiplier for scroll range height
}

export function HorizontalScroll({
  children,
  className,
  contentClassName,
  speed = 1,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
    }
    const handleResize = () => {
      if (scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${(scrollWidth / window.innerWidth) * 100 * speed + 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className={cn("flex gap-6 will-change-transform", contentClassName)}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
