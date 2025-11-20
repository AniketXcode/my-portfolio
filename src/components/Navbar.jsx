import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 cursor-none">
      {/* Glow */}
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <div className="absolute w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ left: '50%', top: '10%' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text cursor-pointer"
        >
          Aniket
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item}
                smooth
                duration={500}
                className="relative cursor-pointer text-gray-200 hover:text-white transition group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/70 backdrop-blur-xl border-b border-white/10"
        >
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <Link
              key={item}
              onClick={() => setIsOpen(false)}
              to={item}
              smooth
              duration={500}
              className="text-gray-200 text-xl hover:text-white transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
