import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-16 mt-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-[160px] rounded-full left-1/2 top-0 -translate-x-1/2" />
      </div>

      {/* Separator line with glow */}
      <div className="w-full h-[1px] bg-white/10 mb-10 shadow-[0_0_20px_rgba(0,200,255,0.5)]"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 mb-8"
        >
          {[
            { icon: <FaFacebook />, color: "hover:text-blue-500" },
            { icon: <FaInstagram />, color: "hover:text-pink-500" },
            { icon: <FaTwitter />, color: "hover:text-cyan-400" },
            { icon: <FaLinkedin />, color: "hover:text-blue-600" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2 }}
              className={`text-white text-2xl transition ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-sm"
        >
          © {year} Aniket. All rights reserved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-500 text-xs italic mt-2"
        >
          "Simplicity ✨ fuels the engine 🛠️ of efficiency 🚀."
        </motion.p>
      </div>
    </footer>
  );
}