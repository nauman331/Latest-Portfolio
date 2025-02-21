"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotOffsetX = useMotionValue(0);
  const dotOffsetY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Spring Configurations
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const dotSpringConfig = { stiffness: 100, damping: 10, mass: 0.4 };
  const dotOffsetXSpring = useSpring(dotOffsetX, dotSpringConfig);
  const dotOffsetYSpring = useSpring(dotOffsetY, dotSpringConfig);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const moveCursor = (e: MouseEvent) => {
      if (!isMobile) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        // Limit dot movement inside the ring
        const offsetLimit = 14; 
        let offsetX = Math.min(Math.max(e.movementX * 1.5, -offsetLimit), offsetLimit);
        let offsetY = Math.min(Math.max(e.movementY * 1.5, -offsetLimit), offsetLimit);

        dotOffsetX.set(offsetX);
        dotOffsetY.set(offsetY);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Detect hover on interactive elements
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
  }, [cursorX, cursorY, dotOffsetX, dotOffsetY, isMobile]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {/* Outer Ring (Expands on Hover) */}
        <motion.div
          className="absolute w-14 h-14 border-2 border-[#C62828] rounded-full"
          animate={{
            opacity: isHovering ? 0.9 : 0.5,
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "#9C27B0" : "#C62828", 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Moving Dot (Now also grows on hover!) */}
        <motion.div
          className="w-5 h-5 bg-[#ff3d00] rounded-full"
          style={{
            translateX: dotOffsetXSpring,
            translateY: dotOffsetYSpring,
          }}
          animate={{
            scale: isHovering ? 1.4 : 1, // Grows slightly on hover
            backgroundColor: isHovering ? "#9C27B0" : "#C62828",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
