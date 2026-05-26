import { motion } from "framer-motion";
import { skillGroups, valueCards } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-5 py-20 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-80 bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              Stack
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              MERN skills shown like a real engineering toolkit.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Recruiters should quickly see that you can handle frontend, backend, database,
              deployment, and the glue between them.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map(({ title, skills, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-black text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {valueCards.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <Icon className="h-6 w-6 text-rose-200" />
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
