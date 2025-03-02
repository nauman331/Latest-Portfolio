"use client";
import { aboutskills } from "@/utils/exports";
import { motion } from "framer-motion";

const SkillsComp: React.FC = () => {
    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {Object.entries(aboutskills).map(([skill, { icon, color }], index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-3 rounded-xl px-5 py-4 
                     bg-[#e5e7eb] border border-gray-300 text-gray-900 shadow-md md:font-semibold text-lg transition-all transform cursor-pointer font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                        y: -5,
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = "#e5e7eb"; // Change text color to white
                        e.currentTarget.querySelector("svg")!.style.color = "#e5e7eb"; // Change icon color to white
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#e5e7eb"; // Reset background
                        e.currentTarget.style.color = "#1f2937"; // Reset text color to default gray-900
                        e.currentTarget.querySelector("svg")!.style.color = color; // Reset icon color
                    }}
                >
                    {icon}
                    <span className="md:text-[1rem] text-[10px]">{skill}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SkillsComp;
