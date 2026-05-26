import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, timeline } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
        >
          <div className="relative overflow-hidden rounded-2xl bg-slate-950">
            <img src="/card.jpg" alt={profile.name} className="h-[28rem] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
              <p className="text-sm font-semibold text-cyan-200">About {profile.name}</p>
              <h2 className="mt-2 text-3xl font-black text-white">
                Full-stack craft with MERN focus.
              </h2>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Profile
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            I care about complete features, not only screens.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I am a MERN stack developer building with React, Tailwind, Node.js, Express, MongoDB,
            and modern deployment tools. My goal is to create work that is polished on the frontend,
            reliable on the backend, and easy for a team to understand, test, and improve.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/5"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {timeline.map(({ title, meta, text, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-rose-300/10 text-rose-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-black text-white">{title}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">{meta}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
