import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";

export default function WhatsAppButton() {
  const href = `https://wa.me/${profile.phone.replace("+", "")}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-slate-950 shadow-[0_16px_40px_rgba(52,211,153,.3)] transition hover:bg-emerald-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
