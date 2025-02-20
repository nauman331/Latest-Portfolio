import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/utils/exports";
import { Lens } from "@/components/magicui/lens";

const Projects = () => {
  return (
    <motion.section
      className="w-full bg-white py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 tracking-tight">
        Featured <span className="text-red-600">Projects</span>
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.025, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
          >
            {/* Image with Zoom Lens */}
            <div className="relative overflow-hidden">
              <Lens
                zoomFactor={3} // More zoom for better clarity
                lensSize={120} // Slightly larger lens for a modern feel
                isStatic={false}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
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

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-gray-100 text-gray-800 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-between items-center p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-500 font-medium">View Project</p>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
