import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xnnpopvj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-r from-blue-700/30 via-cyan-600/20 to-purple-700/20 blur-[200px] top-1/3 left-1/2 -translate-x-1/2 rounded-full" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,200,255,0.5)]"
      >
        Contact Me
      </motion.h2>

      {/* Form Box */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.03 }}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.03 }}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.02 }}
          className="w-full p-3 mb-6 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(0,200,255,0.6)] transition-all"
        >
          🚀 Send Message
        </motion.button>
      </motion.form>

      {/* Success message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="mt-6 px-6 py-4 rounded-lg bg-green-400/10 border border-green-400/30 text-green-300 backdrop-blur-xl shadow-lg"
          >
            ✅ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra effects */}
      <style>{`
        .contact-glow {
          filter: drop-shadow(0 0 20px rgba(0,200,255,0.5));
        }
      `}</style>
    </section>
  );
}