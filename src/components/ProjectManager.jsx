import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Copy,
  Download,
  EyeOff,
  LockKeyhole,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { projectImageOptions, projectStorageKey } from "../data/portfolio";

const emptyProject = {
  title: "New Project",
  image: "/Portfolio.png",
  github: "",
  demo: "",
  type: "Web application",
  summary: "",
  stack: [],
  impact: [],
};

const listToText = (items) => (Array.isArray(items) ? items.join(", ") : "");

const textToList = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const ownerPinKey = "aniket-owner-pin-v1";

const isOwnerHost = () =>
  ["localhost", "127.0.0.1"].includes(window.location.hostname);

const getStoredPin = () => {
  const pin = window.localStorage.getItem(ownerPinKey);
  return pin ? atob(pin) : "";
};

const setStoredPin = (pin) => {
  window.localStorage.setItem(ownerPinKey, btoa(pin));
};

export default function ProjectManager({ projects, onProjectsChange, onReset }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [drafts, setDrafts] = useState(projects);
  const [message, setMessage] = useState("Unsaved changes stay in this modal until you save.");
  const importInputRef = useRef(null);

  useEffect(() => {
    setDrafts(projects);
  }, [projects]);

  useEffect(() => {
    const openWithShortcut = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "e") {
        event.preventDefault();
        if (isOwnerHost()) setIsOpen(true);
      }
    };

    const openWithHash = () => {
      if (window.location.hash === "#owner-projects") {
        if (isOwnerHost()) setIsOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("keydown", openWithShortcut);
    window.addEventListener("hashchange", openWithHash);
    openWithHash();

    return () => {
      window.removeEventListener("keydown", openWithShortcut);
      window.removeEventListener("hashchange", openWithHash);
    };
  }, []);

  const updateProject = (index, field, value) => {
    setDrafts((current) =>
      current.map((project, projectIndex) =>
        projectIndex === index ? { ...project, [field]: value } : project,
      ),
    );
    setMessage("Unsaved changes stay in this modal until you save.");
  };

  const unlockEditor = (event) => {
    event.preventDefault();

    const storedPin = getStoredPin();
    if (!storedPin) {
      if (pin.length < 4) {
        setPinError("Create a PIN with at least 4 characters.");
        return;
      }

      setStoredPin(pin);
      setIsAuthenticated(true);
      setPin("");
      setPinError("");
      return;
    }

    if (pin !== storedPin) {
      setPinError("Wrong PIN.");
      return;
    }

    setIsAuthenticated(true);
    setPin("");
    setPinError("");
  };

  const saveProjects = () => {
    onProjectsChange(drafts);
    window.localStorage.setItem(projectStorageKey, JSON.stringify(drafts));
    setMessage("Saved to this browser. Refresh the site to confirm persistence.");
  };

  const resetProjects = () => {
    onReset();
    setMessage("Default projects restored.");
    setIsOpen(false);
  };

  const copyJson = async () => {
    await navigator.clipboard.writeText(JSON.stringify(drafts, null, 2));
    setMessage("Project JSON copied. You can keep it as a backup.");
  };

  const exportJson = () => {
    const file = new Blob([JSON.stringify(drafts, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "aniket-projects.json";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Exported aniket-projects.json.");
  };

  const importJson = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const importedProjects = JSON.parse(await file.text());
      if (!Array.isArray(importedProjects)) {
        throw new Error("Project file must contain an array.");
      }

      setDrafts(importedProjects);
      setMessage("Imported projects. Review them, then press Save Projects.");
    } catch {
      setMessage("Import failed. Use a JSON file exported from this tool.");
    } finally {
      event.target.value = "";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog static open={isOpen} onClose={setIsOpen} className="relative z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur"
          />

          <div className="fixed inset-0 overflow-y-auto px-4 py-8">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#090b10] shadow-2xl"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-3 py-1 text-xs font-bold text-rose-100">
                    <EyeOff className="h-3.5 w-3.5" />
                    Hidden owner tool
                  </div>
                  <DialogTitle className="text-2xl font-black text-white">
                    Project Manager
                  </DialogTitle>
                  <p className="mt-1 text-sm text-slate-400">
                    Shortcut: Ctrl + Shift + E. Changes save to this browser.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setDrafts((current) => [...current, { ...emptyProject }])}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/5"
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={copyJson}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/5"
                  >
                    <Copy className="h-4 w-4" />
                    Copy JSON
                  </button>
                  <button
                    type="button"
                    onClick={exportJson}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/5"
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </button>
                  <button
                    type="button"
                    onClick={() => importInputRef.current?.click()}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/5"
                  >
                    <Upload className="h-4 w-4" />
                    Import
                  </button>
                  <input
                    ref={importInputRef}
                    type="file"
                    accept="application/json"
                    onChange={importJson}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={resetProjects}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/5"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white hover:bg-white/5"
                    aria-label="Close project manager"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {!isAuthenticated ? (
                <form onSubmit={unlockEditor} className="mx-auto grid max-w-md gap-4 p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Owner verification</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      This editor only opens on your local machine. Create a PIN the first time,
                      then use the same PIN to unlock it.
                    </p>
                  </div>
                  <label className="grid gap-2 text-sm font-semibold text-slate-300">
                    Owner PIN
                    <input
                      value={pin}
                      onChange={(event) => {
                        setPin(event.target.value);
                        setPinError("");
                      }}
                      type="password"
                      autoFocus
                      className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
                    />
                  </label>
                  {pinError && <p className="text-sm font-semibold text-rose-200">{pinError}</p>}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200"
                  >
                    Unlock Editor
                  </button>
                </form>
              ) : (
                <>
                  <div className="grid gap-4 p-5">
                {drafts.map((project, index) => (
                  <div key={`${project.title}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="font-black text-white">
                        Project {index + 1}: {project.title || "Untitled"}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setDrafts((current) => current.filter((_, i) => i !== index))}
                        className="inline-flex items-center gap-2 rounded-lg border border-rose-300/20 px-3 py-2 text-sm font-bold text-rose-200 hover:bg-rose-300/10"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Title
                        <input
                          value={project.title}
                          onChange={(event) => updateProject(index, "title", event.target.value)}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Type
                        <input
                          value={project.type}
                          onChange={(event) => updateProject(index, "type", event.target.value)}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Live URL
                        <input
                          value={project.demo}
                          onChange={(event) => updateProject(index, "demo", event.target.value)}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        GitHub URL
                        <input
                          value={project.github}
                          onChange={(event) => updateProject(index, "github", event.target.value)}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Screenshot
                        <select
                          value={project.image}
                          onChange={(event) => updateProject(index, "image", event.target.value)}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        >
                          {projectImageOptions.map((image) => (
                            <option key={image} value={image}>
                              {image}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Custom screenshot path
                        <input
                          value={project.image}
                          onChange={(event) => updateProject(index, "image", event.target.value)}
                          placeholder="/my-image.png or https://..."
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300">
                        Tech stack, comma separated
                        <input
                          value={listToText(project.stack)}
                          onChange={(event) => updateProject(index, "stack", textToList(event.target.value))}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300 md:col-span-2">
                        Summary
                        <textarea
                          value={project.summary}
                          onChange={(event) => updateProject(index, "summary", event.target.value)}
                          rows="3"
                          className="resize-none rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-semibold text-slate-300 md:col-span-2">
                        Impact points, comma separated
                        <input
                          value={listToText(project.impact)}
                          onChange={(event) => updateProject(index, "impact", textToList(event.target.value))}
                          className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white outline-none focus:border-cyan-300/50"
                        />
                      </label>
                    </div>
                  </div>
                ))}
                  </div>

                  <div className="flex flex-col gap-3 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-400">{message}</p>
                    <button
                      type="button"
                      onClick={saveProjects}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200"
                    >
                      <Save className="h-4 w-4" />
                      Save Projects
                    </button>
                  </div>
                </>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
