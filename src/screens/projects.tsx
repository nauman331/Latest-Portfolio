"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/utils/exports";
import { Lens } from "@/components/magicui/lens";

const Projects = () => {
  return (
    <motion.section
      className="w-full bg-white py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-gray-900 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Featured <span className="text-[#C62828]">Projects</span>
      </motion.h2>

      {/* Project Cards Grid */}
      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }, // Smoother stagger
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
          >
            {/* Image with Zoom Lens */}
            <div className="relative overflow-hidden">
              <Lens zoomFactor={2.5} lensSize={110} isStatic={false}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </Lens>
            </div>

            {/* Content Wrapper */}
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-snug min-h-[40px]">
                {project.description}
              </p>

              {/* Tech Stack Badges with Bounce Effect */}
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

            {/* Footer Section */}
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
                    transition={{ duration: 0.3, ease: "easeOut" }}
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
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
