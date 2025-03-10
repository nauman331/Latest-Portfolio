"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/utils/exports";
import { Lens } from "@/components/magicui/lens";
import { ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Projects = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const totalProjects = projects.length;

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, totalProjects));
  };

  return (
    <motion.section
      className="w-full py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="text-4xl mt-28 font-bold text-center mb-10 tracking-tight"
        aria-label="Some of my Projects"
      >
        Featured{" "}
        <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>
          Projects
        </span>
      </motion.h2>
      <p className="text-sm text-gray-500 text-center mb-10">
        Built from scratch—research, problem-solving, and AI assistance. No tutorials.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col ${
              theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
            }`}
          >
            <div className="relative overflow-hidden">
              <Lens zoomFactor={2.5} lensSize={110} isStatic={false}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </Lens>
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-snug min-h-[40px] dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className={`px-2.5 py-1 text-xs rounded-md shadow-sm ${
                      theme === "dark"
                        ? "text-gray-100 bg-gray-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div
              className={`flex justify-between items-center p-4 border-t ${
                theme === "dark"
                  ? "text-gray-100 bg-gray-800 border-gray-700"
                  : "bg-gray-100 text-gray-800 border-gray-200"
              }`}
            >
              <p className="text-xs text-gray-500 font-medium">
                View Project
              </p>
              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.15 }}
                  >
                    <FaGithub
                      size={18}
                      className={`transition-colors ${
                        theme === "dark"
                          ? "text-gray-200 group-hover:text-white"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    />
                  </motion.a>
                )}
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.15 }}
                  >
                    <FaExternalLinkAlt
                      size={16}
                      className={`transition-colors ${
                        theme === "dark"
                          ? "text-[#9C27B0] group-hover:text-white"
                          : "text-[#C62828] group-hover:text-black"
                      }`}
                    />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        {visibleProjects < totalProjects ? (
          <button
            onClick={handleShowMore}
            className={`px-6 py-2 font-semibold rounded-lg shadow-md hover:scale-110 transition-all ${
              theme === "dark"
                ? "bg-[#9C27B0] text-white hover:bg-purple-700"
                : "bg-[#C62828] text-white hover:bg-red-700"
            }`}
          >
            Show More
          </button>
        ) : (
          <a
            href="https://github.com/nauman331"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold hover:underline flex items-center justify-center ${
              theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"
            }`}
          >
            View More Projects on GitHub <ArrowUpRight className="ml-1" />
          </a>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
