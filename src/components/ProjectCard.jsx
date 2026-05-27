import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
export default function Projects({ projects }) {
  const visibleProjects = Array.isArray(projects) ? projects : [];

  return (
    <section id="projects" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              Featured Work
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Full-stack projects with practical value.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-400">
            Each project highlights the stack, product goal, and engineering value for job screening.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={`${project.title || "project"}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image || "/Portfolio.png"}
                  alt={`${project.title || "Project"} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
                  <Layers3 className="h-3.5 w-3.5" />
                  {project.type || "Web application"}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-black text-white">
                  {project.title || "Untitled Project"}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.summary || "Project summary coming soon."}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(Array.isArray(project.stack) ? project.stack : []).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {(Array.isArray(project.impact) ? project.impact : []).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={project.demo || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2.5 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                    aria-label={`${project.title || "Project"} GitHub repository`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
