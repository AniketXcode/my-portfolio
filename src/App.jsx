import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTopButton from "./components/BackToTopButton";
import ProjectManager from "./components/ProjectManager";
import { projectStorageKey, projects as defaultProjects } from "./data/portfolio";

export default function App() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    try {
      const storedProjects = window.localStorage.getItem(projectStorageKey);
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      }
    } catch {
      setProjects(defaultProjects);
    }
  }, []);

  const resetProjects = () => {
    window.localStorage.removeItem(projectStorageKey);
    setProjects(defaultProjects);
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-white selection:bg-cyan-300 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <ProjectManager
        projects={projects}
        onProjectsChange={setProjects}
        onReset={resetProjects}
      />
    </div>
  );
}
