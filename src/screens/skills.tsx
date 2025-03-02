import SkillsComp from "@/components/mycomponents/skills";
import About from "./about";
import { motion } from "motion/react";


const Skills = () => {
    return (
        <section className=" bg-gray-100 my-28">
            <div className="container">
             <motion.h2
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
             className="text-4xl mt-28 font-bold text-center mb-14 text-gray-900 tracking-tight">
        My <span className="text-[#C62828]">Skills</span>
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
