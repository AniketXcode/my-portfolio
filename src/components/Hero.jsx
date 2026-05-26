import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { highlights, profile, socials } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 py-20 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm font-medium text-emerald-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building React interfaces that feel sharp, fast, and useful.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_20px_60px_rgba(103,232,249,.25)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            {socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-cyan-200" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/25 via-white/5 to-rose-300/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-[.85fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <img src="/profile.png" alt={profile.name} className="h-full min-h-72 w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm font-medium text-slate-400">Role</p>
                  <p className="mt-2 text-2xl font-black text-white">{profile.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    React, Tailwind, UI polish, motion, and deployable front-end experiences.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {highlights.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="mb-3 h-5 w-5 text-cyan-200" />
                      <p className="text-2xl font-black text-white">{value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
