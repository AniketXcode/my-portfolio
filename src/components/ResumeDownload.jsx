import React from "react";
import { motion } from "framer-motion";

export default function ResumeDownload() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden flex justify-center items-center">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-purple-600/30 blur-[150px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />
      </div>

      {/* Animated floating blobs */}
      <motion.div
        className="absolute top-20 left-16 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-28 h-28 bg-cyan-400/20 rounded-full blur-2xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Main Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-200 text-transparent bg-clip-text">
          Download My Resume
        </h2>

        <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
          Click the button below to get my updated resume in PDF format.
        </p>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(0,255,180,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block"
        >
          <button className="relative group bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,255,150,0.5)] transition-all overflow-hidden">
            Download Resume
            <span className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-70 animate-pulse"></span>
          </button>
        </motion.a>
      </motion.div>
    </section>
  );
}