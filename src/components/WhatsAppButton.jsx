import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9548477167";

  const openChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.button
      onClick={openChat}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-[0_0_20px_rgba(0,255,120,0.5)] hover:shadow-[0_0_30px_rgba(0,255,120,0.8)] backdrop-blur-xl border border-white/10"
    >
      <FaWhatsapp size={30} className="drop-shadow-[0_0_8px_rgba(0,255,120,0.8)]" />
    </motion.button>
  );
}