import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingPage({ onExploreClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-r from-blue-700/40 via-cyan-500/30 to-purple-700/40 blur-[180px] top-1/4 left-1/2 -translate-x-1/2 rounded-full" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-xl blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-2xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl px-8 py-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-[0_0_30px_rgba(0,200,255,0.4)]"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Aniket</span>
        </motion.h1>

        {/* Typed text */}
        <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
          <ReactTyped
            strings={["Web Developer", "Programmer", "Tech Enthusiast"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
          I craft modern, interactive, and high-performance web experiences.
          Let's build something extraordinary together.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {[{
            icon: <FaGithub size={34} />, color: "#999"
          }, {
            icon: <FaLinkedin size={34} />, color: "#0A66C2"
          }, {
            icon: <FaInstagram size={34} />, color: "#E1306C"
          }].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.25, color: item.color }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-gray-300 hover:cursor-pointer"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Explore Button */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 18px rgba(0,200,255,0.7)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onExploreClick}
          className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-black shadow-lg hover:shadow-[0_0_20px_rgba(0,200,255,0.5)] transition-all"
        >
          Explore Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
}