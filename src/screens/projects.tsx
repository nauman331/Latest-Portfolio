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
        className="text-4xl mt-28 font-bold text-center mb-14 tracking-tight"
        aria-label="Some of my Projects"
      >
        Featured <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>Projects</span>
        <h6 className="text-sm text-gray-500 p-5">Built from scratch—research, problem-solving, and AI assistance. No tutorials</h6>
      </motion.h2>


      <motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
          >
            <div className="relative overflow-hidden">
              <Lens zoomFactor={2.5} lensSize={110} isStatic={false}>
                <motion.img
                 initial={{opacity: 0, scale: 0.5}}
                 whileInView={{opacity: 1, scale: 1}}
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
              <p className="text-gray-600 text-sm leading-snug min-h-[40px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="px-2.5 py-1 text-xs bg-gray-100 text-gray-800 rounded-md shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-500 font-medium">View Project</p>
              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.15 }}
                  >
                    <FaGithub size={18} />
                  </motion.a>
                )}
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 transition-colors"
                    whileHover={{ scale: 1.15 }}
                  >
                    <FaExternalLinkAlt size={16} />
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
            className="px-6 py-2 bg-[#C62828] text-white font-semibold rounded-lg shadow-md hover:bg-[#A91D1D] transition-all"
          >
            Show More
          </button>
        ) : (
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C62828] font-semibold hover:underline flex items-center justify-center"
          >
            View More Projects on GitHub <ArrowUpRight />
          </a>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
