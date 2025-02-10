"use client";
import nauman from "../../assets/nauman.jpg";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";

const Hero = () => {
  return (
    <>
      {/* Full-screen DotPattern Background */}
      <DotPattern
        className={cn(
          "absolute inset-0 w-full h-[600px] opacity-40",
          "[mask-image:radial-gradient(80vw_circle_at_center,white,transparent)]"
        )}
      />

      <section className="container relative flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg bg-background h-auto md:h-[600px] w-full">
        {/* Left Section - Text Content */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center p-6 text-center md:text-left">
          <div className="max-w-lg space-y-6">
            <BoxReveal boxColor={"#C62828"} duration={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[3.8rem] font-extrabold leading-tight tracking-wide"
              >
                M<span className="text-[#C62828]">.</span> Nauman
              </motion.p>
            </BoxReveal>

            <BoxReveal boxColor={"#C62828"} duration={0.5}>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-2 text-[1.2rem] flex items-center gap-2 font-medium"
              >
                I am{" "}
                <WordRotate
                  className="font-bold text-[#C62828] text-[1.5rem]"
                  words={["Frontend Developer", "Backend Developer", "Full Stack Developer", "Android Developer", "IOS Developer", "Cross Platform Developer"]}
                />
              </motion.h2>
            </BoxReveal>

            <BoxReveal boxColor={"#C62828"} duration={0.5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-gray-700 text-[1.1rem] leading-relaxed"
              >
                <p>
                  🚀 Passionate about creating{" "}
                  <span className="font-semibold text-[#C62828]">
                    modern web applications
                  </span>{" "}
                  with sleek UI/UX.
                </p>
                <p>
                  💻 Experienced in{" "}
                  <span className="font-semibold text-[#C62828]">
                    MERN, TypeScript, React Native, Tailwind CSS
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#C62828]">
                    Framer Motion
                  </span>
                  .
                </p>
                <p>🎯 Focused on building scalable and interactive solutions.</p>
              </motion.div>
            </BoxReveal>

            <BoxReveal boxColor={"#C62828"} duration={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#C62828] to-[#9C27B0] hover:from-[#9C27B0] hover:to-[#1A237E] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore My Work
                </Button>
              </motion.div>
            </BoxReveal>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-xl overflow-hidden border-[8px] border-[#C62828] hover:border-[#9C27B0] transition-all duration-300"
          >
            {/* Image Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#C62828] via-transparent to-transparent opacity-30" />
            <img
              src={nauman}
              alt="M. Nauman"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
