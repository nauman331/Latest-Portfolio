"use client";
import nauman from "../../assets/nauman.jpg";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Facebook, Github, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      {/* Full-screen DotPattern Background */}
      <DotPattern
        className={cn(
          "absolute inset-0 w-full h-[600px] opacity-40",
          "[mask-image:radial-gradient(80vw_circle_at_center,white,transparent)]"
        )}
      />

      <motion.div drag dragConstraints={{ top: -125, left: -12, right: 400, bottom: 300 }} whileDrag={{ scale: 1.2 }} dragElastic={.1} whileHover={{ cursor: 'grabbing' }} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} className=" w-14 md:top-48 top-32 border border-gray-200 h-48 absolute hidden md:flex flex-col justify-evenly items-center shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href='https://github.com/nauman331' className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828] "} cursor-pointer`}>
          <Github />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100091209582055&mibextid=dZk1I5icssMIZk4L' className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"} cursor-pointer`}>
          <Facebook />
        </a>
        <a href='https://www.linkedin.com/in/muhammad-nauman-72a2b2298?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=android_app' className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"} cursor-pointer`}>
          <Linkedin />
        </a>
        <a href='https://www.tiktok.com/@naumansoftwareengineer?_t=ZS-8uRvIidEiee&_r=1' className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"} cursor-pointer`}>
          <FaTiktok />
        </a>
      </motion.div>
      <section className="container flex flex-col md:flex-row items-center justify-center rounded-lg bg-background h-auto md:h-[600px] w-full">
        {/* Left Section - Text Content */}
        <div className="w-full h-full md:w-1/2 flex flex-col items-center p-6 text-center">
          <div className="max-w-lg space-y-3">
            <BoxReveal boxColor={theme === "dark" ? "#9C27B0" : "#C62828"} duration={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:text-[3.8rem] text-[2.5rem] font-extrabold leading-tight tracking-wide"
              >
                M<span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>.</span> Nauman
              </motion.p>
            </BoxReveal>

            <BoxReveal boxColor={theme === "dark" ? "#9C27B0" : "#C62828"} duration={0.5}>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:text-[1.2rem] text-[.8rem] flex items-center gap-2 font-medium"
              >
                I'm{" "}
                <WordRotate
                  className={`font-bold ${theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"} md:text-[1.5rem] text-[1.2rem]`}
                  words={["Frontend Developer", "Backend Developer", "Full Stack Developer", "Android Developer", "IOS Developer"]}
                />
              </motion.h2>
            </BoxReveal>

            <BoxReveal boxColor={theme === "dark" ? "#9C27B0" : "#C62828"} duration={0.5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-2 text-gray-500 text-left leading-9"
              >
                <p className="md:text-md text-sm">
                  🚀 Full Stack Engineer with{" "}
                  <span className={`font-semibold ${theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}`}>
                    1 year of learning and 2 years of freelancing
                  </span>{" "}
                  experience.
                </p>
                <p className="md:text-md text-sm mt-2">
                  🎓 Enrolled in{" "}
                  <span className={`font-semibold ${theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}`}>
                    BS Computer Science (2022-2026)
                  </span>{" "}
                  at Punjab University, Lahore.
                </p>
                <p className="md:text-md text-sm mt-2">
                  💻 Experienced in{" "}
                  <span className={`font-semibold ${theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}`}>
                    MERN, TypeScript, React Native, Redux Toolkit, Socket.io, Tailwind CSS
                  </span>
                  , and{" "}
                  <span className={`font-semibold ${theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}`}>
                    Framer Motion
                  </span>
                  .
                </p>

              </motion.div>
            </BoxReveal>

            <BoxReveal boxColor={theme === "dark" ? "#9C27B0" : "#C62828"} duration={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  className={`flex items-center justify-center mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r ${theme === "dark" ? "hover:from-[#C62828] hover:to-[#9C27B0] from-[#9C27B0] to-[#1A237E]" : "from-[#C62828] to-[#9C27B0] hover:from-[#9C27B0] hover:to-[#1A237E]"} transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <NavLink to="/resume">
                     Check Out My Resume
                  </NavLink>
                </Button>
              </motion.div>
            </BoxReveal>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="h-full hidden md:flex justify-center w-full md:w-1/2 p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5, }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: [20, -20, 20] }} // Floating effect
            transition={{
              duration: 0.8,
              ease: "easeOut",
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }, // Smooth floating
            }}
            className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-xl overflow-hidden border-[8px] ${theme === "dark" ? "hover:border-[#C62828] border-[#9C27B0]" : "border-[#C62828] hover:border-[#9C27B0]"} transition-all duration-300`}
          >
            {/* Image Overlay Effect */}
            <div className={`inset-0 bg-gradient-to-t ${theme === "dark" ? "from-[#9C27B0]" : "from-[#C62828]"} via-transparent to-transparent opacity-30`} />
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
