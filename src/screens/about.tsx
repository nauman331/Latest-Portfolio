"use client";
import Globe from "@/components/mycomponents/globe";
import AboutText from "@/components/mycomponents/about";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
        className="container flex flex-col md:flex-row items-center justify-center gap-10 py-14">
            
            {/* Left: Globe - Animated Slide In from Left */}
            <motion.div
                className="md:w-[30%] w-full flex justify-center self-start"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Globe />
            </motion.div>

            {/* Right: Text Reveal - Animated Fade In from Right */}
            <div
                className="md:w-[70%] w-full flex items-center justify-center"
                >
                <AboutText />
            </div>
        </section>
    );
};

export default About;
