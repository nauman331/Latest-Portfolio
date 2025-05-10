import { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/utils/exports";
import { Lens } from "@/components/magicui/lens";
import { ArrowUpRight, Info, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Projects = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const swiperRef = useRef<any>(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalProjects = projects.length;

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, totalProjects));
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
        className="text-4xl mt-28 font-bold text-center mb-4 tracking-tight"
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
            className={`border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col ${theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
              }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-t-2xl">
              <Lens zoomFactor={2.5} lensSize={120} isStatic={false}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </Lens>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className={`px-2 py-0.5 text-xs rounded-full font-medium ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div
              className={`flex justify-between items-center p-4 border-t ${theme === "dark"
                ? "text-gray-100 bg-gray-800 border-gray-700"
                : "bg-gray-100 text-gray-800 border-gray-200"
                }`}
            >
              <button className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium hover:text-gray-700">
                View Project
              </button>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => openModal(project)}
                  className="group"
                  whileHover={{ scale: 1.15 }}
                >
                  <Info size={20} />
                </motion.button>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
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
                    className="group"
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

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div
            className={`${theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
              } p-6 rounded-lg shadow-lg max-w-lg w-full relative`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              {selectedProject.title}
            </h2>
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              className="w-full h-64"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {selectedProject.images?.map((img: string, i: number) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i}`}
                    className="w-full h-full object-cover rounded-md"
                    onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay.start()}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        {visibleProjects < totalProjects ? (
          <button
            onClick={handleShowMore}
            className={`px-6 py-2 font-semibold rounded-lg shadow-md hover:scale-110 transition-all ${theme === "dark"
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
            className="font-semibold hover:underline flex items-center justify-center"
          >
            View More Projects on GitHub <ArrowUpRight className="ml-1" />
          </a>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
