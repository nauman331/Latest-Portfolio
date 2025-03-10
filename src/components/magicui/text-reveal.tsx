"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" "); // Splitting by space to keep words intact
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div ref={targetRef} className={cn("relative z-0 h-auto", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent p-5">
        <p className={`flex flex-wrap gap-2 text-lg md:text-2xl font-bold ${theme === "dark" ? "text-white/20" : "text-black/20"} md:p-8 lg:p-10`}>
          {words.map((word, i) => {
            const start = (words.length - i - 1) / words.length; // Reverse the start positions
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const opacity = useTransform(progress, range, [1, 0]); // Ensure words fade in the correct order
  return (
    <span className="relative">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className={theme === "dark" ? "text-white" : "text-black"}>
        {children}
      </motion.span>
    </span>
  );
};