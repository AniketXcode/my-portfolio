import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React.js", level: "80%" },
  { name: "Node.js", level: "85%" },
  { name: "Express.js", level: "80%" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-black text-white cursor-none"
    >
      {/* Radial Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[900px] h-[900px] bg-gradient-to-r from-blue-800/30 via-cyan-600/20 to-purple-700/20 blur-[160px] rounded-full" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,200,255,0.4)]"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_50px_rgba(0,200,255,0.25)] transition-all"
          >
            {/* Skill Header */}
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-lg text-gray-200">{skill.name}</p>
              <p className="font-semibold text-cyan-300 text-sm">{skill.level}</p>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(0,200,255,0.7)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}