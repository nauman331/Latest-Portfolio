import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/utils/exports";


const Projects = () => {
  return (
    <motion.section 
      className="w-full container px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index} 
          className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-lg">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <FaGithub />
            </a>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
              <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
