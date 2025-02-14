"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Spring Config for Smooth Motion
  const springConfig = { stiffness: 200, damping: 20 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect Mobile Screen
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Move Cursor
    const moveCursor = (e: MouseEvent) => {
      if (!isMobile) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Detect Hover on Interactive Elements
    const addHoverEvents = () => {
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {/* Outer Glow */}
        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-r from-[#C62828] to-[#9C27B0] rounded-full blur-2xl opacity-40"
          animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.6 : 0.4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Core Cursor */}
        <motion.div
          className="w-6 h-6 bg-gradient-to-r from-[#C62828] to-[#9C27B0] rounded-full shadow-lg"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
