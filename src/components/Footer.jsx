import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { scrollToSection } from "../utils/scrollToSection";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            {profile.role} focused on React, Node.js, Express, MongoDB, and deployable product features.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map(({ label, href, icon: Icon, internal }) =>
            internal ? (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(href)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ),
          )}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">
        Copyright {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
