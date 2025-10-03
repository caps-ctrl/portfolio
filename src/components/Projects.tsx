import TrueFocus from "./TrueFocus";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projectsData";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="text-white">
      <TrueFocus
        sentence="My Projects"
        manualMode={false}
        blurAmount={5}
        borderColor="yellow"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <section className="bg-black text-white min-h-screen flex flex-col items-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.Projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-96"
            >
              {/* Project Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full border border-yellow-500 rounded-xl shadow-lg hover:shadow-yellow-500/40 overflow-hidden cursor-pointer bg-black flex flex-col"
                onClick={() =>
                  setActiveProject(activeProject === index ? null : index)
                }
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.Photo}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-yellow-500 text-sm font-medium">
                      View details
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm font-medium flex items-center gap-2"
                    >
                      <FiExternalLink size={16} />
                      Visit Site
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project Modal */}
              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveProject(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ type: "spring", damping: 25 }}
                      className="bg-black border border-yellow-500 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Modal Header */}
                      <div className="relative h-64 sm:h-72">
                        <img
                          src={project.Photo}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-t-xl"
                        />
                        <button
                          onClick={() => setActiveProject(null)}
                          className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2 hover:bg-yellow-400 transition-colors"
                        >
                          <FiX size={20} className="text-black" />
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                          {project.title}
                        </h2>
                        <p className="text-gray-300 mb-6">
                          {project.description}
                        </p>

                        {project.technologies && (
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-yellow-500 mb-3">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-yellow-500 text-black rounded-lg font-medium flex items-center gap-2"
                          >
                            <FiExternalLink size={16} />
                            Live Preview
                          </motion.a>

                          {project.GitHub && (
                            <motion.a
                              href={project.GitHub}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-2.5 border border-yellow-500 text-yellow-500 rounded-lg font-medium flex items-center gap-2"
                            >
                              <FiGithub size={16} />
                              View Code
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
