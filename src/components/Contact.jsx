import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnpopvj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl md:grid-cols-[.85fr_1.15fr] md:p-8">
        <div className="rounded-2xl bg-slate-950/70 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Let us build full-stack features that ship.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            Have an internship, MERN developer role, freelance task, or project idea? Send a
            message and I will get back to you.
          </p>

          <div className="mt-8 grid gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
            >
              <Linkedin className="h-5 w-5 text-cyan-200" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
            >
              <Github className="h-5 w-5 text-cyan-200" />
              GitHub
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-white"
            >
              <MessageSquare className="h-5 w-5 text-emerald-200" />
              WhatsApp
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4 rounded-2xl bg-slate-950/70 p-6"
        >
          <label className="grid gap-2 text-sm font-semibold text-slate-300">
            Name
            <input
              type="text"
              name="name"
              required
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-300">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-300">
            Message
            <textarea
              name="message"
              rows="6"
              required
              className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              placeholder="Tell me about the role, project, or idea..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200"
              >
                Message sent successfully. I will get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="rounded-xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm font-semibold text-rose-200"
              >
                Message could not be sent. Please try WhatsApp or LinkedIn.
              </motion.p>
            )}
          </AnimatePresence>

          <p className="flex items-center gap-2 text-xs text-slate-500">
            <Mail className="h-4 w-4" />
            Powered by Formspree.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
