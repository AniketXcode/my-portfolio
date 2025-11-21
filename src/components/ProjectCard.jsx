import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Next-Meet",
    img: "meet.png",
    github: "https://github.com/AniketXcode/Next-Meet.git",
    demo: "https://next-meet-chi.vercel.app/",
  },
  {
    title: "Xlense Analytics",
    img: "xlense.png",
    github: "https://github.com/AniketXcode/Xlense-Analytics.git",
    demo: "https://github.com/AniketXcode/Xlense-Analytics.git",
  },
  {
    title: "BlogHub",
    img: "blog.png",
    github: "https://github.com/AniketXcode/Blog-Hub.git",
    demo: "https://github.com/AniketXcode/Blog-Hub.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-r from-blue-700/30 via-cyan-500/20 to-purple-700/20 blur-[200px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-blue-300 to-cyan-200 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,200,255,0.4)]"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_50px_rgba(0,200,255,0.25)] transition-all"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-45 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-blue-500 hover:text-black transition-all shadow-lg"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-green-400 hover:text-black transition-all shadow-lg"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}