import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// -------------------- LIQUID GLASS CURSOR --------------------
function LiquidCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 w-24 h-24 
        pointer-events-none 
        rounded-full opacity-70 
        bg-[rgba(0,200,255,0.35)]
        backdrop-blur-xl 
        mix-blend-lighten 
        -translate-x-1/2 -translate-y-1/2
        z-[9999] 
        border border-cyan-300/40 
        shadow-[0_0_40px_rgba(0,200,255,0.4)]
      "
    />
  );
}

// -------------------------- HERO SECTION -------------------------
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white overflow-hidden"
    >
      {/* Liquid Glass Cursor */}
      <LiquidCursor />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,150,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.12),transparent_60%)]" />

      {/* Floating neon particles */}
      <motion.div
        className="absolute w-6 h-6 bg-blue-500/30 rounded-full blur-xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ top: "30%", left: "15%" }}
      />
      <motion.div
        className="absolute w-8 h-8 bg-cyan-500/30 rounded-full blur-xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ bottom: "20%", right: "10%" }}
      />

      {/* MAIN CONTAINER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full max-w-7xl">

        {/* LEFT - TEXT */}
        <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(0,200,255,0.4)]"
          >
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text animate-pulse">
              Aniket
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Developer 💻", 2000,
              "UI/UX Enthusiast 🎨", 2000,
              "Tech Innovator ⚡", 2000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-200 to-blue-300 text-transparent bg-clip-text"
          />

          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            I build futuristic web experiences with smooth animations, clean UI,
            and high-performance code. Your ideas → my execution.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-10 text-4xl text-cyan-400 hidden md:block"
          >
            <FaChevronDown />
          </motion.div>
        </div>

        {/* RIGHT - IMAGE AREA */}
        <div className="flex-1 flex justify-center items-center relative">

          {/* Glowing morphing blob */}
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/40 to-cyan-400/40 rounded-full blur-2xl"
            animate={{ borderRadius: ["40%", "60%", "50%", "35%", "40%"], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Profile image with neon ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 animate-spin-slow"></div>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-[0_0_80px_rgba(0,200,255,0.4)] relative z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
