import {
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Aniket",
  role: "MERN Stack Developer",
  location: "India",
  availability: "Open to full-stack internships and MERN developer roles",
  email: "",
  phone: "+919548477167",
  resume: "/ANIKET-RESUME.pdf",
  github: "https://github.com/AniketXcode",
  linkedin: "https://www.linkedin.com/in/aniketxcode/",
  leetcode: "https://leetcode.com/u/uqHeK1S5S8/",
  intro:
    "I build full-stack MERN applications with React frontends, Node.js/Express APIs, MongoDB data models, authentication flows, and deployment-ready code.",
};

export const navItems = [
  { label: "Home", href: "home" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.leetcode, icon: Code2 },
  { label: "Contact", href: "contact", icon: Mail, internal: true },
];

export const highlights = [
  { label: "Full-stack projects", value: "6+", icon: Blocks },
  { label: "Live deployments", value: "4", icon: Globe2 },
  { label: "Primary stack", value: "MERN", icon: Server },
];

export const projects = [
  {
    title: "Next-Meet",
    image: "/meet.png",
    github: "https://github.com/AniketXcode/Next-Meet.git",
    demo: "https://next-meet-chi.vercel.app/",
    type: "Video meeting platform",
    summary:
      "A real-time collaboration project with meeting flow, responsive React UI, and deployment-focused architecture.",
    stack: ["React", "Node.js", "WebRTC", "Tailwind", "Vercel"],
    impact: ["Real-time communication", "Responsive meeting flow", "Production deployment"],
  },
  {
    title: "Xlense Analytics",
    image: "/xlense.png",
    github: "https://github.com/AniketXcode/Xlense-Analytics.git",
    demo: "https://xlens-alpha.vercel.app/",
    type: "Analytics dashboard",
    summary:
      "A dashboard-style application built around data presentation, reusable UI sections, and clean analysis workflows.",
    stack: ["React", "Charts", "REST APIs", "Tailwind", "Vercel"],
    impact: ["Data-focused interface", "Reusable dashboard layout", "API-ready structure"],
  },
  {
    title: "BlogHub",
    image: "/blog.png",
    github: "https://github.com/AniketXcode/Blog-Hub.git",
    demo: "https://github.com/AniketXcode/Blog-Hub.git",
    type: "Content platform",
    summary:
      "A full-stack blog platform foundation with content structure, backend-ready architecture, and database-driven publishing flow.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: ["MERN architecture", "Content CRUD foundation", "Database-backed workflow"],
  },
];

export const projectStorageKey = "aniket-owner-projects-v1";

export const projectImageOptions = [
  "/meet.png",
  "/xlense.png",
  "/blog.png",
  "/Portfolio.png",
  "/todo.png",
  "/calculator.png",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT/Auth", "Middleware", "Form handling"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Schemas", "CRUD", "JSON", "API integration"],
  },
  {
    title: "Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Vercel", "Render", "ESLint", "Responsive testing"],
  },
];

export const timeline = [
  {
    title: "MERN stack developer",
    meta: "React, Node.js, Express, MongoDB",
    icon: BriefcaseBusiness,
    text:
      "Building end-to-end web applications with reusable React components, backend routes, API integration, and database-backed features.",
  },
  {
    title: "Backend and API practice",
    meta: "REST APIs, auth, CRUD workflows",
    icon: GraduationCap,
    text:
      "Strengthening server-side fundamentals through Express routes, middleware, request validation, authentication patterns, and MongoDB data modeling.",
  },
  {
    title: "Open for opportunities",
    meta: "Full-stack internships and MERN roles",
    icon: Rocket,
    text:
      "Looking for teams where I can contribute to UI, APIs, database flows, debugging, and production-ready feature delivery.",
  },
];

export const valueCards = [
  {
    title: "End-to-end thinking",
    text: "I connect UI screens with API contracts, database structure, validation, and user workflows.",
    icon: Sparkles,
  },
  {
    title: "Production mindset",
    text: "I care about deployable builds, stable layouts, clean code, meaningful errors, and maintainable project structure.",
    icon: BadgeCheck,
  },
  {
    title: "Job-ready workflow",
    text: "I can work across GitHub, deployment platforms, REST APIs, MongoDB, and responsive React UI.",
    icon: Blocks,
  },
];
