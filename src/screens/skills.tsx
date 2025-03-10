import SkillsComp from "@/components/mycomponents/skills";
import About from "./about";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const Skills = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    return (
        <section className={`${theme === "dark" ? "bg-gray-800": "bg-gray-100"} my-28`}>
            <div className="container">
            <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="text-4xl mt-28 font-bold text-center mb-14 tracking-tight"
        aria-label="My Skills Section"
      >
        My <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>Skills</span>
      </motion.h2>
            {/* Skills Section */}
            <div className="w-full flex items-center justify-center">
                <SkillsComp />
            </div>
            {/* About Section*/}
            <About />
            </div>
        </section>
    );
};

export default Skills;
