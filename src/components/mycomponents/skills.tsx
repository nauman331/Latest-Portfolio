"use client";
import { aboutskills } from "@/utils/exports";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SkillsComp: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {Object.entries(aboutskills).map(([skill, { icon, color }], index) => (
                <motion.div
                    key={index}
                    className={`
                        flex items-center gap-3 rounded-xl px-5 py-4 
                        border shadow-md md:font-semibold text-lg transition-all transform cursor-pointer font-bold
                        ${
                            theme === "dark"
                                ? "text-[#e5e7eb] border-gray-700 bg-[#1f2937]"
                                : "bg-[#e5e7eb] border-gray-300 text-[#1f2937]"
                        }
                    `}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: index * 0.1 }}
                    whileHover={{
                        y: -5,
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    style={{
                        backgroundColor: theme === "dark" ? "#1f2937" : "#e5e7eb",
                        color: theme === "dark" ? "#e5e7eb" : "#1f2937",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = theme === "dark" ? "#1f2937" : "#e5e7eb";
                        e.currentTarget.querySelector("svg")!.style.color = theme === "dark" ? "#1f2937" : "#e5e7eb";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme === "dark" ? "#1f2937" : "#e5e7eb";
                        e.currentTarget.style.color = theme === "dark" ? "#e5e7eb" : "#1f2937";
                        e.currentTarget.querySelector("svg")!.style.color = color;
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
