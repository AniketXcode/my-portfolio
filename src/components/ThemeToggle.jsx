import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) document.documentElement.classList.add("dark");

    const listener = (e) => {
      setDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);

    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-[0_0_15px_rgba(0,200,255,0.5)] transition-all"
    >
      {darkMode ? (
        <FaSun className="text-yellow-300 drop-shadow-[0_0_6px_rgba(255,200,0,0.7)]" size={20} />
      ) : (
        <FaMoon className="text-blue-300 drop-shadow-[0_0_8px_rgba(0,150,255,0.6)]" size={20} />
      )}
    </motion.button>
  );
}