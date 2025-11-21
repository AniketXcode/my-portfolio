import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white cursor-none"
    >
      {/* Subtle radial spotlight */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-800/30 to-cyan-700/20 rounded-full blur-[160px]" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/6 to-black/20 backdrop-blur-3xl border border-white/6 shadow-2xl flex flex-col md:flex-row gap-10"
      >
        {/* Left: image + badges */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6">
          <motion.div
            className="relative"
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-400/40 to-cyan-300/30 blur-2xl -z-10" />
            <img
              src="/profile.jpg"
              alt="Aniket"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-[0_20px_60px_rgba(2,132,199,0.12)]"
            />
          </motion.div>

          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold"></div>
              <div className="text-sm text-gray-300"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold"></div>
              <div className="text-sm text-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200"
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I’m <strong className="text-white">Aniket</strong>, a front-end focused web developer who
            builds crisp, fast, and accessible user interfaces. I enjoy crafting
            delightful interactions, clean visual systems, and writing maintainable code.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/Aniket-Resume.jpg"
              download
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transform transition"
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload /> Resume
            </motion.a>

            <motion.a
              href="#projects"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/10 text-white/90 hover:bg-white/6 transition"
              whileTap={{ scale: 0.97 }}
            >
              See Projects
            </motion.a>
          </div>

          {/* Key skills chips */}
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind', 'Framer Motion', 'Node.js', 'JS/TS'].map((s) => (
              <motion.span
                key={s}
                className="px-3 py-1 rounded-full bg-white/6 text-sm text-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                {s}
              </motion.span>
            ))}
          </div>

          {/* Small accent text */}
          <div className="text-sm text-gray-400">Currently open to internships & frontend roles.</div>
        </div>
      </motion.div>

      {/* Extra styles for subtle cursor glow and floating */}
      <style>{`
        /* soft cursor glow following mouse */
        @keyframes follow {
          to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
