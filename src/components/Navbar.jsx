import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  return (
    <Disclosure as="header" className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/80 backdrop-blur-xl">
      {({ open, close }) => (
        <>
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
                A
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-white">{profile.name}</span>
                <span className="block text-xs text-slate-400">{profile.role}</span>
              </span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <DisclosureButton
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DisclosureButton>
          </nav>

          <DisclosurePanel
            as={motion.div}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#08090c]/95 px-5 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={() => close()}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
